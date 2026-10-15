// Confirmed partners only. Nothing goes on this list until the organization
// has said yes in writing. status "live" renders.
//
// TODO(jax): carried over from the previous site. The v2 partner data did not
// arrive, so check this list against it.

export interface Partner { name: string; role: string; status: 'live' | 'check' }

export const partners: Partner[] = [
  { name: 'General Atomics Sciences Education Foundation', role: 'Funder', status: 'live' },
  { name: 'USC NAI', role: 'Bringing students', status: 'live' },
  { name: 'LA Promise Fund', role: 'Bringing students', status: 'live' },
  { name: 'I Have A Dream Foundation LA', role: 'Bringing students', status: 'live' },
  { name: 'MANA de San Diego', role: 'Bringing students', status: 'live' },
  { name: 'San Diego Diplomacy Council', role: 'Bringing students', status: 'live' },
  { name: 'EnCorps', role: 'Running the aerospace design lab', status: 'live' },
  { name: 'Las Fotos Project', role: 'Student photographers on the day', status: 'live' },
  { name: 'Campaign Zero', role: 'Leader joining on November 14', status: 'live' },
  { name: 'LA Clippers', role: 'Raffle items and merch', status: 'live' },
  { name: 'UCLA SOLE', role: 'Campus ally, spreading the word at UCLA', status: 'live' },
  { name: '826LA', role: 'Spreading the word', status: 'live' },
];

export const livePartners = partners.filter((p) => p.status === 'live');
