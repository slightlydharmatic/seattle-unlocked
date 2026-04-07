import { PARTNER_TIERS } from "@/lib/constants";

export const metadata = {
  title: "Partner - Seattle Unlocked",
  description: "Reach 65K+ engaged Seattleites. Brand partnerships from $250-2,500/mo.",
};

export default function PartnerPage() {
  return (
    <div className="pt-[90px] pb-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
      <div className="max-w-[600px] mb-14">
        <span className="font-mono text-[10px] text-green uppercase tracking-[0.15em]">Partner with us</span>
        <h1 className="font-serif text-[56px] italic font-normal text-ink m-0 mt-2 mb-3.5 leading-none">Your audience is already here</h1>
        <p className="font-sans text-base text-dim leading-relaxed">65K people who actually go outside. 300K monthly reach. 71% email open rate. They don&apos;t just scroll. They show up.</p>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-faint mb-[60px]">
        {PARTNER_TIERS.map((t) => (
          <div key={t.name} className="bg-bg p-9 relative">
            {"popular" in t && t.popular && (
              <div className="absolute top-0 right-0 font-mono text-[8px] font-bold text-white bg-green px-2.5 py-[3px] uppercase tracking-[0.1em]">Popular</div>
            )}
            <h3 className="font-serif text-[28px] italic font-normal text-ink m-0 mb-1">{t.name}</h3>
            <div className="font-mono text-sm text-green mb-6">{t.price}<span className="text-[10px] text-dim">/mo</span></div>
            {t.features.map((f, i) => (
              <div key={i} className="font-sans text-[13px] text-dim py-2 border-b border-faint flex gap-2">
                <span className="text-green font-mono text-[10px]">+</span>{f}
              </div>
            ))}
            <button
              className={`w-full mt-6 font-mono text-[10px] font-bold py-3.5 cursor-pointer uppercase tracking-[0.1em] ${
                "popular" in t && t.popular
                  ? "text-white bg-green border-none"
                  : "text-ink bg-transparent border border-faint"
              }`}
            >
              Let&apos;s talk
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h3 className="font-serif text-[32px] italic font-normal text-ink m-0 mb-2">Ready?</h3>
        <p className="font-sans text-sm text-dim m-0 mb-6">15 minutes. We&apos;ll show you exactly what we can do.</p>
        <button className="font-mono text-[10px] font-bold text-white bg-blue border-none px-9 py-4 cursor-pointer uppercase tracking-[0.1em]">Book a call</button>
      </div>
    </div>
  );
}
