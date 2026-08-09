import {
  DEEP_T125_PT,
  DEEP_T126_PT,
  DEEP_T127_PT,
  DEEP_T135_PT,
  DEEP_T136_PT,
  DEEP_T137_PT,
  DEEP_T145_PT,
  DEEP_T146_PT,
  DEEP_T147_PT,
} from './deep/tritypes-a';
import {
  DEEP_T258_PT,
  DEEP_T268_PT,
  DEEP_T278_PT,
  DEEP_T358_PT,
  DEEP_T368_PT,
  DEEP_T378_PT,
  DEEP_T458_PT,
  DEEP_T468_PT,
  DEEP_T478_PT,
} from './deep/tritypes-b';
import {
  DEEP_T259_PT,
  DEEP_T269_PT,
  DEEP_T279_PT,
  DEEP_T359_PT,
  DEEP_T369_PT,
  DEEP_T379_PT,
  DEEP_T459_PT,
  DEEP_T469_PT,
  DEEP_T479_PT,
} from './deep/tritypes-c';
import { FOCUS_TRITIPOS_PT } from './deep/focus';
import type { TritypesContent } from '../types';

export const TRITIPOS_PT: TritypesContent = {
  focus: FOCUS_TRITIPOS_PT,
  meta: {
    title: 'Tritipos — os 27 arquétipos de Fauvre aplicados ao INTJ',
    description:
      'Os 27 tritipos, um a um, lidos sobre a pilha Ni–Te: qual fixação move a visão, qual move ' +
      'a execução e qual só aparece quando você quebra.',
  },

  sources: ['fauvre-tritype', 'riso-hudson-1999', 'naranjo-1994', 'hook-2021'],

  header: {
    eyebrow: 'Aprofundamento 02 — Tritipos',
    title: 'Três motivações\ndentro de um só motor',
    lede:
      'Um eneatipo diz o que te move. Katherine Chernick Fauvre propôs que ninguém tem só um: ' +
      'que você carrega uma fixação em cada centro e que as três negociam o tempo todo. Num ' +
      'INTJ a negociação é desigual — <strong>o centro mental costuma alimentar Ni, o ' +
      'instintivo costuma dirigir Te, e o emocional é o que menos encontra linguagem</strong>, ' +
      'até vazar. Aqui estão as 27 combinações, uma a uma.',
  },

  intro:
    'Vale separar duas coisas antes de descer para a lista. O <em>arquétipo</em> é o conjunto: ' +
    'um tipo do centro instintivo, um do emocional, um do mental — 27 combinações, e é contra ' +
    'elas que este texto foi escrito. O tritipo de <em>uma pessoa</em> é esse mesmo conjunto em ' +
    'ordem de dominância, o que é outra informação. E há uma terceira coisa aqui que Fauvre não ' +
    'faz: cruzar as três fixações com a pilha cognitiva. Isso é leitura, não achado — ninguém ' +
    'testou nada disso, e a próxima nota explica por quê.',

  caveat:
    'Tritype® é modelo e marca registrada de Katherine Chernick Fauvre, que o desenvolve desde ' +
    'meados dos anos 1990; os registros no USPTO (6.474.587 e 6.558.145) foram concedidos em ' +
    '2021. Fauvre atribui o termo ' +
    'Trifix™ a Óscar Ichazo — não é, como se repete por aí, uma gambiarra da comunidade para ' +
    'contornar a marca dela. Os três centros são bem anteriores ao tritipo: vêm da linhagem ' +
    'Ichazo–Naranjo e chegaram ao leitor de língua inglesa sistematizados por Riso e Hudson. ' +
    'Sobre os tritipos em si não existe literatura revisada por pares — nenhuma. A revisão ' +
    'sistemática de Hook e colegas (2021) varreu 104 amostras de pesquisa sobre eneagrama e não ' +
    'encontrou um único estudo sobre o modelo de três fixações. Leia esta página como um ' +
    'vocabulário para se descrever, jamais como um resultado.',

  centreLabels: {
    gut: 'Instintivo · corpo e raiva',
    heart: 'Emocional · imagem e mágoa',
    head: 'Mental · medo e cálculo',
  },

  labels: {
    archetype: 'Arquétipo de Fauvre',
    asIntj: 'Rodando em Ni–Te',
    centres: 'Centros',
    orderNote:
      'Os 27 arquétipos são conjuntos, não sequências: um tipo do centro instintivo (8, 9, 1), ' +
      'um do emocional (2, 3, 4) e um do mental (5, 6, 7), sem ordem interna — por isso estão ' +
      'escritos aqui em dígitos crescentes. O tritipo de uma pessoa é outra coisa: é o mesmo ' +
      'conjunto escrito em ordem de dominância, com o eneatipo central na frente. O arquétipo ' +
      '358 aparece então como 358, 385, 538, 583, 835 ou 853, dependendo de quem está falando ' +
      '— seis rótulos para a mesma sala, mudando só quem senta à cabeceira. E a diferença ' +
      'importa: um 3 principal com 5 e 8 atrás não é um 8 principal com 3 e 5 atrás, ainda que ' +
      'a página que descreve os dois seja esta mesma.',
    filterAll: 'Todos os 27',
    filterMine: 'Só os que contêm o meu eneatipo',
  },

  tritypes: {
    '125': {
      deep: DEEP_T125_PT,
      name: 'O Mentor · “The Mentor” (Fauvre)',
      text:
        'Rigor, atenção ao outro e fome de conhecimento na mesma pessoa: sabe muito, quer que ' +
        'você melhore e mede o próprio valor pelo que conseguiu transmitir.',
      asIntj:
        'A visão vem do 5: Ni se alimenta de anos de estudo privado e só converge quando o ' +
        'arquivo está cheio. A execução vem do 1, e Te vira correção — você não constrói um ' +
        'sistema, você conserta o que está torto. O 2 é a parte que quase ninguém enxerga num ' +
        'INTJ, porque não há Fe aqui para exibi-la: ela não aparece como calor, aparece como ' +
        'aula não pedida. Você entrega três horas do seu raciocínio a alguém e chama isso de ' +
        'ajuda. Sob estresse é o 2 que apodrece primeiro — a pessoa não usou o que você deu, e ' +
        'o 1 transforma a decepção em veredito moral sobre ela. Este tritipo erra ao supor que ' +
        'ensinar e se aproximar são a mesma operação.',
    },
    '126': {
      deep: DEEP_T126_PT,
      name: 'O Apoiador · “The Supporter” (Fauvre)',
      text:
        'Dever, vigilância e cuidado. É a combinação que sustenta a estrutura por baixo, prevê ' +
        'o que vai falhar e se responsabiliza por gente que nem pediu.',
      asIntj:
        'O 6 é quem dirige Ni: a intuição não procura o futuro mais interessante, procura o ' +
        'ponto exato onde tudo desaba, e chega lá com uma precisão desconfortável. Te executa ' +
        'pela via do 1 — norma, procedimento, o modo certo documentado. O 2 escolhe por quem ' +
        'tudo isso é feito e é a única parte da estrutura sem linguagem própria: você mantém ' +
        'uma organização inteira de pé e nunca diz que precisaria que alguém notasse. Sob ' +
        'estresse, a dúvida do 6 se volta contra as pessoas que você sustenta, e você começa a ' +
        'testar lealdade em vez de pedir apoio. É um INTJ que raramente é traído e que se sente ' +
        'traído com frequência.',
    },
    '127': {
      deep: DEEP_T127_PT,
      name: 'O Professor · “The Teacher” (Fauvre)',
      text:
        'Ideias em abundância, padrão alto e vontade de transmitir. Ensina, anima, expande — e ' +
        'promete mais do que o dia comporta.',
      asIntj:
        'O 7 briga com Ni: onde a intuição introvertida quer estreitar até sobrar uma linha, o ' +
        '7 abre leques. O resultado é um INTJ menos monolítico e mais fértil, que gera cinco ' +
        'planos em vez de um e depende inteiramente do 1 para terminar qualquer coisa — Te vira ' +
        'o adulto da sala, o único que fecha escopo. O 2 é o que faz você explicar tudo isso em ' +
        'voz alta para quem não pediu. Sob estresse o 7 foge do desconforto para o projeto ' +
        'seguinte, o 1 pune a fuga, e o 2 aparece na sua pior forma: a conta do que você fez ' +
        'pelos outros, apresentada com juros.',
    },
    '135': {
      deep: DEEP_T135_PT,
      name: 'O Perito Técnico · “The Technical Expert” (Fauvre)',
      text:
        'Padrão, eficiência e domínio técnico. É a combinação da competência demonstrada: sabe ' +
        'fazer, faz bem feito e faz melhor do que quem está ao lado.',
      asIntj:
        'Talvez o tritipo que mais se parece com o estereótipo do próprio tipo. O 5 alimenta Ni ' +
        'com material — nada é dito antes de estar dominado. A execução, porém, tem dois donos, ' +
        'e é aí que mora a fricção: o 3 quer entregue, o 1 quer certo, e Te fica no meio, ' +
        'refazendo dez vezes e ainda assim mandando antes do prazo. Aqui o centro emocional não ' +
        'está enterrado, o que é raro nesta pilha: o 3 é visível, e é ele quem faz o trabalho ' +
        'valer como prova de valor. Sob estresse o 5 se retira, o 1 mói, e o 3 mantém a fachada ' +
        'intacta enquanto isso — você segue produzindo com competência exemplar por meses ' +
        'depois de já ter acabado por dentro.',
    },
    '136': {
      deep: DEEP_T136_PT,
      name: 'O Capataz · “The Taskmaster” (Fauvre)',
      text:
        'Responsabilidade, antecipação e execução implacável. Assume a tarefa que ninguém quer, ' +
        'faz do jeito certo e cobra o mesmo dos outros.',
      asIntj:
        'O 6 dá a Ni uma orientação defensiva: você prevê o colapso, e prevê bem. Te sai ' +
        'duplamente carregado — o 1 exige norma, o 3 exige entrega — e o resultado é um INTJ ' +
        'que vira instituição sozinho, imprescindível e exausto. É a combinação que mais ' +
        'confunde dever com escolha. Sob estresse, a antecipação do 6 vira desconfiança ' +
        'generalizada: você para de delegar porque ninguém faz direito, o que costuma ser ' +
        'verdade e é também o começo do fim. O 3 impede que alguém veja isso acontecendo, e o 1 ' +
        'garante que você trate o próprio esgotamento como desleixo.',
    },
    '137': {
      deep: DEEP_T137_PT,
      name: 'O Construtor de Sistemas · “The Systems Builder” (Fauvre)',
      text:
        'Visão ampla, padrão alto e apetite por realizar. Constrói estruturas grandes e já está ' +
        'pensando na próxima antes de a atual ficar pronta.',
      asIntj:
        'Ni aqui não estreita — o 7 mantém o leque aberto, e a intuição funciona menos como ' +
        'profecia e mais como geração de rotas. A execução é feroz: o 3 quer resultado, o 1 ' +
        'quer resultado impecável, e Te tem combustível de sobra. É provavelmente o tritipo ' +
        'mais bem-sucedido por fora que um INTJ pode ter, e o mais difícil de frear. O centro ' +
        'emocional está à mostra, não soterrado: o que você constrói é quem você é. Sob ' +
        'estresse o 7 escapa para o projeto seguinte antes de sentir qualquer coisa, o 3 ' +
        'aumenta o volume da produção e o 1 chama isso de indisciplina. Se inferior chega cedo ' +
        'aqui — o corpo cobra a conta que as três fixações se recusam a abrir.',
    },
    '145': {
      deep: DEEP_T145_PT,
      name: 'O Pesquisador · “The Researcher” (Fauvre)',
      text:
        'Profundidade, princípio e singularidade. A combinação que investiga até o fim, ' +
        'sozinha, e não aceita a resposta fácil que todo mundo aceitou.',
      asIntj:
        'A visão tem dois alimentadores: o 5 traz material e o 4 traz o ângulo — Ni converge ' +
        'sobre uma leitura que é sua e de mais ninguém, que é exatamente a sensação que o 4 ' +
        'persegue. A execução é inteiramente do 1, e Te fica pequeno: não organiza o mundo, ' +
        'organiza a própria obra, com um padrão que quase nada satisfaz. É o INTJ acadêmico no ' +
        'sentido literal — arquivo, método, trabalho longo. Sob estresse o 4 pega o crítico ' +
        'interno do 1 e o converte em vergonha, que é outra coisa: erro deixa de ser informação ' +
        'e vira prova de insuficiência pessoal. Aí o 5 fecha a porta, e essa retirada pode ' +
        'durar anos.',
    },
    '146': {
      deep: DEEP_T146_PT,
      name: 'O Filósofo · “The Philosopher” (Fauvre)',
      text:
        'Dúvida honesta, profundidade e senso moral. Examina a própria convicção com o mesmo ' +
        'rigor com que examina a dos outros — e não conclui fácil.',
      asIntj:
        'Este é o tritipo que sabota a certeza do INTJ, e isso é meio dom, meio maldição. Ni ' +
        'entrega a conclusão inteira, como sempre; o 6 imediatamente a interroga, o 4 pergunta ' +
        'se ela é honesta ou apenas bonita, e o 1 pergunta se ela é correta. Te executa sobre ' +
        'um terreno que nenhum dos três declara firme, então a ação chega tarde e muito bem ' +
        'fundamentada. É o INTJ que faz filosofia mesmo trabalhando com outra coisa. Sob ' +
        'estresse as três fixações se travam mutuamente: toda posição é duvidada, toda dúvida é ' +
        'pessoal, toda falha é moral — e a paralisia é lida de fora como preguiça, que é a ' +
        'acusação mais injusta que se pode fazer aqui.',
    },
    '147': {
      deep: DEEP_T147_PT,
      name: 'O Visionário · “The Visionary” (Fauvre)',
      text:
        'Imaginação larga, ideal alto e inquietação constante. Vê o que poderia existir com uma ' +
        'nitidez quase dolorosa — e sofre a distância até lá.',
      asIntj:
        'A visão é a mais ampla das 27 e a menos convergida: o 7 multiplica futuros e o 4 exige ' +
        'que cada um signifique alguma coisa, então Ni trabalha com material demais. A execução ' +
        'depende inteiramente do 1 — sem ele nada aqui terminaria, e mesmo com ele o acabamento ' +
        'é sofrido. O centro emocional está na frente, não escondido: o que você faz precisa ' +
        'ser inconfundivelmente seu. Sob estresse o 4 mede a obra contra a imagem interna dela ' +
        'e decreta fracasso, o 7 sai correndo para a ideia seguinte, e o 1 condena os dois. É o ' +
        'tritipo que mais produz INTJs brilhantes com um portfólio de coisas inacabadas.',
    },
    '258': {
      deep: DEEP_T258_PT,
      name: 'O Estrategista · “The Strategist” (Fauvre)',
      text:
        'Saber, força e vínculo. Junta inteligência estratégica com disposição para o confronto ' +
        'e uma lealdade seletiva que decide em nome de quem a força é usada.',
      asIntj:
        'A visão é do 5: Ni só se pronuncia depois de mapear o terreno inteiro, e aqui o ' +
        'mapeamento inclui quem tem poder sobre quem. A execução é do 8, e Te perde toda a ' +
        'hesitação — você não propõe, você toma posição, e aceita o custo político de antemão. ' +
        'O 2 é a parte invisível e a mais importante: essa força não é exercida no vazio, é ' +
        'exercida em nome de alguém. É o INTJ que vira eminência parda de outra pessoa e a ' +
        'defende com uma ferocidade desproporcional. Sob estresse o 2 cobra: você protegeu, ' +
        'dirigiu, resolveu — e o 8 converte a falta de reconhecimento em dívida. Poucas coisas ' +
        'machucam mais este tritipo do que ser indispensável e dispensável ao mesmo tempo.',
    },
    '268': {
      deep: DEEP_T268_PT,
      name: 'O Socorrista · “The Rescuer” (Fauvre)',
      text:
        'Vigilância, coragem e proteção. Vê a ameaça, decide de que lado está e entra — a ' +
        'combinação que se coloca fisicamente entre o perigo e os seus.',
      asIntj:
        'Sem o 5, Ni não é alimentada por arquivo e sim por leitura de ameaça: o 6 põe a ' +
        'intuição a serviço da segurança de um grupo, e ela acerta cedo demais para o conforto ' +
        'alheio. Te sai pelo 8 — direto, sem pedir licença, com uma agressividade que os INTJs ' +
        'mais teóricos não têm. O 2 define o círculo, e o círculo é pequeno. É o INTJ de ' +
        'trincheira: ruim de política, excelente de crise. Sob estresse a desconfiança do 6 se ' +
        'volta para dentro do próprio círculo e o 8 escala antes de verificar — você fabrica ' +
        'inimigo onde havia apenas erro, enquanto o 2 se magoa com a fatura de tudo que fez.',
    },
    '278': {
      deep: DEEP_T278_PT,
      name: 'O Espírito Livre · “The Free Spirit” (Fauvre)',
      text:
        'Apetite, generosidade e potência. Quer tudo, oferece muito, não pede permissão. É a ' +
        'mais expansiva das 27 e a que menos tolera limite.',
      asIntj:
        'Provavelmente o tritipo mais raro num INTJ, porque nada aqui fica parado tempo ' +
        'suficiente para Ni convergir. O 7 dá à intuição um apetite que ela não costuma ter: ' +
        'oportunidade em vez de inevitabilidade, e a leitura do futuro sai otimista de um jeito ' +
        'que este tipo raramente é. A execução é do 8, imediata e sem consulta. O 2 aparece ' +
        'como largueza — você banca, patrocina, abre portas, e isso é uma forma de poder que ' +
        'este tritipo entende muito bem. Sob estresse o caminho até Se inferior é curtíssimo: o ' +
        '7 não aceita desconforto, o 8 não aceita limite, e a saída é excesso físico — ' +
        'trabalho, comida, gasto, velocidade — enquanto o 2 se convence de que merecia mais do ' +
        'que recebeu.',
    },
    '358': {
      deep: DEEP_T358_PT,
      name: 'O Mestre das Soluções · “The Solution Master” (Fauvre)',
      text:
        'A combinação que resolve: sabe o suficiente, entrega o resultado e assume o comando ' +
        'quando ninguém mais assume. Eficácia vivida como identidade.',
      asIntj:
        'As três fixações concordam entre si e concordam com Ni–Te — é isso que torna este ' +
        'tritipo tão eficaz e tão difícil de habitar. A visão é do 5: Ni não fala antes de ter ' +
        'substrato, e o hábito de dominar um assunto inteiro antes de opinar nasce daqui. A ' +
        'execução é do 8: Te não propõe, ocupa — decide rápido, aceita o atrito e trata ' +
        'autoridade incompetente como obstáculo removível. E o 3, ao contrário do que costuma ' +
        'acontecer nesta pilha, não fica enterrado: é ele quem converte entendimento em entrega ' +
        'e entrega em valor pessoal, e é ele quem mantém a fachada de pé depois que o resto já ' +
        'cedeu. Repare no que falta. Nenhuma das três defende o repouso: o 5 diz que você ainda ' +
        'não está pronto, o 3 diz que precisa provar agora, o 8 diz que fraqueza é exposição. ' +
        'Fi terciário — a única função capaz de dizer o que você sente — não tem um único ' +
        'aliado neste tritipo. Sob estresse a ordem quase não varia: o 5 desaparece primeiro ' +
        '(você para de responder), o 8 endurece em seguida (o que sai como desprezo e é medo), ' +
        'e o 3 cai por último, então a fachada segue funcionando por meses depois do fim. O ' +
        'grip em Se chega disfarçado de produtividade. E o movimento que resolve é justamente o ' +
        'que nenhuma das três vai sugerir: deixar alguém te conhecer antes de você estar ' +
        'competente.',
    },
    '368': {
      deep: DEEP_T368_PT,
      name: 'O Lutador pela Justiça · “The Justice Fighter” (Fauvre)',
      text:
        'Convicção, coragem e realização. Vê a injustiça, monta o caso e o vence — a combinação ' +
        'que confronta poder e leva a briga até o fim.',
      asIntj:
        'O 6 comanda Ni, e a intuição fica com um viés bem específico: você não prevê o futuro ' +
        'em geral, prevê quem vai abusar de quê. A execução é do 8 e não é simbólica — Te monta ' +
        'o caso, junta a evidência e escolhe o momento. O 3 dá o acabamento público: você não ' +
        'briga mal, briga bem, e a vitória precisa ser visível. É um INTJ perigoso como inimigo ' +
        'e desconfortável como aliado, porque o padrão de lealdade que ele aplica é o mesmo que ' +
        'cobra. Sob estresse a desconfiança do 6 e a escalada do 8 se realimentam: você ' +
        'promove um erro comum a traição, e o 3 impede o recuo, porque recuar seria admitir que ' +
        'leu errado.',
    },
    '378': {
      deep: DEEP_T378_PT,
      name: 'O Agitador · “The Mover Shaker” (Fauvre)',
      text:
        'Energia, ambição e presença. Move as coisas, arrasta gente junto e mede o dia pelo que ' +
        'aconteceu nele.',
      asIntj:
        'De longe o tritipo que menos parece INTJ visto de fora. O 7 impede Ni de fechar, então ' +
        'a intuição vira antena de oportunidade em vez de linha única de destino — você enxerga ' +
        'longe, mas em várias direções ao mesmo tempo. A execução tem dois motores, 3 e 8, e Te ' +
        'roda a plena carga: decisão rápida, escala, resultado visível. O centro emocional está ' +
        'exposto, não soterrado, e o preço é conhecido — o valor pessoal cola no que aconteceu ' +
        'nesta semana. Sob estresse nada aqui sabe ficar quieto: o 7 não tolera vazio, o 8 não ' +
        'tolera espera, o 3 não tolera parecer parado, e Se inferior chega cedo e com força, ' +
        'como excesso físico apresentado em forma de merecimento. É a combinação em que um INTJ ' +
        'mais facilmente perde o próprio horizonte longo por excesso de movimento.',
    },
    '458': {
      deep: DEEP_T458_PT,
      name: 'O Erudito · “The Scholar” (Fauvre)',
      text:
        'Profundidade, singularidade e força. Sabe muito, sabe que sabe e não tem paciência ' +
        'nenhuma com quem fala do que não estudou.',
      asIntj:
        'A visão é a mais privada das 27: o 5 fornece o material e o 4 exige que a leitura seja ' +
        'original, então Ni converge sobre algo que ninguém mais teria montado — e sobra a ' +
        'sensação, em geral correta e sempre isolante, de estar vendo uma coisa que a sala não ' +
        'vê. A execução é do 8, e é ela que impede este tritipo de ser inofensivo: você não ' +
        'guarda a conclusão, você a diz uma vez, inteira, sem amortecimento. O centro emocional ' +
        'está na frente, mas em versão orgulhosa — a diferença é vivida como qualidade, não ' +
        'como falta. Sob estresse os três colaboram na mesma direção: o 4 sente que ninguém é ' +
        'do mesmo mundo, o 5 fecha a porta, o 8 despreza — e a espiral do “terminei com as ' +
        'pessoas” é o modo de falha clássico daqui.',
    },
    '468': {
      deep: DEEP_T468_PT,
      name: 'O Arauto da Verdade · “The Truth Teller” (Fauvre)',
      text:
        'Intensidade, dúvida e franqueza sem freio. Diz em voz alta o que a sala inteira está ' +
        'pensando e ninguém tem coragem de dizer.',
      asIntj:
        'Sem 5 e sem 3, este tritipo não tem nem o hábito de recuar para estudar nem o instinto ' +
        'de cuidar da própria imagem — o que sobra é muito direto. O 6 dirige Ni para a ' +
        'inconsistência: você percebe a mentira antes do argumento, e frequentemente antes de ' +
        'conseguir explicá-la. A execução é do 8, imediata; o 4 faz da verdade um assunto ' +
        'pessoal, e é por isso que ela sai com carga. É o INTJ que fala aquilo na reunião. Sob ' +
        'estresse a suspeita do 6 ganha a intensidade do 4 e o gume do 8: você não fica apenas ' +
        'desconfiado, fica ofendido, e a resposta é desproporcional. Este tritipo precisa de ' +
        'gente que aguente franqueza e avise quando ela passou do ponto — e costuma já ter ' +
        'afastado exatamente essas pessoas.',
    },
    '478': {
      deep: DEEP_T478_PT,
      name: 'O Mensageiro · “The Messenger” (Fauvre)',
      text:
        'Intensidade pura: apetite, profundidade e potência sem nada que atenue. Vive alto, ' +
        'sente demais e não consegue fingir que está tudo bem.',
      asIntj:
        'A pilha Ni–Te tem dificuldade real em segurar este tritipo, e é dessa tensão que ele ' +
        'vive. O 7 e o 4 alimentam a visão juntos e em conflito — um quer mais mundo, o outro ' +
        'quer o mundo que falta — e Ni fica com material intenso e mal convergido. A execução é ' +
        'do 8, então o que é sentido vira ação depressa demais para passar por Te. Nada aqui é ' +
        'morno. É o INTJ que parece um tipo sensorial por fora e é inteiramente interior por ' +
        'dentro, e que confunde os dois em si mesmo. Sob estresse os três empurram para fora ao ' +
        'mesmo tempo: excesso, ruptura, saída dramática de situações que dariam para consertar. ' +
        'O trabalho de uma vida aqui é lento e é um só — deixar Te chegar antes do 8.',
    },
    '259': {
      deep: DEEP_T259_PT,
      name: 'O Solucionador de Problemas · “The Problem Solver” (Fauvre)',
      text:
        'Saber a serviço de alguém, em ritmo tranquilo. Resolve o problema do outro com ' +
        'competência, sem alarde e sem apresentar a fatura.',
      asIntj:
        'A visão é do 5 e é sólida. A execução é do 9, e é aí que este tritipo diverge de quase ' +
        'tudo que se diz sobre INTJ: Te fica competente e avesso a atrito, capaz de montar o ' +
        'plano inteiro e não brigar por ele. Você resolve em silêncio, não reivindica autoria, ' +
        'e uma carreira inteira pode passar assim. O 2 explica por que você continua entrando: ' +
        'ser necessário é o que dá lastro, ainda que isso nunca seja dito em voz alta. Sob ' +
        'estresse os três somem de maneiras diferentes — o 9 anestesia, o 5 se tranca, o 2 ' +
        'acumula uma mágoa que nunca foi verbalizada porque nunca houve pedido. É o tritipo que ' +
        'mais precisa aprender a pedir e o que menos acredita ter direito a isso.',
    },
    '269': {
      deep: DEEP_T269_PT,
      name: 'O Bom Samaritano · “The Good Samaritan” (Fauvre)',
      text:
        'Cuidado, lealdade e conciliação. Segura o grupo inteiro, evita a ruptura e coloca a ' +
        'própria necessidade por último, sempre.',
      asIntj:
        'É provavelmente o tritipo menos afim a esta pilha: três fixações organizadas em torno ' +
        'de outras pessoas, montadas sobre um motor que decide sozinho. O 6 dirige Ni para o ' +
        'risco relacional — você prevê onde o grupo vai rachar, e prevê com antecedência ' +
        'incômoda. A execução passa pelo 9, o que significa um Te estranhamente sem gume: você ' +
        'planeja bem e cede rápido. O 2 é quem faz tudo isso valer a pena. Sob estresse nada é ' +
        'dito: o 9 se ausenta sem sair da sala, o 6 desconfia sem perguntar, o 2 se magoa sem ' +
        'informar — e a única coisa visível do lado de fora é uma frieza súbita que ninguém ' +
        'entende, você inclusive.',
    },
    '279': {
      deep: DEEP_T279_PT,
      name: 'O Pacificador · “The Peacemaker” (Fauvre)',
      text:
        'Leveza, generosidade e paz. Quer que todo mundo esteja bem e que nada precise doer — e ' +
        'é surpreendentemente eficaz nisso.',
      asIntj:
        'A visão é do 7, ampla e otimista de um jeito que quase nunca se atribui a este tipo. A ' +
        'execução, porém, não tem quem a empurre: o 9 não pressiona e o 2 pressiona por outros, ' +
        'nunca por si — então toda a força de realização precisa vir do próprio Te, sem ' +
        'combustível de fixação nenhuma. Este é o INTJ cujos planos são muito bons e ficam ' +
        'guardados. O centro emocional aparece como disponibilidade, não como ambição. Sob ' +
        'estresse os três concordam em evitar: o 7 troca de assunto, o 9 adia, o 2 aceita mais ' +
        'uma coisa que não queria — e a conta chega como um cansaço sem causa localizável e um ' +
        'ressentimento que não se autoriza a existir.',
    },
    '359': {
      deep: DEEP_T359_PT,
      name: 'O Pensador · “The Thinker” (Fauvre)',
      text:
        'Análise, eficiência e calma. Entende o sistema, faz funcionar e não levanta a voz para ' +
        'isso.',
      asIntj:
        'Aqui acontece uma inversão que vale registrar: o centro instintivo não empurra, então ' +
        'quem carrega a execução é o emocional. O 5 alimenta Ni com material, o 9 tira o atrito ' +
        'de Te, e o 3 fica sozinho com a tarefa de fazer alguma coisa acontecer. Funciona muito ' +
        'bem — é um INTJ altamente competente, difícil de ler, estranhamente ameno na ' +
        'superfície, que entrega sem confrontar ninguém. O preço é que a única coisa a te ' +
        'manter em movimento é a prova de valor. Sob estresse a combinação é traiçoeira: o 9 ' +
        'anestesia, o 5 se retira e o 3 mantém o desempenho intacto — você continua funcionando ' +
        'perfeitamente muito tempo depois de ter deixado de estar presente, e ninguém percebe. ' +
        'Você inclusive.',
    },
    '369': {
      deep: DEEP_T369_PT,
      name: 'O Mediador · “The Mediator” (Fauvre)',
      text:
        'Adaptação, responsabilidade e busca de acordo. Lê o que cada lado precisa, mantém o ' +
        'barco estável e evita a ruptura.',
      asIntj:
        'Repete-se muito que este seria o tritipo mais comum da população, mas isso vem de ' +
        'levantamentos autosselecionados e não de base populacional — trate como boato ' +
        'numérico. Num INTJ, o 6 dá a Ni a função de prever fricção, e ela prevê. A execução é ' +
        'do 3; o 9 tira o gume, e o resultado é um INTJ que negocia, adapta e quase nunca é ' +
        'lido como o tipo que é. Nenhuma das três fixações gosta de conflito aberto, o que num ' +
        'Ni–Te produz um fenômeno curioso: decisões corretas tomadas tarde demais para serem ' +
        'impostas. Sob estresse a ansiedade do 6 encontra a inércia do 9 e a única saída ' +
        'disponível é o desempenho do 3 — você fica ocupado em vez de decidir.',
    },
    '379': {
      deep: DEEP_T379_PT,
      name: 'O Embaixador · “The Ambassador” (Fauvre)',
      text:
        'Otimismo, ambição e trânsito fácil. Circula bem em qualquer sala, faz conexões e ' +
        'converte simpatia em resultado.',
      asIntj:
        'O tritipo que mais gera INTJ mal tipado. O 7 impede Ni de fechar cedo, o 9 tira a ' +
        'aspereza de Te e o 3 sabe exatamente qual versão de você funciona em cada sala — o ' +
        'conjunto produz alguém sociável, agradável e inteiramente estratégico por baixo. A ' +
        'visão é ampla; a execução é do 3, a única fixação com pressa nesta combinação. Você é ' +
        'bom com pessoas, e isso raramente é lido como habilidade adquirida, que é o que é. Sob ' +
        'estresse ninguém vê nada: o 9 se ausenta, o 7 troca o assunto, o 3 sorri e entrega — ' +
        'três camadas de anestesia sobre um Fi terciário que continua sentindo tudo e não ' +
        'recebe palavra nenhuma.',
    },
    '459': {
      deep: DEEP_T459_PT,
      name: 'O Contemplativo · “The Contemplative” (Fauvre)',
      text:
        'Interioridade, singularidade e quietude. Vive para dentro, com um mundo interno ' +
        'riquíssimo e quase nenhuma pressa de mostrá-lo.',
      asIntj:
        'As três fixações são de retirada, e esta é a única das 27 em que nenhum centro empurra ' +
        'para a ação. O 5 e o 4 alimentam uma visão profunda e muito pessoal: Ni funciona no ' +
        'seu melhor. Te, porém, fica sem combustível instintivo — o 9 não gera urgência, e a ' +
        'execução passa a depender inteiramente de estrutura construída de fora: hábito, prazo, ' +
        'alguém esperando. É o INTJ cuja obra é extraordinária e existe majoritariamente dentro ' +
        'da própria cabeça. Sob estresse não há vazamento visível, e é isso que torna a coisa ' +
        'perigosa: a retirada é total, silenciosa, e pode durar anos sem que ninguém a ' +
        'classifique como crise. Aqui estrutura externa não é burocracia — é órtese.',
    },
    '469': {
      deep: DEEP_T469_PT,
      name: 'O Buscador · “The Seeker” (Fauvre)',
      text:
        'Dúvida, profundidade e busca de chão. Procura algo em que se possa confiar de verdade ' +
        '— e testa até o fim tudo o que encontra.',
      asIntj:
        'A visão vem do 6 e do 4 juntos, e é uma dupla inquieta: um pergunta se é seguro, o ' +
        'outro pergunta se é verdadeiro, e Ni passa a vida entregando conclusões que serão ' +
        'reexaminadas. A execução é do 9, ou seja, chega devagar — Te aqui é bom de projeto e ' +
        'ruim de arranque. É o INTJ que busca (sistema, mestre, doutrina, método) e que ' +
        'desmonta cada coisa encontrada com o mesmo rigor com que a procurou. Sob estresse a ' +
        'espiral é de dúvida: o 6 duvida do plano, o 4 duvida de você, o 9 desliga em vez de ' +
        'decidir. O que estabiliza este tritipo não é encontrar a resposta certa; é aceitar ' +
        'agir sem ela.',
    },
    '479': {
      deep: DEEP_T479_PT,
      name: 'O Espírito Gentil · “The Gentle Spirit” (Fauvre)',
      text:
        'Sensibilidade, imaginação e paz. A combinação mais suave das 27 — sonha alto, sente ' +
        'fundo e recua do conflito.',
      asIntj:
        'É o tritipo que menos parece INTJ e mais desconcerta quem espera o estereótipo. O 7 e ' +
        'o 4 alimentam Ni com imaginação e afeto, e a visão sai poética antes de sair ' +
        'estratégica. A execução passa pelo 9 e é o ponto frágil de tudo: nada aqui força a ' +
        'mão, então Te precisa ser treinado deliberadamente ou a vida inteira permanece em modo ' +
        'de rascunho. O centro emocional está na frente e é a parte mais viva da estrutura, o ' +
        'que num tipo de Fi terciário produz uma combinação incomum — muita vida interior, ' +
        'pouquíssima linguagem para ela. Sob estresse os três recuam de formas diferentes: o 4 ' +
        'se entristece, o 7 se distrai, o 9 adormece. É o INTJ que precisa menos de rigor e ' +
        'mais de alguém esperando alguma coisa dele em uma data marcada.',
    },
  },
};
