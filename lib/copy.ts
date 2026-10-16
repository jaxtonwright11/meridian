import { EVENT_DATE_SHORT, MEETUPS } from '@/config';

export function numWord(n: number) {
  return ({ 6: 'six', 5: 'five', 4: 'four', 7: 'seven' } as Record<number, string>)[n] ?? String(n);
}
export function list(a: string[]) {
  return a.length < 3 ? a.join(' and ') : `${a.slice(0, -1).join(', ')}, and ${a[a.length - 1]}`;
}

/** Plan for after the conference. No counts or cadence: the plan is not confirmed. */
export const EVENTS_SENTENCE =
  `Starting ${EVENT_DATE_SHORT}, Meridian scales from one conference into in-person events by field, beginning with ${list(MEETUPS.firstFields)}. Each brings executives from that field together with students from across Los Angeles campuses, with student teams working the same challenge side by side, and everyone who attends joins the Meridian network.`;

export const NETWORK_SENTENCE =
  'Everyone who attends joins the Meridian network, which connects students to each other and to executives in their field.';
