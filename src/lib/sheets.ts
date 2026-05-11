import { SHEETS_ID, SHEETS_GID } from "./constants";
import type { SEvent } from "./types";

// Fetch events from the public Google Sheet
// The sheet must be published to the web (File > Share > Publish to web)
// We use the CSV export endpoint which doesn't need an API key
export async function fetchEvents(): Promise<SEvent[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEETS_ID}/gviz/tq?tqx=out:json&gid=${SHEETS_GID}`;
    const res = await fetch(url, { next: { revalidate: 300 } }); // cache 5 min
    const text = await res.text();

    // Google wraps the JSON in a callback like "/*O_o*/\ngoogle.visualization.Query.setResponse({...});"
    // Extract the JSON object by finding the open paren after setResponse and the last close paren.
    const startMarker = "setResponse(";
    const startIdx = text.indexOf(startMarker);
    const endIdx = text.lastIndexOf(")");
    if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
      console.error("Sheets response did not match expected gviz format");
      return getFallbackEvents();
    }
    const jsonStr = text.substring(startIdx + startMarker.length, endIdx);
    const data = JSON.parse(jsonStr);

    if (!data.table?.rows) return getFallbackEvents();

    const cols = data.table.cols.map((c: { label: string }) => c.label.toLowerCase().trim());

    return data.table.rows
      .map((row: { c: Array<{ v: string | number | null } | null> }, idx: number) => {
        const get = (colName: string): string => {
          const i = cols.indexOf(colName.toLowerCase());
          if (i === -1 || !row.c[i]) return "";
          return String(row.c[i]?.v || "").trim();
        };

        return {
          id: get("id") || String(idx + 1),
          title: get("title") || get("event") || get("name"),
          date: get("date"),
          time: get("time"),
          spot: get("spot") || get("venue") || get("location"),
          hood: get("hood") || get("neighborhood") || get("area"),
          cat: get("cat") || get("category") || get("type"),
          img: get("img") || get("image") || "",
          pick: get("pick") === "true" || get("pick") === "TRUE" || get("pick") === "1",
          desc: get("desc") || get("description") || "",
          cost: get("cost") || "Free",
        } as SEvent;
      })
      .filter((e: SEvent) => e.title); // skip empty rows
  } catch (err) {
    console.error("Failed to fetch events from Google Sheets:", err);
    return getFallbackEvents();
  }
}

// Placeholder image generator (until real photos are added)
export function placeholderImg(label: string, h1: number, h2?: number): string {
  const hue2 = h2 ?? h1 + 30;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="hsl(${h1},50%,28%)"/><stop offset="50%" stop-color="hsl(${(h1 + hue2) / 2},45%,18%)"/><stop offset="100%" stop-color="hsl(${hue2},55%,22%)"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><text x="400" y="280" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="hsla(${h1},60%,80%,0.5)">${label}</text><text x="400" y="315" text-anchor="middle" font-family="sans-serif" font-size="12" fill="hsla(${h1},40%,70%,0.3)">@ejimogu_</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Fallback events when Sheets is unavailable
function getFallbackEvents(): SEvent[] {
  return [
    { id: "1", title: "Cherry Blossom & Japanese Cultural Festival", date: "Apr 10", time: "10am", spot: "Seattle Center", hood: "Queen Anne", cat: "Festival", img: "", pick: true, desc: "Tea ceremonies, taiko drumming, and thousands of blossoms in full bloom.", cost: "Free" },
    { id: "2", title: "Belltown Art Walk", date: "Apr 10", time: "6pm", spot: "WeRise Wine Bar", hood: "Belltown", cat: "Art", img: "", pick: false, desc: "Local art installations and natural wines. Emerging BIPOC artists from the PNW.", cost: "Free" },
    { id: "3", title: "DJs in a Dive Bar", date: "Apr 7", time: "9pm", spot: "Blue Moon Tavern", hood: "U-District", cat: "Music", img: "", pick: true, desc: "Three local DJs spin vinyl in one of Seattle's most legendary dive bars. No cover. Just vibes.", cost: "Free" },
    { id: "4", title: "Tulip Festival Parade", date: "Apr 11", time: "11am", spot: "La Conner", hood: "Day Trip", cat: "Festival", img: "", pick: false, desc: "Floats, live music, and fields of color stretching to the horizon.", cost: "Free" },
    { id: "5", title: "Rooftop Sunset Yoga", date: "Apr 12", time: "6:30pm", spot: "Pike Place Rooftop", hood: "Downtown", cat: "Wellness", img: "", pick: true, desc: "Free yoga with panoramic views of Elliott Bay. Mats provided. All levels.", cost: "Free" },
    { id: "6", title: "Bananagrams Club", date: "Apr 6", time: "5pm", spot: "Big Time Brewing", hood: "U-District", cat: "Social", img: "", pick: false, desc: "Craft beer and competitive word games. All skill levels.", cost: "Free" },
    { id: "7", title: "Rat City Artwalk", date: "Apr 16", time: "5pm", spot: "16th Ave SW", hood: "White Center", cat: "Art", img: "", pick: false, desc: "Gallery hopping, street art, live painting in White Center.", cost: "Free" },
    { id: "8", title: "Hidden Door Comedy", date: "Apr 17", time: "8pm", spot: "Aurora Ave N", hood: "Shoreline", cat: "Comedy", img: "", pick: false, desc: "Underground comedy behind an unmarked door. New material from Seattle's best.", cost: "Free" },
    { id: "9", title: "Fremont Vintage Market", date: "Apr 13", time: "10am", spot: "Fremont Canal", hood: "Fremont", cat: "Market", img: "", pick: false, desc: "100+ vendors. Vintage clothing, vinyl, handmade goods, antiques.", cost: "Free" },
    { id: "10", title: "Trivia Night Jeopardy", date: "Apr 16", time: "7pm", spot: "The Sound Hotel", hood: "Belltown", cat: "Social", img: "", pick: false, desc: "Jeopardy-style trivia. Teams of 6. Prizes for top 3.", cost: "Free" },
  ];
}
