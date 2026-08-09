import type { ContactContent } from '../types';

export const CONTATO_EN: ContactContent = {
  meta: {
    title: 'Contact — corrections, contributions, support · INTJ',
    description:
      'How to reach the person who wrote this site: corrections, suggestions, support for the ' +
      'project, and the author’s portfolio.',
  },
  header: {
    eyebrow: 'Contact',
    title: 'Talk to me',
    lede:
      'This site is written by one person, which has two consequences: it has a voice — and it ' +
      'has errors. The second is the one I want to hear about.',
  },
  emailKicker: 'Email',
  emailNote: 'Write in English or in Portuguese, whichever you prefer.',
  reasons: [
    {
      kicker: '01',
      title: 'I found a mistake',
      text:
        'This is the most useful message I can get. Almost every claim here points at a source, ' +
        'and <strong>a cited source is one you can go and check</strong> — if I have misread ' +
        'something, credited an idea to the wrong person, or stretched a finding past what the ' +
        'study supports, tell me where. Fixing it is quick; noticing it alone is not.',
    },
    {
      kicker: '02',
      title: 'I want to contribute',
      text:
        'A page is missing, a section stayed shallow, the English stumbles somewhere. The ' +
        'reverse counts too: if some part of this described you with uncomfortable precision, ' +
        'knowing that tells me what is working.',
    },
    {
      kicker: '03',
      title: 'I want to support the project',
      text:
        'The site carries no ads, no trackers and sells nothing — and the intention is to keep ' +
        'it that way. I have not published any donation method yet; if you would like to ' +
        'support it anyway, write to me and we will sort something out.',
    },
  ],
  author: {
    kicker: 'Who wrote this',
    title: 'About me',
    text:
      'I am a developer, and this site is a personal project — the research, the writing and ' +
      'the code. If you want to see what else I work on, the rest is on my portfolio.',
    linkLabel: 'See the portfolio',
  },
  community: {
    kicker: 'Community',
    title: 'Casa dos MBTIs',
    text:
      'There is a Brazilian MBTI community on WhatsApp — its own rules, organised channels, and ' +
      'people who discuss typology seriously, without the "you can’t be an INTJ, you cried at a ' +
      'film". The link below goes to the community’s own page rather than to a bare invite: it ' +
      'carries the rules, the networks and how to join, and it is worth reading before entering ' +
      'any group. Conversation there is in Portuguese.',
    linkLabel: 'Visit Casa dos MBTIs',
  },
  closing: 'If you read this far, you have already contributed more than you think.',
};
