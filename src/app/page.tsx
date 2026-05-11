import Link from "next/link";
import { fetchEvents } from "@/lib/sheets";
import { placeholderImg } from "@/lib/sheets";
import { STATS } from "@/lib/constants";
import { BigCard, EventRow } from "@/components/EventCard";
import Marquee from "@/components/Marquee";
import NewsletterForm from "@/components/NewsletterForm";

export const revalidate = 300;

export default async function HomePage() {
  const events = await fetchEvents();
  const picks = events.filter((e) => e.pick).slice(0, 3);

  while (picks.length < 3) {
    const next = events.find((e) => !picks.includes(e));
    if (next) picks.push(next);
    else break;
  }

  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-between relative px-5 md:px-[5vw] xl:px-[60px] pt-24 pb-[60px] overflow-hidden" style={{ background: "var(--dark-bg)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/kerry-park-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/kerry-park.webm" type="video/webm" />
          <source src="/kerry-park.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)" }} />
        <div className="relative max-w-[1400px] mx-auto w-full flex justify-end" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}>
          <div className="text-right">
            <h1 className="font-serif italic font-normal text-white leading-[0.95] m-0" style={{ fontSize: "clamp(56px, 10vw, 140px)" }}>Seattle</h1>
            <div className="flex items-baseline gap-4 flex-wrap justify-end">
              <span className="font-mono text-[11px] text-white/80 uppercase tracking-[0.12em]">Free events &amp; local stories</span>
              <h1 className="font-serif italic font-normal text-white leading-[0.95] m-0" style={{ fontSize: "clamp(56px, 10vw, 140px)" }}>Unlocked</h1>
            </div>
          </div>
        </div>
        <div className="relative max-w-[1400px] mx-auto w-full" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end mb-12">
            <p className="font-sans text-base text-white/90 leading-relaxed max-w-[380px] m-0">
              Let&apos;s discover the city that&apos;s alive around us.
            </p>
            <NewsletterForm dark />
          </div>
          <div className="font-mono text-[9px] text-white/70 uppercase tracking-[0.15em]">
            Photography: <span className="text-white">@ejimogu_</span>
          </div>
        </div>
      </section>

      <Marquee events={events} />

      {/* PICKS */}
      <section className="py-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="font-mono text-[10px] text-green uppercase tracking-[0.15em]">Curated</span>
            <h2 className="font-serif text-5xl italic font-normal text-ink m-0 mt-1 leading-none">This week&apos;s picks</h2>
          </div>
          <Link href="/events" className="font-mono text-[10px] text-blue no-underline uppercase tracking-[0.1em]">All events &rarr;</Link>
        </div>
        {picks.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-1 h-auto md:h-[600px] mb-1">
            <BigCard event={picks[0]} />
            <div className="grid grid-rows-2 gap-1">
              <BigCard event={picks[1]} />
              <BigCard event={picks[2]} />
            </div>
          </div>
        )}
      </section>

      {/* EVENT LIST */}
      <section className="px-5 md:px-[5vw] xl:px-[60px] pb-20 max-w-[1400px] mx-auto">
        {events.slice(0, 8).map((e, i) => (
          <EventRow key={e.id} event={e} idx={i + 1} />
        ))}
        <div className="mt-8 text-center">
          <Link href="/events" className="inline-block font-mono text-[10px] text-blue bg-transparent border border-blue px-8 py-3.5 no-underline uppercase tracking-[0.12em] hover:bg-blue hover:text-white transition-colors">
            View all events
          </Link>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="py-[60px]" style={{ background: "var(--dark-bg)" }}>
        <div className="font-mono text-[9px] text-lt-faint uppercase tracking-[0.15em] text-center mb-5">
          Seattle through the lens of <span className="text-green">@ejimogu_</span>
        </div>
        <div className="flex gap-1 overflow-x-auto hide-scrollbar px-5 md:px-[5vw] xl:px-[60px]">
          {["Blossoms", "Skyline", "Rainier", "Market", "Night", "Water"].map((label, i) => (
            <div key={i} className="min-w-[300px] h-[220px] shrink-0 overflow-hidden">
              <img src={placeholderImg(label, i * 50 + 100)} alt={label} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="flex flex-wrap border-y border-faint bg-bg">
        {STATS.map(({ number, label }, i) => (
          <div key={i} className={`flex-1 min-w-[140px] py-10 px-6 text-center ${i < STATS.length - 1 ? "border-r border-faint" : ""}`}>
            <div className="font-serif italic text-[44px] text-blue leading-none">{number}</div>
            <div className="font-mono text-[9px] text-dim mt-2 uppercase tracking-[0.12em]">{label}</div>
          </div>
        ))}
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-5 max-w-[700px] mx-auto text-center">
        <h2 className="font-serif text-[40px] italic font-normal text-ink m-0 mb-2.5 leading-[1.1]">Get the inside track</h2>
        <p className="font-sans text-sm text-dim m-0 mb-7">Weekly event drops. Local stories. The stuff your algorithm won&apos;t show you.</p>
        <NewsletterForm className="max-w-[460px] mx-auto" />
        <p className="font-mono text-[9px] text-dim mt-3 uppercase tracking-[0.1em]">1,600+ subscribers / 71% open rate / no spam ever</p>
      </section>
    </div>
  );
}
