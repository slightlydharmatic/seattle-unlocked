// Brand colors
export const C = {
  green: "#00A85A",
  blue: "#1E56A0",
  sky: "#5B9BD5",
  navy: "#0D2F6B",
  bg: "#F2EDE4",
  ink: "#1A1A18",
  dim: "rgba(26,26,24,0.5)",
  faint: "rgba(26,26,24,0.12)",
  darkBg: "#0C0C0C",
  lt: "#F2EDE4",
  ltDim: "rgba(242,237,228,0.6)",
  ltFaint: "rgba(242,237,228,0.25)",
} as const;

// Beehiiv
export const BEEHIIV_URL = "https://seattle-for-frees-newsletter.beehiiv.com";
export const BEEHIIV_EMBED_URL = "https://seattle-for-frees-newsletter.beehiiv.com/subscribe";

// Google Sheets
export const SHEETS_ID = "1EvpQJgw96NLuN-pNxtUbLXQwgN5BgKBHEt1Ij6cHQTI";

// Seattle sports team IDs for ESPN API
export const SPORTS_TEAMS = [
  { name: "Seahawks", league: "NFL", espnSlug: "football/nfl/teams/26", venue: "Lumen Field", color: "#002244", accent: "#69BE28" },
  { name: "Mariners", league: "MLB", espnSlug: "baseball/mlb/teams/12", venue: "T-Mobile Park", color: "#0C2C56", accent: "#005C5C" },
  { name: "Kraken", league: "NHL", espnSlug: "hockey/nhl/teams/33", venue: "Climate Pledge Arena", color: "#001628", accent: "#99D9D9" },
  { name: "Sounders", league: "MLS", espnSlug: "soccer/usa.1/teams/9726", venue: "Lumen Field", color: "#005595", accent: "#68A42D" },
  { name: "Storm", league: "WNBA", espnSlug: "basketball/wnba/teams/19", venue: "Climate Pledge Arena", color: "#2C5234", accent: "#FEE11A" },
  { name: "OL Reign", league: "NWSL", espnSlug: "soccer/usa.nwsl/teams/5462", venue: "Lumen Field", color: "#21005D", accent: "#CE0E2D" },
] as const;

export const PARTNER_TIERS = [
  { name: "Spotlight", price: "$250-500", features: ["1 featured event/month", "IG story (100K+ impressions)", "Newsletter (71% open rate)", "Event page on site"] },
  { name: "Partner", price: "$750-1,200", popular: true, features: ["Everything in Spotlight", "Dedicated IG Reel", "Homepage placement", "Monthly analytics", "Priority scheduling"] },
  { name: "Presenting", price: "$1,500-2,500", features: ["Everything in Partner", "Co-branded events", "Custom content", "Category exclusivity", "Quarterly strategy"] },
] as const;

export const STATS = [
  { number: "65K+", label: "followers" },
  { number: "300K+", label: "monthly reach" },
  { number: "71%", label: "email open rate" },
  { number: "8K+", label: "saves/post" },
] as const;
