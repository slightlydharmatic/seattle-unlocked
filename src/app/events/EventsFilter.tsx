"use client";
import { useState } from "react";
import type { SEvent } from "@/lib/types";
import { EventRow } from "@/components/EventCard";

export default function EventsFilter({ events }: { events: SEvent[] }) {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(events.map((e) => e.cat)))];
  const filtered = cat === "All" ? events : events.filter((e) => e.cat === cat);

  return (
    <div className="pt-[90px] pb-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
      <h1 className="font-serif text-[64px] italic font-normal text-ink m-0 mb-2 leading-none">What&apos;s on</h1>
      <p className="font-sans text-[15px] text-dim m-0 mb-9 max-w-[400px]">Everything free. Everything real. Go do something.</p>
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
      {filtered.map((e, i) => (
        <EventRow key={e.id} event={e} idx={i + 1} />
      ))}
    </div>
  );
}
