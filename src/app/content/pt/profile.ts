import type { ProfileContent } from '../types';

export const PROFILE_PT: ProfileContent = {
  title: 'Qual INTJ é você',

  intro:
    'Um INTJ 5w4 autopreservador e um INTJ 3w4 social rodam a mesma pilha cognitiva e levam ' +
    'vidas quase irreconhecíveis uma para a outra. A lente existe para isso: você diz ao site ' +
    'qual INTJ você é e as páginas passam a mostrar a versão do texto escrita para essa ' +
    'variação. Nada disto é medido — a identidade A/T é uma dimensão da NERIS, o eneatipo e a ' +
    'asa vêm de Riso e Hudson, o tritipo é o modelo proprietário de Katherine Fauvre e os ' +
    'temperamentos são vocabulário anterior à psicologia. Escolher uma variação afina a ' +
    'leitura; não diagnostica coisa alguma, e deixar tudo em branco continua funcionando.',

  openLabel: 'Ajustar o meu perfil',
  closeLabel: 'Fechar',
  clearLabel: 'Limpar tudo',
  unsetLabel: 'sem definir',
  applyLabel: 'Aplicar ao meu perfil',

  emptyHint:
    'Aqui entraria o texto da sua variação. Escolha um perfil para vê-lo — ou siga em frente: ' +
    'a página inteira funciona sem nada preenchido.',

  identity: {
    title: 'Identidade (A/T)',
    hint:
      'Se você nunca respondeu ao teste da NERIS, decida pelo que acontece depois de uma ' +
      'decisão: seguir adiante é A, revisar por três dias é T — e não escolher também é ' +
      'legítimo.',
    options: {
      A: 'INTJ-A — assertivo',
      T: 'INTJ-T — turbulento',
    },
  },

  wing: {
    title: 'Eneatipo e asa',
    hint:
      'Escolha pelo medo, não pela virtude: o eneatipo certo é o que constrange ao ser lido. Se ' +
      'nenhum constranger, deixe em branco e leia os nove.',
    options: {
      '1w9': '1w9 — o idealista sereno',
      '1w2': '1w2 — o reformador militante',
      '2w1': '2w1 — o cuidador leal',
      '2w3': '2w3 — o anfitrião estratégico',
      '3w2': '3w2 — o realizador encantador',
      '3w4': '3w4 — o realizador exigente',
      '4w3': '4w3 — o singular competitivo',
      '4w5': '4w5 — o visionário melancólico',
      '5w4': '5w4 — o investigador excêntrico',
      '5w6': '5w6 — o analista cauteloso',
      '6w5': '6w5 — o cético leal',
      '6w7': '6w7 — o aliado inquieto',
      '7w6': '7w6 — o entusiasta ansioso',
      '7w8': '7w8 — o realista voraz',
      '8w7': '8w7 — o comandante frontal',
      '8w9': '8w9 — o estrategista de aço',
      '9w8': '9w8 — o árbitro inabalável',
      '9w1': '9w1 — o sonhador íntegro',
    },
  },

  tritype: {
    title: 'Tritipo',
    hint:
      'Não saber o próprio tritipo é o caso normal — e o modelo é de uma única autora, sem base ' +
      'independente. Pule sem culpa, ou escolha o trio que mais parece o seu jeito de resolver ' +
      'um problema difícil.',
    options: {
      '125': '125 — o mentor',
      '126': '126 — o apoiador',
      '127': '127 — o professor',
      '135': '135 — o especialista técnico',
      '136': '136 — o supervisor',
      '137': '137 — o construtor de sistemas',
      '145': '145 — o pesquisador',
      '146': '146 — o filósofo',
      '147': '147 — o visionário',
      '258': '258 — o estrategista',
      '268': '268 — o resgatador',
      '278': '278 — o espírito livre',
      '358': '358 — o solucionador',
      '368': '368 — o lutador por justiça',
      '378': '378 — o agitador',
      '458': '458 — o erudito',
      '468': '468 — o revelador da verdade',
      '478': '478 — o mensageiro',
      '259': '259 — o resolvedor de problemas',
      '269': '269 — o bom samaritano',
      '279': '279 — o pacificador',
      '359': '359 — o embaixador',
      '369': '369 — o mediador',
      '379': '379 — o diplomata',
      '459': '459 — o contemplativo',
      '469': '469 — o buscador',
      '479': '479 — o espírito gentil',
    },
  },

  instinct: {
    title: 'Instinto dominante',
    hint:
      'Repare para onde a sua atenção corre quando a vida aperta — recursos e rotina (sp), ' +
      'posição dentro do grupo (so) ou uma pessoa só (sx). Hesitar entre dois é comum; escolha ' +
      'o que aparece primeiro, ou nenhum.',
    options: {
      sp: 'SP — autopreservação',
      so: 'SO — social',
      sx: 'SX — um-a-um',
    },
  },

  temperament: {
    title: 'Temperamento',
    hint:
      'Dominante primeiro, secundário depois — e se as quatro palavras não disserem nada a você, ' +
      'pule: são vocabulário de dois mil anos atrás, úteis para descrever ritmo, inúteis como ' +
      'medida.',
    options: {
      'melancholic-choleric': 'Melancólico–colérico',
      'melancholic-phlegmatic': 'Melancólico–fleumático',
      'melancholic-sanguine': 'Melancólico–sanguíneo',
      'choleric-melancholic': 'Colérico–melancólico',
      'choleric-phlegmatic': 'Colérico–fleumático',
      'choleric-sanguine': 'Colérico–sanguíneo',
      'phlegmatic-melancholic': 'Fleumático–melancólico',
      'phlegmatic-choleric': 'Fleumático–colérico',
      'phlegmatic-sanguine': 'Fleumático–sanguíneo',
      'sanguine-melancholic': 'Sanguíneo–melancólico',
      'sanguine-choleric': 'Sanguíneo–colérico',
      'sanguine-phlegmatic': 'Sanguíneo–fleumático',
    },
  },
};
