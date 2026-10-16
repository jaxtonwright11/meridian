// The public run of show for /conference. Draft until Jax flips `approved`.
// Only items with status "live" render. Every time is Pacific.
// A production build hides the whole section while approved is false.

export interface Track { name: string; line: string }
export interface ScheduleItem {
  time: string;
  title: string;
  body: string;
  status: 'live' | 'check';
  tracks?: Track[];
}

export const schedule: { approved: boolean; items: ScheduleItem[]; allDay: string[] } = {
  approved: false,
  items: [
    { time: '10:30', title: 'Doors Open', body: 'Check in, pick up your name tag, and settle in.', status: 'live' },
    { time: '11:00', title: 'Welcome', body: 'A short welcome and how the day works.', status: 'live' },
    { time: '11:15', title: 'Roundtables', body: 'Small groups by field and goal, each with an executive or host. The first aerospace lab session and the demo day expo run at the same time.', status: 'live' },
    { time: '12:05', title: 'Executive Introductions', body: 'Each executive introduces themselves to the room in under a minute.', status: 'live' },
    { time: '12:35', title: 'Group Photo', body: 'One photo of everyone in the room.', status: 'live' },
    { time: '12:45', title: 'Lunch', body: 'Tables mix field, school, and year, with an executive or host at most of them.', status: 'live' },
    {
      time: '1:20', title: 'Four Things at Once', body: 'Choose what fits you.', status: 'live',
      tracks: [
        { name: 'Demo Day Pitch Session', line: 'Finalists pitch for three minutes each to executives, investors, and press.' },
        { name: 'Workshops', line: 'Short sessions led by executives.' },
        { name: 'Crossover Roundtables', line: 'Fields mixed on purpose, so you meet people whose work you are curious about.' },
        { name: 'Aerospace Design Lab', line: 'The second session, led by NASA engineers.' },
      ],
    },
    { time: '2:05', title: 'Matched Meetings', body: 'Short one-on-one conversations arranged from what you told us when you registered, plus investor office hours, a resume and LinkedIn clinic, and a grad school and research corner.', status: 'check' },
    { time: '2:40', title: 'Closing', body: 'Demo day winners, thank-yous, and a short survey before you go.', status: 'live' },
    { time: '3:00', title: 'Close', body: '', status: 'live' },
  ],
  allDay: [
    'Aerospace design lab, 11:15 to 11:55 and 1:15 to 2:30',
    'Demo day expo, 11:15 to 12:35 and 1:20 to 2:40',
    'Free professional headshots',
    'Partner tables',
    'Vehicles from the Petersen Automotive Museum',
  ],
};
