import dayjs from 'dayjs';

export function getRecurringDates({ frequency, interval, startDate, endDate }) {
  const result = [];
  let current = dayjs(startDate);
  const end = dayjs(endDate);

  while (current.isSameOrBefore(end)) {
    result.push(current.format('YYYY-MM-DD'));
    current = current.add(interval, frequency === 'daily' ? 'day' : frequency);
  }

  return result;
}
