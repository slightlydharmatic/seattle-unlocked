import { fetchEvents } from "@/lib/sheets";
import { EventRow } from "@/components/EventCard";
import EventsFilter from "./EventsFilter";

export const revalidate = 300;

export const metadata = {
  title: "Events - Seattle Unlocked",
  description: "Every free event in Seattle. Updated daily.",
};

export default async function EventsPage() {
  const events = await fetchEvents();
  return <EventsFilter events={events} />;
}
