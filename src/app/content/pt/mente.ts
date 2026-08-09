import type { MenteContent } from '../types';
import type { SourceId } from '../sources';

export const MENTE_PT: MenteContent = {
  meta: {
    title: 'INTJ — A pilha cognitiva',
    description:
      'Ni, Te, Fi e Se explicados um a um: o motor cognitivo do INTJ, o eixo Ni–Te e como ' +
      'tudo isso parece por dentro.',
  },

  sources: [
    'rebar-2015',
    'reynierse-2009',
    'jung-1921',
    'von-franz-1971',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-type-dynamics',
    'quenk-1993-beside',
    'quenk-2002-grip',
    'grant-1983',
    'thomson-1998',
    'beebe-2017',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 01 — Mente',
    title: 'A pilha cognitiva',
    lede:
      'Um tipo MBTI nasce de quatro preferências — mas a leitura que explica mais é a dinâmica, ' +
      'que traduz essas preferências numa ordem entre processos mentais. Nessa leitura, hoje a ' +
      'mais difundida, o INTJ é <strong>Ni · Te · Fi · Se</strong> — e ela organiza bem o que ' +
      'segue, ainda que sem apoio empírico próprio (Reynierse, 2009): ' +
      'por que você confia em intuições difíceis de justificar, por que organiza o mundo em ' +
      'sistemas, por que seus valores são inegociáveis, e por que o corpo é sempre o último a ' +
      'ser lembrado.',
  },

  selectorHint: 'Clique em uma função',
  meterNote:
    'A barra é ilustração da ordem, não medida: nenhum instrumento de MBTI mede a força de uma ' +
    'função — ele ordena preferências e para por aí. O que ela mostra é a consciência e o ' +
    'controle previstos pela teoria. A função inferior é fraca em domínio, nunca em impacto. As ' +
    'idades seguem o esquema de desenvolvimento de tipo de Harold Grant (1983) — hipótese sobre ' +
    'quando cada função amadurece, nunca verificada em coorte. Mapa, não calendário.',

  signsLabel: 'Como aparece no dia a dia',
  shadowLabel: 'Quando desregula',
  growLabel: 'Como fortalecer',

  functions: [
    {
      abbr: 'Ni',
      name: 'Intuição introvertida',
      pos: 'Dominante',
      age: 'desde a infância',
      strength: '96%',
      oneLine: 'A conclusão chega inteira, antes da explicação.',
      motto: 'Eu não sei como sei. Eu só sei que é para lá que isso vai.',
      desc:
        'Ni é um processo de convergência: ele pega tudo que você já viu, leu e viveu e destila ' +
        'num único fio de significado. Não trabalha com muitas possibilidades ao mesmo tempo — ' +
        'trabalha com a possibilidade que parece inevitável. É por isso que a intuição do INTJ ' +
        'vem como certeza, não como palpite.',
      desc2:
        'Como é uma função introvertida, ela roda longe dos olhos dos outros e sem linguagem. ' +
        'Você percebe o padrão muito antes de conseguir traduzi-lo — e é justamente essa ' +
        'defasagem entre saber e explicar que gera o mal-entendido de arrogância.',
      signs: [
        'Prever como uma situação vai terminar quando ela ainda está começando.',
        'Perder interesse assim que a ideia fica clara na cabeça — a execução parece redundante.',
        'Precisar de longos períodos de silêncio para o insight se formar; interrupção realmente ' +
          'dói.',
        'Sentir desconforto físico com incoerência, mesmo sem saber apontar onde está.',
      ],
      shadow:
        'Vira certeza fechada: uma única visão do futuro tratada como fato, com descarte de ' +
        'dados novos e teorias cada vez mais elaboradas sobre intenções alheias.',
      grow:
        'Escreva a previsão e a data. Volte depois e confira. Calibrar Ni contra a realidade ' +
        'transforma intuição em competência verificável.',
    },
    {
      abbr: 'Te',
      name: 'Pensamento extrovertido',
      pos: 'Auxiliar',
      age: 'adolescência e 20s',
      strength: '78%',
      oneLine: 'Transforma a visão em plano, critério e resultado.',
      motto: 'Se não pode ser medido, organizado ou entregue, ainda é só uma ideia bonita.',
      desc:
        'Te é a função que opera no mundo externo com lógica objetiva: define escopo, elimina ' +
        'redundância, monta processos, decide com base em eficácia. É a mão que constrói o que ' +
        'Ni viu — e a voz que corta uma reunião de quarenta minutos em quatro frases.',
      desc2:
        'É também a parte mais visível do INTJ, o que faz muita gente confundir competência com ' +
        'dureza. Te bem desenvolvido não é rigidez: é a capacidade de mudar o plano rapidamente ' +
        'quando os dados mudam, sem apego ao próprio ego.',
      signs: [
        'Reorganizar mentalmente qualquer sistema mal desenhado que cruze o seu caminho.',
        'Comunicar em conclusões e não em processo — o que soa abrupto para quem pensa falando.',
        'Impaciência quase física com reuniões, burocracia e trabalho decorativo.',
        'Aprender rápido de forma autodidata, porque a estrutura do assunto aparece antes dos ' +
          'detalhes.',
      ],
      shadow:
        'Vira controle: crítica seca, otimização de coisas que não precisavam ser otimizadas, e ' +
        'pessoas tratadas como recursos dentro do plano.',
      grow:
        "Antes de corrigir, pergunte. Um 'me conta como você chegou aí' preserva o resultado e o " +
        'vínculo ao mesmo tempo.',
    },
    {
      abbr: 'Fi',
      name: 'Sentimento introvertido',
      pos: 'Terciária',
      age: 'dos 20 aos 40',
      strength: '48%',
      oneLine: 'A bússola moral privada — intensa e quase sem palavras.',
      motto: 'Eu sinto muito mais do que consigo dizer, e o que eu valorizo não é negociável.',
      desc:
        'Ao contrário do estereótipo, o INTJ não é uma pessoa sem emoção: é uma pessoa com ' +
        'emoção mal traduzida. Fi guarda um conjunto de valores profundos e altamente pessoais ' +
        '— sobre integridade, justiça, lealdade — que funcionam como linha vermelha absoluta.',
      desc2:
        'Sendo terciária, ela é forte em intensidade e fraca em articulação — e vale saber que a ' +
        'orientação introvertida dessa terceira função é convenção do modelo de Grant, não ' +
        'consenso: Myers deixou o ponto em aberto. O sentimento aparece como pressão interna, ' +
        'cansaço ou irritação antes de aparecer como frase. Quando amadurece, dá ao INTJ algo ' +
        'raro: uma ética que não depende de aprovação externa.',
      signs: [
        'Cortar relações de vez quando um valor central é violado — sem drama e sem volta.',
        'Descobrir o que sentiu horas ou dias depois do acontecido.',
        'Lealdade silenciosa e desproporcional a muito poucas pessoas.',
        'Sensibilidade escondida a rejeição, negada até para si mesmo.',
      ],
      shadow:
        'Em ciclos de estresse, Fi puxa o INTJ para o que a comunidade tipológica chama de loop ' +
        'com Ni: autoanálise infinita, ressentimento acumulado, mágoas antigas revisitadas e ' +
        'isolamento moralizado. O termo é vocabulário de comunidade, não conceito oficial do ' +
        'MBTI — mas descreve bem o que acontece.',
      grow:
        'Nomeie o sentimento em voz alta ou por escrito, ainda mal formulado. Precisão vem ' +
        'depois; o que importa é dar linguagem ao que já existe.',
    },
    {
      abbr: 'Se',
      name: 'Sensação extrovertida',
      pos: 'Inferior',
      age: 'meia-idade em diante',
      strength: '22%',
      oneLine: 'Corpo, presente, mundo físico — o ponto cego.',
      motto: 'Existe um agora, e eu quase sempre esqueço de morar nele.',
      desc:
        'Se é a função que registra o mundo concreto em tempo real: sabor, som, cansaço, ' +
        'ambiente, o próprio corpo. No INTJ ela é a última da fila — daí a tendência de pular ' +
        'refeições, ignorar sinais de exaustão e viver alguns centímetros à frente ou atrás do ' +
        'momento presente.',
      desc2:
        'Mas função inferior não é inimiga: Jung e von Franz a tratavam como a porta de entrada ' +
        'do que ainda não foi vivido. Cultivar Se de propósito — treino físico, música, cozinha, ' +
        'natureza, trabalho manual — não tem estudo por tipo que comprove; tem o efeito bem ' +
        'medido de movimento e sono sobre humor e clareza. É argumento suficiente.',
      signs: [
        'Perceber fome, dor ou exaustão só quando já estão em nível alto.',
        'Desconforto com improviso, ambientes caóticos e mudanças físicas repentinas.',
        'Alívio inesperado em atividades muito concretas e repetitivas.',
        'Sob estresse extremo, virar o oposto: excessos com comida, compras, séries ou exercício.',
      ],
      shadow:
        "É o que Naomi Quenk batizou de 'grip': quando Ni-Te se esgota, o INTJ cai em Se " +
        'inferior — impulsividade sensorial, hiperfoco em detalhes irrelevantes e sensação de ' +
        'perda de controle. Descrição clínica acumulada, não achado de laboratório.',
      grow:
        'Doses pequenas e regulares em vez de grandes: vinte minutos de movimento, uma refeição ' +
        'sem tela, cinco minutos de atenção ao corpo. Se se treina por repetição, não por ' +
        'intensidade.',
    },
  ],

  axis: {
    eyebrow: 'O eixo principal',
    title: 'Ni vê o destino. Te constrói a estrada.',
    paragraphs: [
      'A dupla Ni–Te é o coração do INTJ. A intuição introvertida trabalha em silêncio, ' +
        'fundindo tudo o que você já viu num único palpite de longo prazo. O pensamento ' +
        'extrovertido pega esse palpite e o quebra em critérios, prazos, métricas e etapas — ' +
        'transformando visão em coisa que existe no mundo.',
      'Quando o eixo está saudável, você tem uma raridade: alguém que enxerga longe <em>e</em> ' +
        'entrega. Quando desequilibra para Ni, viram anos de teoria sem execução. Quando ' +
        'desequilibra para Te, viram anos de execução eficiente na direção errada. O trabalho ' +
        'de uma vida é manter os dois conversando.',
    ],
  },

  inside: {
    eyebrow: 'Como isso parece por dentro',
    cards: [
      {
        title: 'Pensamento em sistemas',
        text:
          'Você não vê tarefas isoladas — vê engrenagens. Antes de agir, monta mentalmente o ' +
          'mecanismo inteiro e testa onde ele quebra.',
      },
      {
        title: 'Horizonte longo',
        text:
          'Cinco anos parecem próximos; a próxima semana parece um detalhe. Isso te dá direção ' +
          '— e te faz subestimar o custo do presente.',
      },
      {
        title: 'Certeza antes da voz',
        text:
          'Você fala quando o pensamento está fechado. Parece confiança absoluta; na prática é ' +
          'só edição interna feita antes da fala.',
      },
      {
        title: 'Autonomia como oxigênio',
        text:
          'Ser microgerenciado não é chato: é sufocante. Você aceita autoridade com prazer ' +
          'quando ela é competente e explica o porquê.',
      },
    ],
  },

  next: {
    label: 'Próxima página',
    title: 'Luz & sombra: forças, falhas e burnout',
    index: '02 →',
    key: 'luz-e-sombra',
  },
};
