/**
 * Returns a formatted date string representing today's date.
 * @param now Optional date object, defaults to the current date and time.
 * @returns Formatted date string.
 */
export const getTodaysSeed = (now: Date = new Date()): string => {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
