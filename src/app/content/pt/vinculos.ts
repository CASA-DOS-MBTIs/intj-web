import type { SourceId } from '../sources';
import type { VinculosContent } from '../types';

export const VINCULOS_PT: VinculosContent = {
  meta: {
    title: 'Vínculos — Amor, amizade e família | INTJ',
    description:
      'Como o INTJ ama, faz amizade e convive em família: afeto em atos, lealdade lenta e o ' +
      'que realmente prevê compatibilidade.',
  },

  sources: ['myers-1998-manual', 'mbf-ethics', 'pittenger-2005'] satisfies SourceId[],

  header: {
    eyebrow: 'Página 04 — Vínculos',
    title: 'Amor, amizade\ne família',
    lede:
      'Existe uma ideia de que o INTJ não precisa de gente. É falsa. O que é verdade é que ' +
      'você precisa de <em>poucas</em> pessoas, com uma profundidade que a maioria acha ' +
      'desconfortável. Quando você escolhe alguém, escolhe para valer — e essa intensidade ' +
      'quieta é a parte mais incompreendida do seu tipo.',
  },

  affection: {
    eyebrow: 'A linguagem afetiva do INTJ',
    title: 'Você ama em atos, não em adjetivos',
    cards: [
      {
        title: 'Resolver problemas',
        text:
          'Quando alguém importa, você começa a otimizar a vida dessa pessoa em silêncio. É ' +
          'declaração de amor disfarçada de utilidade.',
      },
      {
        title: 'Memória e atenção',
        text:
          'Você guarda detalhes que a própria pessoa esqueceu de ter dito. Prestar atenção ' +
          'assim é o oposto de indiferença.',
      },
      {
        title: 'Presença constante',
        text:
          'Você não desaparece em crise. Some das festas, mas aparece no hospital — e fica ' +
          'até resolver.',
      },
      {
        title: 'Honestidade dura',
        text:
          'Você diz a verdade que ninguém diz. Para você é respeito — e vale explicar isso, ' +
          'porque nem sempre chega assim.',
      },
    ],
    translationTitle: 'O problema de tradução',
    translation:
      'A maioria das pessoas foi ensinada a reconhecer afeto em palavras e demonstrações ' +
      'visíveis. Você entrega afeto em confiabilidade e resolução. Não é obrigação sua virar ' +
      'outra pessoa — mas dizer em voz alta, de vez em quando, o que você já demonstra o tempo ' +
      'todo evita anos de mal-entendido. Uma frase basta: “eu não falo muito, mas você é ' +
      'importante para mim.”',
  },

  love: {
    eyebrow: 'Relação amorosa',
    title: 'Lento para entrar, difícil de sair',
    paragraphs: [
      'O INTJ costuma avaliar antes de sentir — ou pelo menos antes de admitir que sentiu. ' +
        'Você observa longamente, testa consistência, e só então investe. Depois de investir, a ' +
        'lealdade é quase inflexível: você trata o relacionamento como projeto de longo prazo, ' +
        'com intenção de fazer funcionar.',
      'Isso te dá relações estáveis e profundas. O risco é o oposto do que se imagina: não é ' +
        'abandonar cedo, é ficar demais — racionalizando problemas graves porque desistir ' +
        'contraria o plano. Aprender a reconhecer quando a conclusão honesta é “isso não tem ' +
        'solução” é parte do amadurecimento.',
    ],
    needsTitle: 'O que você precisa de um parceiro',
    needs: [
      'Espaço sem culpa: silêncio não é distância',
      'Conversa de verdade, não só logística da casa',
      'Direto no conflito: subentendido te deixa perdido',
      'Independência própria, para nenhum dos dois virar plateia do outro',
      'Paciência com o seu tempo de expressar sentimento',
    ],
    partnerTitle: 'O que o seu parceiro precisa de você',
    partnerNeeds: [
      'Afeto verbalizado, mesmo desajeitado',
      'Ouvir sem consertar, quando o pedido é só ouvir',
      'Sinal de que a distância é recarga, não punição',
      'Presença no presente, não só planos para o futuro',
    ],
  },

  bonds: [
    {
      kicker: 'Amizade',
      title: 'Poucas, longas, sem manutenção social',
      paragraphs: [
        'Você não coleciona amizades — cultiva três ou quatro que atravessam décadas. Conversa ' +
          'fiada te esgota; discussão de ideias te acorda. Amigos INTJ costumam retomar depois ' +
          'de meses de silêncio como se tivessem se falado ontem, e isso é genuinamente ' +
          'confortável para os dois lados.',
        'O cuidado necessário: silêncio prolongado, do outro lado, às vezes é lido como ' +
          'desinteresse. Um sinal mínimo de vida — uma mensagem por mês — sustenta vínculos que ' +
          'você não quer perder.',
      ],
    },
    {
      kicker: 'Família',
      title: 'Lealdade prática, atrito com obrigação',
      paragraphs: [
        'Você cumpre o que se compromete e assume responsabilidade sem reclamar. O atrito ' +
          'aparece com o que é feito “porque sempre foi assim”: tradições sem função, cobranças ' +
          'emocionais indiretas, reuniões obrigatórias. Nada disso te convence — e a resistência ' +
          'costuma ser interpretada como frieza.',
        'Como pai ou mãe, o INTJ tende a formar filhos autônomos e pensantes, tratados como ' +
          'pessoas capazes desde cedo. O ponto de atenção é o mesmo de sempre: lembrar que ' +
          'crianças precisam de calor explícito, não só de competência ao redor.',
      ],
    },
  ],

  compatibility: {
    eyebrow: 'Sobre compatibilidade',
    paragraphs: [
      'Você vai ler em muitos lugares que o INTJ “combina” com ENFP ou ENTP. Há lógica nisso: ' +
        'tipos extrovertidos e intuitivos costumam trazer leveza, espontaneidade e um empurrão ' +
        'social bem-vindo. Mas tratar isso como regra é ruim, e não é só questão de bom senso: ' +
        'nenhum estudo jamais mostrou que emparelhar siglas preveja satisfação ou duração de um ' +
        'relacionamento. Casais felizes existem em todas as combinações, e casais infelizes ' +
        'também.',
      'O que realmente prevê compatibilidade não é a sigla: é maturidade, valores ' +
        'compartilhados e disposição de traduzir a própria linguagem para o outro. Duas pessoas ' +
        'com desenvolvimento parecido se entendem com quase qualquer par de tipos. Duas pessoas ' +
        'em estágios muito diferentes não se entendem nem sendo idênticas.',
    ],
  },

  next: {
    label: 'Próxima página',
    title: 'Jornada: as fases do INTJ por idade',
    index: '05 →',
    key: 'jornada',
  },
};
