import Link from "next/link";
import { placeholderImg } from "@/lib/sheets";

export const metadata = {
  title: "Stories - Seattle Unlocked",
  description: "Real people. Real places. No fluff. Local stories from Seattle.",
};

// Stories will eventually come from a CMS (Sanity), hardcoded for now
const STORIES = [
  { id: "bartender", title: "The Bartender Who Knows Everyone", sub: "Hattie's Hat, Ballard", time: "4 min", img: placeholderImg("Bar Portrait", 25, 10), tag: "People" },
  { id: "georgetown", title: "Georgetown Won't Gentrify", sub: "South of I-90, keeping it real", time: "6 min", img: placeholderImg("Georgetown", 160, 140), tag: "Hood" },
  { id: "love-letter", title: "A Love Letter to Free", sub: "Proof that the best things cost $0", time: "5 min", img: placeholderImg("Seattle View", 215, 240), tag: "Guide" },
];

export default function StoriesPage() {
  return (
    <div className="pt-[90px] pb-20 px-5 md:px-[5vw] xl:px-[60px] max-w-[1400px] mx-auto">
      <h1 className="font-serif text-[64px] italic font-normal text-ink m-0 mb-2 leading-none">Local stories</h1>
      <p className="font-sans text-[15px] text-dim m-0 mb-12 max-w-[400px]">Real people. Real places. No fluff.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {STORIES.map((s) => (
          <Link key={s.id} href={`/stories/${s.id}`} className="block relative h-[500px] overflow-hidden no-underline group">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 55%)" }} />
            <div className="absolute bottom-6 left-5 right-5">
              <span className="font-mono text-[9px] text-green uppercase tracking-[0.1em] border border-green px-2 py-[3px]">{s.tag}</span>
              <h3 className="font-serif text-[28px] italic font-normal text-white m-0 mt-3 mb-1.5 leading-[1.15]">{s.title}</h3>
              <p className="font-sans text-[13px] text-white/50 m-0">{s.sub}</p>
              <span className="font-mono text-[9px] text-white/30 mt-2 block uppercase">{s.time} read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
