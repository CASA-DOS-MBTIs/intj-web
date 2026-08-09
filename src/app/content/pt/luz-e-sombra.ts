import type { SourceId } from '../sources';
import type { LuzESombraContent } from '../types';

export const LUZ_E_SOMBRA_PT: LuzESombraContent = {
  meta: {
    title: 'Luz & sombra — Forças, falhas e desmoronamentos do INTJ',
    description:
      'As forças e as sombras do INTJ lado a lado, com antídotos, os dois modos de falha ' +
      '— loop Ni–Fi e grip de Se — e o esgotamento silencioso.',
  },

  sources: [
    'jung-1921',
    'von-franz-1971',
    'myers-1980-gifts',
    'myers-1998-manual',
    'quenk-1993-beside',
    'quenk-2002-grip',
    'mbf-basics',
    'mbf-type-dynamics',
    'beck-1985-hopelessness',
    'maslach-2001-burnout',
    'bianchi-2015',
    'cuijpers-2020',
    'lieberman-2007',
    'pittenger-2005',
    'reynierse-2009',
    'who-2019-icd11-burnout',
    'who-2022-icd11-6b66',
    'apa-2022-dsm5tr',
    'who-2023-media',
    'cvv-2026',
    'ms-brasil-suicidio',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 02 — Luz & sombra',
    title: 'Forças, falhas\ne desmoronamentos',
    lede:
      'As forças e as fraquezas do INTJ não são listas separadas: são o mesmo traço em doses ' +
      'diferentes. A independência que te salva é a mesma que te isola. Esta página trata dos ' +
      'dois lados com honestidade — e do que fazer quando o sistema entra em colapso.',
  },

  strengths: {
    eyebrow: 'Luz — o que costuma sair sem esforço',
    items: [
      {
        n: '01',
        title: 'Visão estratégica',
        text:
          'Você enxerga a consequência de terceira ordem enquanto os outros discutem a ' +
          'primeira. Em decisões de longo prazo, isso é quase um superpoder.',
      },
      {
        n: '02',
        title: 'Independência real',
        text:
          'Você não precisa de plateia para agir corretamente. Pressão social move pouco quem ' +
          'já checou o raciocínio por conta própria.',
      },
      {
        n: '03',
        title: 'Aprendizado autodidata',
        text:
          'Você absorve a estrutura de um assunto novo em semanas, porque procura o esqueleto ' +
          'antes da decoração.',
      },
      {
        n: '04',
        title: 'Calma em crise',
        text:
          'Quando tudo desanda, o pânico dos outros aumenta e o seu diminui. Você já tinha ' +
          'imaginado esse cenário — inclusive o plano B.',
      },
      {
        n: '05',
        title: 'Integridade dura',
        text:
          'Fi dá linhas vermelhas claras. Você é o tipo de pessoa que perde vantagem para não ' +
          'trair um princípio — e dorme bem depois.',
      },
      {
        n: '06',
        title: 'Melhora contínua',
        text:
          'Crítica técnica não te ofende: se o argumento for melhor que o seu, você troca de ' +
          'posição sem perder o sono e sem precisar de tempo para digerir. O orgulho está no ' +
          'resultado, não na autoria da ideia. O que te derruba é crítica ao caráter — e essa ' +
          'você guarda por anos.',
      },
    ],
  },

  weaknesses: {
    eyebrow: 'Sombra — e o antídoto de cada uma',
    antidoteLabel: 'Antídoto',
    items: [
      {
        title: 'Arrogância involuntária',
        text:
          'Ter razão com frequência cria o hábito de assumir que você a tem. O tom vira ' +
          'sentença antes da conversa começar.',
        antidote:
          'Trocar afirmação por pergunta uma vez por conversa. “O que estou deixando de ver ' +
          'aqui?” custa nada e muda tudo.',
      },
      {
        title: 'Frieza percebida',
        text:
          'Você resolve o problema de quem te procura, quando a pessoa queria ser ouvida. O ' +
          'cuidado existe, mas chega em formato errado.',
        antidote:
          'Perguntar antes de agir: “você quer conselho ou companhia?” — e respeitar a resposta.',
      },
      {
        title: 'Perfeccionismo paralisante',
        text:
          'Se não pode ser feito de forma impecável, é adiado indefinidamente. Projetos morrem ' +
          'completos na sua cabeça e inexistentes no mundo.',
        antidote:
          'Definir de antemão o nível “suficiente” e entregar nele. Versão pública imperfeita ' +
          'ensina mais que rascunho perfeito.',
      },
      {
        title: 'Isolamento confortável',
        text:
          'A solidão é genuinamente agradável — até virar padrão. Meses passam e a rede de ' +
          'apoio secou sem aviso.',
        antidote:
          'Contato agendado, não espontâneo. Duas pessoas, um horário fixo por mês — sistema ' +
          'funciona melhor que impulso social.',
      },
      {
        title: 'Desprezo por regras',
        text:
          'Se a norma parece ineficiente, você a ignora — mesmo quando o custo político de ' +
          'ignorá-la é maior que o ganho.',
        antidote:
          'Tratar política organizacional como parte do sistema, não como ruído. Quem entende ' +
          'a regra consegue mudá-la.',
      },
      {
        title: 'Negligência com o corpo',
        text:
          'Sono, comida e movimento entram como variáveis descartáveis do plano. Se inferior ' +
          'cobra a conta com juros.',
        antidote:
          'Colocar o corpo dentro do sistema em vez de fora dele: se está na agenda, você cumpre.',
      },
    ],
  },

  failure: {
    eyebrow: 'Os dois modos de falha',
    title: 'Loop Ni–Fi e grip de Se',
    signsLabel: 'Sinais',
    exitLabel: 'Saída',
    modes: [
      {
        kicker: 'MODO 1 · LOOP Ni–Fi',
        title: 'A câmara de eco interna',
        text:
          'O “loop” é vocabulário de comunidade — não está em Jung, nem em Myers, nem no ' +
          'manual do MBTI —, mas descreve algo que muita gente reconhece de imediato: acontece ' +
          'quando você pula o Te e passa a alternar apenas entre intuição e sentimento. Sem ' +
          'contato com dados externos, a mente vira um tribunal fechado onde você é juiz, réu ' +
          'e única testemunha.',
        signs: [
          'Ruminar conversas antigas buscando intenções ocultas',
          'Certeza crescente de que ninguém entende você de verdade',
          'Autoanálise infinita que nunca gera ação',
          'Cortar pessoas mentalmente antes de qualquer conversa real',
        ],
        exit:
          'Reativar Te com algo objetivo e externo: terminar uma tarefa mensurável, buscar ' +
          'dados reais, pedir a versão da outra pessoa. O loop quebra com informação de fora, ' +
          'não com mais pensamento.',
      },
      {
        kicker: 'MODO 2 · GRIP DE Se',
        title: 'A queda no concreto',
        text:
          'Sob estresse prolongado, a função inferior assume o comando de forma tosca — foi ' +
          'Naomi Quenk quem documentou isso tipo a tipo, e é a única peça desta mecânica com ' +
          'literatura própria. O INTJ visionário e contido vira alguém impulsivo, sensorial e ' +
          'estranho até para si mesmo.',
        signs: [
          'Excessos súbitos: comida, compras, maratonas, treino compulsivo',
          'Obsessão por detalhes irrelevantes e limpeza extrema',
          'Irritação com estímulos físicos: som, luz, toque',
          'Sensação de estar operando fora do próprio corpo',
        ],
        exit:
          'Reduzir carga antes de tentar entender. Dormir, comer, caminhar, silenciar ' +
          'notificações. Quando é esgotamento, isso basta e resolve em dias. Quando não passa ' +
          'com descanso — sobretudo a sensação de estar fora do próprio corpo, ou os excessos ' +
          'que você tenta interromper e não consegue — deixou de ser assunto de tipologia. Aí ' +
          'não é análise que falta: é consulta.',
      },
    ],
  },

  burnout: {
    eyebrow: 'Saúde mental',
    title: 'O esgotamento do INTJ é silencioso — e por isso chega longe',
    paragraphs: [
      'Você aguenta muito. É elogio e é problema: como a autoexigência é interna e o desabafo ' +
        'é raro, ninguém percebe a sobrecarga — inclusive você. Exaustão, cinismo e a sensação ' +
        'de que nada importa o suficiente para valer o esforço são a definição de burnout para ' +
        'qualquer pessoa, com ou sem sigla. O que o tipo muda não é o sintoma: é a chance de ' +
        'você chamar isso de preguiça e continuar mais seis meses.',
      'O sinal que você nota primeiro é a perda da visão de futuro. Quando o Ni se cala — ' +
        'quando você não consegue mais imaginar nada adiante — não é falta de disciplina nem ' +
        'de propósito. Às vezes é exaustão, e cede com descanso. Às vezes é desesperança, que ' +
        'é sintoma clínico, não cede a plano nenhum, e é o preditor prospectivo de risco mais ' +
        'confiável que a psiquiatria tem. Você não é a melhor pessoa para distinguir os dois ' +
        'de dentro, e não convém tentar por muito tempo. Nesses períodos, planejar mais é o ' +
        'pior remédio possível.',
    ],
    warningsTitle: 'Sinais de alerta',
    warnings: [
      'Futuro em branco: nenhum plano parece interessante',
      'Cinismo novo com pessoas que você respeitava',
      'Sono ruim com mente acelerada às 3h',
      'Irritação desproporcional com pedidos pequenos',
      'Produzir menos e cobrar-se mais',
    ],
    helpsTitle: 'O que costuma ajudar',
    helps: [
      'Reduzir escopo em voz alta, com alguém de testemunha',
      'Movimento diário simples, sem meta de performance',
      'Escrever o que sente, não o que precisa resolver',
      'Uma pessoa de confiança informada do seu estado real',
      'Trabalho manual: cozinhar, consertar, jardinar',
    ],
    directTitle: 'Um recado direto',
    direct:
      'Pedir ajuda não é falha de sistema. Se você trata terapia como último recurso, olhe o ' +
      'custo do adiamento em vez do argumento: o que ela treina — nomear o que se sente antes ' +
      'de o corpo cobrar — é justamente a habilidade que este site descreve como a sua menos ' +
      'exercitada. Não é conserto de emergência; é a parte do sistema que você nunca instalou. ' +
      'Se a apatia dura semanas, procure um profissional de saúde mental — psicólogo ou ' +
      'psiquiatra, e sim, isso inclui a rede pública. Se você está pensando em se matar, não é ' +
      'assunto para a próxima semana: no Brasil o CVV atende de graça no 188, por telefone, 24 ' +
      'horas por dia, todos os dias — o chat em cvv.org.br também é gratuito, mas tem horário ' +
      'reduzido; emergência é 192. Fora do Brasil, findahelpline.com lista os serviços ' +
      'verificados de cada país. Ligar é execução competente do plano, não desistência dele.',
  },

  next: {
    label: 'Próxima página',
    title: 'Trabalho: carreira, ambiente e liderança',
    index: '03 →',
    key: 'trabalho',
  },
};
