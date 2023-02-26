'use client';

const HOUR_MILLISECONDS = 1000 * 60 * 60;
const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export default function Timestamp({ date = new Date().toISOString() }) {
  //@ts-ignore
  const hours = Math.round((new Date(date) - new Date().getTime()) / HOUR_MILLISECONDS
  );

  return <time dateTime={date}>{formatter.format(hours, 'hour')}</time>;
}
