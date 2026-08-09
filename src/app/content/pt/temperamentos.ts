import {
  DEEP_CHOLERIC_MELANCHOLIC_PT,
  DEEP_CHOLERIC_PHLEGMATIC_PT,
  DEEP_CHOLERIC_SANGUINE_PT,
  DEEP_MELANCHOLIC_CHOLERIC_PT,
  DEEP_MELANCHOLIC_PHLEGMATIC_PT,
  DEEP_MELANCHOLIC_SANGUINE_PT,
} from './deep/temperaments-a';
import {
  DEEP_PHLEGMATIC_CHOLERIC_PT,
  DEEP_PHLEGMATIC_MELANCHOLIC_PT,
  DEEP_PHLEGMATIC_SANGUINE_PT,
  DEEP_SANGUINE_CHOLERIC_PT,
  DEEP_SANGUINE_MELANCHOLIC_PT,
  DEEP_SANGUINE_PHLEGMATIC_PT,
} from './deep/temperaments-b';
import { FOCUS_TEMPERAMENTOS_PT } from './deep/focus';
import type { TemperamentsContent } from '../types';

export const TEMPERAMENTOS_PT: TemperamentsContent = {
  focus: FOCUS_TEMPERAMENTOS_PT,
  meta: {
    title: 'Temperamentos — os quatro humores aplicados ao INTJ',
    description:
      'Melancólico, colérico, fleumático e sanguíneo, e as doze combinações dominante/secundário, ' +
      'lidas como ritmo de um motor Ni–Te. Com a cronologia real e o que a ciência guardou disso.',
  },

  sources: [
    'hippocrates-c400bc',
    'galen-c170',
    'klibansky-1964',
    'lahaye-1984',
    'littauer-1983',
    'virchow-1858',
    'kagan-1994',
    'rothbart-2011',
    'wundt-1874',
    'eysenck-eysenck-1985',
    'keirsey-1998',
    'pittenger-2005',
  ],

  header: {
    eyebrow: 'Além do MBTI — Temperamentos',
    title: 'Quatro humores,\ndoze arranjos, um motor só',
    lede:
      'Este é o modelo mais antigo, mais popular e mais frágil de todo o site. Ele não diz nada ' +
      'sobre como você pensa — a pilha <strong>Ni · Te · Fi · Se</strong> é idêntica nas doze ' +
      'combinações abaixo. O que ele descreve é a <em>temperatura</em> dessa pilha: com que ' +
      'rapidez ela liga, com que dureza trata as pessoas e quanto tempo leva para desligar.',
  },

  intro:
    'Um INTJ melancólico–fleumático e um INTJ colérico–sanguíneo têm exatamente o mesmo motor ' +
    'cognitivo e são, na convivência, duas espécies diferentes. Um leva três meses para dizer ' +
    'o que concluiu no primeiro dia; o outro diz antes de terminar de concluir. Nenhum dos dois ' +
    'é mais INTJ que o outro, e é por isso que este vocabulário sobrevive: ele nomeia a única ' +
    'coisa que o MBTI deliberadamente não mede — <strong>o ritmo, não a arquitetura</strong>.',

  caveat:
    'Isto não tem estatuto algum na psicologia contemporânea. Nenhum instrumento da psicologia ' +
    'científica da personalidade mede “colérico”; ninguém jamais encontrou bile negra. Os ' +
    'quatro humores são ' +
    'vocabulário pré-científico e estão aqui como linguagem descritiva — do mesmo modo que se ' +
    'diz que alguém tem sangue-frio sem afirmar nada sobre a temperatura do sangue. Duas ' +
    'confusões precisam ser desfeitas antes de continuar. A primeira: as doze combinações ' +
    'dominante/secundário não vêm da Antiguidade, e sim de Tim LaHaye, em 1984. A segunda, mais ' +
    'grave: não confunda nada disto com os temperamentos de Keirsey. Em Please Understand Me II ' +
    '(1998), Keirsey batizou quatro grupos — Artesão (SP), Guardião (SJ), Idealista (NF) e ' +
    'Racional (NT) — e cada tipo pertence a exatamente um deles, por definição. O INTJ é sempre ' +
    'Racional: não há dominante, não há secundário, não há mistura possível. É outro modelo, de ' +
    'outro autor, com outra lógica, que apenas tomou emprestada a palavra “temperamento”. E a ' +
    'advertência que Pittenger fez ao MBTI vale em dobro aqui: quanto mais genérica a descrição, ' +
    'mais verdadeira ela parece a quem se reconhece nela.',

  history: {
    eyebrow: 'A cronologia real',
    title: 'Vinte e quatro séculos, três modelos diferentes com o mesmo nome',
    paragraphs: [
      'A origem é médica, não psicológica. <em>De natura hominis</em>, do Corpus Hipocrático, por ' +
        'volta de 400 a.C. e provavelmente escrito por Pólibo de Cós, sustenta que o corpo contém ' +
        'sangue, fleuma, bile amarela e bile negra, e que a saúde é o equilíbrio entre eles. Ali ' +
        'ninguém <em>é</em> melancólico. Alguém tem, num certo momento e por causa de uma certa ' +
        'estação, bile negra em excesso — e depois não tem mais. Tipologia de caráter é uma ' +
        'leitura posterior, feita por cima de um texto sobre fisiologia.',
      'Galeno, por volta de 170 d.C., é quem transforma aquilo em doutrina das misturas. E é aqui ' +
        'que a lenda popular desaba: as misturas de Galeno são <strong>nove</strong>, não quatro. ' +
        'Uma bem temperada, quatro simples e quatro compostas, ao longo dos eixos quente/frio e ' +
        'seco/úmido. Não existe em Galeno a tabela de quatro tipos com um dominante e um ' +
        'secundário que circula hoje em cartazes de treinamento corporativo. Ela foi montada ' +
        'muito depois, por outras pessoas, com outros objetivos.',
      'O prestígio da palavra “melancólico” também tem data e autores. Klibansky, Panofsky e Saxl ' +
        'reconstruíram em 1964 como a melancolia migrou de doença da bile negra para insígnia do ' +
        'gênio — do problema aristotélico sobre por que os homens excepcionais são melancólicos, ' +
        'passando por Ficino, até a <em>Melencolia I</em> de Dürer. Vale registrar isso enquanto ' +
        'você lê as fichas abaixo: se o rótulo “melancólico” lhe parece um elogio — profundidade, ' +
        'seriedade, dom —, o que você está sentindo é o efeito de uma reabilitação literária ' +
        'renascentista, não o resultado de uma medição.',
      'A medicina abandonou o mecanismo em 1858. A patologia celular de Virchow localizou a doença ' +
        'na célula, e a partir dali os humores deixaram de explicar qualquer coisa sobre o corpo. ' +
        'O que restou foi o vocabulário — quatro adjetivos úteis, órfãos da fisiologia que os ' +
        'justificava.',
      'A psicologia, quando voltou ao assunto, voltou por dimensões. Wundt, já em 1874, ' +
        'reorganizou os quatro nomes antigos em dois eixos contínuos: a intensidade da emoção e a ' +
        'velocidade com que ela muda. Eysenck e Eysenck, em 1985, usaram os mesmos quatro nomes ' +
        'como rótulos dos quadrantes de extroversão × neuroticismo — um empréstimo mnemônico ' +
        'sobre dimensões medidas, e não um retorno dos humores. Em nenhum dos dois casos há tipos.',
      'As doze combinações desta página são de 1984. Tim LaHaye, pastor batista e autor de ' +
        'psicologia popular cristã, publicou em <em>Why You Act the Way You Do</em> os pares ' +
        'dominante/secundário que hoje se apresentam como sabedoria antiga; Florence Littauer, no ' +
        'ano anterior, havia popularizado os quatro tipos no mesmo meio editorial. Isto é ' +
        'importante e não é uma nota de rodapé: <strong>a estrutura que organiza esta página tem ' +
        'quatro décadas, não vinte e quatro séculos</strong>.',
      'Da pesquisa contemporânea sobrou algo — mas não os tipos. Kagan, em 1994, chamou seu livro ' +
        'de <em>Galen’s Prophecy</em> por cortesia histórica; o conteúdo é a observação ' +
        'longitudinal de crianças inibidas e desinibidas, medidas por reatividade. Rothbart, em ' +
        '2011, define temperamento como diferenças precoces em reatividade e autorregulação, ' +
        'dimensionais e observáveis desde os primeiros meses. É esse o grão de verdade sob a ' +
        'expressão “colérico–fleumático”: a velocidade com que você se ativa e a velocidade com ' +
        'que você volta ao repouso são diferenças individuais reais, precoces e razoavelmente ' +
        'estáveis. Só que são duas linhas contínuas, e não quatro caixas com um encaixe secundário.',
    ],
    points: [
      'c. 400 a.C. — De natura hominis descreve quatro humores como fisiologia da saúde e da ' +
        'doença. Nenhuma tipologia de caráter.',
      'c. 170 d.C. — Galeno organiza as misturas de quente/frio e seco/úmido: nove, não quatro, e ' +
        'sem qualquer noção de dominante e secundário.',
      'Séculos XIV–XVI — a melancolia é reabilitada como marca do gênio. É dessa literatura, e não ' +
        'da medicina, que vem o prestígio da palavra.',
      '1858 — a patologia celular de Virchow localiza a doença na célula e aposenta os humores ' +
        'como mecanismo.',
      '1874 — Wundt reorganiza os quatro nomes em dois eixos contínuos: intensidade da emoção e ' +
        'velocidade da mudança.',
      '1983–1984 — Littauer populariza os quatro tipos e LaHaye publica as doze combinações ' +
        'dominante/secundário reproduzidas nesta página.',
      '1985 — Eysenck e Eysenck usam os nomes antigos como rótulos de quadrante sobre extroversão ' +
        '× neuroticismo. Nomes emprestados, não humores.',
      '1994–2011 — Kagan e Rothbart medem reatividade e autorregulação desde a infância. ' +
        'Rothbart trabalha com dimensões contínuas; Kagan defende categorias (inibido e ' +
        'desinibido). Nenhum dos dois trabalha com mistura de humores.',
    ],
  },

  labels: {
    risk: 'Risco',
    atWork: 'No trabalho',
    asIntj: 'Num INTJ',
    blends: 'As doze combinações, dominante primeiro',
    singles: 'Os quatro humores, isolados',
  },

  singles: {
    melancholic: {
      name: 'Melancólico',
      text:
        'O humor que mais se parece com o comportamento padrão do tipo — e é exatamente por isso ' +
        'que ele engana. Num INTJ, o melancólico não acrescenta profundidade: ele acrescenta ' +
        'exigência. Ni já convergia sozinho para uma única leitura do futuro; o melancólico faz ' +
        'com que essa leitura precise estar impecável antes de virar palavra dita. O resultado é ' +
        'o intervalo longo entre saber e agir, a autocrítica que trabalha em turno integral e a ' +
        'tendência de tratar erro como falha moral, não como informação. Cuidado com o atalho: um ' +
        'INTJ não é melancólico por definição, e boa parte do que se descreve aqui como ' +
        'temperamento é só introversão intuitiva vista de fora.',
    },
    choleric: {
      name: 'Colérico',
      text:
        'Num INTJ, o colérico é Te no volume máximo. Ele encurta drasticamente a distância entre ' +
        'a conclusão de Ni e a ordem dada — o que em outro tipo apareceria como impulsividade, ' +
        'aqui aparece como decisão inapelável tomada rápido demais para ser explicada. Traz ' +
        'iniciativa, apetite por responsabilidade e uma intolerância quase física a ' +
        'incompetência, lentidão e reunião. Traz também o custo clássico: pessoas tratadas como ' +
        'variáveis do plano, e a certeza de que discordar é atraso.',
    },
    phlegmatic: {
      name: 'Fleumático',
      text:
        'Baixa reatividade. Num INTJ, isso significa Ni rodando sem agitação e Te operando sem ' +
        'urgência: o tipo que parece inabalável porque, na maior parte do tempo, está mesmo. ' +
        'A calma é genuína e não é repressão — e essa é justamente a armadilha. O fleumático não ' +
        'reduz o que Fi registra; apenas remove o impulso de dizer. Ofensas são arquivadas ' +
        'inteiras, com data, sem nunca chegar à superfície, até o dia em que a conta é apresentada ' +
        'fechada e sem recurso.',
    },
    sanguine: {
      name: 'Sanguíneo',
      text:
        'O mais raro dos quatro num INTJ, e o mais desestabilizador — porque empresta ao tipo ' +
        'justamente aquilo que a pilha não fornece: presença, apetite pelo presente, facilidade ' +
        'com desconhecidos. Ele mexe na função inferior. Se, que normalmente é ponto cego, passa a ' +
        'ter voz: o corpo aparece, o agora aparece, o excesso aparece. É o INTJ que se testa como ' +
        'ENTP ou ENFP e passa anos duvidando do próprio tipo — sem perceber que o motor não mudou, ' +
        'só a temperatura em que ele funciona.',
    },
  },

  blends: {
    'melancholic-choleric': {
      deep: DEEP_MELANCHOLIC_CHOLERIC_PT,
      name: 'O perfeccionista implacável',
      summary: 'Planeja durante meses e depois avança sem hesitar um segundo.',
      asIntj: [
        'A ordem importa mais do que os ingredientes. Com o melancólico na frente, o padrão é ' +
          'definido <em>antes</em> de qualquer movimento: Ni converge, o melancólico eleva a ' +
          'régua, e nada acontece enquanto a solução não estiver íntegra por dentro. Só então o ' +
          'colérico secundário é acionado — e aí não há mais deliberação, porque a deliberação ' +
          'inteira já aconteceu em silêncio. É o INTJ que passa meio ano lendo, desenhando e ' +
          'descartando, e num sábado qualquer executa em oito horas o que os outros levariam ' +
          'semanas para começar.',
        'A força dessa combinação é a taxa de acerto: quando esse INTJ finalmente se move, ' +
          'costuma estar certo, porque o custo do erro foi pago adiantado. A fraqueza é que o ' +
          'colérico secundário não sabe reabrir nada. O plano é longo, caro e privado, e ' +
          'reconsiderá-lo em público equivaleria a admitir que o melancólico falhou na única ' +
          'coisa que ele acha que sabe fazer. Some-se Fi terciário, que trata padrão como valor, ' +
          'e o erro deixa de ser dado e vira dívida moral.',
      ],
      risk:
        'Autocrítica com juros. O padrão foi calibrado por Ni sem contato com o mundo, e o ' +
        'colérico secundário cobra o cumprimento dele de você mesmo antes de cobrar de qualquer ' +
        'outra pessoa. Rigidez tardia: mudar de rota depois de investir seis meses parece traição ' +
        'ao próprio julgamento.',
      atWork:
        'Excelente em projetos longos com entrega definida — arquitetura de sistemas, pesquisa ' +
        'aplicada, qualquer coisa em que a fase de projeto seja legítima. Péssimo em ambientes de ' +
        'requisito móvel, onde a régua muda toda semana e o tempo de preparo nunca é concedido.',
    },
    'melancholic-phlegmatic': {
      deep: DEEP_MELANCHOLIC_PHLEGMATIC_PT,
      name: 'O observador paciente',
      summary: 'A mesma profundidade, sem nenhuma urgência para convertê-la em ato.',
      asIntj: [
        'Aqui não há calor nenhum no sistema. Ni trabalha com toda a profundidade de sempre e não ' +
          'existe nada empurrando o resultado para fora — nem a pressa do colérico, nem o apetite ' +
          'do sanguíneo. É o INTJ que os outros descrevem como “tranquilo”, “gentil”, às vezes ' +
          '“sábio”, e que costuma ser o mais agradável de conviver dos doze, porque o julgamento ' +
          'severo permanece inteiro por dentro e quase nunca é despejado.',
        'O preço é Te. O pensamento extrovertido é a função que transforma visão em coisa que ' +
          'existe no mundo, e nesta combinação ele quase não recebe corrente. O padrão ' +
          'melancólico continua alto, o que produz o pior efeito colateral possível: a análise ' +
          'está pronta, é boa, e não é publicada — porque ainda não está boa o suficiente e ' +
          'porque nada obriga. Somam-se anos assim.',
      ],
      risk:
        'Adiamento sem dor aparente. Situações ruins duram porque encerrá-las exigiria um ' +
        'confronto, e o confronto custa mais do que a situação. Você aceita condições que um ' +
        'colérico teria rompido no primeiro mês, e chama isso de paciência.',
      atWork:
        'Pesquisa, documentação, curadoria, controle de qualidade, tudo que premie rigor e ' +
        'constância. Precisa de prazo externo e de alguém que peça a entrega: sem isso, o trabalho ' +
        'fica pronto e não sai da gaveta.',
    },
    'melancholic-sanguine': {
      deep: DEEP_MELANCHOLIC_SANGUINE_PT,
      name: 'O erudito intermitente',
      summary: 'Recolhimento longo, interrompido por episódios de calor genuíno.',
      asIntj: [
        'É a combinação mais contraditória das doze, e a mais mal compreendida por quem convive. ' +
          'A base é o recolhimento melancólico — semanas de silêncio, padrão alto, mundo interno ' +
          'denso. O sanguíneo secundário não desmonta isso; ele abre janelas. E as janelas se ' +
          'abrem por assunto, não por pessoa: basta alguém tocar no tema certo e o INTJ que estava ' +
          'inacessível fala com entusiasmo real por três horas, generoso, engraçado, presente.',
        'O problema é de leitura. Quem viu a janela aberta toma aquilo como linha de base e ' +
          'interpreta as duas semanas seguintes de silêncio como frieza deliberada ou punição. ' +
          'Não é nenhuma das duas: o sanguíneo se esgotou e o melancólico voltou a ocupar a casa ' +
          'inteira. A oscilação custa mais credibilidade do que qualquer um dos dois estados ' +
          'custaria sozinho, e é praticamente impossível de explicar sem parecer desculpa.',
      ],
      risk:
        'Ser lido como instável ou falso. E, por dentro, a ressaca: cada episódio de calor é ' +
        'seguido por uma auditoria melancólica do que você disse a mais, com vergonha ' +
        'retroativa por ter se mostrado.',
      atWork:
        'Ensino, palestra, mentoria, escrita — qualquer formato que aceite intensidade em blocos. ' +
        'Ruim em funções que exijam presença constante e disponibilidade uniforme, porque a ' +
        'uniformidade é exatamente o que esta combinação não tem.',
    },
    'choleric-melancholic': {
      deep: DEEP_CHOLERIC_MELANCHOLIC_PT,
      name: 'O comandante estratégico',
      summary: 'A decisão vem primeiro; a análise entra para servir à conquista.',
      asIntj: [
        'Inverta a ordem e você inverte a pessoa. Com o colérico na frente, Te dispara antes do ' +
          'trabalho de Ni ter terminado: a decisão é tomada cedo, com informação parcial, e a ' +
          'profundidade melancólica é convocada depois — para fundamentar, blindar e refinar o ' +
          'que já foi decidido. É o INTJ que assume o comando sem que ninguém tenha oferecido, ' +
          'que fala em conclusões e que trata a fase de discussão como imposto.',
        'O melancólico secundário é o que salva essa combinação de virar mera truculência. Ele ' +
          'traz a auditoria retrospectiva, o padrão técnico e a memória longa dos próprios erros ' +
          '— e é também o que a torna cara. Uma derrota não é esquecida: é arquivada, revisitada ' +
          'e transformada em critério. Por fora, o comandante segue impassível; por dentro, o ' +
          'melancólico processa a mesma falha durante anos.',
      ],
      risk:
        'Atropelar pessoas e queimar etapas de reflexão que só se revelam necessárias depois. ' +
        'Velocidade é confundida com acerto, e o secundário melancólico não corrige a rota — ' +
        'apenas registra o custo com precisão desnecessária.',
      atWork:
        'Reestruturações, crises, fundação de empresas, qualquer situação em que decidir mal seja ' +
        'melhor do que não decidir. Fraco em manutenção e em operações estáveis, onde a energia ' +
        'que ele traz não tem para onde ir e vira conflito.',
    },
    'choleric-phlegmatic': {
      deep: DEEP_CHOLERIC_PHLEGMATIC_PT,
      name: 'O executor silencioso',
      summary: 'Decide rápido — e depois fica quieto. As duas coisas são definitivas.',
      asIntj: [
        'O colérico dispara primeiro: Ni entrega a leitura, Te fecha a decisão, e isso acontece em ' +
          'minutos, às vezes em segundos. Então o fleumático secundário retira tudo que ' +
          'normalmente acompanha uma decisão colérica. Não há discurso, não há campanha, não há ' +
          'necessidade de convencer ninguém nem de ser concordado. O silêncio que se segue não é ' +
          'deliberação, e é aí que quase todo mundo erra a leitura: a deliberação já terminou. ' +
          'O que está acontecendo é a ausência completa de qualquer impulso de explicar.',
        'A segunda metade é o que torna a coisa irreversível. Uma decisão colérica sustentada por ' +
          'um temperamento colérico ainda seria discutível — coléricos brigam, e quem briga ' +
          'reabre. Mas manter uma posição não custa nada ao fleumático, então ela simplesmente ' +
          'permanece, sem atrito, por anos. Fi terciário faz o resto: o que magoou é arquivado ' +
          'inteiro em vez de dito, e quando a lâmina colérica finalmente aparece — um corte de ' +
          'relação, uma saída, um “não” sem apelação — parece súbita para todo mundo, exceto para ' +
          'você, que a viu concluída meses antes.',
      ],
      risk:
        'Decisões tomadas em segundos e mantidas por anos, porque a metade fleumática não reabre o ' +
        'que a metade colérica fechou. E subcomunicação crônica: você não explica porque não sente ' +
        'necessidade, e a calma é lida como consentimento por quem devia estar sendo avisado — ou ' +
        'como desprezo por quem esperava uma discussão.',
      atWork:
        'É quem encerra a reunião. Excelente em decisões irreversíveis, em contextos de risco e em ' +
        'qualquer papel que exija dizer não sem hesitar e sem precisar de plateia. Fraco em levar ' +
        'as pessoas junto: precisa de um ritual forçado — escrito, datado, curto — de expor o ' +
        'raciocínio que levou à decisão, porque espontaneamente ele nunca sai.',
    },
    'choleric-sanguine': {
      deep: DEEP_CHOLERIC_SANGUINE_PT,
      name: 'O fundador magnético',
      summary: 'O INTJ que menos parece introvertido, e o mais confundido com ENTJ.',
      asIntj: [
        'Duas fontes de calor e nenhuma de freio. O colérico entrega a decisão rápida e a fome de ' +
          'responsabilidade; o sanguíneo entrega presença, sedução e apetite pelo agora. Este é o ' +
          'INTJ que ocupa a sala, negocia bem, fala em público sem esforço aparente e é ' +
          'sistematicamente tipado como extrovertido por quem só o vê trabalhando — embora ' +
          'continue precisando de silêncio para pensar, e continue esgotado ao fim do dia.',
        'A função inferior aqui não é ignorada: ela é exercitada. Se ganha voz — velocidade, ' +
          'risco físico, prazer imediato — e o resultado é um INTJ que de fato vive no presente, ' +
          'com tudo de bom e de perigoso que isso implica. O que falta é a régua melancólica. ' +
          'Nada por dentro insiste que a coisa precise estar boa antes de sair, e Ni fica sem o ' +
          'tempo morto de que depende para convergir.',
      ],
      risk:
        'Assumir mais do que qualquer pessoa poderia entregar, ligar cinco projetos e concluir ' +
        'nenhum, e chegar ao esgotamento como quem é pego de surpresa — porque o corpo estava ' +
        'sendo ouvido apenas como fonte de estímulo, nunca como fonte de aviso.',
      atWork:
        'Fundação, vendas complexas, negociação, gestão de crise: qualquer coisa em que energia ' +
        'inicial valha mais do que constância. Precisa de um operador ao lado, com autoridade real ' +
        'para terminar o que você começou e para recusar o sexto projeto.',
    },
    'phlegmatic-melancholic': {
      deep: DEEP_PHLEGMATIC_MELANCHOLIC_PT,
      name: 'O arquivista imóvel',
      summary: 'A menor reatividade das doze, com o padrão mais alto de todos.',
      asIntj: [
        'É a combinação mais fria do conjunto e, provavelmente, a mais próxima do estereótipo ' +
          'popular do INTJ recluso. A base fleumática garante que nada perturbe: Ni roda por anos ' +
          'sem interrupção, sem crise e sem pressa, acumulando profundidade real. O melancólico ' +
          'secundário fornece a régua, mas nunca a urgência de aplicá-la. O resultado é uma ' +
          'competência silenciosa e genuína que quase ninguém em volta consegue estimar.',
        'A diferença em relação ao melancólico–fleumático é sutil e decisiva. Lá, o padrão ' +
          'comanda e dói — há sofrimento na obra não terminada. Aqui, o padrão é alto e não dói: ' +
          'o fleumático absorve a frustração antes que ela vire combustível. Por isso esta é a ' +
          'combinação com maior risco de uma vida inteira de preparo. Te praticamente não ' +
          'externaliza, e nada no sistema exige que a visão vire objeto no mundo.',
      ],
      risk:
        'Décadas dedicadas a ler, entender e organizar, com muito pouco publicado, construído ou ' +
        'reivindicado. Ver pessoas menos capazes ocuparem o lugar que era seu, sem sentir raiva ' +
        'suficiente para reagir — e reconhecer isso tarde demais para refazer.',
      atWork:
        'Especialização profunda, arquitetura de referência, documentação, pesquisa de longo ' +
        'prazo, revisão técnica. Catastrófico em qualquer função que dependa de iniciativa, ' +
        'autopromoção ou disputa por espaço.',
    },
    'phlegmatic-choleric': {
      deep: DEEP_PHLEGMATIC_CHOLERIC_PT,
      name: 'O sereno intransigente',
      summary: 'Calma como regra, lâmina como exceção — e a exceção não se negocia.',
      asIntj: [
        'É a imagem invertida do executor silencioso, e a inversão muda tudo. Aqui quem governa é ' +
          'o fleumático: o estado normal é a estabilidade, a paciência longa, a ausência de ' +
          'reatividade diante de provocação, prazo ou grosseria. O colérico não conduz — ele ' +
          'intervém. Fica adormecido durante meses e desperta inteiro quando uma linha de Fi é ' +
          'cruzada, ou quando a incompetência alheia passa de irritante a perigosa.',
        'Como o colérico aparece raro, ele aparece pesado. As pessoas em volta aprendem a ler a ' +
          'temperatura desse INTJ com uma atenção que nunca dedicariam a alguém que se exalta ' +
          'toda semana, e um único “não” dito nesse tom encerra o assunto de forma permanente. ' +
          'O custo está no atraso: enquanto o fleumático administra, a situação apodrece, e a ' +
          'intervenção colérica chega quando já não há o que salvar — só o que interromper.',
      ],
      risk:
        'Agir tarde. Você tolera por tempo demais e depois corta de forma desproporcional ao ' +
        'último episódio — que era pequeno, mas foi o vigésimo. Aos olhos dos outros, as raras ' +
        'explosões definem você mais do que os anos de calma.',
      atWork:
        'O sênior que todo mundo consulta antes de decidir, e o melhor sob pressão real, porque a ' +
        'crise não altera seu estado interno. Difícil de mover em prioridade: quando não vê motivo ' +
        'para mudar, você não muda, e não sente obrigação de justificar.',
    },
    'phlegmatic-sanguine': {
      deep: DEEP_PHLEGMATIC_SANGUINE_PT,
      name: 'O anfitrião discreto',
      summary: 'O INTJ mais quente e o menos impulsionado dos doze.',
      asIntj: [
        'Duas fontes de tranquilidade e nenhuma de exigência. A base fleumática remove a urgência ' +
          'e o sanguíneo secundário acrescenta simpatia genuína: este é o INTJ de quem as pessoas ' +
          'gostam sem reservas, que ouve bem, que não intimida e que ninguém descreveria como ' +
          'arrogante ou frio. É também, de longe, aquele em que Te é menos visível.',
        'Ni continua funcionando com a mesma precisão de sempre — você enxerga o desfecho, ' +
          'reconhece a incompetência, sabe qual seria a decisão correta. Só que nada no sistema ' +
          'converte isso em ação, e o custo é a ambição. Com o tempo, aparece um ressentimento ' +
          'de tipo específico: assistir a alguém receber crédito por uma solução que você já ' +
          'tinha inteira na cabeça e nunca teve calor suficiente para defender.',
      ],
      risk:
        'Deriva agradável. Ser querido em vez de ser eficaz, aceitar cargos e relações abaixo da ' +
        'própria capacidade, e descobrir aos quarenta que a gentileza foi o nome dado à ausência ' +
        'de exigência.',
      atWork:
        'Trabalho em equipe, suporte, ensino, mediação, funções em que a temperatura baixa é ' +
        'valiosa. Depende inteiramente de meta e prazo vindos de fora; sem isso, o dia se preenche ' +
        'sozinho com coisas razoáveis e irrelevantes.',
    },
    'sanguine-melancholic': {
      deep: DEEP_SANGUINE_MELANCHOLIC_PT,
      name: 'O entusiasta que desaba',
      summary: 'Ignição imediata seguida de auditoria interna impiedosa.',
      asIntj: [
        'O sanguíneo acende primeiro, e num INTJ ele acende com material perigoso: Ni já mostra a ' +
          'obra pronta, inteira e brilhante, antes de qualquer linha ser escrita. A euforia é ' +
          'real e a visão é boa. Então o melancólico secundário entra e faz o que sabe fazer — ' +
          'compara o que existe com o que foi visto, mede a distância, e conclui, com razão, que ' +
          'o que existe é indigno.',
        'O ciclo se repete até virar identidade: começar, ver o abismo entre a versão imaginada e ' +
          'a versão possível, parar. O que se acumula não são obras, e sim inícios — pastas, ' +
          'repositórios, cadernos, cada um com as vinte melhores páginas de algo que nunca teve ' +
          'a vigésima primeira. E cada abandono alimenta a tese melancólica de que você não ' +
          'termina nada, o que torna o próximo abandono mais provável.',
      ],
      risk:
        'Um portfólio inteiro de começos e um desprezo por si mesmo bem argumentado. O perigo ' +
        'específico é que o melancólico está tecnicamente certo em cada avaliação isolada e ' +
        'completamente errado no conjunto.',
      atWork:
        'Geração de ideias, prototipagem, propostas, momentos iniciais de projeto. Precisa de ' +
        'entrega em fatias curtas, revisão externa e alguém que impeça a reescrita do que já ' +
        'estava bom — de preferência com autoridade para dizer que acabou.',
    },
    'sanguine-choleric': {
      deep: DEEP_SANGUINE_CHOLERIC_PT,
      name: 'O agitador de projetos',
      summary: 'O mais rápido, o mais ruidoso e o menos parecido com o estereótipo.',
      asIntj: [
        'Calor sobre calor. O sanguíneo entrega apetite e o colérico entrega força, e o conjunto ' +
          'produz um INTJ que parece qualquer coisa menos um INTJ: rápido, expansivo, ' +
          'confrontador, sempre em movimento. Muita gente com esta combinação passa a vida ' +
          'convencida de ter feito o teste errado, sem perceber que a estrutura por baixo não ' +
          'mudou — Ni continua convergindo, Te continua organizando —, apenas foi acelerada ' +
          'a ponto de ficar irreconhecível.',
        'É aqui que a função inferior cobra mais caro. Se sem contrapeso melancólico vira excesso ' +
          'sensorial com justificativa estratégica: viagens, corpo levado ao limite, decisões ' +
          'tomadas na velocidade do estímulo. E Ni, que precisa de tédio e silêncio para ' +
          'convergir, quase nunca os recebe. O horizonte encolhe de anos para semanas, e o INTJ ' +
          'perde exatamente a vantagem que definia o tipo.',
      ],
      risk:
        'Excesso sensorial, compromissos assumidos em série e um colapso que chega sem aviso ' +
        'porque não havia nenhuma função monitorando o custo. É a combinação com maior chance de ' +
        'confundir agitação com estratégia.',
      atWork:
        'Lançamentos, expansão, vendas, gestão de crise — contextos em que velocidade é a variável ' +
        'crítica. Precisa de silêncio imposto por calendário, não por vontade: sem blocos ' +
        'protegidos de tédio, a vantagem estratégica do tipo simplesmente não se forma.',
    },
    'sanguine-phlegmatic': {
      deep: DEEP_SANGUINE_PHLEGMATIC_PT,
      name: 'O INTJ mais leve',
      summary: 'Nenhuma urgência, nenhuma dureza — e nenhuma conversão de visão em ato.',
      asIntj: [
        'A combinação menos característica do tipo, e a que mais produz dúvida sobre o próprio ' +
          'resultado no teste. Calor sem pressa e simpatia sem exigência: um INTJ leve de ' +
          'convivência, flexível, avesso a conflito, que costuma ser lido como INFP ou ISFP por ' +
          'quem tipa de fora. Nada nesta pessoa parece o estrategista implacável do folclore.',
        'E ainda assim o motor está intacto. As conclusões de Ni chegam com a mesma certeza ' +
          'desconfortável, o julgamento de Te continua afiado e privado, os valores de Fi ' +
          'continuam inegociáveis. O que falta é temperatura: nenhuma das duas metades fornece a ' +
          'corrente necessária para empurrar o que se viu para fora da cabeça. Você sabe, ' +
          'consistentemente, coisas que nunca chega a fazer nada a respeito.',
      ],
      risk:
        'Desperdiçar o único dom que o tipo realmente tem — a visão de longo prazo executada — em ' +
        'nome de não incomodar ninguém. E acumular, sem drama e sem raiva, uma década de planos ' +
        'que ninguém além de você jamais soube que existiram.',
      atWork:
        'Colega excelente, executor fraco. Rende quando alguém de fora fornece estrutura, meta e ' +
        'prazo, e quando existe um compromisso público que torne o adiamento visível. Sozinho, ' +
        'e sem prestação de contas, este é o perfil que menos entrega.',
    },
  },
};
