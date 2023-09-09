import format from 'date-fns/format/index';

export const DATE_FORMAT = 'yyyy-MM-dd';

export const getTodaysSeed = (now = Date.now()): string => (
  format(now, DATE_FORMAT)
);
