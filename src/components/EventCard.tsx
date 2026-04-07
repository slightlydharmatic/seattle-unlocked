"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { SEvent } from "@/lib/types";
import { placeholderImg } from "@/lib/sheets";

export function BigCard({ event }: { event: SEvent }) {
  const [hover, setHover] = useState(false);
  const imgSrc = event.img || placeholderImg(event.cat, hashHue(event.title));

  return (
    <Link
      href={`/events/${event.id}`}
      className="block relative overflow-hidden h-full cursor-pointer no-underline"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={imgSrc}
        alt={event.title}
        className="w-full h-full object-cover block transition-transform duration-700"
        style={{ transform: hover ? "scale(1.04)" : "scale(1)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%)" }} />
      <div className="absolute top-4 left-4 flex gap-1.5">
        <span className="font-mono text-[9px] font-bold text-white bg-green px-2 py-1 uppercase tracking-[0.08em]">{event.cat}</span>
        {event.pick && (
          <span className="font-mono text-[9px] text-green border border-green px-2 py-1 uppercase tracking-[0.08em]">Pick</span>
        )}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.1em] mb-1.5">
          {event.date} / {event.time} / {event.hood}
        </div>
        <h3 className="font-serif text-[28px] font-normal text-white m-0 leading-[1.15] italic">{event.title}</h3>
      </div>
    </Link>
  );
}

export function EventRow({ event, idx }: { event: SEvent; idx: number }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/events/${event.id}`}
      className="grid gap-5 items-center py-[18px] border-b border-faint no-underline transition-all"
      style={{
        gridTemplateColumns: "48px 1fr auto",
        paddingLeft: hover ? 12 : 0,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="font-mono text-[11px] text-faint">{String(idx).padStart(2, "0")}</span>
      <div>
        <h4 className={`font-serif text-[22px] font-normal m-0 leading-[1.2] italic transition-colors ${hover ? "text-blue" : "text-ink"}`}>{event.title}</h4>
        <div className="font-mono text-[10px] text-dim mt-1 uppercase tracking-[0.08em]">{event.spot} / {event.hood}</div>
      </div>
      <div className="text-right">
        <div className="font-mono text-xs text-ink">{event.date}</div>
        <div className="font-mono text-[10px] text-dim">{event.time}</div>
      </div>
    </Link>
  );
}

// Simple hash to get a consistent hue from a string
function hashHue(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash % 360);
}
