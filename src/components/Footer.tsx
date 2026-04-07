import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-faint max-w-[1400px] mx-auto px-5 md:px-[5vw] xl:px-[60px] pt-12 pb-6">
      <div className="flex justify-between flex-wrap gap-8 mb-9">
        <div>
          <Link href="/" className="flex items-baseline gap-1 no-underline mb-2">
            <span className="font-serif italic text-lg text-ink">Seattle</span>
            <span className="font-mono text-[9px] text-green uppercase tracking-[0.12em]">Unlocked</span>
          </Link>
          <p className="font-mono text-[10px] text-dim max-w-[200px] leading-relaxed">
            Free events. Local stories. The stuff your algorithm won&apos;t show you.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <div className="font-mono text-[9px] text-dim uppercase tracking-[0.12em] mb-2.5">Explore</div>
            {[["Events", "/events"], ["Sports", "/sports"], ["Stories", "/stories"], ["About", "/about"]].map(([label, href]) => (
              <Link key={href} href={href} className="block font-sans text-xs text-ink no-underline py-[3px]">{label}</Link>
            ))}
          </div>
          <div>
            <div className="font-mono text-[9px] text-dim uppercase tracking-[0.12em] mb-2.5">Business</div>
            <Link href="/partner" className="block font-sans text-xs text-ink no-underline py-[3px]">Partner</Link>
          </div>
          <div>
            <div className="font-mono text-[9px] text-dim uppercase tracking-[0.12em] mb-2.5">Connect</div>
            <a href="https://instagram.com/seattleunlocked" target="_blank" rel="noopener noreferrer" className="block font-sans text-xs text-ink no-underline py-[3px]">Instagram</a>
            <a href="https://seattle-for-frees-newsletter.beehiiv.com" target="_blank" rel="noopener noreferrer" className="block font-sans text-xs text-ink no-underline py-[3px]">Newsletter</a>
          </div>
        </div>
      </div>
      <div className="font-mono text-[9px] text-dim uppercase tracking-[0.1em] text-center pt-5 border-t border-faint">
        2026 Seattle Unlocked / Photography: <span className="text-green">@ejimogu_</span> / Made in the PNW
      </div>
    </footer>
  );
}
