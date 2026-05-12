export const metadata = {
  title: "About - Seattle Unlocked",
  description: "A hand-picked rundown of things worth leaving the house for in Seattle.",
};

export default function AboutPage() {
  return (
    <div>
      {/* HERO - Space Needle background */}
      <section className="min-h-[85vh] flex flex-col relative px-5 md:px-[5vw] xl:px-[60px] pt-24 pb-[60px] overflow-hidden" style={{ background: "var(--dark-bg)" }}>
        <img
          src="/space-needle.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 65%)" }} />

        <div className="relative flex-1 flex flex-col items-center justify-center text-center max-w-[900px] mx-auto w-full" style={{ textShadow: "0 4px 40px rgba(0,0,0,0.7)" }}>
          <span className="font-sans font-bold text-[11px] text-green uppercase tracking-[0.18em]">
            About us
          </span>
          <h1
            className="font-serif italic font-normal text-white leading-[1.0] mt-5 mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            Seattle is the place to be.
          </h1>
          <p className="font-serif italic text-white/95 max-w-[640px] text-xl md:text-2xl leading-snug m-0">
            But, how easy is it to discover what&apos;s out there?
          </p>
        </div>
      </section>

      {/* THE PREMISE */}
      <section className="max-w-[760px] mx-auto px-5 md:px-[5vw] xl:px-[60px] py-24">
        <h2
          className="font-serif italic text-ink leading-[1.05] mb-8"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          The good stuff is hard to find.
        </h2>
        <div className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.7]">
          <p style={{ marginTop: 0, marginBottom: "2.5em" }}>
            Seattle&apos;s best events are scattered across a dozen sites, group chats, coffee bar postings, and Strava clubs.
          </p>
          <p style={{ marginTop: 0, marginBottom: "2.5em" }}>
            The runs that turn into beers, the art nights in coffee shops, the cultural events that fill you with wonder&hellip; they never make it onto Eventbrite.
          </p>
          <p style={{ margin: 0 }}>
            Seattle Unlocked is a hand-picked rundown of things worth leaving the house for, with a bias toward outside and a bias toward places where you might talk to someone.
          </p>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="bg-bg border-y border-faint">
        <div className="max-w-[1100px] mx-auto px-5 md:px-[5vw] xl:px-[60px] py-24">
          <h2
            className="font-serif italic text-ink leading-[1.05] mb-14 text-center"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            What makes us different.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12">
            <div>
              <h3 className="font-sans font-bold text-[12px] text-green uppercase tracking-[0.18em] mb-3">
                Hand-picked
              </h3>
              <p className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.6] m-0">
                No algorithm, scraping or &lsquo;20 things to do this weekend&rsquo; filler.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-[12px] text-green uppercase tracking-[0.18em] mb-3">
                Built local
              </h3>
              <p className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.6] m-0">
                Picked by people who actually go to these things themselves.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-[12px] text-green uppercase tracking-[0.18em] mb-3">
                Outside-leaning
              </h3>
              <p className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.6] m-0">
                A bias toward trails, parks, water, and places where you might talk to someone.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-[12px] text-green uppercase tracking-[0.18em] mb-3">
                Small team
              </h3>
              <p className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.6] m-0">
                We love our community and want to hear from you! Reach us at{" "}
                <a href="mailto:info@seattleunlocked.com" className="text-green underline">
                  info@seattleunlocked.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO'S BEHIND IT */}
      <section className="max-w-[820px] mx-auto px-5 md:px-[5vw] xl:px-[60px] py-24">
        <h2
          className="font-serif italic text-ink leading-[1.05] mb-10"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Who&apos;s behind it.
        </h2>

        {/* Founder card */}
        <div className="p-8 border border-faint flex gap-6 items-start bg-bg">
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
      </section>
    </div>
  );
}
