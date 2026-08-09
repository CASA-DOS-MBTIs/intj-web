import type { SourceId } from '../sources';
import type { TrabalhoContent } from '../types';

export const TRABALHO_EN: TrabalhoContent = {
  meta: {
    title: 'Work — Career, environment and leadership · INTJ',
    description:
      'Where the INTJ thrives and what empties them out in three months, how to ask for ' +
      'autonomy without sounding insubordinate, the real cost of meetings, collaboration ' +
      'versus committee, and how credibility is built slowly and lost in one sentence.',
  },

  sources: [
    'mbf-ethics',
    'mbf-basics',
    'myers-1998-manual',
    'roberts-2007',
    'deci-ryan-2000',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 03 — Work',
    title: 'Career, environment\nand leadership',
    lede:
      'For the INTJ, work is rarely just work: it is the place where the vision has to become ' +
      'a real thing. That makes the choice of environment more decisive than the choice of ' +
      'job title — and explains why two roles with the same title can energise you or switch ' +
      'you off completely. Nearly everything on this page turns on two things: ' +
      '<strong>autonomy</strong> and <strong>competence</strong> — yours, and that of the ' +
      'people around you. Not because the INTJ is special in needing them, but because this ' +
      'is where your type notices their absence first, and hardest.',
  },

  conditions: {
    thriveTitle: 'What makes you thrive',
    thrive: [
      {
        title: 'Autonomy over method',
        text:
          'Name the result you expect and get out of the way. You deliver more, and better, ' +
          'when you decide the “how” — and the “how” is where nearly all your value lives.',
      },
      {
        title: 'Complex, long-horizon problems',
        text:
          'Nothing wakes you up like a difficult system that takes months of reasoning to ' +
          'resolve. An easy urgent problem tires you more than a hard slow one.',
      },
      {
        title: 'Competence around you',
        text:
          'You accept hierarchy without friction when whoever leads knows what they are ' +
          'talking about and explains the criteria. It is not rank that grates: it is ' +
          'authority with no reasoning behind it.',
      },
      {
        title: 'Silence and long blocks',
        text:
          'Deep work in windows of three or four hours, uninterrupted — the natural format of ' +
          'Ni. Two hours cut down the middle are not two hours: they are four fresh starts.',
      },
      {
        title: 'A manager who shows the criteria',
        text:
          'A good manager of an INTJ does three things differently: hands over the objective ' +
          'and the deadline instead of the steps, says when they have changed their mind and ' +
          'why, and asks a question before correcting. None of it is indulgence — it is the ' +
          'cheapest way to have you at full strength.',
      },
      {
        title: 'Collaboration with a named owner',
        text:
          'Two or three people, one person accountable, disagreement treated as information. ' +
          'In that format you collaborate well and occasionally even enjoy it. What you cannot ' +
          'stand is the other format — which usually goes by exactly the same word.',
      },
      {
        title: 'Judged on delivery, not on presence',
        text:
          'You do your best work where nobody confuses being available with producing ' +
          'something. Fixed hours you keep without complaint; permanent availability empties ' +
          'you out, because it costs the whole block rather than the minutes actually used.',
      },
      {
        title: 'Correction that is technical and early',
        text:
          'You would rather find out you are wrong on Tuesday than defend the wrong thing for ' +
          'three weeks. Environments that correct fast, with an argument and without an ' +
          'audience, are the only ones where you lower your guard.',
      },
    ],
    drainTitle: 'What empties you out in three months',
    drain: [
      {
        title: 'Micromanagement',
        text:
          'Being watched at every step is not irritating: it is demotivating at a structural ' +
          'level. And the effect is not proportional to the dose — one unscheduled request for ' +
          'an update a day is enough to turn the whole job into an account of itself.',
      },
      {
        title: 'Decorative work',
        text:
          'Rituals with no function, reports nobody reads, meetings that could have been a ' +
          'paragraph. You rarely refuse to do it — you do it, and go a little further out ' +
          'inside with every week.',
      },
      {
        title: 'Constant interruption',
        text:
          'Fragmented context destroys your main advantage: uninterrupted reasoning. Rebuilding ' +
          'the mental model costs more than the interruption itself, and that cost appears on ' +
          'no report anywhere except in how tired you are.',
      },
      {
        title: 'Decision by politics',
        text:
          'Environments where the right argument loses to the right job title turn you cynical ' +
          'fast. And the cynicism is expensive in a specific way: it makes you stop bringing ' +
          'the right argument.',
      },
      {
        title: 'Meetings as the default format',
        text:
          'A fifty-minute meeting rarely costs fifty minutes: it costs the block it cuts in ' +
          'two, plus the twenty minutes of getting back in. Three a day, well spaced, consume ' +
          'a working day without showing up anywhere.',
      },
      {
        title: 'Committee dressed as collaboration',
        text:
          'Many people, nobody accountable, and the final product is agreement rather than a ' +
          'decision. Here you go quiet, decide alone afterwards, and start being described as ' +
          'someone who is “not a team player”.',
      },
      {
        title: 'Presence as a metric',
        text:
          'Open plan, camera on, corridor traffic. It is not the company that tires you — it ' +
          'is being unable to go forty minutes without being interpreted. You spend on ' +
          'managing perception the energy that was meant for the problem.',
      },
      {
        title: 'Criteria that move afterwards',
        text:
          'Few things floor you like discovering, at delivery, that the target had been ' +
          'different for weeks and nobody told you. It is not the rework that hurts: it is the ' +
          'suspicion that effort is not what decides things there.',
      },
    ],
  },

  fields: {
    eyebrow: 'Fields INTJs tend to gravitate towards',
    intro:
      'This is not career advice, and it is not evidence of aptitude. Type does not measure ' +
      'ability in any profession — the MBTI’s own ethical guidance is explicit that the ' +
      'instrument was not designed to be used for hiring, that it does not measure ability, ' +
      'competence or skill, and that no result is ever to be used to limit anyone; the manual, ' +
      'for its part, is explicit that it sorts preferences. The honest contrast is worth ' +
      'recording: personality traits measured on a continuous scale do relate to work ' +
      'outcomes — Roberts and colleagues showed in 2007 that the relationship is comparable to ' +
      'that of socioeconomic origin and cognitive ability. But the effects are modest, and ' +
      'what was measured there are graded traits, not types: none of it licenses reading four ' +
      'letters and concluding anything about a person. What the list below shows is ' +
      'attraction, not competence: what these fields have in common is the combination of ' +
      'complexity, autonomy and verifiable results, which is exactly what the INTJ goes ' +
      'looking for. If you thrive outside it, the list is wrong — not you.',
    items: [
      'Strategy and consulting',
      'Engineering and systems architecture',
      'Scientific research and academia',
      'Data, analysis and modelling',
      'Law and regulatory work',
      'Finance and investment',
      'Audit, risk and compliance',
      'Diagnostic medicine and surgery',
      'Product entrepreneurship',
      'Writing, screenwriting and criticism',
      'Teaching and technical training',
      'Cybersecurity and intelligence',
    ],
  },

  leadership: {
    eyebrow: 'Leadership',
    title: 'You lead by direction, not by charisma',
    paragraphs: [
      'The INTJ leader is the one who points to where the team is going and why, with a ' +
        'clarity that tends to be rare. You delegate well, you shield the team from ' +
        'bureaucracy, you defend unpopular decisions when they are the right ones, and you hold ' +
        'a high standard without ever raising your voice. The part almost nobody tells you is ' +
        'that this already is leading — you tend to assume you have not started yet, because ' +
        'no charisma seems to be happening anywhere inside.',
      'The blind spot is temperature. You communicate the what and forget how much it matters — ' +
        'and teams need to hear recognition, not only correction. One specific sentence of ' +
        'praise a week changes how your command is read more than any process reorganisation. ' +
        'And it is worth looking at where the urge to reorganise comes from: moving boxes on ' +
        'the chart is the most comfortable way to solve a problem that was really asking for a ' +
        'conversation.',
      'The most expensive mistake of an INTJ who leads is not demanding too much: it is ' +
        'delegating the task without delegating the judgement. You hand over what to do, keep ' +
        'the criteria to yourself, and are then disappointed that the person did not arrive ' +
        'where you would have arrived. They did not have the map. Saying alongside it what you ' +
        'would count as a good result — and what you would count as failure — costs ten ' +
        'minutes, and separates a team that executes from one that needs you in every decision.',
      'At some point you get promoted away from the work you were good at. It is a real loss ' +
        'and worth calling by its name: you traded four-hour blocks for a day made of ' +
        'interruptions, and the new role has none of the pleasure of a closed problem. There ' +
        'are two honest ways out. One is to treat management as a new craft, with its own ' +
        'learning curve and its own criteria, rather than a diluted version of the old work. ' +
        'The other is to refuse the promotion and say why — refusing is not a lack of ' +
        'ambition, and organisations that can only reward with a title have a problem that is ' +
        'not yours.',
      'One last note, and it is the least comfortable: what you want from a manager is very ' +
        'nearly what your team wants from you. Deci and Ryan described autonomy and competence ' +
        'as basic psychological needs — a proposal made about people in general, not about a ' +
        'type, and nobody has tested it by four-letter code. Even so, their list has three ' +
        'items, and the third is relatedness. Which is precisely the one the INTJ tends to ' +
        'file under superfluous, including when it is his own that is missing.',
    ],
    doLabel: 'Do',
    avoidLabel: 'Avoid',
    dos: [
      'Explain the reasoning alongside the decision. To you it is obvious; to the team it is ' +
        'the context that builds trust.',
      'Give specific positive feedback. “Your analysis saved us two weeks” is worth more than ' +
        'ten rounds of “good job”.',
      'State the degree of autonomy along with the task: “this is yours, tell me at the end”, ' +
        'or “I want to see it before it ships”. Without that, people check in constantly out of ' +
        'prudence, not out of incapacity.',
      'Ask for the objection by name. “Does anyone disagree?” produces nothing; “Marina, what ' +
        'is the worst case here?” produces an answer.',
    ],
    avoids: [
      'Silently redoing someone else’s work. Correcting without explaining teaches only one ' +
        'thing: that you do not trust them.',
      'Assuming silence is agreement. Plenty of people fail to disagree with you out of ' +
        'intimidation, not out of conviction.',
      'Using the meeting only to announce what has already been decided — and then finding it ' +
        'odd that nobody defends the plan as if it were theirs.',
      'Letting a contemptuous sentence slip. “That is obvious”, said in front of six people, ' +
        'charges interest for months — and the bill never reaches you.',
    ],
  },

  practice: {
    eyebrow: 'In practice',
    title: 'Twelve high-return adjustments',
    items: [
      {
        n: '01',
        title: 'Show the draft before the finished product',
        text:
          'You would rather turn up with the solution already done. But early feedback saves ' +
          'months spent in the wrong direction — and makes the team feel part of it, which ' +
          'lowers resistance later. Show it at thirty per cent, saying it is thirty per cent: ' +
          'then nobody mistakes a sketch for carelessness.',
      },
      {
        n: '02',
        title: 'Translate the vision into one sentence',
        text:
          'If your plan only exists whole, nobody carries it with you. One memorable sentence ' +
          'does more for execution than a thirty-page document — and it is not a simplification ' +
          'of the plan, it is the handle other people can pick it up by.',
      },
      {
        n: '03',
        title: 'Ask for autonomy without sounding insubordinate',
        text:
          'The wrong ask is the defensive one: “I work better alone”. The right one offers your ' +
          'manager the thing the surveillance was trying to buy — predictability. “Can I bring ' +
          'you this finished on Friday rather than in pieces? And if by Wednesday I can see it ' +
          'is off track, I will tell you before you ask.” You are not requesting less control: ' +
          'you are proposing a better checkpoint and an early alarm. Almost no manager turns ' +
          'that trade down.',
      },
      {
        n: '04',
        title: 'Choose the boss before the job',
        text:
          'No salary makes up for incompetent leadership if you are an INTJ. In the interview, ' +
          'ask how decisions get made, and ask for an example of one that went wrong. The ' +
          'answer predicts your next two years better than the org chart, the culture speech ' +
          'and the job description put together.',
      },
      {
        n: '05',
        title: 'For the first ninety days, document instead of reorganising',
        text:
          'By the second week you can already see why the system is broken, and you are very ' +
          'likely right. The problem is not the diagnosis: it is that nobody there has any ' +
          'reason to believe you yet. Write down what you saw, with dates, and keep it. In the ' +
          'meantime, fix one small thing you were asked to fix, extremely well. Standing is not ' +
          'claimed, it is spent — and you need to accumulate some before you can draw on it.',
      },
      {
        n: '06',
        title: 'Treat a meeting as an expense and say the price',
        text:
          'Before accepting, one question settles half of them: “what decision has to come out ' +
          'of this?”. If there is no decision, it is an update, and an update fits in writing. ' +
          'When you are the one calling it, send what needs deciding along with the invitation. ' +
          'And hold one block a day with a visible name on the calendar — an unnamed block is ' +
          'one anybody will take.',
      },
      {
        n: '07',
        title: 'Know whether it is collaboration or committee',
        text:
          'Collaboration has few people, a named owner, and treats disagreement as data. A ' +
          'committee has many people, no owner, and produces agreement instead of a decision. ' +
          'You tolerate the two in radically different ways, and the expensive error is ' +
          'punishing the first for the sins of the second. You can tell within ten minutes: ask ' +
          'who decides at the end. If the answer is “the group”, you know where you are.',
      },
      {
        n: '08',
        title: 'Say one sentence before you go quiet',
        text:
          'In a meeting, your silence is processing. From outside, the silence of processing ' +
          'and the silence of disdain are identical — and the colleague picks the more ' +
          'expensive reading. Three seconds settle the whole misunderstanding: “I am thinking, ' +
          'I will come back to this before the end”, or “I agree, I have nothing to add”. You ' +
          'are not performing enthusiasm; you are reporting your state.',
      },
      {
        n: '09',
        title: 'In conflict, start from the smaller fact',
        text:
          'Your tendency is to escalate to principle within two sentences. Someone missed a ' +
          'deadline and suddenly the conversation is about whether this place respects its ' +
          'commitments. You are usually right on the principle and lose anyway, because the ' +
          'other person switches to defending themselves from the judgement instead of solving ' +
          'the deadline. Say the smaller, checkable thing first — “it was due Tuesday and I ' +
          'heard on Thursday” — and hold the principle back. It works once or twice a year; ' +
          'spent every week, it becomes noise.',
      },
      {
        n: '10',
        title: 'Choose remote with both sides of the ledger in view',
        text:
          'Remote gives you back the four-hour block, which is why so many INTJs visibly ' +
          'produce more at home. What it takes away is precisely what you were never building ' +
          'on purpose: corridor trust, the context that circulates without an agenda, the ' +
          'warning that a project is about to change before it changes. If you work remotely, ' +
          'schedule what would have happened by accident in an office — twenty minutes a week ' +
          'with someone outside your area. It is the cheapest compensation there is, and the ' +
          'one you postpone most.',
      },
      {
        n: '11',
        title: 'Treat relationships as infrastructure',
        text:
          'A network looks like empty politics until you need one. Five professional ' +
          'relationships kept up honestly are worth more than a hundred cold connections — and ' +
          'kept up means a message every few months, asking for nothing. Turning up only when ' +
          'you need something, after two years of silence, works less well than you imagine; ' +
          'and you know it does, because it is exactly how it feels when someone does it to you.',
      },
      {
        n: '12',
        title: 'Credibility is built in deliveries and lost in one sentence',
        text:
          'Your reputation somewhere new is asymmetric in a way that is almost unfair: it ' +
          'climbs slowly, delivery by delivery, over months, and falls in a second — one ' +
          'contemptuous sentence in front of the wrong people, an audible sigh, a “that was ' +
          'already obvious”. You will probably not remember the sentence. Everyone in the room ' +
          'will. And the price does not arrive as open conflict: it arrives as invitations that ' +
          'stop coming, information that starts reaching you late, decisions made without you ' +
          'in the room. You do not have to become likeable. You have to not be dismissive out ' +
          'loud — a far smaller requirement, and a discipline that fits entirely inside two ' +
          'seconds of pause before you answer.',
      },
    ],
  },

  next: {
    label: 'Next page',
    title: 'Bonds: love, friendship and family',
    index: '04 →',
    key: 'vinculos',
  },
};
