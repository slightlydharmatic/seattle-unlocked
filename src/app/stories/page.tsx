export const metadata = {
  title: "Stories - Seattle Unlocked",
  description: "Real people. Real places. No fluff. Coming soon.",
};

export default function StoriesPage() {
  return (
    <div className="pt-[120px] pb-24 px-5 md:px-[5vw] xl:px-[60px] max-w-[900px] mx-auto min-h-[60vh] flex flex-col justify-center">
      <span className="font-sans font-bold text-[11px] text-green uppercase tracking-[0.18em]">
        Local stories
      </span>
      <h1
        className="font-serif italic font-normal text-ink leading-[0.95] mt-4 mb-5"
        style={{ fontSize: "clamp(56px, 9vw, 120px)" }}
      >
        TBD
      </h1>
      <p className="font-sans text-base md:text-lg text-dim leading-relaxed max-w-[560px] m-0">
        We are working on a section dedicated to the people, places, and quiet corners that make Seattle worth knowing. Check back soon.
      </p>
    </div>
  );
}
