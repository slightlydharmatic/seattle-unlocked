import { fetchEvents } from "@/lib/sheets";
import { isPastDate } from "@/lib/dates";
import type { SEvent } from "@/lib/types";
import EventsFilter from "./EventsFilter";

export const revalidate = 300;

export const metadata = {
  title: "Events - Seattle Unlocked",
  description: "Every free event in Seattle. Updated daily.",
};

export default async function EventsPage() {
  const events = await fetchEvents();
  const upcoming: SEvent[] = [];
  const past: SEvent[] = [];
  for (const e of events) {
    if (isPastDate(e.date)) past.push(e);
    else upcoming.push(e);
  }
  return <EventsFilter upcoming={upcoming} past={past} />;
}
