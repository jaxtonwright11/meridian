// Leader roster. Data, never hardcoded in components.
//
// Order is roster order (best known first); the tail stays last.
// A photo renders only when photoApproved is true. A bio renders only when
// bioApproved is true. Nothing here is ever shown as a placeholder face.
//
// TODO(jax): this roster was built from meridian-leader-bios.md plus names in
// the brief. The v2 brief (31 confirmed leaders, with titles) did not arrive,
// so titles marked null are missing, and the count is lower than 31.

export interface Leader {
  slug: string;
  name: string;
  /** Display titles, most important first. roles[0] is the one-line title. */
  roles: string[];
  bio?: string;
  bioApproved: boolean;
  photo?: string;
  photoApproved: boolean;
  status: 'confirmed' | 'check';
}

const p = (slug: string) => `/opt/people/${slug}.webp`;

export const leaders: Leader[] = [
  {
    slug: 'george-leis',
    name: 'George Leis',
    roles: ['Chairman, YMCA of the USA', 'President, Cal Private Bank'],
    // Approved by Jax (brief section 15). Last two sentences removed.
    bio: 'George was the first person to believe in this conference and in the student building it. He put in the first $1,000, which is what made the first event possible at all.\n\nHe has never treated it as a donation and walked away. Every time Jaxton is in town they meet, without exception, and he was there at his high school graduation.',
    bioApproved: true,
    photo: p('george-leis'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'alex-mcdowell',
    name: 'Alex McDowell',
    roles: ['Production Designer, Minority Report and Fight Club', 'Professor, USC School of Cinematic Arts'],
    bio: 'Alex McDowell is a production designer whose work includes Minority Report, Fight Club, The Crow, and Man of Steel. He is a Professor of Practice at the USC School of Cinematic Arts, where he directs the World Building Media Lab, and a Royal Designer for Industry, the United Kingdom’s highest honor for designers.',
    bioApproved: false,
    photo: p('alex-mcdowell'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'deray-mckesson',
    name: 'DeRay Mckesson',
    roles: ['CEO, Campaign Zero'], // TODO(jax): his organization lists Executive Director
    bio: 'DeRay Mckesson is a co-founder of Campaign Zero, a policy platform focused on reducing police violence, and a longtime organizer from Baltimore. He hosts the podcast Pod Save the People, wrote the book On the Other Side of Freedom, and is a graduate of Bowdoin College.',
    bioApproved: false,
    photo: p('deray-mckesson'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'rosaly-lopes',
    name: 'Dr. Rosaly Lopes',
    roles: ['Senior Research Scientist, NASA Jet Propulsion Laboratory'],
    bio: 'Dr. Rosaly Lopes is a planetary geologist and volcanologist and a Senior Research Scientist at NASA’s Jet Propulsion Laboratory. She worked on the Galileo mission to Jupiter and the Cassini mission to Saturn, and received the American Astronomical Society’s Carl Sagan Medal for communicating science to the public.',
    bioApproved: false,
    photo: p('rosaly-lopes'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'paul-rusnak',
    name: 'Paul Rusnak',
    roles: ['Founder, Rusnak Auto Group'], // TODO(jax): roster said CEO; public sources say chairman
    bio: 'Paul Rusnak is the founder of Rusnak Auto Group, a family-owned luxury automotive group based in Southern California. He began his career in the auto industry in 1959 and built the group from a single dealership.',
    bioApproved: false,
    photo: p('paul-rusnak'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'david-lash',
    name: 'David Lash',
    roles: ['Managing Counsel for Pro Bono and Public Interest Services, O’Melveny & Myers'],
    bio: 'David Lash oversees O’Melveny & Myers’ national and international pro bono program. He previously served as executive director of Bet Tzedek, one of the largest legal services agencies in the country, and was named to the Los Angeles Business Journal’s 2024 Top 100 Lawyers list.',
    bioApproved: false,
    photo: p('david-lash'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'tony-shriller',
    name: 'Tony Shriller',
    roles: ['Founder, Shriller Creative', 'Comedian and TEDx Speaker'],
    bio: 'Tony Shriller is a stand-up comedian, TEDx speaker, and the founder of Shriller Creative, which helps speakers and experts turn their ideas into content. His first stand-up special, filmed at the Ice House in Pasadena, was released in 2024.',
    bioApproved: false,
    photo: p('tony-shriller'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'carlos-gonzales',
    name: 'Carlos Gonzales',
    roles: ['Vice President of Manufacturing, The Peggs Company'],
    // No bio yet. Name, title and photo only.
    bioApproved: false,
    photo: p('carlos-gonzales'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'chris-swain',
    name: 'Chris Swain',
    roles: ['Co-founder, EA Game Innovation Lab', 'USC Iovine and Young Academy'],
    bio: 'Chris Swain is a professor at the USC Iovine and Young Academy, where he teaches innovation and venture development. He co-founded the Electronic Arts Game Innovation Lab at USC, has co-founded three venture-backed companies, and was an early member of the design firm R/GA.',
    bioApproved: false,
    photo: p('chris-swain'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'michael-kang',
    name: 'Michael Kang',
    roles: ['Graduate Director of Film and Television Production, LMU School of Film and Television'],
    bio: 'Michael Kang is a filmmaker and the Graduate Director of Film and Television Production at Loyola Marymount University. His first feature film, The Motel, premiered at the Sundance Film Festival and won the Humanitas Prize.',
    bioApproved: false,
    photo: p('michael-kang'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'paul-pereira',
    name: 'Paul C. Pereira, JD',
    roles: ['SVP, Patient Advocacy and Government Affairs, Ardelyx'],
    bio: 'Paul Pereira is Senior Vice President of Patient Advocacy and Government Affairs at Ardelyx. Earlier in his career he led patient advocacy at Saniona and at Vertex Pharmaceuticals.',
    bioApproved: false,
    photo: p('paul-pereira'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'ellen-junn',
    name: 'Ellen Junn',
    roles: ['Former President, California State University, Stanislaus'],
    bio: 'Dr. Ellen Junn served as the 11th president of California State University, Stanislaus, from 2016 to 2023, and was the first Korean American woman to lead a four-year public university in the United States. Her 37 years in the California State University system included provost roles at San José State and Dominguez Hills.',
    bioApproved: false,
    photo: p('ellen-junn'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'yan-searcy',
    name: 'Dr. Yan Searcy',
    roles: ['Dean, California State University, Northridge'],
    bio: 'Dr. Yan Searcy is Dean of the College of Social and Behavioral Sciences at California State University, Northridge, a role he has held since 2018. He holds degrees from the University of Notre Dame, the University of Wisconsin-Madison, and the University of Chicago.',
    bioApproved: false,
    photo: p('yan-searcy'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'bob-dodge',
    name: 'Dr. Bob Dodge',
    roles: ['President, Physicians for Social Responsibility Los Angeles'],
    bio: 'Dr. Bob Dodge is a family physician in Ventura and the President of Physicians for Social Responsibility Los Angeles. He also co-chairs a national committee of Physicians for Social Responsibility and writes regularly on public health and peace.',
    bioApproved: false,
    photo: p('bob-dodge'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'joe-killinger',
    name: 'Joe Killinger',
    roles: ['Co-founder, Commercial Brokers International'],
    bio: 'Joe Killinger is a co-founder of Commercial Brokers International, a commercial real estate brokerage based in Los Angeles. He has worked in commercial real estate for more than three decades as a broker, investor, and operator.',
    bioApproved: false,
    photo: p('joe-killinger'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'jody-stiger',
    name: 'Jody Stiger',
    roles: ['Deputy Chief, Administrative Services Division, LA Metro Department of Public Safety'],
    bio: 'Jody Stiger is Deputy Chief of the Administrative Services Division at LA Metro. He is a Marine Corps veteran with a 29-year career at the Los Angeles Police Department, and previously served as Systemwide Director of Community Safety at the University of California Office of the President.',
    bioApproved: false,
    photo: p('jody-stiger'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'laura-barry',
    name: 'Laura Barry',
    roles: ['Realtor, Barry Estates, Rancho Santa Fe'],
    bio: 'Laura Barry is an owner of Barry Estates in Rancho Santa Fe, where she specializes in luxury homes. She is consistently ranked among the top-producing agents in San Diego County and is a graduate of UC San Diego.',
    bioApproved: false,
    photo: p('laura-barry'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'troy-palmquist',
    name: 'Troy Palmquist',
    roles: ['Founder, HomeCode Advisors'],
    bio: 'Troy Palmquist is the founder of HomeCode Advisors, which helps real estate teams and proptech companies grow. He previously served as a vice president at eXp Realty and founded two brokerages in Ventura County, The Address and DOORA.',
    bioApproved: false,
    photo: p('troy-palmquist'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'rich-block',
    name: 'Rich Block',
    roles: ['Former President, Santa Barbara Zoo'],
    bioApproved: false,
    photoApproved: false,
    status: 'confirmed',
  },
  {
    slug: 'tama-hasson',
    name: 'Tama Hasson',
    roles: [], // TODO(jax): title and bio were not in the bios file I received
    bioApproved: false,
    photo: p('tama-hasson'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'michael-ayad',
    name: 'Dr. Michael Ayad',
    roles: [], // TODO(jax): title lives in the v2 roster
    bioApproved: false,
    photoApproved: false,
    status: 'confirmed',
  },
  {
    slug: 'sheena-franklin',
    name: 'Sheena D. Franklin',
    roles: [], // TODO(jax): title lives in the v2 roster
    bioApproved: false,
    photoApproved: false,
    status: 'confirmed',
  },
  // Tail of the roster stays last, in this order.
  {
    slug: 'jimmy-ellis',
    name: 'Jimmy Ellis',
    roles: [], // TODO(jax): title and bio were not in the bios file I received
    photo: p('jimmy-ellis'),
    photoApproved: true,
    bioApproved: false,
    status: 'confirmed',
  },
  {
    slug: 'jack-rosenthal',
    name: 'Jack Rosenthal',
    roles: [], // TODO(jax): title lives in the v2 roster
    bioApproved: false,
    photoApproved: false,
    status: 'confirmed',
  },
  {
    slug: 'chelsea-amihere',
    name: 'Chelsea Amihere',
    roles: [], // TODO(jax): title lives in the v2 roster
    bioApproved: false,
    photoApproved: false,
    status: 'confirmed',
  },
  {
    slug: 'naveen-vetcha',
    name: 'Dr. Naveen Vetcha',
    roles: ['NASA Marshall Space Flight Center'],
    bio: 'Dr. Naveen Vetcha is an aerospace engineer who supports NASA’s Marshall Space Flight Center, where his work has included rocket engine analysis and NASA’s Centennial Challenges program. He earned his master’s degree and PhD in mechanical engineering at UCLA and was named one of 35 space professionals under 35 by the International Institute of Space Commerce in 2018.',
    bioApproved: false,
    photo: p('naveen-vetcha'),
    photoApproved: true,
    status: 'confirmed',
  },
  {
    slug: 'ep-mcknight',
    name: 'EP McKnight', // TODO(jax): roster said "Dr."; her public bio lists no doctorate
    roles: ['Author, Playwright, and Motivational Speaker'],
    bio: 'EP McKnight is a poet, actress, playwright, and motivational speaker. She tours her one-woman play I Question America, about civil rights leader Fannie Lou Hamer, which she has performed at more than eighty colleges and universities.',
    bioApproved: false,
    photo: p('ep-mcknight'),
    photoApproved: true,
    status: 'confirmed',
  },
];

export const confirmedLeaders = leaders.filter((l) => l.status === 'confirmed');

/** Confirmed leaders with an approved photo, in roster order. */
export const photoLeaders = confirmedLeaders.filter((l) => l.photo && l.photoApproved);

export const title = (l: Leader) => l.roles[0];
