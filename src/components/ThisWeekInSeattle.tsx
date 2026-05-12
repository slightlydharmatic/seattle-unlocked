"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { SEvent } from "@/lib/types";
import { placeholderImg } from "@/lib/sheets";

type Filter = "All" | "Events" | "New Businesses" | "Hidden Gems";
const FILTERS: Filter[] = ["All", "Events", "New Businesses", "Hidden Gems"];

// Map category to a friendly emoji used as a card indicator
const CATEGORY_EMOJI: Record<string, string> = {
  Music: "🎺",
  Food: "🌮",
  Art: "🎨",
  Comedy: "🎤",
  Theater: "🎭",
  Outdoor: "🌲",
  Market: "🛍️",
  Business: "🏪",
  Sports: "⚽",
  Film: "🎬",
  Pop: "✨",
};
function emojiFor(cat: string): string {
  const key = Object.keys(CATEGORY_EMOJI).find((k) =>
    cat.toLowerCase().includes(k.toLowerCase())
  );
  return key ? CATEGORY_EMOJI[key] : "✨";
}

function matchesFilter(e: SEvent, filter: Filter): boolean {
  if (filter === "All") return true;
  const cat = (e.cat || "").toLowerCase();
  if (filter === "New Businesses") return cat.includes("business") || cat.includes("opening");
  if (filter === "Hidden Gems") return e.pick === true;
  // "Events" — everything that isn't a new business
  return !cat.includes("business") && !cat.includes("opening");
}

export default function ThisWeekInSeattle({ events }: { events: SEvent[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const visible = useMemo(() => {
    return events.filter((e) => matchesFilter(e, filter)).slice(0, 6);
  }, [events, filter]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="py-20 px-5 md:px-[5vw] xl:px-[60px]" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2
            className="font-sans font-bold text-white leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            This Week in Seattle
          </h2>
          <p className="font-sans text-base md:text-lg text-white/60 mt-4 max-w-[640px]">
            The pulse of what&apos;s happening right now, from pop-ups to hidden gems.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-all ${
                  active
                    ? "bg-blue text-white"
                    : "bg-white/10 text-white/80 hover:bg-white/15"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Card grid */}
        {visible.length === 0 ? (
          <div className="text-white/40 font-sans text-base py-16 text-center">
            No events in this filter yet. Check back soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((e) => {
              const fav = favorites.has(e.id);
              const img = e.img || placeholderImg(e.title || "Seattle", parseInt(e.id) * 30 + 50, parseInt(e.id) * 17 + 30);
              return (
                <Link
                  key={e.id}
                  href={`/events/${e.id}`}
                  className="group block rounded-2xl overflow-hidden no-underline transition-transform hover:-translate-y-1"
                  style={{ background: "#161616" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={e.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    {/* Emoji */}
                    <div className="absolute top-4 left-4 text-3xl drop-shadow-lg">
                      {emojiFor(e.cat)}
                    </div>
                    {/* Heart favorite */}
                    <button
                      onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        toggleFavorite(e.id);
                      }}
                      aria-label={fav ? "Remove favorite" : "Save favorite"}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: fav ? "rgba(0,168,90,0.9)" : "rgba(0,0,0,0.55)" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={fav ? "#fff" : "none"} stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    {e.cat && (
                      <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {e.cat}
                      </span>
                    )}
                    <h3 className="font-sans font-bold text-xl md:text-2xl text-white leading-tight mb-3 tracking-[-0.01em]">
                      {e.title}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-white/60 font-sans">
                      <span>
                        {e.date}
                        {e.time ? `, ${e.time}` : ""}
                      </span>
                      <span>{e.hood || e.spot}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* See all link */}
        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="font-sans font-semibold text-sm text-white/80 no-underline hover:text-white transition-colors"
          >
            See every event &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
