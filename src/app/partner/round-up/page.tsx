import Link from "next/link";
import RoundUpForm from "@/components/RoundUpForm";

export const metadata = {
  title: "Get in the round-up - Seattle Unlocked",
  description:
    "Tell us about your business or event so we can consider it for our weekly and monthly round-ups.",
};

export default function RoundUpPage() {
  return (
    <div className="pt-[120px] pb-24 px-5 md:px-[5vw] xl:px-[60px] max-w-[900px] mx-auto">
      <div className="mb-12">
        <Link
          href="/partner"
          className="font-mono font-bold text-[10px] text-dim uppercase tracking-[0.14em] no-underline hover:text-ink transition-colors"
        >
          ← Back to partner
        </Link>
      </div>

      <div className="mb-14">
        <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.18em]">
          Get in the round-up
        </span>
        <h1 className="font-serif italic font-normal text-ink leading-[1.0] mt-4 mb-5"
            style={{ fontSize: "clamp(48px, 7vw, 88px)" }}>
          Tell us about your spot.
        </h1>
        <p className="font-sans text-base md:text-lg text-dim leading-relaxed max-w-[680px]">
          Our weekly and monthly round-ups feature the businesses, events, and gatherings worth showing up for in Seattle. If you think you belong in there, fill this out and we will take a look. We read every submission.
        </p>
      </div>

      <RoundUpForm />

      <div className="mt-16 pt-10 border-t border-faint">
        <span className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.18em]">
          Looking for more
        </span>
        <h2 className="font-sans font-bold text-[28px] md:text-[36px] text-ink leading-tight mt-3 mb-3 tracking-[-0.015em]">
          If you want a newsletter feature, a solo post, or a collab.
        </h2>
        <p className="font-sans text-base text-dim leading-relaxed max-w-[640px] mb-6">
          Bigger features need a bigger conversation. Book a 15-minute call and we will walk you through what we have done for partners like the Sounders and what we can build for you.
        </p>
        <Link
          href="/partner#case-study"
          className="inline-block font-mono font-bold text-[10px] text-ink bg-transparent border border-ink px-7 py-4 no-underline uppercase tracking-[0.12em] hover:bg-ink hover:text-bg transition-all"
        >
          See the proof first
        </Link>
      </div>
    </div>
  );
}
