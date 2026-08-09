import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const FAMILIA_EN: ArticlePageContent = {
  meta: {
    title: 'Family — obligation, loyalty and estrangement | INTJ',
    description:
      'The INTJ as an adult child, sibling, the relative everyone calls in a crisis, parent — ' +
      'and the cut this type makes more decisively than most.',
  },

  sources: [
    'jung-1921',
    'myers-1998-manual',
    'myers-1980-gifts',
    'mbf-ethics',
    'grant-1983',
    'quenk-2002-grip',
    'riso-hudson-1999',
    'mmtic-1987',
    'baumeister-leary-1995',
    'dyrenforth-2010',
    'jang-1996-heritability',
    'pittenger-2005',
    'reynierse-2009',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Page 12 — Family',
    title: 'The family that came\nwithout your choosing',
    lede:
      'Friends you choose. Jobs you change. Family is the one structure in your life that was ' +
      'assembled before you got here, with rules nobody presented to you and a slot already ' +
      'filled in with your name. A type that has to <em>understand</em> before it can accept ' +
      'spends a lifetime renegotiating that contract — sometimes in silence, sometimes all at ' +
      'once.',
  },

  intro:
    'You have no problem with loyalty. You have a problem with <em>automatic loyalty</em> — the ' +
    'kind built into kinship that never has to justify itself. That is why you turn up at the ' +
    'hospital at three in the morning and do not turn up at your aunt’s birthday: to you those ' +
    'two things belong to different categories, and to your family they belong to exactly the ' +
    'same one. Almost every family friction an INTJ has fits inside that sentence.',

  caveat:
    'Nothing on this page has been measured. There is no study of INTJ families, of the children ' +
    'of INTJs, of estrangement by type — nor would there easily be one, since the unit of ' +
    'analysis would be a whole household across decades. What follows is pattern-reading from ' +
    'the Ni · Te · Fi · Se order and from the type literature, which is descriptive by vocation. ' +
    'And it is worth saying where that order comes from: the alternation of attitudes across the ' +
    'four floors is a convention of Grant, Thompson and Clarke (1983), not of Jung and not of ' +
    'Myers, and type dynamics is precisely the part of the MBTI whose ability to predict anything ' +
    'the psychometric critique has already reviewed and found weak. The Myers & Briggs Foundation ' +
    'itself is explicit: the instrument does not measure ability, competence or skill, it was not ' +
    'designed to be used for hiring, and results are never to be used to limit anyone — and a ' +
    'family is where that temptation is strongest. If a section describes your house with ' +
    'uncomfortable precision, that is ' +
    'recognition, not evidence. And the section on estrangement describes a mechanism: it is not ' +
    'clinical guidance and it does not replace someone who knows your history.',

  sections: [
    {
      eyebrow: 'The adult child',
      title: '“Because it has always been done this way” is not an argument',
      paragraphs: [
        'There was an age at which you worked out that your parents were not applying a principle ' +
          '— they were repeating a habit. It was probably early, and you probably asked why. The ' +
          'answer came back as “that is how it is done”, and something closed there: you ' +
          'understood that authority in that house did not come from having thought about it, it ' +
          'came from having arrived first.',
        'That did not make you a rebel. The INTJ is rarely a rebel in the noisy sense — you do ' +
          'not break the rule, you stop believing in it and do the minimum while you build an exit. ' +
          'Te, the function that organises the outside world, accepts hierarchy with no discomfort ' +
          'at all <em>provided it is competent and explains why</em>. A family almost never ' +
          'explains why. It presumes.',
        'The loyalty you have for them is real, and it is of a particular kind: chosen, revised, ' +
          'and for that reason sturdier than the automatic version. The trouble is that it is ' +
          'invisible from outside. Someone who measures affection by attendance at rituals cannot ' +
          'see the loyalty of a person who sorts out the health insurance, redoes the probate, ' +
          'drives them to the appointment — and does not hug anyone at the door.',
        'And it is worth being exact about what your family sees. It does not see someone who ' +
          'disagrees with a tradition. It sees someone who refuses to <strong>perform</strong> — ' +
          'and performance, for most people, is part of affection, not a lie about it. You are not ' +
          'being cold; you are being literal in a language that is not literal. Knowing that does ' +
          'not oblige you to change. It only removes the surprise.',
      ],
      points: [
        'What you take on without argument: emergencies, money, logistics, the tedious expensive ' +
          'part.',
        'What you refuse: compulsory presence with no function, indirect demands, “in this family ' +
          'we have always done it this way”.',
        'What they conclude: that the second list measures your love and the first is merely ' +
          'competence.',
      ],
    },
    {
      eyebrow: 'Siblings',
      title: 'The serious one, the responsible one, the difficult one',
      paragraphs: [
        'Every family hands out roles early, and hands them out by what is useful rather than by ' +
          'what is true. If you were the child who read alone, who asked too many questions, who ' +
          'did not cry in front of anyone, the role left over was predictable: the serious one. ' +
          'The responsible one. Sometimes the difficult one — usually the same child seen by a ' +
          'tired adult.',
        'The role sticks because it works. Being the serious one, you got autonomy early, and ' +
          'autonomy is the thing this type needs most. The bill came later: roles handed out at ' +
          'eight are not revised at thirty-five. You may have changed country, profession and ' +
          'convictions — at Sunday lunch you are still the one nobody asks whether things are all ' +
          'right.',
        'The hard phrase is Jung’s: falsification of type. When the influence of the household ' +
          'pushes a child out of her own disposition, he wrote, the bill arrives later as ' +
          'neurosis, and it is only paid by developing the attitude that was hers from the start. ' +
          'Isabel Myers inherited the term and made a whole chapter of <em>Gifts Differing</em> ' +
          'out of it, on the obstacles to type development: the child who learns to operate on ' +
          'the household’s preferences instead of her own, and pays in chronic tiredness and in ' +
          'the sense of being permanently slightly wrong. Neither of them built this on a cohort ' +
          '— it is clinical observation — but it is among the easiest theses to recognise from ' +
          'inside. And it is worth distinguishing: falsification is not having been given a ' +
          'nickname as a child. It is having spent years running outside your own configuration.',
        'The Enneagram reaches something similar by a completely different road. Riso and Hudson ' +
          'describe, for each type, an orientation formed in childhood towards the figures who ' +
          'protected and the figures who nurtured — and type 5, the one most often associated with ' +
          'the INTJ in community descriptions, organises itself around withdrawing inward and ' +
          'trading need for competence. Note what that is: a school’s model, with no peer-reviewed ' +
          'validation, useful as description and nothing more. But “I sort myself out” is a ' +
          'sentence the INTJ tends to have learned very early, and it never arrives alone.',
        'With siblings, the commonest pattern is an asymmetry of translation. You hold a detailed ' +
          'map of each of them — what they do, what they fear, where the life is heading — and ' +
          'they hold a low-resolution portrait of you, taken in adolescence and never updated. The ' +
          'distance you feel there is rarely a lack of affection. It is that nobody asked for the ' +
          'new version.',
      ],
    },
    {
      eyebrow: 'The phone',
      title: 'They call you in the crisis and not the rest of the time',
      paragraphs: [
        'You are the one who reads the contract. Who finds out which hospital the cover actually ' +
          'includes, who builds the funeral spreadsheet, who rings the solicitor, who stays awake ' +
          'until it is sorted. This is not an accident: it is Ni seeing the ending while everyone ' +
          'else is still in the shock, and Te turning that ending into a list of things that have ' +
          'to be done by Thursday.',
        'And then comes the part that hurts and that almost nobody says out loud: the competence ' +
          'is drawn on and not returned. Not because your family is ungrateful, but because you ' +
          'trained everyone to see you as infrastructure. Nobody rings the infrastructure on a ' +
          'Sunday afternoon just to see how it is doing. You built, alone and meticulously, a ' +
          'reputation as the person who does not need anything.',
        'Baumeister and Leary, reviewing the literature on belonging, proposed a two-part ' +
          'formulation, and it is the conjunction that matters: belonging requires frequent, ' +
          'non-aversive interaction with the same person <em>and</em> the perception of a stable ' +
          'bond, with mutual concern and continuity in view. One half on its own does not settle ' +
          'the account. Usefulness they do not discuss — that extension is this page’s, and it is ' +
          'a modest one: being called only when you are good for something delivers the contact ' +
          'and fails to deliver the second half. Which is why being essential does not cure ' +
          'loneliness. Being essential and not being sought out is, in practice, a very efficient ' +
          'way of ending up alone among people who love you.',
        'The way out is not to stop helping; it is to stop helping in total silence. Asking for ' +
          'something is the hardest move there is for this type, because asking exposes a need and ' +
          'a need looks like a design fault. But a family that has never seen you need anything is ' +
          'not being negligent — it is working with the information it was given.',
      ],
    },
    {
      eyebrow: 'Parents',
      title: 'A language nobody taught you — and the parent who is you',
      paragraphs: [
        'There is a difference between parents who gave no affection and parents who gave ' +
          'affection in a format you never learned to decode. The second category is larger than ' +
          'it looks, and sadder, because it involves two people straining in perpendicular ' +
          'directions. A father who shows care through insistent worry, a mother who shows it ' +
          'through food and through phone calls with no subject — to a tertiary Fi, which feels ' +
          'enormously and articulates poorly, that does not arrive as love. It arrives as noise, ' +
          'control or demand.',
        'The reverse holds too, and that is the half you control. You deliver affection in ' +
          'solutions. They ask for affection in presence. Neither side is wrong about what love ' +
          'is; both are wrong about the other’s vocabulary. The translation, when it happens, is ' +
          'almost never a big conversation — it is a short sentence said at an odd moment, and the ' +
          'effect tends to last years.',
        'The strangest case is having a parent of the same type. The silence between you is ' +
          'comfortable, the understanding is fast, nobody has to explain why they do not want to ' +
          'go to the party. And nothing is ever said. Two Ni–Te engines in one house produce a ' +
          'genuine peace and an empty record: you know you are respected and you do not know ' +
          'whether you are loved, because respect is the only thing that language pronounces well. ' +
          'Similarity of type can make living together more comfortable — that is observation, ' +
          'not measurement, and it is worth recording that the largest study of personality ' +
          'similarity, more than twenty-three thousand people across three countries, found ' +
          'similarity effects close to zero on satisfaction. Comfort and intimacy remain ' +
          'different things in any case, and the second still requires someone to speak first.',
        'And there comes the moment when the hierarchy inverts: your parents age and you become ' +
          'the adult responsible for both of them. This type takes that on with an almost ' +
          'frightening competence — and that is exactly where competence becomes the hiding place. ' +
          'Managing someone’s decline is easier, for you, than sitting beside it with no task at ' +
          'all.',
      ],
    },
    {
      eyebrow: 'You as a parent',
      title: 'Competent children, and the temperature of the house',
      paragraphs: [
        'The INTJ tends to be a parent who treats a child as a person. You explain the reason ' +
          'instead of issuing the order, answer a hard question with a true answer, let them ' +
          'decide early and let them get it wrong. When it goes well the result is remarkable: ' +
          'children who think for themselves, who are not afraid to disagree with an adult, and ' +
          'who at fifteen already know how to run their own week.',
        'The risk is specific, and it is not neglect — it is temperature. A house where everything ' +
          'is fair, explained and well administered can be a cold house without anyone having ' +
          'decided on that. A child does not infer that she is loved from the quality of the ' +
          'decisions taken about her. She needs to hear it and needs to feel it, in a quantity ' +
          'that strikes you as redundant — because the redundancy is precisely what produces ' +
          'safety. You measure once and cut once; affection is the only material you deliberately ' +
          'cut several times.',
        'The other trap is the child who is not you. An extraverted, sensory, expressive child who ' +
          'needs noise, people and immediate reaction can be read — with no bad faith at all — as ' +
          'scattered, excessive or shallow. Myers made this point the practical centre of ' +
          '<em>Gifts Differing</em>: much of the damage between parents and children comes from an ' +
          'adult trying to correct a preference instead of recognising it. It is her claim, not an ' +
          'experimental finding. It is also the most useful thing in the book.',
        'The arithmetic helps you remember, provided it is done properly. In the American ' +
          'national sample of the <em>MBTI Manual</em> the INTJ sits at roughly two per cent, and ' +
          'there is no equivalent sample for most other countries. But two per cent is the ' +
          'population rate, not the probability for your child: twin studies attribute somewhere ' +
          'between forty and sixty per cent of the variation in personality traits to heredity, ' +
          'which makes resemblance likelier than chance — and still unlikely. The conclusion does ' +
          'not change, it just becomes honest: the chance that the child in your house runs the ' +
          'way you run is small, and the house has to be built for that.',
        'One practical warning, because the temptation is enormous. Typing your own child is a ' +
          'fast way to swap a real child for a model of one. The adult instrument was not built ' +
          'for minors — there is a separate one, the MMTIC, by Meisgeier and Murphy (1987), now ' +
          'in a revised version covering ages 7 to 18 — and even that records stated preference, ' +
          'never potential. The Myers & Briggs Foundation’s ethical guidance is explicit: the ' +
          'instrument does not measure ability, competence or skill, it was not designed to be ' +
          'used for hiring, and results are never to be used to limit anyone. That holds for a ' +
          'hiring process, and it holds far more forcefully for the person asleep in the next ' +
          'room.',
      ],
    },
    {
      eyebrow: 'Compulsory gatherings',
      title: 'The arithmetic of Sunday lunch',
      paragraphs: [
        'Nine people, four hours, three simultaneous conversations, a television left on and ' +
          'nobody saying anything that would not fit into four minutes. You do not hate these ' +
          'people. You are doing, without meaning to, a calculation: high cost, undetermined ' +
          'return, and the suspicion that the only thing being produced is confirmation that ' +
          'everyone showed up.',
        'The calculation is technically correct and it is the wrong answer — because what is being ' +
          'produced there is indeed the showing up, and that is the whole point. The ritual does ' +
          'not transmit information, it transmits continuity: I am still here, you are still here, ' +
          'the arrangement is still standing. For a type that only recognises value where there is ' +
          'function, it takes a deliberate step to see that this <em>is</em> the function. You are ' +
          'not obliged to agree. It is useful to stop thinking everyone else is irrational.',
        'And there is the cost that is not philosophical. Extraverted Sensing occupies the fourth ' +
          'floor of the order this site uses — a position that is Jung’s own, and that the MBTI ' +
          'manual keeps; what comes from Grant, Thompson and Clarke (1983) is the attitude of ' +
          'the third function, not this one. None of it is an ' +
          'experimental finding. Described that way, it accounts well for what happens there: a ' +
          'loud room, many people, simultaneous stimulus and no visible exit drain you physically ' +
          'before they drain you emotionally — and the portrait of what happens when that ' +
          'tiredness goes past the point comes from Naomi Quenk, which is accumulated clinical ' +
          'description and not measurement. This is not fussiness or dislike — it is ' +
          'the same reason you leave an airport feeling as though you had put in a shift. Arriving ' +
          'later, leaving earlier and having your own car home usually solves more than any ' +
          'conversation about it.',
        'The honest choice is almost never between going and not going. It is between going their ' +
          'way and going yours: two hours instead of six, one good conversation instead of ten ' +
          'shallow ones, a job in the kitchen that gives you a function and gets you out of the ' +
          'circle. You do not owe your family a version of yourself that does not exist. You owe ' +
          'them, if you conclude that you do, real presence in a dose you can actually hold.',
      ],
    },
    {
      eyebrow: 'Inheritance',
      title: 'What you carry and what you refuse to pass on',
      paragraphs: [
        'Every family transmits a package: religion, politics, money, what is spoken about and ' +
          'what is not, how the person serving the table is treated, what counts as shame. The ' +
          'INTJ is frequently the member who opens the package item by item. Fi is a private and ' +
          'implacable compass — what you value is not negotiable — and it audits the entire ' +
          'inheritance with no special consideration for whoever handed it over.',
        'The result is usually a person with an ethic of their own and no need for approval, which ' +
          'is rare and worth a great deal. But there is a specific fault in the procedure: an ' +
          'audit carried out at nineteen, in anger, tends to reject the whole package on account ' +
          'of three items. Decades later you find you threw away things you never actually ' +
          'examined — you only reacted to them by association. Rejecting by reaction is as ' +
          'automatic as accepting by habit: it changes the sign, not the mechanism.',
        'It is worth running the audit again slowly, item by item, now the anger has come down. ' +
          'What in that house was a principle, what was a habit, what was fear dressed as a ' +
          'principle. And the question almost nobody asks: what in it worked. There is always ' +
          'something — a stubbornness, a way of working, a phrase — that you use every day and ' +
          'have never credited.',
      ],
      points: [
        'Principle: still true even when said by someone you dislike.',
        'Habit: survives only because nobody asked.',
        'Fear dressed as a principle: vanishes when you ask what happens if it is disobeyed.',
      ],
    },
    {
      eyebrow: 'Estrangement',
      title: 'The door that closes all the way',
      paragraphs: [
        'This type cuts with a decisiveness that frightens the people outside it. It is usually ' +
          'not a rupture with warning, with years of visible deterioration, with doors left ajar. ' +
          'It is a conclusion that forms in silence, sometimes over a very long time, and is then ' +
          'executed in one movement. From inside it does not feel like an impulse — it feels like ' +
          'the end of a calculation. From outside it looks as though someone vanished without an ' +
          'explanation.',
        'There is no measurement of this. Nobody has counted family estrangements by type, and any ' +
          'figure you find quoted has no study behind it. What does exist is the consistency with ' +
          'the machine: Ni closes on a single reading of what that person is, Te executes the ' +
          'decision without rehearsal, and Fi supplies the moral justification — entire, absolute, ' +
          'and formed wholly inside your own head.',
        'Sometimes the cut is right, and that needs saying without hedging. There are families in ' +
          'which staying costs more than leaving. There is abuse, there is violence, there is the ' +
          'person who will not change and who has demonstrated that twenty times. In those cases ' +
          'the INTJ’s fast and final decision is a real advantage: you do not spend ten years ' +
          'negotiating with someone who is not negotiating.',
        'And sometimes the mechanism runs on its own. An old grievance enters what the type ' +
          'community calls an Ni–Fi loop — community vocabulary, not an official MBTI concept, but ' +
          'it describes the process well: the episode is revisited internally for years, gains ' +
          'detail with each revision, and the reading becomes steadily more coherent and more ' +
          'closed. The problem is that nothing gets in. No new version, no question put to the ' +
          'person themselves, no information that contradicts. In the end you are not reacting to ' +
          'a relative — you are reacting to a model of them that you finished building yourself, ' +
          'and that has had no update in a decade.',
        'The useful question is not “should I cut them off?”. It is: has this conclusion been ' +
          'tested outside my own head? Has anyone who owes me no loyalty heard the whole version? ' +
          'Did the other person ever find out what the charge was? A cut that survives those three ' +
          'questions is a decision. A cut that has never been through them may also be one — but ' +
          'you have no way of knowing, and that is exactly the difference.',
        'One last thing, with no moral attached. Leaving a family does not switch off the need to ' +
          'belong; it only transfers the vacancy. The literature on belonging is clear on this: ' +
          'the need is structural, not optional, and it will go looking for somewhere to be met. ' +
          'People who cut and build another network elsewhere tend to be all right. People who cut ' +
          'and build nothing tend to discover, some years later, that they solved the wrong ' +
          'problem. None of those sentences is advice about your particular house, which this page ' +
          'knows nothing about.',
      ],
    },
  ],

  closing: {
    title: 'The part that does not resolve',
    text:
      'Family is the only bond in your life you did not design. You can reduce it, redraw it, end ' +
      'it — you cannot make it never have existed, and no amount of analysis turns the place you ' +
      'came from into something neutral. What you can do is smaller and more real: decide on ' +
      'information rather than on an old model, say out loud once a year what you demonstrate all ' +
      'year, and accept that some of these people will never understand you and love you anyway, ' +
      'in the way they know how. <strong>You are not cold.</strong> You are literal in a place ' +
      'where almost nobody is — and it has cost you more than it has cost them.',
  },
};
