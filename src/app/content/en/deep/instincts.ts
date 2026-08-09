import type { VariantDeep } from '../../types';
import type { SourceId } from '../../sources';

/**
 * The unabridged analysis of each dominant instinct, shown only once the reader
 * has named theirs. The three instincts are Ichazo’s, crossed with the
 * enneatypes by Naranjo; Chestnut’s naming is used where it helps. None of it
 * has been validated empirically.
 */
const REFS: SourceId[] = [
  'naranjo-1994',
  'chestnut-2013',
  'fauvre-instincts',
  'riso-hudson-1999',
  'hook-2021',
];

export const DEEP_SP_EN: VariantDeep = {
  lede:
    'You are not anxious: you are provisioned. The self-preservation instinct sends your ' +
    'attention, before anything else gets any, to the margin — what is in the account, what is in ' +
    'the cupboard, how many hours you slept, how long you could last without depending on ' +
    'anybody. In an INTJ this lands on the perfect blind spot: <strong>inferior Se</strong> does ' +
    'not report on the body, so <strong>Te</strong> takes the post and administers by number what ' +
    'was supposed to be felt. The result is the most self-sufficient person you know — and the ' +
    'one least likely to notice the day self-sufficiency stopped protecting a life and started ' +
    'standing in for one.',

  sections: [
    {
      eyebrow: 'Where the energy goes first',
      title: 'The audit before the day',
      paragraphs: [
        'Before ambition, before people, before the project: the inventory. It is not a conscious ' +
          'thought, it is the filter everything passes through on its way to consciousness. An ' +
          'invitation does not arrive as an invitation; it arrives as a cost — travel, lost sleep, ' +
          'money, tomorrow morning compromised. You answer once the sum is done, and the sum is ' +
          'done too fast for you to recognise it as a sum. That is why the refusal comes out ahead ' +
          'of the wanting: the wanting is only consulted after the budget approves.',
        'In an INTJ the vigilance takes a particular shape, because <strong>Ni</strong> hates ' +
          'redoing work it has already done. You solve self-preservation once, by system, and then ' +
          'defend the system rather than reopen the question. Hence the fixed schedule, the same ' +
          'meal for four months, three units of everything that works, the spreadsheet nobody ' +
          'asked for that you have kept for seven years. None of that is temperamental rigidity — ' +
          'it is cognitive economy. Every automated decision is attention handed back to what ' +
          'matters, and whoever disturbs the routine is not being spontaneous: they are spending ' +
          'your processor.',
      ],
      points: [
        'Invitations priced by what they cost in sleep, in travel, and in the following morning.',
        'Redundancy bought on purpose: two of everything that breaks, three of everything that ' +
          'works.',
        'The question that comes before any plan — how many months could I survive depending on ' +
          'nobody.',
        'Comfort treated as infrastructure rather than luxury: chair, mattress, temperature, ' +
          'quiet.',
        'A disproportionate irritation at last-minute changes another person would find trivial.',
      ],
    },
    {
      eyebrow: 'The real currency',
      title: 'It is not money. It is autonomy.',
      paragraphs: [
        'Reducing this instinct to stinginess misses it entirely. Money is only the easiest way to ' +
          'store the thing you are actually hoarding: independence. You save time, energy, ' +
          'obligations not taken on and favours not received with the same discipline another ' +
          'person brings to capital — and “debt” is the ugliest word in your vocabulary, far ' +
          'beyond its financial sense. A lift is debt. A spare room is debt. A professional ' +
          'referral is debt. You would rather pay dearly than owe cheaply.',
        'This is where the instinct meets <strong>Fi</strong>, and the meeting is decisive. Te can ' +
          'price anything; Fi is what decides which things are not for sale — and the line Fi ' +
          'draws in this subtype is usually exactly this one: nobody gives me orders because ' +
          'nobody keeps me. The most typical move of the sp INTJ follows from there, and from the ' +
          'outside it looks irrational: turning down a good opportunity, sometimes an excellent ' +
          'one, because it would mean depending on someone for eighteen months. That was not fear. ' +
          'That was a value being defended with a spreadsheet.',
      ],
    },
    {
      eyebrow: 'The body',
      title: 'Administered by number, because it is not felt',
      paragraphs: [
        'No other INTJ looks after the body this well, and no other knows it this badly. ' +
          '<strong>Inferior Se</strong> is the channel that should announce hunger, pain, ' +
          'tiredness and boredom, and that channel arrives late and quiet. The self-preservation ' +
          'instinct will not tolerate the gap, so Te fills it with the one thing it knows how to ' +
          'build: protocol. A training programme followed with more discipline than someone who ' +
          'enjoys training. The annual check-up on time. You know your body fat, your sleep ' +
          'average and your resting heart rate, and you still do not know whether you are tired.',
        'The consequence is specific and worth stating flatly: your warning system is precisely ' +
          'the part that does not work. A symptom felt for six weeks never becomes an appointment ' +
          'because it never became a sentence; exhaustion is not reported, it is ' +
          '<em>discovered</em> — by a number out of range, or by a morning on which the system ' +
          'simply fails to start. The sp INTJ rarely burns out through neglect. They burn out ' +
          'through trusting a dashboard with no sensor for the one thing that needed measuring.',
      ],
    },
    {
      eyebrow: 'What goes unfunded',
      title: 'The other two instincts, chronically underwritten',
      paragraphs: [
        'The social instinct is cut first, and the cut is silent because you do not miss it. Your ' +
          'colleagues have no idea what you deliver. You believe the work speaks for itself; it ' +
          'does not, and the social INTJ three desks along has always known that. The result is ' +
          'this subtype’s most frequent experience: watching the promotion, the invitation or the ' +
          'project go to someone visibly less competent — and concluding, with evidence, that the ' +
          'world is unfair, when the missing variable was cheap and freely available.',
        'One-to-one is postponed more elegantly. You do not refuse intimacy: you schedule it for ' +
          'after the conditions are right. And every new bond is read first as a disturbance to ' +
          'the system — the routine dismantled, the quiet interrupted, the reserve divided. Since ' +
          'the fortress is never declared finished, the afterwards never comes. This is the ' +
          'subtype most likely to mistake solitude for preference, and to learn the difference ' +
          'somewhere around forty.',
      ],
    },
    {
      eyebrow: 'Seen from outside',
      title: 'What people think they are looking at',
      paragraphs: [
        'From a distance they read meanness, fear and a lack of ambition. Up close — from inside ' +
          'the house, above all — they read control: the insistence on the schedule, the ' +
          'disproportionate reaction to a changed plan, the sense that there is an unwritten rule ' +
          'book only you have read. Almost nobody notices that the whole apparatus protects one ' +
          'thing, and that the thing is not comfort. It is the ability to say no.',
        'There is also a kinder reading, and it is just as uncomfortable: you become ' +
          'infrastructure. Because you are always sorted, always with margin, always able to lend ' +
          'what nobody else has, you turn into the group’s solid point — and nobody asks how you ' +
          'are, because the question feels redundant in front of that much solidity. The sp INTJ ' +
          'usually resents this quietly and never corrects it, because correcting it would mean ' +
          'asking. And asking is debt.',
      ],
    },
    {
      eyebrow: 'The turning point',
      title: 'When the fortress starts replacing the life',
      paragraphs: [
        'The fortress works. That is the problem, and there is no irony in the sentence: it ' +
          'delivers exactly what it promised, which makes it nearly impossible to question. But ' +
          'self-preservation is a means, and well-built means have a habit of becoming ends. Past ' +
          'a certain point you are no longer building margin in order to live a particular way; ' +
          'you are living a particular way in order to keep building margin.',
        'The symptom is the most expensive one this type can pay. Ni’s vision — the long project, ' +
          'the move abroad, the body of work, the thing only you can see whole — goes into ' +
          'storage next to the emergency fund, waiting for a safe moment. That moment is never ' +
          'declared, because declaring it would cost precisely the margin. A wasted INTJ is almost ' +
          'never an INTJ who failed; it is an INTJ who got ready and never spent.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Margin buys refusal',
      text:
        'A reserve is not comfort: it is a power of veto. You can leave a toxic job the same ' +
        'month, wait out a bad market, turn down a humiliating contract — and an INTJ who can ' +
        'refuse negotiates from a position almost nobody negotiates from.',
    },
    {
      title: 'The best-managed blind spot of the three',
      text:
        'Se is the inferior function of every INTJ; you are the only one of the three instincts ' +
        'who takes it seriously before it takes payment. Sleep, food and movement handled as ' +
        'infrastructure buy, in practice, more years of Ni working well.',
    },
    {
      title: 'Decisions without panic',
      text:
        'Financial urgency distorts judgement, and you almost never decide under it. That is why ' +
        'your large choices age better than your peers’: they were made by someone who could ' +
        'afford to wait.',
    },
    {
      title: 'Constancy without enthusiasm',
      text:
        'The plan survives the boring months, and most of any plan is boring months. You do not ' +
        'depend on motivation because you never did — the system runs the same in January and in ' +
        'August.',
    },
  ],

  traps: [
    {
      title: 'The reserve that is never spent',
      text:
        'Security that is never tested is indistinguishable from paralysis, and the difference ' +
        'only shows up on the statement of a whole life. If the margin grows every year and ' +
        'nothing is ever done with it, the instinct has stopped serving you.',
    },
    {
      title: 'Refusal by reflex',
      text:
        'The no comes out ahead of the assessment, and Te then manufactures the justification — ' +
        'competent, coherent and retrospective. The warning sign is noticing you have never said ' +
        'yes to anything that required depending on someone for more than a week.',
    },
    {
      title: 'Protocol instead of sensation',
      text:
        'Metrics make a good supplement and a terrible substitute. For as long as every signal ' +
        'from your body has to pass through a number before you take it seriously, you will keep ' +
        'discovering fatigue after it has become damage.',
    },
    {
      title: 'Logistical loneliness',
      text:
        'Bonds assessed as disruptions to the routine always fail, because disruption is exactly ' +
        'what they are. No real person passes that test, and the test itself is never sent back ' +
        'for review.',
    },
  ],

  stress:
    'You contract — and the contraction is discreet enough to pass for discipline, including in ' +
    'your own eyes. The map shrinks to the flat and the work, invitations are declined in batches, ' +
    'the phone becomes a pane of glass nobody gets through. Inside, <strong>Te</strong> turns to ' +
    'whatever can still be controlled: the balance checked three times a day, the symptom ' +
    'researched to the end of the internet, the stock replenished before it runs out, the policy ' +
    'reviewed. And relief arrives through <strong>inferior Se</strong> in the cheapest form ' +
    'available — food delivered, purchases justified as preparedness, whole seasons in one night. ' +
    'Notice the irony peculiar to this subtype, because it is why the state lasts longer than it ' +
    'should: here the collapse disguises itself as self-care. Nobody interrupts a person who is ' +
    'merely getting organised.',

  growth: [
    {
      title: 'Spend the margin on purpose',
      text:
        'Pick an amount, a date and something unrecoverable — the trip, the course, the equipment, ' +
        'the sabbatical — and spend it. Not for pleasure: to verify, empirically, that the reserve ' +
        'comes back. Until that is tested, it governs you.',
    },
    {
      title: 'Let somebody carry something small',
      text:
        'Ask for the lift, take the spare room, let someone sort a thing out for you. Small, ' +
        'reversible dependence is the only dose this instinct will train on, and the only way to ' +
        'discover that returning a favour is not humiliation.',
    },
    {
      title: 'One channel of sensation with no metric',
      text:
        'A physical, culinary or manual activity you have forbidden to become a number: no watch, ' +
        'no target, no log. Se only develops when it is not being audited — and Se is what gives ' +
        'you the early warning the dashboard cannot.',
    },
    {
      title: 'Make the work visible four times a year',
      text:
        'The social instinct is your third, and neglect is not neutral: it redistributes credit. A ' +
        'short, dated account of what you delivered, four times a year, corrects most of the ' +
        'damage without a single act of office politics.',
    },
    {
      title: 'Put a date on the safe moment',
      text:
        'The stored vision only leaves the warehouse if it is booked like any other project. ' +
        'Write down the condition that would release it, then check whether that condition was ' +
        'met three years ago — it usually was.',
    },
  ],

  misread:
    'Read as avarice, as fear, and among people who know the enneagram, as a type 5 — the ' +
    'self-preservation fortress is the school portrait of the 5sp, and an INTJ 1, 3 or 8 with ' +
    'dominant sp spends a lifetime being mistyped because of it. Read, too, as a lack of ' +
    'ambition, which is the exact opposite of what is happening: the ambition exists, it is ' +
    'intact, and it is in storage awaiting conditions you yourself made impossible to declare. ' +
    'And at home your calm is read as indifference — when it is only the look of a system that is, ' +
    'at that moment, running properly.',

  versus:
    'The social instinct is the neighbour that most resembles you from outside: both plan, both ' +
    'build structure, both get described as cold by people who do not live with them. The ' +
    'difference is where the structure points. You build a wall; they build a position. When a ' +
    'project ends, you ask how much reserve is left and they ask how much reputation is left — ' +
    'which is why they get promoted and you get relied on. Against one-to-one the gap is wider ' +
    'and more uncomfortable: the sx INTJ spends, on a single bond and in six weeks, exactly the ' +
    'margin you took ten years to build, and thinks it cheap. You find them reckless; they find ' +
    'you postponed. Each is right about the other and neither is right about themselves.',

  sources: REFS,
};

export const DEEP_SO_EN: VariantDeep = {
  lede:
    'Do not confuse this with sociability — you probably dislike parties. The social instinct is ' +
    'about <em>place</em>: position, hierarchy, reputation, the weight you carry inside a group ' +
    'that matters to you. In an INTJ it produces a disconcerting creature: a deeply private ' +
    'person who, by the second meeting, already knows who really decides, which alliance is ' +
    'rotting and where the decision will actually be taken — because <strong>Ni</strong> reads a ' +
    'group exactly as it reads any other system, and <strong>Te</strong>, having read it, takes ' +
    'the post. The price is specific and quiet: reputation slowly begins doing the work that ' +
    'belonged to Fi.',

  sections: [
    {
      eyebrow: 'Where the energy goes first',
      title: 'The power map before the subject',
      paragraphs: [
        'You walk into a room and the room is read before the agenda. Who interrupts whom without ' +
          'cost, who glances at whom before agreeing, which silence is authority and which is ' +
          'fear, who holds the title and who holds the decision. This is not a choice: it happens ' +
          'even when you would rather have been thinking about the technical problem. You often ' +
          'leave a meeting knowing less about the topic than about the politics that will settle ' +
          'the topic — and being right, months later, about who was going to win.',
        'What makes the social INTJ hard to spot is that none of it comes with a taste for ' +
          'company. You do not circulate, you do not make small talk, you leave early. Yet you ' +
          'maintain, with no visible effort, a current model of the org chart that is not on the ' +
          'org chart — and the model is good enough to act on. Ni does not read people one by ' +
          'one; it reads the structure between them, which is where the information lives.',
      ],
      points: [
        'Knowing, within two meetings, who decides and who merely signs.',
        'Noticing an alliance is rotting before either of the two people involved does.',
        'Writing the document that becomes the process — and then being consulted because of it.',
        'Hating the social half of the job and taking the job anyway.',
        'Feeling somebody’s departure as a structural change rather than a personal loss.',
      ],
    },
    {
      eyebrow: 'What Te does with it',
      title: 'Position is where the levers are',
      paragraphs: [
        'Once the map is read, extraverted thinking does the only thing it knows how to do: it ' +
          'occupies the point of greatest effect. Takes the coordination role, joins the board, ' +
          'becomes the maintainer of the repository, chairs the tedious committee that sets the ' +
          'standard everyone will obey for ten years. None of this is appetite for the spotlight ' +
          '— the spotlight, for you, is a tax. It is that the position is where the levers are, ' +
          'and an idle lever offends Te.',
        'Hence this subtype’s signature: you build things that outlive you. One-off projects bore ' +
          'you; institutions, standards, curricula, reference architectures and written processes ' +
          'do not. An INTJ with a dominant social instinct rarely wants to be remembered — they ' +
          'want the change to keep working after nobody remembers who made it. This is by far the ' +
          'INTJ who turns up most often in formal leadership, and the one who complains about the ' +
          'post most while holding it for twelve years.',
      ],
    },
    {
      eyebrow: 'What it protects',
      title: 'Belonging by usefulness',
      paragraphs: [
        'There is a real need underneath the politics, and it is not cynical: the need to have a ' +
          'place. But this type will not take the ordinary route. Being liked depends on charm, ' +
          'constant presence and small talk — three expensive things for an INTJ. Being ' +
          '<em>needed</em> does not: it depends on competence, which is the thing you have in ' +
          'surplus. So contribution becomes the membership fee, and belonging is bought with ' +
          'quality of work rather than with affection.',
        'It works, and it works well — until the bill arrives. Being indispensable guarantees a ' +
          'place and guarantees no bond at all: the group protects whoever delivers, and whoever ' +
          'delivers discovers, in a bad year, that nobody there likes them enough to cross it with ' +
          'them. That is the loneliness specific to the social INTJ — inside every group and ' +
          'inside none, with a diary full of people who respect you and do not know you.',
      ],
    },
    {
      eyebrow: 'What Fi pays',
      title: 'When reputation starts deciding',
      paragraphs: [
        'This is the central injury of the subtype, and it does not hurt while it happens. For an ' +
          'INTJ, <strong>Fi</strong> ought to be the final court: a private ethic, badly ' +
          'translated into words and entirely non-negotiable. The social instinct offers a faster ' +
          'and more operable substitute — the criterion of the room. The exchange is gradual and ' +
          'always reasonable case by case: “how will this be read” standing in for “what I hold to ' +
          'be right”, once, then again, each instance defensible.',
        'The signs are small. The position taken because it is publicly sustainable rather than ' +
          'because it is yours. The resignation postponed because of the timing. The criticism ' +
          'swallowed in front of whoever carries weight and delivered whole to whoever does not. ' +
          'And the most telling sign of all: <strong>contempt for the group</strong>. Somebody who ' +
          'genuinely does not depend on other people’s opinion does not despise it — they simply ' +
          'do not consult it. Contempt is dependence that has not been admitted.',
      ],
    },
    {
      eyebrow: 'What goes unfunded',
      title: 'The body and the person',
      paragraphs: [
        'Self-preservation finances all of this, and nobody asks where the money came from. Sleep ' +
          'cut by the trip, dinner solved at the airport, the check-up postponed because of the ' +
          'review cycle, the body treated as the most renewable line in the budget — and ' +
          '<strong>inferior Se</strong>, which already reported badly, now reports to a manager ' +
          'who does not take calls. The social INTJ tends to be the one who reaches burnout with ' +
          'the most impressive diary and the most overdue blood test.',
        'One-to-one pays the second instalment. Whoever lives with you receives the residue of ' +
          'somebody who spent the whole day being institutional: at home is the version without a ' +
          'title, and that version arrives exhausted, monosyllabic and still half in the four ' +
          'o’clock meeting. It is the commonest complaint of people who love a social INTJ — not ' +
          'that you are cold, but that the best part of your day, the sharp attention and the full ' +
          'presence, was spent on people who do not love you.',
      ],
    },
    {
      eyebrow: 'Seen from outside',
      title: 'Political to some, distant to others',
      paragraphs: [
        'From above you look solid: reliable, predictable, promotable, the adult in the room. From ' +
          'the side you look political: someone who knows too much about who holds power for ' +
          'competence to explain it all, and whose silence in meetings reads as calculation. From ' +
          'below you look distant: a fair manager, technically unimpeachable and slightly cold, ' +
          'who fixes the system instead of talking to the person.',
        'None of those readings reaches the accounting running inside. Nobody sees the scoreboard ' +
          '— who was cited, who was invited, who took credit for the thing that was yours, and how ' +
          'far you are from the place you consider fair. It is one of the few points where the ' +
          'social INTJ is systematically underestimated in the other direction: people think you ' +
          'care less than you do.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Reading human systems',
      text:
        'Most INTJs analyse organisations as though they were machines and are then astonished by ' +
        'the politics. You put the politics in the model from the start, which is why your plans ' +
        'survive contact with the committee that has to approve them.',
    },
    {
      title: 'You build what lasts',
      text:
        'Standard, norm, process, curriculum, institution: you would rather repair the mechanism ' +
        'than settle the case. It is the most efficient way there is to spend Ni and Te, and the ' +
        'one that most multiplies the effect of a single person.',
    },
    {
      title: 'Authority without noise',
      text:
        'You rarely need to impose. The position was built out of verifiable delivery, and ' +
        'competence sustained over years carries a weight no rhetoric can buy — your “no” closes ' +
        'the item.',
    },
    {
      title: 'The INTJ who can move a group',
      text:
        'Seeing the outcome is worth nothing if nobody comes with you. This is the one instinct ' +
        'that makes the type care enough about the collective to lead it — and collectives led by ' +
        'someone who sees far are rare.',
    },
  ],

  traps: [
    {
      title: 'Reputation in place of conscience',
      text:
        'When “how will this be read” arrives ahead of “what I hold to be right”, Fi has been ' +
        'outsourced — and nobody notices, because the two answers agree in nine cases out of ten. ' +
        'The tenth is the one that decides who you are.',
    },
    {
      title: 'The permanent scoreboard',
      text:
        'Continuous comparison with peers, measured in posts, citations and invitations. It ' +
        'consumes more attention than any project of yours and never produces a result, because ' +
        'no position is high enough to end the count.',
    },
    {
      title: 'Contempt as a symptom',
      text:
        'Mocking the group while checking who got promoted is the signature of denied dependence. ' +
        'The contempt protects you from noticing that it matters — and the cost of that protection ' +
        'is never being able to address it.',
    },
    {
      title: 'Too many posts',
      text:
        'Every lever gets accepted because every lever is useful, and the calendar disappears ' +
        'inside legitimate committees. Deep work, which was your real advantage, vanishes under an ' +
        'accumulation of individually defensible responsibilities.',
    },
  ],

  stress:
    'You withdraw — and go on keeping score. Outwardly it is critical distance: the elegant exit ' +
    'from the group, the departure without a scene, the silence of someone who has concluded the ' +
    'thing no longer merits effort. Inwardly it is uninterrupted comparison — who was promoted, ' +
    'who was cited, who took credit for what was yours — and <strong>Te</strong> builds the moral ' +
    'argument that justifies the withdrawal with frightening competence. <strong>Fi</strong> ' +
    'countersigns without examining it, and that is when the Ni–Fi loop is at its most persuasive: ' +
    'the shape of a principle, the content of a grievance. <strong>Inferior Se</strong> arrives as ' +
    'the consumption of social information — profiles checked at two in the morning, conversations ' +
    'reread, promotion announcements read three times. The cut, when it comes, is presented as an ' +
    'ethical standard and felt as a farewell; and the question almost never asked is whether you ' +
    'left because you disagreed or because you were not invited.',

  growth: [
    {
      title: 'Contribute without counting',
      text:
        'Do something for the group whose return is impossible to measure and whose credit is ' +
        'impossible to claim. It is the only experiment that shows whether the position matters in ' +
        'itself or only for what it pays.',
    },
    {
      title: 'Say what Fi says before consulting the room',
      text:
        'In one meeting a week, form your position before estimating how it will land — then say ' +
        'it anyway. The point is not courage: it is finding out how often the two answers have ' +
        'stopped agreeing.',
    },
    {
      title: 'One person, not the group',
      text:
        'Pick somebody who is of no use to you and spend real time, the kind that generates no ' +
        'position at all. This instinct treats every bond as network; a bond outside the network ' +
        'is the only proof that you can do something else.',
    },
    {
      title: 'Separate withdrawal from revenge',
      text:
        'Before leaving a group, write both versions: the one made of principle and the one made ' +
        'of hurt. Leaving may still be right — but leaving without knowing which is driving is how ' +
        'this subtype loses relationships it wanted to keep.',
    },
    {
      title: 'Put the body back in the budget',
      text:
        'Sleep, check-ups, meals and movement handled as commitments to other people, because you ' +
        'do not miss those. Self-preservation is your weakest instinct, and it does not correct ' +
        'itself through insight — only through the diary.',
    },
  ],

  misread:
    'Read as a careerist, and the charge gets the motive wrong: you do not want to rise, you want ' +
    'leverage — but from outside the two are identical. Read as an extravert, and sometimes as an ' +
    'ENTJ, because the amount of social structure you operate looks impossible for an introvert; ' +
    'nobody sees the two hours of silence required afterwards. In the enneagram this is the ' +
    'subtype most often mistaken for a 3, even when the core is a 1, a 5 or a 6, because the ' +
    'social instinct lends any type the look of a managed image. And the people closest to you ' +
    'read your tiredness as disinterest, when it is the remainder of a day spent entirely ' +
    'somewhere else.',

  versus:
    'One-to-one is the neighbour you share the essential thing with: both of you spend your lives ' +
    'on people. The difference is arithmetic, and it changes everything. You want weight in front ' +
    'of many; they want voltage with one. You build what outlives your name; they burn everything ' +
    'they have on a single connection and do not count that as a loss. At a dinner of twelve you ' +
    'leave knowing the structure of the table and they leave with a three-hour conversation with ' +
    'someone they may never see again — and each finds the other incomprehensible. The ' +
    'self-preserver, meanwhile, is the exact inverse of your blind spot: where you build position, ' +
    'they build a wall, and they are the only one who genuinely manages not to consult other ' +
    'people’s opinion, because they never gave it the value of currency.',

  sources: REFS,
};

export const DEEP_SX_EN: VariantDeep = {
  lede:
    'One object at a time, and it takes up everything. The one-to-one instinct — calling it ' +
    'sexual misleads more than it explains — is the force that pulls towards a single target, one ' +
    'person, one body of work, one problem, and wants to be <em>transformed</em> by it. It is not ' +
    'possession and it is not jealousy. In an INTJ it meets a mind that was already converging on ' +
    'its own: <strong>Ni</strong> distils, sx hands it a single target, and the result is total ' +
    'absorption — body, friends, career and accounts all reduced to background noise. It is the ' +
    'instinct that brings this type closest to being alive in the present, and the one that ' +
    'exposes it most, because Ni builds a version of the other person and then relates to the ' +
    'version.',

  sections: [
    {
      eyebrow: 'Where the energy goes first',
      title: 'The single target, before the day starts',
      paragraphs: [
        'You wake up already inside it. Before coffee there is a continuation: the argument left ' +
          'half-finished, the message that went unanswered, the passage that has to be rewritten ' +
          'because it is not good enough. The rest of the day gets handled — competently, even — ' +
          'and with no presence at all. This is the one instinct in which the INTJ is visibly ' +
          '<em>less</em> efficient than they could be, and the inefficiency does not trouble you, ' +
          'because the internal metric has stopped being productivity.',
        'The intensity is almost never visible. Outwardly you remain the same contained, courteous ' +
          'INTJ, sparing with words; inwardly there is an entire city built around somebody who ' +
          'may have sent three messages this week. That gap between what is happening and what ' +
          'shows is the mark of the subtype — and the source of nearly all the damage, because ' +
          'nobody adjusts their conduct to an intensity they do not know exists.',
      ],
      points: [
        'Whole months spent inside one author, one problem or one person.',
        'Corridor conversation made physically unbearable while the target is lit.',
        'A bond handled with the seriousness other people reserve for a vocation.',
        'Lukewarm friendships that evaporate without any decision ever being taken.',
        'A meticulous memory of what the person said, with date, tone and context.',
      ],
    },
    {
      eyebrow: 'Ni plus sx',
      title: 'Convergence with a target is a serious combination',
      paragraphs: [
        'Introverted intuition was already narrow by vocation: it does not open possibilities, it ' +
          'distils until one is left. The one-to-one instinct hands that mechanism exactly what it ' +
          'was asking for — a single object — and the effect is multiplicative. Where another type ' +
          'falls in love and goes on living, you build a complete model: what they meant, what ' +
          'they will become, what they need before they know it, what all of it means for the next ' +
          'ten years. The model is good. It is far too good to be abandoned easily.',
        'There is a productive side to this that almost never gets acknowledged: nearly every ' +
          'serious piece of work an sx INTJ has made was born of an obsession, not of a plan. A ' +
          'problem came in through the door of the instinct, and from then on there was energy for ' +
          'ten thousand hours no discipline alone would have sustained. You do not work best under ' +
          'method; you work best under fascination — which is an enormous advantage and a ' +
          'dangerous dependency.',
      ],
    },
    {
      eyebrow: 'Fi arrives',
      title: 'The target is not interesting: it is sacred',
      paragraphs: [
        'Tertiary <strong>Fi</strong> is intense and badly translated, and whatever it touches ' +
          'stops being a preference and becomes a value. Added to sx, it turns the bond into a ' +
          'moral commitment: you do not like that person, you owe them loyalty; the project is not ' +
          'promising, it is just; the work is not good, it is true. That is where this subtype’s ' +
          'real devotion comes from, and it is rare enough to deserve respect — very few people ' +
          'are capable of taking another person that seriously.',
        'It is also where the fall comes from. If the bond is a value rather than a preference, ' +
          'disappointment is not disappointment: it is desecration. One small lie, one ' +
          'unkindness, one sign that the real person does not match the figure — and what breaks ' +
          'is not the expectation, it is the sacred thing. The cut that follows is characteristic ' +
          'of the INTJ and devastating in this version: total, immediate, irreversible, and felt ' +
          'from the other side as a sentence passed without a trial.',
      ],
    },
    {
      eyebrow: 'The body',
      title: 'The only door this type has to Se',
      paragraphs: [
        'This deserves saying plainly, because it is the best news on the page: sx is the one ' +
          'instinct that drags an INTJ into the present willingly. Through another person the body ' +
          'comes back — food you would never have tried, a city at three in the morning, loud ' +
          'music, a whole weekend with no plan, attention finally resting on what is happening ' +
          'rather than on what it will mean. This is not <strong>inferior Se</strong> seizing ' +
          'control in a crisis; it is Se being <em>lived</em>, which is the developmental route ' +
          'Jung and von Franz describe for the inferior function.',
        'The risk is that the door is the only one. If the present exists only in that person’s ' +
          'presence, you have not gained access to the body: you have rented it. When the bond ' +
          'ends, the food, the music, the sleep and the street leave with it — and the INTJ goes ' +
          'back to living a few centimetres ahead of the moment, now with proof that being here ' +
          'was possible and the conviction that it was only possible with someone.',
      ],
    },
    {
      eyebrow: 'What goes unfunded',
      title: 'Everything that is not the target',
      paragraphs: [
        'Self-preservation goes first, and it goes fast. Sleep, meals, money, appointments, the ' +
          'routine that held everything up: none of it is abandoned by decision, it simply stops ' +
          'being seen. It is common for an sx INTJ to come out of a period of fascination ten ' +
          'kilos different, with an inverted sleep cycle, some silly debt, and the sincere sense ' +
          'of having neglected nothing.',
        'The social instinct pays the second instalment, and that one charges interest late. ' +
          'Colleagues, network, group, the people who decide your career — all of it turns to ' +
          'noise for months on end, and you resurface expecting to find things where you left ' +
          'them. They are not there. Friendships have cooled, opportunities have passed, someone ' +
          'took the space. And the cost is never charged to the instinct, because at the time it ' +
          'seemed like the most important thing in the world — and, in a sense you cannot explain ' +
          'to anybody, it was.',
      ],
    },
    {
      eyebrow: 'Seen from outside',
      title: 'Cold, and then inexplicably incendiary',
      paragraphs: [
        'Almost everyone sees only the reserve: a contained INTJ, hard to reach, sparing. A very ' +
          'small number of people see the fire, and for them the experience is disproportionate — ' +
          'total attention, meticulous memory, a willingness to understand that nobody else ever ' +
          'offered. That is why whoever has been the object of this instinct rarely forgets it, ' +
          'and why the withdrawal, when it comes, is read as calculated cruelty.',
        'There is a cruel asymmetry built in: the target almost never knows the scale. Because Fi ' +
          'does not translate and Te sees no use in declaring feeling, the person receives the ' +
          'intensity without ever receiving the information — and responds in proportion to what ' +
          'they perceived, which is a fraction. You then read that proportionate response as ' +
          'disinterest, and the disappointment settles on top of a misunderstanding one sentence ' +
          'would have prevented.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Depth almost nobody reaches',
      text:
        'You know a person, an author or a problem at a level that requires time almost nobody is ' +
        'willing to spend. In a world of sliced attention that is not romanticism: it is a rare, ' +
        'verifiable advantage.',
    },
    {
      title: 'The present, willingly',
      text:
        'This is the only instinct that opens inferior Se without a crisis. Body, food, music, the ' +
        'street — through someone else, yes, but genuinely lived. It is the development of the ' +
        'inferior function happening by attraction rather than by collapse.',
    },
    {
      title: 'Work driven by obsession',
      text:
        'The ten thousand hours no method would have sustained, fascination sustains. Almost every ' +
        'serious piece of work by an sx INTJ began as a fixation, and fixation delivers a quality ' +
        'discipline alone does not reach.',
    },
    {
      title: 'Loyalty without clauses',
      text:
        'While the bond exists it is complete. No strategic reserve, no exit held back, no ' +
        'calculation of reciprocity — and a person taken that seriously knows it for the rest of ' +
        'their life.',
    },
  ],

  traps: [
    {
      title: 'The image instead of the person',
      text:
        'Ni assembles a version of the other within two weeks and then relates to the version. For ' +
        'as long as the real person does not contradict the figure it is the most intense thing ' +
        'there is; on the day they do, the drop is vertical and the culprit chosen is always them.',
    },
    {
      title: 'Contempt for the lukewarm',
      text:
        'Anything not intense becomes unbearable: the colleague, the corridor chat, the stable ' +
        'friendship, competent work with no fire in it. You call it having standards, but most of ' +
        'adult life is lukewarm — and it leaves if nobody maintains it.',
    },
    {
      title: 'One target and no redundancy',
      text:
        'All the energy on a single bet means the end of one bond takes down the body, the ' +
        'routine, the career and the meaning at once. That is not emotional fragility: it is a ' +
        'lack of diversification, and it has a practical fix.',
    },
    {
      title: 'The cut presented as a principle',
      text:
        'Fi supplies an impeccable moral justification for a withdrawal that was, in truth, relief ' +
        'from unbearable intensity. The argument is too good to be examined — which is how this ' +
        'subtype loses people it wanted to keep.',
    },
  ],

  stress:
    'It fixates. The whole conversation is replayed word by word in search of the exact instant it ' +
    'turned; every silence is interpreted, every delay acquires meaning, and <strong>Ni</strong> — ' +
    'which is excellent at this — produces an explanation that is coherent, complete and often ' +
    'false. Sleep goes first. Then the work goes, though it keeps being delivered with your head ' +
    'elsewhere. <strong>Inferior Se</strong> arrives through the body, and in this version it is ' +
    'more physical than in any other subtype: nights awake, excess, punishing training, a piece of ' +
    'recklessness taken on as though it were a decision. And there is always a treacherous relief ' +
    'within reach — cutting them off. The cut returns control within five minutes, converts the ' +
    'pain into a principle, and charges the rest over years, usually in the form of an obsessive ' +
    'rereading of what would have happened had you waited three more days.',

  growth: [
    {
      title: 'Stay after the voltage drops',
      text:
        'All intensity comes down; that is not a fault signal, it is how a bond normally behaves ' +
        'after some months. What survives the drop was the relationship; what does not was your ' +
        'projection. The only way to learn which is which is to stay.',
    },
    {
      title: 'Let the real person disprove the image',
      text:
        'Ask instead of inferring, and take the answer even when it ruins the model. Every ' +
        'contradiction accepted early saves a late catastrophe — Ni’s model is precise, and it is ' +
        'not the person.',
    },
    {
      title: 'Distribute the fire',
      text:
        'Keep two or three lukewarm relationships going by calendar rather than by inclination: a ' +
        'standing lunch, a weekly message, a group that carries on existing. Emotional redundancy ' +
        'looks bland right up to the day it is the only thing still standing.',
    },
    {
      title: 'Say the scale out loud',
      text:
        'The other person does not know. One badly phrased sentence about the size of what is ' +
        'happening is worth more than six months of silent intensity, and it prevents the ' +
        'disappointment built on information that was never sent.',
    },
    {
      title: 'No irreversible decisions for six weeks',
      text:
        'Neither moving country for somebody nor cutting somebody off forever. This instinct ' +
        'produces certainty at maximum speed, and sx certainty is the one thing in this type that ' +
        'ages badly in a predictable way.',
    },
  ],

  misread:
    'Read as jealous and possessive, which is the commonest reading and the most wrong: the ' +
    'instinct describes the voltage of a bond, never a claim over it. The neighbouring ' +
    'distinction is worth repeating, because the confusion is constant — the passion of enneatype ' +
    '4 is <strong>envy</strong>, the lack, the comparison with what someone else has; it is not ' +
    'jealousy, and it is not this. Read, too, as needy, when the sx INTJ is precisely the one who ' +
    'asks for nothing and disappears. And there is the inverted reading, the most unfair of the ' +
    'three: whoever has only seen you beside the target describes you as warm and sociable, and ' +
    'cannot understand why the same man is a wall in every other context. It is not a performance. ' +
    'There is simply one place where the current runs.',

  versus:
    'The social instinct is the neighbour easiest to mistake for you, because both of you spend ' +
    'your whole lives on people. The difference is arithmetic and it is total: they want weight in ' +
    'front of many, you want voltage with one. At a dinner of twelve they leave knowing the ' +
    'structure of the table and you leave with a three-hour conversation with someone you may ' +
    'never see again — and for you the table did not exist. Against the self-preserver the ' +
    'contrast is sharper still: the margin they took ten years to build you spend in six weeks, ' +
    'and you do not count it as a loss. They find you reckless; you find them dead while alive. ' +
    'Neither of you is describing the other — each is describing their own third instinct, which ' +
    'is the thing nobody can see in themselves.',

  sources: REFS,
};
