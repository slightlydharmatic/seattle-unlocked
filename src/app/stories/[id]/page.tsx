import Link from "next/link";
import { placeholderImg } from "@/lib/sheets";
import { notFound } from "next/navigation";

const STORIES: Record<string, { title: string; sub: string; time: string; img: string; tag: string; body: string[] }> = {
  bartender: {
    title: "The Bartender Who Knows Everyone",
    sub: "Hattie's Hat, Ballard",
    time: "4 min",
    img: placeholderImg("Bar Portrait", 25, 10),
    tag: "People",
    body: [
      "This is where the full story content would live. Rich, editorial writing that makes you feel connected to the city.",
      "Every story on Seattle Unlocked is about the human side of this place. Not reviews. Not rankings. Just real people doing real things.",
    ],
  },
  georgetown: {
    title: "Georgetown Won't Gentrify",
    sub: "South of I-90, keeping it real",
    time: "6 min",
    img: placeholderImg("Georgetown", 160, 140),
    tag: "Hood",
    body: [
      "Georgetown is one of Seattle's oldest neighborhoods, and it wears that history like armor against the wave of change sweeping the city.",
      "Between the art studios and dive bars, there's a community that's held its ground. This is their story.",
    ],
  },
  "love-letter": {
    title: "A Love Letter to Free",
    sub: "Proof that the best things cost $0",
    time: "5 min",
    img: placeholderImg("Seattle View", 215, 240),
    tag: "Guide",
    body: [
      "The best sunset in Seattle costs nothing. The best conversation happens at a free event. The best night out starts with zero cover.",
      "We built Seattle Unlocked on this belief, and 65,000 people seem to agree.",
    ],
  },
};

export default async function StoryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const story = STORIES[id];
  if (!story) return notFound();

  return (
    <div>
      <div className="relative h-[60vh] overflow-hidden" style={{ background: "var(--dark-bg)" }}>
        <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.15) 60%)" }} />
        <div className="absolute top-[72px] left-5 md:left-[5vw] xl:left-[60px]">
          <Link href="/stories" className="font-mono text-[10px] text-green no-underline uppercase">&larr; Back</Link>
        </div>
        <div className="absolute bottom-12 left-0 right-0 px-5 md:px-[5vw] xl:px-[60px]">
          <div className="max-w-[720px] mx-auto">
            <span className="font-mono text-[9px] text-green uppercase tracking-[0.1em] border border-green px-2 py-[3px]">{story.tag}</span>
            <h1 className="font-serif text-[50px] italic font-normal text-white m-0 mt-4 mb-2 leading-[1.05]">{story.title}</h1>
            <p className="font-sans text-[17px] text-lt-dim m-0">{story.sub}</p>
          </div>
        </div>
      </div>
      <div className="max-w-[720px] mx-auto px-5 md:px-[5vw] xl:px-[60px] pt-12 pb-20">
        <div className="font-mono text-[9px] text-dim uppercase tracking-[0.12em] mb-9">Seattle Unlocked / {story.time} read</div>
        <div className="font-sans text-lg text-dim leading-[1.9]">
          {story.body.map((p, i) => (
            <p key={i} className={i < story.body.length - 1 ? "mb-6" : "m-0"}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
