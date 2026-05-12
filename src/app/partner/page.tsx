import Link from "next/link";
import Image from "next/image";
import CalendlyButton from "@/components/CalendlyButton";
import {
  STATS,
  SHORT_MISSION,
  PERFECT_FOR,
  CASE_STUDY,
  DELIVERABLES,
  PARTNER_FAQ,
  PARTNER_BOOKING_URL,
} from "@/lib/constants";

export const metadata = {
  title: "Partner with Seattle Unlocked",
  description: "Reach 69K Seattleites who actually show up. The Sounders went 6x in one post.",
};

export default function PartnerPage() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section
        className="pt-[120px] pb-20 px-5 md:px-[5vw] xl:px-[60px] relative"
        style={{ background: "var(--dark-bg)" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.18em]">
            Partner with us
          </span>
          <h1
            className="font-serif italic font-normal text-lt leading-[0.95] mt-4 mb-6 max-w-[1100px]"
            style={{ fontSize: "clamp(48px, 8vw, 112px)" }}
          >
            Reach 69K Seattleites who
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--green)" }}>
              actually show up.
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end max-w-[1100px]">
            <p className="font-sans text-base md:text-lg text-lt-dim leading-relaxed max-w-[560px] m-0">
              A 69K-strong community and 955K monthly reach of folks who actually show up.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CalendlyButton
                url={PARTNER_BOOKING_URL}
                className="w-full sm:w-auto font-mono text-[11px] font-bold text-white bg-green border border-green px-7 py-4 no-underline uppercase tracking-[0.12em] hover:brightness-110 transition-all text-center min-h-[48px] flex items-center justify-center cursor-pointer"
              >
                Book a 15-min call
              </CalendlyButton>
              <Link
                href="#case-study"
                className="w-full sm:w-auto font-mono text-[11px] font-bold text-lt bg-transparent border border-lt-faint px-7 py-4 no-underline uppercase tracking-[0.12em] hover:border-lt transition-all text-center min-h-[48px] flex items-center justify-center"
              >
                See the proof
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="flex flex-wrap border-b border-faint bg-bg">
        {STATS.map(({ number, label }, i) => (
          <div
            key={i}
            className={`flex-1 min-w-[160px] py-14 md:py-20 px-6 text-center ${
              i < STATS.length - 1 ? "border-r border-faint" : ""
            }`}
          >
            <div className="font-serif italic text-[64px] md:text-[88px] text-blue leading-none">
              {number}
            </div>
            <div className="font-mono font-bold text-[12px] md:text-[13px] text-ink mt-4 uppercase tracking-[0.14em]">
              {label}
            </div>
          </div>
        ))}
      </section>


      {/* ============ DELIVERABLES (simplified, no preview frames) ============ */}
      <section className="py-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
        <div className="max-w-[700px] mb-12">
          <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.15em]">
            What you get
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-ink mt-2 leading-[1.05] tracking-[-0.015em]">
            How can we get the word out?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-faint">
          {DELIVERABLES.map((d) => (
            <div key={d.title} className="bg-bg p-9">
              <div className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.15em] mb-3">
                {d.label}
              </div>
              <h3 className="font-sans font-semibold text-[26px] text-ink leading-tight mb-3 tracking-[-0.01em]">
                {d.title}
              </h3>
              <p className="font-sans text-sm text-dim leading-relaxed m-0">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CASE STUDY ============ */}
      <section
        id="case-study"
        className="py-24 px-5 md:px-[5vw] xl:px-[60px]"
        style={{ background: "var(--dark-bg)" }}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Logo + bigger kicker */}
          <div className="flex items-center gap-5 mb-10">
            <Image
              src="/partners/sounders2.png"
              alt="Seattle Sounders FC"
              width={144}
              height={144}
              className="w-[112px] h-[112px] md:w-[144px] md:h-[144px] object-contain"
            />
            <span className="font-mono font-bold text-[14px] md:text-[18px] text-green uppercase tracking-[0.2em]">
              {CASE_STUDY.kicker} / {CASE_STUDY.partner}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* LEFT: 6x metric, label, story */}
            <div>
              <div
                className="font-serif italic font-normal text-green leading-[0.85]"
                style={{ fontSize: "clamp(120px, 20vw, 280px)" }}
              >
                {CASE_STUDY.metric}
              </div>
              <div className="font-mono font-bold text-[14px] md:text-[16px] text-lt uppercase tracking-[0.16em] mt-4 mb-10">
                {CASE_STUDY.metricLabel}
              </div>
              <p className="font-sans text-[17px] md:text-[19px] text-lt-dim leading-[1.55] m-0 max-w-[520px]">
                {CASE_STUDY.story}
              </p>
            </div>

            {/* RIGHT: clear, prominent graph */}
            <div className="relative">
              {/* BEFORE row */}
              <div className="mb-10">
                <div className="flex items-end justify-between mb-3">
                  <div className="font-mono font-bold text-[12px] md:text-[14px] text-lt-dim uppercase tracking-[0.18em]">
                    Before
                  </div>
                  <div className="font-serif italic text-[32px] md:text-[40px] text-lt-dim leading-none">
                    100 / day
                  </div>
                </div>
                <div
                  className="h-12 md:h-14"
                  style={{ width: "16.66%", background: "rgba(242,237,228,0.25)" }}
                />
              </div>

              {/* AFTER row */}
              <div className="mb-6">
                <div className="flex items-end justify-between mb-3">
                  <div className="font-mono font-bold text-[12px] md:text-[14px] text-green uppercase tracking-[0.18em]">
                    After
                  </div>
                  <div className="font-serif italic text-[32px] md:text-[40px] text-lt leading-none">
                    600 / day
                  </div>
                </div>
                <div className="relative h-12 md:h-14 bg-green" />
              </div>

              {/* Caption */}
              <div className="font-mono font-bold text-[10px] md:text-[11px] text-lt-dim uppercase tracking-[0.18em] pt-5 border-t border-lt-faint">
                From a single Instagram post
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PERFECT FOR ============ */}
      <section className="py-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
        <div className="max-w-[700px] mb-12">
          <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.15em]">
            Who this is for
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-ink mt-2 leading-[1.05] tracking-[-0.015em]">
            We work best with three kinds of partners.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-faint">
          {PERFECT_FOR.map((p) => (
            <div key={p.title} className="bg-bg p-9">
              <h3 className="font-sans font-semibold text-[26px] text-ink mb-3 leading-tight tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-dim leading-relaxed m-0">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MISSION (tight) ============ */}
      <section
        className="py-20 px-5 md:px-[5vw] xl:px-[60px] text-center"
        style={{ background: "var(--dark-bg)" }}
      >
        <div className="max-w-[900px] mx-auto">
          <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.18em]">
            Our mission
          </span>
          <p className="font-serif italic text-[28px] md:text-[40px] text-lt leading-[1.3] mt-5 m-0">
            {SHORT_MISSION}
          </p>
        </div>
      </section>

      {/* ============ FINAL CTA: TWO PATHS ============ */}
      <section className="py-24 px-5 md:px-[5vw] xl:px-[60px] bg-bg border-t border-faint">
        <div className="max-w-[1100px] mx-auto text-center mb-12">
          <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.18em]">
            Two ways to work with us
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-ink mt-3 leading-[1.05] tracking-[-0.015em]">
            Pick your path
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-faint">
          <div className="bg-bg p-10 md:p-12 flex flex-col">
            <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.16em] mb-3">
              Path A
            </span>
            <h3 className="font-sans font-semibold text-[32px] md:text-[40px] text-ink leading-tight mb-4 tracking-[-0.015em]">
              Get in the monthly round-up.
            </h3>
            <p className="font-sans text-base text-dim leading-relaxed mb-8 flex-1">
              Tell us about your spot for an upcoming round-up. Takes 60 seconds.
            </p>
            <Link
              href="/partner/round-up"
              className="inline-block self-start font-mono font-bold text-[11px] text-ink bg-transparent border border-ink px-8 py-4 no-underline uppercase tracking-[0.14em] hover:bg-ink hover:text-bg transition-all min-h-[48px] flex items-center"
            >
              Fill out the form &rarr;
            </Link>
          </div>

          <div className="bg-bg p-10 md:p-12 flex flex-col">
            <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.16em] mb-3">
              Path B
            </span>
            <h3 className="font-sans font-semibold text-[32px] md:text-[40px] text-ink leading-tight mb-4 tracking-[-0.015em]">
              Book a 15-min call.
            </h3>
            <p className="font-sans text-base text-dim leading-relaxed mb-8 flex-1">
              For a newsletter feature, solo post, Reel, or full collab.
            </p>
            <CalendlyButton
              url={PARTNER_BOOKING_URL}
              className="self-start font-mono font-bold text-[11px] text-white bg-blue border border-blue px-8 py-4 no-underline uppercase tracking-[0.14em] hover:brightness-110 transition-all min-h-[48px] flex items-center cursor-pointer"
            >
              Book a call &rarr;
            </CalendlyButton>
          </div>
        </div>

      </section>


      {/* ============ FAQ (3 tight questions) ============ */}
      <section className="py-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[900px] mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.15em]">
            Quick answers
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-ink mt-2 leading-[1.05] tracking-[-0.015em]">
            Got a question?
          </h2>
        </div>
        <div className="border-t border-faint">
          {PARTNER_FAQ.map((item, i) => (
            <div key={i} className="border-b border-faint py-6">
              <h3 className="font-sans font-semibold text-[22px] text-ink leading-tight mb-2 tracking-[-0.01em]">
                {item.q}
              </h3>
              <p className="font-sans text-base text-dim leading-relaxed m-0">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
