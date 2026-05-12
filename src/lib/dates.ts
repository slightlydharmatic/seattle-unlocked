const MONTH_NAMES: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

// Parses event date strings into { year, month, day }. Returns null if unparseable.
// Handles: "Apr 10", "April 10, 2026", "4/10/2026", "2026-04-10", and gviz "Date(2026,3,10)"
// (gviz emits this when a sheet cell is typed as Date — month is 0-indexed in that form).
function parseEventDate(s: string): { year: number; month: number; day: number } | null {
  if (!s) return null;
  const str = s.trim();

  // gviz Date constructor — month is 0-indexed here
  const gviz = str.match(/^Date\((\d{4}),\s*(\d{1,2}),\s*(\d{1,2})\)/);
  if (gviz) {
    return { year: parseInt(gviz[1], 10), month: parseInt(gviz[2], 10) + 1, day: parseInt(gviz[3], 10) };
  }

  // ISO: 2026-04-10
  const iso = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (iso) {
    return { year: parseInt(iso[1], 10), month: parseInt(iso[2], 10), day: parseInt(iso[3], 10) };
  }

  // Slash: 4/10/2026 or 4/10/26 or 4/10
  const slash = str.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
  if (slash) {
    let year = slash[3] ? parseInt(slash[3], 10) : new Date().getFullYear();
    if (year < 100) year += 2000;
    return { year, month: parseInt(slash[1], 10), day: parseInt(slash[2], 10) };
  }

  // Named: "Apr 10" / "April 10, 2026" / "April 10 2026"
  const named = str.match(/^([a-zA-Z]+)\s+(\d{1,2})(?:,?\s+(\d{4}))?/);
  if (named) {
    const month = MONTH_NAMES[named[1].slice(0, 3).toLowerCase()];
    if (!month) return null;
    const year = named[3] ? parseInt(named[3], 10) : new Date().getFullYear();
    return { year, month, day: parseInt(named[2], 10) };
  }

  return null;
}

// True if the event date is strictly before today. Unparseable dates are treated as upcoming
// (better to show an unknown-date event than to hide it).
export function isPastDate(dateStr: string): boolean {
  const parsed = parseEventDate(dateStr);
  if (!parsed) return false;
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth() + 1;
  const todayD = now.getDate();
  if (parsed.year !== todayY) return parsed.year < todayY;
  if (parsed.month !== todayM) return parsed.month < todayM;
  return parsed.day < todayD;
}
