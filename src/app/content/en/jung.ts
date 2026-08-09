import type { SourceId } from '../sources';
import type { ModelPageContent } from '../types';

export const JUNG_EN: ModelPageContent = {
  meta: {
    title: 'Jung — the original, and everything added afterwards',
    description:
      'The full genealogy of the INTJ: the introverted intuitive of 1921 in Jung’s own words, ' +
      'the four letters Briggs and Myers built in the 1940s, Grant’s stack in 1983, Beebe’s ' +
      'archetypes and the commercial branches. Who added what, and when.',
  },

  sources: [
    'jung-1921',
    'von-franz-1971',
    'saunders-1991',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-type-dynamics',
    'mbf-ethics',
    'quenk-2002-grip',
    'grant-1983',
    'reynierse-2009',
    'pittenger-2005',
    'stein-swan-2019',
    'beebe-2017',
    'keirsey-bates-1978',
    'keirsey-1998',
    'neris-our-theory',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Beyond MBTI — Jung',
    title: 'Jung: the original,\nand everything after',
    lede:
      'Almost everything you have read about the INTJ descends from a chapter written in 1921 by ' +
      'a Swiss psychiatrist who never used the acronym, never administered a questionnaire and ' +
      'would not have separated you from an INFJ. The rest — the four-function stack, the fourth ' +
      'letter, the archetypes, the -T suffix — was added later, by different people, for ' +
      'different reasons. This page is the whole genealogy, in order.',
  },

  intro:
    '<em>Psychological Types</em> is not a manual of types. It is a seven-hundred-page book on ' +
    'the history of ideas with the type chapter at the end, written by someone trying to work ' +
    'out why two competent clinicians — Freud and Adler — could look at the same patient and ' +
    'produce opposite theories. Type, for Jung, was the answer to that question. It was never a ' +
    'test result, and the first letter of your acronym was still twenty years away.',

  caveat:
    'Jung measured nothing. There is no sample, no questionnaire, no norm and no statistic in ' +
    '<em>Psychological Types</em> — there is twenty years of clinical observation and a great ' +
    'deal of Schiller, Nietzsche and medieval scholasticism. Which means everything downstream, ' +
    'from MBTI to socionics, inherited a descriptive scheme rather than a verified one. And it ' +
    'means “Jung said INTJs are…” is always false: the acronym is Myers’. From here on, every ' +
    'section names who added what and in which year — because knowing which layer a sentence ' +
    'comes from is the only real defence against typology badly used.',

  sections: [
    {
      eyebrow: '1921 · Psychologische Typen',
      title: 'Where the book came from',
      paragraphs: [
        'Jung published <em>Psychologische Typen</em> in 1921, eight years after the break with ' +
          'Freud, and stated plainly what question drove him: how could two incompatible ' +
          'theories — Freud’s, centred on the object and on desire directed outward, and ' +
          'Adler’s, centred on the subject and on power — both seem true to the men who framed ' +
          'them. His conclusion was that the difference lay not in the data but in the habitual ' +
          'direction of each man’s consciousness.',
        'What came out of it does not resemble a personality test. The first nine chapters cross ' +
          'the problem of types in antiquity, in the Church Fathers, in the quarrel between ' +
          'nominalists and realists, in Schiller, in Nietzsche, in Spitteler’s poetry. The ' +
          'descriptions of the eight types occupy chapter X, at the end, and are explicitly ' +
          'presented as extreme portraits — clean cases that barely exist in pure form.',
        'Record that before anything else, because everything after it inherits from here: there ' +
          'is no measurement at the origin. There is an attentive clinician describing what he ' +
          'saw, with enormous erudition and no sample at all. The strength of the text is ' +
          'literary and observational. The weakness is that there is no way for it to be wrong ' +
          'that anyone could demonstrate.',
      ],
    },
    {
      eyebrow: 'Chapter X',
      title: 'The introverted intuitive, in his own words',
      paragraphs: [
        'Introverted intuition, for Jung, does not perceive possibilities in the outer world — ' +
          'it perceives the background images of consciousness itself, the processes that have ' +
          'not yet surfaced. It is a perception, not a judgement: it arrives finished, without a ' +
          'chain of reasoning, and that is why whoever has it cannot say where it came from. Jung ' +
          'calls it the vision, and treats its bearer as someone who sees what has not happened ' +
          'yet.',
        'And then he does the most honest thing in the book: he describes both destinies of the ' +
          'same type. When introverted intuition is given priority, he writes, the result is “the ' +
          'mystic dreamer and seer on the one hand, the fantastical crank and artist on the ' +
          'other”. No modern profile would do this — none of them tells you that your best ' +
          'version and your worst version are the same structure with different luck.',
        'The type’s central difficulty, for Jung, is one of language: because his speech “is not ' +
          'that which is commonly spoken”, the arguments he offers do not carry the conviction ' +
          'they ought to. Read that again, slowly. It is the most precise description in ' +
          'existence of the specific INTJ failure — being right and persuading no one — and Jung ' +
          'locates the fault in the language of the one who sees, not in the stupidity of those ' +
          'listening.',
        'The moral problem he assigns the type is the same thing said differently: giving the ' +
          'vision a transmissible form. A vision that stays private is worth nothing, and the ' +
          'introverted intuitive tends to settle for it precisely because, to him, it is already ' +
          'complete. That is a life’s work stated in 1921, before the word “INTJ” existed.',
      ],
    },
    {
      eyebrow: 'The decisive point',
      title: 'Jung would not tell you apart from an INFJ',
      paragraphs: [
        'In the original scheme there is <strong>one</strong> introverted intuitive type. Only ' +
          'one. Whoever’s consciousness is governed by inward-turned intuition belongs to that ' +
          'type, full stop — Jung does not subdivide it by whatever comes second. The INTJ and ' +
          'the INFJ are therefore <em>the same Jungian type</em>, described in the same chapter, ' +
          'in the same words about the mystic and the crank.',
        'The letter that separates the two of you — T or F — is Myers’ way of naming the ' +
          'auxiliary function, inside a rule she created and Jung never formulated. It is not a ' +
          'refinement of the original; it is a theoretical decision laid on top of it. When ' +
          'someone writes “Jung said that the INTJ…”, they are quoting Myers with the wrong name ' +
          'on the cover.',
        'This has a practical consequence any typology forum will confirm: INTJ/INFJ confusion is ' +
          'the commonest and the hardest to resolve. That is neither chance nor carelessness. In ' +
          'Jung’s terms the two share exactly what he considered definitive — the same inward ' +
          'perception, the same certainty without a chain of reasoning, the same difficulty ' +
          'translating it — and differ only in what he never systematised.',
      ],
    },
    {
      eyebrow: 'The inferior function',
      title: 'The door you do not operate',
      paragraphs: [
        'Jung called the inferior function the one sitting at the opposite pole from the ' +
          'dominant and remaining in the unconscious: archaic, slow, all-or-nothing, unavailable ' +
          'to the will. It is not a weak skill you can train up to something reasonable. It is ' +
          'the part of the psyche the ego does not control — and, for that very reason, the only ' +
          'door through which what the ego does not yet know about itself can enter.',
        'Marie-Louise von Franz gave a whole lecture cycle to it, published in 1971, and the ' +
          'description is harsh: the inferior function is childish, tyrannical when it erupts, ' +
          'incapable of moderation, and the place where any real change of personality happens — ' +
          'precisely because it cannot be operated by competence. For the introverted intuitive ' +
          'that function is extraverted sensation: the body, the room, the concrete detail, the ' +
          'present.',
        'That is where everything later type literature calls “the grip” comes from — vocabulary ' +
          'Naomi Quenk popularised in the 1990s: the sudden fall into sensory excess, hyperfocus ' +
          'on an irrelevant detail, hypochondria, compulsion. The genealogy matters because it ' +
          'changes the reading. It is not an INTJ bug to be fixed with discipline; it is, in the ' +
          'Jungian description, how the unintegrated part of the psyche presents itself when the ' +
          'integrated part runs out.',
        'With the usual caveat: von Franz is analytical interpretation, not measurement. The ' +
          'clinical plausibility is high, the empirical base is non-existent, and the distance ' +
          'between those two things is where nearly all popular typology lives.',
      ],
    },
    {
      eyebrow: 'The warning',
      title: 'Jung against the use we make of Jung',
      paragraphs: [
        'In a later essay, gathered into the same volume of the collected works, Jung wrote that ' +
          'the purpose of a psychological typology is not to classify human beings into ' +
          'categories — that, he said, would be fairly pointless. The purpose is to give the ' +
          'clinician a critical apparatus: a way of knowing that his own reading of the patient ' +
          'already arrives bent, and in which direction.',
        'The irony is obvious and worth stating without elegance: the reader most at risk of ' +
          'using type as a label is exactly the one who reads best, retains most and systematises ' +
          'hardest. Which is you. The INTJ has a particular weakness for closed systems that ' +
          'explain people, and the defence against it is not abandoning typology — it is ' +
          'remembering that typology describes a tendency of consciousness rather than issuing a ' +
          'licence.',
        'Jung also insisted that a type is a habitual disposition and not an essence, and that ' +
          'the portraits in chapter X are extreme cases nobody embodies entirely. A century ' +
          'later, with sixteen acronyms sold as identity, that is probably the most useful ' +
          'sentence he left behind.',
      ],
    },
    {
      eyebrow: 'Eight function-attitudes',
      title: 'Jung has no stack at all',
      paragraphs: [
        'Jung’s scheme is simple: two attitudes — introverted and extraverted — crossed with ' +
          'four functions — thinking, feeling, sensation and intuition. Eight function-attitudes, ' +
          'eight portraits. There is no first, second, third and fourth position. There is no ' +
          'rule stating that the auxiliary must sit in the attitude opposite the dominant. There ' +
          'is no four-letter code, because there is no fourth letter.',
        'Jung mentions in passing that a second function of secondary importance is usually ' +
          'present, and imposes a single restriction: it cannot be the opposite of the primary ' +
          'one. If thinking dominates, the second will be sensation or intuition, never feeling. ' +
          'About the <em>attitude</em> of that second function he is all but silent — and it is ' +
          'in exactly that silence that Myers built the entire system.',
        'Note the size of that gap, because the next sections are made of it. Jung numbered no ' +
          'positions, fixed no attitude to any position, wrote no four-letter codes and said not ' +
          'one word about the INTJ. All of that exists — and works reasonably well as language — ' +
          'because other people built it afterwards, each of them solving a problem of their own. ' +
          'From here on, every addition has a name, a year and a motive.',
      ],
    },
    {
      eyebrow: '1940s · Briggs and Myers',
      title: 'Two women, outside the academy, in wartime',
      paragraphs: [
        'Katharine Cook Briggs had been sketching a typology of her own at home, out of ' +
          'biographies and the people around her, when she read the English translation of ' +
          '<em>Psychological Types</em>, published in 1923. She recognised a better system than ' +
          'hers and adopted Jung’s. Her daughter, Isabel Briggs Myers, a political science ' +
          'graduate, began in the early 1940s to turn that descriptive scheme into something a ' +
          'person could answer on paper.',
        'Neither of them had training in psychology. Her biographer Frances Saunders records that ' +
          'Myers learned item writing and test statistics as an apprentice to Edward Hay, ' +
          'personnel manager at a Philadelphia bank — not in a university department but in a ' +
          'human resources office. The motive was wartime: with millions of women entering ' +
          'factories and offices for the first time, Myers wanted an instrument that would help ' +
          'each person find a post compatible with the way she actually worked. The first form of ' +
          'the indicator circulated around 1943.',
        'That is worth weighing without contempt and without indulgence, because both easy ' +
          'readings get it wrong. Two brilliant laywomen built, outside the university, the most ' +
          'widely administered type instrument in the world; academic psychology only examined ' +
          'it closely decades later, and the reviews it produced are predominantly critical. The ' +
          'part that concerns you is a different one: the acronym INTJ is not a research finding. ' +
          'It is a design decision, taken by a specific person, for a specific purpose, in a ' +
          'specific year.',
        'And what Myers added to Jung is substantial, and almost never credited to her. Four ' +
          'inventions: the four-dichotomy format in place of eight portraits; a questionnaire ' +
          'that produces the result with no clinician in the middle; the rule that the auxiliary ' +
          'runs in the attitude opposite the dominant; and the fourth letter. Two of those — the ' +
          'auxiliary rule and the fourth letter — are exactly what makes the INTJ exist as ' +
          'something separate from the INFJ. Without them you are the introverted intuitive of ' +
          '1921 and nothing more.',
      ],
    },
    {
      eyebrow: 'The fourth letter',
      title: 'The J is a pointer, not a trait',
      paragraphs: [
        'The letter J is not in Jung. There is no judging/perceiving axis anywhere in ' +
          '<em>Psychological Types</em>, no preference for closing a matter or leaving it open. ' +
          'The fourth letter is Myers’ invention, and its job inside the system is technical: to ' +
          'point at which of your functions is the extraverted one — the one the world sees.',
        'For an extravert, the fourth letter points at the dominant. For you, an introvert, it ' +
          'points at the auxiliary: J means the outward-facing function is a judging function, ' +
          'and since your judging function is thinking, it means Te. That is all it means. The J ' +
          'in INTJ is a pointer to Te — not a statement about your calendar, your desk or the ' +
          'state of your room.',
        'That settles a doubt nearly every INTJ has at some point: “I live in chaos, am I ' +
          'actually a P?”. By the logic of the system, not necessarily — you can have clothes on ' +
          'the floor and still extravert judgement, because the order you keep is one of criteria ' +
          'and conclusions, not of objects. What muddies it is that the questionnaire’s own items ' +
          'ask about lists, deadlines and planning: the theory says pointer, the instrument ' +
          'measures tidiness. Both have lived inside the same J from the start, and most of the ' +
          'popular confusion about the letter is born exactly there.',
      ],
    },
    {
      eyebrow: '1983 · Grant, Thompson and Clarke',
      title: 'The stack the whole internet quotes',
      paragraphs: [
        'In 1983, Harold Grant, Magdala Thompson and Thomas Clarke published <em>From Image to ' +
          'Likeness</em>. It is not a book of psychometrics. It is a book of Christian ' +
          'spirituality, published by Paulist Press, about a Jungian path within the Gospel ' +
          'journey. It is there that the four-slot stack with alternating attitudes was ' +
          'formalised — the one that now structures every conversation about cognitive ' +
          'functions, from forum to video to this site.',
        'The rule is elegant: the attitudes alternate, position by position. In the INTJ that ' +
          'yields introverted intuition, extraverted thinking, introverted feeling, extraverted ' +
          'sensation — the stack you have seen a thousand times written as ' +
          '<strong>Ni–Te–Fi–Se</strong>. Grant and colleagues also added a developmental ' +
          'timetable, with age bands for the maturing of each function. It is from that book, and ' +
          'not from Jung or Myers, that the idea of the tertiary waking up in your early twenties ' +
          'comes.',
        'The point almost nobody makes: Myers left the attitude of the tertiary function ' +
          'deliberately open, and the Myers & Briggs Foundation still leaves it open. Its own ' +
          'page on type dynamics describes dominant, auxiliary, tertiary and inferior without ' +
          'fixing whether the tertiary is introverted or extraverted. Which means that when ' +
          'someone tells you confidently that your tertiary feeling is <strong>Fi</strong> and ' +
          'not Fe, that person is quoting Grant — not Myers, and certainly not Jung.',
        'Grant measured nothing either. The alternation is a choice of symmetry: handsome, easy ' +
          'to teach, with no study behind it. Reynierse, reviewing the literature, went as far as ' +
          'arguing that type dynamics as a whole adds no explanatory power to the four ' +
          'preferences taken on their own. That does not oblige you to throw the vocabulary away ' +
          '— it obliges you to know what it is: a grammar, not a result.',
      ],
    },
    {
      eyebrow: 'Beebe',
      title: 'Eight positions, eight archetypes',
      paragraphs: [
        'John Beebe, a Jungian analyst, extended the scheme from four positions to eight and gave ' +
          'each function-attitude an archetypal role. The four conscious ones get names: hero, ' +
          'good parent, eternal child, anima. The four shadow ones — the same functions running ' +
          'in the opposite attitude — get opposing personality, senex, trickster and demonic ' +
          'function. It is a map of eight rooms where Myers’ stack had four.',
        'Applied to the INTJ: Ni as hero, Te as good parent, Fi as eternal child, Se as anima; on ' +
          'the other side, Ne as opposing personality, Ti as senex, Fe as trickster and Si as the ' +
          'demonic function. Some of those descriptions are uncomfortably recognisable. Fe as ' +
          'trickster, for instance, is the INTJ who tries to be warm in a social situation, ' +
          'calculates the correct gesture, executes it — and produces precisely the opposite ' +
          'effect, leaving the room without understanding what happened.',
        'Recognising yourself is not the same as having proof, and here the rigour has to match ' +
          'the enthusiasm: none of it has been tested, none of it is in Jung under those names, ' +
          'and most of the material circulates in forums and videos rather than peer-reviewed ' +
          'journals. Beebe gathered the model in <em>Energies and Patterns in Psychological ' +
          'Type</em>, in 2017. Read it as clinical language — useful for naming states you have ' +
          'already lived through, useless as evidence of anything.',
      ],
    },
    {
      eyebrow: 'The commercial branches',
      title: 'Keirsey and NERIS: two other things called INTJ',
      paragraphs: [
        'While the Jungian line was branching, two commercial branches grew alongside the trunk ' +
          'and are now mistaken for it. The first is David Keirsey, who from <em>Please ' +
          'Understand Me</em> in 1978 took the four letters and regrouped them into four ' +
          'observable temperaments, deliberately discarding the cognitive functions: he said he ' +
          'was interested in what people do, not in what goes on inside them.',
        'In Keirsey’s system you are a Rational (NT), and in <em>Please Understand Me II</em>, in ' +
          '1998, you are given the role of Mastermind — the contingency strategist, the one who ' +
          'keeps plans ready for scenarios that have not happened. It is a well-made portrait, ' +
          'and it needs saying plainly that it does not derive from Ni–Te. Keirsey arrived at ' +
          'that INTJ by another road, starting from Hippocrates and from behavioural typologies; ' +
          'the acronym coincides and the theory underneath disagrees.',
        'The second branch is the likelier to have been your way in. NERIS Analytics, which runs ' +
          '16Personalities, kept the four letters as a label and replaced the whole machinery ' +
          'underneath: the dichotomies became five continuous scales aligned to the five-factor ' +
          'model, and the cognitive functions were explicitly abandoned. The company says so ' +
          'itself, on the page where it sets out its theory.',
        'The fifth scale is the one you have seen as a suffix: <strong>-A</strong> for assertive ' +
          'and <strong>-T</strong> for turbulent. It does not exist in the MBTI, does not exist ' +
          'in Grant and does not exist in Jung; in NERIS’ own description it is the identity ' +
          'scale, a relative of five-factor neuroticism. If “INTJ-T” felt like a hit, it is worth ' +
          'knowing that this part of the acronym is the newest and the least Jungian of the lot — ' +
          'and that what it describes is sensitivity to stress and self-doubt, not intuition.',
      ],
    },
    {
      eyebrow: 'The timeline',
      title: 'Which layer the sentence you just read comes from',
      paragraphs: [
        'Put it all together and the shape is sharp. Jung, in 1921, described an introverted ' +
          'intuitive — no acronym, no stack, no final letter, no separation between you and the ' +
          'INFJ. Briggs and Myers, in the 1940s, added the fourth letter, the auxiliary rule and ' +
          'the questionnaire. Grant, Thompson and Clarke, in 1983, added the alternating ' +
          'attitudes and the developmental timetable. Beebe added the eight archetypes. Keirsey ' +
          'and NERIS each built something else under the same name. Almost nothing you take to ' +
          'be “the MBTI” is in Jung, and almost nothing that is in Jung survived the journey ' +
          'intact.',
        'The reason this matters is not purism. It is that the layer determines the weight. A ' +
          'sentence from Jung is the observation of an attentive clinician with no data behind ' +
          'it. A sentence from Grant is a choice of symmetry. A sentence from NERIS is a ' +
          'questionnaire item calibrated on a large sample. Treating the three as equal in force ' +
          'is adding together a memory, a drawing and a measurement — and that is how most of ' +
          'what circulates about your type gets made.',
        'So this is the one skill the page actually wants to leave you with: faced with any claim ' +
          'about the INTJ, ask which layer it comes from. One example of each:',
      ],
      points: [
        '“You are an Ni-dominant.” — Myers and Grant. Jung has introverted intuition, not ' +
          'numbered positions.',
        '“Your tertiary is Fi, and therefore introverted.” — Grant, 1983. Myers left the point ' +
          'open and the Myers & Briggs Foundation still does.',
        '“Se is your inferior, which is why you collapse into the senses under stress.” — the ' +
          'concept of an inferior function is Jung’s, the fixed position is Myers’, and the ' +
          'vocabulary of “the grip” is Naomi Quenk’s, from the 1990s.',
        '“Your Fe is the trickster.” — Beebe, and only Beebe. No other layer uses that word.',
        '“You are a Mastermind.” — Keirsey, 1998, inside a system that rejects the cognitive ' +
          'functions you have just been reading about.',
        '“You are an INTJ-T.” — NERIS. That fifth letter comes from the five-factor model and has ' +
          'no equivalent in the MBTI.',
        '“The INTJ is the most intelligent type, the best at leading, the one who succeeds.” — no ' +
          'layer at all; it is internet folklore. The Myers & Briggs Foundation’s own ethical ' +
          'guidance is explicit: the instrument does not measure ability, competence or skill, ' +
          'it was not designed to be used for hiring, and results are never to be used to limit ' +
          'anyone — and none of the models on this page claims one type is worth more than ' +
          'another.',
      ],
    },
  ],

  verdict: {
    title: 'What still stands',
    text:
      'Once the layers are separated, less remains than is sold and more than is feared. Jung ' +
      'remains: the whole portrait of which the modern profile is the summary, both poles of the ' +
      'same type — the seer and the crank — instead of an administered compliment, and the best ' +
      'statement in existence of your central problem, which is that the vision arrives complete ' +
      'in a language that is not the one commonly spoken. From Myers there remains a format that ' +
      'communicates and travels. From Grant there remains a usable vocabulary for thinking about ' +
      'yourself. What does not remain is measurement, prediction, or any means within the ' +
      'original scheme of telling you apart from an INFJ. Inventing is not the same as ' +
      'discovering — and knowing which layer a sentence comes from is, honestly, the most useful ' +
      'thing this site can hand you.',
    weight:
      'The source text is clinical observation and literary interpretation with no data behind ' +
      'it: it carries authorial weight, not evidential weight. Every layer added since inherited ' +
      'that foundation and built on top of it with growing confidence, without ever going back ' +
      'to check it — and, as usually happens, the most recent layers are the ones that sound ' +
      'most like science. Read this page as the genealogy of a vocabulary, not as a chain of ' +
      'evidence. The vocabulary is good. The chain never existed.',
  },
};
