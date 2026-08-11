import type { SourceId } from '../sources';
import type { HomeContent } from '../types';

export const HOME_PT: HomeContent = {
  meta: {
    title: 'INTJ — O mastermind',
    description:
      'Um retrato honesto do tipo INTJ: pilha cognitiva, forças e sombras, trabalho, ' +
      'vínculos e crescimento.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbtionline-2024',
    'capt-2003',
    'beebe-2017',
    'keirsey-1998',
    'keirsey-bates-1978',
    'neris-our-theory',
  ] satisfies SourceId[],

  hero: {
    eyebrow: 'MBTI · Tipo INTJ · ≈2% dos adultos nos EUA',
    title: 'INTJ',
    subtitle: 'O mastermind',
    stack: 'Ni → Te → Fi → Se',
    lede:
      'Se você chegou aqui procurando um retrato honesto de si mesmo, seja bem-vindo. Este ' +
      'site é dedicado inteiramente ao INTJ — a mente que costuma ver o fim antes do começo e ' +
      'passa a vida traduzindo padrões invisíveis em planos possíveis. Nada aqui é para te ' +
      'encaixar numa gaiola. É para te dar palavras.',
    ctaPrimary: 'Comece pela mente',
    ctaSecondary: 'Espelho — mini-teste',
  },

  stats: [
    { value: '≈2%', label: 'da população adulta dos EUA' },
    { value: '≈0,8%', label: 'das mulheres nos EUA — contra ≈3,3% dos homens' },
    { value: 'NT', label: 'racional (Keirsey) · analista (16Personalities)' },
    { value: '4', label: 'funções conscientes — 8 com a sombra (Beebe)' },
  ],

  portrait: {
    eyebrow: '01 — Retrato',
    title: 'Uma mente que trabalha de trás para frente',
    paragraphs: [
      'O INTJ raramente pensa em passos. A conclusão chega primeiro — inteira, silenciosa, ' +
        'quase sem aviso — e só depois vem o trabalho paciente de reconstruir o caminho que ' +
        'levou até ela. É por isso que você às vezes sabe que algo vai dar errado meses antes ' +
        'de conseguir explicar por quê.',
      'Por fora, parece frieza. Por dentro, é o oposto: um mundo interno densamente povoado, ' +
        'com convicções profundas e uma vontade quase teimosa de que as coisas façam sentido. ' +
        'Você não guarda distância por desprezo — guarda porque precisa de espaço para pensar, ' +
        'e porque aprendeu cedo que poucas pessoas têm paciência para o seu ritmo.',
      'A boa notícia: quase tudo que costuma pesar em ser INTJ — a impaciência, a solidão ' +
        'escolhida, a dificuldade de nomear o que sente — é desenvolvível. Não vira outra ' +
        'pessoa. Vira uma versão sua com mais alcance.',
      'Uma nota sobre os números lá em cima, já que raridade costuma virar identidade: eles ' +
        'descrevem os Estados Unidos, em amostras compiladas entre 1972 e 2002. Não existe ' +
        'amostra normativa brasileira do MBTI — ninguém nunca contou quantos INTJs há no ' +
        'Brasil. Ser raro aqui é estatística importada: não é mérito, e não é o que esta ' +
        'página tem para te oferecer.',
    ],
  },

  traits: [
    {
      kicker: 'I · INTROVERSÃO',
      title: 'Energia para dentro',
      text:
        'Sua atenção corre para dentro: você processa antes de falar e cansa onde o estímulo ' +
        'não para. Não é timidez — é preferência por profundidade em vez de volume.',
    },
    {
      kicker: 'N · INTUIÇÃO',
      title: 'Padrão antes do fato',
      text:
        'O que interessa é o significado por trás do detalhe, a direção da corrente — não a ' +
        'onda de hoje.',
    },
    {
      kicker: 'T · PENSAMENTO',
      title: 'Coerência como bússola',
      text:
        'Decisões passam pelo filtro do que é consistente e eficaz. Emoção não é ignorada — ' +
        'só chega em segundo lugar.',
    },
    {
      kicker: 'J · JULGAMENTO',
      title: 'Fechamento e plano',
      text:
        'Ambiguidade indefinida cansa. Você quer decidir, organizar e seguir — de preferência ' +
        'com margem de contingência.',
    },
  ],

  map: {
    eyebrow: '02 — O que você vai encontrar',
    title: 'Doze camadas, do mecanismo à vida real',
    intro:
      'Você pode ler na ordem ou saltar direto para o que dói ou fascina agora. Cada página ' +
      'é independente.',
    cards: [
      {
        key: 'mente',
        kicker: '01 · MENTE',
        title: 'A pilha cognitiva',
        text: 'Ni, Te, Fi e Se explicados um a um, com diagrama interativo. O motor por baixo de tudo.',
      },
      {
        key: 'luz-e-sombra',
        kicker: '02 · LUZ & SOMBRA',
        title: 'Forças, falhas e burnout',
        text:
          'O que você faz melhor que quase todo mundo, o que sabota, e como o INTJ desmorona ' +
          'quando desmorona.',
      },
      {
        key: 'trabalho',
        kicker: '03 · TRABALHO',
        title: 'Carreira e ambiente',
        text:
          'Onde você prospera, o que te esvazia em três meses, e como liderar sem virar tirano ' +
          'de planilha.',
      },
      {
        key: 'vinculos',
        kicker: '04 · VÍNCULOS',
        title: 'Amor, amizade, família',
        text:
          'Como o INTJ ama (em atos, não em adjetivos), o que precisa dizer em voz alta, e por ' +
          'que a lealdade é lenta.',
      },
      {
        key: 'genero',
        kicker: '05 · HOMEM & MULHER',
        title: 'O mesmo tipo, lido diferente',
        text:
          'Por que o INTJ é raro entre mulheres, e por que o mesmo comportamento vira ' +
          '“competente” num e “difícil” na outra.',
      },
      {
        key: 'jornada',
        kicker: '06 · JORNADA',
        title: 'Fases por idade',
        text:
          'Linha do tempo do desenvolvimento das funções — e as práticas concretas de ' +
          'crescimento em cada fase.',
      },
      {
        key: 'alem-do-mbti',
        kicker: '07 · ALÉM DO MBTI',
        title: 'Eneagrama e temperamentos',
        text:
          'Dois INTJs podem ser irreconhecíveis. Eneatipo, asa, temperamento clássico e Big ' +
          'Five explicam a diferença.',
      },
      {
        key: 'comparacoes',
        kicker: '08 · COMPARAÇÕES',
        title: 'Vizinhos, A/T e mitos',
        text:
          'INTJ ao lado de INTP, ENTJ, INFJ e ENTP. Assertivo vs. turbulento. E os estereótipos ' +
          'que já cansaram.',
      },
      {
        key: 'espelho',
        kicker: '09 · ESPELHO',
        title: 'Mini-teste de traços',
        text:
          'Trinta e duas afirmações, oito por função cognitiva, para medir o quanto os traços ' +
          'INTJ ressoam em você — sem veredito, com leitura.',
      },
      {
        key: 'saude',
        kicker: '10 · SAÚDE',
        title: 'Como saber se você está bem',
        text:
          'O que define um INTJ saudável, os sinais de que você não está, e por que ' +
          '“maximizar desempenho” e “estar bem” acabam sendo a mesma pergunta.',
      },
      {
        key: 'o-que-ninguem-diz',
        kicker: '11 · RECONHECIMENTO',
        title: 'O que ninguém te diz',
        text:
          'As experiências específicas que as descrições de INTJ sempre deixam de fora. ' +
          'A página que existe para você se reconhecer, não para aprender teoria.',
      },
      {
        key: 'para-quem-ama',
        kicker: '12 · PARA OS OUTROS',
        title: 'Para quem ama um INTJ',
        text:
          'A única página não escrita para você — e provavelmente a que você vai mandar ' +
          'para alguém em vez de tentar explicar em voz alta.',
      },
    ],
  },

  quote: {
    eyebrow: 'O paradoxo central',
    quote: '“Você quer profundamente ser compreendido — e ainda assim quase nunca se explica.”',
    text:
      'Boa parte do amadurecimento do INTJ cabe nessa frase. Não é preciso mudar de ' +
      'temperamento para resolvê-la — só aprender a dizer em voz alta uma fração do que já ' +
      'está pronto por dentro.',
  },

  disclaimer: {
    eyebrow: 'Antes de continuar',
    title: 'Leia como espelho, não como sentença',
    paragraphs: [
      'Nenhuma descrição vai acertar 100% — e se acertasse, seria preocupante. Use o que ' +
        'reconhecer, questione o resto, e preste atenção especial ao que te incomodar: costuma ' +
        'ser ali que mora a parte ainda não desenvolvida.',
      'Tipo não explica trauma, criação, cultura, saúde ou escolha. Ele descreve preferências ' +
        'de processamento. Tudo o mais é você.',
    ],
  },
};
