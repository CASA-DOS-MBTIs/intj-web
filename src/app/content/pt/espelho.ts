import type { EspelhoContent } from '../types';
import type { SourceId } from '../sources';

export const ESPELHO_PT: EspelhoContent = {
  meta: {
    title: 'Espelho — Trinta e duas afirmações · INTJ',
    description:
      'Trinta e duas afirmações — oito por função — para medir o quanto os traços INTJ ressoam ' +
      'em você. Sem veredito, com leitura.',
  },

  sources: [
    'aera-2014-standards',
    'nunnally-bernstein-1994',
    'quenk-2002-grip',
    'mbf-basics',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 08 — Espelho',
    title: 'Trinta e duas afirmações',
    lede:
      'Este não é um teste de MBTI e não vai dizer qual é o seu tipo — nenhum questionário de ' +
      'trinta e dois itens faria isso com honestidade. O que ele mede é <em>quanto os traços ' +
      'descritos neste site ressoam em você</em>, função por função. Responda pensando no seu ' +
      'padrão habitual, não no seu dia de hoje.',
  },

  quiz: {
    notice:
      '<strong>Isto não é uma avaliação psicológica.</strong> No Brasil, avaliação psicológica ' +
      'é ato privativo de psicólogo, regulado pelo Conselho Federal de Psicologia, e usa ' +
      'instrumentos validados e aprovados para essa finalidade. Este questionário não é um ' +
      'deles: não foi validado, não mede construto nenhum com precisão conhecida, e não serve ' +
      'de base para diagnóstico, laudo, ou qualquer decisão de seleção, contratação ou ' +
      'tratamento. Se é avaliação de verdade que você procura, procure um psicólogo com CRP.',
    answeredTemplate: '{n} de {total} respondidas',
    resetLabel: 'Limpar',
    redoLabel: 'Refazer',
    lockedNote:
      'As trinta e duas estão respondidas e o questionário fechou sozinho, para não ficar te ' +
      'convidando a ajustar as notas até o resultado ficar do jeito que você queria — use ' +
      '“Refazer” se quiser reabrir e mudar alguma coisa.',
    disagreeLabel: 'Discordo',
    agreeLabel: 'Concordo',
    ratingLabel: 'Nota {n} de 5',

    groupLabels: {
      Ni: 'Ni · Intuição introvertida — a dominante',
      Te: 'Te · Pensamento extrovertido — a auxiliar',
      Fi: 'Fi · Sentimento introvertido — a terciária',
      Se: 'Se · Sensação extrovertida — a inferior',
    },

    groupHints: {
      Ni:
        'Oito afirmações sobre a conclusão que chega antes da explicação, e sobre o que ela ' +
        'exige de você para se formar.',
      Te:
        'Oito afirmações sobre o que você faz com o mundo externo quando ele está mal ' +
        'organizado — e sobre o preço disso.',
      Fi:
        'Oito afirmações sobre a régua privada: a parte do INTJ que sente muito e traduz ' +
        'pouco, e quase nunca no momento certo.',
      Se:
        'Estas oito descrevem falta, não força. Concordar muito aqui significa ponto cego ' +
        'maior — e é assim, invertida, que a barra vai ser lida no fim.',
    },

    questions: [
      {
        fn: 'Ni',
        text:
          'Eu costumo saber como uma situação vai terminar muito antes de conseguir explicar ' +
          'por quê.',
      },
      {
        fn: 'Ni',
        text:
          'Preciso de longos períodos sozinho e em silêncio para pensar direito — interrupção ' +
          'me desorganiza.',
      },
      {
        fn: 'Ni',
        text: 'Perco interesse por um projeto no momento em que ele fica claro na minha cabeça.',
      },
      {
        fn: 'Ni',
        text:
          'Reconheço o mesmo padrão se repetindo em situações que, para os outros, não têm nada ' +
          'a ver uma com a outra.',
      },
      {
        fn: 'Ni',
        text: 'Cinco anos à frente me parecem mais nítidos do que a semana que vem.',
      },
      {
        fn: 'Ni',
        text:
          'Incoerência num argumento me incomoda quase fisicamente, antes mesmo de eu localizar ' +
          'onde ela está.',
      },
      {
        fn: 'Ni',
        text: 'Chego a uma conclusão só, e não a um leque de possibilidades para escolher depois.',
      },
      {
        fn: 'Ni',
        text: 'As soluções aparecem quando eu paro de procurar — no banho, na caminhada, ao acordar.',
      },

      {
        fn: 'Te',
        text:
          'Quando vejo um processo mal desenhado, reorganizo mentalmente sem que ninguém tenha ' +
          'pedido.',
      },
      {
        fn: 'Te',
        text: 'Comunico conclusões em vez de contar todo o raciocínio — o que às vezes soa abrupto.',
      },
      {
        fn: 'Te',
        text: 'Reuniões longas e trabalho puramente cerimonial me esgotam mais que trabalho difícil.',
      },
      {
        fn: 'Te',
        text: 'Antes de começar, quero saber por qual critério vamos saber que deu certo.',
      },
      {
        fn: 'Te',
        text:
          'Aprendo sozinho com facilidade, porque a estrutura do assunto aparece antes dos ' +
          'detalhes.',
      },
      {
        fn: 'Te',
        text: 'Aponto o erro antes de pensar em como a pessoa vai receber aquilo.',
      },
      {
        fn: 'Te',
        text: 'Quando os dados mudam, eu troco de plano sem sentir que perdi alguma coisa no caminho.',
      },
      {
        fn: 'Te',
        text: 'Delegar me custa: parece mais rápido fazer eu mesmo do que explicar o padrão.',
      },

      {
        fn: 'Fi',
        text: 'Tenho valores que não negocio, mesmo quando isso custa oportunidade ou relação.',
      },
      { fn: 'Fi', text: 'Descubro o que senti horas ou dias depois do acontecimento.' },
      {
        fn: 'Fi',
        text: 'Sou profundamente leal a pouquíssimas pessoas e praticamente indiferente ao resto.',
      },
      {
        fn: 'Fi',
        text: 'Quando alguém cruza uma linha minha, eu corto em silêncio e não volto atrás.',
      },
      {
        fn: 'Fi',
        text:
          'Detesto que me perguntem como estou me sentindo, porque raramente tenho a resposta ' +
          'pronta.',
      },
      {
        fn: 'Fi',
        text:
          'Guardo para mim o que sinto, e isso me parece uma questão de privacidade, não de ' +
          'frieza.',
      },
      {
        fn: 'Fi',
        text: 'Rejeição me atinge mais do que eu admito, inclusive para mim mesmo.',
      },
      {
        fn: 'Fi',
        text: 'A aprovação dos outros quase não mexe na minha avaliação do que eu fiz.',
      },

      { fn: 'Se', text: 'Percebo fome, dor ou exaustão só quando já estão em nível alto.' },
      {
        fn: 'Se',
        text: 'Ter que improvisar sem tempo de pensar antes me deixa desconfortável.',
      },
      {
        fn: 'Se',
        text: 'Sob muito estresse, caio em excessos concretos: comida, compras, telas ou treino.',
      },
      {
        fn: 'Se',
        text:
          'Raramente estou de fato no momento presente — estou sempre um passo adiante ou atrás ' +
          'dele.',
      },
      {
        fn: 'Se',
        text: 'Não registro onde ponho as coisas, e procuro objetos que usei minutos atrás.',
      },
      {
        fn: 'Se',
        text: 'Cuidar do corpo é a primeira coisa que sai da agenda quando o trabalho aperta.',
      },
      {
        fn: 'Se',
        text: 'Barulho, multidão e luz forte me desgastam mais rápido do que às pessoas ao meu redor.',
      },
      {
        fn: 'Se',
        text:
          'Mudanças no que está bem diante de mim me escapam: um corte de cabelo, um móvel de ' +
          'lugar novo.',
      },
    ],
  },

  result: {
    eyebrow: 'Sua leitura',
    emptyLabel: 'Responda as trinta e duas afirmações para ver a leitura',
    scoreNote:
      'Estas fronteiras são borradas de propósito. Cada resposta vale menos de um ponto no ' +
      'total, mas quatro respostas movidas um ponto — a diferença normal entre um dia bom e um ' +
      'dia ruim — deslocam o total em três, o bastante para te jogar na faixa vizinha se você ' +
      'estiver perto de uma. O número aqui é um termômetro grosso, não uma nota.',
    barNote:
      'Cada barra apoia-se em oito afirmações. É melhor que três e continua sendo pouco para ' +
      'comparar uma função com a outra: uma resposta movida um ponto desloca a barra em três. ' +
      'Leia a altura relativa entre elas, não o número de cada uma.',
    bands: [
      {
        min: 82,
        band: 'retrato muito próximo',
        reading:
          'Praticamente tudo descrito aqui te descreve. Se você já se identificava como INTJ, ' +
          'este resultado apenas confirma o que você reconhece — e o mais útil agora não é a ' +
          'confirmação, é a parte inferior da pilha: Fi e Se são onde está o seu crescimento ' +
          'disponível. Cuidado com o único risco real desse grau de identificação: usar o tipo ' +
          'como explicação para tudo, inclusive para o que merecia ser mudado.',
      },
      {
        min: 64,
        band: 'forte ressonância',
        reading:
          'O padrão INTJ descreve bem o seu funcionamento, com variações claras em algumas ' +
          'áreas — o que é absolutamente normal: ninguém encarna um tipo por inteiro. As barras ' +
          'abaixo apoiam-se em oito afirmações cada uma, o que já é alguma coisa e ainda é ' +
          'pouco: uma resposta movida um ponto desloca a barra em três. Leia a mais baixa como ' +
          'pergunta a investigar, nunca como medida. Se ela te surpreendeu, o valor está no ' +
          'susto, não no número.',
      },
      {
        min: 45,
        band: 'traços presentes, não dominantes',
        reading:
          'Você reconhece parte do retrato, mas não o conjunto. Isso pode significar três ' +
          'coisas: um tipo vizinho descreve você melhor (vale ler a página de comparações, ' +
          'especialmente INTP e INFJ), você é um INTJ jovem com funções ainda em formação, ou ' +
          'é um INTJ maduro cujo Fi e Se já suavizaram bastante o padrão. Nenhuma das três é ' +
          'problema.',
      },
      {
        min: 0,
        band: 'provavelmente outro retrato',
        reading:
          'A maior parte destas afirmações não te descreve — o que é uma informação valiosa, ' +
          'não uma falha. Talvez você tenha chegado aqui por curiosidade, ou para entender ' +
          'melhor um INTJ da sua vida. Nesse caso, a página de vínculos e a de comparações vão ' +
          'te servir mais do que qualquer pontuação.',
      },
    ],
    functionNames: {
      Ni: 'Intuição introvertida',
      Te: 'Pensamento extrovertido',
      Fi: 'Sentimento introvertido',
      Se:
        'Sensação extrovertida — o ponto cego (barra cheia = ponto cego mais marcado, não Se ' +
        'forte)',
    },
    levels: {
      veryStrong: 'muito forte',
      strong: 'forte',
      moderate: 'moderado',
      weak: 'fraco',
      absent: 'quase ausente',
    },
    inverseLevels: {
      veryStrong: 'muito marcado',
      strong: 'marcado',
      moderate: 'moderado',
      weak: 'discreto',
      absent: 'quase inexistente',
    },
    footnote: {
      before:
        'Lembrete: nenhuma pontuação aqui confirma ou exclui um tipo. Se quiser levar isso a ' +
        'sério, leia a página da ',
      linkText: 'pilha cognitiva',
      after:
        ' e observe qual descrição funcional explica melhor a sua vida — reconhecimento vale ' +
        'mais que resultado numérico.',
    },
  },

  closing: {
    quote:
      '“Você passou a vida sendo chamado de difícil. Talvez você só estivesse operando num ' +
      'tempo diferente do resto da sala.”',
    ctaHome: 'Voltar ao início',
    ctaBeyond: 'Ver eneagrama e temperamentos',
  },
};
