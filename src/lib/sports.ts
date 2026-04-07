import { SPORTS_TEAMS } from "./constants";
import type { TeamSchedule, Game } from "./types";

// Fetch live schedules from ESPN's public API
export async function fetchSportsSchedules(): Promise<TeamSchedule[]> {
  const schedules: TeamSchedule[] = [];

  for (const team of SPORTS_TEAMS) {
    try {
      const url = `https://site.api.espn.com/apis/site/v2/sports/${team.espnSlug}/schedule`;
      const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour

      if (!res.ok) {
        schedules.push(getFallbackSchedule(team));
        continue;
      }

      const data = await res.json();
      const games: Game[] = [];

      // ESPN schedule API returns events grouped by date
      const events = data.events || [];
      const now = new Date();

      for (const event of events) {
        const gameDate = new Date(event.date);
        if (gameDate < now) continue; // skip past games
        if (games.length >= 8) break; // next 8 games

        const competition = event.competitions?.[0];
        if (!competition) continue;

        const homeTeam = competition.competitors?.find((c: { homeAway: string }) => c.homeAway === "home");
        const awayTeam = competition.competitors?.find((c: { homeAway: string }) => c.homeAway === "away");

        const isHome = homeTeam?.team?.shortDisplayName === team.name ||
                       homeTeam?.team?.displayName?.includes(team.name);

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
        name: `Seattle ${team.name}`,
        league: team.league,
        venue: team.venue,
        color: team.color,
        accent: team.accent,
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
    name: `Seattle ${team.name}`,
    league: team.league,
    venue: team.venue,
    color: team.color,
    accent: team.accent,
    games: [
      { opponent: "Schedule loading...", date: "TBD", time: "TBD", home: true, venue: team.venue },
    ],
  };
}
