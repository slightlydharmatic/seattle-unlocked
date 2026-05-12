const MONTHS: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

// True if a date string like "May 12" is earlier in the calendar year than today.
// Year-agnostic since the sheet doesn't carry years. Unparseable dates are treated as upcoming.
export function isPastDate(dateStr: string): boolean {
  if (!dateStr) return false;
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length < 2) return false;
  const month = MONTHS[parts[0].slice(0, 3)];
  const day = parseInt(parts[1], 10);
  if (!month || !day) return false;
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const todayDay = now.getDate();
  if (month !== todayMonth) return month < todayMonth;
  return day < todayDay;
}
