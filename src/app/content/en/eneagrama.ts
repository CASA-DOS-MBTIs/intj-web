import { DEEP_1W2_EN, DEEP_1W9_EN, DEEP_2W1_EN, DEEP_2W3_EN } from './deep/wings-a';
import { DEEP_3W2_EN, DEEP_3W4_EN, DEEP_4W3_EN, DEEP_4W5_EN } from './deep/wings-b';
import { DEEP_5W4_EN, DEEP_5W6_EN, DEEP_6W5_EN, DEEP_6W7_EN } from './deep/wings-c';
import { DEEP_7W6_EN, DEEP_7W8_EN, DEEP_8W7_EN, DEEP_8W9_EN } from './deep/wings-d';
import { DEEP_9W1_EN, DEEP_9W8_EN } from './deep/wings-e';
import { FOCUS_ENEAGRAMA_EN } from './deep/focus';
import type { EnneagramDeepContent } from '../types';

export const ENEAGRAMA_EN: EnneagramDeepContent = {
  focus: FOCUS_ENEAGRAMA_EN,
  meta: {
    title: 'Enneagram — the nine motives running on an INTJ',
    description:
      'The nine enneatypes and the eighteen wings written as they show up on a Ni–Te engine: ' +
      'what each motive does to the intuition, to the execution and to inferior Sensing.',
  },

  sources: [
    'riso-hudson-1999',
    'riso-hudson-1996',
    'naranjo-1994',
    'hook-2021',
    'wagner-walker-1983',
    'enneagram-personality-2026',
    'myers-1998-manual',
  ],

  header: {
    eyebrow: 'Beyond MBTI · Enneagram',
    title: 'Nine motives\non the same engine',
    lede:
      'MBTI describes the mechanism. The enneagram tries to describe why it is switched on. This ' +
      'page does not summarise the nine types — it describes what each of them does when it runs ' +
      'on <strong>Ni · Te · Fi · Se</strong>. A 5 and a 3 INTJ have exactly the same machine and ' +
      'almost nothing in common.',
  },

  intro:
    'The enneagram is not a theory of personality in the academic sense: it is a map of ' +
    'motivation. The nine-pointed figure was taught by Óscar Ichazo at the end of the 1960s; the ' +
    'psychological reading in use today was built by Claudio Naranjo, who tied each point to a ' +
    '“passion” and to a pattern of character; and the version practically everybody reads is Don ' +
    'Riso and Russ Hudson’s, from whom the basic desire and the basic fear quoted under each ' +
    'type here are taken. <em>None of it measures anything.</em> What follows is vocabulary — ' +
    'vocabulary with half a century of use and no metric base, applied to a single cognitive ' +
    'type.',

  caveat:
    'Before anything else: the enneagram has almost no validation literature. The systematic ' +
    'review by Hook and colleagues (2021) finds a small body of studies of uneven quality, and ' +
    'the most uncomfortable finding is structural — factor analyses of enneagram questionnaires ' +
    'recover fewer than nine factors, and the wings and the arrows of integration and ' +
    'disintegration have minimal empirical support. Which is to say: the eighteen wings ' +
    'described on this page are a descriptive convention, not a demonstrated structure. The ' +
    'crossing of MBTI with the enneagram, which is exactly what this page does from beginning to ' +
    'end, rests on essentially one peer-reviewed study — Wagner and Walker (1983), with 390 ' +
    'people. And the percentages of “how many INTJs are 5s” that circulate online come from no ' +
    'probability sample at all: they come from self-selected, self-typed online polls, such as ' +
    'the compilation of 120,000 responses by Enneagram Personality (2026), which describes who ' +
    'answered and nothing else. On the MBTI side there is at least a technical manual with a ' +
    'nationally representative sample (Myers et al., 1998); on the enneagram side there is no ' +
    'equivalent. Read everything below as description, never as measurement.',

  centreLabels: {
    gut: 'Instinctive centre · anger',
    heart: 'Emotional centre · shame',
    head: 'Mental centre · fear',
  },

  labels: {
    want: 'Basic desire (Riso & Hudson)',
    fear: 'Basic fear (Riso & Hudson)',
    look: 'What it looks like in an INTJ',
    grow: 'The work',
    engine: 'What it does to the engine',
    wings: 'The two wings',
    asIntj: 'Running on Ni–Te',
  },

  types: {
    '1': {
      name: 'The Reformer',
      centre: 'gut',
      motto: 'There is a right way to do this, and I have already seen where this one is wrong.',
      asIntj: [
        'The difference between a 1 and a 5 INTJ is not in what they see — it is in the mood of ' +
          'the verb. Ni always converges on a single reading of the future; in the 1, that ' +
          'reading arrives in the imperative. It is not “that is where this is going”, it is ' +
          '<em>“that is how this ought to be”</em>, and the distance between those two sentences ' +
          'is a full day’s work. Te then stops optimising for efficiency and starts optimising ' +
          'for correctness: criteria before speed, standard before delivery, a process ' +
          'documented in a way that will survive your absence. This is the INTJ who rewrites the ' +
          'rule instead of going around it.',
        'The price is that criticism loses its off switch. What Naranjo calls the 1’s anger does ' +
          'not come out as an explosion — it comes out as tension, as dry correction, as the ' +
          'silence of someone who has already assessed the thing and decided not to say. ' +
          'Tertiary Fi makes it worse: the violated value is felt with absolute force and ' +
          'articulated with an almost comic poverty, so you hand over the verdict without being ' +
          'able to show the working, and whoever receives it hears contempt where there was ' +
          'principle. Under sustained pressure Riso and Hudson describe the 1 moving towards the ' +
          '4 — in an INTJ, the worst loop available: Ni ruminating on its own contamination ' +
          'instead of on the world’s error.',
        'Inferior Se closes the trap. For the 1 the body is one more area subject to standard: ' +
          'schedule, diet, training, discipline as moral proof. It works for years and then ' +
          'collapses all at once, in the classic shape of the <em>grip</em> — sudden sensory ' +
          'excess, food, screen, spending, too much sleep — followed not by rest but by a fresh ' +
          'internal tribunal. The 1 INTJ rarely falls for want of rigour. It falls because it ' +
          'never learned to stop without pressing charges.',
      ],
      engine:
        'Turns Te into a court and Ni into a sentence: the engine gains a norm, loses reverse.',
      want: 'To be good, to have integrity, to be balanced — to match your own sense of right.',
      fear: 'Being corrupt, evil or defective.',
      look:
        'A sky-high standard applied first of all to yourself, contained irritation at other ' +
        'people’s carelessness, a real difficulty accepting anything labelled “good enough”.',
      grow:
        'Separating error from guilt. A plan that failed is data, not character — and Te only ' +
        'starts working again once it stops judging whoever produced the number.',
    },

    '2': {
      name: 'The Helper',
      centre: 'heart',
      motto: 'I can see what you need before you can — and I will fix it, though nobody asked.',
      asIntj: [
        'This is one of the rarest combinations — in the polls only the 3 sits below it — and ' +
          'the worst described, because almost everything ' +
          'written about the 2 assumes extraverted warmth, and the INTJ does not have that ' +
          'apparatus. What exists here is something else: Ni pointed at a person as a system. ' +
          'You read another person’s need structurally — what is missing from their life, what ' +
          'will break in six months, what they do not know how to ask for — and Te builds the ' +
          'solution without going through a single conversation about feelings. The 2 INTJ does ' +
          'not comfort: it reorganises your life and hands it back finished.',
        'The passion Naranjo gives the 2 is pride, and in an INTJ it is nearly invisible because ' +
          'it does not display itself — it accumulates. You give a great deal, you give before ' +
          'being asked, you give in the form of infrastructure, and you keep in silence an ' +
          'account you swear does not exist. Tertiary Fi keeps that ledger with absolute ' +
          'precision and no language at all. When the balance breaks, Riso and Hudson describe ' +
          'the move towards the 8: not a scene, a cut. The cold withdrawal of everything you had ' +
          'been holding up — and the person on the other side never knew there was a debt.',
        'Inferior Se has its own irony here: you register other people’s hunger, tiredness and ' +
          'illness with a sensitivity you never apply to your own body. The 2 INTJ is the one ' +
          'who arrives at exhaustion looking after people who did not ask to be looked after. ' +
          'And the <em>grip</em> arrives turned outward — spending, gifts, last-minute rescues — ' +
          'rather than as excess taken for yourself.',
      ],
      engine: 'Points the whole machine at somebody else’s life and calls it purpose.',
      want: 'To feel loved.',
      fear: 'Being unwanted — unworthy of being loved.',
      look:
        'Help delivered as a system, large unsolicited favours, a real difficulty asking for ' +
        'anything, old resentment kept against people who never noticed a thing.',
      grow:
        'Asking explicitly, early and out loud. The 2 INTJ does not need to give less — it needs ' +
        'to stop charging for it in silence.',
    },

    '3': {
      name: 'The Achiever',
      centre: 'heart',
      motto:
        'I do not just want to see the road: I want the thing built before anyone else has ' +
        'understood the problem.',
      asIntj: [
        'This is the only motive that does not argue with the engine. Ni converges on a single ' +
          'future and Te wants to turn future into delivery — and in the 3 the two functions ' +
          'agree about the target: the version of you that has already arrived. That is why the ' +
          '3 is the fastest INTJ of the nine. It does not lose the years the 5 loses studying, ' +
          'nor the ones the 4 loses examining itself; the vision becomes scope, the scope ' +
          'becomes a deadline, the deadline becomes a thing that exists in the world, and the ' +
          'cycle restarts before the delivery has cooled. From outside it looks like discipline. ' +
          'From inside it is the absence of any function in the stack arguing in favour of ' +
          'stopping.',
        'The 3’s passion, in Naranjo’s reading, is vanity — and vanity here has nothing to do ' +
          'with mirrors: it is the substitution of the image that works for the interior. In an ' +
          'INTJ this is more dangerous than in any other type, because Fi is tertiary. The ' +
          'faculty that ought to say <em>“this I actually want, that I do not”</em> is precisely ' +
          'the slowest and most wordless in the stack, and Te fills the vacuum with admirable ' +
          'readiness: in the absence of an articulated desire it supplies a goal. A goal is ' +
          'indistinguishable from a desire for as long as it is being pursued. The difference ' +
          'shows up the day after the win, in a silence that was not in the plan.',
        'Under stress the 3 does not make a scene. Riso and Hudson describe it moving towards ' +
          'the 9, and in an INTJ that means anaesthesia with the movement preserved: you go on ' +
          'delivering, you go on replying, and you are no longer in there. Inferior Se has been ' +
          'involved from long before — the body is an instrument, sleep is inefficiency, a ' +
          'symptom is noise to be silenced until the next delivery. When the <em>grip</em> comes ' +
          'it comes with the aesthetics of the type itself: too much training, consumption, ' +
          'compulsive work at three in the morning. The 3 INTJ is the only one capable of being ' +
          'in collapse and at peak performance in the same week — and the second hides the first ' +
          'from everybody, itself included.',
      ],
      engine:
        'Stops Ni and Te arguing — and an engine with no internal argument accelerates before it ' +
        'knows where to.',
      want: 'To feel valuable and worthwhile.',
      fear: 'Being worthless.',
      look:
        'Goals chained end to end with no interval, chameleon adjustment of register to the ' +
        'audience, an inability to rest without producing a justification, an identity glued to ' +
        'the last thing delivered.',
      grow:
        'Making one thing nobody will see. Not as an exercise in humility — as a test: finding ' +
        'out whether there is still somebody there once the metric is removed.',
    },

    '4': {
      name: 'The Individualist',
      centre: 'heart',
      motto:
        'The distance between what I imagine and what I manage to bring into existence is my ' +
        'whole biography.',
      asIntj: [
        'In the 4, Ni stops pointing at the world and points at you. The same machine that ' +
          'reduces a whole system to a single thread of meaning is set to work on an object that ' +
          'will not be reduced — your own identity — and it runs without stopping and without ' +
          'ever delivering. Te goes on working but changes job: instead of building systems, it ' +
          'builds work. The 4 INTJ writes, designs, composes, films, and treats the finished ' +
          'thing as proof of existence rather than as a result.',
        'The 4’s envy, in Naranjo’s description, is not covetousness about goods: it is the ' +
          'permanent sense that something the others were issued at the factory is missing in ' +
          'you. Crossed with tertiary Fi it acquires intensity without vocabulary — enormous ' +
          'feeling, terrible translation, and a tendency to trust the intensity more than the ' +
          'fact. Crossed with Te it acquires a merciless aesthetic standard, excellent for the ' +
          'work and devastating for its author. Under stress, Riso and Hudson describe the move ' +
          'towards the 2, and the INTJ 4 does that in the strangest way available: a sudden, ' +
          'needy approach to one specific person, followed by shame and total withdrawal.',
        'Inferior Se is, here, the only door that opens easily. The 4 is the enneatype with the ' +
          'most access to the sensory by way of the aesthetic — sound, texture, light, rhythm — ' +
          'and that is the route by which the INTJ 4 manages to inhabit the present without ' +
          'going through its head. The trap is mistaking intensity for contact: a record played ' +
          'in the dark at four in the morning is still Ni ruminating with a soundtrack. The body ' +
          'comes in where there is repetition without meaning — and repetition without meaning ' +
          'is exactly what the 4 regards as a betrayal.',
      ],
      engine: 'Turns the engine inwards until it starts machining its own casing.',
      want: 'To find yourself and your significance — to create an identity.',
      fear: 'Having no identity or significance of your own.',
      look:
        'Reserve with a high temperature underneath, constant silent comparison, an aesthetic ' +
        'demand that delays everything, nostalgia for things that never even happened.',
      grow:
        'Finishing instead of refining. One imperfect published piece teaches you more about who ' +
        'you are than ten years of introspection about the ideal one.',
    },

    '5': {
      name: 'The Investigator',
      centre: 'head',
      motto: 'Leave me alone until I understand the whole of this — and I may still not show up.',
      asIntj: [
        'This is the second commonest crossing in the polls, behind the 1, and the most ' +
          'misdiagnosed, because 5 and ' +
          'INTJ look alike from outside and run on different reasons. INTJ is a mechanism: Ni ' +
          'converges, Te executes. 5 is a fear: inner resources are finite, the world makes ' +
          'demands, and the only defence is knowing enough to need nobody. When the two ' +
          'coincide, Ni gets an unlimited licence to model and Te loses its job — because ' +
          'delivering means exposing the model before it is complete, and <em>complete</em> is a ' +
          'condition that never arrives.',
        'The 5’s avarice, in Naranjo, is avarice about the self: time, energy, presence, ' +
          'information about your own life. In an INTJ it finds perfect ground. You do not hoard ' +
          'money — you hoard availability. A commitment reads as a haemorrhage, a conversation ' +
          'as a cost, and autonomy stops being a preference and becomes a condition of survival. ' +
          'Tertiary Fi turns this into an ethic — “I owe nobody anything” — which is a true ' +
          'sentence and a narrow life. Under stress, Riso and Hudson describe the move to the 7: ' +
          'the mind that refused to let go of one subject starts jumping from subject to ' +
          'subject, and none of the jumps goes deep.',
        'Inferior Se finds its worst ally in the 5. The stack already puts the body fourth; the ' +
          '5 adds the doctrine that the body is an inconvenient demand. The result is the most ' +
          'disembodied INTJ there is — hunger noticed at three in the afternoon, exhaustion ' +
          'discovered by diagnosis, one room with the curtain shut and three monitors. The ' +
          '<em>grip</em> here does not become a party: it becomes a solitary, mechanical sensory ' +
          'marathon, consumed with the same voracity as a technical manual.',
      ],
      engine: 'Runs the engine at full power with the output shaft uncoupled.',
      want: 'To be capable and competent.',
      fear: 'Being useless, helpless or incapable.',
      look:
        'Endless preparation, a minimalism of needs, short dense answers, an invisible boundary ' +
        'other people discover late and always by having crossed it.',
      grow:
        'Publishing early and badly. And accepting that you owe somebody something: the 5 only ' +
        'discovers it can survive dependence by trying one.',
    },

    '6': {
      name: 'The Loyalist',
      centre: 'head',
      motto:
        'I already know exactly how this goes wrong. The question is whether I trust myself when ' +
        'I say so.',
      asIntj: [
        'The 6 points Ni’s convergence at the failure mode. The same faculty that in the 3 draws ' +
          'the winning future here draws, with uncomfortable sharpness, the point where the plan ' +
          'breaks, who will vanish when it breaks and what is left afterwards. Te loves that ' +
          'input: redundancy, plan B, the contract read in full, double verification, systems ' +
          'that degrade gracefully. This is the INTJ you want in security, critical engineering, ' +
          'audit and anywhere being wrong is expensive.',
        'The contradiction is internal and expensive. Ni delivers certainty without a procedure; ' +
          'the 6 distrusts anything that arrives without a procedure, including its own Ni. You ' +
          'know and you do not trust that you know, so you look for an outside source to confirm ' +
          'it — and then dismantle the source, because unverified authority is exactly what ' +
          'frightens you. The counterphobic version Riso and Hudson describe resolves the ' +
          'deadlock by attacking first: the INTJ 6 who looks like an 8, confronts the hierarchy ' +
          'in the meeting and spends the night recalculating the cost. Under stress the move is ' +
          'to the 3 — frantic, competent activity whose function is not to feel the doubt.',
        'Inferior Se in the 6 becomes vigilance without proprioception: you monitor the ' +
          'environment with surgical precision and your own body with none. The anxiety turns ' +
          'somatic before it turns conscious — jaw, stomach, broken sleep — and you read it as ' +
          'an external signal, which feeds another round of analysis. Here physical training is ' +
          'not leisure, it is a diagnostic instrument: the most direct way of finding out that ' +
          'the danger was inside and not in the room.',
      ],
      engine: 'Makes the engine run every simulation twice, including the one that says shut down.',
      want: 'To have security and support.',
      fear: 'Being without support and guidance.',
      look:
        'Failure scenarios voiced in advance, long loyalty to very few people, scepticism about ' +
        'whoever holds the title and immediate respect for whoever holds the competence.',
      grow:
        'Acting on the information that exists. Courage is not the absence of doubt — it is the ' +
        'decision taken with the doubt still switched on.',
    },

    '7': {
      name: 'The Enthusiast',
      centre: 'head',
      motto: 'There are eight things I could be doing right now, and not one of them is this.',
      asIntj: [
        'This is a rare crossing and the most interesting to watch, because it is a ' +
          'contradiction in working order. Ni converges, closes, picks one reading and discards ' +
          'the rest; the 7 exists to keep the fan open and the pain out of reach. The INTJ 7 ' +
          'lives that as a sequence of total obsessions: a subject takes over the whole head, ' +
          'with the depth typical of the type, for weeks or months — and then the bottom ' +
          'appears, and with the bottom the boredom, and the subject is abandoned at an ' +
          'irritatingly advanced stage.',
        'Te is hijacked to produce options instead of results. You build excellent plans and ' +
          'keep three of them open at once, not out of indecision but because closing one means ' +
          'feeling the loss of the other two. Naranjo’s gluttony, here, is mental: it is not an ' +
          'excess of pleasure, it is an excess of future. And tertiary Fi, already slow, is left ' +
          'with no chance at all of saying what hurts — the 7 INTJ is superbly competent at ' +
          'reframing pain as opportunity and calling that rationality. Under pressure, Riso and ' +
          'Hudson describe the move to the 1: the enthusiasm sours into meticulous, bitter ' +
          'criticism, first of other people and very soon of yourself.',
        'Inferior Se, in the 7, misleads. You expect sensory escape — parties, travel, excess — ' +
          'but the INTJ 7 escapes mainly into its own head: more planning, more open tabs, ' +
          'another new project at two in the morning. The body is still the last thing ' +
          'consulted, and the exhaustion arrives dressed as enthusiasm, which makes it nearly ' +
          'impossible to catch in time. The work here is the most unnatural of all nine: staying ' +
          'in the same place after the novelty has gone.',
      ],
      engine: 'Keeps the engine at high revs and never lets it engage a gear.',
      want: 'To be satisfied and content — to have your needs fulfilled.',
      fear: 'Being deprived and trapped in pain.',
      look:
        'Voracious serial curiosity, brilliant projects abandoned at eighty per cent, a sharp ' +
        'humour used as an emergency exit, a diary full of things you chose yourself.',
      grow:
        'Finishing one thing after it has become boring. Everything the 7 never got round to ' +
        'receiving lives in the boring part.',
    },

    '8': {
      name: 'The Challenger',
      centre: 'gut',
      motto:
        'I have seen where this goes and I know who really decides here. I will not ask ' +
        'permission.',
      asIntj: [
        'In the 8, Ni is not after truth or the future: it is after leverage. Where the power ' +
          'actually sits, who depends on whom, which point of the system gives first if it is ' +
          'pushed. It is strategic reading in the literal sense, and Te becomes the direct arm ' +
          'of the will — decision without consultation, scope defined on the spot, people ' +
          'reassigned before the end of the sentence. This is the INTJ nobody believes is an ' +
          'introvert, and it is one: it recharges alone, plans alone and has no interest ' +
          'whatsoever in company during the process.',
        'What Naranjo calls the 8’s lust is excess as a way of being alive — intensity, ' +
          'confrontation, appetite, work taken to the limit. Crossed with tertiary Fi it ' +
          'produces a rigid and nearly unspeakable personal code: absolute loyalty to very few, ' +
          'final contempt for anyone who failed once at something non-negotiable, and no ' +
          'willingness to explain the criterion. Under stress, Riso and Hudson describe the move ' +
          'to the 5, and that is exactly what happens: the 8 disappears. It does not fight — it ' +
          'locks the door, cuts contact, plans in silence, and comes back with a decision ' +
          'already carried out.',
        'Inferior Se is the structural fracture of this combination. The 8 is a type of the ' +
          'instinctive centre: it wants physical presence, impact, occupied space — and it runs ' +
          'on a stack where sensation is the last function in the queue. The result is badly ' +
          'calibrated force. You systematically apply more pressure than the situation asked for ' +
          'and find out by the effect, late, once somebody has already stepped away. Chosen ' +
          'vulnerability is the growth practice; the step before it is simpler and harder: ' +
          'noticing the intensity you are giving off <em>while</em> you give it off.',
      ],
      engine: 'Wires the engine straight to the will, with nothing in between.',
      want: 'To protect yourself — to be in control of your own life and your own destiny.',
      fear: 'Being harmed or controlled by others.',
      look:
        'Frankness used as a test, decisions taken on the spot, ferocious protection of whoever ' +
        'is inside the circle, a physical allergy to being managed.',
      grow:
        'Letting somebody see the unarmoured side — and halving the force before applying it, ' +
        'because your half is usually already twice what was needed.',
    },

    '9': {
      name: 'The Peacemaker',
      centre: 'gut',
      motto: 'I can see this with a clarity that does not move me a single inch.',
      asIntj: [
        'The 9 is the most disconcerting version, because the machine is whole and unplugged. Ni ' +
          'works: you see the structure, you predict the ending, you understand people better ' +
          'than they would like. Te works: you organise, you deliver, you fix. What is missing ' +
          'is the step where your own priority joins the queue — the 9 replaces its agenda with ' +
          'consensus and then works, with genuine competence, on whatever mattered to somebody ' +
          'else.',
        'Naranjo’s sloth is not a lack of work; plenty of 9s work far too much. It is sloth with ' +
          'regard to yourself — a discreet anaesthesia that switches off your own desire before ' +
          'it becomes distinct enough to require conflict. In an INTJ this is particularly ' +
          'treacherous, because Ni goes on producing grand visions and tertiary Fi goes on ' +
          'knowing what matters, except that none of it reaches the surface with enough force to ' +
          'become a decision. Under stress, Riso and Hudson describe the move to the 6: the calm ' +
          'falls apart into anxiety and mistrust, and the inertia acquires a technical ' +
          'justification — one more analysis before acting.',
        'Inferior Se here does not produce a spectacular <em>grip</em>: it produces a gradual ' +
          'disappearance. Food, screen, sleep, a lukewarm routine — the body used as a sedative ' +
          'rather than as a channel. And because the 9 INTJ rarely collapses visibly, nobody ' +
          'intervenes, you included: a decade goes past at medium quality. Anger is the refused ' +
          'material — the 9 is a type of the instinctive centre with its rage boxed up and ' +
          'stored. Recovering it in small doses, said out loud, is what puts the engine back in ' +
          'gear.',
      ],
      engine: 'Leaves the engine idling: full capability, throttle disconnected.',
      want: 'To have inner stability — peace of mind.',
      fear: 'Loss and separation.',
      look:
        'Agreement that is not agreement, deadlines that slip without drama, strong opinions ' +
        'revealed years later, a silent stubbornness once you are finally pushed.',
      grow:
        'Saying what you want on the day you want it. Every preference declared out loud ' +
        'reconnects a piece of the engine.',
    },
  },

  wings: {
    '1w9': {
      deep: DEEP_1W9_EN,
      name: 'The serene idealist',
      text:
        'The 9 wing puts a damper between the judgement and the mouth. The standard is still ' +
        'absolute, but the anger leaves the face and turns into patience: the INTJ 1w9 is read ' +
        'as wise, professorial, almost detached, while inside the court remains in session. Te ' +
        'works on a long rhythm — reform by accumulation, over years, with no open ' +
        'confrontation. The risk is the 9’s: the most important correction is never said, and ' +
        'firmness degenerates into polite obstruction.',
    },
    '1w2': {
      deep: DEEP_1W2_EN,
      name: 'The committed reformer',
      text:
        'The 2 wing pushes the 1 towards people, and in an INTJ that does not come out as warmth ' +
        '— it comes out as intervention. You correct because you consider that you owe the other ' +
        'person the truth nobody had the nerve to give, and you deliver it to their face, with ' +
        'Te switched on, convinced it is generosity. This is the INTJ who teaches, mentors, ' +
        'writes internal manifestos and takes up causes. The risk is a personalised moralism: ' +
        'the criticism stops being about the work and becomes about the character of whoever ' +
        'made it.',
    },
    '2w1': {
      deep: DEEP_2W1_EN,
      name: 'The principled servant',
      text:
        'The 1 wing gives the helping the shape of duty rather than of affection, which solves ' +
        'the INTJ 2’s discomfort with the language of tenderness. You care by ethical standard: ' +
        'it is right, so it is done, and it is done well. Te builds the support as ' +
        'infrastructure — the family spreadsheet, the team’s process, the system holding up ' +
        'people who do not know it exists. The risk is help with a verdict built in: you rescue ' +
        'and judge in the same gesture, and whoever receives it feels both.',
    },
    '2w3': {
      deep: DEEP_2W3_EN,
      name: 'The visible benefactor',
      text:
        'The 3 wing wants the help to work and wants it known that it worked. This is the INTJ 2 ' +
        'who is visible: mentor, fixer, the one who opens doors and connects people with a ' +
        'social competence nobody expected from an introvert. Te treats care as a project, with ' +
        'a target and a result. The risk is that the bond comes to depend on usefulness — you ' +
        'become indispensable, never intimate, and the day you have nothing to deliver is the ' +
        'day you do not know what you are.',
    },
    '3w2': {
      deep: DEEP_3W2_EN,
      name: 'The relational achiever',
      text:
        'This is the INTJ furthest from the stereotype. The 2 wing aims the achievement at ' +
        'people: you want to be valuable to somebody, not merely effective, and that develops a ' +
        'social reading most INTJs do not have — you know how to enter a room, calibrate ' +
        'register, build an alliance. The risk is dissolution. With tertiary Fi already mute, ' +
        'the 3’s chameleon added to the 2’s radar produces someone extremely successful who has ' +
        'completely lost track of what they wanted.',
    },
    '3w4': {
      deep: DEEP_3W4_EN,
      name: 'The exacting achiever',
      text:
        'The 4 wing spoils the win on purpose. The pure 3 accepts the achievement the audience ' +
        'recognises; with a 4 wing the achievement has to be unmistakably yours, made of the ' +
        'material only you have, or it does not count. In an INTJ that means Ni closing on a ' +
        'very specific image of what the thing should be, Te running to build it and tertiary Fi ' +
        'vetoing the result at the end, unable to explain what was missing. You deliver faster ' +
        'than anyone and publish reluctantly; the envy is not of other people’s success, it is ' +
        'of the ease with which they seem to be satisfied. It is the most productive variation ' +
        'and the one that gives itself the least credit.',
    },
    '4w3': {
      deep: DEEP_4W3_EN,
      name: 'The achieving individualist',
      text:
        'The 3 wing gives the 4 an outlet. Where the 4w5 accumulates drafts, the 4w3 delivers: a ' +
        'career, published work, presence. Te gets its job back and the singularity starts to ' +
        'exist in the world instead of hurting in silence. The price is the oscillation — ' +
        'between the certainty of being different and the shame of being ordinary, now with an ' +
        'audience involved in the count. You begin to measure authenticity by the reaction it ' +
        'provokes, which is exactly the error the 4 swore never to commit.',
    },
    '4w5': {
      deep: DEEP_4W5_EN,
      name: 'The melancholic visionary',
      text:
        'Two withdrawn positions added together, in a type that is already withdrawn. The 4w5 ' +
        'INTJ is the most isolated of the eighteen: the intensity goes entirely into the work, ' +
        'the work is not shown, and the world receives a contained person whose temperature it ' +
        'cannot begin to guess. The 5 wing gives the aesthetic rigour — no sentimentality, all ' +
        'precision — and removes what little social impulse remained. It is the variation most ' +
        'likely to produce something genuinely original and least likely to have anyone see it.',
    },
    '5w4': {
      deep: DEEP_5W4_EN,
      name: 'The eccentric investigator',
      text:
        'The 4 wing makes knowledge a matter of identity. You do not study what is useful: you ' +
        'study what is yours, and the choice of subject is already a statement. The model has to ' +
        'be beautiful and not merely correct; the explanation has to have a form. Ni gets a long ' +
        'rein, Te is underemployed, and the output comes out as a body of work — essay, system, ' +
        'private catalogue — and it comes out late. Isolation with a high temperature ' +
        'underneath, and a background melancholy the 5w6 simply does not have.',
    },
    '5w6': {
      deep: DEEP_5W6_EN,
      name: 'The cautious analyst',
      text:
        'The 6 wing trades eccentricity for method. Here knowledge is not identity, it is ' +
        'insurance: you learn the whole system so as not to be caught out by it, and the ' +
        'question organising everything is “where does this fail”. Te has far more to do — ' +
        'verification, redundancy, documentation — and so the 5w6 delivers, and delivers on ' +
        'time, which the 5w4 rarely does. In exchange it carries a permanent background anxiety ' +
        'and a distrust no volume of data ever closes. Sat next to the 5w4 it looks like a ' +
        'different person: more loyalty, less strangeness, a great deal more plan B.',
    },
    '6w5': {
      deep: DEEP_6W5_EN,
      name: 'The armoured sceptic',
      text:
        'The 5 wing removes the 6 from the world and hands it over to its own archive. It is the ' +
        '6 most like a 5 — reserved, technical, frugal — and the difference lies in the ' +
        'relationship with its own model: the 5 trusts what it built, the 6w5 audits what it ' +
        'built. In an INTJ that becomes heavy analytical competence with very little willingness ' +
        'to expose it, and a cold, durable loyalty to the few sources that survived scrutiny.',
    },
    '6w7': {
      deep: DEEP_6W7_EN,
      name: 'The restless pragmatist',
      text:
        'The 7 wing pulls the 6 out of the analysis pit. Faster, more social, readier to test ' +
        'than to model, the INTJ 6w7 decides before being certain and corrects on the move. Te ' +
        'operates in short cycles and the risk changes shape: it is not paralysis, it is scatter ' +
        '— plans B, C and D all started and none sustained. Humour comes in as a shock absorber ' +
        'for the anxiety, and works well enough to hide it from everybody, yourself included.',
    },
    '7w6': {
      deep: DEEP_7W6_EN,
      name: 'The enthusiastic planner',
      text:
        'The 6 wing ties the 7 to the ground. There is loyalty, there is some useful anxiety, ' +
        'there is commitment to specific people — and that is why the INTJ 7w6 is the version ' +
        'that actually finishes part of what it starts. Ni keeps opening new subjects, but Te ' +
        'manages to close some, because abandoning them carries an emotional cost here. It is ' +
        'the most collaborative 7 and the least reckless; in exchange, it feels with full ' +
        'clarity the pain the pure 7 manages to reframe.',
    },
    '7w8': {
      deep: DEEP_7W8_EN,
      name: 'The steel opportunist',
      text:
        'The 8 wing arms the appetite. This is the INTJ who looks least like an INTJ: fast, ' +
        'direct, expansive, with a genuine capacity to turn a Tuesday idea into a company by ' +
        'Friday. Ni hunts opportunity, Te executes without asking for authorisation and the ' +
        'notion of a limit is treated as an engineering problem. The risk is proportionate — ' +
        'excess in everything, debts of several kinds, and a complete inability to stay still ' +
        'long enough to feel whatever is being avoided.',
    },
    '8w7': {
      deep: DEEP_8W7_EN,
      name: 'The empire builder',
      text:
        'The 7 wing adds appetite and speed to the 8. Controlling your own territory is not ' +
        'enough: it has to expand, and expanding is fun. The INTJ 8w7 opens fronts, takes high ' +
        'risk with genuine calculation behind it, and is magnetic in a way that fits no ' +
        'description of introversion. The risk is an accumulation of large commitments held up ' +
        'by sheer force — it works until the day the body, which is inferior Se, presents the ' +
        'bill without notice.',
    },
    '8w9': {
      deep: DEEP_8W9_EN,
      name: 'The strategist of steel',
      text:
        'The 9 wing cools the 8 down and makes it considerably more dangerous. The force does ' +
        'not come out as an explosion, it comes out as constant unhurried pressure: you do not ' +
        'raise your voice, you do not threaten, you simply do not give way, and the other side ' +
        'ends up reorganising itself around your immobility. In an INTJ it is the combination ' +
        'with the greatest gravity of presence — patient Ni, relentless Te, no need at all to be ' +
        'seen deciding. The risk is distance: people stop bringing bad news to someone who never ' +
        'shows a tremor.',
    },
    '9w8': {
      deep: DEEP_9W8_EN,
      name: 'The armed peacemaker',
      text:
        'The 8 wing gives the 9 a border. Life runs at a low, friendly tempo until somebody ' +
        'crosses one specific line, and then an absolute firmness appears that nobody had ' +
        'predicted — you included, discovering your own limit at the instant it is triggered. In ' +
        'an INTJ it is the most functional variation of the 9: there is energy to act when the ' +
        'matter genuinely counts, and the usual inertia for everything else.',
    },
    '9w1': {
      deep: DEEP_9W1_EN,
      name: 'The principled peacemaker',
      text:
        'The 1 wing gives the 9 a reason to move that does not depend on wanting: what is right. ' +
        'Order, method, standard, a quiet sense of duty — the INTJ 9w1 is discreet, correct, ' +
        'hard to disturb and more productive than it appears. The problem is that it never has ' +
        'to ask itself what it wants, because the norm has already answered; the anger of both ' +
        'types is folded twice inwards and comes out as passive rigidity, prolonged silence and ' +
        'a coldness that arrives long after the fact that caused it.',
    },
  },
};
