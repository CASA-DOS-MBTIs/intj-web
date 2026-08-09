import type { SourceId } from '../sources';
import type { LuzESombraContent } from '../types';

export const LUZ_E_SOMBRA_EN: LuzESombraContent = {
  meta: {
    title: 'Light & Shadow — INTJ strengths, faults and collapses',
    description:
      'The INTJ’s strengths and shadows side by side, with antidotes, the two failure modes ' +
      '— the Ni–Fi loop and the Se grip — and the silent exhaustion.',
  },

  sources: [
    'jung-1921',
    'von-franz-1971',
    'myers-1980-gifts',
    'myers-1998-manual',
    'quenk-1993-beside',
    'quenk-2002-grip',
    'mbf-basics',
    'mbf-type-dynamics',
    'beck-1985-hopelessness',
    'maslach-2001-burnout',
    'bianchi-2015',
    'cuijpers-2020',
    'lieberman-2007',
    'pittenger-2005',
    'reynierse-2009',
    'who-2019-icd11-burnout',
    'who-2022-icd11-6b66',
    'apa-2022-dsm5tr',
    'who-2023-media',
    'cvv-2026',
    'ms-brasil-suicidio',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 02 — Light & Shadow',
    title: 'Strengths, faults\nand collapses',
    lede:
      'The INTJ’s strengths and weaknesses are not separate lists: they are the same trait at ' +
      'different doses. The independence that saves you is the same one that isolates you. ' +
      'This page takes both sides honestly — and covers what to do when the system collapses.',
  },

  strengths: {
    eyebrow: 'Light — what tends to come without effort',
    items: [
      {
        n: '01',
        title: 'Strategic vision',
        text:
          'You see the third-order consequence while everyone else is still arguing about the ' +
          'first. In long-range decisions, that is close to a superpower.',
      },
      {
        n: '02',
        title: 'Real independence',
        text:
          'You do not need an audience in order to act correctly. Social pressure moves ' +
          'someone very little once they have checked the reasoning on their own.',
      },
      {
        n: '03',
        title: 'Self-taught learning',
        text:
          'You absorb the structure of a new subject within weeks, because you look for the ' +
          'skeleton before the decoration.',
      },
      {
        n: '04',
        title: 'Calm in a crisis',
        text:
          'When everything goes wrong, other people’s panic rises and yours drops. You had ' +
          'already imagined this scenario — plan B included.',
      },
      {
        n: '05',
        title: 'Hard integrity',
        text:
          'Fi draws clear red lines. You are the kind of person who gives up an advantage ' +
          'rather than betray a principle — and sleeps well afterwards.',
      },
      {
        n: '06',
        title: 'Continuous improvement',
        text:
          'Technical criticism does not offend you: if the argument is better than yours, you ' +
          'switch positions without losing any sleep and without needing time to digest it. ' +
          'The pride is in the result, not in the authorship of the idea. What floors you is ' +
          'criticism of your character — and that one you keep for years.',
      },
    ],
  },

  weaknesses: {
    eyebrow: 'Shadow — and the antidote to each one',
    antidoteLabel: 'Antidote',
    items: [
      {
        title: 'Unintended arrogance',
        text:
          'Being right often enough builds the habit of assuming you are. The tone turns into ' +
          'a verdict before the conversation has started.',
        antidote:
          'Trade one statement for a question, once per conversation. “What am I failing to ' +
          'see here?” costs nothing and changes everything.',
      },
      {
        title: 'Perceived coldness',
        text:
          'You solve the problem of whoever comes to you, when the person wanted to be heard. ' +
          'The care is real, but it arrives in the wrong format.',
        antidote: 'Ask before acting: “do you want advice or company?” — and respect the answer.',
      },
      {
        title: 'Paralysing perfectionism',
        text:
          'If it cannot be done flawlessly, it is postponed indefinitely. Projects die ' +
          'complete inside your head and non-existent in the world.',
        antidote:
          'Decide in advance what counts as “good enough” and deliver at that level. An ' +
          'imperfect public version teaches more than a perfect draft.',
      },
      {
        title: 'Comfortable isolation',
        text:
          'Solitude is genuinely pleasant — until it becomes the default. Months pass and the ' +
          'support network has dried up without warning.',
        antidote:
          'Scheduled contact, not spontaneous. Two people, one fixed slot a month — a system ' +
          'works better than a social impulse.',
      },
      {
        title: 'Contempt for rules',
        text:
          'If a rule looks inefficient, you ignore it — even when the political cost of ' +
          'ignoring it is greater than the gain.',
        antidote:
          'Treat organisational politics as part of the system, not as noise. Whoever ' +
          'understands the rule is able to change it.',
      },
      {
        title: 'Neglect of the body',
        text:
          'Sleep, food and movement enter the plan as disposable variables. Inferior Se ' +
          'collects the bill with interest.',
        antidote:
          'Put the body inside the system instead of outside it: if it is in the diary, you do it.',
      },
    ],
  },

  failure: {
    eyebrow: 'The two failure modes',
    title: 'Ni–Fi loop and Se grip',
    signsLabel: 'Signs',
    exitLabel: 'Way out',
    modes: [
      {
        kicker: 'MODE 1 · Ni–Fi LOOP',
        title: 'The internal echo chamber',
        text:
          '“Loop” is community vocabulary — it is not in Jung, not in Myers, not in the MBTI ' +
          'manual — but it describes something a great many people recognise at once: it ' +
          'happens when you skip Te and start alternating only between intuition and feeling. ' +
          'With no contact with outside data, the mind becomes a closed courtroom where you ' +
          'are judge, defendant and sole witness.',
        signs: [
          'Chewing over old conversations looking for hidden intentions',
          'A growing certainty that nobody really understands you',
          'Endless self-analysis that never produces action',
          'Cutting people off in your head before any real conversation',
        ],
        exit:
          'Reactivate Te with something objective and external: finish a measurable task, go ' +
          'and find real data, ask for the other person’s version. The loop breaks on ' +
          'information from outside, not on more thinking.',
      },
      {
        kicker: 'MODE 2 · Se GRIP',
        title: 'The fall into the concrete',
        text:
          'Under prolonged stress, the inferior function takes command in its crudest form — ' +
          'it was Naomi Quenk who documented this type by type, and it is the one piece of ' +
          'this machinery with a literature of its own. The visionary, contained INTJ turns ' +
          'into someone impulsive, sensory and strange even to themselves.',
        signs: [
          'Sudden excesses: food, shopping, binge-watching, compulsive training',
          'Obsession with irrelevant detail and extreme cleaning',
          'Irritation at physical stimuli: sound, light, touch',
          'The sense of operating outside your own body',
        ],
        exit:
          'Reduce the load before trying to understand it. Sleep, eat, walk, silence ' +
          'notifications. When it is exhaustion, that is enough and it clears in days. When ' +
          'rest does not clear it — above all the sense of being outside your own body, or the ' +
          'excesses you try to stop and cannot — it has stopped being a matter of typology. ' +
          'What is missing then is not analysis: it is an appointment.',
      },
    ],
  },

  burnout: {
    eyebrow: 'Mental health',
    title: 'The INTJ’s exhaustion is silent — which is why it gets so far',
    paragraphs: [
      'You can take a great deal. That is a compliment and a problem: because the demand is ' +
        'internal and you rarely let anything out, nobody notices the overload — you included. ' +
        'Exhaustion, cynicism and the sense that nothing matters enough to be worth the effort ' +
        'are the definition of burnout for anyone, four letters or not. What the type changes ' +
        'is not the symptom: it is the chance that you will call it laziness and carry on for ' +
        'another six months.',
      'The sign you notice first is losing the view of the future. When Ni goes quiet — when ' +
        'you can no longer picture anything ahead — it is not a lack of discipline or of ' +
        'purpose. Sometimes it is exhaustion, and it yields to rest. Sometimes it is ' +
        'hopelessness, which is a clinical symptom, yields to no plan at all, and is the most ' +
        'reliable prospective predictor of risk that psychiatry has. You are not the best ' +
        'person to tell the two apart from the inside, and it is unwise to try for long. In ' +
        'those stretches, planning more is the worst possible remedy.',
    ],
    warningsTitle: 'Warning signs',
    warnings: [
      'A blank future: no plan looks interesting',
      'New cynicism about people you used to respect',
      'Bad sleep, with the mind racing at 3am',
      'Disproportionate irritation at small requests',
      'Producing less and demanding more of yourself',
    ],
    helpsTitle: 'What usually helps',
    helps: [
      'Cutting scope out loud, with someone as a witness',
      'Simple daily movement, with no performance target',
      'Writing what you feel, not what you need to solve',
      'One trusted person who knows your real state',
      'Manual work: cooking, repairing, gardening',
    ],
    directTitle: 'A word, plainly',
    direct:
      'Asking for help is not a system failure. If you treat therapy as a last resort, look at ' +
      'the cost of the delay rather than at the argument: what it trains — naming what you ' +
      'feel before the body sends the bill — is precisely the skill this site describes as ' +
      'your least exercised one. It is not an emergency repair; it is the part of the system ' +
      'you never installed. If the apathy lasts weeks, see a mental health professional — a ' +
      'psychologist or a psychiatrist, and yes, that includes the public health service. If ' +
      'you are thinking about killing yourself, it is not a matter for next week: in Brazil ' +
      'the CVV answers free of charge on 188, by phone, 24 hours a day, every day — its chat ' +
      'at cvv.org.br is free too, but runs on reduced hours — and the emergency number is ' +
      '192; outside Brazil, findahelpline.com lists the verified ' +
      'services for your country. Making that call is competent execution of the plan, not ' +
      'giving up on it.',
  },

  next: {
    label: 'Next page',
    title: 'Work: career, environment and leadership',
    index: '03 →',
    key: 'trabalho',
  },
};
