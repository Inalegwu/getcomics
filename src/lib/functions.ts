export function isDateInCurrentWeek(date: Date) {
  const now = new Date();
  const startofWeek = new Date(now);
  const endofWeek = new Date(now);

  startofWeek.setDate(now.getDate() - now.getDay());
  startofWeek.setHours(0, 0, 0, 0);

  endofWeek.setDate(startofWeek.getDate() + 6);
  endofWeek.setHours(23, 59, 59, 599);

  return date >= startofWeek && date <= endofWeek;
}