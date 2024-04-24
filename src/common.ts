/**
 * Adds the specified number of days to the current date and time.
 * @param {number} days - The number of days to add.
 * @returns {Date} A new Date object representing the future date and time.
 */
export function addDaysFromNow(days: number) : Date {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}