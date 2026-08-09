import type { GeneroContent } from '../types';

export const GENERO_PT: GeneroContent = {
  meta: {
    title: 'INTJ homem, INTJ mulher — o mesmo tipo em duas leituras',
    description:
      'Os 0,8% não são um fato sobre o INTJ: são a assimetria de Pensamento–Sentimento vista ' +
      'através de um tipo. O que muda, o que não muda e o que ninguém mediu.',
  },

  sources: [
    'jung-1921',
    'myers-1998-manual',
    'mbtionline-2024',
    'capt-2003',
    'mbf-ethics',
    'pittenger-2005',
    'grant-1983',
    'quenk-2002-grip',
    'beebe-2017',
  ],

  header: {
    eyebrow: 'Página 09 — Gênero',
    title: 'O mesmo tipo,\nlido de duas maneiras',
    lede:
      'A pilha cognitiva não tem sexo. A sala tem. Esta página é sobre a distância entre o que o ' +
      'seu tipo <em>é</em> e o que ele <strong>parece</strong> quando aparece num corpo lido ' +
      'como masculino ou num corpo lido como feminino — e sobre o número famoso que quase todo ' +
      'mundo cita errado.',
  },

  intro:
    'Duas advertências antes de começar. A primeira: nada aqui afirma que homens e mulheres INTJ ' +
    'pensam de modo diferente. A ordem <strong>Ni · Te · Fi · Se</strong> é idêntica nos dois ' +
    'casos; o que muda é a resposta que ela recebe. A segunda: as duas seções centrais estão ' +
    'escritas em terceira pessoa, e isso é deliberado — nem todo leitor se reconhece em uma das ' +
    'duas caixas, e forçar “você” dentro delas obrigaria a concordância de gênero a cada frase. ' +
    'Onde o texto voltar a falar com você, ele fala com qualquer você.',

  caveat:
    'As frequências desta página são estimativas para os Estados Unidos, compiladas a partir de ' +
    'resultados coletados entre 1972 e 2002 em mais de um acervo norte-americano. ' +
    'Não existe amostra normativa brasileira, e nenhuma dessas amostras é um censo. As ' +
    'observações sociais que vêm depois são padrão, não medida: nenhum estudo isolou “ser uma ' +
    'mulher INTJ” como variável, e o que você vai ler é leitura de regularidade — útil como ' +
    'hipótese sobre a sua vida, inútil como prova sobre a de outra pessoa.',

  premise: {
    eyebrow: 'A premissa · de onde vem o número',
    title: '0,8% não é um fato sobre o INTJ',
    paragraphs: [
      'O dado circula sozinho, sem contexto, como se dissesse alguma coisa sobre mulheres e ' +
        'pensamento estratégico: <strong>0,8% das mulheres norte-americanas são INTJ, contra ' +
        '3,3% dos homens</strong>. Sozinho, ele não diz nada — ou diz a coisa errada. Para ' +
        'entender de onde vem, é preciso desmontá-lo em letras.',
      'Três das quatro dicotomias do MBTI variam pouco entre os sexos nas contagens ' +
        'norte-americanas: introversão e extroversão, sensação e intuição, julgamento e ' +
        'percepção — há diferença, mas na casa de poucos pontos. A quarta não. Pensamento e ' +
        'Sentimento é, de longe, a dicotomia mais diferenciada por sexo do instrumento inteiro: ' +
        'nas amostras norte-americanas mais citadas, cerca de dois terços dos homens preferem ' +
        'Pensamento e a maioria das mulheres prefere Sentimento — a proporção exata oscila ' +
        'conforme a amostra e a edição do manual, a direção nunca. Quase toda a raridade extra ' +
        'da mulher INTJ entra por uma única letra, a terceira — e o pedaço que sobra depois dela ' +
        'é o assunto de dois parágrafos adiante.',
      'E aqui está a pergunta que ninguém respondeu: essa assimetria mede o quê? Pode medir ' +
        'disposição. Pode medir o que cada sexo aprendeu a dizer sobre si mesmo num questionário ' +
        '— o instrumento não observa você decidindo, ele pergunta que tipo de decisão você ' +
        'prefere, e a resposta atravessa tudo aquilo pelo que você já foi elogiado ou punido ao ' +
        'afirmar sobre si. As duas leituras cabem nos mesmos números. O <em>Manual</em> registra ' +
        'a diferença; não a explica. E a crítica psicométrica ao instrumento é bem clara quanto ' +
        'ao que um autorrelato desse tipo pode e não pode sustentar.',
      'Uma última honestidade aritmética: 3,3% e 0,8% estão numa razão de mais ou menos quatro ' +
        'para um, o que é maior do que a assimetria de Pensamento–Sentimento sozinha faria ' +
        'esperar. O excedente pode vir de interação entre as letras, de amostragem, de quem se ' +
        'dispõe a responder um questionário de tipo. Não há explicação estabelecida, e quem ' +
        'oferecer uma com segurança está inventando.',
      'Dito assim — a assimetria de uma preferência, vista através de um tipo — o número deixa ' +
        'de ser espantoso e passa a ser interessante. Não é uma medida de quantas mulheres ' +
        'pensam como você. É uma medida de quantas dizem que pensam.',
    ],
    points: [
      'INTJ: 2,1% dos adultos nos EUA, 3,3% dos homens, 0,8% das mulheres.',
      'A diferença entre os sexos é grande em T–F e pequena nas outras três dicotomias.',
      'Se a assimetria reflete disposição ou autorrelato treinado: não resolvido.',
      'Frequências estimadas para os Estados Unidos. Não há amostra normativa brasileira.',
    ],
  },

  stats: [
    { value: '2,1%', label: 'dos adultos nos EUA' },
    { value: '3,3%', label: 'dos homens nos EUA' },
    { value: '0,8%', label: 'das mulheres nos EUA' },
    { value: '≈ 4×', label: 'a razão entre os dois — mais do que T–F sozinha explica' },
  ],

  sides: {
    man: {
      title: 'O INTJ homem',
      lede:
        'Quase nada do que ele faz precisa de explicação — e é exatamente por isso que quase ' +
        'nada nele é <em>obrigado</em> a crescer.',
      paragraphs: [
        'Existe um roteiro pronto para homens que falam pouco, decidem rápido e não pedem ' +
          'aprovação, e o INTJ cai dentro dele quase sem sobra. A fala em conclusões, que é Te ' +
          'editando o processo inteiro antes de abrir a boca, chega como autoridade em vez de ' +
          'grosseria. O silêncio longo de Ni, que é apenas a função ainda convergindo, é lido ' +
          'como profundidade. A recusa de tranquilizar alguém — Fi que não negocia e não sabe ' +
          'consolar — passa por firmeza. Nenhuma dessas leituras é falsa. Nenhuma delas é sobre ' +
          'ele. São sobre o roteiro.',
        'O efeito prático é um desconto permanente. Ele erra socialmente e o erro é absorvido; ' +
          'interrompe e é chamado de objetivo; entrega uma crítica sem embalagem e a sala assume ' +
          'que a falta de embalagem foi economia de tempo, não descuido. Um INTJ homem passa a ' +
          'vida recebendo, por comportamentos idênticos, um retorno mais generoso do que o ' +
          'comportamento mereceria. E a generosidade não é um favor: é anestesia.',
        'Porque a terceira função só se desenvolve quando o mundo cobra por ela não estar ' +
          'desenvolvida. Fi aos vinte anos é intensa e sem palavras; ela ganha linguagem por ' +
          'atrito — quando alguém devolve a conta de uma frase seca, quando um vínculo se perde ' +
          'por falta de tradução, quando ficar calado custa caro. <strong>Se o ambiente não ' +
          'cobra nada, nada acontece.</strong> Aos quarenta ele tem exatamente a mesma ' +
          'competência interior que tinha aos vinte e três, com quase vinte anos a mais de ' +
          'prática em não olhar para ela.',
        'A conta chega de uma vez só, e chega de fora: um casamento que termina sem que ele ' +
          'tenha entendido a primeira metade do processo, um filho que para de falar com ele, ' +
          'uma morte, um burnout que a competência não resolve porque não é um problema de ' +
          'competência. É nesse ponto que ele descobre que analfabetismo emocional vinha sendo ' +
          'confundido com força havia décadas — inclusive por ele mesmo — e que analisar um ' +
          'sentimento não é a mesma operação que senti-lo. Ni oferece, na hora, uma teoria ' +
          'elegante sobre o que aconteceu. A teoria não substitui a palavra que faltou.',
        'E há um custo mais silencioso, no sentido oposto: ninguém pergunta. Um INTJ lido como ' +
          'estável e autossuficiente não recebe a oferta de ajuda que se faz a quem parece mal — ' +
          'ele é o presumido bem. O problema é que Fi já não tem frase pronta para o que sente, ' +
          'e a pergunta de fora é exatamente o que faria a frase existir; sem ela, o estado ' +
          'interno não chega nem a ser formulado, muito menos dito. Um INTJ elogiado a vida ' +
          'inteira por não ter necessidades acaba, em algum momento, sem saber formular uma.',
      ],
      frictions: [
        {
          title: 'A franqueza que ninguém corrige',
          text:
            'O mesmo comentário que renderia a uma mulher a fama de difícil rende a ele a fama ' +
            'de direto. Sem custo não há correção, e sem correção Te nunca aprende a diferença ' +
            'entre ser claro e ser cortante.',
        },
        {
          title: 'A ausência lida como gravidade',
          text:
            'Ni desligado da sala parece introspecção nobre. Às vezes é. Outras vezes a pessoa ' +
            'simplesmente não está ali, e ninguém no ambiente tem incentivo para apontar qual ' +
            'das duas coisas está acontecendo.',
        },
        {
          title: 'A pergunta que não vem',
          text:
            'Ninguém checa se ele está bem, porque a aparência é convincente e porque perguntar ' +
            'a alguém cuja fachada nunca pede nada parece invasão. O resultado é atraso: de ' +
            'diagnóstico, de exaustão, de tudo o que precisaria ser dito em voz alta para ' +
            'existir — e o atraso não é só de diagnóstico: é de vocabulário, porque Fi só ' +
            'encontra palavra quando alguém de fora abre espaço para ela.',
        },
        {
          title: 'A fatura acumulada',
          text:
            'Vinte anos sem cobrança não são vinte anos de crédito. Significam que a fatura ' +
            'vence inteira, normalmente num momento em que já sobra pouca margem para aprender ' +
            'devagar.',
        },
      ],
      strengths: [
        'Autoridade concedida cedo: a fala em conclusões costuma ser ouvida como competência ' +
          'antes de ter sido testada, o que abre portas técnicas e de liderança numa idade em ' +
          'que a competência ainda está em construção. É vantagem real e é, em boa parte, não ' +
          'merecida — convém saber das duas coisas.',
        'Baixa exigência de manutenção afetiva do ambiente: sobra energia para o trabalho longo ' +
          'e solitário que Ni pede, sem o desgaste de simular calor humano o dia inteiro.',
        'Solidão sem estigma: sumir três dias para pensar não gera, nele, a suspeita social que ' +
          'geraria em outra pessoa — e o INTJ precisa mesmo desses três dias.',
        'Quando ele decide desenvolver Fi por escolha e não por catástrofe, começa com todo o ' +
          'resto intacto: estrutura, carreira, crédito. É o cenário mais favorável que este tipo ' +
          'pode ter, e depende inteiramente de fazer sem cobrança aquilo que ninguém vai cobrar.',
      ],
    },

    woman: {
      title: 'A INTJ mulher',
      lede:
        'O mesmo comportamento, o mesmo motor — e uma lista de adjetivos <em>completamente</em> ' +
        'diferente.',
      paragraphs: [
        'Não é preciso mudar nada no tipo para mudar a leitura. Direta vira fria. Competente ' +
          'vira arrogante. Desinteressada por aprovação vira difícil. Planejar tudo vira ' +
          'controladora. Reservada vira antipática. E a linha mais comum de todas, que qualquer ' +
          'INTJ mulher já ouviu em alguma versão: “você poderia ter dito isso de um jeito ' +
          'melhor” — sobre uma frase que, saindo de um colega homem, teria sido registrada como ' +
          'objetiva. É a mesma frase. Muda o corpo de onde ela sai.',
        'Aplicado às funções, o efeito fica específico. Te comunica conclusões e esconde o ' +
          'processo; num homem isso soa a autoridade, nela soa a desprezo pelo interlocutor, e a ' +
          'saída que o ambiente oferece é recolocar o processo — ou seja, trabalhar mais para ' +
          'dizer o mesmo. Ni fica em silêncio enquanto converge; nela o silêncio raramente é ' +
          'lido como profundidade, e sim como hostilidade ou como insegurança, dependendo de ' +
          'quem observa. Fi não negocia um valor central; num homem isso é caráter, nela é ' +
          'rigidez.',
        'Depois vem a taxa. Espera-se dela um calor que ela não deve a ninguém e que, no plano ' +
          'cognitivo, ela simplesmente não tem à mão: <strong>Sentimento extrovertido não está ' +
          'entre as quatro funções do INTJ</strong>. O que existe é Fi — privado, lento, mal traduzido. ' +
          'Performar acolhimento não é, para ela, um ajuste de tom: é rodar manualmente, frase a ' +
          'frase, uma função que não é sua. E não há desconto por repetição — a centésima vez ' +
          'custa o mesmo que a primeira. Boa parte do cansaço da INTJ mulher não vem do ' +
          'trabalho. Vem do trabalho invisível de amortecer a própria clareza para que ela seja ' +
          'aceita.',
        'E há o fato de ser, repetidamente, a única na sala. Isto é padrão social observado, não ' +
          'medida — ninguém isolou “ser uma mulher INTJ” como variável em estudo algum. Mas o ' +
          'efeito sobre Ni é previsível. A função já roda um modelo do mundo sem validação ' +
          'externa; quando não há mais ninguém por perto com funcionamento parecido, some o ' +
          'último termo de comparação. Fica difícil distinguir “estou vendo algo que os outros ' +
          'ainda não veem” de “estou errada”, e o erro acontece nas duas direções: checar ' +
          'demais, pedir aval que não era necessário, ou o oposto — concluir cedo demais que a ' +
          'opinião alheia não conta.',
        'O contrapeso é real e não é consolo. Uma mulher que chegou à vida adulta sem poder ' +
          'contar com ser querida chega com Te afiado: argumento montado antes de ser pedido, ' +
          'evidência já reunida, o custo emocional de ser contrariada pago e amortizado anos ' +
          'atrás. E chega, com frequência, com um Fi mais articulado que o de homens do mesmo ' +
          'tipo, porque foi obrigada a explicar-se muito mais vezes — e explicar-se é exatamente ' +
          'o exercício de que a terceira função precisa. A taxa constrói o músculo. Isso não a ' +
          'torna a versão superior do tipo nem converte o custo em presente: é o subproduto de ' +
          'uma cobrança injusta. O subproduto é dela.',
      ],
      frictions: [
        {
          title: 'O mesmo dado, outro adjetivo',
          text:
            'Franqueza vira frieza, precisão vira pedantismo, distância vira desprezo. Não é ' +
            'uma percepção sobre ela: é o dicionário que a sala usa, e ele muda conforme quem ' +
            'fala.',
        },
        {
          title: 'A função que ela não tem',
          text:
            'A gentileza esperada é Sentimento extrovertido, e ele não está entre as quatro ' +
            'funções. O que se ' +
            'pede não é que ela seja um pouco mais calorosa: é que rode de forma consciente e ' +
            'permanente um processo que não é o dela.',
        },
        {
          title: 'A competência provisória',
          text:
            'A prova precisa ser refeita a cada sala nova. Para um tipo que detesta repetir ' +
            'trabalho já feito, esta é possivelmente a irritação mais bem fundamentada da lista.',
        },
        {
          title: 'A única na sala',
          text:
            'Sem ninguém parecido por perto, Ni perde o único calibrador externo que tinha. A ' +
            'retirada — trabalhar sozinha, decidir sozinha, não expor a hipótese — resolve o ' +
            'desconforto e agrava a causa.',
        },
      ],
      strengths: [
        'Te maduro cedo: capacidade de sustentar uma posição sob contestação, construída na ' +
          'idade em que a maioria das pessoas ainda está aprendendo a não recuar.',
        'Fi com linguagem: anos de obrigação de explicar-se produzem uma articulação do próprio ' +
          'valor que muitos INTJs só alcançam por terapia ou por colapso.',
        'Imunidade parcial ao custo de desagradar: quando a conta de não ser querida já foi paga ' +
          'na adolescência, decisões impopulares deixam de ter preço proibitivo — e este tipo ' +
          'vive de decisões impopulares.',
        'Leitura de poder: ler salas em que não se é bem-vinda é treino forçado de percepção ' +
          'social, exatamente a área que o INTJ costuma pular. Muitas chegam com um mapa ' +
          'político que seus pares homens do mesmo tipo não têm.',
      ],
    },
  },

  shared: {
    eyebrow: 'O que não muda',
    title: 'A pilha não tem sexo',
    paragraphs: [
      'Tudo o que veio acima é sobre a sala. Nada é sobre a máquina. A ordem é a mesma nos dois ' +
        'casos, e convém dizer de onde ela vem: a alternância de atitudes que produz ' +
        '<strong>Ni · Te · Fi · Se</strong> é convenção de Grant, Thompson e Clarke (1983), não ' +
        'de Jung nem de Myers, e há crítica publicada contra a dinâmica de tipo inteira. O ' +
        'calendário que costuma acompanhá-la vem do mesmo lugar e nunca foi verificado em ' +
        'coorte: Ni desde cedo, Te se organizando na adolescência e nos vinte, Fi pedindo ' +
        'linguagem dos vinte aos quarenta, Se continuando o ponto cego até que alguém decida ' +
        'treiná-lo de propósito. Serve como mapa da direção, não como cronograma que você esteja ' +
        'atrasado em cumprir.',
      'O loop é o mesmo: sob estresse crônico, Ni e Fi se fecham num circuito de autoanálise ' +
        'infinita, ressentimento arquivado e retirada moralizada — com a diferença de que ele ' +
        'será chamado de fechado e ela de amarga. O grip, termo de Naomi Quenk, é o mesmo: ' +
        'quando o eixo Ni–Te se ' +
        'esgota, Se inferior assume e traz excesso sensorial, hiperfoco em detalhe irrelevante e ' +
        'a sensação de não se reconhecer. E o caminho de crescimento é o mesmo, na mesma ordem: ' +
        'calibrar Ni contra a realidade, dar palavra a Fi antes que ela esteja bem formulada, ' +
        'treinar Se em doses pequenas e regulares.',
      'A Myers & Briggs Foundation é explícita quanto a isto no próprio código de uso ético do ' +
        'instrumento: nenhum tipo vale mais do que outro, e resultado nenhum deve ser usado para ' +
        'limitar quem quer que seja. Vale para os dezesseis tipos e vale, com ainda mais razão, ' +
        'para as ' +
        'duas leituras de um mesmo tipo. <strong>A raridade não é mérito e a leitura injusta não ' +
        'é destino.</strong> Nenhuma das duas colunas desta página descreve alguém melhor do que ' +
        'a outra: descreve o preço diferente que cada uma paga pelo mesmo funcionamento.',
    ],
    points: [
      'A pilha: Ni · Te · Fi · Se, na mesma ordem — e o calendário de idades é convenção de ' +
        'Grant (1983), não medida.',
      'O loop Ni–Fi sob estresse crônico, com nomes diferentes para a mesma coisa.',
      'O grip de Se inferior quando o eixo Ni–Te se esgota.',
      'O trabalho de uma vida: Ni calibrado, Fi com linguagem, Se treinado por repetição.',
    ],
  },
};
