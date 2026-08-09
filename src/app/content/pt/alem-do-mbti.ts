import type { SourceId } from '../sources';
import type { AlemDoMbtiContent } from '../types';

export const ALEM_DO_MBTI_PT: AlemDoMbtiContent = {
  meta: {
    title: 'Além do MBTI — Eneagrama, temperamentos e Big Five',
    description:
      'Eneatipos, asas, subtipos instintivos, temperamentos clássicos e Big Five: os mapas que ' +
      'explicam por que dois INTJs parecem tipos diferentes.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mccrae-costa-1989',
    'costa-mccrae-1992',
    'wundt-1874',
    'eysenck-eysenck-1985',
    'virchow-1858',
    'kagan-1994',
    'rothbart-2011',
    'marston-1928',
    'kim-2025-mbti-disc',
    'keirsey-1998',
    'neris-our-theory',
    'riso-hudson-1999',
    'riso-hudson-1996',
    'naranjo-1994',
    'chestnut-2013',
    'fauvre-instincts',
    'fauvre-tritype',
    'lahaye-1984',
    'littauer-1983',
    'augustinaviciute-1998',
    'wikisocion-ili',
    'wikipedia-socionics',
    'wikipedia-disc',
    'hippocrates-c400bc',
    'galen-c170',
    'klibansky-1964',
    'pittenger-1993',
    'pittenger-2005',
    'hook-2021',
    'wagner-walker-1983',
    'enneagram-personality-2026',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 06 — Além do MBTI',
    title: 'Por que dois INTJs\nparecem tipos diferentes',
    lede:
      'O MBTI descreve <em>como</em> você processa informação. Não descreve o que te move, do ' +
      'que você tem medo, nem qual ferida organiza a sua vida. Para isso existem outros mapas — ' +
      'e é o cruzamento entre eles que explica por que um INTJ pode ser um recluso teórico e ' +
      'outro um comandante implacável.',
  },

  enneagram: {
    eyebrow: 'Eneagrama · escolha um eneatipo',
    title: 'O mesmo motor, motivações diferentes',
    intro:
      'Se o MBTI é o motor, o eneagrama é o combustível: a motivação profunda e o medo básico ' +
      'por trás do comportamento. O vocabulário de desejo e medo básicos é de Riso e Hudson. As ' +
      'frequências abaixo vêm de levantamentos online de autoidentificação, que discordam ' +
      'bastante entre si — o cruzamento entre os dois mapas quase não foi estudado a sério. Os ' +
      'nove eneatipos rodando num motor Ni–Te estão na página Eneagrama; o Tritype® — a ' +
      'extensão proprietária de Katherine Fauvre, marca registrada com pedidos de 2020 e sem ' +
      'base revisada por pares —, na página Tritipos.',
    chipPrefix: 'INTJ',
    wantLabel: 'Desejo central',
    fearLabel: 'Medo básico',
    lookLabel: 'Como se parece na prática',
    growLabel: 'Caminho de crescimento',
    types: [
      {
        tag: '5w4',
        num: '5',
        name: 'o investigador excêntrico',
        freq: 'um dos eneatipos mais relatados por INTJs — a asa, ninguém mediu',
        motto: 'Se eu souber o suficiente, ninguém vai poder me alcançar — nem me obrigar a nada.',
        body:
          'Este é o INTJ arquetípico da imaginação popular: reservado, profundamente teórico, ' +
          'com um mundo interior original e uma relação quase física com o conhecimento. A asa ' +
          '4 acrescenta melancolia, estética e senso de singularidade — costuma ser o INTJ que ' +
          'escreve, compõe, pesquisa temas obscuros e sente que nunca pertenceu a lugar algum.',
        want: 'Compreender o mundo e ser competente o bastante para não depender de ninguém.',
        fear: 'Ser inútil, desamparado ou incapaz diante das exigências da vida.',
        look:
          'Acumula conhecimento antes de agir, guarda energia como recurso escasso, evita ' +
          'compromissos que consumam tempo de pensar.',
        grow:
          'Sair da teoria e entrar na experiência. O 5 cresce agindo antes de se sentir ' +
          'totalmente preparado — porque essa preparação nunca termina.',
      },
      {
        tag: '5w6',
        num: '5',
        name: 'o analista cauteloso',
        freq: 'muito comum em áreas técnicas',
        motto: 'Preciso entender o sistema inteiro — e ter um plano para quando ele falhar.',
        body:
          'A asa 6 troca excentricidade por lealdade e prudência. É o INTJ mais metódico, ' +
          'orientado a risco e a segurança: pensa em cenários de falha, valoriza rigor e confia ' +
          'em pouquíssimas fontes. Costuma ser excelente em engenharia, segurança, pesquisa ' +
          'aplicada e qualquer campo onde errar é caro.',
        want: 'Domínio técnico suficiente para se sentir seguro num mundo imprevisível.',
        fear: 'Ser pego despreparado, sem recursos e sem respaldo.',
        look:
          'Checa duas vezes, questiona autoridade mas respeita competência, tem plano B para ' +
          'quase tudo — e ansiedade de fundo raramente admitida.',
        grow:
          'Reconhecer que dúvida não é falta de dados. Confiar em pessoas e em si mesmo antes ' +
          'de ter certeza absoluta é o salto desta variação.',
      },
      {
        tag: '1w9',
        num: '1',
        name: 'o idealista sereno',
        freq: 'frequente nos levantamentos online, e fácil de confundir com o 5',
        motto: 'Existe um modo correto de fazer isso, e eu vou encontrá-lo com calma.',
        body:
          'Aqui a energia é ética e não apenas intelectual: o INTJ 1 quer melhorar as coisas, ' +
          'corrigir o que está errado, elevar padrões. A asa 9 traz serenidade e paciência, ' +
          'resultando numa figura contida, quase professoral — crítica por dentro e diplomática ' +
          'por fora. É o INTJ que muitos descrevem como “sábio”.',
        want: 'Integridade: ser correto, íntegro e coerente com os próprios princípios.',
        fear: 'Ser corrupto, defeituoso ou moralmente falho.',
        look:
          'Autocrítica constante e silenciosa, alto padrão aplicado antes de tudo a si mesmo, ' +
          'irritação contida diante de descuido alheio.',
        grow:
          'Aceitar que o suficiente é suficiente. O 1 se liberta quando descobre que erro não é ' +
          'falha moral — é informação.',
      },
      {
        tag: '8w9',
        num: '8',
        name: 'o estrategista de aço',
        freq: 'menos frequente que o 5 nos levantamentos, muito mais visível',
        motto: 'Eu vejo para onde isso vai e não vou pedir permissão para agir.',
        body:
          'O INTJ 8 é o que menos parece introvertido: confronto direto, presença dominante, ' +
          'aversão absoluta a ser controlado. A asa 9 dá uma calma inquietante — pressão ' +
          'silenciosa em vez de explosão. É o INTJ fundador, comandante, o que reorganiza uma ' +
          'empresa inteira sem levantar a voz e sem pedir desculpa.',
        want: 'Autonomia total e capacidade de proteger o próprio território e a própria gente.',
        fear: 'Ser ferido ou controlado por outros — entregue a quem tem poder sobre você.',
        look:
          'Decide rápido, assume responsabilidade sem hesitar, testa as pessoas com franqueza ' +
          'brutal, protege ferozmente quem está dentro do círculo.',
        grow:
          'Deixar alguém ver a parte não blindada. Para o 8, vulnerabilidade escolhida é força ' +
          '— não brecha na armadura.',
      },
      {
        tag: '3w4',
        num: '3',
        name: 'o realizador exigente',
        freq: 'comum em carreiras competitivas',
        motto: 'Eu não quero apenas entender: eu quero construir algo que prove o que eu valho.',
        body:
          'O INTJ 3 canaliza a visão em conquista concreta. Extremamente eficiente, orientado a ' +
          'resultado e atento à imagem de competência, é o mais ambicioso e o mais próximo do ' +
          'estereótipo de alta performance. A asa 4 adiciona profundidade e a necessidade de ' +
          'que a conquista seja autêntica, não genérica.',
        want: 'Valor comprovado por realizações significativas e reconhecidas.',
        fear: 'Ser sem valor, medíocre, invisível — ou reconhecido por algo que não é você.',
        look:
          'Metas ambiciosas, adaptação rápida, dificuldade real de descansar, identidade ' +
          'enredada no que produz.',
        grow:
          'Separar quem você é do que você entrega. O caminho clássico leva o 3 ao 6: lealdade ' +
          'a pessoas em vez de a resultados — e descanso sem culpa.',
      },
      {
        tag: '4w5',
        num: '4',
        name: 'o visionário melancólico',
        freq: 'minoritário nos levantamentos, intensamente criativo',
        motto: 'Eu sinto fundo, penso longe e nunca me encaixei em nenhuma das duas coisas.',
        body:
          'A combinação mais artística: mesma máquina estratégica, movida por identidade e ' +
          'significado em vez de competência. É o INTJ que cria obra, escreve, dirige, filosofa ' +
          '— profundamente consciente da própria diferença e da distância entre o que imagina e ' +
          'o que consegue realizar.',
        want: 'Uma identidade autêntica e um significado que seja inconfundivelmente seu.',
        fear: 'Não ter identidade própria — ser comum, substituível, sem singularidade.',
        look:
          'Intensidade emocional escondida atrás de contenção intelectual, nostalgia, alto ' +
          'padrão estético, tendência a se comparar.',
        grow:
          'Perceber que o significado se constrói no comum e no cotidiano, não só no ' +
          'extraordinário. Rotina não trai a sua singularidade.',
      },
    ],
  },

  instincts: {
    eyebrow: 'Subtipos instintivos',
    title: 'A mesma motivação, aplicada em três arenas',
    intro:
      'Os três instintos são de Oscar Ichazo; Claudio Naranjo os cruzou com os nove eneatipos e ' +
      'formou os 27 subtipos. Ninguém “é” um instinto: os três estão sempre presentes, em ordem ' +
      'de dominância. É descrição de escola, não de laboratório — nada disso foi validado ' +
      'empiricamente. Os 27 subtipos, um a um e aplicados ao INTJ, estão na página Subtipos ' +
      'instintivos.',
    cards: [
      {
        kicker: 'SP · AUTOPRESERVAÇÃO',
        title: 'Fortaleza e recursos',
        text:
          'O INTJ mais recluso e prático: economia, saúde, segurança, ambiente controlado. ' +
          'Constrói uma vida à prova de imprevistos e resiste a depender de qualquer pessoa.',
      },
      {
        kicker: 'SO · SOCIAL',
        title: 'Posição e impacto',
        text:
          'O INTJ mais visível: quer influência sobre sistemas e grupos, aceita liderança, ' +
          'calcula reputação. Introvertido, mas presente onde as decisões acontecem.',
      },
      {
        kicker: 'SX · UM-A-UM',
        title: 'Intensidade e fusão',
        text:
          'O INTJ mais intenso e romântico por dentro: busca uma conexão total com ' +
          'pouquíssimas pessoas — uma só, de preferência, a quem possa entregar tudo o que ' +
          'esconde do resto.',
      },
    ],
  },

  temperaments: {
    eyebrow: 'Temperamentos clássicos · vocabulário antigo, não ciência',
    title: 'Melancólico com colérico — o par que os INTJs mais relatam',
    intro:
      'Ninguém é só um humor: você é uma mistura, com um dominante e um secundário. O esquema ' +
      'de doze combinações não vem de Hipócrates nem de Galeno — é psicologia popular cristã do ' +
      'século XX, de Tim LaHaye, e vale o que vale. Entre INTJs, duas dominam os relatos da ' +
      'comunidade, e ninguém nunca mediu isso: não existe amostra cruzando MBTI e temperamento ' +
      'clássico. Abaixo, essas duas e uma terceira, só para dar a forma da coisa — e não ' +
      'confunda com os temperamentos de Keirsey, onde o INTJ é sempre Racional (NT).',
    cards: [
      {
        kicker: 'Melancólico–colérico',
        title: 'O perfeccionista implacável',
        text:
          'A profundidade do melancólico alimenta o Ni e o padrão altíssimo; a vontade colérica ' +
          'entrega o Te pronto para executar. É o INTJ que planeja por meses e depois avança ' +
          'sem hesitar — e que trata o próprio rascunho como se fosse entrega final. Risco: ' +
          'autocrítica severa, rigidez e nenhuma tolerância para o próprio erro.',
        accent: true,
      },
      {
        kicker: 'Colérico–melancólico',
        title: 'O comandante estratégico',
        text:
          'Aqui a ação vem primeiro e a análise serve à conquista: Te no comando, Ni contratado ' +
          'para achar o caminho mais curto. Decide rápido, assume liderança sem pedir, tolera ' +
          'pouco erro alheio. Risco: atropelar pessoas e cortar justamente a etapa de reflexão ' +
          'que era a sua vantagem.',
        accent: true,
      },
      {
        kicker: 'Fleumático–melancólico',
        title: 'O estrategista que espera',
        text:
          'A calma vem primeiro e a profundidade em seguida: você observa muito, conclui em ' +
          'silêncio e só se move quando o custo de não se mover fica alto. Excelente para não ' +
          'errar, péssimo para chegar cedo. Risco: chamar de paciência o que é adiamento, e ver ' +
          'a janela fechar com o plano pronto na gaveta.',
        accent: false,
      },
    ],
  },

  bigFive: {
    eyebrow: 'Big Five · o modelo da psicologia acadêmica',
    title: 'O perfil típico, traço por traço',
    intro:
      'O Big Five é o modelo mais usado na pesquisa científica. Ele não tem “tipos”, apenas ' +
      'cinco dimensões contínuas. As faixas abaixo indicam direção, não medida: saem das ' +
      'correlações entre as escalas do MBTI e o Big Five (McCrae e Costa, 1989), não de ' +
      'percentis medidos em INTJs — e a última varia muito. Traço por traço, com o que a ' +
      'correlação sustenta e o que não sustenta, na página Big Five.',
    rows: [
      {
        name: 'Abertura',
        width: '92%',
        level: 'MUITO ALTA',
        text:
          'Fome de ideias abstratas, teorias e sistemas novos. A ressalva comum — de que isso ' +
          'vem com menos interesse estético — não se sustenta: a intuição se correlaciona com ' +
          'abertura em geral, estética inclusive. O que fica de fora é o sensorial imediato.',
      },
      {
        name: 'Conscienciosidade',
        width: '84%',
        level: 'ALTA',
        text:
          'Ordem, disciplina e orientação a metas de longo prazo — mais por autoexigência ' +
          'interna que por senso de dever externo.',
      },
      {
        name: 'Extroversão',
        width: '18%',
        level: 'BAIXA',
        text:
          'Pouca busca de estímulo social. Mas “extroversão” no Big Five é um domínio com ' +
          'várias facetas, e a afirmação de si — E3 no NEO-PI-R, nada a ver com o “assertivo” ' +
          'do 16Personalities logo abaixo — é uma delas. É por essa fresta que passa o INTJ ' +
          'quieto que ainda assim assume o comando.',
      },
      {
        name: 'Amabilidade',
        width: '34%',
        level: 'BAIXA A MÉDIA',
        text:
          'Franqueza acima de harmonia e resistência a concordar por conveniência. Não ' +
          'significa ausência de cuidado: significa cuidado sem diplomacia automática.',
      },
      {
        name: 'Neuroticismo',
        width: '50%',
        level: 'VARIÁVEL',
        text:
          'O MBTI não mede isto: não existe quinta letra nas quatro. A distinção INTJ-A / ' +
          'INTJ-T é do 16Personalities, que abandonou as funções junguianas, adotou o Big Five ' +
          'e rebatizou o neuroticismo de “Identidade” — baixo no assertivo, alto no turbulento. ' +
          'Nenhum dos dois é a versão “correta” do tipo.',
      },
    ],
    extras: [
      {
        title: 'Socionics',
        text:
          'Criada nos anos 1970–80 em Vilnius pela lituana Aušra Augustinavičiūtė, a partir de ' +
          'Jung e do metabolismo informacional de Kępiński. Pelas funções, o correspondente do ' +
          'INTJ é o ILI (Ni-Te) — não o LII, que é Ti-Ne e corresponde ao INTP. A confusão está ' +
          'na última letra: o j/p da socionics segue a função dominante, o J/P do MBTI segue a ' +
          'primeira função extrovertida. Nos introvertidos ela inverte, e INTJ vira INTp. E ' +
          'mesmo isso é convenção de conversão, não equivalência: os dois sistemas definem os ' +
          'elementos de forma diferente.',
        accent: false,
      },
      {
        title: 'DISC',
        text:
          'Modelo de comportamento proposto por William Moulton Marston em 1928 — sem ' +
          'parentesco com Jung, e sem instrumento próprio até os anos 1950. O cruzamento INTJ = ' +
          'D + C é folclore de consultoria: o único estudo publicado que correlacionou os dois ' +
          'sistemas liga J a C (rigor, precisão) e encontra o T correlacionado negativamente ' +
          'com o D. Amostra pequena e culturalmente estreita — evidência fraca, não prova.',
        accent: false,
      },
      {
        title: 'Jung original',
        text:
          'A raiz de tudo: em Psychologische Typen (1921), Jung descreve o “intuitivo ' +
          'introvertido” — místico e vidente de um lado, excêntrico fantasioso do outro, ' +
          'alguém cuja língua “não é a que se fala correntemente”. Só que esse tipo cobre INTJ ' +
          'e INFJ: as quatro letras e a regra da função auxiliar são invenção de Myers, não de ' +
          'Jung.',
        accent: false,
      },
      {
        title: 'Como usar tudo isso',
        text:
          'Empilhe os mapas em vez de escolher um: MBTI diz como você pensa, eneagrama por que ' +
          'você age, Big Five o quanto de cada traço. Nenhum sozinho te descreve. Só não ' +
          'confunda peso: o Big Five é o único com lastro de pesquisa; os outros dois são ' +
          'linguagens úteis, não medidas. Socionics, DISC e Jung têm cada um a sua página, com ' +
          'o histórico e o veredicto.',
        accent: true,
      },
    ],
  },

  more: {
    enneagram: 'Ver os nove tipos e as dezoito asas em detalhe',
    instincts: 'Ver os 27 subtipos instintivos',
    temperaments: 'Ver as doze misturas em detalhe',
    bigFive: 'Ver os cinco traços em detalhe',
  },
  next: {
    label: 'Próxima página',
    title: 'Comparações: vizinhos, A/T, mitos e referências',
    index: '07 →',
    key: 'comparacoes',
  },
};
