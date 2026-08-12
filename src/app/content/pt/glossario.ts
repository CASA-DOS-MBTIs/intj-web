import type { SourceId } from '../sources';
import type { GlossaryContent } from '../types';

export const GLOSSARIO_PT: GlossaryContent = {
  meta: {
    title: 'Glossário — cada termo do site e de quem ele é',
    description:
      'Função cognitiva, pilha, loop, grip, eneatipo, tritipo, faceta, identidade A/T, Model A: ' +
      'o vocabulário inteiro deste site definido, atribuído ao autor certo e aplicado ao INTJ.',
  },

  sources: [
    'jung-1921',
    'von-franz-1971',
    'myers-1980-gifts',
    'myers-1998-manual',
    'quenk-2002-grip',
    'mbf-basics',
    'mbf-type-dynamics',
    'mbf-ethics',
    'grant-1983',
    'beebe-2017',
    'riso-hudson-1999',
    'naranjo-1994',
    'chestnut-2013',
    'fauvre-tritype',
    'hook-2021',
    'hippocrates-c400bc',
    'galen-c170',
    'klibansky-1964',
    'lahaye-1984',
    'littauer-1983',
    'keirsey-1998',
    'mccrae-costa-1989',
    'costa-mccrae-1992',
    'neris-our-theory',
    'augustinaviciute-1998',
    'wikisocion-ili',
    'marston-1928',
    'kim-2025-mbti-disc',
    'pittenger-2005',
    'reynierse-2009',
    'bess-harvey-2002',
    'howes-carskadon-1979',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Glossário',
    title: 'Cada palavra,\ne de quem ela é',
    lede:
      'Vários sistemas diferentes — Jung, o MBTI, o eneagrama, os temperamentos, o Big Five, a ' +
      'NERIS, o socionics, o DISC — falam sobre você neste site, e alguns deles usam exatamente as ' +
      'mesmas palavras querendo dizer coisas diferentes. Esta página existe para você parar de ' +
      'adivinhar: cada termo com uma definição curta, o nome de quem o construiu, e o que ele ' +
      'descreve quando roda sobre <strong>Ni · Te · Fi · Se</strong>.',
  },

  intro:
    'Um verbete honesto precisa dizer três coisas: o que a palavra significa, de quem ela é e o ' +
    'quanto ela foi verificada. A segunda é a que quase sempre falta — e é justamente a que evita ' +
    'o erro mais comum de quem lê tipologia na internet, que é atribuir ao MBTI uma ideia nascida ' +
    'num fórum, numa empresa de testes ou no livro de outro autor. <em>Grip</em> é de Naomi ' +
    'Quenk. <em>Loop</em> não é de ninguém. O sufixo -A/-T é da NERIS. Saber disso não torna os ' +
    'termos inúteis; torna-os rastreáveis.',

  caveat:
    'Nenhum termo desta página descreve capacidade, valor ou aptidão, e nenhum autoriza previsão ' +
    'sobre uma pessoa. A distinção que vale para o site inteiro vale aqui verbete por verbete: ' +
    'descrever uma tendência é uma coisa, prever um resultado é outra, e só a primeira está ao ' +
    'alcance destes modelos. Onde a evidência é fina, o verbete diz isso na mesma frase em que dá ' +
    'a definição — não numa nota de rodapé.',

  systems: [
    'Jung',
    'MBTI',
    'Dinâmica de tipo',
    'Comunidade',
    'Eneagrama',
    'Temperamentos',
    'Big Five',
    'NERIS',
    'Socionics',
    'DISC',
    'Crítica',
  ],

  allLabel: 'Tudo',

  entries: [
    {
      term: 'Função cognitiva',
      system: 'Jung',
      short:
        'Um modo de operar, não um traço: duas formas de perceber, duas de julgar, cada uma ' +
        'virada para dentro ou para fora.',
      long:
        'Jung (1921) descreve quatro funções — sensação e intuição para perceber, pensamento e ' +
        'sentimento para julgar — e duas atitudes possíveis para cada uma, introvertida ou ' +
        'extrovertida. Oito atitudes-função ao todo. Repare no que isso <em>não</em> é: função ' +
        'não é habilidade, não é talento e não é propriedade de um tipo — as quatro estão em ' +
        'você, e contar oito posições, uma por atitude, é extensão posterior do modelo, não de ' +
        'Jung. O que a sua sigla afirma é a <strong>ordem</strong> e a <strong>direção</strong> ' +
        '— quais chegam primeiro, quais chegam tarde e quais quase nunca chegam. Ni não é um dom ' +
        'seu; é a operação em que você confia antes de todas as outras.',
      sources: ['jung-1921', 'mbf-type-dynamics', 'beebe-2017'],
    },
    {
      term: 'Ni — intuição introvertida',
      system: 'Jung',
      short:
        'Voltada ao objeto interno: a imagem chega pronta e sem recibo de como foi calculada — ' +
        '“convergência” é o nome que a literatura de tipo posterior deu a isso, não Jung.',
      long:
        'Em Jung, a intuição introvertida não varre o mundo atrás de possibilidades: ela se ' +
        'volta ao objeto interno, percebe a imagem que o fundo inconsciente devolve e a entrega ' +
        'pronta, sem cadeia de raciocínio anexada. A leitura corrente — muita coisa entrando, um ' +
        'único desfecho saindo — é da literatura de tipo posterior, não de 1921, e convém ' +
        'dizê-lo numa página feita para separar autores. No INTJ ela é a ' +
        'primeira função, e daí vem a assimetria que define a sua vida social: a certeza chega ' +
        'antes do argumento, e o argumento chega tarde e desajeitado. Jung localizou essa falha ' +
        'na linguagem de quem vê, não na inteligência de quem escuta — e é a descrição mais ' +
        'precisa que existe do fracasso específico de estar certo e não convencer ninguém.',
      sources: ['jung-1921', 'myers-1980-gifts'],
    },
    {
      term: 'Te — pensamento extrovertido',
      system: 'Jung',
      short: 'Lógica orientada pelo mundo de fora: critério, escopo, prazo, resultado verificável.',
      long:
        '“Extrovertida” aqui significa ordenada pelo objeto — pelo que pode ser conferido fora de ' +
        'você. Te decide por eficácia, corta redundância, monta processo e aceita ser ' +
        'contrariado por dado. No INTJ é a função auxiliar, e é a única função extrovertida da ' +
        'metade consciente da pilha: literalmente a sua porta de saída. Duas consequências ' +
        'práticas. A primeira: é a parte que os outros veem, o que faz muita gente confundir ' +
        'competência com dureza. A segunda: o <strong>J</strong> da sua sigla vem de Te, não de ' +
        'Ni — o MBTI olha para a primeira função extrovertida da pilha e pergunta se ela julga ' +
        'ou percebe.',
      sources: ['jung-1921', 'myers-1980-gifts', 'mbf-type-dynamics'],
    },
    {
      term: 'Fi — sentimento introvertido',
      system: 'Jung',
      short:
        'Julgamento de valor feito por dentro, com régua própria — e quase nenhuma tradução ' +
        'disponível.',
      long:
        'Em Jung, sentimento é uma função <em>racional</em>: ela avalia, decide o que vale e o ' +
        'que não vale. Não é emoção, é critério. Introvertida, mede contra um padrão interno em ' +
        'vez de medir contra a sala. No INTJ ela aparece em terceiro lugar, forte em intensidade ' +
        'e pobre em articulação: é o que corta uma relação de dez anos sem discussão e sem ' +
        'volta, e é também o que você descobre ter sentido dois dias depois. Registre que a ' +
        'posição introvertida da terceira função é convenção do esquema de Grant (1983) e não do ' +
        'material oficial: a própria fundação registra que os especialistas divergem e deixa a ' +
        'atitude da terciária em aberto, listando o terceiro andar do INTJ como “Sentimento — Fe ' +
        'ou Fi”.',
      sources: ['jung-1921', 'grant-1983', 'myers-1980-gifts', 'mbf-type-dynamics'],
    },
    {
      term: 'Se — sensação extrovertida',
      system: 'Jung',
      short:
        'O mundo concreto chegando agora, antes de virar significado — e o último item da sua ' +
        'fila.',
      long:
        'Sensação extrovertida registra o objeto como ele é: sabor, som, cansaço, temperatura da ' +
        'sala, o próprio corpo. No INTJ é a função inferior, o que na prática significa perceber ' +
        'fome, dor e exaustão apenas quando já estão em nível alto, e viver alguns centímetros à ' +
        'frente do momento presente. Jung e von Franz não tratavam a inferior como defeito, e sim ' +
        'como porta de entrada do que ainda não foi vivido — o material que a função dominante ' +
        'deixou de fora e que volta com força desproporcional quando o sistema cansa.',
      sources: ['jung-1921', 'von-franz-1971', 'quenk-2002-grip'],
    },
    {
      term: 'Individuação',
      system: 'Jung',
      short:
        'Em Jung, o processo de se tornar inteiro — o que inclui exatamente aquilo que o seu ' +
        'tipo deixou de fora.',
      long:
        'Jung define individuação no capítulo de definições de <em>Tipos Psicológicos</em>: ' +
        'diferenciar-se, tornar-se um indivíduo indivisível e distinto da psicologia coletiva. ' +
        'Não é autoaperfeiçoamento e não é otimização — é integrar o que a função dominante ' +
        'excluiu para poder funcionar tão bem. Numa vida Ni–Te, o excluído tem nome: corpo, ' +
        'presente, sensação e valor não formulado. Por isso a segunda metade da vida de um INTJ ' +
        'costuma girar em torno de coisas que Ni e Te não conseguem entregar. É uma proposição ' +
        'clínica e filosófica de um homem que observou pacientes por vinte anos, nunca um ' +
        'processo medido.',
      sources: ['jung-1921', 'von-franz-1971'],
    },

    {
      term: 'Tipo',
      system: 'MBTI',
      short:
        'As quatro letras. Uma categoria de preferência declarada — nunca uma medida do que você ' +
        'consegue fazer.',
      long:
        'Em Myers, tipo é o resultado de quatro escolhas entre pares, e nada além disso. Não é ' +
        'diagnóstico, não é nível, não é prognóstico. A fundação que zela pelo uso ético do ' +
        'instrumento é explícita: todos os tipos são igualmente valiosos, o instrumento não foi ' +
        'desenhado para contratar, não mede habilidade, competência nem destreza, e resultado ' +
        'nenhum deve ser usado para limitar quem quer que seja. Vale guardar isso antes de ' +
        'ler o resto do site, porque quase todo mau uso deste vocabulário começa no mesmo ponto ' +
        '— no instante em que “eu sou INTJ” deixa de descrever como você prefere processar e ' +
        'passa a explicar por que você merece alguma coisa.',
      sources: ['myers-1980-gifts', 'mbf-basics', 'mbf-ethics'],
    },
    {
      term: 'Preferência',
      system: 'MBTI',
      short:
        'A escolha habitual entre duas maneiras igualmente válidas de fazer a mesma coisa — como ' +
        'escrever com uma das mãos.',
      long:
        'A analogia que todo mundo repete, e que o material de formação do MBTI usa até hoje: ' +
        'você escreve com as duas mãos, mas uma sai automática e a ' +
        'outra exige atenção, esforço e paciência. Preferência descreve o que é confortável, ' +
        'jamais o que é possível. Preferir I não é ser incapaz de conversar; preferir T não é ser ' +
        'incapaz de se importar. E há um detalhe que quase ninguém conta: o instrumento produz um ' +
        '<strong>número</strong> antes de produzir uma letra — um índice de clareza da ' +
        'preferência —, e a letra é apenas o sinal desse número. O INTJ que fala em público sem ' +
        'sofrer e o INTJ que adia uma ligação por três dias recebem o mesmo <strong>I</strong>; ' +
        'o índice que os separava foi descartado antes de a sua sigla aparecer na tela.',
      sources: ['myers-1980-gifts', 'myers-1998-manual', 'mbf-basics'],
    },
    {
      term: 'Dicotomia',
      system: 'MBTI',
      short:
        'Cada um dos quatro pares — E–I, S–N, T–F, J–P — separado em dois lados por um ponto de ' +
        'corte.',
      long:
        'A dicotomia é a unidade real do MBTI: quatro cortes, dezesseis combinações. A quarta ' +
        'merece atenção especial no seu caso, porque é a mais mal explicada de todas. J–P não ' +
        'pergunta se você é organizado; pergunta se a sua primeira função <em>extrovertida</em> ' +
        'julga ou percebe. No INTJ essa função é Te, e é só por isso que você é J — o Ni que ' +
        'governa tudo é uma função perceptiva e não aparece na letra. Guarde também a objeção ' +
        'que vem depois: os escores das quatro escalas se distribuem de forma contínua e ' +
        'centrada, de modo que quem separa as pessoas é o ponto de corte, não a natureza.',
      sources: ['myers-1998-manual', 'mbf-basics', 'bess-harvey-2002'],
    },

    {
      term: 'Dinâmica de tipo',
      system: 'Dinâmica de tipo',
      short:
        'A leitura que transforma quatro letras numa hierarquia de processos — o passo que ' +
        'explica mais e que se sustenta menos.',
      long:
        'É a camada que faz o MBTI parecer profundo: em vez de quatro preferências soltas, uma ' +
        'ordem entre funções, com uma dominando, uma equilibrando e duas no porão. A fundação a ' +
        'publica como parte do modelo; Reynierse (2009), no artigo intitulado sem rodeios <em>The ' +
        'case against type dynamics</em>, argumenta que a dinâmica nunca reuniu evidência ' +
        'consistente e que as preferências simples fazem quase todo o trabalho descritivo ' +
        'sozinhas. As duas coisas são verdadeiras ao mesmo tempo, e é por isso que este site usa ' +
        'a pilha: ela é o que torna a descrição do INTJ reconhecível, e continua sendo a parte ' +
        'menos apoiada em dado de tudo que você vai ler aqui.',
      sources: ['mbf-type-dynamics', 'myers-1998-manual', 'reynierse-2009'],
    },
    {
      term: 'Pilha cognitiva',
      system: 'Dinâmica de tipo',
      short:
        'A ordem Ni · Te · Fi · Se: quatro funções com atitude fixa, da mais consciente à menos.',
      long:
        'Myers estabeleceu a dominante e a auxiliar e argumentou pelo equilíbrio entre elas. A ' +
        'pilha completa de quatro posições com atitudes alternadas — que é a versão que circula ' +
        'hoje em qualquer descrição de tipo — vem do esquema de Harold Grant (1983), adotado ' +
        'pela prática até virar consenso aparente. Leia a ordem como <strong>hierarquia de ' +
        'confiança</strong>, não como medida de força: nenhum instrumento de MBTI mede a potência ' +
        'de uma função. E note o que a pilha do INTJ tem de particular — uma única função ' +
        'extrovertida no andar de cima. Você tem exatamente uma porta para o mundo, e ela é Te.',
      sources: ['myers-1980-gifts', 'grant-1983', 'reynierse-2009'],
    },
    {
      term: 'Dominante',
      system: 'Dinâmica de tipo',
      short: 'A primeira função: a mais consciente, a mais confiável, a que roda sem ser chamada.',
      long:
        'No INTJ é Ni. A dominante é o que você é antes de decidir ser alguma coisa — funciona no ' +
        'chuveiro, no trânsito, na fila do banco, e não desliga quando você pede. É também a ' +
        'função cujo julgamento você acata sem revisar, o que explica a força e o risco do tipo ' +
        'no mesmo movimento: uma dominante bem calibrada acerta o desfecho com anos de ' +
        'antecedência; uma dominante sem correção externa produz uma teoria fechada sobre ' +
        'intenções alheias e trata a ausência de prova como confirmação.',
      sources: ['mbf-type-dynamics', 'myers-1980-gifts'],
    },
    {
      term: 'Auxiliar',
      system: 'Dinâmica de tipo',
      short:
        'A segunda: equilibra a dominante em atitude e em tarefa. No INTJ, Te — o seu único ' +
        'contato consciente com o lado de fora.',
      long:
        'O argumento de Myers é de equilíbrio: um introvertido precisa de uma auxiliar ' +
        'extrovertida, ou vive inteiramente dentro da própria cabeça; e uma dominante perceptiva ' +
        'precisa de uma auxiliar que julgue, ou nada nunca se decide. No INTJ as duas exigências ' +
        'apontam para Te. Quando Te está subdesenvolvido, o efeito é fácil de reconhecer e ' +
        'doloroso de admitir: anos de sistemas belíssimos que nunca saíram de um caderno, e a ' +
        'convicção sincera de que o problema é o mundo não estar pronto.',
      sources: ['myers-1980-gifts', 'mbf-type-dynamics'],
    },
    {
      term: 'Terciária',
      system: 'Dinâmica de tipo',
      short:
        'A terceira, Fi no INTJ: chega tarde, funciona mal em palavras e decide mais coisa do que ' +
        'parece.',
      long:
        'No esquema de Grant (1983), a terciária amadurece grosso modo entre os vinte e os ' +
        'quarenta anos — hipótese sobre desenvolvimento, nunca verificada acompanhando uma ' +
        'coorte real. Duas coisas sobre a sua: a orientação introvertida atribuída a ela é ' +
        'convenção de Grant, não do material oficial — a própria fundação registra que os ' +
        'especialistas divergem e deixa a atitude da terciária em aberto, listando o terceiro ' +
        'andar do INTJ como “Sentimento — Fe ou Fi”; e ela é o motivo pelo ' +
        'qual a descrição de INTJ como pessoa fria erra o alvo por inteiro. Fi terciária não é ' +
        'pouco sentimento — é sentimento sem interface. A pressão existe inteira, o vocabulário ' +
        'para ela chega com atraso de dias.',
      sources: ['grant-1983', 'myers-1980-gifts', 'reynierse-2009', 'mbf-type-dynamics'],
    },
    {
      term: 'Inferior',
      system: 'Dinâmica de tipo',
      short:
        'A quarta, Se: fraca em domínio e nunca em impacto. É por onde você desaba e por onde ' +
        'você cresce.',
      long:
        'Na tradição junguiana a função inferior é arcaica, lenta, tudo-ou-nada e indisponível à ' +
        'vontade — você não consegue ligá-la por decisão, e ela liga sozinha na pior hora ' +
        'possível. É o que torna a expressão “ponto fraco” enganosa: fraco é o seu controle sobre ' +
        'ela, não o efeito dela sobre você. E é o mesmo material que von Franz descreve como a ' +
        'única entrada real para o que ainda não foi vivido, o que dá ao INTJ uma instrução ' +
        'incômoda e bastante concreta: o crescimento não está em mais Ni, está em corpo, ritmo e ' +
        'presença.',
      sources: ['von-franz-1971', 'quenk-2002-grip', 'mbf-type-dynamics'],
    },
    {
      term: 'Grip',
      system: 'Dinâmica de tipo',
      short:
        'Nome dado por Naomi Quenk ao episódio em que a função inferior assume o comando. No ' +
        'INTJ, Se crua.',
      long:
        'Quenk (2002) descreve o padrão para cada tipo: sob estresse prolongado, a dominante se ' +
        'esgota e a inferior irrompe em versão grosseira, e a pessoa se comporta como o próprio ' +
        'oposto. No INTJ isso aparece de forma quase caricata — quem planeja cinco anos à frente ' +
        'passa a reorganizar uma gaveta às duas da manhã, come um pacote inteiro sem perceber, ' +
        'hiperfoca num detalhe irrelevante enquanto o prazo queima. Vale saber a origem do ' +
        'conceito: é descrição clínica acumulada em décadas de prática, não achado de ' +
        'laboratório, e ninguém mediu com que frequência INTJs entram nesse estado.',
      sources: ['quenk-2002-grip', 'mbf-type-dynamics'],
    },
    {
      term: 'Função sombra',
      system: 'Dinâmica de tipo',
      short:
        'As quatro funções restantes, com atitude invertida. Modelo de John Beebe — a camada mais ' +
        'especulativa deste site.',
      long:
        'Beebe estende a pilha de quatro para oito e atribui um papel arquetípico a cada posição: ' +
        'a personalidade opositora, o velho crítico, o trapaceiro, o demoníaco. No INTJ, as ' +
        'quatro de baixo são Ne, Ti, Fe e Si. O modelo é sedutor porque nomeia experiências reais ' +
        '— o clima emocional de um grupo que você não produz nem lê, a alternativa que você abre ' +
        'só para demolir. Mas é interpretação construída sobre uma pilha que já é hipótese: ' +
        'elaboração sobre elaboração, sem qualquer verificação empírica. Use como imagem, nunca ' +
        'como mecanismo.',
      sources: ['beebe-2017', 'reynierse-2009'],
    },

    {
      term: 'Loop',
      system: 'Comunidade',
      short:
        'Vocabulário de comunidade, não do MBTI: a dominante girando com a terciária e a auxiliar ' +
        'fora do ar. No INTJ, Ni–Fi.',
      long:
        'Comece pelo que este termo não é. Ele não aparece em Jung, não aparece em Myers, não ' +
        'aparece no manual técnico e não tem um único estudo publicado — nasceu em fóruns de ' +
        'tipologia nos anos 2000 e se espalhou porque descreve bem algo que as pessoas ' +
        'reconhecem. E descreve mesmo: com Te desligado, o INTJ perde a única checagem externa da ' +
        'pilha, e Ni passa a se alimentar de si próprio enquanto Fi fornece o veredito moral. Na ' +
        'prática são semanas de autoanálise sem saída, mágoas antigas reprocessadas com riqueza ' +
        'de detalhe, e um processo inteiro montado contra alguém que nunca foi perguntado. A ' +
        'saída é sempre pela auxiliar: qualquer ato que coloque a conclusão diante de outra ' +
        'pessoa — mandar a mensagem, publicar o rascunho, fazer a pergunta cuja resposta você já ' +
        'presumiu. Use a palavra, se ela ajuda. Só nunca diga que o manual diz isso.',
      sources: ['jung-1921', 'myers-1980-gifts', 'myers-1998-manual', 'mbf-type-dynamics'],
    },

    {
      term: 'Eneatipo',
      system: 'Eneagrama',
      short:
        'Um dos nove pontos do eneagrama. Descreve <em>por que</em> você age, não <em>como</em> ' +
        'você processa.',
      long:
        'A figura de nove pontas é de G. I. Gurdjieff, que a ensinou como diagrama cosmológico e ' +
        'nunca como tipologia; quem pendurou nela as fixações do ego foi Óscar Ichazo, em Arica, ' +
        'por volta de 1970; a leitura psicológica que se usa hoje é de Claudio Naranjo; e a ' +
        'versão que praticamente todo mundo lê é a de Don ' +
        'Riso e Russ Hudson. O eneatipo não compete com o MBTI porque responde a outra pergunta — ' +
        'e é essa diferença que explica por que dois INTJs com a mesma pilha podem não se ' +
        'reconhecer um no outro. Mesma máquina, combustíveis distintos. A ressalva é grande: a ' +
        'revisão sistemática de Hook e colegas (2021) varre 104 amostras e conclui por evidência ' +
        '<em>mista</em> de confiabilidade e validade — com apoio empírico mínimo para asas e ' +
        'setas.',
      sources: ['naranjo-1994', 'riso-hudson-1999', 'hook-2021'],
    },
    {
      term: 'Asa',
      system: 'Eneagrama',
      short:
        'O ponto vizinho que colore o principal — 5w4, 5w6. Convenção descritiva com apoio ' +
        'empírico mínimo.',
      long:
        'A notação foi formalizada por Riso e Hudson: o seu tipo permanece o mesmo, e um dos dois ' +
        'vizinhos na figura empresta tom. Num INTJ 5, a diferença é imediatamente legível na ' +
        'convivência — 5w4 põe Fi na frente da vitrine e produz alguém com estética própria e ' +
        'ferida à mostra; 5w6 troca isso por método, lealdade e checagem dupla. Legível não é ' +
        'medido: Hook e colegas (2021) registram que as análises fatoriais de questionários de ' +
        'eneagrama recuperam menos de nove fatores, e que asas e setas têm apoio empírico ' +
        'mínimo. É uma convenção útil, não uma estrutura demonstrada.',
      sources: ['riso-hudson-1999', 'hook-2021'],
    },
    {
      term: 'Centros',
      system: 'Eneagrama',
      short:
        'Os três grupos de três: visceral (8-9-1, raiva), emocional (2-3-4, vergonha), mental ' +
        '(5-6-7, medo).',
      long:
        'Cada centro reúne os três tipos que lidam mal com a mesma emoção de fundo — e o ponto ' +
        'costuma ser mal lido: o centro não diz onde a emoção é sentida, diz onde ela é ' +
        'habitualmente mal administrada, seja por excesso, por repressão ou por negação. A ' +
        'divisão em três centros é anterior ao eneagrama de personalidade — vem da doutrina dos ' +
        'três centros de Gurdjieff, retomada por Ichazo e Naranjo —, mas o pareamento de cada ' +
        'centro com uma emoção de fundo, raiva, vergonha e medo, é formulação de Riso e Hudson. ' +
        'Para um INTJ vale a distinção seguinte: a sua pilha não tem centro. Ni e ' +
        'Te descrevem processamento, e a raiva, a vergonha e o medo não estão em lugar nenhum ' +
        'dessa descrição — que é exatamente a lacuna que o eneagrama se propõe a preencher.',
      sources: ['naranjo-1994', 'riso-hudson-1999'],
    },
    {
      term: 'Desejo básico',
      system: 'Eneagrama',
      short:
        'O que o tipo persegue por baixo de tudo. O par desejo/medo é formulação de Riso e ' +
        'Hudson.',
      long:
        'A ideia é que sob cada comportamento há uma busca constante — competência, valor, ' +
        'autenticidade, autonomia — que a pessoa raramente formula. Nem Ichazo nem Naranjo ' +
        'organizaram o material nesse par; a dupla desejo básico/medo básico é vocabulário de ' +
        'Riso e Hudson, e é justo dizer de quem é. Num INTJ, o desejo básico costuma ser o último ' +
        'a ficar visível, e a razão é estrutural: Ni responde com conteúdo, nunca com motivo. ' +
        'Você consegue descrever o plano em detalhe alto e não fazer a menor ideia para que ele ' +
        'serve.',
      sources: ['riso-hudson-1999'],
    },
    {
      term: 'Medo básico',
      system: 'Eneagrama',
      short:
        'A ameaça que organiza o resto — aquilo de que o desejo básico está fugindo. Também de ' +
        'Riso e Hudson.',
      long:
        'É o par simétrico: para cada busca, uma coisa a evitar. O problema específico do INTJ é ' +
        'de camuflagem. Te transforma medo em procedimento, e procedimento parece razoável de ' +
        'fora e de dentro. O 5 que teme ser incapaz e ficar sem recursos não se sente com medo — ' +
        'se sente preparado; o 1 que teme ser corrompido não se sente com medo — se sente ' +
        'correto; o 3 que teme ser sem valor não se sente com medo — se sente produtivo. É o ' +
        'mesmo movimento com nome melhor, e nomeá-lo é praticamente todo o trabalho.',
      sources: ['riso-hudson-1999'],
    },
    {
      term: 'Níveis de desenvolvimento',
      system: 'Eneagrama',
      short:
        'A escala de nove degraus de Riso e Hudson dentro de cada tipo: a mesma motivação, do ' +
        'saudável ao destrutivo.',
      long:
        'É provavelmente a ideia mais útil do eneagrama e uma das menos testadas. Ela resolve uma ' +
        'confusão que persegue toda tipologia — a de que um tipo seria bom ou ruim — mostrando ' +
        'que a mesma motivação percorre uma faixa inteira. Dois INTJs 5 podem ser o pesquisador ' +
        'atento que ensina de graça e o recluso que parou de atender a porta; o tipo é idêntico, ' +
        'o degrau não. Duas ressalvas na mesma respiração: Riso e Hudson nunca publicaram ' +
        'validação psicométrica dos nove níveis, e nenhum instrumento posiciona você num deles. ' +
        'Quem posiciona é você — e sob estresse ninguém se avalia um degrau abaixo do que gostaria.',
      sources: ['riso-hudson-1999', 'hook-2021'],
    },
    {
      term: 'Tritipo',
      system: 'Eneagrama',
      short:
        'Um ponto de cada centro, na ordem em que você os aciona. Modelo proprietário de ' +
        'Katherine Fauvre, sem literatura revisada por pares.',
      long:
        'A proposta é que ninguém use um único ponto: haveria uma fixação principal em cada ' +
        'centro, e a ordem entre as três descreveria a estratégia da pessoa. O termo é marca ' +
        'registrada da autora e o modelo é de uma única mão, sem <strong>nenhum</strong> estudo ' +
        'revisado por pares — a base é mais fina que a do eneagrama, que já é fina. Dito isso, o ' +
        'que ele acrescenta a um INTJ é específico e difícil de obter de outro jeito: separa a ' +
        'fixação que move a visão da fixação que move a execução, e essas duas raramente querem ' +
        'a mesma coisa.',
      sources: ['fauvre-tritype', 'hook-2021'],
    },
    {
      term: 'Instinto (subtipo)',
      system: 'Eneagrama',
      short:
        'As três pulsões — autopreservação, social e sexual/um-a-um — que cruzadas com os nove ' +
        'tipos dão vinte e sete subtipos.',
      long:
        'Naranjo descreveu os vinte e sete; a versão que circula hoje é em boa medida a de ' +
        'Beatrice Chestnut (2013). A pulsão dominante é anterior à deliberação: decide para onde ' +
        'a energia vai antes de Ni ter chance de escolher. Num INTJ isso costuma ser mais visível ' +
        'para quem mora com você do que o próprio tipo — o mesmo 5 vira estoquista silencioso de ' +
        'recursos, arquivista do saber de um grupo ou alguém que concentra a vida inteira numa ' +
        'única pessoa, e as três versões acham que estão apenas sendo racionais. Vocabulário sem ' +
        'validação, como o resto do modelo.',
      sources: ['naranjo-1994', 'chestnut-2013'],
    },

    {
      term: 'Temperamento',
      system: 'Temperamentos',
      short:
        'A palavra mais sobrecarregada do site: três modelos diferentes a usam, e apenas um deles ' +
        'é o dos quatro humores.',
      long:
        'Primeiro, a medicina antiga: o <em>Corpus Hipocrático</em> fala de sangue, fleuma, bile ' +
        'amarela e bile negra, e Galeno, por volta de 170 d.C., transforma isso numa doutrina das ' +
        'misturas — que são <strong>nove</strong>, não quatro. Segundo, as doze combinações ' +
        'dominante/secundário que você encontra em qualquer teste online: são de Tim LaHaye, ' +
        '1984, e não da Antiguidade. Terceiro, os temperamentos de Keirsey: quatro grupos de ' +
        'tipos MBTI — Artesão, Guardião, Idealista e Racional — em que o INTJ é sempre Racional, ' +
        'por definição, sem mistura possível. Confundir os três é como um leitor acaba achando ' +
        'que os gregos descreveram o subtipo dele.',
      sources: ['hippocrates-c400bc', 'galen-c170', 'lahaye-1984', 'keirsey-1998'],
    },
    {
      term: 'Melancólico',
      system: 'Temperamentos',
      short:
        'Lento para ligar, profundo, exigente. O rótulo que mais grudou no INTJ — e o que menos ' +
        'foi medido.',
      long:
        'No vocabulário popular que LaHaye e Littauer herdaram dos humores, o melancólico é ' +
        'analítico, perfeccionista, leal a poucos e propenso ao desânimo — o de Galeno era outra ' +
        'coisa, uma mistura fria e seca e nada mais. Sobre um motor Ni–Te, esse retrato descreve ' +
        'um ritmo bastante ' +
        'reconhecível: conclusões guardadas por meses porque ainda não estão apresentáveis, ' +
        'padrões que ninguém pediu, e mágoa acumulada em silêncio até virar decisão. Nada disso ' +
        'foi medido por ninguém: bile negra não existe, e “melancólico” como <em>temperamento</em> ' +
        'não é aferido por instrumento nenhum da psicologia contemporânea — o que a psiquiatria ' +
        'mede sob esse nome é a melancolia clínica, coisa distinta. O termo está aqui como ' +
        'linguagem descritiva — do mesmo modo que se diz ' +
        'que alguém tem sangue-frio sem afirmar nada sobre a temperatura do sangue.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },
    {
      term: 'Colérico',
      system: 'Temperamentos',
      short:
        'Rápido, direto, orientado a comando. Num INTJ, é Te chegando à sala antes de Ni ter ' +
        'terminado.',
      long:
        'No mesmo vocabulário popular de LaHaye e Littauer, o colérico decide cedo, fala em ' +
        'imperativo e tolera mal a lentidão alheia — em Galeno, colérico nomeava só uma mistura ' +
        'quente e seca. Num INTJ, o ' +
        'efeito não é mudar a arquitetura e sim adiantar o relógio: a conclusão sai antes de ' +
        'estar madura, a correção do plano acontece em público, e a impaciência aparece como ' +
        'tom. É o INTJ que as pessoas descrevem como intimidante sem conseguir citar uma frase ' +
        'agressiva. Continua sendo vocabulário pré-científico, sem instrumento e sem norma — ' +
        'útil para nomear temperatura, inútil para afirmar qualquer coisa sobre capacidade.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },
    {
      term: 'Fleumático',
      system: 'Temperamentos',
      short:
        'Calmo, econômico, difícil de mover. Num INTJ, é o silêncio que os outros leem como ' +
        'concordância.',
      long:
        'No retrato popular de LaHaye e Littauer, o fleumático poupa energia, evita atrito e ' +
        'absorve pressão sem alterar a superfície — em Galeno, era só a mistura fria e úmida. ' +
        'Combinado com Ni–Te, produz alguém extraordinariamente estável em crise e ' +
        'extraordinariamente difícil de ler: você já decidiu, não vê motivo para anunciar, e a ' +
        'sala interpreta a ausência de objeção como adesão. O custo aparece depois, quando a ' +
        'discordância guardada há três meses sai inteira e desproporcional. Mesmo aviso de ' +
        'sempre: descrição de ritmo, sem qualquer base métrica.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },
    {
      term: 'Sanguíneo',
      system: 'Temperamentos',
      short:
        'Rápido, caloroso, disperso. O rótulo que menos se espera num INTJ e o mais caro de ' +
        'sustentar — sem que ninguém jamais tenha contado quantos são.',
      long:
        'No mesmo retrato popular, herdado dos humores por LaHaye e Littauer, o sanguíneo entra ' +
        'em qualquer sala, gosta de gente e começa mais do que termina — em Galeno, quente e ' +
        'úmido e nada além disso. Sobre ' +
        'uma pilha Ni–Te é a combinação mais desconcertante do conjunto — o INTJ sociável, que ' +
        'todo mundo considera extrovertido e que volta para casa exausto de ter circulado. Vale ' +
        'dizer o que isso não significa: não é um tipo diferente nem uma tipagem errada. É a ' +
        'mesma máquina com um aquecimento mais rápido, pagando uma conta que ninguém em volta ' +
        'vê. E, como o resto desta seção, é vocabulário histórico sem qualquer verificação.',
      sources: ['galen-c170', 'lahaye-1984', 'littauer-1983', 'klibansky-1964'],
    },

    {
      term: 'Big Five',
      system: 'Big Five',
      short:
        'Cinco dimensões contínuas — abertura, conscienciosidade, extroversão, amabilidade e ' +
        'neuroticismo — com normas e erro de medida publicados.',
      long:
        'É o único modelo deste site que a psicologia acadêmica leva a sério, e ele não te dá ' +
        'nome nenhum: dá uma posição em cinco réguas. A ponte com a sua sigla vem de um estudo ' +
        'específico — McCrae e Costa (1989) aplicaram o MBTI e o NEO-PI aos mesmos 468 adultos ' +
        'e correlacionaram escala a escala: E–I com extroversão em torno de −0,7, S–N com ' +
        'abertura 0,72, J–P com conscienciosidade −0,49, T–F com amabilidade 0,44. O NEO-PI-R, ' +
        'com as trinta facetas, só chegaria em 1992. Todo “perfil ' +
        'Big Five do INTJ” que você já leu, aqui inclusive, é derivado daquelas correlações ' +
        'entre escalas: nunca foi publicado um perfil de traços de uma amostra de INTJs.',
      sources: ['mccrae-costa-1989', 'costa-mccrae-1992'],
    },
    {
      term: 'Faceta',
      system: 'Big Five',
      short:
        'A subescala: cada domínio do NEO-PI-R é a soma de seis facetas — e é na soma que a ' +
        'informação morre.',
      long:
        'O NEO-PI-R não mede cinco coisas, mede trinta agrupadas em cinco. As facetas caminham ' +
        'juntas o bastante para formar um fator e separadas o bastante para discordarem dentro da ' +
        'mesma pessoa. É por isso que “extroversão baixa com assertividade alta” não é ' +
        'contradição alguma: assertividade é uma das seis facetas da extroversão, e não tem ' +
        'obrigação de acompanhar gregarismo e busca de excitação. É a faceta pela qual o INTJ ' +
        'calado assume o comando de uma reunião em que não queria entrar. Note o limite: a ' +
        'estrutura do domínio <em>explica</em> por que a descrição popular não se contradiz — ela ' +
        'não mediu ninguém, e não existe perfil de facetas publicado para INTJs.',
      sources: ['costa-mccrae-1992', 'mccrae-costa-1989'],
    },
    {
      term: 'Neuroticismo',
      system: 'Big Five',
      short:
        'A propensão ao afeto negativo e à desregulação sob pressão — a única régua a que nenhuma ' +
        'escala do MBTI corresponde.',
      long:
        'Ansiedade, hostilidade, depressão, autoconsciência excessiva, impulsividade, ' +
        'vulnerabilidade. Em 1989 as quatro dicotomias do MBTI foram correlacionadas com os cinco ' +
        'fatores; quatro deles acharam par, e este ficou sozinho. A consequência é direta e vale ' +
        'ser dita sem suavizar: as suas quatro letras não dizem uma palavra sobre quanto você ' +
        'sofre. Dois INTJs com a mesma pilha, um sereno e outro corroído por ansiedade, recebem ' +
        'exatamente o mesmo código — e o instrumento não erra ao fazer isso, porque foi ' +
        'construído para ordenar preferências numa população não clínica, jamais para medir ' +
        'ajustamento.',
      sources: ['mccrae-costa-1989', 'costa-mccrae-1992', 'myers-1998-manual'],
    },

    {
      term: 'Identidade A/T',
      system: 'NERIS',
      short:
        'O sufixo -A/-T do teste de dezesseis personalidades. É da NERIS, não do MBTI — e ocupa, ' +
        'na prática, a régua que falta às quatro letras: a do neuroticismo.',
      long:
        'A NERIS Analytics publica o teste de dezesseis tipos mais respondido do mundo e afirma ' +
        'ter se afastado dos tipos junguianos, organizando o questionário em torno de traços do ' +
        'modelo de cinco fatores, mantendo as letras de Myers como atalho reconhecível e somando ' +
        'uma quinta dimensão: Identidade, Assertivo contra Turbulento. Ou seja — ' +
        '<strong>INTJ-A e INTJ-T não são duas variantes oficiais do INTJ</strong>. São a régua ' +
        'que faltava, colada ao fim de um código de outro instrumento. Duas consequências, e ' +
        'nenhuma é confortável: isso é decisão de projeto e não descoberta sobre INTJs; e o ' +
        'instrumento é comercial e proprietário, sem o escrutínio revisado por pares que o ' +
        'NEO-PI-R acumulou. O que o sufixo <em>não</em> significa: -T não é um INTJ pior ou menos ' +
        'INTJ. É um palpite sobre a sua posição na régua que a sua sigla nunca teve.',
      sources: ['neris-our-theory', 'mccrae-costa-1989', 'costa-mccrae-1992', 'myers-1998-manual'],
    },

    {
      term: 'Socionics',
      system: 'Socionics',
      short:
        'Tipologia construída em Vilnius nos anos 1970 a partir de Jung. O INTJ corresponde a ' +
        'ILI, não a LII.',
      long:
        'Aušra Augustinavičiūtė cruzou os <em>Tipos Psicológicos</em> com a noção de metabolismo ' +
        'informacional e chegou a dezesseis tipos por um caminho totalmente distinto do ' +
        'americano, muito mais interessado no que acontece <em>entre</em> dois tipos. A confusão ' +
        'que quase todo texto em português comete cabe numa letra: no socionics a última letra ' +
        'descreve a função <strong>dominante</strong>, e não a primeira extrovertida — então em ' +
        'introvertidos ela se inverte. INTJ (Ni–Te) vira INTp, isto é <strong>ILI</strong>. LII é ' +
        'Ti–Ne, que é o INTP. E nada disso tem revisão por pares, amostra publicada ou norma: é ' +
        'tradução entre dois mapas, nunca uma segunda medição.',
      sources: ['augustinaviciute-1998', 'wikisocion-ili'],
    },
    {
      term: 'Model A',
      system: 'Socionics',
      short:
        'O esqueleto de oito posições do socionics — e a distinção que a pilha de quatro não faz: ' +
        'fraco-e-desejado contra fraco-e-dolorido.',
      long:
        'O Model A cruza três perguntas — você é forte nisto, você dá valor a isto, isto é ' +
        'deliberado ou automático — e distribui os oito ' +
        'elementos em oito posições. Para o ILI, Se cai na posição 5, sugestiva: fraca e ' +
        'desejada, o empurrão físico que você aceita com alívio de quem o tem. Fe cai na posição ' +
        '4, vulnerável: fraca e dolorida, onde qualquer crítica entra como ataque pessoal. Essa ' +
        'separação é uma das duas coisas que o socionics oferece e o MBTI não — a outra são as ' +
        'relações intertipo —, e tem valor prático ' +
        'imediato: o INTJ que confunde as duas passa anos tentando desenvolver sociabilidade ' +
        'calorosa quando o que faltava era corpo, ritmo e presença. Sem nenhum teste por trás: ' +
        'não há amostras, normas nem confiabilidade entre avaliadores.',
      sources: ['augustinaviciute-1998', 'wikisocion-ili'],
    },

    {
      term: 'DISC',
      system: 'DISC',
      short:
        'Quatro estilos de comportamento observável — não funções, não preferência interna. ' +
        'Marston, 1928.',
      long:
        'William Marston cruzou duas perguntas — o ambiente é favorável ou hostil, você é mais ' +
        'forte ou mais fraco que ele — e obteve Dominância, Indução, Submissão e Complacência. ' +
        'Ele não escreveu um teste; os instrumentos vieram décadas depois, e hoje existem dezenas ' +
        'de versões comerciais com normas incompatíveis, o que torna “o meu DISC” uma pergunta ' +
        'sem resposta única. O “INTJ = D + C” que circula em treinamento corporativo nunca foi ' +
        'verificado: no único estudo publicado que correlacionou os dois sistemas, com 130 ' +
        'estudantes, Pensamento apareceu ligado a <em>menos</em> dominância, e não a mais. O ' +
        'valor do DISC para você é justamente a rasura: ele descreve a superfície que a sala vê, ' +
        'que é onde mora quase todo o seu problema social.',
      sources: ['marston-1928', 'kim-2025-mbti-disc', 'pittenger-2005'],
    },

    {
      term: 'Confiabilidade teste-reteste',
      system: 'Crítica',
      short:
        'Se o mesmo teste devolve o mesmo resultado semanas depois. No MBTI, para muita gente, ' +
        'ele não devolve.',
      long:
        'É a exigência mais básica que se faz a um instrumento, e o MBTI a cumpre mal: já em 1979 ' +
        'Howes e Carskadon relataram troca de letra no reteste associada a mudança de humor, e o ' +
        'padrão reaparece na literatura seguinte. O mecanismo não é mistério nenhum — a letra é ' +
        'um corte aplicado a um escore contínuo, então quem está perto do corte muda de lado com ' +
        'a semana que teve. O que isso significa para você é mais interessante do que parece: não ' +
        'quer dizer que você não seja INTJ, quer dizer que o questionário é um jeito ruim de ' +
        'decidir isso — e que o reconhecimento que você sente lendo uma descrição está fazendo ' +
        'mais trabalho do que o teste.',
      sources: ['howes-carskadon-1979', 'pittenger-2005', 'myers-1998-manual'],
    },
    {
      term: 'Bimodalidade',
      system: 'Crítica',
      short:
        'A previsão de que os escores formariam dois montes nos polos. Eles formam um monte só, ' +
        'no meio.',
      long:
        'Se existissem mesmo duas espécies de pessoas — introvertidas e extrovertidas —, a ' +
        'distribuição dos escores mostraria dois picos. Bess e Harvey (2002) testaram isso ' +
        'diretamente com cerca de doze mil respondentes e encontraram distribuições centradas, ' +
        'não bimodais. É o coração técnico de toda a crítica ao MBTI: quem categoriza é o ponto ' +
        'de corte, não a natureza. Isso não anula o vocabulário — anula tratar cada letra como ' +
        'uma fronteira encontrada no mundo. Você não é um INTJ do jeito que um elemento químico é ' +
        'carbono. Você está numa região do espaço em que essa descrição funciona bem.',
      sources: ['bess-harvey-2002', 'pittenger-2005'],
    },
    {
      term: 'Validade preditiva',
      system: 'Crítica',
      short:
        'Se um escore prevê algo no futuro — desempenho, permanência, satisfação. É onde a ' +
        'evidência é mais fraca e o uso mais tentador.',
      long:
        'Pittenger (2005) resume o problema sem rodeios: a evidência não sustenta usar o MBTI ' +
        'para orientar decisões consequentes — seleção, promoção, direção de carreira. E a ' +
        'orientação ética da própria fundação chega ao mesmo lugar prático por outro caminho, ' +
        'que é o do uso e não o da evidência: o instrumento não foi desenhado para contratar, ' +
        'não mede habilidade, competência nem destreza, e resultado nenhum deve ser usado para ' +
        'limitar quem quer que seja. ' +
        'Traduzindo para o seu caso, sem consolo e sem crueldade: nada em Ni–Te–Fi–Se prevê que ' +
        'você será um bom engenheiro, um mau parceiro ou uma mente rara. A pilha descreve a ' +
        'estrada que você tende a pegar. Aonde ela chega é outra pergunta — e é justamente a ' +
        'pergunta que este vocabulário não responde.',
      sources: ['pittenger-2005', 'mbf-ethics', 'reynierse-2009'],
    },
  ],
};
