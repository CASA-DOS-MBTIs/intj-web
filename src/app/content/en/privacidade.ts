import type { PrivacyContent } from '../types';

export const PRIVACIDADE_EN: PrivacyContent = {
  meta: {
    title: 'Privacy — this site collects nothing · INTJ',
    description:
      'No analytics, no cookies, no forms, no server. What the browser keeps stays on your ' +
      'device and you can delete it whenever you like.',
  },
  header: {
    eyebrow: 'Privacy',
    title: 'This site\ncollects nothing',
    lede:
      'The page exists because "we collect no data" has to be written down somewhere to mean ' +
      'anything. Silence is not a privacy policy.',
  },
  summary:
    'There is no analytics, there are no cookies, there is no tracking pixel, there is no form ' +
    'and there is no server. The site is a set of static files: your browser downloads them ' +
    'and the conversation ends there. <strong>Nothing you choose or answer here leaves your ' +
    'device.</strong> What the hosting provider logs on its own account is set out below.',
  sections: [
    {
      title: 'What is not here',
      body: [
        'No Google Analytics or equivalent. No Meta Pixel. No heatmap, no session recording, no ' +
          'A/B test. No social button that drags in a third party’s script — the few outbound ' +
          'links are ordinary links, which do nothing until you click them.',
        'No cookies. Not one, not even "essential" ones: the site has no session, no login and ' +
          'no basket, so there is nothing to remember between requests. That is why you have ' +
          'never seen a consent banner here — not because it was hidden, but because there is no ' +
          'consent to ask for.',
        'No fonts, icons or scripts from another domain. Everything is served from here, and a ' +
          'content security policy on every page stops the browser fetching anything from ' +
          'elsewhere — <strong>the check runs at build time and fails if anyone tries</strong>.',
      ],
    },
    {
      title: 'What the server knows',
      body: [
        'The site is hosted on GitHub Pages. Like any web server, GitHub’s infrastructure logs ' +
          'the requests it receives, which normally includes an IP address and a user agent. That ' +
          'log is GitHub’s and is governed by GitHub’s privacy policy; it is not created by this ' +
          'site, is not accessible to this site, and nothing here asks for it to exist.',
        'There is nothing to be done about it short of changing host, and saying so is more ' +
          'honest than leaving it out.',
      ],
    },
    {
      title: 'Younger readers',
      body: [
        'The site asks for no age and no other detail, so there is no way — and no reason — to ' +
          'treat visitors differently. Even so: the writing is pitched at adult readers and deals ' +
          'with subjects like burnout and psychological distress.',
      ],
    },
  ],
  storage: {
    title: 'What stays on your device',
    intro:
      'Three things, in your browser’s <code>localStorage</code>. They are never sent anywhere ' +
      '— there is nowhere to send them. Clearing this site’s data in your browser removes all ' +
      'three at once.',
    items: [
      {
        key: 'intj-lang',
        what: 'The language you chose.',
        why: 'So the entry page stops asking on every visit.',
      },
      {
        key: 'intj-profile',
        what:
          'The identity (Assertive/Turbulent), wing, tritype, instinct and temperament you ' +
          'selected, if you selected any.',
        why: 'So the pages that adapt to your profile stay adapted.',
      },
      {
        key: 'intj-espelho-v2',
        what: 'Your answers to the Mirror.',
        why: 'So you can close the tab halfway through and come back.',
      },
    ],
    note:
      'None of it identifies you, and the site reads every value suspiciously: anything ' +
      'unexpected is discarded rather than used.',
  },
  contact: {
    title: 'Questions',
    text:
      'Anything about this — or about anything else — goes to ' +
      '<strong>contact@intj.net.br</strong>. If you would like a message of yours deleted once ' +
      'it has been answered, just say so.',
  },
};
