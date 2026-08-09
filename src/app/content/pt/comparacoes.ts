import type { SourceId } from '../sources';
import type { ComparacoesContent } from '../types';

export const COMPARACOES_PT: ComparacoesContent = {
  meta: {
    title: 'Comparações — INTJ ao lado dos vizinhos',
    description:
      'INTJ comparado a INTP, ENTJ, INFJ, ENTP e ISTJ, a diferença entre assertivo e ' +
      'turbulento, e os estereótipos que já podem ser aposentados.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-ethics',
    'saunders-1991',
    'grant-1983',
    'neris-our-theory',
    'mccrae-costa-1989',
    'schurr-1988',
    'kaufman-1996',
    'davis-1983',
    'melchers-2016',
    'howes-carskadon-1979',
    'bess-harvey-2002',
    'reynierse-2009',
    'stein-swan-2019',
    'boyle-1995',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 07 — Comparações',
    title: 'INTJ ao lado\ndos vizinhos',
    lede:
      'Uma letra de diferença pode refazer a pilha cognitiva inteira — ou quase não tocá-la. ' +
      'Trocar J por P transforma INTJ em INTP e não sobra uma única função em comum; trocar I ' +
      'por E mantém as quatro e só muda a ordem; INTJ e ISTJ, aparentemente distantes, dividem ' +
      'metade do motor. Compare lado a lado, entenda a diferença entre assertivo e turbulento, ' +
      'e veja quais estereótipos já podem ser aposentados.',
  },

  comparator: {
    hint: 'Comparar INTJ com',
    dimensionLabel: 'Dimensão',
    intjStack: 'Ni · Te · Fi · Se',
    sameLabel: 'O que aproxima',
    frictionLabel: 'Atrito típico',
    items: [
      {
        code: 'INTP',
        stack: 'Ti · Ne · Si · Fe',
        rows: [
          {
            label: 'Foco',
            a: 'Convergir: chegar à melhor conclusão e agir sobre ela.',
            b: 'Divergir: explorar quantas explicações possíveis existirem, sem pressa de fechar.',
          },
          {
            label: 'Decisão',
            a: 'Rápida, orientada a resultado externo e prazo.',
            b: 'Adiada, porque quase sempre falta uma consideração a mais.',
          },
          {
            label: 'Relação com planos',
            a: 'Cria plano e executa; ambiguidade prolongada incomoda.',
            b: 'Prefere manter opções abertas; plano fechado parece prisão.',
          },
          {
            label: 'Lógica',
            a: 'Te — eficácia no mundo, o que funciona e entrega.',
            b: 'Ti — consistência interna, o que é logicamente impecável.',
          },
          {
            label: 'Aparência externa',
            a: 'Determinado, às vezes intimidante.',
            b: 'Solto, curioso, aparentemente despreocupado.',
          },
        ],
        same:
          'Ambos são introvertidos e intuitivos na sigla — mas a intuição do INTJ é introvertida ' +
          '(Ni) e a do INTP é extrovertida (Ne). O amor por sistemas abstratos é o mesmo: ' +
          'conversas entre INTJ e INTP costumam ser as mais satisfatórias que os dois têm.',
        friction:
          'O INTJ acha que o INTP nunca conclui nada; o INTP acha que o INTJ fecha a questão ' +
          'antes de examiná-la por completo. Os dois têm razão.',
      },
      {
        code: 'ENTJ',
        stack: 'Te · Ni · Se · Fi',
        rows: [
          {
            label: 'Ordem das funções',
            a: 'Pensa primeiro, age depois — visão comanda.',
            b: 'Age primeiro, ajusta depois — execução comanda.',
          },
          {
            label: 'Energia social',
            a: 'Lidera a partir dos bastidores, com poucas palavras.',
            b: 'Lidera à frente, comanda a sala, fala em público sem custo.',
          },
          {
            label: 'Ritmo',
            a: 'Precisa de silêncio para pensar antes de mover.',
            b: 'Pensa em movimento; parar custa mais que errar.',
          },
          {
            label: 'Necessidade',
            a: 'Tempo sozinho para reorganizar o modelo interno.',
            b: 'Interação e desafio constantes para se manter aceso.',
          },
          {
            label: 'Risco',
            a: 'Planejar demais e agir tarde.',
            b: 'Agir demais e atropelar quem está por perto.',
          },
        ],
        same:
          'Estratégia, franqueza, alto padrão e zero paciência com incompetência. Trabalham muito ' +
          'bem juntos quando os papéis são claros.',
        friction:
          'Disputa de comando. O ENTJ acha o INTJ lento e distante; o INTJ acha o ENTJ apressado ' +
          'e barulhento.',
      },
      {
        code: 'INFJ',
        stack: 'Ni · Fe · Ti · Se',
        rows: [
          {
            label: 'Mesma dominante',
            a: 'Ni orientado a sistemas, estruturas e resultados.',
            b: 'Ni orientado a pessoas, motivações e significados.',
          },
          {
            label: 'Segunda função',
            a: 'Te — organiza o mundo externo com lógica objetiva.',
            b: 'Fe — sintoniza o clima emocional do grupo e responde a ele.',
          },
          {
            label: 'Em conflito',
            a: 'Vai direto ao ponto, mesmo que desconfortável.',
            b: 'Busca harmonia e sofre com atrito aberto.',
          },
          {
            label: 'Motivação',
            a: 'Que a coisa funcione da melhor forma possível.',
            b: 'Que as pessoas envolvidas cresçam e sejam vistas.',
          },
          {
            label: 'Como é lido',
            a: 'Frio e assertivo — mesmo sem intenção.',
            b: 'Caloroso e acolhedor — mesmo quando está exausto.',
          },
        ],
        same:
          'A intuição introvertida idêntica cria um reconhecimento imediato: os dois enxergam o ' +
          'futuro do mesmo jeito silencioso.',
        friction:
          'O INTJ subestima o custo emocional das próprias palavras; o INFJ evita a conversa dura ' +
          'que o INTJ considera necessária.',
      },
      {
        code: 'ENTP',
        stack: 'Ne · Ti · Fe · Si',
        rows: [
          {
            label: 'Modo de pensar',
            a: 'Uma direção provável, aprofundada até o fim.',
            b: 'Vinte direções possíveis, todas testadas em voz alta.',
          },
          {
            label: 'Debate',
            a: 'Discute para chegar à conclusão correta.',
            b: 'Discute para descobrir o que ainda não pensou — e por esporte.',
          },
          {
            label: 'Constância',
            a: 'Termina o que começa, mesmo sem entusiasmo.',
            b: 'Perde interesse quando o problema deixa de ser novo.',
          },
          {
            label: 'Estrutura',
            a: 'Constrói e mantém sistemas.',
            b: 'Encontra a falha em qualquer sistema existente.',
          },
          {
            label: 'Contribuição',
            a: 'Profundidade e execução.',
            b: 'Amplitude e reinvenção.',
          },
        ],
        same: 'Ambos vivem de ideias e detestam trivialidade. Conversas rendem madrugadas inteiras.',
        friction:
          'O caos criativo do ENTP embaralha o plano do INTJ; a firmeza do INTJ soa dogmática ' +
          'para o ENTP.',
      },
      {
        code: 'ISTJ',
        stack: 'Si · Te · Fi · Ne',
        rows: [
          {
            label: 'Fonte de confiança',
            a: 'O modelo interno do que provavelmente vai acontecer.',
            b: 'A impressão interna, muito viva e muito própria, do que já aconteceu e funcionou.',
          },
          {
            label: 'Mudança',
            a: 'Bem-vinda quando melhora o sistema.',
            b: 'Suspeita até ser comprovada — o que costuma ser sensato.',
          },
          {
            label: 'Detalhe',
            a: 'Só o que importa para a estrutura.',
            b: 'Todos, com precisão e memória impressionantes.',
          },
          {
            label: 'Tempo',
            a: 'Futuro em primeiro plano.',
            b: 'Passado como fundamento de tudo.',
          },
          {
            label: 'Compartilham',
            a: 'Te forte: eficiência, franqueza, senso de dever com o combinado.',
            b: 'Te forte: eficiência, franqueza, senso de dever com o combinado.',
          },
        ],
        same:
          'Confiabilidade, independência e desprezo mútuo por drama. Formam duplas de execução ' +
          'extremamente sólidas.',
        friction:
          'O INTJ quer refazer o processo que funciona; o ISTJ quer preservar o processo que já ' +
          'provou funcionar.',
      },
    ],
  },

  identity: {
    eyebrow: 'Variantes de identidade',
    title: 'INTJ-A e INTJ-T',
    intro:
      'As pilhas de quatro funções com atitude fixa — Ni·Te·Fi·Se e as demais — vêm de Grant, ' +
      'Thompson e Clarke (1983), não de Myers, que deixou em aberto a atitude da terceira ' +
      'função. É a convenção mais usada e a mais útil para ler diferenças; não é doutrina ' +
      'oficial nem achado experimental. A letra final não vem do MBTI. É a escala de Identidade ' +
      'do 16Personalities — o modelo NERIS, que descarta as funções cognitivas e reconstrói as ' +
      'quatro letras sobre o Big Five, com assertivo/turbulento ocupando o lugar do ' +
      'neuroticismo, justamente o traço que o MBTI nunca mediu. Foi assim que eles desenharam, ' +
      'não algo que um estudo independente tenha confirmado. Fora desse modelo o sufixo não ' +
      'existe. Como vocabulário, funciona: dois INTJs com o mesmo raciocínio e temperaturas ' +
      'internas muito diferentes.',
    variants: [
      {
        kicker: 'INTJ-A · ASSERTIVO',
        title: 'Confiança estável',
        points: [
          'Segurança nas próprias decisões, com pouca ruminação depois',
          'Estresse afeta menos o humor e o sono',
          'Indiferença genuína à opinião alheia',
          'Menos autocrítica — às vezes menos autocrítica do que seria útil',
          'Risco: subestimar o próprio impacto nas pessoas e ignorar retorno',
        ],
      },
      {
        kicker: 'INTJ-T · TURBULENTO',
        title: 'Perfeccionismo inquieto',
        points: [
          'Revisão mental constante de decisões já tomadas',
          'Sensibilidade maior a crítica, mesmo que não demonstre',
          'Autoexigência muito alta e senso de urgência de melhorar',
          'Mais atenção ao efeito das próprias palavras — que é autoconsciência, não ' +
            'necessariamente empatia',
          'Risco: ansiedade, procrastinação por perfeccionismo e burnout silencioso',
        ],
      },
    ],
    note:
      'Nenhuma das duas é a versão superior do tipo. O assertivo tende a executar com mais paz; ' +
      'o turbulento tende a refinar com mais profundidade. A maturidade aproxima os dois. Vale ' +
      'lembrar de onde isso vem: a escala de Identidade é descrição proprietária do ' +
      '16Personalities, sem validação independente publicada.',
  },

  myths: {
    eyebrow: 'Estereótipos',
    title: 'Sete mitos que já podem ser aposentados',
    mythLabel: 'Mito',
    realityLabel: 'Realidade',
    items: [
      {
        myth: '“INTJs não têm emoções.”',
        reality:
          'Têm Fi — sentimento introvertido, profundo e privado. A emoção é intensa e mal ' +
          'traduzida em palavras, não ausente. É o que o modelo prevê e o que a maioria dos ' +
          'INTJs relata sobre si; ninguém nunca contou quantos choram sozinhos, e o número não ' +
          'mudaria nada.',
      },
      {
        myth: '“São todos gênios do mal.”',
        reality:
          'A ficção adora usar o perfil como vilão porque estratégia fria rende boa trama. Na ' +
          'vida real, Fi funciona como código privado: as linhas vermelhas são poucas, próprias ' +
          'e difíceis de mover. Isso não faz de ninguém mais ético que a média — nenhum tipo tem ' +
          'essa vantagem, e nenhuma medida jamais mostrou uma. Faz de você alguém mais difícil ' +
          'de comprar, o que não é a mesma coisa.',
      },
      {
        myth: '“Ser INTJ significa ser inteligente.”',
        reality:
          'Tipo descreve preferência de processamento, não capacidade. A intuição aparece um ' +
          'pouco mais entre notas altas e testes de aptidão — correlação fraca, que explica ' +
          'pouco e não sustenta diploma nenhum. Existem INTJs brilhantes e INTJs medianos, como ' +
          'em qualquer tipo, e tratar a sigla como prova de inteligência é o atalho mais rápido ' +
          'para a arrogância.',
      },
      {
        myth: '“Não gostam de gente.”',
        reality:
          'Gostam de gente em pequena quantidade e em alta profundidade. O que cansa não é a ' +
          'pessoa: é a interação superficial e sem finalidade.',
      },
      {
        myth: '“São sempre organizados e disciplinados.”',
        reality:
          'A organização é mental, não necessariamente física. Muitos INTJs vivem em ambientes ' +
          'caóticos com sistemas internos impecáveis — e adiam tarefas que consideram irrelevantes.',
      },
      {
        myth: '“É um tipo fixo — você nasce e morre assim.”',
        reality:
          'O tipo é menos estável do que a sigla sugere: reaplicado com poucas semanas de ' +
          'intervalo, o MBTI devolve pelo menos uma letra diferente para perto de metade das ' +
          'pessoas nos estudos clássicos — porque corta em duas metades traços que são ' +
          'contínuos, e quem está perto do meio troca de lado com o humor. O que muda de verdade ' +
          'com os anos é o repertório: um INTJ de 45 anos com Fi e Se desenvolvidos é ' +
          'praticamente outra pessoa em comportamento — mesmo motor, alcance muito maior.',
      },
      {
        myth: '“O MBTI é um teste validado como os da psicologia acadêmica.”',
        reality:
          'Não é, e fingir o contrário é o que desmoraliza o resto. Reaplicado, troca letra em ' +
          'perto de metade das pessoas; as dicotomias não aparecem na distribuição dos dados, ' +
          'que é centrada e não bimodal; a dinâmica de tipo nunca reuniu evidência consistente. ' +
          'Nada disso torna o vocabulário inútil — torna-o vocabulário. Serve para descrever, ' +
          'nunca para medir, prever desempenho ou selecionar gente.',
      },
    ],
  },

  culture: {
    eyebrow: 'Referências culturais',
    title: 'INTJs atribuídos — com uma ressalva importante',
    intro:
      'Ninguém pode tipar outra pessoa de fora com precisão, e figuras públicas menos ainda — o ' +
      'próprio código de ética do MBTI exige que o tipo seja verificado pela pessoa, nunca ' +
      'atribuído por terceiros. As listas abaixo são atribuições populares em comunidades de ' +
      'tipologia — úteis como ilustração do padrão, inúteis como afirmação de fato.',
    groups: [
      {
        title: 'Personagens de ficção',
        names: [
          'Sherlock Holmes',
          'Michael Corleone',
          'Lisbeth Salander',
          'Bruce Wayne',
          'Walter White',
          'Thomas Shelby',
          'Elrond',
          'Ellen Ripley',
        ],
        note:
          'Repare no padrão narrativo: estrategistas de longo prazo, calmos em crise, difíceis ' +
          'de ler — e frequentemente sozinhos por escolha.',
      },
      {
        title: 'Figuras históricas e públicas',
        names: [
          'Friedrich Nietzsche',
          'Isaac Newton',
          'Nikola Tesla',
          'Jane Austen',
          'Ada Lovelace',
          'Marie Curie',
          'Hannah Arendt',
          'Stanley Kubrick',
        ],
        note:
          'Todos nesta lista já morreram, e isso é regra, não acaso. Tipar alguém vivo é uma ' +
          'afirmação sobre uma pessoa que tem todo o direito de discordar dela, e não há como ' +
          'conferir. Estas atribuições são lidas de obra e biografia — nunca de teste aplicado, ' +
          'e a maioria morreu antes de o MBTI sequer existir. Trate como hipótese interessante, ' +
          'não como dado.',
      },
    ],
  },

  next: {
    label: 'Última página',
    title: 'Espelho: trinta e duas afirmações sobre você',
    index: '08 →',
    key: 'espelho',
  },
};
