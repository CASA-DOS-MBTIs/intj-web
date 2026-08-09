import type { ModelPageContent } from '../types';

export const SOCIONICS_PT: ModelPageContent = {
  meta: {
    title: 'Socionics — o INTJ é ILI, não LII',
    description:
      'Augustinavičiūtė, metabolismo informacional, Model A e relações intertipo: por que a ' +
      'conversão correta do INTJ é ILI (Ni–Te), de onde vem o erro do LII e por que nem a ' +
      'conversão certa é uma equivalência.',
  },

  sources: [
    'augustinaviciute-1998',
    'wikisocion-ili',
    'wikipedia-socionics',
    'jung-1921',
    'myers-1998-manual',
  ],

  header: {
    eyebrow: 'Além do MBTI — Socionics',
    title: 'Socionics: o INTJ é ILI,\nnão LII',
    lede:
      'Um sistema construído em Vilnius nos anos 1970 a partir de Jung e de um psiquiatra ' +
      'polonês, com dezesseis tipos, oito posições dentro de cada tipo e um catálogo fechado de ' +
      'relações entre eles. Quase tudo que circula em português sobre a correspondência do INTJ ' +
      'aqui está errado no mesmo ponto — e o erro cabe inteiro numa letra.',
  },

  intro:
    'Socionics é o que acontece quando alguém lê <em>Tipos Psicológicos</em> sem passar por ' +
    'Myers. Chegou a dezesseis tipos por um caminho completamente diferente do americano: mais ' +
    'formal, mais rígido, e muito mais interessado no que acontece <em>entre</em> dois tipos do ' +
    'que dentro de um. A correspondência do INTJ nesse sistema é <strong>ILI</strong> — Ni ' +
    'liderando, Te criativo. Não LII, que é Ti–Ne e corresponde ao INTP.',

  caveat:
    'O socionics não tem reconhecimento na psicologia acadêmica: nenhuma validação por revisão ' +
    'de pares, nenhuma amostra publicada, presença quase nula na literatura internacional. E a ' +
    'conversão INTJ → ILI é uma convenção de tradução entre dois mapas que definem seus ' +
    'elementos de maneiras diferentes — não uma identidade. Leia esta página como vocabulário ' +
    'alternativo, nunca como confirmação.',

  sections: [
    {
      eyebrow: 'Origem · Vilnius, anos 1970',
      title: 'Uma economista, Jung e o metabolismo informacional',
      paragraphs: [
        'Aušra Augustinavičiūtė (1927–2005) era economista e socióloga, e dirigia a faculdade de ' +
          'ciências da família no Instituto Pedagógico de Vilnius quando cruzou duas leituras: os ' +
          '<em>Tipos Psicológicos</em> de Jung e a noção de metabolismo informacional do ' +
          'psiquiatra polonês Antoni Kępiński — a ideia de que a psique se alimenta de informação ' +
          'como o corpo se alimenta de comida, e adoece quando a dieta não corresponde ao que ela ' +
          'consegue digerir.',
        'Da fusão saiu algo que não é uma versão soviética do MBTI. As oito atitudes-função de ' +
          'Jung viraram oito <em>elementos informacionais</em>: fatias da realidade, e não hábitos ' +
          'mentais. Um tipo deixa de ser preferência e passa a ser arquitetura — uma ordem fixa de ' +
          'oito posições, idêntica em todos os representantes do tipo, dizendo o que a pessoa ' +
          'digere bem, o que digere mal e o que não digere de jeito nenhum.',
        'O nome vem de “socion”, o conjunto dos dezesseis tipos. Desde o começo o objeto de ' +
          'estudo é o conjunto e não o indivíduo: o socionics foi construído para descrever ' +
          'relações, e a tipologia é apenas o meio. Os textos circularam datilografados por mais ' +
          'de uma década antes de existir edição impressa — o volume hoje citado como fundação é ' +
          'de 1998, escrito entre os anos 1970 e 1980.',
      ],
    },
    {
      eyebrow: 'Os oito elementos',
      title: 'Nem toda “Te” quer dizer a mesma coisa',
      paragraphs: [
        'O socionics usa a mesma notação de duas letras que o MBTI usa para funções, e é aí que a ' +
          'confusão começa: os símbolos coincidem, as definições não. Cada elemento tem nome ' +
          'próprio e conteúdo próprio, herdado de Jung mas reescrito para descrever um aspecto do ' +
          'mundo em vez de uma operação da mente.',
      ],
      points: [
        'Ni — “intuição do tempo”: sequência, tendência, o desfecho de um processo já em curso. É ' +
          'o elemento mais próximo do Ni de Myers, e ainda assim mais voltado ao tempo do que ao ' +
          'significado.',
        'Te — “lógica dos fatos”: eficiência, procedimento, trabalho que funciona, números que ' +
          'fecham. Bem mais concreto que o Te de Myers, que também abarca critério abstrato.',
        'Se — “sensação volitiva”: força, pressão, ocupação de espaço, vontade imposta sobre o ' +
          'ambiente. O Se de Myers não carrega essa carga de poder; aqui ela é central.',
        'Fi — “ética das relações”: a distância correta entre duas pessoas, quem está dentro e ' +
          'quem está fora. O Fi de Myers é valor pessoal; o do socionics é sempre relacional.',
        'Ti é “lógica estrutural”, Fe é “ética das emoções”, Ne é “intuição das possibilidades”, ' +
          'Si é “conforto sensorial” — os quatro que sobram para o ILI, e que voltam adiante.',
      ],
    },
    {
      eyebrow: 'A inversão j/p',
      title: 'De onde vem o erro do LII',
      paragraphs: [
        'O socionics também escreve os tipos em quatro letras, com a última minúscula: INTj, ' +
          'INTp. Parece o código do MBTI e não é. No socionics a última letra descreve a ' +
          '<strong>função dominante</strong>: se ela for racional — lógica ou ética — o tipo é j; ' +
          'se for irracional — intuição ou sensação — o tipo é p.',
        'No MBTI a regra é outra. A última letra descreve a primeira função <strong>extrovertida' +
          '</strong> da pilha: se ela julga, você é J; se ela percebe, você é P. Em extrovertidos ' +
          'as duas regras apontam para a mesma função e concordam. Em introvertidos a dominante é ' +
          'introvertida e a extrovertida é a auxiliar — então as regras apontam para funções ' +
          'diferentes e a última letra sempre se inverte.',
        'Aplique ao INTJ. A dominante é Ni, irracional: no socionics, portanto, <strong>p</strong>. ' +
          'A primeira função extrovertida é Te, que julga: no MBTI, portanto, <strong>J</strong>. ' +
          'A mesma pessoa, letras finais opostas, nenhuma contradição — só duas convenções ' +
          'diferentes lendo a mesma pilha.',
      ],
      points: [
        'INTJ (Ni–Te) → INTp → ILI, Intuitivo-Lógico Introvertido, apelidado “Balzac” — ' +
          'Augustinavičiūtė batizava os tipos com nomes históricos e literários.',
        'INTP (Ti–Ne) → INTj → LII, Lógico-Intuitivo Introvertido, “Robespierre”.',
        'Regra curta: para introvertidos, troque a última letra ao atravessar a fronteira. Para ' +
          'extrovertidos, não troque nada.',
      ],
    },
    {
      eyebrow: 'Por que o erro importa',
      title: 'LII te entrega a arquitetura do INTP',
      paragraphs: [
        'Se a troca fosse cosmética, não valeria uma seção. Mas cada tipo do socionics vem com um ' +
          'ponto cego e uma carência declarados, e os do LII são exatamente o inverso dos do ILI. ' +
          'O LII tem Se como função vulnerável e Fe como sugestiva: o texto vai dizer que o seu ' +
          'calcanhar é a força bruta e que o que você precisa receber é clima emocional caloroso.',
        'O ILI diz o contrário. A função vulnerável é <strong>Fe</strong> — o clima emocional de ' +
          'um grupo, que você não lê nem produz — e a sugestiva é <strong>Se</strong>: presença ' +
          'física, ritmo, pressão, o empurrão para o mundo concreto que você aceita de bom grado ' +
          'de outra pessoa e não consegue gerar sozinho. Que é, palavra por palavra, o que o MBTI ' +
          'já diz sobre Se inferior no INTJ.',
        'Ainda assim: acertar a conversão não a transforma em equivalência. Boa parte dos ' +
          'socionistas rejeita qualquer conversão entre sistemas, porque os elementos não são as ' +
          'funções de Myers e porque a tipagem é feita por procedimentos incomparáveis — ' +
          'questionário autoaplicado de um lado, entrevista e observação do outro. Você está ' +
          'traduzindo, não medindo duas vezes a mesma coisa.',
      ],
    },
    {
      eyebrow: 'Model A',
      title: 'Oito posições em vez de quatro',
      paragraphs: [
        'O Model A distribui os oito elementos em oito posições, agrupadas em quatro blocos ' +
          'definidos por duas perguntas: você é forte nisto e você quer isto. Ego (1–2) é forte e ' +
          'querido; Super-Ego (3–4) é fraco e não querido; Super-Id (5–6) é fraco e querido; Id ' +
          '(7–8) é forte e não querido. É esse segundo eixo — querer — que o MBTI não tem.',
      ],
      points: [
        '1 · base, Ni — a convergência de sempre: o desfecho chega inteiro, antes da justificativa.',
        '2 · criativa, Te — a ferramenta com que você opera no mundo: critério, corte, entrega.',
        '3 · papel, Si — conforto, saúde, ambiente cuidado. Você consegue sustentar por uma hora, ' +
          'malfeito, e sai exausto.',
        '4 · vulnerável, Fe — o clima emocional coletivo. Não lê, não produz, e crítica aqui entra ' +
          'como agressão pessoal.',
        '5 · sugestiva, Se — força, ritmo, presença física. Você não gera e recebe com alívio de ' +
          'quem gera.',
        '6 · mobilizadora, Fi — lealdades pessoais. Desajeitado, valorizado, e energiza você ' +
          'quando alguém aciona.',
        '7 · ignorada, Ne — você consegue abrir dez alternativas e se recusa a morar nelas.',
        '8 · demonstrativa, Ti — você monta um sistema formal impecável e não vê graça nenhuma em ' +
          'falar sobre ele.',
      ],
    },
    {
      eyebrow: 'Relações intertipo',
      title: 'O sistema foi construído para isto',
      paragraphs: [
        'Comparando dois Model A posição a posição, o socionics deriva dezesseis relações fixas — ' +
          'e é essa a parte que interessava a Augustinavičiūtė. A previsão central é a dualidade: ' +
          'o parceiro ideal é quem lidera com o que está nas suas posições 5 e 6. Para o ILI, isso ' +
          'é o <strong>SEE</strong> (Se–Fi, “Napoleão”), que entrega força e vínculo pessoal onde ' +
          'você é fraco e carente.',
        'No outro extremo, o conflitante é quem lidera com a sua função vulnerável: para o ILI, o ' +
          '<strong>ESE</strong> (Fe–Si), que vive exatamente do calor de grupo que você não ' +
          'processa. O espelho é o <strong>LIE</strong> (Te–Ni, o mesmo par invertido) e a ' +
          'atividade é o <strong>ESI</strong> (Fi–Se). Os quatro juntos formam a quadra Gama.',
        'Um detalhe que vale registrar sem fazer barulho: os elementos valorizados pela quadra ' +
          'Gama são Ni, Se, Te e Fi — letra por letra, as quatro funções da pilha do INTJ no ' +
          'MBTI. É um encontro de convenções, não uma descoberta convergente; dois sistemas ' +
          'derivados de Jung reencontrando o mesmo quarteto não provam nada um sobre o outro. Mas ' +
          'é bonito, e vale saber que é coincidência de origem comum.',
        'Nada disso foi testado. Não existe estudo controlado mostrando que casais duais duram ' +
          'mais, que pares conflitantes brigam mais, ou que a tipagem de duas pessoas ' +
          'independentes coincide. A dualidade é uma previsão que o modelo faz e que ninguém ' +
          'verificou.',
      ],
    },
    {
      eyebrow: 'O que não se sustenta',
      title: 'Onde o socionics para',
      paragraphs: [
        'A revisão por pares que existe é endógena: os periódicos foram fundados pelo próprio ' +
          'campo, e o sistema está ausente da literatura internacional. Não há amostras ' +
          'publicadas, normas, coeficientes ' +
          'de confiabilidade, nem estudo de validade preditiva. Fora do espaço pós-soviético o ' +
          'sistema é praticamente desconhecido, e onde é conhecido não é aceito como psicologia. ' +
          'A própria entrada enciclopédica corrente registra isso sem meias-palavras.',
        'Internamente, o campo é fragmentado: escolas discordam sobre o modelo estrutural, sobre ' +
          'as quinze dicotomias de Reinin, sobre a teoria de dimensionalidade das funções — ' +
          'elaborações construídas sobre elaborações, nenhuma delas ancorada em dado. E a tipagem ' +
          'é feita por entrevista e observação, sem confiabilidade entre avaliadores estabelecida: ' +
          'dois socionistas podem tipar a mesma pessoa de formas diferentes e não há árbitro.',
        'Há ainda o problema de fundação. Converter INTJ em ILI pressupõe que a pilha de Myers ' +
          'está correta, e a pilha de Myers é ela própria uma construção teórica com evidência ' +
          'fraca. Você está sobrepondo um mapa não validado a outro mapa não validado. A precisão ' +
          'da notação — oito posições, dezesseis relações, quatro quadras — não é evidência de ' +
          'nada; é só notação precisa.',
      ],
    },
  ],

  verdict: {
    title: 'O que o socionics acrescenta',
    text:
      'Resolução, e só isso — mas é uma resolução real. Onde a pilha de quatro chama de ' +
      '“inferior” tudo que está no porão, o Model A separa duas coisas que não são a mesma: o ' +
      'fraco-e-desejado (Se — presença, ritmo, força física, que você aceita de bom grado de ' +
      'quem tem) e o fraco-e-dolorido (Fe — o clima emocional de um grupo, onde qualquer crítica ' +
      'entra como ataque). O INTJ que confunde as duas passa a vida tentando desenvolver ' +
      'sociabilidade calorosa quando o que faltava era corpo, ritmo e presença. E o socionics ' +
      'arrisca uma previsão relacional que o MBTI se recusa a fazer — o que é uma virtude ' +
      'intelectual mesmo quando a previsão está errada, porque previsão errada é falseável e ' +
      'descrição vaga não é.',
    weight:
      'Baixo, e não por ser estrangeiro: por não ter sido testado. Nenhuma revisão por pares, ' +
      'nenhuma amostra, nenhuma confiabilidade entre avaliadores, nenhum estudo de dualidade. ' +
      'Use como vocabulário — a distinção entre fraco-desejado e fraco-dolorido continua útil ' +
      'mesmo que o sistema inteiro esteja errado. Nunca use como confirmação de tipo, e ' +
      'desconfie de qualquer texto que apresente ILI e INTJ como a mesma coisa dita em dois ' +
      'idiomas.',
  },
};
