import { DEEP_SO_EN, DEEP_SP_EN, DEEP_SX_EN } from './deep/instincts';
import { FOCUS_SUBTIPOS_EN } from './deep/focus';
import type { InstinctsContent } from '../types';

export const SUBTIPOS_EN: InstinctsContent = {
  focus: FOCUS_SUBTIPOS_EN,
  meta: {
    title: 'Instinctual subtypes — the 27 subtypes applied to the INTJ',
    description:
      'Ichazo’s three instincts, crossed by Naranjo with the nine enneatypes: how ' +
      'self-preservation, social and one-to-one change how an INTJ looks without changing the ' +
      'type.',
  },

  sources: ['naranjo-1994', 'chestnut-2013', 'fauvre-instincts', 'riso-hudson-1999', 'hook-2021'],

  header: {
    eyebrow: 'Beyond MBTI — Instinctual subtypes',
    title: 'Three instincts,\ntwenty-seven variations',
    lede:
      'Two INTJs of the same enneatype can look like natural enemies. The difference is ' +
      'usually here: which of the three instincts commands the attention. The instinct does ' +
      'not decide what moves you — it decides <em>where</em> that motive gets spent, on the ' +
      'fortress, on the group, or on one person. It is the variable that changes the ' +
      'appearance of the type most while changing nothing of what it is inside.',
  },

  intro:
    'The three instincts are Oscar Ichazo’s; it was Claudio Naranjo who crossed them with the ' +
    'nine enneatypes and arrived at the 27 subtypes described here — Katherine Fauvre later ' +
    'worked on the order of dominance between them. Nobody <em>is</em> an instinct: all three ' +
    'are always present, and what varies is the order. The first consumes your attention, the ' +
    'second works reasonably well, and the third is the one you neglect without ever noticing ' +
    'that you are neglecting it. The names in quotation marks follow Beatrice Chestnut’s ' +
    'terminology, which also marks, in each enneatype, the <strong>countertype</strong>: the ' +
    'subtype that runs against its own type’s passion and is therefore mistaken for a ' +
    'different type its whole life. The grid runs through all nine enneatypes, not only those ' +
    'that turn up most often among INTJs — an uncommon subtype inside an uncommon type is ' +
    'still somebody.',

  caveat:
    'School description, not laboratory finding. The instincts come out of the enneagram’s ' +
    'oral tradition and have never been validated empirically: the systematic review of the ' +
    'literature finds very little controlled research on the enneagram at all, and none that ' +
    'supports the subtypes as real categories. Nothing here has been measured. Read it as ' +
    'useful vocabulary for describing yourself, not as a diagnosis of anything.',

  labels: {
    asIntj: 'In the INTJ',
    stress: 'Under pressure',
    grow: 'The work',
    withType: 'The 27 subtypes · each instinct crossed with each enneatype',
  },

  instincts: {
    sp: {
      deep: DEEP_SP_EN,
      code: 'SP',
      name: 'Self-preservation',
      text: 'Body, resources, territory, and the margin that keeps you out of dependence.',
      asIntj: [
        'The self-preservation instinct watches over body, food, money, warmth, territory — ' +
          'precisely the domain <strong>inferior Se</strong> fails to report on. The crossing ' +
          'produces something strange and instantly recognisable: an INTJ who administers their ' +
          'own body by system, because they cannot feel it. A spending sheet, a fixed sleep ' +
          'window, supplements measured on a scale, a flat organised like a forward post. Te ' +
          'does the work sensation was supposed to do — and does it well, right up to the day ' +
          'exhaustion arrives without having given notice.',
        'The currency here is not only money: it is <strong>autonomy</strong>. This INTJ hoards ' +
          'time, energy and unclaimed obligations with the same avarice another person brings ' +
          'to capital, and every new commitment is priced by how much future independence it ' +
          'costs. Hence the most typical move of the subtype: turning down good opportunities ' +
          'because they would mean depending on someone for a while.',
        'The fortress works. The trouble is that it is comfortable. Built all the way to the ' +
          'end, it stops protecting a life and starts standing in for one — and Ni’s vision ' +
          'goes into storage next to the emergency fund, waiting for a safe moment that never ' +
          'gets declared.',
      ],
      stress:
        'It contracts. Cancels commitments, shrinks the world to the flat and the work, and ' +
        'relief arrives through inferior Se in the cheapest form available: food, purchases, ' +
        'whole seasons in one night.',
      grow:
        'Spend the reserve on purpose. Book the trip, take the invitation, depend on somebody ' +
        'for something small and reversible — security that is never tested is indistinguishable ' +
        'from paralysis.',
    },
    so: {
      deep: DEEP_SO_EN,
      code: 'SO',
      name: 'Social',
      text: 'Position, belonging and standing inside a group — not sociability.',
      asIntj: [
        'The social instinct has nothing to do with enjoying parties. It has to do with place: ' +
          'position, hierarchy, reputation, the weight you carry inside a group that matters. ' +
          'In an INTJ this produces a paradox that confuses everyone, the INTJ included: a ' +
          'deeply private person who nonetheless knows exactly who answers to whom, which ' +
          'alliance is rotting, and where the decision will actually be taken. Ni reads the ' +
          'group the way it reads any other system.',
        'And Te acts accordingly — takes the post, joins the board, founds the institution. Not ' +
          'from any appetite for the spotlight, but because the position is where the levers ' +
          'are. This is the subtype that builds durable things rather than one-off projects, ' +
          'and it is also the INTJ who turns up most often in formal leadership despite hating ' +
          'the social half of the job.',
        'The risk is specific and quiet: reputation starts doing the work that belonged to ' +
          '<strong>Fi</strong>. For a type whose ethics are supposed to be internal and ' +
          'non-negotiable, trading “what I hold to be right” for “how this will be read” is a ' +
          'corrosion that does not hurt while it happens. The usual symptom is contempt for the ' +
          'group — which is the shape dependence takes when it is not admitted.',
      ],
      stress:
        'Withdraws from the group and keeps score anyway: critical distance on the outside, ' +
        'continuous comparison on the inside, and a contempt that is mostly the hurt of being ' +
        'outside.',
      grow:
        'Contribute without counting. Do something for the group whose return is impossible to ' +
        'measure — it is the only way to find out whether the position matters in itself or ' +
        'only for what it pays.',
    },
    sx: {
      deep: DEEP_SX_EN,
      code: 'SX',
      name: 'One-to-one (sexual)',
      text: 'Intensity, attraction and merger with a single object — not possession.',
      asIntj: [
        'The sexual instinct — “one-to-one” is the less misleading name — is the instinct of ' +
          'intensity and merger: the force that pulls towards a single object, one person, one ' +
          'body of work, one idea, and wants to be transformed by it. It is not possession and ' +
          'it is not jealousy. That is worth spelling out, because the confusion is common: the ' +
          'passion of enneatype 4 is <strong>envy</strong> — the lack, the comparison with what ' +
          'someone else has — and not jealousy; and the sx instinct describes the voltage of a ' +
          'bond, never a claim over it.',
        'In an INTJ, this instinct meets a mind that was already converging on its own. Ni ' +
          'distils; sx hands it a single object; the result is total absorption — months inside ' +
          'one person, one author, one problem, with everything else reduced to background ' +
          'noise. Tertiary Fi adds moral weight: the object is not interesting, it is ' +
          '<em>sacred</em>, and the bond gets handled with the seriousness other people reserve ' +
          'for a vocation.',
        'It is also the most effective way in that this type has to inferior Se — sx is the one ' +
          'instinct that drags an INTJ into the body and into the present willingly, through ' +
          'another person. And that is exactly where the danger sits: Ni builds a version of ' +
          'the other and then relates to the version. For as long as the real person does not ' +
          'contradict the image, it is the most intense thing there is. On the day they ' +
          'contradict it, the drop is vertical.',
      ],
      stress:
        'It fixates. Replays the whole conversation in your head, hunts for meaning in every ' +
        'detail, and everything lukewarm — people, work, corridor talk — becomes unbearable.',
      grow:
        'Let the real person disprove the image, and stay once the intensity comes down. What ' +
        'survives the drop in voltage was the bond; the rest was your own projection.',
    },
  },

  withType: {
    '1': {
      sp:
        '“Worry”. The standard becomes a domestic project: routine, diet and finances audited ' +
        'by Te, with anger converted into anxiety about your own body — precisely the system ' +
        'inferior Se never reports on in time.',
      so:
        '“Non-Adaptability”. You do not correct people: you embody the criterion and let it ' +
        'judge on ' +
        'your behalf — Ni turns being right into doctrine, and your silence weighs more in the ' +
        'room than any reprimand.',
      sx:
        '“Zeal”, the countertype. Anger leaves the cage and picks a person or a cause: this is ' +
        'the INTJ 1 closest to preaching, converting Ni’s vision into a demand on whoever is ' +
        'standing next to you.',
    },
    '2': {
      sp:
        '“Privilege”, the countertype. Helps less and expects more: this INTJ performs the ' +
        'invisible favour and then invoices in silence, because tertiary Fi cannot ask for ' +
        'anything out loud.',
      so:
        '“Ambition”. Becomes indispensable to whoever decides — adviser, counsel, the ' +
        'intelligence behind the throne. Te renders genuinely competent service, and the price ' +
        'is a recognition nobody ever promised.',
      sx:
        '“Seduction”. The whole force goes to one person: Ni studies somebody until it knows ' +
        'what they need before they do, and generosity becomes indistinguishable from control.',
    },
    '3': {
      sp:
        '“Security”, the countertype — the vanity of having no vanity. Works in silence and ' +
        'despises self-promotion, but measures its worth by self-sufficiency, which is the same ' +
        'shop window turned inwards.',
      so:
        '“Prestige”. The achievement has to be seen: Ni picks the right stage years in advance, ' +
        'Te delivers, and the INTJ finds out late that the career was optimised for the ' +
        'audience rather than for themselves.',
      sx:
        '“Charisma”. Wants to be irresistible to a very small number of people — a private ' +
        'performance instead of a public CV, with Fi lending the other person exactly the image ' +
        'they want to see.',
    },
    '4': {
      sp:
        '“Tenacity”, the countertype. No drama: endures in silence, converts the lack into ' +
        'discipline, and lets envy show only as an impossible standard applied to its own work.',
      so:
        '“Shame”. The comparison is public even when nobody is watching: measures itself against ' +
        'the group, always finds the deficit, and uses the difference as an identity — an ' +
        'introvert who still needs witnesses.',
      sx:
        '“Competition”. Envy turns outward and becomes a demand: confronts, competes and cuts ' +
        'off whoever diminishes it — and note that the 4’s passion is envy, lack, comparison, ' +
        'and never jealousy.',
    },
    '5': {
      sp:
        '“Castle”. The boundary is physical: a house, a schedule and a reserve nobody crosses. ' +
        'Shrinks its own needs until independence is cheap — and mistakes the fortress for a ' +
        'life.',
      so:
        '“Totem”. Knowledge becomes the bond: belongs to a field rather than to a group. Masters ' +
        'the vocabulary, cites the right sources, and converses with dead authors more easily ' +
        'than with living colleagues.',
      sx:
        '“Confidence”, the countertype — the confidant. Looks for one person to tell everything ' +
        'to: the most romantic 5, the one who spends on a single bond the energy the other two ' +
        'subtypes spend a lifetime saving.',
    },
    '6': {
      sp:
        '“Warmth”. Buys safety with alliance: very few friends, tested over years, and a ' +
        'discreet cordiality that contradicts the coldness the type usually projects.',
      so:
        '“Duty”. Doubt is resolved by system: adopts a method, a school or an institution and ' +
        'becomes its strictest guardian — obedience to a criterion, never to a person.',
      sx:
        '“Strength”, the countertype. Counterphobic: goes at the fear instead of retreating, ' +
        'provokes the authority it fears, and is read as an 8 by everyone — including by itself.',
    },
    '7': {
      sp:
        '“Keepers of the castle”. Assembles a network of allies and of options: never one plan, ' +
        'never one exit — and Ni, which ought to be converging, ends up employed drawing escape ' +
        'routes.',
      so:
        '“Sacrifice”, the countertype. Postpones its own appetite to serve an ideal and looks ' +
        'like a solemn 1; the gluttony resurfaces as far too many projects accepted in the name ' +
        'of the cause.',
      sx:
        '“Suggestibility”. Anything new looks better: idealises the next idea, the next person ' +
        'and ' +
        'the next country — and Ni’s convergence restarts from zero before it has finished once.',
    },
    '8': {
      sp:
        '“Satisfaction”. Concrete power and little talk: secures resources, territory and ' +
        'material independence before any speech, negotiates like someone who cannot afford to ' +
        'lose, and rarely explains why.',
      so:
        '“Solidarity”, the countertype. Force becomes the protection of others: picks an ' +
        'injustice, builds the structure that undoes it with Te, and is the closest thing to a ' +
        'social leader this type produces.',
      sx:
        '“Possession”. Intensity aimed at one person and rebellion as a signature: takes over ' +
        'the whole room without raising its voice, and demands of the bond the same total ' +
        'loyalty it offers.',
    },
    '9': {
      sp:
        '“Appetite”. Comfort replaces the search — routine, food, habit. It is the one subtype ' +
        'where inferior Se shows up as lukewarm excess rather than collapse, with Ni’s vision ' +
        'postponed indefinitely.',
      so:
        '“Participation”, the countertype. Belongs by working: takes on the task nobody wants, ' +
        'becomes essential to the team, and vanishes from its own diary — Te in the service of ' +
        'other people’s priorities.',
      sx:
        '“Fusion”. Exists through somebody: merges with a person or a cause and ' +
        'lives at an intensity that only ever appears on loan, because its own project is still ' +
        'blank.',
    },
  },
};
