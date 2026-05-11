import { fetchEvents } from "@/lib/sheets";
import { STATS } from "@/lib/constants";
import ThisWeekInSeattle from "@/components/ThisWeekInSeattle";
import NewsletterForm from "@/components/NewsletterForm";

export const revalidate = 300;

export default async function HomePage() {
  const events = await fetchEvents();

  return (
    <div>
      {/* HERO - Kerry Park video */}
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

      {/* THIS WEEK IN SEATTLE */}
      <ThisWeekInSeattle events={events} />

      {/* STATS */}
      <section className="flex flex-wrap border-y border-faint bg-bg">
        {STATS.map(({ number, label }, i) => (
          <div
            key={i}
            className={`flex-1 min-w-[160px] py-14 md:py-16 px-6 text-center ${i < STATS.length - 1 ? "border-r border-faint" : ""}`}
          >
            <div className="font-serif italic text-[56px] md:text-[80px] text-blue leading-none">{number}</div>
            <div className="font-sans font-bold text-[12px] md:text-[13px] text-ink mt-3 uppercase tracking-[0.14em]">{label}</div>
          </div>
        ))}
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-5 max-w-[720px] mx-auto text-center">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-ink leading-[1.05] tracking-[-0.015em] mb-3">Get the inside track</h2>
        <p className="font-sans text-base md:text-lg text-dim mb-8 max-w-[520px] mx-auto leading-relaxed">Weekly event drops and local stories, straight to your inbox.</p>
        <NewsletterForm className="max-w-[460px] mx-auto" />
        <p className="font-sans font-bold text-[10px] text-dim mt-4 uppercase tracking-[0.14em]">1,600+ subscribers / 71% open rate / no spam</p>
      </section>
    </div>
  );
}
