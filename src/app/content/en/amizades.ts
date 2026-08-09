import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const AMIZADES_EN: ArticlePageContent = {
  meta: {
    title: 'Friendship — few, long, no upkeep | INTJ',
    description:
      'Friendship for someone running Ni–Te–Fi–Se: why the count is short, what actually builds ' +
      'a bond, why small talk is expensive, the silent cut, the network that dries up, and ' +
      'scheduled contact.',
  },

  sources: [
    'baumeister-leary-1995',
    'holt-lunstad-2010',
    'dyrenforth-2010',
    'jung-1921',
    'myers-1998-manual',
    'myers-1980-gifts',
    'keirsey-1998',
    'mbf-ethics',
    'leikas-ilmarinen-2017',
    'stein-swan-2019',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Bonds — Friendship',
    title: 'Friendship for someone\nwho does no upkeep',
    lede:
      'You have fewer friends than most people your age, and you have known that for a long ' +
      'time. What nobody may have told you is that the short count is not the fault — the fault ' +
      'is that friendship, in your case, rests on something other than frequent presence, and ' +
      '<em>nobody explained what</em>. This page is about that other thing, and about what ' +
      'happens to everyone when it stops running.',
  },

  intro:
    'Friendship is the bond the INTJ manages least. Work has method, love has attention, family ' +
    'has obligation — friendship has none of it, which is why it is the first thing to disappear ' +
    'when a large project swallows you. Not by decision: by <em>absence</em> of decision. And ' +
    'like almost everything lost by omission, you notice much later, once the list of people you ' +
    'could actually ring has already shrunk on its own.',

  caveat:
    'There is no research on friendship by type. Nobody has counted INTJs’ friends, measured how ' +
    'long bonds last by four-letter code, or compared social networks across the sixteen ' +
    'combinations. What exists is descriptive type literature — accumulated observation, never ' +
    'tested — and general research on belonging and health, which holds for human beings rather ' +
    'than for a code. This page therefore describes patterns and plausible mechanisms, and calls ' +
    'on evidence at three points, each of them flagged where it happens: the frequency of the ' +
    'type, which comes from an American sample in the MBTI manual; personality similarity, ' +
    'measured in couples and with traits, not in friendships and not with four-letter codes; and ' +
    'the passage on loneliness. In all three the studies are about people in general, you ' +
    'included — never about INTJs. If some description here is not yours, it is wrong about you ' +
    '— not the other way round.',

  sections: [
    {
      eyebrow: 'The count',
      title: 'Why there are so few — and why that is not a deficiency',
      paragraphs: [
        'Make the honest list: the people you would ring at three in the morning without ' +
          'rehearsing the first sentence. It fits on one hand, with fingers to spare. At some ' +
          'point you compared that list with other people’s and concluded there was something ' +
          'wrong with yours.',
        'The mechanism is less dramatic than the conclusion. Ni does what the later type ' +
          'literature describes as converging — the term is that literature’s, not Jung’s and not ' +
          'the manual’s: it takes the first signals a person gives off and closes an entire ' +
          'reading before the second conversation, where they are heading, what they do under ' +
          'pressure, whether what they say and what they do are the same thing. You are not ' +
          'rejecting people. You are closing a question far too early, then treating the ' +
          'provisional answer as final. Add to that an arithmetic the rest of the world does ' +
          'loosely: every bond costs something, and you budget for that cost. The stock phrase — ' +
          'introverts spend energy, extraverts gain it — is type vocabulary, not measurement: in ' +
          'an experience-sampling study of 48 people, extraverted behaviour produced an immediate ' +
          'lift in mood and more fatigue three hours later, equally in both groups, with the ' +
          'extraversion trait moderating nothing. That is few people and a single study; it is ' +
          'enough to take the “therefore” out of the phrase, not to swap it for another one. What ' +
          'sets you apart is not the invoice. It is the willingness to pay it. Few friends is not ' +
          'a philosophical position. It is a budget.',
        'None of this has been measured. The frequency tables in circulation — the soundest is ' +
          'the national sample of some three thousand people in the MBTI manual, and it is ' +
          'American — say only how many INTJs there are, never how many friends each one has. ' +
          'The portrait of small, deep networks is description accumulated over decades by people ' +
          'who write about type, and it never became data. Read it as a portrait.',
        'And what matters more than the number: three people who know who you actually are is ' +
          'more social life than forty contacts who know your job title. The short count only ' +
          'becomes a problem in one case — when it shrinks without your having decided anything. ' +
          'That case is what the rest of this page is about.',
      ],
    },
    {
      eyebrow: 'The shape',
      title: 'The silence that costs nothing',
      paragraphs: [
        'Eight months without speaking. Then a message lands — no “hey, stranger”, no reproach, ' +
          'no preamble — picking up exactly the conversation that stopped in February. A link, a ' +
          'technical question, a joke that makes sense to two people on earth. And the friendship ' +
          'has not lost a degree. Neither of you found it strange. Neither of you apologised.',
        'That is rare, and it is yours. For you a bond is <strong>state</strong>, not stream: it ' +
          'sits stored whole, with the model of the person inside it, and it does not decay with ' +
          'time because time is not one of its ingredients. For most people a bond is a stream — ' +
          'made of recent, accumulated contact, and therefore liable to evaporate. Two different ' +
          'architectures for storing the same thing.',
        'The blind spot lives exactly there. You do not feel the silence passing, so it does not ' +
          'occur to you that at the other end it is being added up. The person is not thinking ' +
          'you hate them; they are experiencing, month after month, a gradual withdrawal — and ' +
          'gradual withdrawal is indistinguishable from loss of interest to anyone standing ' +
          'outside your head. Low-upkeep friendship works only between two people who signed the ' +
          'same contract. With anyone who did not sign it, the contract has to be said out loud.',
      ],
      points: [
        'You do not miss people at the frequency they miss you — and that measures nothing about ' +
          'how much they matter.',
        'You almost never initiate; when you do, it is because a subject came up, not because ' +
          'you felt an objectless pang of missing someone.',
        'Cancelling relieves you more than going out cheers you — and you genuinely like the ' +
          'person you have just cancelled on.',
        'Loyalty does not fluctuate: whoever is in is in, and you would do disproportionate ' +
          'things for someone you have not spoken to in a year.',
      ],
    },
    {
      eyebrow: 'The fuel',
      title: 'Friendship is not built on time together — it is built on a problem together',
      paragraphs: [
        'Look at how your real friendships actually started. Almost none of them started at a ' +
          'social event. They started in a project that went wrong, a module that nearly failed ' +
          'you both, a two-in-the-morning hunt for a bug, an unbearable manager in common, ' +
          'somebody’s crisis that you decided to solve. An object in the middle — and the person ' +
          'came in alongside it.',
        'It follows from the engine. Te needs an object to operate on: give it a problem and ' +
          'your attention has somewhere to sit, the conversation has a criterion, the silences in ' +
          'between bother nobody. Without an object, all that is left is the job of generating ' +
          'interaction for its own sake, which is the one social task you genuinely cannot do. ' +
          'It is not shyness. The machine simply will not turn over in a vacuum.',
        'The practical consequence is simple and almost nobody uses it: if you want to bring ' +
          'someone closer, do not invite them for coffee — invite them to build something. Fix, ' +
          'assemble, plan, play, cook, read the same book and fight about it. And the ' +
          'uncomfortable consequence, which explains half of your losses: because the object is ' +
          'what holds the thing up, when the object ends the friendship tends to go with it. The ' +
          'job ends, the course ends, the project ships — and someone you genuinely liked ' +
          'disappears without anything at all having happened between you. Converting a colleague ' +
          'into a friend is a deliberate act. If you do not do it on purpose, it does not happen.',
      ],
    },
    {
      eyebrow: 'Small talk',
      title: 'It is not that you hate it — it is that it is expensive',
      paragraphs: [
        'You have nothing against talking about the weather. What you have is an invoice. ' +
          'Surface conversation requires producing speech in real time about a subject with no ' +
          'structure and nothing to conclude at the end — and your dominant process works by ' +
          'converging, in the vocabulary of the later type literature; the term is that ' +
          'literature’s, not Jung’s and not the manual’s. There is nowhere to converge in “how ' +
          'was your weekend”. What is left is ' +
          'simulating a person who is enjoying this. The simulation is the tiring part, not the ' +
          'conversation.',
        'Jung described introverted intuition as perception turned towards the background images ' +
          'of one’s own consciousness rather than towards what is in front of the eyes — arriving ' +
          'complete, with no chain of reasoning to justify it. He was drawing extreme portraits ' +
          'from clinical observation, with no sample, no questionnaire and no statistics; take it ' +
          'as a useful metaphor, not as a finding. But if the description holds, it explains why ' +
          'surface talk is not laziness on your part: there is nothing there for the process to ' +
          'bite into.',
        'Now the part that usually goes missing. Small talk is not empty content: it is ' +
          '<strong>protocol</strong>. A cheap handshake announcing “I am not a threat and I have ' +
          'time for you”, which the other person uses to test whether the door is open before ' +
          'risking anything that matters. When you skip straight to the subject you are not being ' +
          'efficient — you are starting the transfer without the handshake, and half the time the ' +
          'other end drops the packet. Treat it as a toll, not a conversation: five minutes of ' +
          'nothing buys an hour of something. It is the best exchange rate available to you.',
      ],
    },
    {
      eyebrow: 'Who lasts',
      title: 'The two people who stay',
      paragraphs: [
        'The first is the one who does not take your absence personally. Usually someone with a ' +
          'life of their own too absorbing to keep count of the weeks — they went quiet too, so ' +
          'your going quiet never becomes a topic. With that person the friendship survives ' +
          'changes of city, of job and of decade, and always resumes at the exact spot where it ' +
          'stopped. You do not have to explain how you work to them. It is the only category ' +
          'where that is true.',
        'The second is the one who brings what Ni cannot manufacture on its own. You produce ' +
          'depth and direction; you do not produce external novelty, or body, or present tense. ' +
          'That person turns up with a plan that has no reason, drags you out of the house, rings ' +
          'with no agenda, notices the restaurant changed its menu, laughs at things you would ' +
          'never have considered funny. You find them faintly exhausting — and that is precisely ' +
          'the service being rendered. They are the new-data input to a system that, left alone, ' +
          'only recirculates old data.',
        'Both have one requirement, and it is a modest one: proof of life. Not presence, not ' +
          'frequency, not long conversation. An occasional signal that they still exist inside ' +
          'your head — because from the outside nobody can see your loyalty. It is invisible by ' +
          'construction.',
      ],
      points: [
        'A sign it will last: they reply after three weeks with the same ease with which you ' +
          'replied after three months.',
        'A sign it will last: you can disagree with them out loud, in plain words, without the ' +
          'bond coming under threat.',
        'A sign it will not: every silence of yours turns into a conversation about the silence.',
        'A sign it will not: the friendship exists only inside a context — the job, the course, ' +
          'the group — and neither of you has ever tried taking it out of there.',
      ],
    },
    {
      eyebrow: 'Types, carefully',
      title: 'What those friendships tend to feel like',
      paragraphs: [
        'The compatibility page already says the essential thing, and it is worth repeating here ' +
          'before any four-letter code appears: pairing codes has never been shown to predict the ' +
          'quality or the duration of a bond. One of the largest studies of personality ' +
          'similarity and satisfaction — 23,250 people, roughly eleven thousand six hundred ' +
          'married couples, in nationally representative samples from three countries — found ' +
          'similarity effects close to zero: once each partner’s own traits are accounted for, ' +
          'less than half a per cent of the variance. Who a person is weighs far more than how ' +
          'much they resemble you. It was measured in couples, not friendships, and with traits, ' +
          'not the MBTI. Even so it is ' +
          'the closest thing that exists, and it points in the opposite direction to the ' +
          'compatibility charts. The Myers & Briggs Foundation’s own ethical guidance is ' +
          'explicit: type is not for selecting people. What follows is not a ranking and not a ' +
          'prediction of fit — it is how the friendship tends to <em>feel</em> when it happens.',
        '<strong>With an ENFP and with an ENTP.</strong> The pairing most often named with the ' +
          'INTJ, for a concrete reason: they arrive with twelve ideas, you kill nine, and the ' +
          'friendship does not suffer — to them the dead idea was a draft, not a child. They ' +
          'bring movement, new people and plans that need no justification, which is exactly what ' +
          'you do not manufacture on your own. The friction appears on your side: your absences ' +
          'are long, and at the other end they are rarely read as a pause. None of this has been ' +
          'measured in anyone; it is a portrait from descriptive literature, applied to the case ' +
          'where one of the two people is you.',
        '<strong>With an INTP, or with another INTJ.</strong> Silence costs you nothing and costs ' +
          'them nothing, the conversation goes deep within ten minutes, and disagreement reads as ' +
          'respect rather than risk. The problem is specific and almost comic: neither of you ' +
          'initiates. You and someone who also hates being the first to send a message can spend ' +
          'two years liking each other enormously from a distance, each assuming it was the other ' +
          'who pulled away. Here, writing first is not conceding. It is the only thing that stops ' +
          'the friendship dying of symmetry.',
        '<strong>INFJ and ENFJ.</strong> They are the ones who say out loud the thing you were ' +
          'circling without words, and the friendship goes deep faster than is comfortable for ' +
          'you. The friction is about timing: they want to deal with the feeling at the moment it ' +
          'happens, and you need three days and a long walk to work out what you felt. Saying so ' +
          'solves nearly all of it.',
        '<strong>ISTP and ESTP.</strong> Friendship made of doing. Nobody asks how you are; you ' +
          'fix the bike, climb, cook, shoot, drive in silence — and somewhere in the afternoon ' +
          'you told them something you had told nobody. They bring you into the present without ' +
          'requiring you to talk about the present, which is the only way that works on you.',
        '<strong>With an ISFJ and with an ESFJ.</strong> They are the ones who keep the calendar ' +
          'you do not keep: they remember your birthday, ask about the test result, hold up a ' +
          'contact that without them would have dried out — which is often why you still have ' +
          'friends from fifteen years ago. The friction is ' +
          'about format: compulsory rituals, hints instead of sentences, and an expectation of ' +
          'reciprocity in the same currency. The currency can be a different one, as long as you ' +
          'say which.',
        'And the observation worth more than all of the above: the friendships you actually have ' +
          'today probably obey none of it. They obey whoever turned up at a bad moment and did ' +
          'not leave.',
      ],
    },
    {
      eyebrow: 'Two ways to lose',
      title: 'The cut without warning, and the network that dries up',
      paragraphs: [
        'There is a person who used to be your friend and is not any more, and they do not know ' +
          'why. There was a lie, a disloyalty, a cruelty towards someone weaker, a value walked ' +
          'over casually in front of you — and inside, the verdict was instant and final. Nothing ' +
          'exploded afterwards. The replies got shorter, the gaps got longer, and the bond wore ' +
          'down to nothing. You did not need anger. You only needed certainty. Fi signs that kind ' +
          'of sentence without taking the case to a jury.',
        'Sometimes the cut was right. Some things do end a friendship, and staying would have ' +
          'cost more than leaving. What is almost never right is the missing sentence — and it ' +
          'charges you in two places. On their side, someone lost a friend without receiving the ' +
          'one piece of information that would stop them doing it again to the next person. On ' +
          'your side, and this is the part that concerns you more: you never had to test your ' +
          'reading. Ni concluded, Te executed, Fi signed, and nobody in the process asked the ' +
          'other party whether the reconstruction of events held up. Two lines — “you did X, and ' +
          'that is a red line for me” — cost ten minutes of discomfort and are the only way to ' +
          'find out whether you were right. You leave that conversation with the cut confirmed or ' +
          'with a friend. Both outcomes beat the silence.',
        'The second way is worse precisely because it has no story. Nobody betrayed anybody. The ' +
          'project ended, the messages thinned out, you left one unanswered because you were in ' +
          'the middle of something and answered it in your head, you turned down the December ' +
          'invitation out of legitimate exhaustion. Months pass. And one day, in the middle of a ' +
          'bad week, you notice that the three-in-the-morning list has one name on it, and that ' +
          'this name has not written in a while either. Nothing broke. The upkeep simply stopped ' +
          '— and a network without upkeep does not sit still, it dries up. The cruelty is in the ' +
          'timing: this happens precisely during the stretches when work absorbs you most, which ' +
          'are precisely the stretches that tend to end with you needing people.',
      ],
    },
    {
      eyebrow: 'The bill the body sends',
      title: 'The loneliness is real even when the solitude was chosen',
      paragraphs: [
        'You have said the sentence, and you may believe it: “I don’t need people.” Half of it ' +
          'is true — you need far less contact than average, you tolerate long stretches of ' +
          'isolation without suffering, and you work better alone than almost anyone. The other ' +
          'half is a claim the body does not accept, and it is worth knowing what evidence there ' +
          'is before deciding what to do about it.',
        'In 1995, Baumeister and Leary reviewed the available literature and argued that ' +
          'belonging is not a temperament preference but a fundamental human motivation: they set ' +
          'out criteria for what would make a need a need — appearing across all cultures, ' +
          'organising cognition and emotion, producing consequences when thwarted — and argued ' +
          'that attachment meets them. It is a review and an argument, not an experiment; it is ' +
          'also one of the most cited papers in social psychology. What it supports is modest and ' +
          'uncomfortable: preferring few people is not the same as not needing people.',
        'In 2010, Holt-Lunstad, Smith and Layton pooled 148 follow-up studies — 308,849 people, a ' +
          'mean follow-up of seven and a half years — and found an association between stronger ' +
          'social relationships and a greater likelihood of survival across the period observed: ' +
          'fifty per cent greater, with a narrow confidence interval. The authors themselves ' +
          'compare the magnitude to that of quitting smoking, and place it above obesity and ' +
          'physical inactivity. Two caveats, ' +
          'which the literature itself makes and which you would make in three seconds: it is ' +
          'association, not demonstrated cause, and the direction is unsettled, because people ' +
          'who fall ill also lose contacts. None of that licenses prescribing a dose. It only ' +
          'licenses no longer treating a social network as decoration.',
        'And the register this has to be read in: it is not here to tell you that you should get ' +
          'out more. It is here to say something more specific and more useful — the loneliness ' +
          'that hurts you, on the nights when it hurts, is not weakness and not a contradiction ' +
          'with your type. You can have chosen the isolation entirely on purpose and still miss ' +
          'people. Both fit inside the same person, and the second does not invalidate the first. ' +
          'What does not work is using “I’m an introvert” as an answer to a symptom.',
      ],
    },
    {
      eyebrow: 'The fix',
      title: 'Scheduled contact — it works because it is a system, not an impulse',
      paragraphs: [
        'The standard advice is “message people when you feel like it”, and it does not work on ' +
          'you. It is worth understanding why rather than blaming yourself: the impulse does not ' +
          'arrive. Missing someone, in your case, is rarely an alarm that goes off — it is a ' +
          'realisation that shows up late, usually with the problem already formed, along the ' +
          'lines of “hang on, how long has it been?”. A system that depends on a signal your ' +
          'hardware does not emit is broken by design.',
        'The fix is to put friendship where you put every other important thing you do not feel ' +
          'like doing: in the calendar. Names written down, a recurring reminder, the message ' +
          'sent when the reminder fires — not when the feeling turns up. It is the only method ' +
          'that respects the architecture you have instead of demanding one you do not. And it is ' +
          'probably the highest-return adjustment on this entire page.',
        'You will find this cold, and so will whoever you tell about it. The objection deserves a ' +
          'precise answer: the extravert friend who remembers your birthday unaided and the ' +
          'reminder you configured deliver exactly the same thing at the other end — proof that ' +
          'the person exists inside your head. The only difference is which part of you did the ' +
          'work. <strong>You are not less of a friend for using Te to execute what Fi already ' +
          'decided.</strong> It is what you do with the rest of your life, and it works.',
      ],
      points: [
        'Five to eight names, written down. The list is short on purpose: it is not a social ' +
          'diary, it is a retention system.',
        'One recurring reminder per name — monthly for the central ones, quarterly for the rest. ' +
          'Recalibrate after a year of real data.',
        'The message does not need a subject. A link, a memory, “saw this and thought of you”. ' +
          'What you are delivering is proof of life, not content.',
        'One meeting in person per quarter, with an object: fix, assemble, walk, cook, play. ' +
          'Coffee with no agenda is the format you are worst at.',
        'When someone who matters goes quiet, be the one who writes — once, without reproach. If ' +
          'they do not come back, you did your part, and knowing that is worth more than being ' +
          'right.',
      ],
    },
  ],

  closing: {
    title: 'Few, and alive',
    text:
      'Nobody here is going to ask you to become someone else. The friendship that works on you ' +
      'really is this one: few, long, quiet, with no visible upkeep, carrying a loyalty most ' +
      'people will never receive from anyone in their whole lives. The only adjustment this text ' +
      'asks for is tiny next to that — <strong>keep the list alive</strong>. A signal now and ' +
      'then, so that the day you need someone is not the day you find out you had stopped ' +
      'existing inside other people’s heads. You are very good at building systems for what ' +
      'matters. Build one for the four people who matter.',
  },
};
