import type { SourceId } from '../sources';
import type { GlossaryContent } from '../types';

export const GLOSSARIO_EN: GlossaryContent = {
  meta: {
    title: 'Glossary — every term on this site, and whose it is',
    description:
      'Cognitive function, stack, loop, grip, enneatype, tritype, facet, A/T identity, Model A: ' +
      'the whole vocabulary of this site defined, attributed to the right author and applied to ' +
      'the INTJ.',
  },

  sources: [
    'jung-1921',
    'von-franz-1971',
    'myers-1980-gifts',
    'myers-1998-manual',
    'quenk-2002-grip',
    'mbf-basics',
    'mbf-type-dynamics',
    'mbf-ethics',
    'grant-1983',
    'beebe-2017',
    'riso-hudson-1999',
    'naranjo-1994',
    'chestnut-2013',
    'fauvre-tritype',
    'hook-2021',
    'hippocrates-c400bc',
    'galen-c170',
    'klibansky-1964',
    'lahaye-1984',
    'littauer-1983',
    'keirsey-1998',
    'mccrae-costa-1989',
    'costa-mccrae-1992',
    'neris-our-theory',
    'augustinaviciute-1998',
    'wikisocion-ili',
    'marston-1928',
    'kim-2025-mbti-disc',
    'pittenger-2005',
    'reynierse-2009',
    'bess-harvey-2002',
    'howes-carskadon-1979',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Glossary',
    title: 'Every word,\nand whose it is',
    lede:
      'Several different systems talk about you on this site — Jung, MBTI, the enneagram, the ' +
      'temperaments, the Big Five, NERIS, socionics, DISC — and some of them use exactly the same ' +
      'words to mean different things. This page exists so you can stop guessing: every term ' +
      'with a short definition, the name of whoever built it, and what it describes when it runs ' +
      'on <strong>Ni · Te · Fi · Se</strong>.',
  },

  intro:
    'An honest entry has to say three things: what the word means, whose it is, and how far it ' +
    'has been checked. The second is the one that almost always goes missing — and it is exactly ' +
    'the one that prevents the commonest error in online typology, which is attributing to MBTI ' +
    'an idea born on a forum, at a test company, or in someone else’s book. <em>Grip</em> is ' +
    'Naomi Quenk’s. <em>Loop</em> belongs to nobody. The -A/-T suffix is NERIS’s. Knowing that ' +
    'does not make the terms useless; it makes them traceable.',

  caveat:
    'No term on this page describes ability, worth or fitness, and none of them licenses a ' +
    'prediction about a person. The distinction that holds across the whole site holds here entry ' +
    'by entry: describing a tendency is one thing, predicting an outcome is another, and only the ' +
    'first is within reach of these models. Where the evidence is thin, the entry says so in the ' +
    'same sentence that gives the definition — not in a footnote.',

  systems: [
    'Jung',
    'MBTI',
    'Type dynamics',
    'Community',
    'Enneagram',
    'Temperaments',
    'Big Five',
    'NERIS',
    'Socionics',
    'DISC',
    'Criticism',
  ],

  allLabel: 'Everything',

  entries: [
    /* -- Jung -------------------------------------------------------------- */

    {
      term: 'Cognitive function',
      system: 'Jung',
      short:
        'A mode of operating, not a trait: two ways of perceiving, two of judging, each turned ' +
        'inward or outward.',
      long:
        'Jung (1921) describes four functions — sensing and intuition for perceiving, thinking ' +
        'and feeling for judging — and two possible attitudes for each, introverted or ' +
        'extraverted. Eight function-attitudes in all. Notice what this is <em>not</em>: a ' +
        'function is not a skill, not a talent, and not the property of a type — all four are in ' +
        'you, and counting eight positions, one per attitude, is a later extension of the model, ' +
        'not Jung’s. What your four letters claim is the <strong>order</strong> and the ' +
        '<strong>direction</strong> — which arrive first, which arrive late, and which barely ' +
        'arrive at all. Ni is not a gift of yours; it is the operation you trust ahead of every ' +
        'other one.',
      sources: ['jung-1921', 'mbf-type-dynamics', 'beebe-2017'],
    },
    {
      term: 'Ni — introverted intuition',
      system: 'Jung',
      short:
        'Turned towards the inner object: the image arrives finished, with no receipt for how it ' +
        'was calculated — “convergence” is what the later type literature called that, not Jung.',
      long:
        'In Jung, introverted intuition does not sweep the world for possibilities: it turns ' +
        'towards the inner object, perceives the image the unconscious background sends back, and ' +
        'hands it over finished, with no chain of reasoning attached. The current reading — a ' +
        'great deal going in, a single outcome coming out — belongs to the later type literature, ' +
        'not to 1921, and it is worth saying so on a page built to keep authors apart. In ' +
        'the INTJ it is the first function, and that is where the asymmetry defining your social ' +
        'life comes from: the certainty arrives before the argument, and the argument arrives ' +
        'late and clumsy. Jung located that failure in the language of the one who sees, not in ' +
        'the intelligence of those listening — and it remains the most precise description there ' +
        'is of the specific failure of being right and persuading nobody.',
      sources: ['jung-1921', 'myers-1980-gifts'],
    },
    {
      term: 'Te — extraverted thinking',
      system: 'Jung',
      short: 'Logic ordered by the outside world: criteria, scope, deadline, checkable result.',
      long:
        '“Extraverted” here means ordered by the object — by what can be verified outside you. Te ' +
        'decides on effectiveness, cuts redundancy, builds process, and accepts being overruled ' +
        'by data. In the INTJ it is the auxiliary, and it is the only extraverted function in the ' +
        'conscious half of the stack: quite literally your way out. Two practical consequences. ' +
        'First: it is the part other people see, which is why so many mistake competence for ' +
        'hardness. Second: the <strong>J</strong> in your code comes from Te, not from Ni — MBTI ' +
        'looks at the first extraverted function in the stack and asks whether it judges or ' +
        'perceives.',
      sources: ['jung-1921', 'myers-1980-gifts', 'mbf-type-dynamics'],
    },
    {
      term: 'Fi — introverted feeling',
      system: 'Jung',
      short:
        'A value judgement made on the inside, against a private ruler — and with almost no ' +
        'translation available.',
      long:
        'In Jung, feeling is a <em>rational</em> function: it evaluates, it decides what is worth ' +
        'what. It is not emotion, it is criteria. Introverted, it measures against an inner ' +
        'standard instead of measuring against the room. In the INTJ it comes third, strong in ' +
        'intensity and poor in articulation: it is what ends a ten-year friendship without an ' +
        'argument and without a way back, and it is also what you discover you felt two days ' +
        'later. Record that the introverted orientation given to the third function is a ' +
        'convention of Grant’s scheme (1983) rather than official material: the foundation itself ' +
        'records that the experts disagree and leaves the attitude of the tertiary open, listing ' +
        'the INTJ’s third floor as “Feeling — Fe or Fi”.',
      sources: ['jung-1921', 'grant-1983', 'myers-1980-gifts', 'mbf-type-dynamics'],
    },
    {
      term: 'Se — extraverted sensing',
      system: 'Jung',
      short:
        'The concrete world arriving now, before it turns into meaning — and the last item in ' +
        'your queue.',
      long:
        'Extraverted sensing registers the object as it is: taste, sound, tiredness, the ' +
        'temperature of the room, your own body. In the INTJ it is the inferior function, which ' +
        'in practice means noticing hunger, pain and exhaustion only once they are already high, ' +
        'and living a few centimetres ahead of the present moment. Jung and von Franz did not ' +
        'treat the inferior as a defect but as the way in for what has not yet been lived — the ' +
        'material the dominant function left outside, which comes back with disproportionate ' +
        'force when the system tires.',
      sources: ['jung-1921', 'von-franz-1971', 'quenk-2002-grip'],
    },
    {
      term: 'Individuation',
      system: 'Jung',
      short:
        'In Jung, the process of becoming whole — which includes precisely what your type left ' +
        'out.',
      long:
        'Jung defines individuation in the definitions chapter of <em>Psychological Types</em>: ' +
        'differentiating oneself, becoming an indivisible individual distinct from collective ' +
        'psychology. It is not self-improvement and it is not optimisation — it is integrating ' +
        'what the dominant function had to exclude in order to work that well. In a Ni–Te life ' +
        'the excluded material has a name: body, present, sensation and unformulated value. Which ' +
        'is why the second half of an INTJ’s life tends to revolve around things Ni and Te cannot ' +
        'deliver. It is a clinical and philosophical proposition from a man who watched patients ' +
        'for twenty years, never a measured process.',
      sources: ['jung-1921', 'von-franz-1971'],
    },

    /* -- MBTI -------------------------------------------------------------- */

    {
      term: 'Type',
      system: 'MBTI',
      short:
        'The four letters. A declared category of preference — never a measure of what you are ' +
        'able to do.',
      long:
        'In Myers, a type is the result of four choices between pairs, and nothing beyond that. ' +
        'Not a diagnosis, not a level, not a prognosis. The foundation that guards the ethical ' +
        'use of the instrument is explicit: all types are equally valuable, the instrument was ' +
        'not designed to be used for hiring, it does not measure ability, competence or skill, ' +
        'and no result is ever to be used to limit anyone. Worth holding on to ' +
        'before you read the rest of this site, because nearly every misuse of this vocabulary ' +
        'starts at the same point — the moment “I am an INTJ” stops describing how you prefer to ' +
        'process and starts explaining why you deserve something.',
      sources: ['myers-1980-gifts', 'mbf-basics', 'mbf-ethics'],
    },
    {
      term: 'Preference',
      system: 'MBTI',
      short:
        'The habitual choice between two equally valid ways of doing the same thing — like ' +
        'writing with one hand.',
      long:
        'The analogy everyone repeats, and which MBTI training material still uses today: you ' +
        'can write with both hands, but one comes out automatic ' +
        'and the other takes attention, effort and patience. Preference describes what is ' +
        'comfortable, never what is possible. Preferring I is not being unable to converse; ' +
        'preferring T is not being unable to care. And there is a detail almost nobody mentions: ' +
        'the instrument produces a <strong>number</strong> before it produces a letter — a ' +
        'preference clarity index — and the letter is only the sign of that number. The INTJ who ' +
        'speaks in public without suffering and the INTJ who puts off a phone call for three days ' +
        'receive the same <strong>I</strong>; the index that told them apart was discarded before ' +
        'your four letters ever appeared on the screen.',
      sources: ['myers-1980-gifts', 'myers-1998-manual', 'mbf-basics'],
    },
    {
      term: 'Dichotomy',
      system: 'MBTI',
      short: 'Each of the four pairs — E–I, S–N, T–F, J–P — split into two sides by a cut-point.',
      long:
        'The dichotomy is the real unit of MBTI: four cuts, sixteen combinations. The fourth ' +
        'deserves special attention in your case, because it is the worst explained of them all. ' +
        'J–P does not ask whether you are tidy; it asks whether your first ' +
        '<em>extraverted</em> function judges or perceives. In the INTJ that function is Te, and ' +
        'that is the only reason you are a J — the Ni governing everything is a perceiving ' +
        'function and never shows up in the letter. Keep the objection that follows, too: the ' +
        'four scales distribute continuously and centrally, so what separates people is the ' +
        'cut-point, not nature.',
      sources: ['myers-1998-manual', 'mbf-basics', 'bess-harvey-2002'],
    },

    /* -- Type dynamics ----------------------------------------------------- */

    {
      term: 'Type dynamics',
      system: 'Type dynamics',
      short:
        'The reading that turns four letters into a hierarchy of processes — the step that ' +
        'explains most and holds up least.',
      long:
        'This is the layer that makes MBTI look deep: instead of four loose preferences, an order ' +
        'among functions, one dominating, one balancing and two in the cellar. The foundation ' +
        'publishes it as part of the model; Reynierse (2009), in a paper bluntly titled <em>The ' +
        'case against type dynamics</em>, argues that the dynamics never gathered consistent ' +
        'evidence and that the simple preferences do almost all the descriptive work on their ' +
        'own. Both things are true at once, and that is why this site still uses the stack: it is ' +
        'what makes the INTJ description recognisable, and it remains the least data-backed part ' +
        'of everything you will read here.',
      sources: ['mbf-type-dynamics', 'myers-1998-manual', 'reynierse-2009'],
    },
    {
      term: 'Cognitive stack',
      system: 'Type dynamics',
      short:
        'The order Ni · Te · Fi · Se: four functions with fixed attitudes, from most conscious to ' +
        'least.',
      long:
        'Myers established the dominant and the auxiliary and argued for the balance between ' +
        'them. The full four-slot stack with alternating attitudes — the version that circulates ' +
        'today in every type description — comes from Harold Grant’s scheme (1983), adopted by ' +
        'practice until it looked like consensus. Read the order as a <strong>hierarchy of ' +
        'trust</strong>, not as a measure of strength: no MBTI instrument measures the power of a ' +
        'function. And note what is particular about the INTJ stack — a single extraverted ' +
        'function upstairs. You have exactly one door to the world, and it is Te.',
      sources: ['myers-1980-gifts', 'grant-1983', 'reynierse-2009'],
    },
    {
      term: 'Dominant',
      system: 'Type dynamics',
      short:
        'The first function: the most conscious, the most trusted, the one that runs without ' +
        'being called.',
      long:
        'In the INTJ that is Ni. The dominant is what you are before you decide to be anything — ' +
        'it works in the shower, in traffic, in a queue, and it does not switch off when you ask. ' +
        'It is also the function whose verdict you accept without review, which explains the ' +
        'strength and the risk of the type in one movement: a well-calibrated dominant calls the ' +
        'outcome years ahead; a dominant with no external correction produces a sealed theory ' +
        'about other people’s intentions and treats the absence of proof as confirmation.',
      sources: ['mbf-type-dynamics', 'myers-1980-gifts'],
    },
    {
      term: 'Auxiliary',
      system: 'Type dynamics',
      short:
        'The second: it balances the dominant in attitude and in task. In the INTJ, Te — your ' +
        'only conscious contact with the outside.',
      long:
        'Myers’s argument is one of balance: an introvert needs an extraverted auxiliary or lives ' +
        'entirely inside their own head; and a perceiving dominant needs a judging auxiliary or ' +
        'nothing is ever decided. In the INTJ both requirements point at Te. When Te is ' +
        'underbuilt the effect is easy to recognise and painful to admit: years of beautiful ' +
        'systems that never left a notebook, and the sincere conviction that the problem is the ' +
        'world not being ready.',
      sources: ['myers-1980-gifts', 'mbf-type-dynamics'],
    },
    {
      term: 'Tertiary',
      system: 'Type dynamics',
      short:
        'The third, Fi in the INTJ: it arrives late, works badly in words, and decides more than ' +
        'it appears to.',
      long:
        'In Grant’s scheme (1983) the tertiary matures roughly between twenty and forty — a ' +
        'hypothesis about development, never verified by following a real cohort. Two things ' +
        'about yours: the introverted orientation assigned to it is Grant’s convention, not ' +
        'official material — the foundation itself records that the experts disagree and leaves ' +
        'the attitude of the tertiary open, listing the INTJ’s third floor as “Feeling — Fe or ' +
        'Fi”; and it is the reason the description of the INTJ as a ' +
        'cold person misses entirely. Tertiary Fi is not a small amount of feeling — it is ' +
        'feeling without an interface. The pressure is fully there; the vocabulary for it turns ' +
        'up days late.',
      sources: ['grant-1983', 'myers-1980-gifts', 'reynierse-2009', 'mbf-type-dynamics'],
    },
    {
      term: 'Inferior',
      system: 'Type dynamics',
      short:
        'The fourth, Se: weak in control and never in impact. It is where you collapse and where ' +
        'you grow.',
      long:
        'In the Jungian tradition the inferior function is archaic, slow, all-or-nothing and ' +
        'unavailable to the will — you cannot switch it on by decision, and it switches itself on ' +
        'at the worst possible hour. That is what makes “weak point” a misleading phrase: what is ' +
        'weak is your control over it, not its effect on you. And it is the same material von ' +
        'Franz describes as the only real entrance to what has not yet been lived, which hands ' +
        'the INTJ an uncomfortable and very concrete instruction: growth is not in more Ni, it is ' +
        'in body, pace and presence.',
      sources: ['von-franz-1971', 'quenk-2002-grip', 'mbf-type-dynamics'],
    },
    {
      term: 'Grip',
      system: 'Type dynamics',
      short:
        'Naomi Quenk’s name for the episode in which the inferior function takes command. In the ' +
        'INTJ, raw Se.',
      long:
        'Quenk (2002) describes the pattern for each type: under prolonged stress the dominant ' +
        'runs out, the inferior erupts in a crude version, and the person behaves like their own ' +
        'opposite. In the INTJ it turns up almost as caricature — someone who plans five years ' +
        'ahead reorganising a drawer at two in the morning, eating a whole packet without ' +
        'noticing, hyperfocusing on an irrelevant detail while the deadline burns. Worth knowing ' +
        'where the concept comes from: it is clinical description accumulated over decades of ' +
        'practice, not a laboratory finding, and nobody has measured how often INTJs enter that ' +
        'state.',
      sources: ['quenk-2002-grip', 'mbf-type-dynamics'],
    },
    {
      term: 'Shadow function',
      system: 'Type dynamics',
      short:
        'The four remaining functions, with attitudes inverted. John Beebe’s model — the most ' +
        'speculative layer on this site.',
      long:
        'Beebe extends the four-slot stack to eight and assigns an archetypal role to each ' +
        'position: the opposing personality, the critical senex, the trickster, the demonic. In ' +
        'the INTJ the lower four are Ne, Ti, Fe and Si. The model is seductive because it names ' +
        'real experiences — the emotional weather of a group you neither produce nor read, the ' +
        'alternative you open only in order to demolish it. But it is interpretation built on a ' +
        'stack that is already a hypothesis: elaboration upon elaboration, with no empirical ' +
        'check of any kind. Use it as an image, never as a mechanism.',
      sources: ['beebe-2017', 'reynierse-2009'],
    },

    /* -- Community --------------------------------------------------------- */

    {
      term: 'Loop',
      system: 'Community',
      short:
        'Community vocabulary, not MBTI: the dominant running with the tertiary and the auxiliary ' +
        'off the air. In the INTJ, Ni–Fi.',
      long:
        'Start with what this term is not. It does not appear in Jung, does not appear in Myers, ' +
        'does not appear in the technical manual, and has not one published study behind it — it ' +
        'was born on typology forums in the 2000s and spread because it describes something ' +
        'people recognise. And it does describe it: with Te switched off, the INTJ loses the only ' +
        'external check in the stack, and Ni starts feeding on itself while Fi supplies the moral ' +
        'verdict. In practice that is weeks of self-analysis with no exit, old grievances ' +
        'reprocessed in rich detail, and an entire case assembled against someone who was never ' +
        'asked. The way out is always through the auxiliary: any act that puts the conclusion in ' +
        'front of another person — sending the message, publishing the draft, asking the question ' +
        'whose answer you have already assumed. Use the word if it helps. Just never say the ' +
        'manual says it.',
      sources: ['jung-1921', 'myers-1980-gifts', 'myers-1998-manual', 'mbf-type-dynamics'],
    },

    /* -- Enneagram --------------------------------------------------------- */

    {
      term: 'Enneatype',
      system: 'Enneagram',
      short:
        'One of the nine points of the enneagram. It describes <em>why</em> you act, not ' +
        '<em>how</em> you process.',
      long:
        'The nine-pointed figure is G. I. Gurdjieff’s, who taught it as a cosmological diagram ' +
        'and never as a typology; the one who hung the ego fixations on it was Óscar Ichazo, at ' +
        'Arica, around 1970; the psychological reading in ' +
        'use today is Claudio Naranjo’s; and the version practically everyone reads is Don Riso ' +
        'and Russ Hudson’s. The enneatype does not compete with MBTI because it answers a ' +
        'different question — and that difference explains why two INTJs with the same stack can ' +
        'fail to recognise each other. Same machine, different fuel. The caveat is large: the ' +
        'systematic review by Hook and colleagues (2021) sweeps 104 samples and concludes that ' +
        'the evidence on reliability and validity is <em>mixed</em> — with minimal empirical ' +
        'support for wings and arrows.',
      sources: ['naranjo-1994', 'riso-hudson-1999', 'hook-2021'],
    },
    {
      term: 'Wing',
      system: 'Enneagram',
      short:
        'The neighbouring point that colours the main one — 5w4, 5w6. A descriptive convention ' +
        'with minimal empirical support.',
      long:
        'The notation was formalised by Riso and Hudson: your type stays the same, and one of the ' +
        'two neighbours on the figure lends it a tone. In an INTJ 5 the difference is immediately ' +
        'legible day to day — 5w4 puts Fi in the shop window and produces someone with a private ' +
        'aesthetic and a visible wound; 5w6 trades that for method, loyalty and double-checking. ' +
        'Legible is not measured: Hook and colleagues (2021) record that factor analyses of ' +
        'enneagram questionnaires recover fewer than nine factors, and that wings and arrows have ' +
        'minimal empirical support. A useful convention, not a demonstrated structure.',
      sources: ['riso-hudson-1999', 'hook-2021'],
    },
    {
      term: 'Centres',
      system: 'Enneagram',
      short:
        'The three groups of three: gut (8-9-1, anger), heart (2-3-4, shame), head (5-6-7, fear).',
      long:
        'Each centre gathers the three types that handle the same background emotion badly — and ' +
        'the point is usually misread: the centre does not say where the emotion is felt, it says ' +
        'where it is habitually mishandled, whether by excess, by repression or by denial. The ' +
        'division into three centres predates the enneagram of personality — it comes from ' +
        'Gurdjieff’s doctrine of the three centres, taken up by Ichazo and Naranjo — but the ' +
        'pairing of each centre with a background emotion, anger, shame and fear, is Riso and ' +
        'Hudson’s formulation. For ' +
        'an INTJ the following distinction is worth holding: your stack has no centre. Ni and Te ' +
        'describe processing, and anger, shame and fear appear nowhere in that description — ' +
        'which is exactly the gap the enneagram sets out to fill.',
      sources: ['naranjo-1994', 'riso-hudson-1999'],
    },
    {
      term: 'Basic desire',
      system: 'Enneagram',
      short:
        'What the type pursues underneath everything. The desire/fear pair is Riso and Hudson’s ' +
        'formulation.',
      long:
        'The idea is that beneath each behaviour sits a constant search — competence, worth, ' +
        'authenticity, autonomy — that the person rarely formulates. Neither Ichazo nor Naranjo ' +
        'organised the material into that pair; basic desire and basic fear are Riso and Hudson’s ' +
        'vocabulary, and it is only fair to say whose they are. In an INTJ the basic desire is ' +
        'usually the last thing to become visible, and the reason is structural: Ni answers with ' +
        'content, never with motive. You can describe the plan in high detail and have no idea ' +
        'what it is for.',
      sources: ['riso-hudson-1999'],
    },
    {
      term: 'Basic fear',
      system: 'Enneagram',
      short:
        'The threat that organises the rest — what the basic desire is running from. Also Riso ' +
        'and Hudson’s.',
      long:
        'It is the symmetrical half: for every search, something to avoid. The specific INTJ ' +
        'problem is camouflage. Te turns fear into procedure, and procedure looks reasonable from ' +
        'outside and from inside. The 5 who fears being incapable and depleted does not feel ' +
        'afraid — they feel prepared; the 1 who fears being corrupt does not feel afraid — they ' +
        'feel correct; the 3 who fears being worthless does not feel afraid — they feel ' +
        'productive. Same movement under a better name, and naming it is practically the whole ' +
        'job.',
      sources: ['riso-hudson-1999'],
    },
    {
      term: 'Levels of development',
      system: 'Enneagram',
      short:
        'Riso and Hudson’s nine-rung scale inside each type: the same motivation, from healthy to ' +
        'destructive.',
      long:
        'This is probably the most useful idea in the enneagram and one of the least tested. It ' +
        'resolves a confusion that haunts all typology — that a type could be good or bad — by ' +
        'showing that the same motivation runs an entire range. Two INTJ 5s can be the attentive ' +
        'researcher who teaches for free and the recluse who has stopped answering the door; the ' +
        'type is identical, the rung is not. Two caveats in the same breath: Riso and Hudson ' +
        'never published psychometric validation of the nine levels, and no instrument places you ' +
        'on one. You place yourself — and under stress nobody rates themselves a rung lower than ' +
        'they would like.',
      sources: ['riso-hudson-1999', 'hook-2021'],
    },
    {
      term: 'Tritype',
      system: 'Enneagram',
      short:
        'One point from each centre, in the order you reach for them. Katherine Fauvre’s ' +
        'proprietary model, with no peer-reviewed literature.',
      long:
        'The proposal is that nobody runs on a single point: there would be a main fixation in ' +
        'each centre, and the order between the three would describe the person’s strategy. The ' +
        'term is the author’s registered trademark and the model comes from a single hand, with ' +
        '<strong>no</strong> peer-reviewed study whatsoever — a thinner base than the enneagram’s, ' +
        'which is already thin. That said, what it adds for an INTJ is specific and hard to get ' +
        'elsewhere: it separates the fixation that drives the vision from the one that drives the ' +
        'execution, and those two rarely want the same thing.',
      sources: ['fauvre-tritype', 'hook-2021'],
    },
    {
      term: 'Instinct (subtype)',
      system: 'Enneagram',
      short:
        'The three drives — self-preservation, social and sexual/one-to-one — which crossed with ' +
        'the nine types give twenty-seven subtypes.',
      long:
        'Naranjo described the twenty-seven; the version in circulation today is largely Beatrice ' +
        'Chestnut’s (2013). The dominant drive comes before deliberation: it decides where the ' +
        'energy goes before Ni gets a chance to choose. In an INTJ it is usually more visible to ' +
        'whoever lives with you than the type itself — the same 5 becomes a quiet stockpiler of ' +
        'resources, the archivist of a group’s knowledge, or someone who concentrates an entire ' +
        'life on one person, and all three versions believe they are simply being rational. ' +
        'Vocabulary without validation, like the rest of the model.',
      sources: ['naranjo-1994', 'chestnut-2013'],
    },

    /* -- Temperaments ------------------------------------------------------ */

    {
      term: 'Temperament',
      system: 'Temperaments',
      short:
        'The most overloaded word on this site: three different models use it, and only one of ' +
        'them is the four humours.',
      long:
        'First, ancient medicine: the <em>Hippocratic Corpus</em> speaks of blood, phlegm, yellow ' +
        'bile and black bile, and Galen, around 170 AD, turns that into a doctrine of mixtures — ' +
        'of which there are <strong>nine</strong>, not four. Second, the twelve ' +
        'dominant/secondary blends you meet in any online test: those are Tim LaHaye’s, 1984, and ' +
        'not antiquity’s. Third, Keirsey’s temperaments: four groups of MBTI types — Artisan, ' +
        'Guardian, Idealist and Rational — in which the INTJ is always Rational, by definition, ' +
        'with no blending possible. Confusing the three is how a reader ends up believing the ' +
        'Greeks described their subtype.',
      sources: ['hippocrates-c400bc', 'galen-c170', 'lahaye-1984', 'keirsey-1998'],
    },
    {
      term: 'Melancholic',
      system: 'Temperaments',
      short:
        'Slow to start, deep, exacting. The label that stuck hardest to the INTJ — and the one ' +
        'least measured.',
      long:
        'In the popular vocabulary LaHaye and Littauer inherited from the humours, the ' +
        'melancholic is analytical, perfectionist, loyal to few and prone to gloom — Galen’s was ' +
        'another thing entirely, a cold and dry mixture and nothing more. On a Ni–Te engine that ' +
        'portrait describes a very recognisable pace: conclusions ' +
        'held back for months because they are not presentable yet, standards nobody asked for, ' +
        'and grievance quietly accumulating until it becomes a decision. None of it was ever ' +
        'measured by anyone: black bile does not exist, and “melancholic” as a ' +
        '<em>temperament</em> is assessed by no instrument in contemporary psychology — what ' +
        'psychiatry measures under that name is clinical melancholia, a different thing. The ' +
        'term is here as descriptive language — much as one calls someone ' +
        'cold-blooded without claiming anything about the temperature of their blood.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },
    {
      term: 'Choleric',
      system: 'Temperaments',
      short:
        'Fast, direct, command-oriented. In an INTJ it is Te reaching the room before Ni has ' +
        'finished.',
      long:
        'In the same popular vocabulary of LaHaye and Littauer, the choleric decides early, ' +
        'speaks in the imperative and has little tolerance for other ' +
        'people’s slowness — in Galen, choleric named only a hot and dry mixture. In an INTJ the ' +
        'effect is not to change the architecture but to bring ' +
        'the clock forward: the conclusion leaves before it is ripe, the plan gets corrected in ' +
        'public, and impatience shows up as tone. This is the INTJ people describe as ' +
        'intimidating without being able to quote a single aggressive sentence. It remains ' +
        'pre-scientific vocabulary with no instrument and no norms — useful for naming ' +
        'temperature, useless for asserting anything about capability.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },
    {
      term: 'Phlegmatic',
      system: 'Temperaments',
      short:
        'Calm, economical, hard to move. In an INTJ it is the silence other people read as ' +
        'agreement.',
      long:
        'In LaHaye and Littauer’s popular portrait, the phlegmatic saves energy, avoids friction ' +
        'and absorbs pressure without changing on ' +
        'the surface — in Galen, it was only the cold and moist mixture. Combined with Ni–Te it ' +
        'produces someone extraordinarily steady in a crisis ' +
        'and extraordinarily hard to read: you decided some time ago, you see no reason to ' +
        'announce it, and the room reads the absence of objection as assent. The cost turns up ' +
        'later, when three months of stored disagreement comes out whole and out of proportion. ' +
        'The usual warning applies: a description of pace, with no metric basis at all.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },
    {
      term: 'Sanguine',
      system: 'Temperaments',
      short:
        'Fast, warm, scattered. The label you least expect in an INTJ and the most expensive to ' +
        'sustain — without anyone ever having counted how many there are.',
      long:
        'In the same popular portrait, inherited from the humours by LaHaye and Littauer, the ' +
        'sanguine walks into any room, likes people, and starts more than they finish — in Galen, ' +
        'hot and moist and nothing beyond that. On a ' +
        'Ni–Te stack it is the most disconcerting combination of the set — the sociable INTJ, ' +
        'whom everyone takes for an extravert and who gets home exhausted from having circulated. ' +
        'Worth saying what that does not mean: it is not a different type and it is not a ' +
        'mistyping. It is the same machine with a faster warm-up, paying a bill nobody around ' +
        'them sees. And, like the rest of this section, it is historical vocabulary with no ' +
        'verification behind it.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },

    /* -- Big Five ---------------------------------------------------------- */

    {
      term: 'Big Five',
      system: 'Big Five',
      short:
        'Five continuous dimensions — openness, conscientiousness, extraversion, agreeableness ' +
        'and neuroticism — with published norms and measurement error.',
      long:
        'It is the only model on this site that academic psychology takes seriously, and it gives ' +
        'you no name at all: it gives you a position on five rulers. The bridge to your four ' +
        'letters comes from one specific study — McCrae and Costa (1989) gave the MBTI and the ' +
        'NEO-PI to the same 468 adults and correlated scale with scale: E–I with extraversion ' +
        'around −0.7, S–N with openness 0.72, J–P with conscientiousness −0.49, T–F with ' +
        'agreeableness 0.44. The NEO-PI-R, with its thirty facets, would only arrive in 1992. ' +
        'Every “Big Five profile of the INTJ” you have ever read, this site included, is derived ' +
        'from those scale-to-scale correlations: no trait profile of a sample of INTJs has ever ' +
        'been published.',
      sources: ['mccrae-costa-1989', 'costa-mccrae-1992'],
    },
    {
      term: 'Facet',
      system: 'Big Five',
      short:
        'The subscale: each NEO-PI-R domain is the sum of six facets — and the sum is where the ' +
        'information dies.',
      long:
        'The NEO-PI-R does not measure five things, it measures thirty grouped into five. The ' +
        'facets travel together enough to form a factor and separately enough to disagree inside ' +
        'the same person. That is why “low extraversion with high assertiveness” is no ' +
        'contradiction at all: assertiveness is one of the six facets of extraversion, and it is ' +
        'under no obligation to follow gregariousness and excitement-seeking. It is the facet by ' +
        'which the silent INTJ still takes charge of a meeting they did not want to enter. Note ' +
        'the limit: the structure of the domain <em>explains</em> why the popular description is ' +
        'not self-contradictory — it measured nobody, and no facet profile for INTJs has ever ' +
        'been published.',
      sources: ['costa-mccrae-1992', 'mccrae-costa-1989'],
    },
    {
      term: 'Neuroticism',
      system: 'Big Five',
      short:
        'The propensity to negative affect and to dysregulation under pressure — the one ruler no ' +
        'MBTI scale corresponds to.',
      long:
        'Anxiety, hostility, depression, excessive self-consciousness, impulsiveness, ' +
        'vulnerability. In 1989 the four MBTI dichotomies were correlated with the five factors; ' +
        'four of the factors found a partner, and this one was left alone. The consequence is ' +
        'direct and deserves saying without softening: your four letters do not say a word about ' +
        'how much you suffer. Two INTJs with the same stack, one serene and one corroded by ' +
        'anxiety, receive exactly the same code — and the instrument is not failing when it does ' +
        'that, because it was built to sort preferences in a non-clinical population, never to ' +
        'measure adjustment.',
      sources: ['mccrae-costa-1989', 'costa-mccrae-1992', 'myers-1998-manual'],
    },

    /* -- NERIS ------------------------------------------------------------- */

    {
      term: 'A/T identity',
      system: 'NERIS',
      short:
        'The -A/-T suffix from the sixteen-personalities test. It is NERIS’s, not MBTI’s — and in ' +
        'practice it occupies the ruler the four letters lack: neuroticism.',
      long:
        'NERIS Analytics publishes the most-answered sixteen-type test in the world and states ' +
        'that it moved away from Jungian types, organising its questionnaire around five-factor ' +
        'traits, keeping Myers’s letters as a recognisable shorthand and adding a fifth ' +
        'dimension: Identity, Assertive against Turbulent. Which means — <strong>INTJ-A and ' +
        'INTJ-T are not two official variants of the INTJ</strong>. They are the missing ruler, ' +
        'bolted onto the end of a code from another instrument. Two consequences, neither ' +
        'comfortable: this is a design decision, not a discovery about INTJs; and the instrument ' +
        'is commercial and proprietary, without the peer-reviewed scrutiny the NEO-PI-R has ' +
        'accumulated. What the suffix does <em>not</em> mean: -T is not a worse INTJ or a less ' +
        'INTJ one. It is a guess about your position on the ruler your four letters never had.',
      sources: ['neris-our-theory', 'mccrae-costa-1989', 'costa-mccrae-1992', 'myers-1998-manual'],
    },

    /* -- Socionics --------------------------------------------------------- */

    {
      term: 'Socionics',
      system: 'Socionics',
      short:
        'A typology built in Vilnius in the 1970s out of Jung. The INTJ corresponds to ILI, not ' +
        'to LII.',
      long:
        'Aušra Augustinavičiūtė crossed <em>Psychological Types</em> with the notion of ' +
        'information metabolism and reached sixteen types by a road entirely unlike the American ' +
        'one, far more interested in what happens <em>between</em> two types. The confusion ' +
        'almost every English text makes fits inside one letter: in socionics the final letter ' +
        'describes the <strong>dominant</strong> function rather than the first extraverted one — ' +
        'so in introverts it inverts. INTJ (Ni–Te) becomes INTp, that is <strong>ILI</strong>. ' +
        'LII is Ti–Ne, which is the INTP. And none of it has peer review, published samples or ' +
        'norms: this is translation between two maps, never a second measurement.',
      sources: ['augustinaviciute-1998', 'wikisocion-ili'],
    },
    {
      term: 'Model A',
      system: 'Socionics',
      short:
        'The eight-position skeleton of socionics — and the distinction the four-slot stack never ' +
        'makes: weak-and-wanted against weak-and-painful.',
      long:
        'Model A crosses three questions — are you strong at this, do you value this, is this ' +
        'deliberate or automatic — and ' +
        'distributes the eight elements across eight positions. For the ILI, Se falls in position ' +
        '5, suggestive: weak and wanted, the physical shove you accept with relief from whoever ' +
        'has it. Fe falls in position 4, vulnerable: weak and painful, where any criticism lands ' +
        'as a personal attack. That separation is one of the two things socionics offers and MBTI ' +
        'does not — the other is the intertype relations — and it has immediate practical ' +
        'value: the INTJ who confuses the two spends years ' +
        'trying to develop warm sociability when what was missing was body, pace and presence. ' +
        'With nothing tested behind it: no samples, no norms, no inter-rater reliability.',
      sources: ['augustinaviciute-1998', 'wikisocion-ili'],
    },

    /* -- DISC -------------------------------------------------------------- */

    {
      term: 'DISC',
      system: 'DISC',
      short:
        'Four styles of observable behaviour — not functions, not internal preference. Marston, ' +
        '1928.',
      long:
        'William Marston crossed two questions — is the environment favourable or hostile, are ' +
        'you stronger or weaker than it — and obtained Dominance, Inducement, Submission and ' +
        'Compliance. He never wrote a test; the instruments came decades later, and today there ' +
        'are dozens of commercial versions with incompatible norms, which makes “what is my ' +
        'DISC?” a question with no single answer. The “INTJ = D + C” of corporate training was ' +
        'never verified: in the only published study to correlate the two systems, with 130 ' +
        'students, Thinking came out associated with <em>less</em> dominance, not more. The value ' +
        'of DISC for you is precisely its shallowness: it describes the surface the room sees, ' +
        'which is where nearly all of your social problem lives.',
      sources: ['marston-1928', 'kim-2025-mbti-disc', 'pittenger-2005'],
    },

    /* -- Criticism --------------------------------------------------------- */

    {
      term: 'Test–retest reliability',
      system: 'Criticism',
      short:
        'Whether the same test returns the same result weeks later. With MBTI, for a great many ' +
        'people, it does not.',
      long:
        'It is the most basic demand you can make of an instrument, and MBTI meets it badly: as ' +
        'early as 1979, Howes and Carskadon reported letter changes on retest associated with ' +
        'shifts in mood, and the pattern recurs in the literature that follows. The mechanism is ' +
        'no mystery — the letter is a cut applied to a continuous score, so anyone near the cut ' +
        'changes sides with the week they have had. What that means for you is more interesting ' +
        'than it looks: it does not mean you are not an INTJ, it means the questionnaire is a ' +
        'poor way to settle it — and that the recognition you feel reading a description is doing ' +
        'more work than the test is.',
      sources: ['howes-carskadon-1979', 'pittenger-2005', 'myers-1998-manual'],
    },
    {
      term: 'Bimodality',
      system: 'Criticism',
      short:
        'The prediction that scores would form two humps at the poles. They form one hump, in the ' +
        'middle.',
      long:
        'If there really were two kinds of people — introverts and extraverts — the distribution ' +
        'of scores would show two peaks. Bess and Harvey (2002) tested exactly that with around ' +
        'twelve thousand respondents and found centred distributions, not bimodal ones. That is ' +
        'the technical heart of the whole criticism of MBTI: what categorises is the cut-point, ' +
        'not nature. It does not abolish the vocabulary — it abolishes treating each letter as a ' +
        'border found in the world. You are not an INTJ the way an element is carbon. You are in ' +
        'a region of the space where that description works well.',
      sources: ['bess-harvey-2002', 'pittenger-2005'],
    },
    {
      term: 'Predictive validity',
      system: 'Criticism',
      short:
        'Whether a score predicts something later — performance, retention, satisfaction. Where ' +
        'the evidence is weakest and the temptation strongest.',
      long:
        'Pittenger (2005) states the problem without hedging: the evidence does not support using ' +
        'MBTI to guide consequential decisions — selection, promotion, career direction. And the ' +
        'foundation’s own ethical guidance reaches the same practical place by another route, the ' +
        'route of use rather than of evidence: the instrument was not designed to be used for ' +
        'hiring, it does not measure ability, competence or skill, and no result is ever to be ' +
        'used to limit anyone. ' +
        'Translated to your case, with neither consolation nor cruelty: nothing in Ni–Te–Fi–Se ' +
        'predicts that you will be a good engineer, a bad partner or a rare mind. The stack ' +
        'describes the road you tend to take. Where it leads is a separate question — and it is ' +
        'precisely the question this vocabulary does not answer.',
      sources: ['pittenger-2005', 'mbf-ethics', 'reynierse-2009'],
    },
  ],
};
