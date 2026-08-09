import type { ShellContent } from '../types';

export const SHELL_EN: ShellContent = {
  references: {
    title: 'Sources',
    note:
      'Not every claim about type carries the same weight. The tag beside each work says ' +
      'where it comes from — and what counts as evidence varies a great deal between them.',
    kinds: {
      academic: 'Academic psychology',
      clinical: 'Health · institutional',
      critique: 'Methodological critique',
      jung: 'Jung’s own work',
      mbti: 'Official MBTI',
      model: 'Specific model',
      classical: 'Antiquity',
      survey: 'Online survey',
    },
  },
  nav: {
    brandLabel: 'INTJ — home',
    languageLabel: 'Language',
    skipToContent: 'Skip to content',
    menuLabel: 'Navigation menu',
    items: [
      { key: 'mente', label: 'The Mind' },
      { key: 'luz-e-sombra', label: 'Light & Shadow' },
      { key: 'comparacoes', label: 'Comparisons' },
      { key: 'espelho', label: 'Mirror' },
    ],
    menus: [
      {
        key: 'vida',
        label: 'Life',
        items: [
          { key: 'infancia', label: 'Childhood' },
          { key: 'jornada', label: 'The journey by age' },
          { key: 'trabalho', label: 'Work' },
          { key: 'vinculos', label: 'Bonds' },
          { key: 'compatibilidade', label: 'Compatibility' },
          { key: 'amizades', label: 'Friendship' },
          { key: 'familia', label: 'Family' },
          { key: 'genero', label: 'Men & Women' },
          { key: 'saude', label: 'Health and performance' },
          { key: 'o-que-ninguem-diz', label: 'What nobody tells you' },
          { key: 'para-quem-ama', label: 'If you love an INTJ' },
        ],
      },
      {
        key: 'alem',
        label: 'Beyond MBTI',
        items: [
          { key: 'alem-do-mbti', label: 'Overview' },
          { key: 'combinacoes', label: 'Combinations and myths' },
          { key: 'eneagrama', label: 'Enneagram' },
          { key: 'tritipos', label: 'Tritypes' },
          { key: 'subtipos', label: 'Instinctual subtypes' },
          { key: 'temperamentos', label: 'Temperaments' },
          { key: 'big-five', label: 'Big Five' },
          { key: 'socionics', label: 'Socionics' },
          { key: 'disc', label: 'DISC' },
          { key: 'jung', label: 'Jung’s originals' },
          { key: 'glossario', label: 'Glossary' },
        ],
      },
    ],
  },
  footer: {
    tagline:
      'Typology is language, not destiny. It exists so you can understand yourself — never so ' +
      'you can excuse yourself.',
    pagesTitle: 'Pages',
    pages: [
      { key: 'home', label: 'Home' },
      { key: 'mente', label: 'The INTJ mind' },
      { key: 'luz-e-sombra', label: 'Light & Shadow' },
      { key: 'saude', label: 'Health and performance' },
      { key: 'trabalho', label: 'Work and career' },
      { key: 'vinculos', label: 'Bonds' },
      { key: 'compatibilidade', label: 'Compatibility' },
      { key: 'amizades', label: 'Friendship' },
      { key: 'familia', label: 'Family' },
      { key: 'contato', label: 'Contact' },
    ],
    deeperTitle: 'Deeper',
    deeper: [
      { key: 'infancia', label: 'Childhood' },
      { key: 'jornada', label: 'The journey by age' },
      { key: 'genero', label: 'Men & women' },
      { key: 'alem-do-mbti', label: 'Enneagram and temperaments' },
      { key: 'combinacoes', label: 'Combinations and myths' },
      { key: 'glossario', label: 'Glossary' },
      { key: 'para-quem-ama', label: 'If you love an INTJ' },
      { key: 'espelho', label: 'Mirror — short quiz' },
    ],
    noteTitle: 'An honest note',
    note:
      'MBTI, the enneagram and the temperaments are models for self-knowledge — not clinical ' +
      'diagnoses, and not selection instruments. Written for reflection, drawing on Jungian ' +
      'literature and the most widely accepted functional descriptions. Frequency estimates ' +
      'vary with the sample.',
    stack: 'Ni · Te · Fi · Se',
    madeFor: 'Made for people who think slowly and decide once',
    community: {
      kicker: 'Community',
      text: 'Rules, channels and networks of the Brazilian MBTI community on WhatsApp.',
      cta: 'Take a look',
    },
    trademarks:
      'MBTI and Myers-Briggs Type Indicator are trademarks of Myers & Briggs Foundation, Inc., ' +
      'registered in the United States and other countries; 16Personalities, of NERIS Analytics ' +
      'Limited; Keirsey and Please Understand Me, of Keirsey, LLC; Tritype, of Katherine ' +
      'Chernick Fauvre; MMTIC, of Myers & Briggs Foundation, Inc.; NEO PI-R, of PAR, Inc.; DiSC ' +
      'and Everything DiSC, of John Wiley & Sons, Inc. All other marks belong to their ' +
      'respective owners. This site is affiliated with, endorsed by and sponsored by none of ' +
      'them — including The Myers-Briggs Company, which publishes and licenses the instrument ' +
      'and is a separate body from the Foundation — and names them only to identify and discuss ' +
      'the models that carry those names.',
    legal: [{ key: 'privacidade', label: 'Privacy' }],
  },
  entry: {
    meta: {
      title: 'INTJ — the full portrait · intj.net.br',
      description:
        'An honest portrait of the INTJ type, in English and Portuguese: the cognitive ' +
        'stack, strengths and shadows, work, attachment and growth — sources in view.',
    },
    title: 'Read in English',
    text: 'The whole site, written in English.',
  },
  notFound: {
    meta: {
      title: 'Page not found · INTJ',
      description: 'That address does not exist on this site.',
    },
    title: 'That address does not exist',
    text:
      'The link may have changed, or may never have existed. Neither is your fault — but ' +
      'the page you were after is still somewhere in the index.',
    cta: 'Back to the start',
  },
};
