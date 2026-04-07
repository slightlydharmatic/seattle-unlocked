import Link from "next/link";
import { fetchEvents, placeholderImg } from "@/lib/sheets";
import { notFound } from "next/navigation";

export const revalidate = 300;

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const events = await fetchEvents();
  const event = events.find((e) => e.id === id);

  if (!event) return notFound();

  const imgSrc = event.img || placeholderImg(event.cat, hashHue(event.title));

  return (
    <div>
      {/* Dark image hero */}
      <div className="relative h-[60vh] overflow-hidden" style={{ background: "var(--dark-bg)" }}>
        <img src={imgSrc} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.15) 60%)" }} />
        <div className="absolute top-[72px] left-5 md:left-[5vw] xl:left-[60px]">
          <Link href="/events" className="font-mono text-[10px] text-green no-underline uppercase tracking-[0.1em]">&larr; Back</Link>
        </div>
        <div className="absolute bottom-12 left-0 right-0 px-5 md:px-[5vw] xl:px-[60px]">
          <div className="max-w-[800px] mx-auto">
            <div className="flex gap-2 mb-4">
              <span className="font-mono text-[9px] font-bold text-white bg-green px-2 py-1 uppercase">{event.cat}</span>
              <span className="font-mono text-[9px] text-lt-dim border border-lt-faint px-2 py-1 uppercase">{event.cost || "Free"}</span>
            </div>
            <h1 className="font-serif text-5xl italic font-normal text-white m-0 leading-[1.05]">{event.title}</h1>
          </div>
        </div>
      </div>
      {/* Cream content */}
      <div className="max-w-[800px] mx-auto px-5 md:px-[5vw] xl:px-[60px] pt-12 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-10 bg-faint">
          {[["When", `${event.date} / ${event.time}`], ["Where", event.spot], ["Hood", event.hood], ["Cost", event.cost || "Free"]].map(([label, val]) => (
            <div key={label} className="bg-bg p-5">
              <div className="font-mono text-[9px] text-dim uppercase tracking-[0.12em] mb-1.5">{label}</div>
              <div className={`${label === "Cost" ? "font-serif text-[22px] italic text-green" : "font-sans text-[15px] text-ink"}`}>{val}</div>
            </div>
          ))}
        </div>
        <p className="font-sans text-[17px] text-dim leading-[1.8] mb-10">{event.desc}</p>
        <div className="flex gap-1">
          <button className="font-mono text-[10px] font-bold text-white bg-green border-none px-6 py-3.5 cursor-pointer uppercase tracking-[0.1em]">Save to calendar</button>
          <button className="font-mono text-[10px] text-dim bg-transparent border border-faint px-6 py-3.5 cursor-pointer uppercase tracking-[0.1em]">Share</button>
        </div>
      </div>
    </div>
  );
}

function hashHue(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash % 360);
}
