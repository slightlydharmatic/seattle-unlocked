import { SPORTS_TEAMS } from "./constants";
import type { TeamSchedule, Game } from "./types";

// Fetch live schedules from ESPN's public API
export async function fetchSportsSchedules(): Promise<TeamSchedule[]> {
  const schedules: TeamSchedule[] = [];

  for (const team of SPORTS_TEAMS) {
    // Teams with hand-maintained schedules skip ESPN entirely
    if (team.staticGames && team.staticGames.length > 0) {
      schedules.push({
        name: team.name,
        league: team.league,
        venue: team.venue,
        color: team.color,
        accent: team.accent,
        logo: team.logo,
        games: team.staticGames as unknown as Game[],
      });
      continue;
    }

    // Teams without ESPN coverage and no static schedule fall through to Off Season
    if (!team.espnSlug) {
      schedules.push(getFallbackSchedule(team));
      continue;
    }

    try {
      const url = `https://site.api.espn.com/apis/site/v2/sports/${team.espnSlug}/schedule`;
      const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour

      if (!res.ok) {
        schedules.push(getFallbackSchedule(team));
        continue;
      }

      const data = await res.json();
      const games: Game[] = [];

      const events = data.events || [];
      const now = new Date();

      for (const event of events) {
        const gameDate = new Date(event.date);
        if (gameDate < now) continue;
        if (games.length >= 8) break;

        const competition = event.competitions?.[0];
        if (!competition) continue;

        const homeTeam = competition.competitors?.find((c: { homeAway: string }) => c.homeAway === "home");
        const awayTeam = competition.competitors?.find((c: { homeAway: string }) => c.homeAway === "away");

        // Match against the short name (last word) since names like "Seattle Seahawks" still match shortDisplayName "Seahawks"
        const shortName = team.name.replace(/^Seattle |^West Seattle /, "");
        const isHome = homeTeam?.team?.shortDisplayName === shortName ||
                       homeTeam?.team?.displayName?.includes(shortName);

        const opponent = isHome
          ? awayTeam?.team?.shortDisplayName || awayTeam?.team?.displayName || "TBD"
          : homeTeam?.team?.shortDisplayName || homeTeam?.team?.displayName || "TBD";

        const prefix = isHome ? "vs" : "@";

        games.push({
          opponent: `${prefix} ${opponent}`,
          date: gameDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          time: gameDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase(),
          home: isHome,
          venue: isHome ? team.venue : "",
        });
      }

      schedules.push({
        name: team.name,
        league: team.league,
        venue: team.venue,
        color: team.color,
        accent: team.accent,
        logo: team.logo,
        games: games.length > 0 ? games : getFallbackSchedule(team).games,
      });
    } catch (err) {
      console.error(`Failed to fetch ${team.name} schedule:`, err);
      schedules.push(getFallbackSchedule(team));
    }
  }

  return schedules;
}

// Fallback when ESPN is unavailable
function getFallbackSchedule(team: typeof SPORTS_TEAMS[number]): TeamSchedule {
  return {
    name: team.name,
    league: team.league,
    venue: team.venue,
    color: team.color,
    accent: team.accent,
    logo: team.logo,
    games: [
      { opponent: "Schedule loading...", date: "TBD", time: "TBD", home: true, venue: team.venue },
    ],
  };
}
