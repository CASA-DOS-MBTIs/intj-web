import type { SourceId } from '../sources';
import type { VinculosContent } from '../types';

export const VINCULOS_EN: VinculosContent = {
  meta: {
    title: 'Bonds — Love, friendship and family | INTJ',
    description:
      'How the INTJ loves, befriends and belongs: affection in acts, slow loyalty, and what ' +
      'actually predicts compatibility.',
  },

  sources: ['myers-1998-manual', 'mbf-ethics', 'pittenger-2005'] satisfies SourceId[],

  header: {
    eyebrow: 'Page 04 — Bonds',
    title: 'Love, friendship\nand family',
    lede:
      'There is an idea going around that the INTJ does not need people. It is false. What is ' +
      'true is that you need <em>few</em> people, at a depth most find uncomfortable. When you ' +
      'choose someone, you choose for real — and that quiet intensity is the most ' +
      'misunderstood part of your type.',
  },

  affection: {
    eyebrow: 'The INTJ’s language of affection',
    title: 'You love in acts, not in adjectives',
    cards: [
      {
        title: 'Solving problems',
        text:
          'When someone matters, you quietly start optimising that person’s life. It is a ' +
          'declaration of love disguised as usefulness.',
      },
      {
        title: 'Memory and attention',
        text:
          'You hold on to details the person themselves forgot having said. Paying attention ' +
          'like that is the opposite of indifference.',
      },
      {
        title: 'Constant presence',
        text:
          'You do not vanish in a crisis. You go missing from the party, but you turn up at ' +
          'the hospital — and stay until it is sorted.',
      },
      {
        title: 'Hard honesty',
        text:
          'You say the truth nobody else says. To you that is respect — and it is worth ' +
          'explaining, because it does not always land that way.',
      },
    ],
    translationTitle: 'The translation problem',
    translation:
      'Most people were taught to recognise affection in words and visible displays. You ' +
      'deliver affection in reliability and in getting things solved. It is not your duty to ' +
      'become someone else — but saying out loud, now and then, what you already show all the ' +
      'time saves years of misunderstanding. One sentence is enough: “I don’t talk much, but ' +
      'you matter to me.”',
  },

  love: {
    eyebrow: 'Romantic relationship',
    title: 'Slow to enter, hard to leave',
    paragraphs: [
      'The INTJ tends to assess before feeling — or at least before admitting to having felt. ' +
        'You observe at length, test for consistency, and only then invest. Once you have ' +
        'invested, loyalty is almost inflexible: you treat the relationship as a long-term ' +
        'project, and you intend to make it work.',
      'That gives you stable, deep relationships. The risk is the opposite of what people ' +
        'imagine: it is not leaving too early, it is staying too long — rationalising serious ' +
        'problems because giving up contradicts the plan. Learning to recognise when the ' +
        'honest conclusion is “this has no solution” is part of growing up.',
    ],
    needsTitle: 'What you need from a partner',
    needs: [
      'Room without guilt: silence is not distance',
      'Real conversation, not just household logistics',
      'Directness in conflict: hints leave you lost',
      'A life of their own, so neither of you becomes the other’s audience',
      'Patience with how long you take to put feeling into words',
    ],
    partnerTitle: 'What your partner needs from you',
    partnerNeeds: [
      'Affection said out loud, however clumsily',
      'Listening without fixing, when all they asked for is listening',
      'A signal that the distance is recharging, not punishment',
      'Presence in the present, not only plans for the future',
    ],
  },

  bonds: [
    {
      kicker: 'Friendship',
      title: 'Few, long, no social upkeep',
      paragraphs: [
        'You do not collect friendships — you cultivate three or four that run across decades. ' +
          'Small talk drains you; an argument about ideas wakes you up. INTJ friends tend to ' +
          'pick things up again after months of silence as if they had spoken yesterday, and ' +
          'that is genuinely comfortable for both sides.',
        'The care it takes: prolonged silence, at the other end, sometimes reads as ' +
          'disinterest. A minimal sign of life — one message a month — holds up the bonds you ' +
          'do not want to lose.',
      ],
    },
    {
      kicker: 'Family',
      title: 'Practical loyalty, friction with obligation',
      paragraphs: [
        'You do what you commit to and take on responsibility without complaining. The ' +
          'friction shows up around whatever is done “because it has always been done this ' +
          'way”: traditions with no function, indirect emotional demands, compulsory ' +
          'gatherings. None of it convinces you — and the resistance usually gets read as ' +
          'coldness.',
        'As a parent, the INTJ tends to raise autonomous, thinking children, treated as ' +
          'capable people from early on. The thing to watch is the same as ever: remembering ' +
          'that children need explicit warmth, not just competence around them.',
      ],
    },
  ],

  compatibility: {
    eyebrow: 'On compatibility',
    paragraphs: [
      'You will read in plenty of places that the INTJ “matches” with the ENFP or the ENTP. ' +
        'There is logic to it: extraverted, intuitive types tend to bring lightness, ' +
        'spontaneity and a welcome social push. But treating that as a rule is bad, and not ' +
        'merely as a matter of common sense: no study has ever shown that pairing four-letter ' +
        'codes predicts satisfaction or how long a relationship lasts. Happy couples exist in ' +
        'every combination, and unhappy ones do too.',
      'What actually predicts compatibility is not the four letters: it is maturity, shared ' +
        'values and a willingness to translate your own language for the other person. Two ' +
        'people at a similar stage of development understand each other with almost any pair ' +
        'of types. Two people at very different stages do not understand each other even when ' +
        'they are identical.',
    ],
  },

  next: {
    label: 'Next page',
    title: 'Journey: the INTJ’s phases by age',
    index: '05 →',
    key: 'jornada',
  },
};
