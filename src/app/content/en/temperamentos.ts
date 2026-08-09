import {
  DEEP_CHOLERIC_MELANCHOLIC_EN,
  DEEP_CHOLERIC_PHLEGMATIC_EN,
  DEEP_CHOLERIC_SANGUINE_EN,
  DEEP_MELANCHOLIC_CHOLERIC_EN,
  DEEP_MELANCHOLIC_PHLEGMATIC_EN,
  DEEP_MELANCHOLIC_SANGUINE_EN,
} from './deep/temperaments-a';
import {
  DEEP_PHLEGMATIC_CHOLERIC_EN,
  DEEP_PHLEGMATIC_MELANCHOLIC_EN,
  DEEP_PHLEGMATIC_SANGUINE_EN,
  DEEP_SANGUINE_CHOLERIC_EN,
  DEEP_SANGUINE_MELANCHOLIC_EN,
  DEEP_SANGUINE_PHLEGMATIC_EN,
} from './deep/temperaments-b';
import { FOCUS_TEMPERAMENTOS_EN } from './deep/focus';
import type { TemperamentsContent } from '../types';

export const TEMPERAMENTOS_EN: TemperamentsContent = {
  focus: FOCUS_TEMPERAMENTOS_EN,
  meta: {
    title: 'Temperaments — the four humours applied to the INTJ',
    description:
      'Melancholic, choleric, phlegmatic and sanguine, and the twelve dominant/secondary blends, ' +
      'read as the tempo of a Ni–Te engine. With the real chronology and what science kept.',
  },

  sources: [
    'hippocrates-c400bc',
    'galen-c170',
    'klibansky-1964',
    'lahaye-1984',
    'littauer-1983',
    'virchow-1858',
    'kagan-1994',
    'rothbart-2011',
    'wundt-1874',
    'eysenck-eysenck-1985',
    'keirsey-1998',
    'pittenger-2005',
  ],

  header: {
    eyebrow: 'Beyond MBTI — Temperaments',
    title: 'Four humours,\ntwelve arrangements, one engine',
    lede:
      'This is the oldest, the most popular and the flimsiest model on the whole site. It says ' +
      'nothing about how you think — the <strong>Ni · Te · Fi · Se</strong> stack is identical ' +
      'across all twelve blends below. What it describes is the <em>temperature</em> of that ' +
      'stack: how fast it starts, how hard it treats people, and how long it takes to shut down.',
  },

  intro:
    'A melancholic–phlegmatic INTJ and a choleric–sanguine INTJ run exactly the same cognitive ' +
    'engine and are, to live with, two different species. One takes three months to say what he ' +
    'concluded on the first day; the other says it before he has finished concluding. Neither is ' +
    'more of an INTJ than the other, and that is why this vocabulary survives: it names the one ' +
    'thing MBTI deliberately does not measure — <strong>the tempo, not the architecture</strong>.',

  caveat:
    'None of this has any standing in contemporary psychology. No instrument in scientific ' +
    'personality psychology measures “choleric”; nobody has ever found black bile. The four ' +
    'humours are pre-scientific ' +
    'vocabulary and they are here as descriptive language only — much as one calls a person ' +
    'cold-blooded without making any claim about the temperature of their blood. Two confusions ' +
    'need clearing before you read on. The first: the twelve dominant/secondary blends do not ' +
    'come from antiquity, they come from Tim LaHaye, in 1984. The second, and the more serious: ' +
    'do not confuse any of this with Keirsey’s temperaments. In Please Understand Me II (1998), ' +
    'Keirsey named four groups — Artisan (SP), Guardian (SJ), Idealist (NF) and Rational (NT) — ' +
    'and every type belongs to exactly one of them, by definition. The INTJ is always Rational: ' +
    'no dominant, no secondary, no blending possible. It is a different model, by a different ' +
    'author, on a different logic, which merely borrowed the word “temperament”. And the warning ' +
    'Pittenger addressed to the MBTI applies twice over here: the more generic the description, ' +
    'the truer it feels to whoever recognises themselves in it.',

  history: {
    eyebrow: 'The real chronology',
    title: 'Twenty-four centuries, three different models sharing one name',
    paragraphs: [
      'The origin is medical, not psychological. <em>De natura hominis</em>, from the Hippocratic ' +
        'corpus, written around 400 BC and probably by Polybus of Cos, holds that the body ' +
        'contains blood, phlegm, yellow bile and black bile, and that health is the balance ' +
        'between them. Nobody in that text <em>is</em> a melancholic. Someone has, at a given ' +
        'moment and because of a given season, too much black bile — and later has less. ' +
        'Character typology is a later reading, laid over a text about physiology.',
      'It is Galen, around 170 AD, who turns that into a doctrine of mixtures. And this is where ' +
        'the popular legend collapses: Galen’s mixtures number <strong>nine</strong>, not four. ' +
        'One well-tempered, four simple and four compound, along the hot/cold and dry/wet axes. ' +
        'The tidy table of four types with a dominant and a secondary that circulates today on ' +
        'corporate training posters exists nowhere in Galen. It was assembled much later, by ' +
        'other people, for other purposes.',
      'The prestige of the word “melancholic” has a date and authors too. Klibansky, Panofsky and ' +
        'Saxl reconstructed in 1964 how melancholy migrated from a disease of black bile to the ' +
        'badge of genius — from the Aristotelian problem of why exceptional men are melancholic, ' +
        'through Ficino, to Dürer’s <em>Melencolia I</em>. Keep that in mind as you read the ' +
        'panels below: if the label “melancholic” feels like a compliment — depth, seriousness, ' +
        'gift — what you are feeling is the effect of a Renaissance literary rehabilitation, not ' +
        'the outcome of a measurement.',
      'Medicine dropped the mechanism in 1858. Virchow’s cellular pathology located disease in ' +
        'the cell, and from then on the humours explained nothing about the body at all. What ' +
        'survived was the vocabulary — four useful adjectives, orphaned from the physiology that ' +
        'once justified them.',
      'When psychology came back to the subject, it came back through dimensions. Wundt, as early ' +
        'as 1874, reorganised the four old names on two continuous axes: the strength of the ' +
        'emotion and the speed at which it changes. Eysenck and Eysenck, in 1985, used the same ' +
        'four names as quadrant labels on extraversion × neuroticism — a mnemonic borrowed over ' +
        'measured dimensions, not a return of the humours. In neither case are there types.',
      'The twelve blends on this page date from 1984. Tim LaHaye, a Baptist pastor and author of ' +
        'Christian popular psychology, published in <em>Why You Act the Way You Do</em> the ' +
        'dominant/secondary pairs now presented as ancient wisdom; Florence Littauer, the year ' +
        'before, had popularised the four types in the same publishing world. This matters and it ' +
        'is not a footnote: <strong>the structure organising this page is four decades old, not ' +
        'twenty-four centuries</strong>.',
      'Something did survive into contemporary research — but not the types. Kagan called his ' +
        '1994 book <em>Galen’s Prophecy</em> as a historical courtesy; its content is the ' +
        'longitudinal observation of inhibited and uninhibited children, measured by reactivity. ' +
        'Rothbart, in 2011, defines temperament as early differences in reactivity and ' +
        'self-regulation, dimensional and observable from the first months of life. That is the ' +
        'grain of truth under the phrase “choleric–phlegmatic”: how quickly you fire and how ' +
        'quickly you return to rest are real individual differences, early and reasonably stable. ' +
        'They are simply two continuous lines, not four boxes with a secondary slot.',
    ],
    points: [
      'c. 400 BC — De natura hominis describes four humours as the physiology of health and ' +
        'disease. No typology of character.',
      'c. 170 AD — Galen organises the mixtures of hot/cold and dry/wet: nine of them, not four, ' +
        'and with no notion of a dominant and a secondary.',
      '14th–16th centuries — melancholy is rehabilitated as the mark of genius. The prestige of ' +
        'the word comes from that literature, not from medicine.',
      '1858 — Virchow’s cellular pathology locates disease in the cell and retires the humours as ' +
        'a mechanism.',
      '1874 — Wundt reorganises the four names on two continuous axes: strength of emotion and ' +
        'speed of change.',
      '1983–1984 — Littauer popularises the four types and LaHaye publishes the twelve ' +
        'dominant/secondary blends reproduced on this page.',
      '1985 — Eysenck and Eysenck use the old names as quadrant labels over extraversion × ' +
        'neuroticism. Borrowed names, not humours.',
      '1994–2011 — Kagan and Rothbart measure reactivity and self-regulation from infancy. ' +
        'Rothbart works in continuous dimensions; Kagan argues for categories (inhibited and ' +
        'uninhibited). Neither works in blended humours.',
    ],
  },

  labels: {
    risk: 'Risk',
    atWork: 'At work',
    asIntj: 'In an INTJ',
    blends: 'The twelve blends, dominant first',
    singles: 'The four humours, on their own',
  },

  singles: {
    melancholic: {
      name: 'Melancholic',
      text:
        'The humour that most resembles the type’s default behaviour — which is exactly why it ' +
        'misleads. In an INTJ the melancholic does not add depth: it adds demand. Ni already ' +
        'converged on its own towards a single reading of the future; the melancholic insists ' +
        'that reading be immaculate before it becomes a spoken sentence. Hence the long interval ' +
        'between knowing and acting, the self-criticism working a full shift, and the habit of ' +
        'treating error as a moral failure rather than as information. Beware the shortcut: an ' +
        'INTJ is not melancholic by definition, and much of what gets described here as ' +
        'temperament is introverted intuition seen from outside.',
    },
    choleric: {
      name: 'Choleric',
      text:
        'In an INTJ, choleric is Te at full volume. It shortens the distance between Ni’s ' +
        'conclusion and the order given — what would look like impulsiveness in another type ' +
        'appears here as an unappealable decision taken too fast to be explained. It brings ' +
        'initiative, an appetite for responsibility and an almost physical intolerance of ' +
        'incompetence, slowness and meetings. It brings the classic cost too: people handled as ' +
        'variables inside the plan, and the certainty that disagreement is delay.',
    },
    phlegmatic: {
      name: 'Phlegmatic',
      text:
        'Low reactivity. In an INTJ that means Ni running without agitation and Te operating ' +
        'without urgency: the type that looks unshakeable because, most of the time, it genuinely ' +
        'is. The calm is real and it is not repression — and that is precisely the trap. The ' +
        'phlegmatic does not reduce what Fi registers; it only removes the impulse to say it. ' +
        'Offences are filed whole, with a date, never surfacing, until the day the bill is ' +
        'presented closed and with no right of appeal.',
    },
    sanguine: {
      name: 'Sanguine',
      text:
        'The rarest of the four in an INTJ, and the most destabilising — because it lends the ' +
        'type precisely what the stack does not supply: presence, appetite for the present, ease ' +
        'with strangers. It reaches the inferior function. Se, normally a blind spot, acquires a ' +
        'voice: the body shows up, the now shows up, excess shows up. This is the INTJ who tests ' +
        'as ENTP or ENFP and spends years doubting his own type — without noticing that the ' +
        'engine has not changed, only the temperature it runs at.',
    },
  },

  blends: {
    'melancholic-choleric': {
      deep: DEEP_MELANCHOLIC_CHOLERIC_EN,
      name: 'The relentless perfectionist',
      summary: 'Plans for months, then moves without a second’s hesitation.',
      asIntj: [
        'The order matters more than the ingredients. With the melancholic in front, the standard ' +
          'is set <em>before</em> any movement: Ni converges, the melancholic raises the bar, and ' +
          'nothing happens until the solution is internally sound. Only then is the choleric ' +
          'secondary switched on — and at that point there is no deliberation left, because the ' +
          'whole of it already happened in silence. This is the INTJ who spends half a year ' +
          'reading, drafting and discarding, and then on some ordinary Saturday executes in eight ' +
          'hours what others would take weeks to begin.',
        'The strength of this pairing is its hit rate: when this INTJ finally moves, he is ' +
          'usually right, because the cost of being wrong was paid in advance. The weakness is ' +
          'that the choleric secondary has no idea how to reopen anything. The plan is long, ' +
          'expensive and private, and reconsidering it in public would amount to admitting that ' +
          'the melancholic failed at the one thing it believes it can do. Add tertiary Fi, which ' +
          'treats a standard as a value, and error stops being data and becomes a moral debt.',
      ],
      risk:
        'Self-criticism with interest. The standard was calibrated by Ni without contact with the ' +
        'world, and the choleric secondary enforces it on you before it enforces it on anyone ' +
        'else. Late rigidity, too: changing course after six months of investment feels like ' +
        'betraying your own judgement.',
      atWork:
        'Excellent on long projects with a defined deliverable — systems architecture, applied ' +
        'research, anything where a design phase is legitimate. Poor in moving-requirement ' +
        'environments, where the bar shifts every week and preparation time is never granted.',
    },
    'melancholic-phlegmatic': {
      deep: DEEP_MELANCHOLIC_PHLEGMATIC_EN,
      name: 'The patient observer',
      summary: 'The same depth, with no urgency at all to convert it into an act.',
      asIntj: [
        'There is no heat anywhere in this system. Ni works with all its usual depth and nothing ' +
          'pushes the result outwards — neither the choleric’s hurry nor the sanguine’s appetite. ' +
          'This is the INTJ others describe as “calm”, “gentle”, sometimes “wise”, and usually ' +
          'the easiest of the twelve to live with, because the severe judgement stays intact on ' +
          'the inside and is almost never poured out.',
        'The price is Te. Extraverted thinking is the function that turns vision into a thing ' +
          'that exists in the world, and in this blend it barely receives current. The ' +
          'melancholic standard remains high, which produces the worst possible side effect: the ' +
          'analysis is finished, it is good, and it is not published — because it is not yet good ' +
          'enough and because nothing compels it. Years accumulate that way.',
      ],
      risk:
        'Postponement with no apparent pain. Bad situations last because ending them would ' +
        'require a confrontation, and the confrontation costs more than the situation. You accept ' +
        'conditions a choleric would have broken in the first month, and you call it patience.',
      atWork:
        'Research, documentation, curation, quality control — anything that rewards rigour and ' +
        'constancy. Needs an external deadline and someone who asks for the delivery: without ' +
        'that, the work gets finished and never leaves the drawer.',
    },
    'melancholic-sanguine': {
      deep: DEEP_MELANCHOLIC_SANGUINE_EN,
      name: 'The intermittent scholar',
      summary: 'Long withdrawal, interrupted by episodes of genuine warmth.',
      asIntj: [
        'The most contradictory of the twelve, and the one most misread by the people around it. ' +
          'The base is melancholic withdrawal — weeks of silence, a high standard, a dense inner ' +
          'world. The sanguine secondary does not dismantle that; it opens windows. And the ' +
          'windows open by subject, not by person: someone touches the right topic and the INTJ ' +
          'who was unreachable talks with real enthusiasm for three hours, generous, funny, ' +
          'entirely present.',
        'The problem is one of reading. Whoever saw the window open takes that as the baseline ' +
          'and reads the following fortnight of silence as deliberate coldness or punishment. It ' +
          'is neither: the sanguine ran out and the melancholic took the whole house back. The ' +
          'oscillation costs more credibility than either state would cost on its own, and it is ' +
          'nearly impossible to explain without sounding like an excuse.',
      ],
      risk:
        'Being read as unstable or insincere. And, on the inside, the hangover: every warm ' +
        'episode is followed by a melancholic audit of everything you said too much of, with ' +
        'retroactive shame at having shown yourself.',
      atWork:
        'Teaching, lecturing, mentoring, writing — any format that accepts intensity in blocks. ' +
        'Bad in roles demanding constant presence and uniform availability, because uniformity is ' +
        'exactly what this blend does not have.',
    },
    'choleric-melancholic': {
      deep: DEEP_CHOLERIC_MELANCHOLIC_EN,
      name: 'The strategic commander',
      summary: 'The decision comes first; the analysis is called in to serve the conquest.',
      asIntj: [
        'Invert the order and you invert the person. With the choleric in front, Te fires before ' +
          'Ni has finished its work: the decision is taken early, on partial information, and the ' +
          'melancholic depth is summoned afterwards — to justify, to armour and to refine what ' +
          'has already been decided. This is the INTJ who takes command without anyone offering ' +
          'it, who speaks in conclusions, and who treats the discussion phase as a tax.',
        'The melancholic secondary is what saves this blend from being mere force. It supplies ' +
          'the retrospective audit, the technical standard and the long memory of one’s own ' +
          'mistakes — and it is also what makes the blend expensive. A defeat is not forgotten: ' +
          'it is filed, revisited and converted into a criterion. From outside the commander ' +
          'stays impassive; inside, the melancholic processes the same failure for years.',
      ],
      risk:
        'Running people over and skipping stages of reflection that only prove necessary later. ' +
        'Speed gets mistaken for correctness, and the melancholic secondary does not correct the ' +
        'course — it merely records the cost with unnecessary precision.',
      atWork:
        'Restructurings, crises, founding companies, any situation where deciding badly beats not ' +
        'deciding. Weak in maintenance and in stable operations, where the energy it brings has ' +
        'nowhere to go and turns into conflict.',
    },
    'choleric-phlegmatic': {
      deep: DEEP_CHOLERIC_PHLEGMATIC_EN,
      name: 'The silent executor',
      summary: 'Decides fast — then goes quiet. Both halves are final.',
      asIntj: [
        'The choleric fires first: Ni delivers the reading, Te closes the decision, and this takes ' +
          'minutes, sometimes seconds. Then the phlegmatic secondary removes everything that ' +
          'normally accompanies a choleric decision. There is no speech, no campaign, no need to ' +
          'convince anyone or to be agreed with. The silence that follows is not deliberation, ' +
          'and this is where almost everyone misreads it: the deliberation is over. What is ' +
          'happening is the complete absence of any impulse to explain.',
        'The second half is what makes it irreversible. A choleric decision held up by a choleric ' +
          'temperament would still be arguable — cholerics fight, and whoever fights reopens. But ' +
          'holding a position costs the phlegmatic nothing, so it simply stays there, frictionless, ' +
          'for years. Tertiary Fi does the rest: what hurt is filed whole instead of said, and ' +
          'when the choleric blade finally appears — a relationship cut, an exit, a “no” with no ' +
          'appeal — it looks sudden to everyone except you, who saw it finished months earlier.',
      ],
      risk:
        'Decisions taken in seconds and held for years, because the phlegmatic half will not ' +
        'reopen what the choleric half closed. And chronic under-communication: you do not ' +
        'explain because you feel no need to, and the calm is read as consent by the people who ' +
        'should have been warned — or as contempt by the ones who expected an argument.',
      atWork:
        'The person who ends the meeting. Excellent at irreversible calls, in risk-bearing ' +
        'contexts and in any role that requires saying no without hesitating and without an ' +
        'audience. Weak at bringing people along: you need a forced ritual — written, dated, ' +
        'short — of setting out the reasoning behind the decision, because left alone it never ' +
        'comes out.',
    },
    'choleric-sanguine': {
      deep: DEEP_CHOLERIC_SANGUINE_EN,
      name: 'The magnetic founder',
      summary: 'The least introverted-looking INTJ, and the one most often taken for an ENTJ.',
      asIntj: [
        'Two sources of heat and no brake. The choleric supplies the fast decision and the hunger ' +
          'for responsibility; the sanguine supplies presence, charm and appetite for the now. ' +
          'This is the INTJ who fills the room, negotiates well, speaks in public with no visible ' +
          'effort and is systematically typed as an extravert by anyone who only sees him working ' +
          '— though he still needs silence to think, and is still emptied out by the end of the ' +
          'day.',
        'The inferior function here is not ignored: it is exercised. Se gains a voice — speed, ' +
          'physical risk, immediate pleasure — and the result is an INTJ who genuinely lives in ' +
          'the present, with everything good and everything dangerous that implies. What is ' +
          'missing is the melancholic ruler. Nothing on the inside insists the thing be good ' +
          'before it ships, and Ni is left without the dead time it depends on to converge.',
      ],
      risk:
        'Taking on more than any person could deliver, starting five projects and finishing none, ' +
        'and arriving at burnout like someone caught by surprise — because the body was being ' +
        'listened to only as a source of stimulation, never as a source of warning.',
      atWork:
        'Founding, complex sales, negotiation, crisis management: anything where initial energy ' +
        'is worth more than constancy. Needs an operator alongside, with real authority to finish ' +
        'what you started and to refuse the sixth project.',
    },
    'phlegmatic-melancholic': {
      deep: DEEP_PHLEGMATIC_MELANCHOLIC_EN,
      name: 'The immovable archivist',
      summary: 'The lowest reactivity of the twelve, with the highest standard of all.',
      asIntj: [
        'The coldest blend of the set and probably the closest to the popular stereotype of the ' +
          'reclusive INTJ. The phlegmatic base guarantees that nothing disturbs: Ni runs for ' +
          'years without interruption, without crisis and without hurry, accumulating real ' +
          'depth. The melancholic secondary supplies the ruler but never the urgency to apply ' +
          'it. The result is a quiet, genuine competence that almost nobody nearby can estimate.',
        'The difference from melancholic–phlegmatic is subtle and decisive. There, the standard ' +
          'commands and it hurts — there is suffering in the unfinished work. Here the standard ' +
          'is high and does not hurt: the phlegmatic absorbs the frustration before it can become ' +
          'fuel. That makes this the blend at greatest risk of a lifetime of preparation. Te ' +
          'barely externalises anything, and nothing in the system demands that the vision become ' +
          'an object in the world.',
      ],
      risk:
        'Decades given to reading, understanding and organising, with very little published, ' +
        'built or claimed. Watching less capable people occupy the place that was yours without ' +
        'feeling angry enough to react — and recognising it too late to redo.',
      atWork:
        'Deep specialism, reference architecture, documentation, long-horizon research, technical ' +
        'review. Catastrophic in any role that depends on initiative, self-promotion or ' +
        'competing for ground.',
    },
    'phlegmatic-choleric': {
      deep: DEEP_PHLEGMATIC_CHOLERIC_EN,
      name: 'The serene intransigent',
      summary:
        'Calm as the rule, the blade as the exception — and the exception is not negotiable.',
      asIntj: [
        'This is the mirror image of the silent executor, and the inversion changes everything. ' +
          'Here the phlegmatic governs: the normal state is stability, long patience, no ' +
          'reactivity to provocation, deadlines or rudeness. The choleric does not lead — it ' +
          'intervenes. It sleeps for months and wakes whole when a line drawn by Fi is crossed, ' +
          'or when someone else’s incompetence goes from irritating to dangerous.',
        'Because the choleric shows up rarely, it lands heavily. The people around this INTJ ' +
          'learn to read his temperature with an attention they would never give to someone who ' +
          'flares up every week, and a single “no” spoken in that tone ends the matter ' +
          'permanently. The cost is the delay: while the phlegmatic manages, the situation rots, ' +
          'and the choleric intervention arrives when there is nothing left to save — only ' +
          'something left to stop.',
      ],
      risk:
        'Acting late. You tolerate for far too long and then cut in a way disproportionate to the ' +
        'last episode — which was small, but was the twentieth. In other people’s eyes the rare ' +
        'eruptions define you more than the years of calm.',
      atWork:
        'The senior everyone consults before deciding, and the best person under real pressure, ' +
        'because a crisis does not alter your internal state. Hard to move on priorities: when ' +
        'you see no reason to change, you do not change, and you feel no obligation to justify it.',
    },
    'phlegmatic-sanguine': {
      deep: DEEP_PHLEGMATIC_SANGUINE_EN,
      name: 'The quiet host',
      summary: 'The warmest INTJ of the twelve, and the least driven.',
      asIntj: [
        'Two sources of calm and none of demand. The phlegmatic base removes the urgency and the ' +
          'sanguine secondary adds genuine friendliness: this is the INTJ people like without ' +
          'reservation, who listens well, who does not intimidate and whom nobody would describe ' +
          'as arrogant or cold. It is also, by a distance, the one in whom Te is least visible.',
        'Ni goes on working with its usual precision — you see the ending, you recognise the ' +
          'incompetence, you know what the right decision would be. Only nothing in the system ' +
          'converts that into action, and the cost is ambition. In time a very specific ' +
          'resentment appears: watching someone take credit for a solution you already held whole ' +
          'in your head and never had enough heat to defend.',
      ],
      risk:
        'Pleasant drift. Being liked instead of being effective, accepting roles and ' +
        'relationships below your capacity, and discovering at forty that kindness was the name ' +
        'given to an absence of demand.',
      atWork:
        'Teamwork, support, teaching, mediation, roles where a low temperature is valuable. ' +
        'Depends entirely on goals and deadlines coming from outside; without them the day fills ' +
        'itself with reasonable, irrelevant things.',
    },
    'sanguine-melancholic': {
      deep: DEEP_SANGUINE_MELANCHOLIC_EN,
      name: 'The enthusiast who collapses',
      summary: 'Immediate ignition, followed by a merciless internal audit.',
      asIntj: [
        'The sanguine ignites first, and in an INTJ it ignites with dangerous material: Ni ' +
          'already shows the finished work, whole and brilliant, before a single line is written. ' +
          'The euphoria is real and the vision is good. Then the melancholic secondary steps in ' +
          'and does what it does — compares what exists with what was seen, measures the gap, and ' +
          'concludes, correctly, that what exists is unworthy.',
        'The cycle repeats until it becomes an identity: begin, see the abyss between the ' +
          'imagined version and the possible one, stop. What accumulates is not work but ' +
          'beginnings — folders, repositories, notebooks, each holding the twenty best pages of ' +
          'something that never had a twenty-first. And every abandonment feeds the melancholic ' +
          'thesis that you finish nothing, which makes the next abandonment likelier.',
      ],
      risk:
        'A whole portfolio of beginnings and a well-argued contempt for yourself. The specific ' +
        'danger is that the melancholic is technically right in each individual assessment and ' +
        'entirely wrong about the sum of them.',
      atWork:
        'Idea generation, prototyping, proposals, the opening moments of a project. Needs ' +
        'delivery in short slices, external review and someone to stop the rewriting of what was ' +
        'already good — preferably with the authority to declare it finished.',
    },
    'sanguine-choleric': {
      deep: DEEP_SANGUINE_CHOLERIC_EN,
      name: 'The project agitator',
      summary: 'The fastest, the loudest and the least like the stereotype.',
      asIntj: [
        'Heat upon heat. The sanguine supplies appetite and the choleric supplies force, and ' +
          'together they produce an INTJ who looks like anything but one: fast, expansive, ' +
          'confrontational, permanently in motion. Many people with this blend spend their lives ' +
          'convinced they took the test wrong, without noticing that the structure underneath has ' +
          'not changed — Ni still converges, Te still organises — only that it has been ' +
          'accelerated past the point of recognition.',
        'This is where the inferior function charges most. Se without a melancholic counterweight ' +
          'becomes sensory excess with a strategic justification: travel, a body pushed to its ' +
          'limit, decisions taken at the speed of the stimulus. And Ni, which needs boredom and ' +
          'silence in order to converge, almost never gets them. The horizon shrinks from years ' +
          'to weeks, and the INTJ loses precisely the advantage that defined the type.',
      ],
      risk:
        'Sensory excess, commitments taken on in series, and a collapse that arrives without ' +
        'warning because no function was monitoring the cost. It is the blend most likely to ' +
        'mistake agitation for strategy.',
      atWork:
        'Launches, expansion, sales, crisis management — contexts where speed is the critical ' +
        'variable. Needs silence imposed by the calendar rather than by willpower: without ' +
        'protected blocks of boredom, the type’s strategic advantage simply never forms.',
    },
    'sanguine-phlegmatic': {
      deep: DEEP_SANGUINE_PHLEGMATIC_EN,
      name: 'The lightest INTJ',
      summary: 'No urgency, no hardness — and no conversion of vision into act.',
      asIntj: [
        'The least characteristic blend of the type, and the one that produces the most doubt ' +
          'about your own test result. Warmth without hurry and friendliness without demand: an ' +
          'INTJ who is light to be around, flexible, conflict-averse, and routinely typed as an ' +
          'INFP or ISFP by anyone typing from outside. Nothing in this person resembles the ' +
          'relentless strategist of the folklore.',
        'And yet the engine is intact. Ni’s conclusions arrive with the same uncomfortable ' +
          'certainty, Te’s judgement stays sharp and private, Fi’s values stay non-negotiable. ' +
          'What is missing is temperature: neither half supplies the current needed to push what ' +
          'you saw out of your head. You know, consistently, things you never get round to doing ' +
          'anything about.',
      ],
      risk:
        'Wasting the one gift the type actually has — long-range vision that gets executed — in ' +
        'the name of not bothering anyone. And accumulating, without drama and without anger, a ' +
        'decade of plans nobody but you ever knew existed.',
      atWork:
        'An excellent colleague and a weak executor. Performs when someone else supplies ' +
        'structure, target and deadline, and when a public commitment makes postponement visible. ' +
        'Alone and unaccountable, this is the profile that delivers least.',
    },
  },
};
