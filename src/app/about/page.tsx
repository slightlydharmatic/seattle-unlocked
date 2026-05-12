export const metadata = {
  title: "About - Seattle Unlocked",
  description: "A short, hand-picked rundown of things worth leaving the house for in Seattle.",
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
            Seattle is one of the great cities to be outside in.
          </h1>
          <p className="font-sans text-base md:text-lg text-lt-dim leading-relaxed max-w-[600px] m-0">
            You can be on a trail in an hour, at a market every other street, and doing free yoga in a park. The city is full of people who actually do this stuff, and they&apos;re easier to find than people think.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[820px] mx-auto px-5 md:px-[5vw] xl:px-[60px] pt-16 pb-20">
        <div className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.7] space-y-7">
          <p className="m-0">
            We started this because we kept hearing the same thing from friends: <em>I want to do more, I just don&apos;t know where to look.</em> The good events were out there, scattered across a dozen Instagrams, group chats, and Strava clubs. So we started keeping a list. The runs that turn into beers, the art nights found in coffee shops, and the cultural events that fill you with wonder. The small things happening in parks that never make it onto Eventbrite.
          </p>
          <p className="m-0">
            At some point the list got long enough that it seemed worth sharing.
          </p>
          <p className="m-0">
            That&apos;s all this is: a short, hand-picked rundown of things worth leaving the house for, with a bias toward outside and a bias toward places where you might talk to someone.
          </p>
        </div>

        {/* Honest things */}
        <div className="mt-14">
          <h2 className="font-serif italic text-2xl md:text-3xl text-ink mb-5">A few honest things</h2>
          <ul className="font-sans text-[17px] md:text-[19px] text-ink leading-[1.7] space-y-4 list-disc pl-5">
            <li>
              We pick everything by hand. No algorithm, no scraping, no &ldquo;20 things to do this weekend&rdquo; filler.
            </li>
            <li>
              We&apos;re a small team. We try to get back to every DM and comment, but sometimes it gets a bit much. If you reach out at <a href="mailto:info@seattleunlocked.com" className="text-green underline">info@seattleunlocked.com</a>, we&apos;d love to hear from you.
            </li>
          </ul>
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
