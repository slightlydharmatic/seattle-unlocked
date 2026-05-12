export const metadata = {
  title: "About - Seattle Unlocked",
  description: "We're making Seattle more neighborly, one event and one walk-in at a time.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Dark hero */}
      <div className="relative pt-[140px] pb-20 px-5 md:px-[5vw] xl:px-[60px]" style={{ background: "var(--dark-bg)" }}>
        <div className="max-w-[900px] mx-auto">
          <span className="font-sans font-bold text-[11px] text-green uppercase tracking-[0.18em]">
            About us
          </span>
          <h1
            className="font-serif italic font-normal text-lt leading-[1.0] mt-4 mb-4"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            We&apos;re making Seattle more neighborly.
          </h1>
          <p className="font-sans text-base md:text-lg text-lt-dim leading-relaxed max-w-[600px] m-0">
            Our job is simple. We find the good stuff, then we make sure everyone in the city knows about it.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[820px] mx-auto px-5 md:px-[5vw] xl:px-[60px] pt-16 pb-20">
        <div className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.7] space-y-7">
          <p className="m-0">
            The Seattle Freeze is real. It&apos;s the wall between you and your neighbors. The hellos that never become hangouts. The good things you never quite find.
          </p>
          <p className="m-0">
            We started Seattle Unlocked to fix that. We find the events, the local businesses, and the moments worth showing up for. Then we make sure everyone in this city knows about them.
          </p>
          <p className="m-0">
            We believe cities get warmer when people actually meet. Every Seattleite should know what&apos;s happening in their own backyard. Every spot worth supporting should be impossible to miss.
          </p>
          <p className="m-0">
            69K people are already with us. The good stuff is happening here. We make sure you find it.
          </p>
        </div>

        {/* Founder card */}
        <div className="mt-14 p-8 border border-faint flex gap-6 items-start bg-bg">
          <div className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--blue), var(--green))" }}>
            <span className="font-serif text-2xl italic text-white">D</span>
          </div>
          <div>
            <div className="font-serif text-xl italic text-ink">Dharma</div>
            <div className="font-sans font-bold text-[10px] text-dim uppercase tracking-[0.14em] mb-3">Founder</div>
            <p className="font-sans text-[15px] text-ink leading-[1.7] italic m-0">
              &ldquo;I moved to Seattle and felt the freeze myself. So I built the thing I wished existed.&rdquo;
            </p>
          </div>
        </div>

        {/* Photographer card */}
        <div className="mt-6 p-8 border border-faint bg-bg">
          <div className="font-sans font-bold text-[10px] text-dim uppercase tracking-[0.14em] mb-3">Photographer</div>
          <div className="font-serif text-xl italic text-ink">
            Ej Acholonu <span className="font-sans font-bold text-[11px] text-green">@ejimogu_</span>
          </div>
          <p className="font-sans text-sm text-ink leading-relaxed mt-2 m-0">
            Nigerian-American digital creator. Landscape, lifestyle, and travel photography across the PNW. The reason this site looks the way it does.
          </p>
        </div>
      </div>
    </div>
  );
}
