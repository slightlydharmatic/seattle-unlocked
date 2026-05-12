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

// Booking link — opened in a Calendly popup widget via CalendlyButton.
export const PARTNER_BOOKING_URL = "https://calendly.com/seattleunlocked-info/30min";

// Round-up form submission endpoint. Replace with your Formspree / Tally / Google Sheets webhook.
export const ROUND_UP_FORM_ACTION = "https://formspree.io/f/REPLACE_ME";

// Google Sheets
export const SHEETS_ID = "13KYnpzF9M_BHhsTUP-WJeTytks4owSS9JMDzo18Bc60";
export const SHEETS_GID = "203489713";

// Seattle sports team IDs for ESPN API
export const SPORTS_TEAMS = [
  { name: "Seattle Seahawks", league: "NFL", espnSlug: "football/nfl/teams/26", venue: "Lumen Field", color: "#002244", accent: "#69BE28", logo: "/teams/seahawks.png", staticGames: null },
  { name: "Seattle Mariners", league: "MLB", espnSlug: "baseball/mlb/teams/12", venue: "T-Mobile Park", color: "#0C2C56", accent: "#005C5C", logo: "/teams/mariners.png", staticGames: null },
  { name: "Seattle Kraken", league: "NHL", espnSlug: "hockey/nhl/teams/33", venue: "Climate Pledge Arena", color: "#001628", accent: "#99D9D9", logo: "/teams/kraken.png", staticGames: null },
  { name: "Seattle Sounders", league: "MLS", espnSlug: "soccer/usa.1/teams/9726", venue: "Lumen Field", color: "#005595", accent: "#68A42D", logo: "/teams/sounders.png", staticGames: null },
  { name: "Seattle Storm", league: "WNBA", espnSlug: "basketball/wnba/teams/19", venue: "Climate Pledge Arena", color: "#2C5234", accent: "#FEE11A", logo: "/teams/storm.png", staticGames: null },
  { name: "Seattle Torrent", league: "PWHL", espnSlug: "", venue: "Climate Pledge Arena", color: "#0F4D3F", accent: "#F5EDE0", logo: "/teams/torrent.png", staticGames: null },
  { name: "Seattle Reign FC", league: "NWSL", espnSlug: "soccer/usa.nwsl/teams/5462", venue: "Lumen Field", color: "#21005D", accent: "#CE0E2D", logo: "/teams/ol-reign.png", staticGames: null },
  { name: "Seattle Seawolves", league: "MLR", espnSlug: "", venue: "Starfire Stadium", color: "#001E62", accent: "#C8102E", logo: "/teams/seawolves.png", staticGames: null },
  { name: "UW Gymnastics", league: "NCAA", espnSlug: "", venue: "Alaska Airlines Arena", color: "#4B2E83", accent: "#B7A57A", logo: "/teams/uw-gymnastics.png", staticGames: null },
  {
    name: "West Seattle Junction FC",
    league: "USL2",
    espnSlug: "",
    venue: "Nino Cantu SW Athletic Complex",
    color: "#0A2D5A",
    accent: "#FF6B35",
    logo: "/teams/junction-fc.png",
    staticGames: [
      { opponent: "vs Tacoma Stars",        date: "May 10", time: "5:15 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Midlakes United",     date: "Jun 7",  time: "2:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Ballard FC",          date: "Jun 21", time: "5:15 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Bigfoot FC",          date: "Jul 1",  time: "7:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs FC Olympia",          date: "Jul 5",  time: "2:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Snohomish United",    date: "Jul 10", time: "7:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Portland Bangers FC", date: "Jul 12", time: "2:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
    ],
  },
  {
    name: "West Seattle Rhodies FC",
    league: "USL W",
    espnSlug: "",
    venue: "Nino Cantu SW Athletic Complex",
    color: "#7A2E5C",
    accent: "#E84A8C",
    logo: "/teams/rhodies.png",
    staticGames: [
      { opponent: "vs Tacoma Galaxy",         date: "May 10", time: "1:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Snohomish FC",          date: "May 24", time: "2:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Salmon Bay FC",         date: "Jun 7",  time: "5:15 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Bigfoot FC",            date: "Jun 14", time: "2:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs Portland Cherry Bombs", date: "Jun 21", time: "2:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
      { opponent: "vs FC Olympia",            date: "Jun 24", time: "7:00 pm", home: true, venue: "Nino Cantu SW Athletic Complex" },
    ],
  },
] as const;

export const PARTNER_TIERS = [
  {
    name: "Spotlight",
    price: "$250-500",
    blurb: "One feature. One push. Real signal.",
    features: [
      "1 featured event/month",
      "IG story (100K+ impressions)",
      "Newsletter feature (71% open rate)",
      "Event page on site",
    ],
  },
  {
    name: "Partner",
    price: "$750-1,200",
    blurb: "The sweet spot. Most partners pick this.",
    popular: true,
    features: [
      "Everything in Spotlight",
      "Dedicated IG Reel",
      "Homepage placement",
      "Monthly analytics",
      "Priority scheduling",
    ],
  },
  {
    name: "Presenting",
    price: "$1,500-2,500",
    blurb: "Show up everywhere. Own the category.",
    features: [
      "Everything in Partner",
      "Co-branded events",
      "Custom content",
      "Category exclusivity",
      "Quarterly strategy",
    ],
  },
] as const;

export const STATS = [
  { number: "69K+", label: "followers" },
  { number: "955K", label: "monthly reach" },
  { number: "71%", label: "email open rate" },
  { number: "5K+", label: "saves/post" },
] as const;

// Brand mission (used on partner page, about page, and anywhere we need to speak as us)
export const SHORT_MISSION = `We're on a simple mission. We want to get Seattleites outside experiencing the city. We're here to de-freeze Seattle through discovery.`;

export const MISSION = `We're on a simple mission. We want to get Seattleites, our 69K+ community, outside experiencing the city, and we want to make it easy and accessible to find all of the amazing events and businesses they should know about. We're aiming to de-freeze the city and help people experience the richness of what's already here through discovery.`;

// Who we work best with
export const PERFECT_FOR = [
  {
    title: "Events",
    body: "We fill seats for music, comedy, theater, and festivals.",
  },
  {
    title: "Local Spots",
    body: "We turn followers into walk-ins for cafes, breweries, and restaurants.",
  },
  {
    title: "Agencies",
    body: "We help agencies reach the Seattleites who actually spend money here.",
  },
] as const;

// Featured case study
export const CASE_STUDY = {
  partner: "Seattle Sounders FC",
  kicker: "Case study",
  metric: "6x",
  metricLabel: "daily signups in 24 hours",
  story:
    "The Seattle Sounders ran a sign-up promotion with us when our following was half its current size. One Instagram post took their daily signups from 100 to 600.",
  proof: [
    { label: "before", value: "100/day" },
    { label: "after", value: "600/day" },
    { label: "format", value: "1 IG post" },
  ],
} as const;

// Testimonials (placeholders — fill with real partner quotes)
export const TESTIMONIALS = [
  {
    quote: "REPLACE WITH A REAL PARTNER QUOTE. Keep it 1-2 sentences. Specific result + how they felt working with us.",
    name: "Partner name",
    role: "Title, Company",
  },
  {
    quote: "REPLACE WITH A REAL PARTNER QUOTE. Specific outcome works best (sold out, X signups, Y new customers).",
    name: "Partner name",
    role: "Title, Company",
  },
] as const;

// Logos to drop into the trust strip (file paths in /public). Leave [] until you add real logos.
export const PARTNER_LOGOS: { name: string; src: string }[] = [
  // { name: "Seattle Sounders FC", src: "/partners/sounders.svg" },
  // { name: "Partner Two", src: "/partners/two.svg" },
];

// What you actually get — used by the deliverables section
export const DELIVERABLES = [
  {
    label: "Instagram",
    title: "Story + Reel features",
    body: "Our native-feel stories average over 100K impressions each.",
  },
  {
    label: "Newsletter",
    title: "Inbox spotlight",
    body: "We reach 1,600 subscribers with a 71% open rate.",
  },
  {
    label: "Web",
    title: "Homepage placement",
    body: "Homepage placement plus a dedicated page that stays live.",
  },
] as const;

// What happens after they book a call
export const PROCESS_STEPS = [
  { n: "01", title: "Book a 15-min call", body: "We start with a short conversation to understand your goal, your audience, and your timing, with no pitch deck and no hard sell." },
  { n: "02", title: "We scope it together", body: "We design a partnership scoped to your goals and your budget, whether that is a single feature or a full multi-month campaign." },
  { n: "03", title: "We create the content", body: "We script the content, shoot the assets, and schedule everything around your launch window, and you approve every piece before it goes live." },
  { n: "04", title: "Launch and measure", body: "You receive the campaign reach, saves, signups, and a clear performance report at the end of the engagement." },
] as const;

// Light FAQ
export const PARTNER_FAQ = [
  {
    q: "How quickly can you feature our event?",
    a: "Monthly round-ups post on the last day of the month before. The June round-up posts on May 31st.",
  },
  {
    q: "What type of events do you feature?",
    a: "We carefully curate our features around events that promote community. Our audience loves what we pick.",
  },
] as const;
