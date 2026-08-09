import {
  DEEP_T125_EN,
  DEEP_T126_EN,
  DEEP_T127_EN,
  DEEP_T135_EN,
  DEEP_T136_EN,
  DEEP_T137_EN,
  DEEP_T145_EN,
  DEEP_T146_EN,
  DEEP_T147_EN,
} from './deep/tritypes-a';
import {
  DEEP_T258_EN,
  DEEP_T268_EN,
  DEEP_T278_EN,
  DEEP_T358_EN,
  DEEP_T368_EN,
  DEEP_T378_EN,
  DEEP_T458_EN,
  DEEP_T468_EN,
  DEEP_T478_EN,
} from './deep/tritypes-b';
import {
  DEEP_T259_EN,
  DEEP_T269_EN,
  DEEP_T279_EN,
  DEEP_T359_EN,
  DEEP_T369_EN,
  DEEP_T379_EN,
  DEEP_T459_EN,
  DEEP_T469_EN,
  DEEP_T479_EN,
} from './deep/tritypes-c';
import { FOCUS_TRITIPOS_EN } from './deep/focus';
import type { TritypesContent } from '../types';

export const TRITIPOS_EN: TritypesContent = {
  focus: FOCUS_TRITIPOS_EN,
  meta: {
    title: 'Tritypes — Fauvre’s 27 archetypes applied to the INTJ',
    description:
      'All 27 tritypes, one by one, read against the Ni–Te stack: which fixation drives the ' +
      'vision, which drives the execution, and which only shows up when you break.',
  },

  sources: ['fauvre-tritype', 'riso-hudson-1999', 'naranjo-1994', 'hook-2021'],

  header: {
    eyebrow: 'Deep dive 02 — Tritypes',
    title: 'Three motives inside\na single engine',
    lede:
      'An enneatype tells you what moves you. Katherine Chernick Fauvre proposed that nobody ' +
      'has only one: that you carry a fixation in each centre, and that the three are ' +
      'negotiating all the time. In an INTJ the negotiation is lopsided — <strong>the head ' +
      'centre tends to feed Ni, the gut centre tends to drive Te, and the heart centre is the ' +
      'one that finds the least language</strong>, until it leaks. Here are the 27 ' +
      'combinations, one by one.',
  },

  intro:
    'Two things are worth separating before going down the list. The <em>archetype</em> is the ' +
    'set: one type from the gut centre, one from the heart, one from the head — 27 ' +
    'combinations, and that is what this text is written against. <em>A person’s</em> tritype ' +
    'is that same set in dominance order, which is a different piece of information. And there ' +
    'is a third thing happening here that Fauvre does not do: crossing the three fixations with ' +
    'the cognitive stack. That is a reading, not a finding — nobody has tested any of it, and ' +
    'the note below explains why.',

  caveat:
    'Tritype® is Katherine Chernick Fauvre’s model and trademark; she has been developing it ' +
    'since the mid-1990s, and the USPTO registrations (6,474,587 and 6,558,145) were granted in ' +
    '2021. Fauvre attributes the term ' +
    'Trifix™ to Óscar Ichazo — it is not, as the story goes around, a community workaround for ' +
    'her trademark. The three centres are much older than the tritype: they come out of the ' +
    'Ichazo–Naranjo lineage and reached the English-language reader systematised by Riso and ' +
    'Hudson. On tritypes themselves there is no peer-reviewed literature at all — none. The ' +
    'systematic review by Hook and colleagues (2021) swept 104 research samples on the ' +
    'enneagram and found not one study of the three-fixation model. Read this page as ' +
    'vocabulary for describing yourself, never as a result.',

  centreLabels: {
    gut: 'Gut · body and anger',
    heart: 'Heart · image and hurt',
    head: 'Head · fear and calculation',
  },

  labels: {
    archetype: 'Fauvre’s archetype',
    asIntj: 'Running on Ni–Te',
    centres: 'Centres',
    orderNote:
      'The 27 archetypes are sets, not sequences: one type from the gut centre (8, 9, 1), one ' +
      'from the heart (2, 3, 4) and one from the head (5, 6, 7), with no internal order — ' +
      'which is why they are written here in ascending digits. A person’s tritype is another ' +
      'matter: it is the same set written in dominance order, with the core enneatype leading. ' +
      'So archetype 358 turns up as 358, 385, 538, 583, 835 or 853 depending on who is ' +
      'speaking — six labels for one room, differing only in who sits at the head of the ' +
      'table. And the difference matters: a lead 3 with 5 and 8 behind it is not a lead 8 with ' +
      '3 and 5 behind it, even though this same page describes them both.',
    filterAll: 'All 27',
    filterMine: 'Only those containing my enneatype',
  },

  tritypes: {
    '125': {
      deep: DEEP_T125_EN,
      name: 'The Mentor (Fauvre)',
      text:
        'Rigour, attention to others and hunger for knowledge in the same person: knows a great ' +
        'deal, wants you to improve, and measures its own worth by what it managed to pass on.',
      asIntj:
        'The vision comes from the 5: Ni feeds on years of private study and converges only ' +
        'once the archive is full. The execution comes from the 1, and Te turns corrective — ' +
        'you do not build a system, you straighten a crooked one. The 2 is the part almost ' +
        'nobody sees in an INTJ, because there is no Fe here to display it: it does not appear ' +
        'as warmth, it appears as an unrequested lesson. You hand someone three hours of your ' +
        'reasoning and call that help. Under stress the 2 rots first — the person did not use ' +
        'what you gave them, and the 1 converts the disappointment into a moral verdict on ' +
        'them. This tritype goes wrong by assuming that teaching and getting close are the same ' +
        'operation.',
    },
    '126': {
      deep: DEEP_T126_EN,
      name: 'The Supporter (Fauvre)',
      text:
        'Duty, vigilance and care. The combination that holds the structure up from ' +
        'underneath, foresees what will fail, and takes responsibility for people who never ' +
        'asked.',
      asIntj:
        'The 6 is what steers Ni: the intuition does not look for the most interesting future, ' +
        'it looks for the exact point where everything caves in, and it gets there with ' +
        'uncomfortable precision. Te executes by way of the 1 — standard, procedure, the right ' +
        'way documented. The 2 chooses who all of this is for, and it is the only part of the ' +
        'structure with no language of its own: you keep a whole organisation standing and ' +
        'never say you would need someone to notice. Under stress the 6’s doubt turns on the ' +
        'very people you carry, and you start testing loyalty instead of asking for support. ' +
        'This is an INTJ who is rarely betrayed and who frequently feels betrayed.',
    },
    '127': {
      deep: DEEP_T127_EN,
      name: 'The Teacher (Fauvre)',
      text:
        'Ideas in abundance, a high standard and the urge to transmit. Teaches, enthuses, ' +
        'expands — and promises more than the day can hold.',
      asIntj:
        'The 7 fights Ni: where introverted intuition wants to narrow until a single line is ' +
        'left, the 7 opens fans. The result is a less monolithic and more fertile INTJ, one who ' +
        'generates five plans instead of one and depends entirely on the 1 to finish anything — ' +
        'Te becomes the adult in the room, the only thing that closes scope. The 2 is what ' +
        'makes you explain all of it aloud to people who did not ask. Under stress the 7 flees ' +
        'discomfort into the next project, the 1 punishes the flight, and the 2 shows up in its ' +
        'worst form: the bill for what you did for others, presented with interest.',
    },
    '135': {
      deep: DEEP_T135_EN,
      name: 'The Technical Expert (Fauvre)',
      text:
        'Standard, efficiency and technical mastery. The combination of demonstrated ' +
        'competence: knows how, does it properly, and does it better than the person next to it.',
      asIntj:
        'Perhaps the tritype that most resembles the stereotype of the type itself. The 5 feeds ' +
        'Ni material — nothing is said before it has been mastered. Execution, though, has two ' +
        'owners, and that is where the friction lives: the 3 wants it delivered, the 1 wants it ' +
        'right, and Te is caught in between, redoing the thing ten times and still sending it ' +
        'in early. Here the heart centre is not buried, which is rare in this stack: the 3 is ' +
        'visible, and it is what makes the work count as proof of worth. Under stress the 5 ' +
        'withdraws, the 1 grinds, and the 3 keeps the façade intact throughout — you go on ' +
        'producing at an exemplary level for months after you have already ended inside.',
    },
    '136': {
      deep: DEEP_T136_EN,
      name: 'The Taskmaster (Fauvre)',
      text:
        'Responsibility, anticipation and relentless execution. Takes on the task nobody wants, ' +
        'does it the right way, and demands the same of everyone else.',
      asIntj:
        'The 6 gives Ni a defensive orientation: you foresee the collapse, and you foresee it ' +
        'well. Te comes out doubly loaded — the 1 demands the standard, the 3 demands the ' +
        'delivery — and the result is an INTJ who becomes an institution single-handed, ' +
        'indispensable and exhausted. It is the combination that most confuses duty with ' +
        'choice. Under stress the 6’s anticipation curdles into general suspicion: you stop ' +
        'delegating because nobody does it properly, which is usually true and is also the ' +
        'beginning of the end. The 3 makes sure nobody watches it happen, and the 1 guarantees ' +
        'you treat your own exhaustion as sloppiness.',
    },
    '137': {
      deep: DEEP_T137_EN,
      name: 'The Systems Builder (Fauvre)',
      text:
        'Wide vision, a high standard and an appetite for delivery. Builds large structures and ' +
        'is already thinking about the next one before this one is finished.',
      asIntj:
        'Ni does not narrow here — the 7 keeps the fan open, and the intuition works less as ' +
        'prophecy than as route generation. Execution is ferocious: the 3 wants a result, the 1 ' +
        'wants a flawless result, and Te has fuel to spare. This is probably the most ' +
        'outwardly successful tritype an INTJ can carry, and the hardest to slow down. The ' +
        'heart centre is on display rather than buried: what you build is who you are. Under ' +
        'stress the 7 escapes into the next project before feeling anything, the 3 turns the ' +
        'output volume up, and the 1 calls all of it indiscipline. Inferior Se arrives early ' +
        'here — the body presents the bill that all three fixations refuse to open.',
    },
    '145': {
      deep: DEEP_T145_EN,
      name: 'The Researcher (Fauvre)',
      text:
        'Depth, principle and singularity. The combination that investigates to the end, alone, ' +
        'and refuses the easy answer everyone else accepted.',
      asIntj:
        'The vision has two feeders: the 5 brings material and the 4 brings the angle — Ni ' +
        'converges on a reading that is yours and no one else’s, which is exactly the sensation ' +
        'the 4 is after. Execution is entirely the 1’s, and Te stays small: it does not ' +
        'organise the world, it organises your own work, to a standard almost nothing ' +
        'satisfies. This is the academic INTJ in the literal sense — archive, method, long ' +
        'labour. Under stress the 4 takes the 1’s inner critic and converts it into shame, ' +
        'which is a different substance: error stops being information and becomes proof of ' +
        'personal insufficiency. Then the 5 shuts the door, and that withdrawal can last years.',
    },
    '146': {
      deep: DEEP_T146_EN,
      name: 'The Philosopher (Fauvre)',
      text:
        'Honest doubt, depth and a moral sense. Examines its own conviction with the same ' +
        'rigour it examines everyone else’s — and does not conclude easily.',
      asIntj:
        'This is the tritype that sabotages the INTJ’s certainty, and that is half gift, half ' +
        'curse. Ni delivers the conclusion whole, as it always does; the 6 immediately ' +
        'interrogates it, the 4 asks whether it is honest or merely beautiful, and the 1 asks ' +
        'whether it is right. Te executes on ground none of the three will declare firm, so ' +
        'action arrives late and extremely well founded. This is the INTJ who does philosophy ' +
        'even while working on something else. Under stress the three lock each other: every ' +
        'position is doubted, every doubt is personal, every failure is moral — and the ' +
        'paralysis reads from outside as laziness, which is the most unjust accusation you can ' +
        'make here.',
    },
    '147': {
      deep: DEEP_T147_EN,
      name: 'The Visionary (Fauvre)',
      text:
        'Wide imagination, a high ideal and constant restlessness. Sees what could exist with ' +
        'almost painful clarity — and suffers the distance to it.',
      asIntj:
        'The vision is the broadest of the 27 and the least converged: the 7 multiplies futures ' +
        'and the 4 demands that each of them mean something, so Ni is working with too much ' +
        'material. Execution depends entirely on the 1 — without it nothing here would ever be ' +
        'finished, and even with it the finishing hurts. The heart centre is at the front, not ' +
        'hidden: what you make has to be unmistakably yours. Under stress the 4 measures the ' +
        'work against its internal image and declares failure, the 7 bolts for the next idea, ' +
        'and the 1 condemns them both. This is the tritype that produces the most brilliant ' +
        'INTJs with a portfolio of unfinished things.',
    },
    '258': {
      deep: DEEP_T258_EN,
      name: 'The Strategist (Fauvre)',
      text:
        'Knowledge, force and attachment. Joins strategic intelligence to a willingness to ' +
        'confront, with a selective loyalty that decides whom the force is used for.',
      asIntj:
        'The vision belongs to the 5: Ni will not speak until it has mapped the whole terrain, ' +
        'and here the mapping includes who holds power over whom. Execution belongs to the 8, ' +
        'and Te loses every hesitation — you do not propose, you take a position, and you ' +
        'accept the political cost in advance. The 2 is the invisible part and the most ' +
        'important: this force is not exercised in a vacuum, it is exercised on someone’s ' +
        'behalf. This is the INTJ who becomes another person’s éminence grise and defends them ' +
        'with disproportionate ferocity. Under stress the 2 presents its account: you ' +
        'protected, steered, solved — and the 8 converts the missing acknowledgement into a ' +
        'debt. Few things wound this tritype more than being indispensable and dispensable at ' +
        'once.',
    },
    '268': {
      deep: DEEP_T268_EN,
      name: 'The Rescuer (Fauvre)',
      text:
        'Vigilance, courage and protection. Sees the threat, decides which side it is on, and ' +
        'steps in — the combination that puts itself physically between danger and its own.',
      asIntj:
        'Without the 5, Ni is fed not by an archive but by threat reading: the 6 puts the ' +
        'intuition at the service of a group’s safety, and it is right too early for anyone ' +
        'else’s comfort. Te comes out through the 8 — direct, unpermissioned, with an ' +
        'aggression the more theoretical INTJs do not have. The 2 defines the circle, and the ' +
        'circle is small. This is the trench INTJ: poor at politics, excellent in a crisis. ' +
        'Under stress the 6’s suspicion turns inward on the circle itself and the 8 escalates ' +
        'before verifying — you manufacture an enemy where there was only an error, while the 2 ' +
        'nurses a grievance over the bill for everything it did.',
    },
    '278': {
      deep: DEEP_T278_EN,
      name: 'The Free Spirit (Fauvre)',
      text:
        'Appetite, generosity and power. Wants everything, offers a great deal, asks no ' +
        'permission. The most expansive of the 27 and the least tolerant of a limit.',
      asIntj:
        'Probably the rarest tritype in an INTJ, because nothing here stands still long enough ' +
        'for Ni to converge. The 7 gives the intuition an appetite it does not usually have: ' +
        'opportunity instead of inevitability, and the reading of the future comes out ' +
        'optimistic in a way this type rarely is. Execution belongs to the 8, immediate and ' +
        'unconsulted. The 2 shows up as largesse — you fund it, sponsor it, open the door, and ' +
        'that is a form of power this tritype understands very well. Under stress the path to ' +
        'inferior Se is extremely short: the 7 will not accept discomfort, the 8 will not ' +
        'accept a limit, and the exit is physical excess — work, food, spending, speed — while ' +
        'the 2 persuades itself it deserved more than it got.',
    },
    '358': {
      deep: DEEP_T358_EN,
      name: 'The Solution Master (Fauvre)',
      text:
        'The combination that solves: knows enough, delivers the result, and takes command when ' +
        'nobody else will. Effectiveness lived as identity.',
      asIntj:
        'The three fixations agree with each other and agree with Ni–Te — which is what makes ' +
        'this tritype so effective and so hard to live inside. The vision belongs to the 5: Ni ' +
        'does not speak before it has substrate, and the habit of mastering an entire subject ' +
        'before venturing an opinion is born here. The execution belongs to the 8: Te does not ' +
        'propose, it occupies — decides fast, accepts the friction, and treats incompetent ' +
        'authority as a removable obstacle. And the 3, contrary to what usually happens in this ' +
        'stack, does not stay buried: it is what converts understanding into delivery and ' +
        'delivery into personal worth, and it is what holds the façade up after everything else ' +
        'has given way. Notice what is missing. None of the three argues for rest: the 5 says ' +
        'you are not ready yet, the 3 says you have to prove it now, the 8 says weakness is ' +
        'exposure. Tertiary Fi — the only function that could say what you feel — has not one ' +
        'ally in this tritype. Under stress the order barely varies: the 5 disappears first ' +
        '(you stop answering), the 8 hardens next (which comes out as contempt and is fear), ' +
        'and the 3 falls last, so the façade keeps working for months after the end. The Se ' +
        'grip arrives disguised as productivity. And the move that resolves it is precisely the ' +
        'one none of the three will ever suggest: letting someone know you before you are ' +
        'competent.',
    },
    '368': {
      deep: DEEP_T368_EN,
      name: 'The Justice Fighter (Fauvre)',
      text:
        'Conviction, courage and delivery. Sees the injustice, builds the case and wins it — ' +
        'the combination that confronts power and takes the fight to the end.',
      asIntj:
        'The 6 commands Ni, and the intuition acquires a very specific bias: you do not ' +
        'forecast the future in general, you forecast who is going to abuse what. Execution ' +
        'belongs to the 8 and it is not symbolic — Te builds the case, assembles the evidence ' +
        'and chooses the moment. The 3 supplies the public finish: you do not fight badly, you ' +
        'fight well, and the victory has to be visible. This is an INTJ who is dangerous as an ' +
        'enemy and uncomfortable as an ally, because the standard of loyalty he applies is the ' +
        'one he charges. Under stress the 6’s suspicion and the 8’s escalation feed each other: ' +
        'you promote an ordinary mistake to betrayal, and the 3 forbids the retreat, because ' +
        'retreating would mean admitting you read it wrong.',
    },
    '378': {
      deep: DEEP_T378_EN,
      name: 'The Mover Shaker (Fauvre)',
      text:
        'Energy, ambition and presence. Moves things, pulls people along, and measures the day ' +
        'by what happened in it.',
      asIntj:
        'By far the tritype that looks least like an INTJ from outside. The 7 stops Ni closing, ' +
        'so the intuition becomes an antenna for opportunity rather than a single line of ' +
        'destination — you see far, but in several directions at once. Execution has two ' +
        'engines, the 3 and the 8, and Te runs at full load: fast decisions, scale, visible ' +
        'results. The heart centre is exposed rather than buried, and the price is known — your ' +
        'personal worth sticks to what happened this week. Under stress nothing here knows how ' +
        'to stay still: the 7 cannot bear emptiness, the 8 cannot bear waiting, the 3 cannot ' +
        'bear appearing stopped, and inferior Se arrives early and hard, as physical excess ' +
        'presented in the form of deserving. This is the combination in which an INTJ most ' +
        'easily loses his own long horizon to sheer motion.',
    },
    '458': {
      deep: DEEP_T458_EN,
      name: 'The Scholar (Fauvre)',
      text:
        'Depth, singularity and force. Knows a great deal, knows that it knows, and has no ' +
        'patience whatever for people speaking about what they have not studied.',
      asIntj:
        'The vision is the most private of the 27: the 5 supplies the material and the 4 ' +
        'demands that the reading be original, so Ni converges on something nobody else would ' +
        'have assembled — leaving the sensation, usually accurate and always isolating, of ' +
        'seeing a thing the room cannot see. Execution belongs to the 8, and it is what keeps ' +
        'this tritype from being harmless: you do not keep the conclusion to yourself, you say ' +
        'it once, whole, unpadded. The heart centre is at the front, but in its proud version — ' +
        'difference is lived as a quality, not as a lack. Under stress all three pull the same ' +
        'way: the 4 feels nobody is from the same world, the 5 shuts the door, the 8 despises — ' +
        'and the “I am done with people” spiral is the classic failure mode here.',
    },
    '468': {
      deep: DEEP_T468_EN,
      name: 'The Truth Teller (Fauvre)',
      text:
        'Intensity, doubt and unbraked frankness. Says out loud what the whole room is thinking ' +
        'and nobody dares to say.',
      asIntj:
        'With no 5 and no 3, this tritype has neither the habit of retreating to study nor the ' +
        'instinct to look after its own image — what is left is very direct. The 6 steers Ni ' +
        'towards inconsistency: you register the lie before the argument, and frequently before ' +
        'you can explain it. Execution belongs to the 8 and is immediate; the 4 makes the truth ' +
        'a personal matter, which is why it comes out charged. This is the INTJ who says the ' +
        'thing in the meeting. Under stress the 6’s suspicion gains the 4’s intensity and the ' +
        '8’s edge: you are not merely suspicious, you are offended, and the response is ' +
        'disproportionate. This tritype needs people who can take frankness and will say when ' +
        'it has gone too far — and has usually already driven exactly those people away.',
    },
    '478': {
      deep: DEEP_T478_EN,
      name: 'The Messenger (Fauvre)',
      text:
        'Pure intensity: appetite, depth and power with nothing to soften them. Lives loud, ' +
        'feels too much, and cannot pretend everything is fine.',
      asIntj:
        'The Ni–Te stack has real difficulty holding this tritype, and it lives off that ' +
        'tension. The 7 and the 4 feed the vision together and in conflict — one wants more ' +
        'world, the other wants the world that is missing — and Ni is left with intense, poorly ' +
        'converged material. Execution belongs to the 8, so what is felt becomes action too ' +
        'fast to pass through Te. Nothing here is lukewarm. This is the INTJ who looks like a ' +
        'sensing type from outside and is entirely interior within, and who confuses the two in ' +
        'himself. Under stress all three push outward at once: excess, rupture, the dramatic ' +
        'exit from situations that could have been repaired. The life’s work here is slow and ' +
        'singular — letting Te arrive before the 8 does.',
    },
    '259': {
      deep: DEEP_T259_EN,
      name: 'The Problem Solver (Fauvre)',
      text:
        'Knowledge in someone’s service, at an unhurried pace. Solves the other person’s ' +
        'problem competently, without fanfare and without presenting the bill.',
      asIntj:
        'The vision belongs to the 5 and it is solid. Execution belongs to the 9, and that is ' +
        'where this tritype diverges from nearly everything said about INTJs: Te turns ' +
        'competent and friction-averse, able to assemble the whole plan and not fight for it. ' +
        'You solve things quietly, claim no authorship, and an entire career can pass this way. ' +
        'The 2 explains why you keep stepping in: being needed is what gives you ballast, even ' +
        'though it is never said out loud. Under stress the three vanish in different ' +
        'directions — the 9 numbs, the 5 locks itself in, and the 2 accumulates a grievance ' +
        'never voiced because nobody ever asked. This is the tritype that most needs to learn ' +
        'to ask, and the one that least believes it is entitled to.',
    },
    '269': {
      deep: DEEP_T269_EN,
      name: 'The Good Samaritan (Fauvre)',
      text:
        'Care, loyalty and conciliation. Holds the whole group together, avoids the rupture, ' +
        'and puts its own need last, always.',
      asIntj:
        'Probably the tritype least at home in this stack: three fixations organised around ' +
        'other people, mounted on an engine that decides alone. The 6 steers Ni towards ' +
        'relational risk — you foresee where the group will split, and with uncomfortable ' +
        'notice. Execution runs through the 9, which means a strangely edgeless Te: you plan ' +
        'well and concede fast. The 2 is what makes any of it worth doing. Under stress nothing ' +
        'gets said: the 9 absents itself without leaving the room, the 6 suspects without ' +
        'asking, the 2 is hurt without informing anyone — and the only thing visible from ' +
        'outside is a sudden coldness nobody understands, yourself included.',
    },
    '279': {
      deep: DEEP_T279_EN,
      name: 'The Peacemaker (Fauvre)',
      text:
        'Lightness, generosity and peace. Wants everyone to be all right and nothing to have to ' +
        'hurt — and is surprisingly effective at it.',
      asIntj:
        'The vision belongs to the 7, wide and optimistic in a way this type is almost never ' +
        'credited with. Execution, though, has nothing pushing it: the 9 does not press and the ' +
        '2 presses for others, never for itself — so all the force of delivery has to come from ' +
        'Te alone, with no fixation supplying fuel. This is the INTJ whose plans are very good ' +
        'and stay in the drawer. The heart centre shows up as availability rather than as ' +
        'ambition. Under stress the three agree to avoid: the 7 changes the subject, the 9 ' +
        'postpones, the 2 accepts one more thing it did not want — and the bill arrives as a ' +
        'tiredness with no locatable cause and a resentment that will not authorise itself to ' +
        'exist.',
    },
    '359': {
      deep: DEEP_T359_EN,
      name: 'The Thinker (Fauvre)',
      text:
        'Analysis, efficiency and calm. Understands the system, makes it work, and does not ' +
        'raise its voice doing so.',
      asIntj:
        'Something worth noting inverts here: the gut centre does not push, so the heart centre ' +
        'is what carries the execution. The 5 feeds Ni material, the 9 takes the friction out ' +
        'of Te, and the 3 is left alone with the job of making something happen. It works very ' +
        'well — a highly competent INTJ, hard to read, strangely mild on the surface, who ' +
        'delivers without confronting anybody. The price is that the only thing keeping you in ' +
        'motion is proof of worth. Under stress the combination is treacherous: the 9 numbs, ' +
        'the 5 withdraws, and the 3 keeps the performance intact — you go on functioning ' +
        'perfectly long after you stopped being present, and nobody notices. Yourself included.',
    },
    '369': {
      deep: DEEP_T369_EN,
      name: 'The Mediator (Fauvre)',
      text:
        'Adaptation, responsibility and the search for agreement. Reads what each side needs, ' +
        'keeps the boat steady, and avoids the rupture.',
      asIntj:
        'It is often repeated that this is the commonest tritype in the population, but that ' +
        'comes from self-selected surveys rather than any base rate — treat it as a numerical ' +
        'rumour. In an INTJ, the 6 gives Ni the job of forecasting friction, and it forecasts. ' +
        'Execution belongs to the 3; the 9 takes the edge off, and the result is an INTJ who ' +
        'negotiates, adapts and is almost never read as the type he is. None of the three ' +
        'fixations likes open conflict, which in a Ni–Te stack produces a curious phenomenon: ' +
        'correct decisions taken too late to be imposed. Under stress the 6’s anxiety meets the ' +
        '9’s inertia and the only exit available is the 3’s performance — you get busy instead ' +
        'of deciding.',
    },
    '379': {
      deep: DEEP_T379_EN,
      name: 'The Ambassador (Fauvre)',
      text:
        'Optimism, ambition and easy passage. Moves well in any room, makes connections, and ' +
        'converts likeability into results.',
      asIntj:
        'The tritype that produces the most mistyped INTJs. The 7 stops Ni closing early, the 9 ' +
        'takes the roughness out of Te, and the 3 knows exactly which version of you works in ' +
        'which room — the set produces someone sociable, agreeable and entirely strategic ' +
        'underneath. The vision is wide; the execution belongs to the 3, the only fixation here ' +
        'in any hurry. You are good with people, and that is rarely read as an acquired skill, ' +
        'which is what it is. Under stress nobody sees anything: the 9 absents itself, the 7 ' +
        'changes the subject, the 3 smiles and delivers — three layers of anaesthetic over a ' +
        'tertiary Fi that goes on feeling everything and is given no words at all.',
    },
    '459': {
      deep: DEEP_T459_EN,
      name: 'The Contemplative (Fauvre)',
      text:
        'Interiority, singularity and quiet. Lives inwards, with an extraordinarily rich inner ' +
        'world and almost no hurry to show it.',
      asIntj:
        'All three fixations are withdrawing ones, and this is the only one of the 27 in which ' +
        'no centre pushes towards action. The 5 and the 4 feed a deep and very personal vision: ' +
        'Ni is at its best here. Te, however, is left without instinctual fuel — the 9 ' +
        'generates no urgency, and execution comes to depend entirely on structure built from ' +
        'outside: habit, deadline, somebody waiting. This is the INTJ whose work is ' +
        'extraordinary and exists mostly inside his own head. Under stress there is no visible ' +
        'leak, and that is what makes it dangerous: the withdrawal is total, silent, and can ' +
        'last years without anyone classifying it as a crisis. External structure here is not ' +
        'bureaucracy — it is a brace.',
    },
    '469': {
      deep: DEEP_T469_EN,
      name: 'The Seeker (Fauvre)',
      text:
        'Doubt, depth and the search for ground. Looks for something genuinely trustworthy — ' +
        'and tests to destruction everything it finds.',
      asIntj:
        'The vision comes from the 6 and the 4 together, and they are a restless pair: one asks ' +
        'whether it is safe, the other whether it is true, and Ni spends its life delivering ' +
        'conclusions that will be re-examined. Execution belongs to the 9, which is to say it ' +
        'arrives slowly — Te here is good at design and bad at starting. This is the INTJ who ' +
        'searches: for a system, a master, a doctrine, a method, and who dismantles each find ' +
        'with the same rigour he used to look for it. Under stress the spiral is one of doubt: ' +
        'the 6 doubts the plan, the 4 doubts you, the 9 switches off instead of deciding. What ' +
        'stabilises this tritype is not finding the right answer; it is agreeing to act without ' +
        'one.',
    },
    '479': {
      deep: DEEP_T479_EN,
      name: 'The Gentle Spirit (Fauvre)',
      text:
        'Sensitivity, imagination and peace. The softest of the 27 — dreams high, feels deep, ' +
        'and retreats from conflict.',
      asIntj:
        'This is the tritype that looks least like an INTJ and most disconcerts anyone ' +
        'expecting the stereotype. The 7 and the 4 feed Ni with imagination and affection, and ' +
        'the vision comes out poetic before it comes out strategic. Execution runs through the ' +
        '9 and is the fragile point of the whole thing: nothing here forces the hand, so Te has ' +
        'to be trained deliberately or an entire life stays in draft mode. The heart centre is ' +
        'at the front and is the liveliest part of the structure, which in a type with tertiary ' +
        'Fi produces an unusual combination — a great deal of inner life and very little ' +
        'language for it. Under stress the three retreat in different ways: the 4 grows sad, ' +
        'the 7 gets distracted, the 9 falls asleep. This is the INTJ who needs less rigour and ' +
        'more of someone expecting something from him on a fixed date.',
    },
  },
};
