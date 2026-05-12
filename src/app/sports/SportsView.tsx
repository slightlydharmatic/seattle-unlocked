"use client";
import { useState } from "react";
import Image from "next/image";
import type { TeamSchedule, Game } from "@/lib/types";
import NewsletterForm from "@/components/NewsletterForm";

export default function SportsView({ schedules }: { schedules: TeamSchedule[] }) {
  const [activeTeam, setActiveTeam] = useState<number | null>(null);
  const expanded = activeTeam !== null ? schedules[activeTeam] : null;

  // Helper: a team is off-season when none of its games have a real date
  const isOffSeason = (t: TeamSchedule) =>
    !t.games.some((g) => g.date && g.date !== "TBD");

  // Merge upcoming real games (TBD filtered out) into a chronological timeline
  const allGames = schedules
    .flatMap((t) =>
      t.games
        .filter((g) => g.date && g.date !== "TBD")
        .slice(0, 2)
        .map((g) => ({
          ...g,
          teamName: t.name,
          league: t.league,
        }))
    )
    .sort((a, b) => {
      const months: Record<string, number> = { Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };
      const parseDate = (d: string) => {
        const parts = d.split(" ");
        return (months[parts[0]] || 0) * 100 + parseInt(parts[1] || "0");
      };
      return parseDate(a.date) - parseDate(b.date);
    })
    .slice(0, 8);

  // Teams currently off-season (for the small "Off Season" callout strip)
  const offSeasonTeams = schedules.filter(isOffSeason);

  // West Seattle FC featured promotion: pull both teams' schedules and combine chronologically
  const wsJunction = schedules.find((s) => s.name === "West Seattle Junction FC");
  const wsRhodies = schedules.find((s) => s.name === "West Seattle Rhodies FC");
  const wsCombinedGames =
    wsJunction && wsRhodies
      ? [
          ...wsJunction.games.map((g) => ({ ...g, team: wsJunction.name, logo: wsJunction.logo, league: wsJunction.league })),
          ...wsRhodies.games.map((g) => ({ ...g, team: wsRhodies.name, logo: wsRhodies.logo, league: wsRhodies.league })),
        ]
          .filter((g) => g.date && g.date !== "TBD")
          .sort((a, b) => {
            const months: Record<string, number> = { Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };
            const parseDate = (d: string) => {
              const parts = d.split(" ");
              return (months[parts[0]] || 0) * 100 + parseInt(parts[1] || "0");
            };
            return parseDate(a.date) - parseDate(b.date);
          })
      : [];

  return (
    <div className="pt-[90px] pb-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
      <div className="mb-12">
        <span className="font-mono text-[10px] text-green uppercase tracking-[0.15em]">Game day</span>
        <h1 className="font-serif text-[64px] italic font-normal text-ink m-0 mt-1 leading-none">Seattle sports</h1>
        <p className="font-sans text-[15px] text-dim m-0 mt-2 max-w-[440px]">Stay up to date with all of your favorite home teams.</p>
      </div>

      {/* Team cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-faint" style={{ marginBottom: activeTeam !== null ? 0 : 60 }}>
        {schedules.map((team, i) => {
          const isActive = activeTeam === i;
          return (
            <div
              key={team.name}
              onClick={() => setActiveTeam(isActive ? null : i)}
              className="cursor-pointer transition-all p-7 md:p-8 relative"
              style={{ background: isActive ? "var(--dark-bg)" : "var(--bg)" }}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={team.logo}
                    alt={team.name}
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain shrink-0"
                  />
                  <div>
                    <span className={`font-mono text-[9px] font-bold uppercase tracking-[0.1em] ${isActive ? "text-green" : "text-dim"}`}>{team.league}</span>
                    <h3 className={`font-serif text-2xl italic font-normal m-0 mt-1 leading-[1.15] ${isActive ? "text-lt" : "text-ink"}`}>{team.name}</h3>
                  </div>
                </div>
                <span className={`font-mono text-lg transition-transform shrink-0 ${isActive ? "text-green rotate-45" : "text-faint"}`}>+</span>
              </div>
              <div className={`font-mono text-[10px] mt-2.5 ${isActive ? "text-lt-dim" : "text-dim"}`}>{team.venue}</div>
              {isOffSeason(team) ? (
                <div className={`mt-4 pt-2.5 border-t flex justify-between items-center ${isActive ? "border-lt-faint" : "border-faint"}`}>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.08em] ${isActive ? "text-lt-dim" : "text-dim"}`}>Status</span>
                  <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${isActive ? "text-green" : "text-green"}`}>Off Season</span>
                </div>
              ) : team.games[0] ? (
                <div className={`mt-4 pt-2.5 border-t flex justify-between items-center ${isActive ? "border-lt-faint" : "border-faint"}`}>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.08em] ${isActive ? "text-lt-dim" : "text-dim"}`}>Next up</span>
                  <span className={`font-sans text-[13px] ${isActive ? "text-lt" : "text-ink"}`}>{team.games[0].opponent}</span>
                  <span className="font-mono text-[11px] text-green">{team.games[0].date}</span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Expanded schedule panel */}
      {expanded && (
        <div className="p-8 md:p-10 mb-[60px]" style={{ background: "var(--dark-bg)" }}>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-7">
            <div className="flex items-center gap-5">
              <Image
                src={expanded.logo}
                alt={expanded.name}
                width={88}
                height={88}
                className="w-16 h-16 md:w-[88px] md:h-[88px] object-contain shrink-0"
              />
              <div>
                <span className="font-mono text-[9px] text-green uppercase tracking-[0.15em]">{expanded.league} / Upcoming</span>
                <h2 className="font-serif text-4xl italic font-normal text-lt m-0 mt-1 leading-none">{expanded.name}</h2>
              </div>
            </div>
            <span className="font-mono text-[10px] text-lt-dim">{expanded.venue}</span>
          </div>
          {isOffSeason(expanded) ? (
            <div className="py-12 text-center border-t border-lt-faint">
              <div className="font-mono text-[11px] text-green uppercase tracking-[0.18em] font-bold">Off Season</div>
              <div className="font-sans text-sm text-lt-dim mt-3">Schedule will drop when the season opens.</div>
            </div>
          ) : (
            expanded.games
              .filter((g) => g.date && g.date !== "TBD")
              .map((g, i) => (
                <div key={i} className="grid gap-4 items-center py-4 border-b border-lt-faint" style={{ gridTemplateColumns: "48px 1fr 100px 80px" }}>
                  <span className="font-mono text-[11px] text-lt-faint">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <span className="font-serif text-xl italic font-normal text-lt">{g.opponent}</span>
                    {g.home && (
                      <span className="font-mono text-[8px] text-green ml-2.5 uppercase tracking-[0.1em] border border-green px-1.5 py-0.5">Home</span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-lt text-right">{g.date}</span>
                  <span className="font-mono text-[11px] text-lt-dim text-right">{g.time}</span>
                </div>
              ))
          )}
        </div>
      )}

      {/* This week timeline */}
      <div className={activeTeam !== null ? "" : ""} style={{ marginBottom: 60 }}>
        <span className="font-mono text-[10px] text-green uppercase tracking-[0.15em]">Coming up</span>
        <h2 className="font-serif text-4xl italic font-normal text-ink m-0 mt-1 mb-6 leading-none">This week in Seattle sports</h2>
        {allGames.map((g, i) => (
          <div key={i} className="grid gap-4 items-center py-3.5 border-b border-faint" style={{ gridTemplateColumns: "48px 1fr auto" }}>
            <span className="font-mono text-[9px] text-green uppercase">{g.league}</span>
            <div>
              <span className="font-serif text-lg italic text-ink">{g.teamName.replace(/^Seattle /, "")} </span>
              <span className="font-sans text-sm text-dim">{g.opponent}</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-ink">{g.date}</span>
              <span className="font-mono text-[10px] text-dim ml-2.5">{g.time}</span>
            </div>
          </div>
        ))}

        {offSeasonTeams.length > 0 && (
          <div className="mt-8 pt-6 border-t border-faint">
            <span className="font-mono text-[10px] text-green uppercase tracking-[0.15em] font-bold">Off Season</span>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {offSeasonTeams.map((t) => (
                <span key={t.name} className="font-sans text-sm text-ink">
                  {t.name.replace(/^Seattle /, "")}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========== WEST SEATTLE FC FEATURED PROMOTION (tighter, free-tickets focus) ========== */}
      {wsJunction && wsRhodies && wsCombinedGames.length > 0 && (
        <div
          className="mb-[60px] p-7 md:p-9"
          style={{ background: "var(--dark-bg)" }}
        >
          {/* Header */}
          <div className="mb-6">
            <span className="font-sans font-bold text-[11px] text-green uppercase tracking-[0.18em]">
              Featured / Free tickets
            </span>
            <h2 className="font-serif italic text-[30px] md:text-[40px] text-lt leading-[1.05] mt-3 mb-3">
              Watch the West Seattle clubs for free this year
            </h2>
            <p className="font-sans text-base text-lt-dim max-w-[640px] leading-relaxed m-0">
              Both teams play at Nino Cantu SW Athletic Complex. Free ticket instructions live on our Instagram.
            </p>
          </div>

          {/* Two team logos, smaller now */}
          <div className="flex items-center gap-6 md:gap-8 mb-7 pb-6 border-b border-lt-faint">
            <Image
              src={wsJunction.logo}
              alt={wsJunction.name}
              width={80}
              height={80}
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />
            <Image
              src={wsRhodies.logo}
              alt={wsRhodies.name}
              width={80}
              height={80}
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />
          </div>

          {/* Combined schedule */}
          <div className="font-sans font-bold text-[11px] text-green uppercase tracking-[0.18em] mb-3">
            Full schedule
          </div>
          <div>
            {wsCombinedGames.map((g, i) => (
              <div
                key={i}
                className="grid gap-3 md:gap-4 items-center py-3.5 border-b border-lt-faint"
                style={{ gridTemplateColumns: "56px 24px 1fr auto" }}
              >
                <span className="font-sans font-bold text-[11px] text-green uppercase tracking-[0.12em]">
                  {g.date}
                </span>
                <Image
                  src={g.logo}
                  alt={g.team}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
                <div className="min-w-0">
                  <span className="font-serif italic text-base text-lt">
                    {g.team.replace(/^West Seattle /, "")}{" "}
                  </span>
                  <span className="font-sans text-sm text-lt-dim">{g.opponent}</span>
                </div>
                <span className="font-sans font-bold text-[10px] text-lt uppercase tracking-[0.1em]">
                  {g.time}
                </span>
              </div>
            ))}
          </div>

          {/* Primary CTA: Instagram free ticket post */}
          <div className="mt-7">
            <a
              href="https://www.instagram.com/p/DX-B55DmG_C/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-bold text-[11px] text-white bg-green border border-green px-7 py-4 no-underline uppercase tracking-[0.12em] hover:brightness-110 transition-all min-h-[48px]"
            >
              See the free ticket post &rarr;
            </a>
            <div className="font-sans text-[13px] text-lt-dim mt-4">
              Or visit each club:{" "}
              <a
                href="https://www.wsjunctionfc.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green no-underline hover:underline"
              >
                Junction FC
              </a>{" "}
              ·{" "}
              <a
                href="https://www.wsrhodiesfc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green no-underline hover:underline"
              >
                Rhodies FC
              </a>
            </div>
          </div>
        </div>
      )}


      {/* CTA */}
      <div className="text-center py-10 border-t border-faint">
        <h3 className="font-serif text-[28px] italic font-normal text-ink m-0 mb-2">Never miss a game</h3>
        <p className="font-sans text-sm text-dim m-0 mb-5">Seattle sports updates in your inbox every week.</p>
        <NewsletterForm className="max-w-[400px] mx-auto" />
      </div>
    </div>
  );
}
