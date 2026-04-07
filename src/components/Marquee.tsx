import Link from "next/link";
import type { SEvent } from "@/lib/types";

export default function Marquee({ events }: { events: SEvent[] }) {
  const items = events.slice(0, 6);

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-faint py-3.5 bg-bg">
      <div className="marquee-track">
        {[...items, ...items].map((e, i) => (
          <Link
            key={`${e.id}-${i}`}
            href={`/events/${e.id}`}
            className="inline-flex gap-3 items-baseline mr-12 no-underline"
          >
            <span className="font-mono text-[10px] text-green uppercase">{e.date}</span>
            <span className="font-serif text-lg italic text-ink">{e.title}</span>
            <span className="font-mono text-[10px] text-dim">{e.hood}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
