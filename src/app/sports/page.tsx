import { fetchSportsSchedules } from "@/lib/sports";
import SportsView from "./SportsView";

export const revalidate = 3600; // revalidate every hour

export const metadata = {
  title: "Sports - Seattle Unlocked",
  description: "Every Seattle sports team schedule. Seahawks, Mariners, Kraken, Sounders, Storm, OL Reign.",
};

export default async function SportsPage() {
  const schedules = await fetchSportsSchedules();
  return <SportsView schedules={schedules} />;
}
