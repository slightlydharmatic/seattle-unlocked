import { placeholderImg } from "@/lib/sheets";

export const metadata = {
  title: "About - Seattle Unlocked",
  description: "The city has a warmth problem. We're the fix.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Dark hero */}
      <div className="relative h-[50vh] overflow-hidden" style={{ background: "var(--dark-bg)" }}>
        <img src={placeholderImg("Seattle panoramic", 215, 200)} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.3) 60%)" }} />
        <div className="absolute bottom-12 left-0 right-0 px-5 md:px-[5vw] xl:px-[60px]">
          <div className="max-w-[720px] mx-auto">
            <h1 className="font-serif text-[52px] italic font-normal text-white m-0 leading-[1.05]">The city has a warmth problem. We&apos;re the fix.</h1>
          </div>
        </div>
      </div>

      {/* Cream content */}
      <div className="max-w-[720px] mx-auto px-5 md:px-[5vw] xl:px-[60px] pt-12 pb-20">
        <div className="font-sans text-[17px] text-dim leading-[1.9]">
          <p className="mb-5">They call it the Seattle Freeze. That invisible wall between you and the stranger at the coffee shop. The neighbor you&apos;ve waved at for two years but never actually talked to.</p>
          <p className="mb-5">Seattle Unlocked started as an Instagram page with a simple idea: what if we just told people where to go? Not expensive restaurants or tourist traps. The free, real, human things.</p>
          <p className="m-0">65,000 people turned out to be looking for the same thing. And growing.</p>
        </div>

        {/* Founder card */}
        <div className="mt-12 p-8 border border-faint flex gap-6 items-start">
          <div className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--blue), var(--green))" }}>
            <span className="font-serif text-2xl italic text-white">D</span>
          </div>
          <div>
            <div className="font-serif text-xl italic text-ink">Dharma</div>
            <div className="font-mono text-[9px] text-dim uppercase tracking-[0.1em] mb-3">Founder</div>
            <p className="font-sans text-[15px] text-dim leading-[1.7] italic m-0">&ldquo;I moved to Seattle and felt the freeze myself. Instead of accepting it, I decided to do something about it.&rdquo;</p>
          </div>
        </div>

        {/* Photographer card */}
        <div className="mt-6 p-8 border border-faint">
          <div className="font-mono text-[9px] text-dim uppercase tracking-[0.12em] mb-3">Photographer</div>
          <div className="font-serif text-xl italic text-ink">Ej Acholonu <span className="font-mono text-[11px] text-green">@ejimogu_</span></div>
          <p className="font-sans text-sm text-dim leading-relaxed mt-2">Nigerian-American digital creator. Landscape, lifestyle, and travel photography across the PNW. The reason this site looks the way it does.</p>
        </div>
      </div>
    </div>
  );
}
