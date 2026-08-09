/**
 * The unabridged analysis of six of the twelve temperament blends, in an INTJ:
 * the three remaining phlegmatic-led pairings and the three sanguine-led ones.
 * Rendered only once the reader has named theirs.
 */

import type { VariantDeep } from '../../types';
import type { SourceId } from '../../sources';
import type { TemperamentPairKey } from '../../profile-keys';

/** The six blends in this file. `Extract` makes a typo a compile error. */
type BlendKeyB = Extract<
  TemperamentPairKey,
  | 'phlegmatic-melancholic'
  | 'phlegmatic-choleric'
  | 'phlegmatic-sanguine'
  | 'sanguine-melancholic'
  | 'sanguine-choleric'
  | 'sanguine-phlegmatic'
>;

const COMMON: SourceId[] = ['lahaye-1984', 'littauer-1983', 'kagan-1994', 'rothbart-2011'];

export const TEMPERAMENTS_DEEP_B_EN: Record<BlendKeyB, VariantDeep> = {
  /* ------------------------------------------------------------------ */
  /* Phlegmatic–melancholic — the motionless archivist                   */
  /* ------------------------------------------------------------------ */

  'phlegmatic-melancholic': {
    lede:
      'You are the INTJ who knows more than anyone around you suspects, and the reason nobody ' +
      'suspects it is not modesty — it is that nothing inside you <em>requires</em> it to be ' +
      'known. The phlegmatic base removes urgency; the melancholic secondary installs a standard ' +
      'no finished thing ever reaches. Between them, Ni gets what almost no other INTJ has: ' +
      'unlimited time and silence to spare. And <strong>Te</strong>, the function charged with ' +
      'turning what you see into an object that exists in the world, goes years without receiving ' +
      'any current at all.',

    sections: [
      {
        eyebrow: 'The mechanism',
        title: 'High bar, low voltage',
        paragraphs: [
          'In most people the melancholic hurts. The distance between the internal standard and ' +
            'the thing actually made produces suffering, and suffering is fuel: sooner or later ' +
            'it pushes the work out into the open. That is what happens in a ' +
            'melancholic–choleric INTJ and, more slowly, in a melancholic–phlegmatic one. Your ' +
            'ordering inverts that arrangement and switches the pump off. The phlegmatic absorbs ' +
            'the frustration before it becomes pressure. You are left with the whole standard and ' +
            'none of the pain that would have made it useful.',
          'The effect on the stack is surgical. Ni runs better in you than in most INTJs, because ' +
            'introverted intuition needs precisely what you have in surplus — dead time, no ' +
            'emotional interruption, permission to leave a question maturing for three years. ' +
            'Tertiary Fi registers everything accurately and asks for no voice. And Te, which in ' +
            'Grant’s development ordering (1983) would mature between adolescence and the ' +
            'thirties — a hypothesis about type development, never verified in a cohort — matures ' +
            'here <em>inwards</em>: you organise entire systems mentally, with rigour and ' +
            'criteria, and you almost never assemble them outside.',
          'Hence the signature of this blend: first-order knowledge and no output whatsoever. The ' +
            'document exists at very high resolution inside your head. Publishing it would take ' +
            'an act of Te that nothing, at any point in your day, obliges you to perform.',
        ],
      },
      {
        eyebrow: 'The day',
        title: 'What this looks like on an ordinary Tuesday',
        paragraphs: [
          'The blend is not recognised by dramatic episodes — it has none. It is recognised by ' +
            'the texture of an ordinary day, which is remarkably comfortable and remarkably ' +
            'unproductive in the only sense Te cares about: nothing leaves.',
        ],
        points: [
          'You answer messages two days late and feel no anxiety about it — not even when the ' +
            'person at the other end clearly does.',
          'In a heated argument your pulse does not change. You notice that it does not, and ' +
            'occasionally that strikes you as slightly inhuman.',
          'There is a document — an architecture, a thesis, a chapter, a plan — whose first third ' +
            'you have rewritten four times in eight months, with no deadline, no chasing and no ' +
            'distress.',
          'You know exactly who is incompetent on your team, with evidence and dates, and you ' +
            'have never told anyone with the authority to act on it.',
          'Interruption does not annoy you: it simply deletes the thread. You start again from ' +
            'scratch without complaining, which teaches people to interrupt you more.',
          'You learn whole fields for pleasure, to a level that would embarrass specialists, and ' +
            'you do not count this as an asset — you count it as a hobby.',
        ],
      },
      {
        eyebrow: 'Other people',
        title: 'Why your competence does not circulate',
        paragraphs: [
          'Technical reputation is not built on presence: it is built on artefacts. People ' +
            'attribute competence to whoever produced the thing they can point at — the document, ' +
            'the system, the signed decision, the sentence said in the large meeting. You produce ' +
            'the analysis and not the artefact, and the result is a very specific social ' +
            'position: you are the person everyone consults privately and nobody cites publicly. ' +
            'They consult you because your reading is good. They do not cite you because there is ' +
            'nothing with your name on it to cite.',
          'Tertiary Fi does the second half of the damage. It records each of those episodes ' +
            'whole — the idea you gave in the corridor that turned up in someone else’s deck, the ' +
            'credit that dissolved, the promotion that went to the one who spoke. It records and ' +
            'it files. In a choleric INTJ that file becomes a confrontation within weeks. In ' +
            'yours, filing costs nothing, and it is precisely because it costs nothing that the ' +
            'file is never emptied. The account stays open for years, with no visible interest.',
          'The cruel detail is that you are pleasant to work with. You do not intimidate, do not ' +
            'compete, do not claim — so nobody is being unfair to you on purpose. People simply ' +
            'responded to the signal you sent, and the signal you sent was an absence of claim.',
        ],
      },
      {
        eyebrow: 'The clock',
        title: 'The decade that passes without hurting',
        paragraphs: [
          'Every temperament blend has a characteristic way of going wrong over time. Yours is ' +
            'the only one whose error produces no symptom. A choleric–sanguine INTJ arrives at ' +
            'thirty-five with wreckage — abandoned projects, burnt relationships, a body sending ' +
            'the bill. You arrive at thirty-five with a record that is clean, quiet and ' +
            'under-lived. There is nothing to repair, which is why nothing gets repaired.',
          'Recognition almost never comes from inside. It arrives as an external shock, and it is ' +
            'usually banal: someone ten years younger takes the role that was obviously yours; a ' +
            'colleague publishes, badly, the idea you had whole in 2019; a reorganisation reveals ' +
            'that nobody above you quite knew what you did. And then Ni does the cruellest thing ' +
            'in its repertoire — it shows you the entire counterfactual at once, in high ' +
            'resolution, with dates.',
          'It is worth naming what that moment is not. It is not evidence that you lacked talent, ' +
            'and it is not evidence that it is late. It is the invoice for a decade of low ' +
            'current, presented in one lump because nothing presented it in instalments. The ' +
            'useful response is not to raise the bar — the bar was never the problem — but to ' +
            'install, from outside, the pressure your blend does not generate on its own.',
        ],
      },
      {
        eyebrow: 'Where this comes from',
        title: 'What can be claimed and what cannot',
        paragraphs: [
          'The idea that a dominant temperament combines with a secondary one to produce twelve ' +
            'profiles is not ancient: it is Tim LaHaye’s, in <em>Why You Act the Way You Do</em> ' +
            '(1984), with Florence Littauer having popularised the four types the year before. In ' +
            'Galen (c. AD 170) the mixtures are nine and are organised along hot/cold and ' +
            'dry/moist, with no notion of dominant and secondary; in the Hippocratic corpus ' +
            '(c. 400 BC) the four humours are the physiology of health, not character. The ' +
            'structure describing you on this page is four decades old.',
          'Part of it does have ballast, though — and it is the phlegmatic half. Kagan (1994) ' +
            'followed inhibited and uninhibited children by reactivity; Rothbart (2011) defines ' +
            'temperament as early differences in reactivity and self-regulation, observable in ' +
            'the first months. A low-reactive baseline is a real, early and reasonably stable ' +
            'individual difference. What has no ballast is the other half: no peer-reviewed ' +
            'instrument measures a “high melancholic standard”, and combining the two under a ' +
            'named label is descriptive vocabulary, not a finding.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Depth nobody else can afford',
        text:
          'Ni with years of uninterrupted runtime produces a kind of knowledge concentrated ' +
          'effort cannot buy: you understand whole fields by their structure rather than their ' +
          'summary, and you survive contact with actual specialists. It is the blend’s real ' +
          'advantage, and it is rare even among INTJs.',
      },
      {
        title: 'Genuine unshakeability',
        text:
          'A crisis does not alter your internal state. While the room shouts, you read the ' +
          'incident log and ask the right question. This is the low reactivity Kagan and Rothbart ' +
          'describe in measurable terms — the one part of this profile with research behind it, ' +
          'though none of that research mentions MBTI types.',
      },
      {
        title: 'Judgement without vanity',
        text:
          'You have no need to be seen being right, which means you can change your mind without ' +
          'paying an ego toll. In a type whose classic trap is a closed certainty, that is a ' +
          'valuable immunity: you revise the reading in silence and nobody needs to know there ' +
          'was another one.',
      },
      {
        title: 'A presence that lowers the temperature',
        text:
          'People bring you problems because you do not add heat to the problem. In an INTJ that ' +
          'disables the most expensive half of the stereotype — perceived arrogance — without ' +
          'costing you any of the rigour.',
      },
    ],

    traps: [
      {
        title: 'Lifelong preparation',
        text:
          'The runway is infinite and comfortable. There is always one more reading that would ' +
          'make the work better, and it is always true, which makes the trap indistinguishable ' +
          'from diligence when seen from inside.',
      },
      {
        title: 'Consent by silence',
        text:
          'You do not object in the moment, because objecting would take an impulse that does not ' +
          'arrive. Your lack of reaction is recorded as agreement, the decision proceeds, and Fi ' +
          'files the objection with a date. Months later nobody understands where your resentment ' +
          'came from — not least because you never showed any.',
      },
      {
        title: 'The bar as an alibi',
        text:
          '“It is not good enough yet” is technically true in almost every case and is also the ' +
          'exact mechanism of postponement. From inside, the two are indistinguishable, which is ' +
          'why only an external deadline can separate them.',
      },
      {
        title: 'Outsourcing your own agenda',
        text:
          'Refusing costs more than accepting, so you accept: someone else’s project, the useless ' +
          'meeting, the supporting role. Summed over ten years, that is an entire career designed ' +
          'by people who merely asked.',
      },
    ],

    stress:
      'This blend does not explode. Under sustained pressure it <em>sinks</em>: research becomes ' +
      'a hiding place, you refactor, reorganise and reread instead of delivering, you answer ' +
      'fewer messages, and the week loses its edges. The signal is not agitation — it is the ' +
      'shrinking radius of your world. First the optional disappears, then the social, then ' +
      'anything with a fixed hour. When inferior Se finally shows up, and in Grant’s ordering it ' +
      'is last in the queue and least conscious, it arrives quietly and in private: displaced ' +
      'sleep, food as anaesthetic, hours of undirected screen, a body noticed only once it ' +
      'already hurts. Nobody around you will see a crisis, because there is none to see, and that ' +
      'is exactly why this state can last two years without anyone — including you — naming it.',

    growth: [
      {
        title: 'An external deadline with a witness',
        text:
          'Intention does not move this blend; a public date does. Book the talk, accept the ' +
          'panel, sign the delivery contract before the work is ready. You need someone with real ' +
          'authority to say “it is finished” — because you never will.',
      },
      {
        title: 'Cut the object, not the bar',
        text:
          'Do not lower the standard: shrink the scope until the standard is reachable this ' +
          'month. A paper instead of the book, a module instead of the system. Your bar works ' +
          'well on small objects; it is only impossible on large ones.',
      },
      {
        title: 'Say the objection in the room, in one sentence',
        text:
          'It is not confrontation, it is bookkeeping. One short, boring sentence said at the ' +
          'time converts the archive into a current account and stops the five-year invoice being ' +
          'presented in one go — which is, for you, the only genuinely dangerous format.',
      },
      {
        title: 'Claim it in writing',
        text:
          'Once a quarter, write down what you did, with names and numbers, for whoever decides. ' +
          'It feels embarrassing and it is: the alternative is remaining the private consultant ' +
          'to an entire organisation that does not know your name.',
      },
    ],

    misread:
      'People read you as modest, easy-going or unambitious — three words that describe the ' +
      'surface and miss the reason. Outside typers usually guess ISFJ or INFP, because the ' +
      'absence of aggression erases every visible trace of Te. And those close to you sometimes ' +
      'mistake low reactivity for depression. The distinction matters: low reactivity is a stable ' +
      'baseline and it takes pleasure away from nothing. If, alongside the calm, there is a loss ' +
      'of interest in what used to matter, with changes to sleep and appetite, that is a clinical ' +
      'question rather than a question of temperament.',

    versus:
      'The confusion is with the melancholic–phlegmatic, and it is subtle and decisive. There the ' +
      'standard commands and it <em>hurts</em>: unfinished work is active suffering, and now and ' +
      'then that suffering converts into a burst of output. Here the standard is just as high and ' +
      'does not hurt, because the phlegmatic absorbs the frustration before it can become fuel — ' +
      'so it never converts. The test: think of the best unfinished thing you own. If remembering ' +
      'it stings, the melancholic leads. If remembering it is merely a recorded fact — “that is ' +
      'there” — the phlegmatic leads, and you are on the right page.',

    sources: [...COMMON, 'galen-c170', 'hippocrates-c400bc', 'grant-1983'],
  },

  /* ------------------------------------------------------------------ */
  /* Phlegmatic–choleric — the serene absolutist                         */
  /* ------------------------------------------------------------------ */

  'phlegmatic-choleric': {
    lede:
      'You have two states and nothing between them. The normal one is calm — long, real, ' +
      'effortless, immune to provocation, deadlines and rudeness. The other is the blade, and it ' +
      'does not negotiate. The mistake everyone makes is imagining there is a gradual route from ' +
      'the first to the second, some escalation they could follow. There is not: your choleric ' +
      'secondary is not a thermostat, it is a <strong>switch</strong>. It sleeps for months and ' +
      'wakes up whole.',

    sections: [
      {
        eyebrow: 'The mechanism',
        title: 'A switch, not a thermostat',
        paragraphs: [
          'Almost every temperament blend modulates continuously: the secondary colours the ' +
            'dominant all the time, by degrees. Yours does not. The phlegmatic governs the whole ' +
            'house and the choleric takes no part in the administration — it intervenes. Until it ' +
            'intervenes it is not muted or restrained: it is genuinely absent. That is why your ' +
            'calm is not a mask and costs no energy, and it is also why it gives nobody any ' +
            'warning.',
          'Two things throw the switch, and it is worth knowing which are yours. The first is an ' +
            'Fi line crossed — disloyalty, deliberate lying, someone treated without dignity in ' +
            'front of you. Fi is tertiary in Grant’s ordering (1983), strong in intensity and ' +
            'weak in articulation, and it is exactly that profile which produces an absolute ' +
            'limit you never stated out loud before it was crossed. The second is incompetence ' +
            'ceasing to be irritating and becoming dangerous: the moment Ni shows the outcome and ' +
            'the outcome involves real harm, Te fires with all the force the choleric supplies, ' +
            'and there is no deliberation left to do.',
          'From the moment it fires, the blend becomes a different person for a few hours — ' +
            'direct, fast, with no appetite for explanation and a verbal economy that frightens ' +
            'anyone who only knew the patient version. Then the phlegmatic returns and closes ' +
            'over it, with no hangover. That absence of hangover matters: it is what stops the ' +
            'episode from becoming a lesson.',
        ],
      },
      {
        eyebrow: 'The latency',
        title: 'The interval between knowing and acting',
        paragraphs: [
          'Your reading is rarely wrong. Ni saw in the first month that the hire would not work, ' +
            'that the contract had a clause designed to trap you, that the relationship had ' +
            'already ended and was merely continuing. The phlegmatic does not dispute the reading ' +
            '— it simply does not act on it. And so you carry, for a year or three, an accurate ' +
            'forecast of a situation that is rotting.',
          'This is the blend’s characteristic cost, and it never appears in the popular ' +
            'descriptions because it is not dramatic. When the choleric finally intervenes you ' +
            'are both right and late, and being right does not give the year back. Worse: the ' +
            'intervention arrives too late to save anything and too early to be understood, so it ' +
            'almost never repairs — it only ends.',
          'Watch the temporal pattern, which is your most reliable tell: you tolerate something ' +
            'for a long, uniform stretch and then resolve it in an afternoon. There is never an ' +
            'intermediate phase of negotiation, of rising complaint, of warning. That is not a ' +
            'strategic choice. The intermediate phase would require sustained irritation, and ' +
            'sustained irritation is exactly what the phlegmatic does not produce.',
        ],
      },
      {
        eyebrow: 'Other people',
        title: 'The bill presented closed',
        paragraphs: [
          'Because the choleric appears rarely, it appears heavily. The people around you learn ' +
            'to read your temperature with an attention they would never give to someone who ' +
            'flares up weekly, and a single “no” said in that tone closes a subject permanently. ' +
            'It is an authority nobody builds on purpose and nobody can spend twice in the same ' +
            'six months.',
          'The other side is that they also learn your silence is safe. Nobody escalates against ' +
            'someone who reacts early; against you they escalate slowly, because nothing happened ' +
            'the first nineteen times. And then the twentieth receives the answer the first ' +
            'deserved. From outside that looks disproportionate, and strictly it is: the response ' +
            'is proportionate to the whole archive rather than to the last episode, and the ' +
            'archive was invisible to everyone but you.',
        ],
        points: [
          'The person on the receiving end almost always says they “were never warned”, and from ' +
            'their point of view they are telling the truth.',
          'You remember the dates. Not as deliberate grudge-keeping — Fi files on its own, with ' +
            'unnecessary precision, and the phlegmatic never empties the file.',
          'There is no middle register: you have no repertoire for ordinary annoyance, for the ' +
            'curt note, for the Tuesday complaint.',
          'After the episode you return immediately to normal, which people read as calculated ' +
            'coldness and is only the phlegmatic base resuming command.',
          'You rarely regret the cut. Occasionally you regret the timing — and even that regret ' +
            'generates no hurry the next time round.',
        ],
      },
      {
        eyebrow: 'At work and behind closed doors',
        title: 'Why they call you when it is ugly',
        paragraphs: [
          'In a real crisis your internal state does not change, and that is a concrete ' +
            'operational advantage rather than a pose. While the rest of the room runs on ' +
            'cortisol, you run at your usual frequency and Ni keeps delivering an outcome. Add a ' +
            'choleric available for the moment the hard decision has to be taken, and you are ' +
            'exactly the right person for the worst day of the quarter.',
          'The weakness is the rest of the quarter. Priority, for you, does not move under ' +
            'insistence: when you see no reason, you do not change, and you feel no obligation to ' +
            'justify why not. Managers read that as stubbornness and peers read it as ' +
            'disengagement, when in fact it is an absence of social reactivity. And since you do ' +
            'not explain, the wrong interpretation is the only one available.',
        ],
      },
      {
        eyebrow: 'Where this comes from',
        title: 'The ordering is the whole claim — and nobody measured it',
        paragraphs: [
          'Every difference between you and the choleric–phlegmatic lies in the ordering, and the ' +
            'ordering is precisely the part of the model nobody has measured. The ' +
            'dominant/secondary pairs are LaHaye’s (1984), popularised in the same publishing ' +
            'circuit where Littauer (1983) had spread the four types. There is no instrument that ' +
            'establishes which half comes first; there is a description you either recognise or ' +
            'do not.',
          'What survives as measurable sits on the phlegmatic side: Rothbart (2011) treats ' +
            'reactivity and self-regulation as continuous dimensions and Kagan (1994) treats ' +
            'them as categories, but both describe them as early and observable ' +
            '— and a low baseline is a real difference. Eysenck and Eysenck (1985) did ' +
            'use the four old names as labels for the quadrants of extraversion × neuroticism, ' +
            'which is sometimes read as science having validated the humours. It did not: that ' +
            'was a mnemonic borrowing laid over two measured dimensions. And none of it describes ' +
            'a “choleric switch”, which is descriptive language of yours and mine, not anybody’s ' +
            'finding.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Stability under real fire',
        text:
          'It is not self-control, it is an absence of reaction — which is why it does not run ' +
          'out. You keep thinking clearly in situations that disorganise very competent people, ' +
          'and Ni loses no precision under threat, because the threat never alters your internal ' +
          'state.',
      },
      {
        title: 'Authority you did not build',
        text:
          'Rare use gives the use weight. One “no” from you is worth ten from someone who bristles ' +
          'weekly, and the effect is permanent. It is the only form of authority that requires no ' +
          'maintenance, and you hold it without having done anything to earn it.',
      },
      {
        title: 'The capacity to end things',
        text:
          'You can finish what most people drag out for years: a bad contract, a wrong ' +
          'partnership, an empty relationship. Combined with tertiary Fi, which knows exactly ' +
          'where the line is, that is a rare competence — and even when it arrives late, it ' +
          'arrives.',
      },
      {
        title: 'No vanity in daily argument',
        text:
          'You do not need to win Thursday’s disagreement, which makes you surprisingly easy to ' +
          'work with on things that do not matter. The cost and the advantage are the same one: ' +
          'you only engage when you really engage.',
      },
    ],

    traps: [
      {
        title: 'Latency',
        text:
          'The blend’s central error is not the cut: it is the year before it. You saw, you ' +
          'recorded, you did not act, and the situation deteriorated in silence while you held ' +
          'the correct reading whole in your head.',
      },
      {
        title: 'Tolerance mistaken for approval',
        text:
          'Your calm reads as consent to whoever should have been warned, and as contempt to ' +
          'whoever expected a discussion. Neither reading is unfair: you supplied no third one.',
      },
      {
        title: 'The blade as the only tool',
        text:
          'You have calm and you have rupture, and nothing in between. You lack ordinary ' +
          'annoyance, the small complaint, the weightless “that bothers me” — which is precisely ' +
          'the tool that would settle ninety per cent of cases before they become cases.',
      },
      {
        title: 'No hangover',
        text:
          'After the cut the phlegmatic closes over it and there is not enough remorse left to ' +
          'interrupt the pattern. That is why it repeats decade after decade, with different ' +
          'people and the same shape.',
      },
    ],

    stress:
      'This blend comes apart in the direction of severance, not collapse. Under prolonged strain ' +
      'the phlegmatic keeps absorbing — because that is what it does — until absorbing stops ' +
      'being possible; and then the choleric does not wake once, it wakes repeatedly. The range ' +
      'of available states narrows to two and the interval between them disappears. Within a few ' +
      'weeks you end relationships, contracts and commitments that took years to build, each ' +
      'decision defensible on its own and the set of them a demolition. Then the phlegmatic ' +
      'returns, closes over it, and the absence of remorse stops the episode teaching you ' +
      'anything. Inferior Se comes in through the body, the only route left when nothing is said: ' +
      'a locked jaw, short sleep, driving faster than necessary, an anger without an object that ' +
      'shows up physically before it shows up in words. The most reliable warning is not that you ' +
      'feel bad — it is that you notice the switch has fired twice in the same month.',

    growth: [
      {
        title: 'Install the middle register',
        text:
          'Say the small irritation while it is small, in a deliberately dull sentence, the same ' +
          'day. You will find it unnecessary — that is the point. The aim is not to be heard: it ' +
          'is to stop the archive growing to the size where the blade is the only available ' +
          'response.',
      },
      {
        title: 'Put a date on what you tolerate',
        text:
          'Decide in writing, in advance, the point at which you will act: “if it is still like ' +
          'this in March, I leave”. It converts latency into a rule and takes the decision out of ' +
          'the moment when anger distorts it. It is the only way your correct reading arrives in ' +
          'time.',
      },
      {
        title: 'Give one explicit warning',
        text:
          'One warning, once, spelled out — not to be fair to the other person but so that the ' +
          'cut stops being an event with no history. If you warned and nothing changed, the ' +
          'rupture becomes a consequence rather than a mystery, including for you.',
      },
      {
        title: 'Do not treat calm as evidence',
        text:
          'Feeling nothing is not proof that the situation is fine. Your absence of reaction is a ' +
          'property of your nervous system, not a datum about the world — and confusing the two ' +
          'is how you end up inside situations any other INTJ would have broken off in the first ' +
          'month.',
      },
    ],

    misread:
      'From a distance people read you as easy, accommodating or limitless — someone who “does ' +
      'not mind”. Up close, anyone who has witnessed an intervention starts describing you as ' +
      'short-tempered, which is the exact opposite of what happens. Both readings fail because ' +
      'they assume two people where there is one mechanism with two states. In outside typing ' +
      'this usually becomes ISTP or ISFP, because the patience erases visible Te and the ' +
      'intervention looks like a sensory impulse when it is in fact a conclusion Ni reached ' +
      'months ago and dammed.',

    versus:
      'The confusion is with the choleric–phlegmatic, and reversing the order changes the whole ' +
      'person. There the choleric fires first — the decision is taken in minutes — and the ' +
      'phlegmatic arrives afterwards to make it irreversible and silent; that profile’s signature ' +
      'is deciding fast and not explaining. Yours is the opposite: the silence comes first and the ' +
      'decision comes late. The test is a stopwatch. Measure the interval between the moment you ' +
      'knew something was wrong and the moment you did something about it. Minutes to days means ' +
      'the choleric leads. Months to years means the phlegmatic does.',

    sources: [...COMMON, 'eysenck-eysenck-1985', 'grant-1983'],
  },

  /* ------------------------------------------------------------------ */
  /* Phlegmatic–sanguine — the quiet host                                */
  /* ------------------------------------------------------------------ */

  'phlegmatic-sanguine': {
    lede:
      'You are the INTJ people like without reservation, and it is not a performance: the warmth ' +
      'is real, the patience is real, and nobody who knows you would call you arrogant or cold. ' +
      'You are also the INTJ in whom <strong>Te</strong> is least visible from outside. Two ' +
      'sources of calm and none of demand — which means Ni still sees the outcome with the same ' +
      'uncomfortable precision as ever, and nothing, at any point in the system, converts that ' +
      'into action.',

    sections: [
      {
        eyebrow: 'The mechanism',
        title: 'Warmth without demand',
        paragraphs: [
          'The phlegmatic removes urgency and the sanguine secondary adds an appetite for ' +
            'company. This is the only one of the twelve blends where inferior Se gets fed ' +
            'pleasantly rather than dangerously: flavours, rooms, long conversations, physical ' +
            'presence without risk. Compared with the sanguine–choleric, which uses the same ' +
            'inferior function as an accelerator, yours uses it as comfort. Better for the body, ' +
            'worse for the work.',
          'The stack does not change. Ni delivers the same closed outcome, Te stays sharp and ' +
            'private, Fi holds the same non-negotiable lines. What changes is the output: in a ' +
            'blend with the choleric, Te becomes an order given; with the melancholic, a standard ' +
            'enforced; in yours it becomes nothing at all. It remains a very high-quality ' +
            'internal commentary on other people’s work.',
          'It is worth being precise about what is rare here. Sanguine is social ' +
            'stimulus-seeking, which works against introversion and against an inferior sensing ' +
            'function — which is why it rarely leads in an INTJ. As a <em>secondary</em> over a ' +
            'phlegmatic base, though, it demands no audience: it only asks that company be easy. ' +
            'That low-key version of the sanguine is perfectly compatible with an INTJ, and it is ' +
            'what produces this blend.',
        ],
      },
      {
        eyebrow: 'How you are read',
        title: 'The warmth is genuine, and that is what confuses everyone',
        paragraphs: [
          'You like people in small doses, you host well, you listen well, you ask the good ' +
            'question. None of it is a front — which is why the misunderstanding is so ' +
            'persistent. People watching you conclude that company recharges you, and they ' +
            'conclude wrongly. You are still spending energy; you are simply not spending ' +
            'friction.',
          'The concrete pattern is easy to recognise: the dinner goes well, you stay late, ' +
            'everyone leaves convinced you loved it — and the next two days have nothing inside ' +
            'them. There is no drop in mood, no regret, none of the melancholic hangover of ' +
            'someone who exposed themselves. There is simply no current left for anything else. ' +
            'Because it does not hurt, you have never done the arithmetic.',
          'That same ease produces an asset most INTJs never get: people tell you things. You ' +
            'receive information — about teams, about intentions, about what actually happened in ' +
            'that meeting — that would never reach an INTJ who intimidates. Ni does remarkable ' +
            'work with that material, and the result is a reading of the environment more ' +
            'accurate than almost anyone’s around you. Which you do not use.',
        ],
      },
      {
        eyebrow: 'What accumulates',
        title: 'The resentment that never becomes anger',
        paragraphs: [
          'There is a resentment specific to this blend, and it is the most reliable symptom that ' +
            'the description above is yours: watching someone take credit for a solution you had ' +
            'whole in your head months earlier and never had enough heat to defend. It is not ' +
            'envy — you know your version was better, and that is exactly why it stings.',
          'What makes the resentment peculiar is that it never becomes anger. The phlegmatic does ' +
            'not retain heat, so there is no explosive accumulation as in the ' +
            'phlegmatic–choleric. What happens is quieter and more corrosive: a private ' +
            'downgrading of the person. You do not argue, do not confront, do not expose — you ' +
            'simply revise your estimate of them downwards, permanently, and stay friendly. Over ' +
            'ten years that produces a cordial INTJ who privately holds a rather low opinion of ' +
            'nearly every colleague, none of whom ever knew.',
        ],
        points: [
          'You agree in meetings to decisions you know will fail, and you know which quarter they ' +
            'will fail in.',
          'You rarely negotiate salary, title or scope — not out of fear, but because friction ' +
            'feels expensive and the subject never feels urgent.',
          'You help a great deal, and helping is socially rewarded, so the day fills itself with ' +
            'reasonable, irrelevant things.',
          'You hold a precise mental list of who is good and who is not, and you have never ' +
            'communicated it to anyone.',
          'When someone finally asks what you think, the answer comes out complete, structured ' +
            'and obviously long since finished — which tends to surprise the room.',
        ],
      },
      {
        eyebrow: 'Where this comes from',
        title: 'The blend the popular literature cannot describe',
        paragraphs: [
          'The twelve dominant/secondary pairs are LaHaye’s (1984); Littauer (1983) had ' +
            'popularised the four types in the same circuit. The bias of that circuit is worth ' +
            'noting, because it affects you directly: it was motivational writing, and the ' +
            'motivational register treats the sanguine as “the popular one” and the melancholic ' +
            'as “the deep one”, reserving praise for both. A warm, low-propulsion profile like ' +
            'yours makes poor inspirational copy, which is why it is the least described and the ' +
            'worst described of the twelve — when it appears at all, it appears as laziness.',
          'What contemporary research licenses is modest and worth more than the label. Rothbart ' +
            '(2011) treats temperament as early reactivity and self-regulation, with positive ' +
            'affectivity and approach as dimensions separate from negative reactivity; Kagan ' +
            '(1994) measured inhibition and disinhibition in child cohorts. In other words: being ' +
            'simultaneously low-reactive and prone to positive affect is a plausible, observable ' +
            'dimensional combination. The name “phlegmatic–sanguine”, and the whole portrait that ' +
            'comes with it, is descriptive vocabulary — there is no measurement behind it.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Access to information the type normally loses',
        text:
          'People tell you what actually happened. An INTJ who intimidates receives edited ' +
          'versions; you receive originals. Combined with Ni, that produces a model of the ' +
          'organisational environment more accurate than any other blend on the list can build.',
      },
      {
        title: 'Ni without paranoia',
        text:
          'The warm base keeps your model of other people generous, and a generous model is in ' +
          'practice a more accurate one: you do not assign hostility where there was incompetence ' +
          'or design where there was accident. That protects you from Ni’s classic trap, the ' +
          'over-elaborate theory about other people’s intentions.',
      },
      {
        title: 'Very low cost of proximity',
        text:
          'Teams function near you. Marriages last near you. In a type famous for being difficult ' +
          'that is not a detail — it is a lifelong advantage, and it is yours without effort.',
      },
      {
        title: 'Fast recovery',
        text:
          'You do not hold heat: a bad argument on Friday does not contaminate Saturday. That ' +
          'gives you longevity in contexts that grind down any warmer INTJ, and explains why you ' +
          'endure years in environments others would have left.',
      },
    ],

    traps: [
      {
        title: 'Pleasant drift',
        text:
          'Life fills up with reasonable things. None of them is wrong, none of them is yours, ' +
          'and together they occupy exactly the space where the work only you could do would have ' +
          'gone.',
      },
      {
        title: 'The automatic yes',
        text:
          'You agree because refusing is friction and friction feels expensive. Then you deliver ' +
          'what you agreed to, because Fi treats a given word as a value — so one second of low ' +
          'resistance becomes three months of work.',
      },
      {
        title: 'Chronic under-charging',
        text:
          'Salary, title, credit and scope sit systematically below your capacity, and nobody is ' +
          'cheating you: you never asked, and the absence of an ask is read as an absence of ' +
          'interest.',
      },
      {
        title: 'Silent contempt',
        text:
          'The private downgrading of people accumulates without ever being said, and one day it ' +
          'comes out whole — in a single sentence, at the wrong moment, with a precision that ' +
          'devastates. Whoever hears it cannot understand where it came from, because the surface ' +
          'has been cordial for ten years.',
      },
    ],

    stress:
      'This blend does not fight and does not detonate: it <em>dilutes</em>. Under pressure you ' +
      'become more available rather than less — more meetings accepted, more help given, more ' +
      'easy agreements, and less of your own work, until an entire week carries no mark of you at ' +
      'all. It looks like everything is fine, so nobody intervenes. The reliable signal is ' +
      'arithmetic: the amount of talking rises while the amount of saying falls. Inferior Se ' +
      'arrives as gentle excess — food, drink, small purchases, agreeable evenings that leave ' +
      'nothing behind — rather than as the violent excess of the hot blends. Because the state is ' +
      'comfortable, it can run for years without tripping a single alarm. When the alarm finally ' +
      'sounds it is not exhaustion in the usual sense: it is a sudden, dry piece of arithmetic, ' +
      'done at some late hour, in which you count what you have built and the number is far too ' +
      'small for the capacity you know you have.',

    growth: [
      {
        title: 'A public, dated commitment',
        text:
          'You need current from outside, because neither of your halves generates it. A date ' +
          'announced to someone who will chase you is worth more than any quantity of intention — ' +
          'and it is, in practice, the only thing that works.',
      },
      {
        title: 'Say Ni’s conclusion in the room',
        text:
          'One sentence, in the meeting where it matters, before someone else says it worse. Do ' +
          'not ask permission and do not soften it: your reading is good, and the only reason it ' +
          'is not circulating is temperature, not quality.',
      },
      {
        title: 'Negotiate once a year, on a fixed date',
        text:
          'Put it in the calendar and treat it as a technical task rather than a conflict. ' +
          'Outside a ritual you will never feel the impulse — and chronic under-charging is, over ' +
          'twenty years, this blend’s most expensive material damage.',
      },
      {
        title: 'Protect two hours before becoming available',
        text:
          'Your work first, kindness after. In the other order, kindness consumes the whole day, ' +
          'every day, and you reach the end of the year with an excellent reputation and no ' +
          'object bearing your name.',
      },
    ],

    misread:
      'Outside typers guess ISFJ, ENFP or INFP, because the surface is warmth and every trace of ' +
      'Te points inwards. People read you as unambitious — when what is missing is propulsion, ' +
      'not desire. And the most expensive error: they assume you hold no strong opinions about ' +
      'them. You do, in detail, with dates and a verdict, and partners tend to discover this far ' +
      'too late, at a moment when the whole assessment comes out at once and looks like sudden ' +
      'cruelty when it is only an old file being opened.',

    versus:
      'The confusion is with the sanguine–phlegmatic, the mirror. There the warmth leads: that ' +
      'person ignites first, catches fire over a subject or a companion, and the calm arrives ' +
      'afterwards to dissolve the impulse — easy ignition, no sustain. Here the calm leads: you ' +
      'do not ignite, you accompany, and the warmth is a colour laid over a base that was already ' +
      'stable. The quickest test is the party. If you arrive with energy and fade over the ' +
      'evening, the sanguine leads. If you arrive neutral and only warm up when the conversation ' +
      'becomes one subject with one person, the phlegmatic leads.',

    sources: [...COMMON, 'grant-1983'],
  },

  /* ------------------------------------------------------------------ */
  /* Sanguine–melancholic — the enthusiast who collapses                 */
  /* ------------------------------------------------------------------ */

  'sanguine-melancholic': {
    lede:
      'Ignition, then audit. In an INTJ the sanguine catches fire on dangerous material: it is ' +
      'not novelty in the environment that excites you, it is <strong>Ni showing you the finished ' +
      'work</strong> — whole, coherent, brilliant — before the first line exists. The euphoria is ' +
      'real and the vision is usually good. Then the melancholic secondary arrives and does what ' +
      'it does: it measures the distance between what was seen and what exists, and concludes, ' +
      'with technical justification, that what exists is unworthy.',

    sections: [
      {
        eyebrow: 'The mechanism',
        title: 'The finished work, before the first line',
        paragraphs: [
          'This is the point that changes everything, and the reason generic advice about ' +
            '“discipline” does nothing for you. Your enthusiasm is not shallow — it is the most ' +
            'precise thing you have. Ni converges on a single outcome and delivers it whole, ' +
            'without stages; the sanguine takes that delivery and turns it into immediate heat, ' +
            'with a need to say it out loud. Twenty-four hours after the idea, someone has ' +
            'already heard you describe the finished product with the detail of a person who has ' +
            'used it.',
          'The structural problem is that the comparison standard is not external. It is not the ' +
            'competition, not the state of the art, not what would be good enough for the client. ' +
            'It is Ni’s image, which is always superior to any implementation because it never ' +
            'passed through a constraint of matter, time or money. The melancholic secondary ' +
            'compares the real thing with that image and issues a verdict of unworthiness that ' +
            'is, taken on its own, always correct.',
          'It is that technical correctness which makes the trap so hard to escape. Each ' +
            'individual assessment of yours holds up. The error is in the aggregate: a standard ' +
            'calibrated against an impossible image will, by construction, fail absolutely ' +
            'everything that could ever exist — including the things that would have been ' +
            'excellent.',
        ],
      },
      {
        eyebrow: 'The cycle',
        title: 'Four beats, and the fifth nobody sees',
        paragraphs: [
          'The shape repeats with almost mechanical regularity, which is bad news and also the ' +
            'best lever you have: a predictable pattern can be interrupted at a specific point.',
        ],
        points: [
          'Days 1 to 3 — ignition. The vision arrives whole, you tell someone, and the quality of ' +
            'what you say is genuinely high. Someone catches fire alongside you.',
          'Week 2 — first real contact with the material. The thing resists: the code is ugly, ' +
            'the prose is weak, the material will not obey. This is normal and universal, and you ' +
            'read it as a signal.',
          'Week 4 — comparison with Ni’s image, and the verdict. It is not diffuse discouragement; ' +
            'it is an articulate sentence, with good arguments, about why this does not deserve ' +
            'to continue.',
          'After — silence. The folder is not deleted, and that matters: you keep your beginnings, ' +
            'each holding the twenty best pages of something that never had a twenty-first.',
          'The fifth beat, invisible — every abandonment feeds the thesis that you finish ' +
            'nothing, and the thesis makes the next abandonment cheaper to justify. The cycle ' +
            'stops being behaviour and becomes identity.',
        ],
      },
      {
        eyebrow: 'The rarity',
        title: 'Why this is uncommon in an INTJ, and how to recognise it anyway',
        paragraphs: [
          'Sanguine is social stimulus-seeking and it works against introversion and against an ' +
            'inferior sensing function, which is why it rarely leads in an INTJ. When it does ' +
            'lead, what it lends is not general sociability. It is <em>ignition</em>, and the ' +
            'need to speak what caught fire. That distinction is what separates this blend from a ' +
            'typing error.',
          'The signs that this is what you are, rather than a mistyped ENFP, are specific: you do ' +
            'not want a party, you want <em>one</em> person to tell at eleven at night; the ' +
            'enthusiasm is shaped like a subject rather than like people, and the same company ' +
            'without the subject empties you in twenty minutes; you can be euphoric and still ' +
            'flatly refuse to leave the house; and the euphoria is about a structure — a system, ' +
            'a thesis, a chain of consequences — not about branching possibilities. Ni is still ' +
            'converging. It has simply started speaking.',
        ],
      },
      {
        eyebrow: 'The social cost',
        title: 'The reputation of someone who announces',
        paragraphs: [
          'You announce, and people remember announcements. Over a few years that builds a very ' +
            'well-defined reputation: someone who says big things and delivers few. It is the ' +
            'blend’s most painful wound, and not out of vanity — it is because Fi treats ' +
            'integrity as a non-negotiable value, and nothing accuses you more effectively than ' +
            'the distance between your word and your record.',
          'The defence you develop makes it worse. You start announcing less, telling people only ' +
            'once you are further along, saying nothing about the project “this time”. But the ' +
            'announcement was the only external accountability in your system. Without it, the ' +
            'cycle runs exactly as before, now entirely in private, where the melancholic verdict ' +
            'meets no resistance at all. Less shame, and even less delivered.',
        ],
      },
      {
        eyebrow: 'Where this comes from',
        title: 'A recognisable portrait with nothing behind it',
        paragraphs: [
          'The dominant/secondary combination is LaHaye’s (1984), and the portrait of the ' +
            'sanguine that has circulated since Littauer (1983) — expansive, warm, scattered — ' +
            'was written for a motivational readership, not drawn from a sample. No peer-reviewed ' +
            'journal measures “sanguine–melancholic”, and the phrase corresponds to no variable.',
          'What exists as measurement is dimensional and only approximate. Rothbart (2011) ' +
            'separates approach and positive affectivity from effortful control and negative ' +
            'affectivity, and nothing prevents one person scoring high on approach and high on ' +
            'punishing self-evaluation — but that coexistence is a score profile rather than a ' +
            'type, and nobody has studied it alongside MBTI type. Where this text describes the ' +
            'cycle confidently, it is describing a recognisable mechanism, not a measured result.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Real ignition',
        text:
          'You begin. Put like that it sounds trivial, and it is the thing melancholic-led INTJs ' +
          'fail to do across ten years of preparation. You cross the starting line by reflex, and ' +
          'that advantage cannot be taught.',
      },
      {
        title: 'Contagion with content behind it',
        text:
          'When you speak the vision, people follow — and unlike almost every enthusiast, what ' +
          'you are describing is a convergence of Ni rather than an optimism. The combination of ' +
          'heat and substance is what lets you gather people around something that does not yet ' +
          'exist.',
      },
      {
        title: 'A standard that is not decorative',
        text:
          'Your verdicts are technically correct. As a critic — of your own work and of other ' +
          'people’s — you have a high hit rate, and that is usable in review, consulting and ' +
          'mentoring, which is to say precisely where judging <em>is</em> the deliverable.',
      },
      {
        title: 'Restart always available',
        text:
          'The sanguine comes back. After any project collapse a new ignition is weeks away, ' +
          'which means you never run out of starting energy — the scarcest resource most people ' +
          'have is the one you hold in surplus.',
      },
    ],

    traps: [
      {
        title: 'The announcement as a substitute for delivery',
        text:
          'Telling the idea delivers a fraction of the pleasure of having finished it, and that ' +
          'fraction is enough to discharge the pressure. You spend in conversation, up front, ' +
          'what should have financed week three.',
      },
      {
        title: 'Rewriting the best twenty pages',
        text:
          'Instead of writing page twenty-one you improve the twenty that exist, because ' +
          'improving is pleasant and advancing is ugly. The work grows more polished and stays ' +
          'permanently the same size.',
      },
      {
        title: 'The thesis about yourself',
        text:
          '“I never finish anything” stops being an observation and becomes an identity — and an ' +
          'identity is a prediction that fulfils itself. It is the blend’s most expensive trap, ' +
          'costlier than any lost project.',
      },
      {
        title: 'Retroactive shame',
        text:
          'You cannot reread your own enthusiasm. The message you sent at two in the morning ' +
          'describing the project becomes unbearable within a fortnight, and the embarrassment ' +
          'teaches you to stay quiet — which is exactly the wrong lesson.',
      },
    ],

    stress:
      'Under stress this blend does not slow down: it <em>accelerates the cycle</em>. Ignitions ' +
      'get shorter and verdicts get faster, until you are starting and killing things inside the ' +
      'same week, sometimes the same day. And then comes the dangerous move, which is ' +
      'generalisation: the melancholic audit stops judging the work and starts judging the ' +
      'person, with the same argumentative apparatus and the same appearance of rigour. A verdict ' +
      'on a bad chapter is useful; the same verdict applied to a whole life is this blend’s real ' +
      'damage, far above any lost project. Inferior Se shows up as inverted nights, stimulants, a ' +
      'fresh start at three in the morning, the body used as fuel for ignition and then punished ' +
      'for the crash. The warning to look for is not sadness — it is the phrase “I am just like ' +
      'this” appearing where there used to be an assessment of one specific piece of work.',

    growth: [
      {
        title: 'Scope the size of one ignition',
        text:
          'Measure honestly how long your heat lasts — usually days, not quarters — and cut ' +
          'deliverables that fit inside that window. Finishing five small things dismantles the ' +
          'thesis about yourself in a way no argument can.',
      },
      {
        title: 'Publish the ugly version, on the date',
        text:
          'Not the finished version: the ugly one, on the day, with no final pass. The point is ' +
          'not the object — it is interrupting week four before the verdict has time to form, and ' +
          'proving empirically that the world accepts things worse than your bar.',
      },
      {
        title: 'Separate the audit from the work',
        text:
          'The melancholic cannot be allowed to run live. Book one day for assessment and no ' +
          'others; while producing, you do not judge. It is an artificial rule and it is the only ' +
          'thing that stops your two halves cancelling each other out.',
      },
      {
        title: 'Tell one person who will chase you',
        text:
          'Not the audience, which consumes the announcement and gives nothing back. One person, ' +
          'with an agreed date and the standing to ask “where is it?”. That preserves external ' +
          'accountability without the reputational cost of the public announcement.',
      },
    ],

    misread:
      'People read you as inconstant, and anyone who once caught fire alongside a project of ' +
      'yours that died reads you as unreliable — a judgement that hurts you more than it hurts ' +
      'them. Outside typing usually lands on ENFP or ENTP, because the surface is warmth and fast ' +
      'speech. And the worst misreading is your own: you diagnose a lack of discipline, when the ' +
      'mechanism is a standard calibrated against an image from Ni that no execution could ever ' +
      'reach. Discipline does not fix a problem of reference point.',

    versus:
      'The confusion is with the melancholic–sanguine, and the difference is one of base rather ' +
      'than ingredients. There the base is withdrawal: weeks of silence, a dense inner world, and ' +
      'the sanguine appears as windows that open by subject — three hours of genuine enthusiasm, ' +
      'after which the melancholic reoccupies the whole house. Here the base is ignition, and the ' +
      'melancholic is what <em>closes</em>. The test is to listen to the complaint of the people ' +
      'who live with you. If they complain that you disappear, the melancholic leads. If they ' +
      'complain that you promise, the sanguine leads.',

    sources: [...COMMON, 'grant-1983'],
  },

  /* ------------------------------------------------------------------ */
  /* Sanguine–choleric — the project agitator                            */
  /* ------------------------------------------------------------------ */

  'sanguine-choleric': {
    lede:
      'Heat on heat and no brake. The sanguine supplies appetite and presence, the choleric ' +
      'supplies force and decision, and together they produce an INTJ who looks like anything but ' +
      'one — fast, expansive, confrontational, permanently in motion. It is the rarest blend on ' +
      'this list and the one that most makes its owner doubt the test result. The engine has not ' +
      'changed: <strong>Ni is still converging and Te is still organising</strong>. What has ' +
      'changed is that both have been accelerated past recognition — and that Ni has lost the ' +
      'boredom it depends on to work.',

    sections: [
      {
        eyebrow: 'The mechanism',
        title: 'Two sources of heat, none of brake',
        paragraphs: [
          'Notice what is <em>not</em> in this blend. There is no melancholic, so nothing inside ' +
            'insists that a thing be good before it leaves. There is no phlegmatic, so nothing ' +
            'absorbs the urgency or imposes an interval between impulse and act. What is left is ' +
            'two halves doing the same job in slightly different directions: one wants ' +
            'engagement, the other wants control, and both want it now.',
          'The effect on Ni is the central fact and almost never gets said. Introverted intuition ' +
            'is not a fast function: it converges in silence, across days without stimulus, and ' +
            'needs dead time the way a muscle needs rest. A calendar packed end to end does not ' +
            'make Ni slower — it makes Ni shallower. The horizon shrinks from years to weeks, and ' +
            'what you call strategy becomes well-executed reaction.',
          'That is how this blend loses precisely the advantage that defined the type. You still ' +
            'have the engine that sees five years ahead; you have simply stopped feeding it. And ' +
            'because execution goes well and the short-term results arrive, there is no error ' +
            'light anywhere on the dashboard.',
        ],
      },
      {
        eyebrow: 'The check',
        title: 'How to know this is still an INTJ',
        paragraphs: [
          'You have probably tested as ENTJ, and anyone who knows you from work would be ' +
            'surprised to hear you are introverted. The check cannot be done on the surface — the ' +
            'surface is entirely contaminated by temperament. It is done on the shape of the ' +
            'thinking and on the cost of the day.',
        ],
        points: [
          'The content of what you say is a single converged reading, not a spread of ' +
            'possibilities. You do not brainstorm: you already know, and you are informing.',
          'You decide alone and communicate afterwards. Consultation, when it happens, is ' +
            'confirmation — and you know it, even if you never say so.',
          'Small talk without a subject empties you within minutes, even though you are good at ' +
            'it. You are socially competent and you are not socially fed.',
          'You finish a day you completely dominated and arrive home hollow, without understanding ' +
            'why, given that it all went well.',
          'You still need a closed door to think. The difference from other INTJs is not the ' +
            'need — it is that you never grant yourself the door.',
        ],
      },
      {
        eyebrow: 'The inferior function',
        title: 'Where Se charges most in this blend',
        paragraphs: [
          'In most INTJs inferior Se is a blind spot: the body is remembered late and life happens ' +
            'a few centimetres ahead of the present. Not here. The sanguine gives Se a voice and ' +
            'the choleric gives it permission, and the result is an INTJ who genuinely lives in ' +
            'the now — speed, physical risk, immediate pleasure, decisions taken at the cadence of ' +
            'the stimulus. There is a real upside: you are the only INTJ who does not have to be ' +
            'persuaded to inhabit his own body.',
          'The problem is supervision. In Grant’s development ordering (1983) — a hypothesis about ' +
            'when each function matures, never verified in a cohort — Se is last in the queue and ' +
            'least conscious. Used hard and unsupervised, it does not mature: it simply drives. ' +
            'And what it drives, with the choleric alongside, has the shape of an executive ' +
            'decision. You will not feel impulsive. You will feel decisive, with strategic ' +
            'arguments available for every individual case.',
        ],
      },
      {
        eyebrow: 'What gets lost',
        title: 'The specific losses, in order of appearance',
        paragraphs: [
          'The degradation of this blend is ordered and reasonably predictable, which helps: you ' +
            'can identify the stage you are at without waiting for the ending.',
        ],
        points: [
          'The long forecast goes first. You keep getting the quarter right and stop having an ' +
            'opinion about the decade.',
          'Then the standard falls, silently. With no melancholic, nothing holds the bar, and the ' +
            'fall is invisible because speed compensates in the immediate results.',
          'Then relationships start being conducted at calendar pace. The people close to you ' +
            'feel processed, and the complaint that surfaces is not coldness — it is hurry.',
          'Fi accumulates unspoken, because there is no interval in which it could be heard. One ' +
            'day it comes out as a total rupture, and everyone finds it strange coming from ' +
            'someone so warm.',
          'The body comes last, being the one system that will not be postponed indefinitely and ' +
            'that, in this blend, is the first thing spent and the last thing consulted.',
        ],
      },
      {
        eyebrow: 'Where this comes from',
        title: 'Borrowed names, no measurements',
        paragraphs: [
          'The dominant/secondary pairs are LaHaye’s (1984), built on the four types Littauer ' +
            '(1983) had popularised. Eysenck and Eysenck (1985) used those same four old names as ' +
            'labels for the quadrants of extraversion × neuroticism — on the popular reading of ' +
            'that scheme, your profile would sit in the high-approach corner. Be clear about what ' +
            'that was: a mnemonic borrowing laid over two measured dimensions, not a return of ' +
            'the humours and not a validation of them.',
          'Kagan (1994) described low-reactive, uninhibited infants followed through development; ' +
            'Rothbart (2011) treats approach and positive affectivity as early, observable ' +
            'dimensions. It is plausible that your propulsion has an early temperamental basis in ' +
            'that sense. What does not exist anywhere is a study linking any of those measures to ' +
            'MBTI type — so the phrase “sanguine–choleric INTJ” is a useful description rather ' +
            'than a finding.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Speed with content behind it',
        text:
          'Almost everyone who moves fast has nothing supporting the movement. You do: the thing ' +
          'that leaves your mouth quickly is a convergence of Ni, not a reaction. That is why your ' +
          'fast decisions land right often enough to irritate the cautious.',
      },
      {
        title: 'The capacity to found something',
        text:
          'You can start an organisation, which demands vision, appetite for responsibility and ' +
          'tolerance of social uncertainty all at once — three things almost no other INTJ blend ' +
          'holds simultaneously.',
      },
      {
        title: 'The room, occupied',
        text:
          'You carry a meeting, negotiate well and speak in public with no apparent effort. No ' +
          'other INTJ does that without paying dearly, and it is a genuine strategic advantage ' +
          'anywhere decisions run through persuading people.',
      },
      {
        title: 'Calculated risk others cannot take',
        text:
          'Ni’s forecast plus the sanguine’s appetite allows bets that would be reckless for ' +
          'anyone holding only one of the two. While the horizon is still long, this is the most ' +
          'powerful blend on the list.',
      },
    ],

    traps: [
      {
        title: 'Agitation mistaken for strategy',
        text:
          'Motion produces the sensation of progress and short-term results produce confirmation. ' +
          'Nothing on your dashboard warns you that the horizon has shrunk — and a shrunken ' +
          'horizon is the most expensive loss an INTJ can sustain.',
      },
      {
        title: 'Commitments in series',
        text:
          'You take on more than anyone could deliver, because at the moment of taking it on the ' +
          'delivery looks trivial — Ni has already seen it finished. The sixth project is accepted ' +
          'with the same confidence as the first.',
      },
      {
        title: 'The standard falling silently',
        text:
          'With no melancholic counterweight the bar drops without warning and without guilt. You ' +
          'notice two years later, on running into something you made earlier and realising it ' +
          'was better than what you ship today.',
      },
      {
        title: 'The body as a resource',
        text:
          'Se is being heard only as a source of stimulus and never as a source of warning. ' +
          'Exhaustion arrives as a surprise not because there were no signals, but because no ' +
          'function in your stack was assigned to read them.',
      },
    ],

    stress:
      'Under stress this blend does not slow down: it <em>speeds up</em>. More projects, more ' +
      'travel, more talking, more decisions taken standing up. And the choleric half turns the ' +
      'pace on people — you go curt, then sarcastic, then final, and cuts that would take months ' +
      'to ripen in another profile happen in an afternoon. Because the sanguine keeps the diary ' +
      'full and pleasant, no signal reaches you at all: there is no empty hour in which it could ' +
      'arrive. That is why this blend’s collapse is famous for giving no warning, and the reason ' +
      'is structural — neither half monitors cost, and Ni, which would have seen it coming a mile ' +
      'off, has not been given a silent hour in a year. The break tends to arrive whole and from ' +
      'outside: a body that stops on a Thursday, someone who leaves without a prior argument, a ' +
      'company that fails on a deadline you never looked at.',

    growth: [
      {
        title: 'Boredom by calendar, not by will',
        text:
          'Protected, recurring blocks of nothing — no screen, no agenda, no company. It is not ' +
          'rest: it is Ni’s operating condition. Without those blocks the type’s strategic ' +
          'advantage simply does not form, however many hours you work.',
      },
      {
        title: 'The rule of one',
        text:
          'Nothing new comes in before something goes out. The rule has to be arithmetic and ' +
          'external, because neither of your halves will generate hesitation at the moment the ' +
          'opportunity appears — and at that moment it always looks different.',
      },
      {
        title: 'Hire the bar you do not have',
        text:
          'Put someone beside you with real authority to hold the standard and to refuse the ' +
          'sixth project. Not an assistant: someone who can say no to you and survive it. It is ' +
          'the piece your blend does not supply and that no amount of willpower replaces.',
      },
      {
        title: 'Write the forecast down and go back to it',
        text:
          'Note what you think will happen, with a date, and check later. This calibrates Ni and ' +
          'does one more thing specific to you: it makes the shrinking horizon visible, because ' +
          'at some point you will notice you only write forecasts about next month.',
      },
    ],

    misread:
      'Almost everyone types you as ENTJ, and anyone who sees you in street mode guesses ESTP. ' +
      'People read you as extraverted — understandably, since you occupy the room — and nobody ' +
      'suspects the cost, because the exhaustion happens at home and the competence happens in ' +
      'public. Those close to you complain of hurry rather than coldness: the grievance is about ' +
      'pace, about feeling like an item in a very good diary. And the most expensive ' +
      'misunderstanding is your own — you read your fatigue as a failure of discipline, when it ' +
      'is the structural price of running an introverted engine at extraverted revolutions.',

    versus:
      'The confusion is with the choleric–sanguine, the mirror, and the difference shows in the ' +
      'internal order of each episode. There the choleric leads: the decision is the first thing ' +
      'that exists, and the sanguine warmth arrives afterwards as the means of execution — that ' +
      'person decides and then charms in order to get what they decided. Here the appetite leads: ' +
      'you are drawn in before you decide, and the choleric arrives next to supply force and ' +
      'justification for what you already wanted. In one line: the choleric–sanguine wants ' +
      'control and uses warmth; the sanguine–choleric wants engagement and uses force. The test ' +
      'is to recall your last big decision and ask which came first — the wanting or the verdict.',

    sources: [...COMMON, 'eysenck-eysenck-1985', 'grant-1983'],
  },

  /* ------------------------------------------------------------------ */
  /* Sanguine–phlegmatic — the lightest INTJ                             */
  /* ------------------------------------------------------------------ */

  'sanguine-phlegmatic': {
    lede:
      'No urgency and no hardness. You catch fire easily and sustain with difficulty; you are ' +
      'light to be around, conflict-averse, flexible — and nobody looking from outside would ' +
      'recognise in that the ruthless strategist of the folklore. And yet the engine is intact: ' +
      'Ni’s conclusions arrive with the same uncomfortable certainty, Te’s judgement stays sharp ' +
      'and private, Fi’s values stay non-negotiable. What is missing is <strong>temperature</strong> ' +
      '— which is why you consistently know things you never do anything about.',

    sections: [
      {
        eyebrow: 'The mechanism',
        title: 'Engine intact, current absent',
        paragraphs: [
          'The cognitive stack is identical across all twelve blends — temperament does not change ' +
            'architecture, it changes temperature. In yours, the two halves fail to supply ' +
            'propulsion for different and complementary reasons. The sanguine supplies ignition, ' +
            'but ignition without sustain: it lights fast, goes out fast, and leaves no residue ' +
            'of obligation. The phlegmatic supplies stability, but stability without demand: it ' +
            'absorbs frustration before it can become pressure. Neither produces the thing that ' +
            'would push a conclusion of Ni out of your head.',
          'It helps to compare with the two blends that solve this. In the melancholic–choleric, ' +
            'the pain of the standard generates pressure and the choleric converts pressure into ' +
            'movement. In the choleric–phlegmatic, the decision leaves before there is time to ' +
            'hesitate. You have neither the pain nor the early decision. You have clarity, and ' +
            'clarity is notoriously inert.',
          'Hence the most characteristic and most underrated symptom: doubt about your own type. ' +
            'This is the blend that retakes the test most often, that most often reads a ' +
            'description of the INTJ with the feeling of watching someone else, and that most ' +
            'often concludes there has been a mistake. There has not. The standard description of ' +
            'the type is written from the hot blends, because they are the ones that produce ' +
            'stories.',
        ],
      },
      {
        eyebrow: 'The rarity',
        title: 'Why this is uncommon — and how it is recognisable anyway',
        paragraphs: [
          'Sanguine is social stimulus-seeking, and an INTJ is introverted with an inferior ' +
            'sensing function; strictly speaking the two pull in opposite directions. That makes ' +
            'this blend uncommon rather than impossible — and it is recognisable precisely by not ' +
            'looking like extraversion. What the sanguine lends here is not an appetite for an ' +
            'audience: it is <em>ease</em>. You make contact with no entry cost, you like people ' +
            'without needing people, and you leave early without suffering for it.',
          'The verification is underneath, and it is merciless. The private assessment you run on ' +
            'people and decisions is as hard as any choleric INTJ’s — it has simply never been ' +
            'spoken. If you recognise the combination of a light surface with an internal ' +
            'tribunal permanently in session, the type is right and the test did not fail. What ' +
            'confused you was the temperature.',
        ],
      },
      {
        eyebrow: 'Day to day',
        title: 'The cost of never inconveniencing anyone',
        paragraphs: [
          'A frictionless life looks cheap and is not. Each of the concessions below is small and ' +
            'defensible on its own; the damage lies in the repetition rate across twenty years.',
        ],
        points: [
          'The objection you did not raise in the meeting, which would have saved six months of ' +
            'wrong work — you formulated it whole, mentally, while the decision was being taken.',
          'The salary you never negotiated, because the conversation looked unpleasant and the ' +
            'subject never looked urgent.',
          'The friend you did not confront, and the friendship that emptied out with no incident ' +
            '— there was never a row, only the slow subtraction of content.',
          'The plan you held in detail and watched someone execute badly, saying nothing, and ' +
            'without feeling enough anger to say it.',
          'Your own projects, which began well and with real enthusiasm and ended in nothing — no ' +
            'dramatic abandonment, no guilt, simply evaporation.',
        ],
      },
      {
        eyebrow: 'What accumulates',
        title: 'Neither grudge nor shame — an archive',
        paragraphs: [
          'Every blend accumulates something different. The melancholic-led ones accumulate shame; ' +
            'the choleric-led ones accumulate accounts to settle. Yours accumulates neither: the ' +
            'phlegmatic retains no heat and the melancholic is not present to punish. What builds ' +
            'up is stranger and quieter — an archive of unspent accuracy. Correct readings never ' +
            'said. Forecasts that came true with no audience. A decade of knowing without ' +
            'consequence.',
          'Fi is the exception, which is why it surprises everyone. Tertiary in Grant’s ordering ' +
            '(1983), strong in intensity and weak in articulation, it holds its absolute lines as ' +
            'firmly as it would in any other INTJ — and the light base does not soften them, it ' +
            'only hides them. When one is crossed, the flexible, pleasant person ends something ' +
            'permanently, without volume and without explanation, and everyone around decides it ' +
            'makes no sense. It does. It was simply the only thing in this blend that was never ' +
            'negotiable.',
        ],
      },
      {
        eyebrow: 'Where this comes from',
        title: 'Ancient vocabulary, recent structure, no measurement',
        paragraphs: [
          'The four humours are pre-scientific physiology: the Hippocratic corpus (c. 400 BC) ' +
            'describes blood, phlegm, yellow bile and black bile as the balance of health, and ' +
            'Galen (c. AD 170) organises nine mixtures along hot/cold and dry/moist — not four ' +
            'types, and with no dominant and secondary. The dominant/secondary structure that ' +
            'describes you on this page is LaHaye’s (1984), over the four types Littauer (1983) ' +
            'popularised.',
          'On the measurable side, Kagan (1994) and Rothbart (2011) establish that reactivity and ' +
            'self-regulation are early and reasonably stable differences — continuous in ' +
            'Rothbart, categorical in Kagan — which ' +
            'gives ballast to the idea of a calm baseline and none at all to the idea of twelve ' +
            'boxes. One last caution, since it is the commonest confusion: none of this has any ' +
            'relation to Keirsey’s temperaments (1998), where the INTJ is always a Rational by ' +
            'definition, with no dominant, no secondary and no blending. Same word, different ' +
            'model, different logic.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Exact judgement without hostility',
        text:
          'You see what other INTJs see and you add no contempt to it. That combination is rare ' +
          'and worth a great deal wherever judging well and not humiliating are simultaneous ' +
          'requirements — mentoring, assessment, arbitration, any role where the truth has to be ' +
          'received in order to be useful.',
      },
      {
        title: 'Proximity that lasts',
        text:
          'You are the INTJ people stay married to and stay friends with. That is no small thing ' +
          'in a type famous for burning relationships in the name of rigour, and it compounds: ' +
          'thirty years of preserved bonds are worth more than any project.',
      },
      {
        title: 'No need to win',
        text:
          'You can hear a better argument and change position at no cost to your ego. In a type ' +
          'whose classic trap is a certainty closed around a single reading of the future, that ' +
          'is a real and scarce immunity.',
      },
      {
        title: 'Reserves',
        text:
          'You spend nothing on friction, so there is surplus: you endure environments, deadlines ' +
          'and people that would exhaust any warmer INTJ. The energy exists. It has simply never ' +
          'been pointed at anything.',
      },
    ],

    traps: [
      {
        title: 'The vision that dies in your head',
        text:
          'This is the central trap, and it makes no noise. You see the right outcome early and ' +
          'regularly, and the record of that clarity stays entirely internal. Nobody but you ever ' +
          'knew the plans existed.',
      },
      {
        title: 'Acceptance by omission',
        text:
          'You do not choose: you fail to refuse. Scope, role, city, relationship — almost ' +
          'everything in your life entered through an absence of objection, and the sum is a ' +
          'biography designed by other people with your silent consent.',
      },
      {
        title: 'Years lost doubting the type',
        text:
          'Retaking the test, reading descriptions, concluding it does not fit, starting again. ' +
          'Each round postpones any concrete use of what you have, and the mechanism is always ' +
          'the same: you are comparing your temperature with that of the hot blends.',
      },
      {
        title: 'Outsourced ambition',
        text:
          'You let a partner, a manager or an accident set the size of your life, and then adapt ' +
          'with genuine competence to the size that was set — which makes the arrangement look ' +
          'like a choice.',
      },
    ],

    stress:
      'Under stress this blend does not intensify: it <em>thins</em>. You become more agreeable, ' +
      'more available and more absent at the same time — taking on more of other people’s work ' +
      'and less of your own, agreeing faster, while the internal certainty about what ought to be ' +
      'done grows louder and less connected to anything you do. The damage is not collapse but ' +
      'erosion: because nothing breaks, nothing gets fixed, and the state can run for five years. ' +
      'When it finally does break it almost always breaks through Fi — a non-negotiable line is ' +
      'crossed and the light, flexible person ends something definitively, without raising their ' +
      'voice, to general astonishment. Inferior Se arrives as comfort rather than excess: sleep, ' +
      'screens, food, an evening that stretches to fill the place where your work should have ' +
      'been. It is the hardest stress of the twelve to diagnose, because at no point does it look ' +
      'like stress.',

    growth: [
      {
        title: 'One thing, in public',
        text:
          'Not a productivity system: one single thing, announced to someone, with a date. You do ' +
          'not need more clarity — you have a surplus. You need an external commitment that makes ' +
          'postponement visible, because nothing internal will.',
      },
      {
        title: 'Use other people’s discomfort as a metric',
        text:
          'If nobody has been mildly inconvenienced by you this month, you did not act. It is a ' +
          'crude metric and the only one that works on a profile that mistakes an absence of ' +
          'friction for an absence of problem.',
      },
      {
        title: 'Hire the pressure',
        text:
          'A deadline, a partner, an editor, a client, a supervisor — someone whose job is to ' +
          'chase you. You are not outsourcing discipline; you are installing the current your ' +
          'blend, by construction, does not generate.',
      },
      {
        title: 'Disagree the same day, in one sentence',
        text:
          'No preamble, no softening, in the moment. One sentence a week already reorganises how ' +
          'you are read, and reorganises your relationship with your own judgement even more: an ' +
          'opinion said out loud starts demanding consequences.',
      },
      {
        title: 'Stop retaking the test',
        text:
          'Doubt about the type is a symptom of this blend, not evidence against it. Accept the ' +
          'diagnosis and spend the energy of the doubt on the one thing that is missing, which is ' +
          'applying what you can already see.',
      },
    ],

    misread:
      'People type you as INFP or ISFP, invariably. They read you as passive, unambitious or ' +
      'without strong opinions — and that last one is the exact opposite of the truth: you hold ' +
      'complete verdicts on almost everything, you have simply never issued them. Friends assume ' +
      'you agree with them. Managers assume you are satisfied. Partners discover, usually late, ' +
      'that a full assessment was running the entire time. And you read yourself as someone who ' +
      'was mistyped, which is the most expensive of the five misreadings, because it delays every ' +
      'use of what you have.',

    versus:
      'The confusion is with the phlegmatic–sanguine, the mirror, and the difference lies in which ' +
      'half defines the resting state. There the calm leads and the warmth is a colour on top: ' +
      'that INTJ does not ignite, he accompanies, and his signature is a pleasant, constant ' +
      'stability. Here the warmth leads and the calm is what dissolves the impulse: you ignite ' +
      'easily and do not sustain. The test: when a subject interests you, what happens in the ' +
      'first few hours? If there is a real spike of energy that then dissipates leaving no work ' +
      'behind, the sanguine leads. If there was never a spike — only a mild, constant interest ' +
      'that also produces no work — the phlegmatic leads.',

    sources: [...COMMON, 'galen-c170', 'hippocrates-c400bc', 'keirsey-1998', 'grant-1983'],
  },
};

/* Named exports, one per blend, so each page entry can reference its own. */
export const DEEP_PHLEGMATIC_MELANCHOLIC_EN = TEMPERAMENTS_DEEP_B_EN['phlegmatic-melancholic'];
export const DEEP_PHLEGMATIC_CHOLERIC_EN = TEMPERAMENTS_DEEP_B_EN['phlegmatic-choleric'];
export const DEEP_PHLEGMATIC_SANGUINE_EN = TEMPERAMENTS_DEEP_B_EN['phlegmatic-sanguine'];
export const DEEP_SANGUINE_MELANCHOLIC_EN = TEMPERAMENTS_DEEP_B_EN['sanguine-melancholic'];
export const DEEP_SANGUINE_CHOLERIC_EN = TEMPERAMENTS_DEEP_B_EN['sanguine-choleric'];
export const DEEP_SANGUINE_PHLEGMATIC_EN = TEMPERAMENTS_DEEP_B_EN['sanguine-phlegmatic'];
