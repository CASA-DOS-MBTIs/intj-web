import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const INFANCIA_PT: ArticlePageContent = {
  meta: {
    title: 'Infância — a criança que fazia perguntas fora de hora | INTJ',
    description:
      'Madura demais, entediada na aula, lendo no recreio: o retrato lembrado da infância de ' +
      'quem se reconhece INTJ — e por que tipar uma criança vira gaiola.',
  },

  sources: [
    'mmtic-1987',
    'myers-1998-manual',
    'myers-1980-gifts',
    'grant-1983',
    'pittenger-2005',
    'mbf-ethics',
    'jung-1921',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 13 — Infância',
    title: 'A criança que\nvocê foi',
    lede:
      'Alguém já disse, na sua frente, que você era uma criança séria demais — e você tinha ' +
      'idade suficiente para perceber que aquilo não era bem um elogio. Esta página é sobre a ' +
      'distância entre o que os adultos viam e o que estava acontecendo do lado de dentro, que ' +
      'era <em>outra coisa inteiramente</em>.',
  },

  intro:
    'Isto não é a descrição de uma criança INTJ. É a descrição do que muita gente que hoje se ' +
    'reconhece no tipo lembra de ter sido — e a diferença entre as duas frases é grande o ' +
    'bastante para ocupar a caixa logo abaixo. Se você vier procurar a sua infância aqui, é ' +
    'provável que encontre alguma coisa. Não porque o texto saiba de você, mas porque um certo ' +
    'desencaixe entre uma cabeça e uma sala se repete nesses relatos com uma insistência ' +
    'difícil de ignorar.',

  caveat:
    'Tipo na infância não é estável, e retrato retrospectivo não é diagnóstico. Existe um ' +
    'instrumento separado para crianças e adolescentes — o MMTIC, de Meisgeier e Murphy (1987), ' +
    'hoje numa versão revista que cobre dos 7 aos 18 anos — e ele não resolve o problema. Some a ' +
    'isso o que já se sabe do instrumento adulto, em que reaplicar o questionário muda pelo menos ' +
    'uma letra para uma fatia considerável das pessoas. Ou seja: o que vem a seguir é a descrição de ' +
    'uma experiência lembrada, nunca um método de tipar criança. E memória não é arquivo, é ' +
    'reconstrução — ela seleciona o que confirma a história que você já conta sobre si. Leia ' +
    'como espelho; como prova, não serve.',

  sections: [
    {
      eyebrow: 'O retrato de fora',
      title: 'Madura demais — dito como diagnóstico, não como elogio',
      paragraphs: [
        'As palavras eram sempre as mesmas, e você as ouviu antes de conseguir discutir com ' +
          'elas: <em>séria</em>, <em>quietinha</em>, <em>velha na alma</em>, <em>adulto em ' +
          'miniatura</em>. Numa festa de família você acabava encostado na mesa da cozinha, onde ' +
          'os adultos falavam — não porque gostasse deles, mas porque era ali que se discutia ' +
          'alguma coisa com consequência. Na sala, do outro lado, havia gritaria e uma regra de ' +
          'brincadeira que mudava conforme quem estava ganhando.',
        'E havia as perguntas. Por que a gente morre, quem decidiu que a semana tem sete dias, ' +
          'por que aquilo que o adulto acabou de afirmar não combina com o que ele disse ontem. ' +
          'Vinham na hora errada, quase sempre, e recebiam uma de duas respostas: a risada — ' +
          '“olha só o tamanho da pergunta” — ou o encantamento, que é pior, porque o adulto acha ' +
          'graça na criança e continua sem responder nada.',
        'Vale desmontar o elogio, porque ele é impreciso. “Madura demais” descreve o efeito, não ' +
          'a causa. Por dentro não havia maturidade nenhuma: havia uma criança que não sabia ' +
          '<strong>querer o que as outras queriam</strong>. Você conseguia brincar, e brincava. ' +
          'Só que a parte que para elas era automática — entrar no grupo, aderir ao clima, ' +
          'sustentar o entusiasmo até o fim — para você era trabalho consciente, e cansava como ' +
          'trabalho cansa.',
        'A lembrança que mais se repete nas comunidades do tipo, e que é inventário de relatos e ' +
          'não medida, é a de assistir. Estar dentro da cena e a uns dois metros dela ao mesmo ' +
          'tempo. Aos seis anos isso não tem nome — há só a sensação vaga, e não muito ' +
          'agradável, de ser a única pessoa na sala reparando na sala.',
      ],
      points: [
        '“Ela é tão quietinha, nem parece que tem criança em casa.”',
        '“Ele não brinca, ele fica observando.”',
        '“Você fala como gente grande.”',
        '“Por que você não vai brincar com as outras crianças?”',
        '“Não leva desaforo para casa” — dito com orgulho e com preocupação, na mesma frase.',
      ],
    },
    {
      eyebrow: 'A incoerência',
      title: 'Você viu que os adultos não cumpriam as próprias regras',
      paragraphs: [
        'A cena é quase universal e sempre pequena. Você aprendeu que mentir é errado e ouviu, ' +
          'na mesma semana, sua mãe pedir que você dissesse no telefone que ela não estava em ' +
          'casa. Aprendeu que respeito é mão dupla e descobriu que a mão de volta não existia ' +
          'quando você tentou usá-la. Aprendeu que se pede desculpa quando se erra e nunca viu ' +
          'nenhum adulto pedir desculpa a você.',
        'Aí você falou. E é importante lembrar do motivo, porque ele foi apagado depois pela ' +
          'reação: você não estava sendo cruel nem tentando ganhar nada. Você apontou a regra ' +
          'quebrada do mesmo jeito que apontaria um degrau quebrado — na suposição óbvia de que ' +
          'ninguém tinha percebido e de que, uma vez percebido, alguém consertaria. Coerência, ' +
          'para você, era um serviço prestado à casa.',
        'O que voltou não foi uma resposta. Foi temperatura. “Não fala assim comigo.” “Que ' +
          'atrevimento é esse.” O rosto fechando, o silêncio na mesa, às vezes o castigo. Você ' +
          'foi corrigido no tom e nunca respondido no conteúdo — e essa é a assimetria exata que ' +
          'ensina a coisa errada a uma criança que raciocina bem.',
        'Porque uma de duas conclusões costuma se formar ali, e as duas são eficientes e caras. ' +
          'A primeira: adultos são desonestos e a autoridade é uma fraude — um desprezo que ' +
          'começa aos oito anos e ainda está funcionando aos trinta. A segunda: dizer a verdade ' +
          'tem preço, então guarde. A versão precisa é mais chata que as duas. O adulto não ' +
          'errou ao se sentir exposto; errou ao responder à exposição em vez de responder ao ' +
          'ponto. E você tinha o dado sem ter o mapa — enxergava a incoerência com uma nitidez ' +
          'impressionante e não fazia a menor ideia do que enxergá-la em voz alta provocava do ' +
          'outro lado. Essa defasagem entre ver e saber entregar é, com outras roupas, a mesma ' +
          'que você ainda administra hoje.',
      ],
    },
    {
      eyebrow: 'A escola',
      title: 'Entediado na aula e sem conseguir explicar por quê',
      paragraphs: [
        'O tédio da escola não era o tédio de coisa difícil nem o de coisa fácil. Era o de coisa ' +
          '<strong>sem finalidade declarada</strong>. Você terminava os vinte exercícios e ' +
          'recebia mais vinte como prêmio pela velocidade — a lição sendo, claramente, que ser ' +
          'rápido rendia volume. Você perguntava para que aquilo servia, o que era uma pergunta ' +
          'literal e não uma provocação, e ouvia “porque cai na prova”, que é uma resposta sobre ' +
          'a escola e não sobre o assunto.',
        'Há uma leitura funcional disso, e ela é linguagem descritiva, não mecanismo medido: Ni ' +
          'converge e precisa da forma inteira antes de aceitar as partes. A escola faz o ' +
          'contrário por desenho — entrega fragmentos em série e promete o quadro completo para ' +
          'dezembro. Daí a estranheza dos seus boletins: você não decorava uma lista de datas ' +
          'nem sob ameaça, mas segurava uma cadeia inteira de causas por anos; lia o livro ' +
          'didático todo na primeira semana e passava os nove meses seguintes esperando a turma ' +
          'chegar onde você já tinha ido.',
        'Aí vinham as observações no rodapé do boletim, sempre com a mesma estrutura: capaz, mas ' +
          'não se aplica. Inteligente, mas disperso. Tem potencial — palavra que, dita assim, é ' +
          'uma acusação. Registre o limite disto aqui, porque a página inteira depende dele: ' +
          'nada neste retrato é afirmação sobre a sua capacidade — e a ' +
          'própria Fundação Myers & Briggs é explícita: o instrumento não mede habilidade, ' +
          'competência nem perícia, não foi desenhado para contratar ninguém, e os resultados ' +
          'jamais devem ser usados para limitar alguém. O que se descreve aqui é uma preferência ' +
          'de ' +
          '<em>por onde se entra</em> num assunto. Não é um ranking, e não era.',
        'E existe a metade que você provavelmente não conta quando conta essa história. Parte ' +
          'daquilo não era tédio: era fuga do que você não era bom de primeira. Caligrafia, ' +
          'educação física, a matéria que exigia treino burro e repetido, aquela em que o ' +
          'progresso vinha devagar e à vista de todos. Chamar de “inútil” o que exigiria passar ' +
          'um tempo sendo ruim é confortável e funciona — funcionou por anos. É também a ' +
          'primeira aparição do padrão que hoje faz você abandonar, nos primeiros quinze ' +
          'minutos, tudo aquilo em que não é excelente de saída.',
      ],
      points: [
        'Mostrar o cálculo quando a resposta chegou inteira, sem etapas para mostrar.',
        'Participar em voz alta antes de o pensamento estar fechado.',
        'Trabalho em grupo com nota coletiva — e a matemática moral de carregar quem não fez.',
        'Capricho, margem, letra bonita: pontos por embalagem.',
        'Entusiasmo sob demanda, na hora marcada, com a turma inteira olhando.',
      ],
    },
    {
      eyebrow: 'A autoridade',
      title: 'O dia em que um professor não soube defender o próprio raciocínio',
      paragraphs: [
        'Você lembra da cena, provavelmente sem lembrar da matéria. Você fez a segunda pergunta ' +
          '— não a primeira, que qualquer um faz, mas a de acompanhamento, a que testa se a ' +
          'explicação se sustenta — e recebeu “porque sim”, “porque está no livro”, “porque eu ' +
          'estou dizendo”. Naquele instante você entendeu uma coisa que reorganizou a sua vida ' +
          'inteira: <strong>ter o cargo não é ter a razão</strong>. O adulto na frente da sala ' +
          'podia estar blefando, e estava.',
        'Depois disso você continuou perguntando. Vale ser honesto sobre o que a pergunta virou: ' +
          'uma parte era curiosidade genuína e outra parte era teste — verificar se aquilo ' +
          'aguentava peso. Lá pelos catorze, você já não distinguia as duas nem para si mesmo. ' +
          'Veio a fama junto: questionador, do contra, o aluno que atrapalha a aula. Bilhete na ' +
          'agenda. Convite para esperar do lado de fora.',
        'Mas a distribuição nunca foi aleatória, e você aprendeu a lê-la rápido, em geral na ' +
          'primeira semana de aula. Professor que dominava a matéria gostava da pergunta e ' +
          'costumava responder com outra melhor — muitos INTJs devem a essas pessoas o gosto por ' +
          'um assunto inteiro. Professor inseguro sentia a pergunta como ataque, porque para ele ' +
          '<em>era</em> um ataque. Você não estava atacando ninguém. Só que a diferença entre as ' +
          'duas coisas depende de quem escuta, e isso ninguém te contou.',
        'Jung notou o problema em 1921, descrevendo o intuitivo introvertido: a dificuldade ' +
          'central do tipo é de linguagem, porque a fala dele “não é aquela que se fala ' +
          'comumente” e por isso os argumentos não convencem na medida em que deveriam. É ' +
          'observação clínica de um século atrás, sem nenhuma medida por trás — e ainda assim é ' +
          'a descrição mais exata que existe do que acontecia naquela sala. Você tinha razão e ' +
          'não tinha tradução. Aos onze anos, ter razão sem tradução é indistinguível de estar ' +
          'sozinho.',
      ],
    },
    {
      eyebrow: 'O recreio',
      title: 'A criança que lia no intervalo',
      paragraphs: [
        'A biblioteca era silenciosa, tinha cadeira e — a parte decisiva — era o único lugar da ' +
          'escola onde ninguém exigia que você demonstrasse animação. Se não era a biblioteca, ' +
          'era o banco perto do muro, o degrau da quadra, o canto do pátio com o atlas, a ' +
          'enciclopédia de dinossauros, a série de fantasia longa demais para a sua idade. ' +
          'Quinze minutos por dia num lugar em que o mundo obedecia a regras escritas.',
        'Antes de qualquer interpretação, um registro justo: aquilo era prazer de verdade. Uma ' +
          'criança que lê no recreio não é, por definição, uma criança em sofrimento. O livro é ' +
          'um lugar de fato, e você estava mesmo lá. Boa parte do que você é hoje — o ' +
          'vocabulário, a capacidade de ficar sozinho sem se esvaziar, a fome por assunto — foi ' +
          'construída naqueles intervalos, e não há nada ali para corrigir.',
        'A metade honesta é a seguinte, e é ela que ainda dói: às vezes era refúgio, e você ' +
          'aprendeu cedo demais a chamar de gosto o que era ferida. O teste não é se você ' +
          'gostava — você gostava. O teste é se havia escolha: existia um grupo que teria aberto ' +
          'espaço, e você chegou a tentar? Muita gente parou de tentar por volta dos nove anos e ' +
          'passou os trinta seguintes dizendo que não queria. Ninguém precisa fazer essa conta ' +
          'agora. Vale só saber que ela existe, porque a mesma frase — “eu prefiro assim” — ' +
          'continua sendo dita hoje, e às vezes é verdade e às vezes é a armadura falando.',
        'E havia a solidão específica, que não é falta de companhia: é entender uma coisa que a ' +
          'sala não entende e não ter como entregar. Você sabia no primeiro dia que aquele ' +
          'trabalho em grupo ia dar errado — sabia até por onde. Disse. Foi chamado de negativo, ' +
          'de estraga-prazeres. Deu errado exatamente ali. E então você descobriu a parte pior: ' +
          'ninguém volta para dizer que você tinha razão. A sala simplesmente segue. Estar ' +
          'certo, sozinho e sem plateia foi o seu primeiro contato com um problema que ainda ia ' +
          'te acompanhar por décadas.',
      ],
    },
    {
      eyebrow: 'A adolescência',
      title: 'Te chega antes da diplomacia',
      paragraphs: [
        'No esquema de desenvolvimento de tipo de Harold Grant (1983) — muito repetido na ' +
          'literatura de tipo e nunca verificado numa coorte real —, a função auxiliar amadurece ' +
          'na adolescência. Trate a idade como hipótese, não como calendário. Mas a lembrança ' +
          'bate com uma frequência incômoda: em algum ponto entre os treze e os dezessete, você ' +
          'descobriu que sabia argumentar. E, mais perigoso, que sabia <strong>ganhar</strong>.',
        'Na prática isso pareceu com uma mesa e três perguntas. Um amigo afirmou algo, você ' +
          'perguntou de onde ele tinha tirado aquilo, perguntou o que aconteceria se fosse o ' +
          'contrário, perguntou como ele conciliava aquilo com o que tinha dito antes — e o ' +
          'raciocínio dele desmontou na frente de todo mundo. Você se sentiu bem por uns noventa ' +
          'segundos. Você não estava tentando humilhar ninguém: estava finalmente fazendo a ' +
          'coisa em que era bom. Ele parou de te chamar para sair e você não entendeu o motivo, ' +
          'porque entender exigiria saber que ter razão diante de outras pessoas é um ato com ' +
          'dois significados, e você só enxergava um.',
        'Foi mais ou menos aí que veio a palavra. Alguém te chamou de arrogante por uma frase ' +
          'que era simplesmente verdadeira — que o plano não ia funcionar, que a conta estava ' +
          'errada, que aquilo já tinha sido tentado antes. Você disse o fato; a sala ouviu “eu ' +
          'sou melhor que vocês”. Primeiro contato com a distância entre conteúdo e recepção, e ' +
          'ninguém por perto para nomear o que tinha acontecido.',
        'Aos quinze anos só existem duas conclusões disponíveis, e as duas são erradas. A ' +
          'primeira: <em>eu sou arrogante mesmo, melhor calar a boca</em> — é o começo de um ' +
          'silêncio que algumas pessoas carregam por vinte anos, engolindo em reunião aquilo que ' +
          'sabem estar certo. A segunda: <em>eles são medíocres e não aguentam a verdade</em> — ' +
          'é o começo de um desprezo que custa amizade, emprego e casamento. A conclusão correta ' +
          'é mais sem graça que as duas: você estava certo e entregou de um jeito que tornava ' +
          'impossível aceitar. Entrega se aprende. Só que ninguém ensina, e você tinha quinze ' +
          'anos.',
        'Some a isso o resto da adolescência, que é o ápice da exigência de semelhança — roupa ' +
          'certa, música certa, a frase certa na velocidade certa — e você atravessando essa ' +
          'faixa com a máquina menos disposta a conceder que existe. Fi terciário completa o ' +
          'quadro: sentimento intenso e quase sem palavras, então a mágoa não chegava como ' +
          'mágoa. Chegava como irritação, ou como um veredito frio e definitivo sobre a pessoa ' +
          'que a tinha causado. Você cortava gente aos dezesseis com uma facilidade que hoje, ' +
          'olhando para trás, assusta um pouco.',
      ],
    },
    {
      eyebrow: 'O esconderijo',
      title: 'Competência virou o lugar mais seguro da casa',
      paragraphs: [
        'A conta que uma criança faz é simples e tem lógica boa demais para ser abandonada. Ser ' +
          'querido é uma loteria cujas regras ninguém escreveu: depende de timing, de roupa, de ' +
          'um jeito de rir que os outros pareciam ter recebido pronto. Ser bom em alguma coisa ' +
          'tem regra escrita, resultado verificável e nenhuma dependência do humor alheio. Entre ' +
          'as duas, você escolheu a segunda, e escolheu cedo.',
        'Então você virou o que sabe. As notas, o computador, o xadrez, o instrumento, o jogo de ' +
          'regras explícitas, o assunto enciclopédico que mais ninguém da sua idade achava ' +
          'interessante. Adulto respeitava aquilo. Colega precisava daquilo na véspera da prova. ' +
          'E aqui está o ponto que fixa o hábito de vez: <strong>funcionou</strong>. Utilidade é ' +
          'um lugar real numa sala, e é um lugar que ninguém pode tirar de você por ter acordado ' +
          'hoje sem gostar da sua cara.',
        'A conta chegou depois, com juros. Ser valorizado pelo que se produz é, visto de dentro, ' +
          'indistinguível de ser valorizado — até o dia em que você não consegue produzir, e aí ' +
          'a distinção aparece toda de uma vez. Construiu-se assim um adulto em quem se pode ' +
          'confiar e a quem não se consegue consolar; alguém que diz “estou bem” com fluência ' +
          'nativa e não tem nenhuma frase para a outra coisa. Se aos nove anos você aprendeu que ' +
          'o caminho para ser querido é ser útil, é bem possível que aos quarenta ainda esteja ' +
          'pagando afeto em entregas.',
        'Nada disso é acusação, e vale dizer com clareza: a competência não é o problema. Ela é ' +
          'sua, é real, e boa parte da vida que você construiu está apoiada nela. O problema é ' +
          'que ela estava fazendo dois trabalhos ao mesmo tempo — um era ser competência, o ' +
          'outro era ser abrigo — e só o primeiro estava no contrato.',
      ],
    },
    {
      eyebrow: 'O adulto que ficou',
      title: 'Uma pessoa achou a diferença interessante',
      paragraphs: [
        'Quase todo INTJ que chegou à vida adulta relativamente inteiro consegue nomear uma ' +
          'pessoa. Uma professora que respondeu à pergunta em vez de responder ao tom. Uma tia ' +
          'que emprestou um livro velho demais para a sua idade e nunca perguntou se você tinha ' +
          'entendido. Um avô que deixou você ficar na mesa dos adultos, calado, ouvindo. Um ' +
          'vizinho que entregou o rádio quebrado e a chave de fenda e saiu de perto.',
        'Nenhuma dessas pessoas fez nada pedagógico, e é exatamente esse o ponto. Elas trataram ' +
          'a diferença como um <em>fato</em> sobre você — interessante, às vezes divertido — e ' +
          'não como um defeito a corrigir antes que virasse problema. Mecanicamente, o que isso ' +
          'produz é evidência: uma criança que ouve a semana inteira que é demais, e que uma vez ' +
          'por semana encontra alguém para quem ela é exatamente certa, passa a ter duas ' +
          'hipóteses sobre si mesma em vez de uma. A primeira não some. Ela só deixa de estar ' +
          'sozinha no arquivo.',
        'Isabel Myers defendia algo próximo disso, e é bom saber de onde vem: a ideia, formulada ' +
          'em <em>Gifts Differing</em>, de que o tipo se desenvolve bem quando o ambiente ' +
          'permite à criança exercitar a função que ela prefere — e mal quando o ambiente exige ' +
          'o contrário o tempo todo. É argumento dela, não achado experimental. E aqui não há ' +
          'promessa nenhuma: a literatura de mentoria natural mede o efeito de um adulto atento ' +
          'sobre a trajetória de uma criança, mas nada disso foi medido por tipo — e tipologia ' +
          'não prevê desfecho de vida de ninguém.',
        'É preciso dizer a parte que dói, porque muita gente vai ler isto e não vai conseguir ' +
          'nomear ninguém. Essa ausência é real e não foi culpa sua. O que se faz sem esse ' +
          'adulto é virar o próprio: você se validou sozinho, cedo, com competência — e é por ' +
          'isso que hoje é tão difícil te abalar e tão difícil te elogiar. As duas coisas vêm do ' +
          'mesmo lugar. Você aprendeu a não precisar da opinião de ninguém num ano em que ' +
          'precisava dela, e essa fatura não venceu ainda.',
        'Se agora é você o adulto na vida de alguma criança assim, o trabalho inteiro cabe em ' +
          'três gestos: responder à pergunta, emprestar o livro, não corrigir a diferença.',
      ],
    },
    {
      eyebrow: 'Uma advertência',
      title: 'Sigla em criança vira gaiola',
      paragraphs: [
        'O instrumento oficial para crianças e adolescentes existe e é outro — o MMTIC, de ' +
          'Meisgeier e Murphy (1987), hoje numa versão revista que cobre dos 7 aos 18 anos. Ser ' +
          'um instrumento separado já diz alguma coisa: o questionário adulto pressupõe o ' +
          'autorrelato de alguém com autoimagem formada, e uma criança de nove anos não tem ' +
          'isso. E o instrumento infantil não segura o que se pede dele: nada na literatura ' +
          'pública permite dizer que uma tipagem feita aos nove anos descreve a mesma pessoa aos ' +
          'quinze.',
        'Mas o risco maior não é o erro de classificação. É o uso. Um rótulo dado a uma criança ' +
          'para de descrever e começa a prescrever, e faz isso nas duas direções. Do lado dos ' +
          'adultos: “ele é assim, não adianta insistir” — e some o convite para a festa, para o ' +
          'time, para a conversa. Do lado da criança é pior, porque ela colabora: “eu sou ' +
          'assim”, e pronto, passa a existir uma explicação elegante para não tentar nada em que ' +
          'seria preciso passar um tempo sendo ruim.',
        'A orientação ética publicada pela Fundação Myers & Briggs é clara em dois pontos que se ' +
          'aplicam inteiros aqui: o instrumento não foi desenhado para selecionar pessoas, ' +
          'porque não mede habilidade, competência nem perícia; e cada pessoa é o juiz final do ' +
          'próprio tipo. Uma criança não tem ' +
          'como exercer esse direito. Quem tipa uma criança está, na prática, exercendo esse ' +
          'direito no lugar dela e devolvendo o resultado como identidade.',
        'O que sobra para fazer é melhor do que parece, e é bem menos ambicioso. Descreva ' +
          'comportamento, não essência: “você gosta de entender antes de fazer”, e não “você é ' +
          'INTJ”. Dê o material e tire a plateia. Deixe a porta aberta para que ela seja outra ' +
          'coisa no ano que vem — porque é bem provável que seja. E se um dia essa criança se ' +
          'encontrar sozinha dentro de uma descrição, ótimo: aí o reconhecimento foi dela, e não ' +
          'uma gaiola entregue pronta por alguém que a amava.',
      ],
    },
  ],

  closing: {
    title: 'O desencaixe não era um defeito',
    text:
      'Quase tudo o que você guardou como prova de que havia alguma coisa errada com você era, ' +
      'na verdade, um <strong>desencaixe entre uma cabeça e uma sala</strong> — e desencaixe é ' +
      'uma relação, não uma propriedade: precisa dos dois lados para existir. Você era a mesma ' +
      'pessoa na aula em que se entediava e na biblioteca em que sumia por horas. O que mudou ' +
      'foi a sala. É isso que ninguém te diz aos doze anos, quando seria mais útil: boa parte ' +
      'daquilo deixou de ser um problema no dia em que você passou a escolher os cômodos — o ' +
      'trabalho, as pessoas, o assunto, o ritmo. Não porque você tenha sido consertado, e não ' +
      'porque o mundo tenha melhorado. Porque você parou de ser medido por uma régua que nunca ' +
      'foi feita para você. A criança que fazia perguntas fora de hora não precisava de ' +
      'correção. Precisava de uma sala melhor — e acabou, com bastante teimosia, construindo uma.',
  },
};
