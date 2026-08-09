import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const PARA_QUEM_AMA_EN: ArticlePageContent = {
  meta: {
    title: 'If you love an INTJ — the thing they did not say',
    description:
      'The only page on this site not written to the INTJ. It is for the partner, the parent, ' +
      'the sibling, the friend: what the silence is, what to ask instead of the obvious, and ' +
      'what actually hurts.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-ethics',
    'quenk-2002-grip',
    'reynierse-2009',
    'who-2019-icd11-burnout',
    'bianchi-2015',
    'baumeister-leary-1995',
    'dyrenforth-2010',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Open letter — If you love an INTJ',
    title: 'If you love\nan INTJ',
    lede:
      'You probably did not go looking for this page: somebody sent you the link. Perhaps with no ' +
      'comment at all, perhaps with a “read this”. Notice what just happened — they would rather ' +
      'a piece of writing explained on their behalf. That is not laziness and it is not cowardice. ' +
      'It is the most accurate way they could find to say something that, spoken aloud, would ' +
      'have come out wrong.',
  },

  intro:
    'Every other page on this site is written in the second person, to an INTJ. This is the only ' +
    'one written to <strong>you</strong> — the person who loves one, raises one, puts up with ' +
    'one, shares a home or an office with one. It is not an instruction manual, and it will not ' +
    'treat the person you love as a device with a manufacturing fault. It is a translation, in ' +
    'both directions: what certain behaviours usually mean from the inside, and what tends to ' +
    'work better than the instinct you would have had.',

  caveat:
    'Two honest things first. One: the MBTI, by its own manual, sorts stated preferences and ' +
    'stops there — it does not measure maturity, character or the capacity to love, and the ' +
    'Myers & Briggs Foundation itself is explicit that no type is worth more than another, that ' +
    'the instrument does not measure ability, competence or skill, and that type does not ' +
    'dictate anyone’s behaviour. Nothing here explains or ' +
    'excuses contempt, cruelty or abandonment; if that is what you are living with, type is not ' +
    'the explanation, and this is not the right page to go looking for one. Two: what follows are ' +
    'patterns observed in people who identify with this type, not laws about one specific person. ' +
    'If half of it does not recognise whoever you have at home, trust the person and discard the ' +
    'half.',

  sections: [
    {
      eyebrow: 'The silence',
      title: 'What the silence is — and what it is not',
      paragraphs: [
        'They go quiet and you start doing sums. Was it something I said? They were fine ' +
          'yesterday. An INTJ’s silence is the most misread thing in their repertoire, and for a ' +
          'reasonable reason: it looks exactly like the silence that, in most people, means hurt.',
        'Almost always it is not. What is happening is a conclusion assembling itself without ' +
          'language. Until the thought closes there is nothing to say — not because they are ' +
          'withholding, but because it does not yet exist in words. And once it finally does, the ' +
          'second problem starts, which is the one Jung described in 1921: his introverted ' +
          'intuitive is not someone who stays silent, it is someone who speaks and is not ' +
          'understood — their speech “is not that which is commonly spoken”, and so their ' +
          'arguments do not convince as much as they should. That is a careful psychiatrist’s ' +
          'clinical observation, not an experimental result — but the two halves together ' +
          'describe rather well what you have been watching on the sofa: first there are no ' +
          'words, then there are words and they do not get through.',
        'The same holds for the long silences. A whole evening with no subject, a weekend with ' +
          'little conversation, three weeks with no word from an INTJ friend: most of the time ' +
          'that is rest, not withdrawal. What the silence costs them inside, not even they can ' +
          'measure — but rest is not assessment: they are not judging you while it lasts. When it ' +
          'is the other thing, it has its own signals, and the next paragraph is about them.',
        'There is, of course, a silence that <em>is</em> withdrawal, and you deserve to be able to ' +
          'tell them apart. The signal is not the length, it is the temperature. A hurt INTJ does ' +
          'not turn cold; they turn polite. The answers shorten, they become correct, they stop ' +
          'having an opinion inside them. Courtesy is what is left when they have given up ' +
          'arguing.',
      ],
      points: [
        'Processing silence: still in the same room, accepts company, answers if you speak.',
        'Recharging silence: wants the door shut, comes back in a few hours, comes back better.',
        'Withdrawal silence: short answers, courteous, with no disagreement left in them.',
        'When in doubt, ask one thing: “is this about me?”. Worth more than a night of deduction.',
      ],
    },
    {
      eyebrow: 'The question',
      title: 'Why “what are you thinking about?” gives you nothing',
      paragraphs: [
        'You ask out of genuine affection and you get “nothing”. It is not evasion. The honest ' +
          'answer, depending on the minute, would land somewhere between “the architecture of a ' +
          'problem I cannot explain without forty minutes of context” and “literally nothing, I ' +
          'was looking at the wall”. Both sound bad. “Nothing” is the rounding.',
        'The question is too wide for what it is trying to reach. It asks them to turn into a ' +
          'sentence, live and unprepared, a process that is still converging — and improvising is ' +
          'precisely the thing they do worst. What follows is them stalling, you reading the stall ' +
          'as distance, and both of you leaving the conversation worse than you entered it.',
        'What works is the opposite: a narrow question, answerable with a fact, and a door back ' +
          'in. Ask about the object, not about the state. They will answer about things with an ' +
          'ease they will never have for answering about themselves — and almost always, if the ' +
          'way in is the object, they arrive at themselves unprompted three sentences later.',
      ],
      points: [
        '“Are you solving something?” — can be answered yes or no.',
        '“Is that work, or is it something else?” — two boxes, and they pick one.',
        '“Do you want to tell me when it closes?” — grants that it has not closed, and books the talk.',
        '“Zero to ten, how much of this is about me?” — numbers are a language they speak fluently.',
        'And the silence after the answer: they usually finish on their own, if you do not fill it.',
      ],
    },
    {
      eyebrow: 'The fix',
      title: 'Solving your problem is how the affection comes out',
      paragraphs: [
        'You describe a bad day and, before the second sentence, there is a diagnosis and three ' +
          'steps. You wanted holding and you got consultancy. It is very easy to read that as ' +
          'coldness. It is almost always the opposite.',
        'What they did was point the best thing they have at your problem. That mind handles ' +
          'whatever matters by turning it into something that can be solved; the moment you join ' +
          'the list of things that matter, you start being quietly optimised. It is worth ' +
          'separating out whose claim is whose. Isabel Myers built the whole model around the ' +
          'idea that the types are complementary resources rather than incomplete versions of one ' +
          'correct way to be — that is her thesis, resting on observation and not on experiment. ' +
          'That solving someone’s problem is how affection comes out she wrote nowhere: that part ' +
          'is this page’s reading. It remains the most useful lens here: what reached ' +
          'you was not indifference, it was undivided attention, delivered in the only wrapping ' +
          'they know how to fold.',
        'Redirecting is simple, and the sentence that works is literally this one: “I want ' +
          'company, not a solution”. It works far better said <em>in advance</em>. Said halfway ' +
          'through, once they have already started building, what arrives is “what you made is ' +
          'worthless” — and that is one of the few things they take home with them. Said in ' +
          'advance, what arrives is a specification, and a specification is the single thing they ' +
          'most enjoy receiving.',
        'The fair other half, which almost nobody does: let them solve something now and then, ' +
          'even when you did not need it solved. Turning their help down as a matter of course is ' +
          'not refusing a piece of advice — it is refusing the entire language, and after a while ' +
          'they stop offering. The silence that comes out of that tiredness is the only one you ' +
          'should be afraid of.',
      ],
    },
    {
      eyebrow: 'The memory',
      title: 'They remember everything and repeat none of it',
      paragraphs: [
        'Your boss’s name, the drug you are allergic to, the sentence your mother said at a ' +
          'dinner in 2019 that you pretended not to hear. All of it is kept, with a date on it. ' +
          'And you will probably never hear any of it come back as “I remember you said”.',
        'Handing back what you told them feels, to them, like theatre: you already know you said ' +
          'it. The memory is not stored as a transcript, it is stored as structure — they did not ' +
          'keep the sentence, they kept what the sentence means about your life. Which is why they ' +
          'do not quote. They act.',
        'That is where it surfaces. In the thing bought without comment four months later. In the ' +
          'route they quietly changed because the other one went past that hospital. In the person ' +
          'they stopped speaking to and never explained, where the reason was what that person did ' +
          'to you.',
        'The cost of this is yours, and it is real: you can go years without a single audible ' +
          'proof of being carried around in someone’s head. Ask for the proof. “I need to hear now ' +
          'and then that you remember” is the kind of request that tends to be met without ' +
          'resistance — not because the type guarantees anything, but because it had probably not ' +
          'occurred to them that it was missing.',
      ],
    },
    {
      eyebrow: 'The criticism',
      title: 'The work and the person are not the same thing',
      paragraphs: [
        'You show an idea and it comes back dismantled. It feels as though <em>you</em> came back ' +
          'dismantled. To them, testing your idea hard was how they took it seriously — and it is ' +
          'worth knowing they do exactly this to their own work, more violently and with no ' +
          'audience. What you heard is what they hear internally all day.',
        'None of which obliges you to accept it at any hour. Two sentences settle nearly all of ' +
          'the friction: “I didn’t bring this for review” draws the line, and “tell me what’s good ' +
          'about it first” reorders. Neither gives offence — they tend to read both as ' +
          'instructions, and an instruction is usually the easiest thing to act on.',
        'The reverse direction is the one hardly anyone sees, and it is where they will lie to ' +
          'you. Criticism of their character goes much deeper than they will ever admit. “You’re ' +
          'cold”, “you don’t care about anyone”, “you’re impossible to live with” — said in a row ' +
          'and withdrawn the next day, that is not withdrawn. There will be no crying and no ' +
          'slammed door. There will be a new courtesy.',
        'And there is a mismatch that changes everything in practice, and it is observation, not ' +
          'known machinery: they tend to find out what they felt after everyone else does. Ask in ' +
          'the moment and they will very likely tell you, in complete sincerity, that they are ' +
          'fine — not as evasion; at that moment the answer is not yet formulated. Ask again a ' +
          'few days later. The second question is the one that tends to bring the answer. And ' +
          'take the general warning: the very idea of functions running in layers, with lags and ' +
          'access, is a model of type, and it is the part of the MBTI with the weakest evidence — ' +
          'it is there to describe, not to explain a mechanism.',
      ],
    },
    {
      eyebrow: 'The plan',
      title: 'When they disappear into something',
      paragraphs: [
        'A project arrives and they vanish. Three weeks of monosyllables, meals skipped, eyes on a ' +
          'screen at two in the morning, and you outside a room where your opinion was not ' +
          'requested. It is not about you, and that does not make it less lonely.',
        'Start with the price of an interruption, because they will never manage to explain it ' +
          'without sounding rude. Interrupting anyone mid-way through a long thought does not ' +
          'cost the sentence — it costs the structure being held in the head, on no paper, and ' +
          'rebuilding it can take far longer than the interruption lasted. That is not a ' +
          'privilege of the type and nobody has measured it in them; it is what they report, and ' +
          'it accounts for the disproportionate reaction to a ten-second question. Warning them ' +
          'from a ' +
          'distance solves nearly all of it: “in twenty minutes I need you” is a kindness they ' +
          'will file as a gift, because it gives them time to save the file.',
        'To bring them back, judgement does not work: “you’re working too much” is a thesis, and ' +
          'theses they demolish in fifteen seconds without effort. What works is concrete and ' +
          'booked. Ask for a date rather than a break. Name an hour, a day and a place — a fixed ' +
          'commitment tends to be kept with almost absurd seriousness, while a vague request ' +
          'tends to get postponed forever, with no ill will at all.',
        'And brace for the far end, if the exhaustion runs long. Naomi Quenk, describing what she ' +
          'called the <em>grip</em>, portrayed people like this turning into their own opposite ' +
          'under prolonged stress: concrete impulsiveness, excess with food or spending, ' +
          'hyperfocus on irrelevant detail, irritation at noise and light. It is accumulated ' +
          'clinical description, not a laboratory finding — but if you recognise the scene, know ' +
          'what it is not. It is not them revealing who they really were. And know what it may ' +
          'be: from outside, that scene is indistinguishable from occupational burnout, which the ' +
          'World Health Organization classifies as a work-related phenomenon and not a medical ' +
          'condition, and from a depressive episode, which is another thing entirely — and the ' +
          'literature shows the two overlap enough that nobody separates them by eye. Sleep, food ' +
          'and less stimulus help, and the conversation about the relationship goes much better ' +
          'after they have slept. But if the state lasts for weeks, if the flatness does not ' +
          'lift with rest, what is missing there is not your patience: it is a professional, and ' +
          'that distinction is not yours to make, nor this page’s.',
      ],
      points: [
        'Before interrupting: a few minutes’ warning, so they can save what they are holding.',
        'Instead of “you’re working too much”: “when does this end?”.',
        'Instead of “we need to go out more”: a date, an hour and a place.',
        'Instead of taking their task away: offer to take a smaller one off their desk — and say ' +
          'you are doing it.',
      ],
    },
    {
      eyebrow: 'The wound',
      title: 'What actually hurts is rarely what looks like it should',
      paragraphs: [
        'Start with what does not hurt, because it is counter-intuitive. A brutal review of the ' +
          'work does not hurt. Being contradicted with a better argument does not hurt — honestly, ' +
          'they enjoy it. Spending an entire party standing in a corner does not hurt. You ' +
          'disagreeing with them in public does not hurt, so long as it is about the thing and not ' +
          'about them.',
        'Being handled hurts. Finding out they were a topic of conversation between other people ' +
          'under the heading “difficult” hurts. Something said in private reappearing in a third ' +
          'person’s mouth hurts. Affection requested with an audience hurts. And more than any of ' +
          'it, the moment they realise one of their certainties cost something to someone they ' +
          'love — because certainty is the tool they are proudest of, and that is the one proof ' +
          'that it cuts both ways.',
        'They will tell you they do not need people. Baumeister and Leary, reviewing the ' +
          'literature in 1995, argued that the need to belong is a fundamental human motivation ' +
          'and not a trait some people simply lack. That is a theoretical case supported by a lot ' +
          'of converging evidence, not a measurement of your INTJ in particular — but take it as a ' +
          'warning. Someone who says they need nobody is describing their own tolerance for ' +
          'solitude, which tends to be enormous. Tolerance is not the absence of the need.',
        'The practical detail: their hurt does not become a row, it becomes analysis. And the ' +
          'analysis, if nobody interrupts it, becomes a conclusion — and in them, a conclusion has ' +
          'the force of a decision. Interrupting is absurdly simple and almost nobody does it in ' +
          'time. Ask. Before the sum closes.',
      ],
    },
    {
      eyebrow: 'What will not change',
      title: 'What will not change — and is not to be asked for',
      paragraphs: [
        'They will not become spontaneous. They can learn to like one specific surprise, after it ' +
          'has gone well twice; they will not learn to like surprise. An unplanned variable does ' +
          'not arrive as a present, it arrives as an unplanned variable. This is not moral ' +
          'rigidity — it is the cost of a mind that works by simulating what is coming, and that ' +
          'has to rerun the whole simulation whenever the world changes route without notice.',
        'They will not enjoy performing warmth on request, with witnesses. It is not embarrassment ' +
          'about you. It is that affection on demand stops being true and becomes a performance, ' +
          'and performance is a category they despise, including in themselves. The same embrace, ' +
          'two days later with nobody watching, is real — and it is what you will get.',
        'And the distance is not about you. That is the most important sentence on this page. They ' +
          'will want hours alone while perfectly happy, with you in the house, with nothing wrong. ' +
          'Their solitude is not a room you are unwelcome in: it is a room nobody is welcome in. ' +
          'There is no version of them that spends an entire life in company and remains them.',
        'The natural temptation is to ask them to be a little more like you — more expansive, ' +
          'quicker with affection, more present on the surface of things. Worth remembering that ' +
          'the Myers & Briggs Foundation itself — which lives off the instrument, and says this ' +
          'anyway — holds that no type is better than another, that a preference is a leaning ' +
          'rather than a prediction, and that the result is not there to label anyone, predict ' +
          'their behaviour or select them. The reverse request — that you stop needing contact ' +
          'in order to feel loved — ' +
          'you would recognise instantly as absurd. It is the same request.',
      ],
    },
    {
      eyebrow: 'What can change',
      title: 'What they genuinely can learn — and it is fair for you to know',
      paragraphs: [
        'Every other page on this site asks them for exactly the same four things, so it is only ' +
          'fair that you know what they are. Say out loud, however badly, what they already ' +
          'demonstrate all the time. Ask before fixing. Be in the present and not only in what ' +
          'comes after it. And consider, now and then, that the conclusion they reached alone ' +
          'about you might simply be wrong. None of that is a personality trait. It is a skill, ' +
          'and skills are learned slowly.',
        'You can ask. You cannot do it for them — and there is an enormous difference between ' +
          'someone who has not learned yet and someone who refuses. The first is slow and worth ' +
          'the patience. The second is already an answer, and you have every right to treat it as ' +
          'one.',
        'When progress arrives it will arrive in their format, and it is easy to miss: a message ' +
          'in the middle of the afternoon for no reason, a sentence said with their back turned ' +
          'while washing up, a “sorry, that came out wrong” said exactly once. That is it. ' +
          'Celebrate internally — celebrating out loud turns the gesture into a performance, and ' +
          'they will not repeat it.',
        'One last thing, to take some weight off you: one of the largest studies ever published ' +
          'on this — Dyrenforth and colleagues, 2010, 23,250 people, roughly eleven thousand six ' +
          'hundred married couples, in Australia, the United Kingdom and Germany — found that ' +
          'personality similarity between partners explains less than half a per cent of the ' +
          'variance in relationship satisfaction; what carried weight was each person’s own ' +
          'personality, and among the traits that most affected the other, agreeableness, ' +
          'conscientiousness and emotional stability came out on top. It was measured with the ' +
          'five broad factors, not with ' +
          'the MBTI, and satisfaction is not the same thing as love. But the direction holds: what ' +
          'decides this is not the pairing of your two four-letter codes. It is what each of you ' +
          'does with what you have.',
      ],
    },
  ],

  closing: {
    title: 'The sentence they almost certainly have not said',
    text:
      'Somewhere in that head there is a whole sentence — drafted, revised, judged excessive and ' +
      'filed away — that runs roughly like this: <em>you are the one thing in my life I do not ' +
      'want to optimise; I have already run the scenario without you and the numbers come out ' +
      'wrong.</em> They will not say it. They will fix the tap, remember your medication, and ' +
      'send you a link to a page. You can spend your life waiting for the sentence, or you can ' +
      'read what they have been writing for years in another alphabet. This page is your ' +
      'permission to do the second. It is not permission to read staying as proof: staying, on ' +
      'its own, proves nothing in anyone, and type does not dictate behaviour — the people who ' +
      'look after the instrument’s use are explicit about that. What can be said is smaller and ' +
      'more useful: if they decide about people with the same seriousness they decide everything ' +
      'else, then being here was decided, not inherited. <strong>It is worth asking them. It is ' +
      'probably the only way to hear the sentence.</strong>',
  },
};
