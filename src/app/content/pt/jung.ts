import type { SourceId } from '../sources';
import type { ModelPageContent } from '../types';

export const JUNG_PT: ModelPageContent = {
  meta: {
    title: 'Jung — o original, e tudo que foi acrescentado depois',
    description:
      'A genealogia completa do INTJ: o intuitivo introvertido de 1921 nas palavras de Jung, as ' +
      'quatro letras de Briggs e Myers nos anos 1940, a pilha de Grant em 1983, os arquétipos de ' +
      'Beebe e os ramos comerciais. Quem acrescentou o quê, e quando.',
  },

  sources: [
    'jung-1921',
    'von-franz-1971',
    'saunders-1991',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-type-dynamics',
    'mbf-ethics',
    'quenk-2002-grip',
    'grant-1983',
    'reynierse-2009',
    'pittenger-2005',
    'stein-swan-2019',
    'beebe-2017',
    'keirsey-bates-1978',
    'keirsey-1998',
    'neris-our-theory',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Além do MBTI — Jung',
    title: 'Jung: o original,\ne tudo que veio depois',
    lede:
      'Quase tudo que você já leu sobre o INTJ desce de um capítulo escrito em 1921 por um ' +
      'psiquiatra suíço que nunca usou a sigla, nunca aplicou um questionário e não teria ' +
      'separado você de um INFJ. O resto — a pilha de quatro funções, a quarta letra, os ' +
      'arquétipos, o sufixo -T — foi acrescentado depois, por gente diferente, por motivos ' +
      'diferentes. Esta página é a genealogia inteira, em ordem.',
  },

  intro:
    '<em>Tipos Psicológicos</em> não é um manual de tipos. É um livro de setecentas páginas sobre ' +
    'história das ideias, com o capítulo dos tipos no fim, escrito por alguém que estava tentando ' +
    'entender por que dois clínicos competentes — Freud e Adler — olhavam para o mesmo paciente e ' +
    'produziam teorias opostas. O tipo, para Jung, era a resposta a essa pergunta. Não era um ' +
    'resultado de teste, e ainda faltavam vinte anos para a primeira letra da sua sigla existir.',

  caveat:
    'Jung não mediu nada. Não há amostra, questionário, norma nem estatística em <em>Tipos ' +
    'Psicológicos</em> — há observação clínica de vinte anos e leitura de Schiller, Nietzsche e ' +
    'da escolástica medieval. Isso significa que tudo que veio depois, do MBTI ao socionics, ' +
    'herdou um esquema descritivo, não um esquema verificado. E significa que “Jung disse que ' +
    'INTJs…” é sempre falso: a sigla é de Myers. Daqui para a frente, cada seção nomeia quem ' +
    'acrescentou o quê e em que ano — porque saber de que camada vem uma frase é a única defesa ' +
    'real contra tipologia mal usada.',

  sections: [
    {
      eyebrow: '1921 · Psychologische Typen',
      title: 'De onde o livro veio',
      paragraphs: [
        'Jung publicou <em>Psychologische Typen</em> em 1921, oito anos depois da ruptura com ' +
          'Freud, e disse com todas as letras qual era a pergunta que o movia: como duas teorias ' +
          'incompatíveis — a de Freud, centrada no objeto e no desejo dirigido para fora, e a de ' +
          'Adler, centrada no sujeito e no poder — podiam ambas parecer verdadeiras a quem as ' +
          'formulou. A conclusão foi que a diferença não estava nos dados, estava na direção ' +
          'habitual da consciência de cada um.',
        'O que saiu daí não parece com um teste de personalidade. Os primeiros nove capítulos ' +
          'atravessam o problema dos tipos na Antiguidade, na patrística, na disputa entre ' +
          'nominalistas e realistas, em Schiller, em Nietzsche, na poesia de Spitteler. As ' +
          'descrições dos oito tipos ocupam o capítulo X, no fim, e são explicitamente ' +
          'apresentadas como retratos extremos — casos limpos que quase não existem em estado ' +
          'puro.',
        'Registre isso antes de qualquer outra coisa, porque tudo o que vem depois herda daqui: ' +
          'não existe medida na origem. Existe um clínico atento descrevendo o que via, com ' +
          'uma erudição enorme e nenhuma amostra. A força do texto é literária e observacional. ' +
          'A fraqueza é que não há como ele estar errado de um jeito que se possa demonstrar.',
      ],
    },
    {
      eyebrow: 'Capítulo X',
      title: 'O intuitivo introvertido, nas palavras dele',
      paragraphs: [
        'A intuição introvertida, para Jung, não percebe possibilidades no mundo exterior — ' +
          'percebe as imagens de fundo da própria consciência, os processos que ainda não ' +
          'chegaram à superfície. É uma percepção, não um julgamento: chega pronta, sem cadeia de ' +
          'raciocínio, e por isso quem a tem não consegue explicar de onde veio. Jung a chama de ' +
          'visão, e trata o portador dela como alguém que vê o que ainda não aconteceu.',
        'E então ele faz a coisa mais honesta do livro: descreve os dois destinos possíveis do ' +
          'mesmo tipo. Quando a intuição introvertida tem prioridade, escreve, o resultado é “o ' +
          'sonhador místico e vidente de um lado, o excêntrico fantasista e o artista de outro”. ' +
          'Nenhum perfil moderno faria isso — nenhum diz que a sua melhor versão e a sua pior ' +
          'versão são a mesma estrutura com sorte diferente.',
        'A dificuldade central do tipo, para Jung, é de linguagem: como a fala dele “não é aquela ' +
          'que se fala comumente”, os argumentos que apresenta não convencem na medida em que ' +
          'deveriam. Leia de novo, devagar. Essa é a descrição mais precisa que existe do fracasso ' +
          'específico do INTJ — estar certo e não persuadir ninguém — e Jung localiza a falha na ' +
          'linguagem de quem vê, não na burrice de quem escuta.',
        'O problema moral que ele atribui ao tipo é o mesmo, dito de outro modo: dar forma ' +
          'transmissível à visão. Uma visão que fica privada não vale nada, e o intuitivo ' +
          'introvertido tende a se contentar com ela justamente porque, para ele, ela já está ' +
          'completa. É a tarefa de uma vida inteira dita em 1921, antes de existir a palavra ' +
          '“INTJ”.',
      ],
    },
    {
      eyebrow: 'O ponto decisivo',
      title: 'Jung não te distinguiria de um INFJ',
      paragraphs: [
        'No esquema original há <strong>um</strong> tipo intuitivo introvertido. Um só. A pessoa ' +
          'cuja consciência é governada pela intuição voltada para dentro pertence a esse tipo, e ' +
          'ponto — Jung não subdivide conforme o que vem em segundo lugar. O INTJ e o INFJ, ' +
          'portanto, são <em>o mesmo tipo junguiano</em>, descritos no mesmo capítulo, com as ' +
          'mesmas palavras sobre o místico e o excêntrico.',
        'A letra que separa vocês dois — T ou F — é a maneira de Myers de nomear a função ' +
          'auxiliar, dentro de uma regra que ela criou e que Jung não formulou. Não é um refino ' +
          'do original; é uma decisão teórica acrescentada por cima. Quando alguém escreve “Jung ' +
          'dizia que o INTJ…”, está citando Myers com o nome errado na capa.',
        'Isso tem uma consequência prática que qualquer fórum de tipologia confirma: a confusão ' +
          'INTJ/INFJ é a mais comum e a mais difícil de resolver. Não é acaso nem falta de ' +
          'atenção. Nos termos de Jung, os dois compartilham exatamente aquilo que ele considerava ' +
          'definidor — a mesma percepção interior, a mesma certeza sem cadeia de raciocínio, a ' +
          'mesma dificuldade de traduzir — e diferem apenas naquilo que ele nunca sistematizou.',
      ],
    },
    {
      eyebrow: 'A função inferior',
      title: 'A porta que você não opera',
      paragraphs: [
        'Jung chamava de função inferior a que fica no polo oposto da dominante e permanece no ' +
          'inconsciente: arcaica, lenta, tudo-ou-nada, indisponível à vontade. Não é uma ' +
          'habilidade fraca que dá para treinar até ficar razoável. É a parte da psique que o eu ' +
          'não controla — e, por isso mesmo, a única porta por onde entra o que o eu ainda não ' +
          'sabe sobre si.',
        'Marie-Louise von Franz dedicou a ela um ciclo de conferências inteiro, publicado em ' +
          '1971, e a descrição é dura: a função inferior é infantil, tirânica quando irrompe, ' +
          'incapaz de meio-termo, e é onde acontece qualquer mudança real de personalidade, ' +
          'precisamente porque não pode ser operada pela competência. Para o intuitivo ' +
          'introvertido essa função é a sensação extrovertida — o corpo, a sala, o detalhe ' +
          'concreto, o presente.',
        'É daí que vem tudo o que a literatura posterior de tipo chama de “grip”, vocabulário que ' +
          'Naomi Quenk popularizou nos anos 1990: a queda súbita em excesso sensorial, hiperfoco ' +
          'em detalhe irrelevante, hipocondria, compulsão. A genealogia importa porque muda a ' +
          'leitura. Não é um bug do INTJ a ser corrigido com disciplina; é, na descrição ' +
          'junguiana, o modo como a parte não integrada da psique se apresenta quando a parte ' +
          'integrada se esgota.',
        'Vale a ressalva de sempre: von Franz é interpretação analítica, não medida. A ' +
          'plausibilidade clínica é alta, a base empírica é inexistente, e a distância entre as ' +
          'duas coisas é onde mora quase toda a tipologia popular.',
      ],
    },
    {
      eyebrow: 'O aviso',
      title: 'Jung contra o uso que fazemos de Jung',
      paragraphs: [
        'Num ensaio posterior, recolhido no mesmo volume das obras completas, Jung escreveu que o ' +
          'objetivo de uma tipologia psicológica não é classificar seres humanos em categorias — ' +
          'isso, disse ele, seria bastante inútil. O objetivo é dar ao clínico um aparelho ' +
          'crítico: um modo de saber que a sua própria leitura do paciente já vem torta, e em que ' +
          'direção.',
        'A ironia é evidente e vale ser dita sem elegância: o leitor mais em risco de usar o tipo ' +
          'como rótulo é justamente o que lê melhor, guarda mais e sistematiza mais. Que é você. ' +
          'O INTJ tem uma queda particular por sistemas fechados que expliquem gente, e a defesa ' +
          'contra isso não é abandonar a tipologia — é lembrar que ela descreve uma tendência da ' +
          'consciência, não emite uma licença.',
        'Jung também insistia que o tipo é uma disposição habitual, não uma essência, e que os ' +
          'retratos do capítulo X são casos extremos que ninguém encarna inteiramente. Um século ' +
          'depois, com dezesseis siglas vendidas como identidade, essa é provavelmente a frase ' +
          'mais útil que ele deixou.',
      ],
    },
    {
      eyebrow: 'Oito atitudes-função',
      title: 'Jung não tem pilha nenhuma',
      paragraphs: [
        'O esquema de Jung é simples: duas atitudes — introvertida e extrovertida — cruzadas com ' +
          'quatro funções — pensamento, sentimento, sensação e intuição. Oito atitudes-função, ' +
          'oito retratos. Não há primeira, segunda, terceira e quarta posição. Não há regra ' +
          'dizendo que a função auxiliar precisa estar na atitude oposta à dominante. Não há ' +
          'código de quatro letras, porque não há a quarta letra.',
        'Jung menciona, de passagem, que costuma haver uma segunda função de importância ' +
          'secundária, e impõe uma única restrição: ela não pode ser a oposta da principal. Se o ' +
          'pensamento domina, a segunda será sensação ou intuição, nunca sentimento. Sobre a ' +
          '<em>atitude</em> dessa segunda função ele é praticamente silencioso — e é exatamente ' +
          'nesse silêncio que Myers construiu o sistema inteiro.',
        'Guarde o tamanho desse buraco, porque as próximas seções são feitas dele. Jung não ' +
          'numerou posições, não fixou uma atitude para cada posição, não escreveu quatro letras ' +
          'e não disse uma palavra sobre INTJ. Tudo isso existe — e funciona razoavelmente bem ' +
          'como linguagem — porque outras pessoas construíram depois, cada uma resolvendo um ' +
          'problema seu. Daqui em diante, cada acréscimo tem nome, ano e motivo.',
      ],
    },
    {
      eyebrow: 'Anos 1940 · Briggs e Myers',
      title: 'Duas mulheres, fora da academia, em tempo de guerra',
      paragraphs: [
        'Katharine Cook Briggs vinha esboçando sozinha, em casa, uma tipologia própria a partir ' +
          'de biografias e das pessoas ao redor quando leu a tradução inglesa de <em>Tipos ' +
          'Psicológicos</em>, publicada em 1923. Reconheceu ali um sistema melhor que o dela e ' +
          'adotou o de Jung. A filha, Isabel Briggs Myers, formada em ciência política, começou no ' +
          'início dos anos 1940 a transformar aquele esquema descritivo em algo que se pudesse ' +
          'responder num papel.',
        'Nenhuma das duas tinha formação em psicologia. Conta a biógrafa Frances Saunders que ' +
          'Myers aprendeu construção de itens e estatística de teste como aprendiz de Edward Hay, ' +
          'gerente de pessoal de um banco na Filadélfia — não num departamento universitário, mas ' +
          'num escritório de recursos humanos. O motivo era de guerra: com milhões de mulheres ' +
          'entrando em fábricas e escritórios pela primeira vez, Myers queria um instrumento que ' +
          'ajudasse cada pessoa a encontrar um posto compatível com o próprio modo de funcionar. A ' +
          'primeira forma do indicador circulou por volta de 1943.',
        'Vale pesar isso sem desprezo e sem indulgência, porque as duas leituras fáceis erram. ' +
          'Duas leigas brilhantes construíram, fora da universidade, o instrumento de tipo mais ' +
          'aplicado do mundo; a psicologia acadêmica só foi examiná-lo com atenção décadas ' +
          'depois, e as revisões que fez são predominantemente críticas. A parte que te interessa ' +
          'é outra: a sigla INTJ não é um achado de pesquisa. É uma decisão de projeto, tomada por ' +
          'uma pessoa específica, com um objetivo específico, num ano específico.',
        'E o que Myers acrescentou a Jung é grande, e quase nunca é creditado a ela. Quatro ' +
          'invenções: o formato de quatro dicotomias em lugar de oito retratos; um questionário ' +
          'que produz o resultado sem um clínico no meio; a regra de que a auxiliar roda na ' +
          'atitude contrária à dominante; e a quarta letra. Duas delas — a regra da auxiliar e a ' +
          'quarta letra — são exatamente o que faz o INTJ existir como coisa separada do INFJ. ' +
          'Sem elas, você é o intuitivo introvertido de 1921 e mais nada.',
      ],
    },
    {
      eyebrow: 'A quarta letra',
      title: 'O J é um ponteiro, não um traço',
      paragraphs: [
        'A letra J não está em Jung. Não existe em <em>Tipos Psicológicos</em> nenhum eixo ' +
          'julgamento/percepção, nenhuma preferência por fechar assunto ou manter aberto. A quarta ' +
          'letra é invenção de Myers, e a função dela dentro do sistema é técnica: apontar qual ' +
          'das suas funções é a extrovertida — a que o mundo vê.',
        'Para um extrovertido, a quarta letra aponta para a dominante. Para você, que é ' +
          'introvertido, ela aponta para a auxiliar: J significa que a função virada para fora é ' +
          'uma função de julgamento, e como o seu julgamento é o pensamento, significa Te. É só ' +
          'isso. O J do INTJ é um ponteiro para o Te — não uma declaração sobre a sua agenda, a ' +
          'sua mesa ou o estado do seu quarto.',
        'Isso resolve uma dúvida que quase todo INTJ tem em algum momento: “eu vivo no caos, será ' +
          'que sou P?”. Na lógica do sistema, não necessariamente — dá para ter roupa no chão e ' +
          'ainda assim extroverter julgamento, porque a ordem que você mantém é de critério e de ' +
          'conclusão, não de objeto. O que embaralha tudo é que os itens do próprio questionário ' +
          'perguntam sobre listas, prazos e planejamento: a teoria diz ponteiro, o instrumento ' +
          'mede arrumação. As duas coisas convivem dentro do mesmo J desde o começo, e boa parte ' +
          'da confusão popular sobre a letra nasce exatamente aí.',
      ],
    },
    {
      eyebrow: '1983 · Grant, Thompson e Clarke',
      title: 'A pilha que a internet inteira cita',
      paragraphs: [
        'Em 1983, Harold Grant, Magdala Thompson e Thomas Clarke publicaram <em>From Image to ' +
          'Likeness</em>. Não é um livro de psicometria. É um livro de espiritualidade cristã, ' +
          'saído pela Paulist Press, sobre um caminho junguiano dentro da jornada do Evangelho. É ' +
          'nele que está formalizada a pilha de quatro posições com atitudes alternadas que hoje ' +
          'estrutura toda a conversa sobre funções cognitivas, de fórum a vídeo a este site.',
        'A regra é elegante: as atitudes se alternam, posição a posição. No INTJ isso dá intuição ' +
          'introvertida, pensamento extrovertido, sentimento introvertido, sensação extrovertida ' +
          '— a pilha que você já viu mil vezes escrita como <strong>Ni–Te–Fi–Se</strong>. Grant e ' +
          'colegas acrescentaram também um cronograma de desenvolvimento, com faixas etárias para ' +
          'o amadurecimento de cada função. É desse livro, e não de Jung nem de Myers, que vem a ' +
          'ideia de que a terciária acorda por volta dos vinte e poucos anos.',
        'O ponto que quase nunca se diz: Myers deixou a atitude da função terciária ' +
          'deliberadamente em aberto, e a Myers & Briggs Foundation continua deixando. A página ' +
          'oficial sobre dinâmica de tipo descreve dominante, auxiliar, terciária e inferior sem ' +
          'fixar se a terciária é introvertida ou extrovertida. Ou seja: quando alguém afirma com ' +
          'segurança que o seu sentimento terciário é <strong>Fi</strong> e não Fe, essa pessoa ' +
          'está citando Grant — não Myers, e muito menos Jung.',
        'E Grant também não mediu nada. A alternância é uma escolha de simetria: bonita, fácil de ' +
          'ensinar, sem estudo por trás. Reynierse, revisando a literatura, chegou a argumentar ' +
          'que a dinâmica de tipo inteira não acrescenta poder explicativo às quatro preferências ' +
          'tomadas isoladamente. Isso não obriga você a jogar fora o vocabulário — obriga a saber ' +
          'o que ele é: uma gramática, não um resultado.',
      ],
    },
    {
      eyebrow: 'Beebe',
      title: 'Oito posições, oito arquétipos',
      paragraphs: [
        'John Beebe, analista junguiano, estendeu o esquema de quatro para oito posições e deu a ' +
          'cada atitude-função um papel arquetípico. As quatro conscientes ganham nomes: herói, ' +
          'bom pai, criança eterna, anima. As quatro de sombra — as mesmas funções rodando na ' +
          'atitude oposta — ganham personalidade oponente, senex, trickster e função demoníaca. É ' +
          'um mapa de oito casas onde a pilha de Myers tinha quatro.',
        'Aplicado ao INTJ: Ni como herói, Te como bom pai, Fi como criança eterna, Se como anima; ' +
          'do outro lado, Ne como personalidade oponente, Ti como senex, Fe como trickster e Si ' +
          'como função demoníaca. Algumas dessas descrições são desconfortavelmente ' +
          'reconhecíveis. O Fe trickster, por exemplo, é o INTJ que tenta ser caloroso numa ' +
          'situação social, calcula o gesto certo, executa — e produz exatamente o efeito ' +
          'contrário, saindo da sala sem entender o que aconteceu.',
        'Reconhecer-se não é o mesmo que ter prova, e aqui o rigor precisa ser proporcional ao ' +
          'entusiasmo: nada disso foi testado, nada disso está em Jung com esses nomes, e a maior ' +
          'parte do material circula em fórum e vídeo, não em revista revisada por pares. Beebe ' +
          'reuniu o modelo em <em>Energies and Patterns in Psychological Type</em>, em 2017. Leia ' +
          'como linguagem clínica — útil para nomear estados que você já viveu, inútil como prova ' +
          'de qualquer coisa.',
      ],
    },
    {
      eyebrow: 'Os ramos comerciais',
      title: 'Keirsey e NERIS: outras duas coisas chamadas INTJ',
      paragraphs: [
        'Enquanto a linhagem junguiana se ramificava, dois ramos comerciais cresceram ao lado do ' +
          'tronco e hoje são confundidos com ele. O primeiro é David Keirsey, que a partir de ' +
          '<em>Please Understand Me</em>, em 1978, pegou as quatro letras e as reagrupou em quatro ' +
          'temperamentos observáveis, descartando de propósito as funções cognitivas: ele dizia ' +
          'estar interessado no que as pessoas fazem, não no que se passa dentro delas.',
        'No sistema de Keirsey você é um Racional (NT), e em <em>Please Understand Me II</em>, de ' +
          '1998, recebe o papel de Mastermind — o estrategista de contingência, o que mantém ' +
          'planos prontos para cenários que ainda não aconteceram. É um retrato bem feito, e ' +
          'precisa ser dito com todas as letras que ele não deriva de Ni–Te. Keirsey chegou a esse ' +
          'INTJ por outro caminho, partindo de Hipócrates e de tipologias de comportamento; a ' +
          'sigla coincide e a teoria por baixo discorda.',
        'O segundo ramo é o mais provável de ter sido a sua porta de entrada. A NERIS Analytics, ' +
          'que opera o 16Personalities, manteve as quatro letras como rótulo e trocou toda a ' +
          'maquinaria por baixo: as dicotomias viraram cinco escalas contínuas, alinhadas ao ' +
          'modelo dos cinco grandes fatores, e as funções cognitivas foram explicitamente ' +
          'abandonadas. É a própria empresa que diz isso na página em que descreve a sua teoria.',
        'A quinta escala é a que você viu como sufixo: o <strong>-A</strong> de assertivo e o ' +
          '<strong>-T</strong> de turbulento. Ela não existe no MBTI, não existe em Grant e não ' +
          'existe em Jung; na descrição da própria NERIS, é a escala de identidade, aparentada ao ' +
          'neuroticismo dos cinco fatores. Se você se identificou com “INTJ-T”, vale saber que ' +
          'essa parte da sigla é a mais nova e a menos junguiana de todas — e que o que ela ' +
          'descreve é sensibilidade a estresse e a dúvida, não intuição.',
      ],
    },
    {
      eyebrow: 'A linha do tempo',
      title: 'De que camada vem a frase que você acabou de ler',
      paragraphs: [
        'Junte tudo e o desenho fica nítido. Jung, em 1921, descreveu um intuitivo introvertido — ' +
          'sem sigla, sem pilha, sem letra final, sem separação entre você e o INFJ. Briggs e ' +
          'Myers, nos anos 1940, acrescentaram a quarta letra, a regra da auxiliar e o ' +
          'questionário. Grant, Thompson e Clarke, em 1983, acrescentaram as atitudes alternadas ' +
          'e o cronograma de desenvolvimento. Beebe acrescentou os oito arquétipos. Keirsey e a ' +
          'NERIS construíram, cada um, outra coisa com o mesmo nome. Quase nada do que você acha ' +
          'que é “o MBTI” está em Jung, e quase nada do que está em Jung sobreviveu inteiro ao ' +
          'caminho.',
        'A razão de isso importar não é purismo. É que a camada determina o peso. Uma frase de ' +
          'Jung é a observação de um clínico atento sem nenhum dado atrás. Uma frase de Grant é ' +
          'uma escolha de simetria. Uma frase da NERIS é um item de questionário calibrado em ' +
          'amostra grande. Tratar as três como se tivessem a mesma força é somar uma lembrança, ' +
          'um desenho e uma medição — e é assim que se produz a maior parte do que circula por aí ' +
          'sobre o seu tipo.',
        'Então esta é a única habilidade que a página realmente quer te deixar: diante de ' +
          'qualquer afirmação sobre o INTJ, perguntar de que camada ela vem. Um exemplo de cada:',
      ],
      points: [
        '“Você é dominante de Ni.” — Myers e Grant. Jung tem intuição introvertida, não posições ' +
          'numeradas.',
        '“Sua terciária é Fi, e portanto introvertida.” — Grant, 1983. Myers deixou o ponto em ' +
          'aberto e a Myers & Briggs Foundation continua deixando.',
        '“Se é a sua inferior, por isso o colapso sensorial sob estresse.” — o conceito de função ' +
          'inferior é de Jung, a posição fixa é de Myers, e o vocabulário do “grip” é de Naomi ' +
          'Quenk, nos anos 1990.',
        '“O seu Fe é trickster.” — Beebe, e só Beebe. Nenhuma outra camada usa essa palavra.',
        '“Você é um Mastermind.” — Keirsey, 1998, dentro de um sistema que rejeita as funções ' +
          'cognitivas que você acabou de ler.',
        '“Você é INTJ-T.” — NERIS. Essa quinta letra vem do modelo dos cinco fatores e não tem ' +
          'equivalente no MBTI.',
        '“O INTJ é o tipo mais inteligente, o melhor para liderar, o que dá certo na vida.” — ' +
          'nenhuma camada; é folclore de internet. A orientação ética da própria Myers & Briggs ' +
          'Foundation é explícita: o instrumento não mede habilidade, competência nem perícia, ' +
          'não foi desenhado para contratar ninguém, e os resultados jamais devem ser usados ' +
          'para limitar alguém — e nenhum dos modelos desta página afirma que um tipo vale mais ' +
          'que outro.',
      ],
    },
  ],

  verdict: {
    title: 'O que fica de pé',
    text:
      'Depois de separar as camadas, sobra menos do que se vende e mais do que se teme. Sobra ' +
      'Jung: o retrato inteiro do qual o perfil moderno é o resumo, os dois polos do mesmo tipo — ' +
      'o vidente e o excêntrico — em vez de um elogio administrado, e a melhor formulação ' +
      'existente do seu problema central, que é a visão chegar inteira numa língua que não é a ' +
      'que se fala comumente. Sobra, de Myers, um formato que comunica e viaja. Sobra, de Grant, ' +
      'um vocabulário utilizável para pensar sobre si mesmo. O que não sobra é medida, previsão ' +
      'ou qualquer meio, dentro do esquema original, de te distinguir de um INFJ. Inventar não é ' +
      'o mesmo que descobrir — e saber de que camada vem cada frase é, honestamente, a coisa mais ' +
      'útil que este site pode te entregar.',
    weight:
      'O texto de origem é observação clínica e interpretação literária, sem nenhum dado por ' +
      'trás: carrega peso autoral, não peso probatório. Cada camada acrescentada depois herdou ' +
      'essa fundação e construiu por cima dela com confiança crescente, sem nunca voltar para ' +
      'conferi-la — e, como costuma acontecer, as camadas mais recentes são as que mais soam a ' +
      'ciência. Leia esta página como a genealogia de um vocabulário, não como uma cadeia de ' +
      'evidências. O vocabulário é bom. A cadeia nunca existiu.',
  },
};
