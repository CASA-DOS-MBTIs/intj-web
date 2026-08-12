import type { ProfileContent } from '../types';

export const PROFILE_EN: ProfileContent = {
  title: 'Which INTJ you are',

  intro:
    'A self-preserving INTJ 5w4 and a social INTJ 3w4 run the same cognitive stack and lead ' +
    'lives barely recognisable to one another. That is what the lens is for: you tell the site ' +
    'which INTJ you are, and the pages start showing the version of the text written for that ' +
    'variation. None of this is measured — A/T identity is a NERIS dimension, the enneatype and ' +
    'its wing come from Riso and Hudson, the tritype is Katherine Fauvre’s proprietary model, ' +
    'and the temperaments are vocabulary older than psychology. Choosing a variant sharpens the ' +
    'reading; it diagnoses nothing, and leaving everything blank still works.',

  openLabel: 'Adjust my profile',
  closeLabel: 'Close',
  clearLabel: 'Clear all',
  unsetLabel: 'unset',
  applyLabel: 'Apply to my profile',

  emptyHint:
    'The text for your variation would go here. Pick a profile to see it — or carry on: the ' +
    'whole page works with nothing filled in.',

  identity: {
    title: 'Identity (A/T)',
    hint:
      'If you have never taken the NERIS questionnaire, decide by what happens after a decision: ' +
      'moving on is A, revisiting it for three days is T — and not choosing is a legitimate ' +
      'answer too.',
    options: {
      A: 'INTJ-A — assertive',
      T: 'INTJ-T — turbulent',
    },
  },

  wing: {
    title: 'Enneatype and wing',
    hint:
      'Choose by the fear, not by the virtue: the right enneatype is the one that stings to ' +
      'read. If none of them stings, leave it blank and read all nine.',
    options: {
      '1w9': '1w9 — the serene idealist',
      '1w2': '1w2 — the campaigning reformer',
      '2w1': '2w1 — the loyal carer',
      '2w3': '2w3 — the strategic host',
      '3w2': '3w2 — the charming achiever',
      '3w4': '3w4 — the exacting achiever',
      '4w3': '4w3 — the competitive original',
      '4w5': '4w5 — the melancholic visionary',
      '5w4': '5w4 — the eccentric investigator',
      '5w6': '5w6 — the cautious analyst',
      '6w5': '6w5 — the loyal sceptic',
      '6w7': '6w7 — the restless ally',
      '7w6': '7w6 — the anxious enthusiast',
      '7w8': '7w8 — the voracious realist',
      '8w7': '8w7 — the frontal commander',
      '8w9': '8w9 — the strategist of steel',
      '9w8': '9w8 — the unshakeable referee',
      '9w1': '9w1 — the principled dreamer',
    },
  },

  tritype: {
    title: 'Tritype',
    hint:
      'Not knowing your own tritype is the normal case — and the model belongs to a single ' +
      'author, with no independent grounding. Skip it guiltlessly, or pick the trio that most ' +
      'resembles how you go at a hard problem.',
    options: {
      '125': '125 — the mentor',
      '126': '126 — the supporter',
      '127': '127 — the teacher',
      '135': '135 — the technical expert',
      '136': '136 — the taskmaster',
      '137': '137 — the systems builder',
      '145': '145 — the researcher',
      '146': '146 — the philosopher',
      '147': '147 — the visionary',
      '258': '258 — the strategist',
      '268': '268 — the rescuer',
      '278': '278 — the free spirit',
      '358': '358 — the solution master',
      '368': '368 — the justice fighter',
      '378': '378 — the mover and shaker',
      '458': '458 — the scholar',
      '468': '468 — the truth teller',
      '478': '478 — the messenger',
      '259': '259 — the problem solver',
      '269': '269 — the good samaritan',
      '279': '279 — the peacemaker',
      '359': '359 — the ambassador',
      '369': '369 — the mediator',
      '379': '379 — the diplomat',
      '459': '459 — the contemplative',
      '469': '469 — the seeker',
      '479': '479 — the gentle spirit',
    },
  },

  instinct: {
    title: 'Dominant instinct',
    hint:
      'Watch where your attention runs when life tightens — resources and routine (sp), standing ' +
      'inside the group (so), or one single person (sx). Wavering between two is common; take ' +
      'the one that arrives first, or none.',
    options: {
      sp: 'SP — self-preservation',
      so: 'SO — social',
      sx: 'SX — one-to-one',
    },
  },

  temperament: {
    title: 'Temperament',
    hint:
      'Dominant first, secondary after — and if the four words mean nothing to you, skip them: ' +
      'they are two-thousand-year-old vocabulary, useful for describing tempo, useless as a ' +
      'measurement.',
    options: {
      'melancholic-choleric': 'Melancholic–choleric',
      'melancholic-phlegmatic': 'Melancholic–phlegmatic',
      'melancholic-sanguine': 'Melancholic–sanguine',
      'choleric-melancholic': 'Choleric–melancholic',
      'choleric-phlegmatic': 'Choleric–phlegmatic',
      'choleric-sanguine': 'Choleric–sanguine',
      'phlegmatic-melancholic': 'Phlegmatic–melancholic',
      'phlegmatic-choleric': 'Phlegmatic–choleric',
      'phlegmatic-sanguine': 'Phlegmatic–sanguine',
      'sanguine-melancholic': 'Sanguine–melancholic',
      'sanguine-choleric': 'Sanguine–choleric',
      'sanguine-phlegmatic': 'Sanguine–phlegmatic',
    },
  },
};
