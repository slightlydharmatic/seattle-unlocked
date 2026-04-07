"use client";
import { useState } from "react";
import type { TeamSchedule } from "@/lib/types";
import NewsletterForm from "@/components/NewsletterForm";

export default function SportsView({ schedules }: { schedules: TeamSchedule[] }) {
  const [activeTeam, setActiveTeam] = useState<number | null>(null);
  const expanded = activeTeam !== null ? schedules[activeTeam] : null;

  // Merge all upcoming games into a chronological timeline
  const allGames = schedules
    .flatMap((t) =>
      t.games.slice(0, 2).map((g) => ({
        ...g,
        teamName: t.name,
        league: t.league,
      }))
    )
    .sort((a, b) => {
      // Simple date sort by month/day
      const parseDate = (d: string) => {
        const months: Record<string, number> = { Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };
        const parts = d.split(" ");
        return (months[parts[0]] || 0) * 100 + parseInt(parts[1] || "0");
      };
      return parseDate(a.date) - parseDate(b.date);
    })
    .slice(0, 8);

  return (
    <div className="pt-[90px] pb-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
      <div className="mb-12">
        <span className="font-mono text-[10px] text-green uppercase tracking-[0.15em]">Game day</span>
        <h1 className="font-serif text-[64px] italic font-normal text-ink m-0 mt-1 leading-none">Seattle sports</h1>
        <p className="font-sans text-[15px] text-dim m-0 mt-2 max-w-[440px]">Every team. Every schedule. Know when to show up.</p>
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
              <div className="flex justify-between items-start">
                <div>
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-[0.1em] ${isActive ? "text-green" : "text-dim"}`}>{team.league}</span>
                  <h3 className={`font-serif text-2xl italic font-normal m-0 mt-1 leading-[1.15] ${isActive ? "text-lt" : "text-ink"}`}>{team.name}</h3>
                </div>
                <span className={`font-mono text-lg transition-transform ${isActive ? "text-green rotate-45" : "text-faint"}`}>+</span>
              </div>
              <div className={`font-mono text-[10px] mt-2.5 ${isActive ? "text-lt-dim" : "text-dim"}`}>{team.venue}</div>
              {team.games[0] && (
                <div className={`mt-4 pt-2.5 border-t flex justify-between items-center ${isActive ? "border-lt-faint" : "border-faint"}`}>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.08em] ${isActive ? "text-lt-dim" : "text-dim"}`}>Next up</span>
                  <span className={`font-sans text-[13px] ${isActive ? "text-lt" : "text-ink"}`}>{team.games[0].opponent}</span>
                  <span className="font-mono text-[11px] text-green">{team.games[0].date}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Expanded schedule panel */}
      {expanded && (
        <div className="p-8 md:p-10 mb-[60px]" style={{ background: "var(--dark-bg)" }}>
          <div className="flex flex-wrap justify-between items-end mb-7">
            <div>
              <span className="font-mono text-[9px] text-green uppercase tracking-[0.15em]">{expanded.league} / Upcoming</span>
              <h2 className="font-serif text-4xl italic font-normal text-lt m-0 mt-1 leading-none">{expanded.name}</h2>
            </div>
            <span className="font-mono text-[10px] text-lt-dim">{expanded.venue}</span>
          </div>
          {expanded.games.map((g, i) => (
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
          ))}
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
              <span className="font-serif text-lg italic text-ink">{g.teamName.replace("Seattle ", "")} </span>
              <span className="font-sans text-sm text-dim">{g.opponent}</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-ink">{g.date}</span>
              <span className="font-mono text-[10px] text-dim ml-2.5">{g.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-10 border-t border-faint">
        <h3 className="font-serif text-[28px] italic font-normal text-ink m-0 mb-2">Never miss a game</h3>
        <p className="font-sans text-sm text-dim m-0 mb-5">Seattle sports updates in your inbox every week.</p>
        <NewsletterForm className="max-w-[400px] mx-auto" />
      </div>
    </div>
  );
}
