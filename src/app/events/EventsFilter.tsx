"use client";
import { useState, useMemo } from "react";
import type { SEvent } from "@/lib/types";
import { EventRow } from "@/components/EventCard";

type View = "upcoming" | "past";

export default function EventsFilter({ upcoming, past }: { upcoming: SEvent[]; past: SEvent[] }) {
  const [view, setView] = useState<View>("upcoming");
  const [cat, setCat] = useState("All");

  const active = view === "upcoming" ? upcoming : past;
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(active.map((e) => e.cat).filter(Boolean)))],
    [active]
  );
  const filtered = cat === "All" ? active : active.filter((e) => e.cat === cat);

  return (
    <div className="pt-[90px] pb-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
      <h1 className="font-serif text-[64px] italic font-normal text-ink m-0 mb-2 leading-none">What&apos;s on</h1>
      <p className="font-sans text-[15px] text-dim m-0 mb-9 max-w-[400px]">Everything free. Everything real. Go do something.</p>

      {/* Upcoming / Past tabs */}
      <div className="flex gap-8 border-b border-faint mb-8">
        {(["upcoming", "past"] as View[]).map((v) => {
          const count = v === "upcoming" ? upcoming.length : past.length;
          const isActive = view === v;
          return (
            <button
              key={v}
              onClick={() => {
                setView(v);
                setCat("All");
              }}
              className={`font-mono text-[12px] uppercase tracking-[0.1em] pb-3 -mb-px cursor-pointer transition-colors border-b-2 bg-transparent ${
                isActive ? "text-ink border-blue" : "text-dim border-transparent hover:text-ink"
              }`}
            >
              {v} <span className="text-[10px] opacity-60 ml-1">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Category filter */}
      <div className="flex gap-1 flex-wrap mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`font-mono text-[11px] uppercase tracking-[0.05em] px-5 py-2.5 cursor-pointer transition-all border ${
              cat === c
                ? "text-white bg-blue border-blue"
                : "text-dim bg-transparent border-faint hover:border-dim"
            }`}
            style={{ borderRadius: 0 }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="font-mono text-[10px] text-dim uppercase tracking-[0.1em] mb-5">{filtered.length} events</div>
      {filtered.length === 0 ? (
        <div className="font-sans text-dim text-base py-16 text-center">
          {view === "past" ? "No past events to show." : "No upcoming events in this filter yet. Check back soon."}
        </div>
      ) : (
        filtered.map((e, i) => <EventRow key={e.id} event={e} idx={i + 1} />)
      )}
    </div>
  );
}
