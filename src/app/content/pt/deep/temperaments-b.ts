import type { VariantDeep } from '../../types';
import type { SourceId } from '../../sources';
import type { TemperamentPairKey } from '../../profile-keys';

type BlendKeyB = Extract<
  TemperamentPairKey,
  | 'phlegmatic-melancholic'
  | 'phlegmatic-choleric'
  | 'phlegmatic-sanguine'
  | 'sanguine-melancholic'
  | 'sanguine-choleric'
  | 'sanguine-phlegmatic'
>;

const COMMON: SourceId[] = ['lahaye-1984', 'littauer-1983', 'kagan-1994', 'rothbart-2011'];

export const TEMPERAMENTS_DEEP_B_PT: Record<BlendKeyB, VariantDeep> = {
  'phlegmatic-melancholic': {
    lede:
      'Você é o INTJ que sabe mais do que qualquer pessoa em volta desconfia, e a razão de ' +
      'ninguém desconfiar não é modéstia — é que nada dentro de você <em>exige</em> que se saiba. ' +
      'A base fleumática retira a urgência; o melancólico secundário instala uma régua que ' +
      'nenhuma coisa terminada alcança. Entre as duas, Ni recebe o que quase nenhum outro INTJ ' +
      'tem: tempo ilimitado e silêncio de sobra. E <strong>Te</strong>, a função encarregada de ' +
      'transformar o que você enxerga em objeto que existe no mundo, passa anos sem receber ' +
      'corrente alguma.',

    sections: [
      {
        eyebrow: 'O mecanismo',
        title: 'Régua alta, voltagem baixa',
        paragraphs: [
          'Na maioria das pessoas o melancólico dói. A distância entre o padrão interno e a coisa ' +
            'realmente feita produz sofrimento, e o sofrimento é combustível: é ele que, mais cedo ' +
            'ou mais tarde, empurra a entrega para fora. É isso que acontece num INTJ ' +
            'melancólico–colérico e, de forma mais lenta, num melancólico–fleumático. Na sua ' +
            'combinação, a ordem inverte esse arranjo e desliga a bomba. O fleumático absorve a ' +
            'frustração antes que ela vire pressão. Você fica com a régua inteira e sem a dor que ' +
            'a tornaria útil.',
          'O efeito sobre a pilha é cirúrgico. Ni funciona melhor do que na maioria dos INTJ, ' +
            'porque intuição introvertida precisa exatamente daquilo que você tem em excesso — ' +
            'tempo morto, ausência de interrupção emocional, permissão para deixar um assunto ' +
            'maturando por três anos. Fi terciário registra tudo com precisão e não pede voz. ' +
            'E Te, que na ordem de desenvolvimento de Grant (1983) seria a função a amadurecer ' +
            'entre a adolescência e os trinta — hipótese sobre desenvolvimento de tipo, nunca ' +
            'verificada em coorte —, aqui amadurece <em>por dentro</em>: você organiza sistemas ' +
            'inteiros mentalmente, com critério e rigor, e quase nunca os monta do lado de fora.',
          'Daí a assinatura desta combinação: você tem conhecimento de primeira ordem e obra de ' +
            'ordem nenhuma. O documento existe em resolução altíssima na sua cabeça. Publicá-lo ' +
            'exigiria um ato de Te que nada, em nenhum momento do dia, obriga você a executar.',
        ],
      },
      {
        eyebrow: 'O dia',
        title: 'Como isto parece numa terça-feira qualquer',
        paragraphs: [
          'A combinação não se reconhece por episódios dramáticos — ela não tem nenhum. ' +
            'Reconhece-se pela textura do dia comum, que é notavelmente confortável e ' +
            'notavelmente pouco produtiva no único sentido que interessa a Te: nada sai.',
        ],
        points: [
          'Você responde mensagens em dois dias e não sente ansiedade alguma por isso — nem ' +
            'quando a pessoa do outro lado claramente sente.',
          'Numa discussão acalorada seu pulso não muda. Você percebe que não muda, e ocasionalmente ' +
            'isso lhe parece levemente desumano.',
          'Existe um documento — arquitetura, tese, capítulo, plano — cujo primeiro terço você ' +
            'reescreveu quatro vezes em oito meses, sem prazo, sem cobrança e sem angústia.',
          'Você sabe exatamente quem é incompetente na sua equipe, com evidência e data, e nunca ' +
            'disse isso a ninguém com autoridade para agir.',
          'Interrupção não te irrita: apenas apaga o fio. Você recomeça do zero sem reclamar, o ' +
            'que faz com que as pessoas te interrompam mais.',
          'Você aprende assuntos inteiros por gosto, até um nível que constrangeria especialistas, ' +
            'e não considera isso um ativo — considera um passatempo.',
        ],
      },
      {
        eyebrow: 'As pessoas',
        title: 'Por que a sua competência não circula',
        paragraphs: [
          'Reputação técnica não se forma por presença: forma-se por artefato. As pessoas atribuem ' +
            'competência a quem produziu a coisa que elas podem apontar — o documento, o sistema, ' +
            'a decisão assinada, a fala na reunião grande. Você produz a análise e não o artefato, ' +
            'e o resultado é uma posição social muito específica: você é a pessoa que todo mundo ' +
            'consulta em particular e ninguém cita em público. Consultam porque a sua leitura é ' +
            'boa. Não citam porque não há nada com o seu nome para citar.',
          'Fi terciário faz a segunda metade do estrago. Ele registra cada episódio desses com ' +
            'precisão inteira — a ideia que você deu no corredor e apareceu na apresentação de ' +
            'outra pessoa, o crédito que se dissolveu, a promoção que foi para quem falava. ' +
            'Registra e arquiva. Num INTJ colérico esse arquivo vira confronto em algumas semanas. ' +
            'No seu, arquivar não custa nada, e é justamente por não custar que ele nunca é ' +
            'esvaziado. A conta continua aberta por anos, sem juros aparentes.',
          'O detalhe cruel é que você é agradável de conviver. Não intimida, não compete, não ' +
            'reivindica — de modo que ninguém está sendo injusto com você de propósito. As pessoas ' +
            'simplesmente responderam ao sinal que você emitiu, e o sinal que você emitiu foi ' +
            'ausência de reivindicação.',
        ],
      },
      {
        eyebrow: 'O relógio',
        title: 'A década que passa sem doer',
        paragraphs: [
          'Toda combinação de temperamento tem um modo característico de errar com o tempo. A sua ' +
            'é a única em que o erro não produz sintoma. Um INTJ colérico–sanguíneo chega aos ' +
            'trinta e cinco com destroços — projetos abandonados, relações queimadas, corpo ' +
            'cobrando. Você chega aos trinta e cinco com um histórico limpo, silencioso e ' +
            'subvivido. Não há nada para consertar, e é por isso que nada é consertado.',
          'O reconhecimento quase nunca vem de dentro. Vem por choque externo, e costuma ser ' +
            'banal: alguém dez anos mais novo assume o cargo que era obviamente seu; um colega ' +
            'publica, mal, a ideia que você tinha inteira em 2019; uma reestruturação revela que ' +
            'ninguém acima sabia direito o que você fazia. E então Ni faz a coisa mais cruel do ' +
            'seu repertório: mostra o contrafactual completo de uma vez só — a carreira inteira ' +
            'que teria existido, em resolução alta, com datas.',
          'Vale dizer o que esse momento não é. Não é prova de que você não tinha talento, e não é ' +
            'prova de que era tarde. É a fatura de uma década de corrente baixa, apresentada de ' +
            'golpe porque nada a apresentou em parcelas. A resposta útil não é aumentar a régua — ' +
            'a régua nunca foi o problema — e sim instalar, de fora, a pressão que a sua ' +
            'combinação não gera sozinha.',
        ],
      },
      {
        eyebrow: 'De onde isto vem',
        title: 'O que dá para afirmar e o que não dá',
        paragraphs: [
          'A ideia de que um temperamento dominante se combina com um secundário e produz doze ' +
            'perfis não é antiga: é de Tim LaHaye, em <em>Why You Act the Way You Do</em> (1984), ' +
            'com Florence Littauer tendo popularizado os quatro tipos no ano anterior. Em Galeno ' +
            '(c. 170 d.C.) as misturas são nove e organizam-se por quente/frio e seco/úmido, sem ' +
            'qualquer noção de dominante e secundário; no Corpus Hipocrático (c. 400 a.C.) os ' +
            'quatro humores são fisiologia da saúde, não caráter. A estrutura que descreve você ' +
            'nesta página tem quatro décadas.',
          'Uma parte disto, porém, tem lastro — e é justamente a metade fleumática. Kagan (1994) ' +
            'acompanhou crianças inibidas e desinibidas por reatividade; Rothbart (2011) define ' +
            'temperamento como diferenças precoces de reatividade e autorregulação, observáveis ' +
            'nos primeiros meses. Uma linha de base de baixa reatividade é uma diferença ' +
            'individual real, precoce e razoavelmente estável. O que não tem lastro é a outra ' +
            'metade: nenhum instrumento revisado por pares mede “padrão melancólico alto”, e a ' +
            'combinação dos dois num rótulo com nome próprio é vocabulário descritivo, não achado.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Profundidade que ninguém mais pode pagar',
        text:
          'Ni com anos de execução ininterrupta produz um tipo de conhecimento que não se compra ' +
          'com esforço concentrado: você entende campos inteiros pela estrutura, não pelo resumo, ' +
          'e sobrevive ao contato com especialistas de verdade. É a vantagem real da combinação, ' +
          'e ela é rara mesmo entre INTJ.',
      },
      {
        title: 'Imperturbabilidade genuína',
        text:
          'Crise não altera o seu estado interno. Enquanto a sala grita, você lê o registro de ' +
          'incidentes e faz a pergunta certa. Isso é a baixa reatividade que Kagan e Rothbart ' +
          'descrevem em termos mensuráveis — e é a única parte deste perfil com pesquisa por ' +
          'trás, ainda que nenhuma dessas pesquisas fale de tipos MBTI.',
      },
      {
        title: 'Julgamento sem vaidade',
        text:
          'Você não precisa ser visto tendo razão, o que significa que pode mudar de opinião sem ' +
          'pagar pedágio de ego. Num tipo cuja armadilha clássica é a certeza fechada, essa é uma ' +
          'imunidade valiosa: você revisa a leitura em silêncio e ninguém precisa saber que havia ' +
          'outra.',
      },
      {
        title: 'Presença que baixa a temperatura',
        text:
          'As pessoas trazem problemas para você porque você não acrescenta calor ao problema. ' +
          'Num INTJ, isso desativa a metade do estereótipo que mais custa caro — a arrogância ' +
          'percebida — sem tirar nada do rigor.',
      },
    ],

    traps: [
      {
        title: 'Preparo vitalício',
        text:
          'A pista de decolagem é infinita e confortável. Sempre há mais uma leitura que tornaria ' +
          'o trabalho melhor, e ela é sempre verdadeira, o que torna a armadilha indistinguível ' +
          'de diligência vista de dentro.',
      },
      {
        title: 'Consentimento por silêncio',
        text:
          'Você não objeta na hora, porque objetar exigiria um impulso que não vem. A sua ' +
          'ausência de reação é registrada como concordância, a decisão segue, e Fi arquiva a ' +
          'objeção com data. Meses depois ninguém entende de onde saiu o seu ressentimento — ' +
          'inclusive porque você nunca o demonstrou.',
      },
      {
        title: 'A régua como álibi',
        text:
          '“Ainda não está bom o bastante” é tecnicamente verdadeiro em quase todos os casos e ao ' +
          'mesmo tempo é o mecanismo exato do adiamento. De dentro, as duas coisas são ' +
          'indistinguíveis, e é por isso que só um prazo externo consegue separá-las.',
      },
      {
        title: 'Terceirização da própria agenda',
        text:
          'Recusar custa mais do que aceitar, então você aceita: o projeto de outra pessoa, a ' +
          'reunião inútil, o papel de apoio. A soma disso ao longo de dez anos é uma carreira ' +
          'inteira desenhada por gente que simplesmente pediu.',
      },
    ],

    stress:
      'Esta combinação não explode. Sob pressão prolongada ela <em>afunda</em>: a pesquisa vira ' +
      'esconderijo, você refatora, reorganiza e relê em vez de entregar, responde a menos ' +
      'mensagens, e a semana perde as bordas. O sinal não é agitação — é a redução do raio do ' +
      'mundo. Primeiro some o que era opcional, depois o que era social, depois o que tinha ' +
      'horário. Quando Se inferior finalmente aparece, e na ordem de Grant ela é a última da fila ' +
      'e a menos consciente, aparece em surdina e em particular: sono deslocado, comida como ' +
      'anestésico, horas de tela sem direção, corpo notado só quando já dói. Ninguém em volta vai ' +
      'ver uma crise, porque não há nenhuma para ver, e é exatamente por isso que este estado ' +
      'pode durar dois anos sem que ninguém — inclusive você — o nomeie.',

    growth: [
      {
        title: 'Prazo externo com testemunha',
        text:
          'Intenção não move esta combinação; data pública move. Marque a apresentação, aceite a ' +
          'palestra, assine o contrato de entrega antes de o trabalho estar pronto. Você precisa ' +
          'de alguém com autoridade real para dizer “acabou” — porque você nunca dirá.',
      },
      {
        title: 'Corte o objeto, não a régua',
        text:
          'Não baixe o padrão: reduza o escopo até que o padrão seja alcançável neste mês. Um ' +
          'artigo em vez do livro, um módulo em vez do sistema. A sua régua funciona bem em ' +
          'objetos pequenos; ela só é impossível em objetos grandes.',
      },
      {
        title: 'Diga a objeção na sala, em uma frase',
        text:
          'Não é confronto, é contabilidade. Uma frase curta e chata dita no momento converte o ' +
          'arquivo em conta corrente e impede que a fatura de cinco anos seja apresentada de uma ' +
          'vez — o que é, para você, o único formato realmente perigoso.',
      },
      {
        title: 'Reivindique por escrito',
        text:
          'Uma vez por trimestre, escreva o que você fez, com nome e número, para quem decide. ' +
          'Parece constrangedor e é: a alternativa é continuar sendo o consultor privado de uma ' +
          'organização inteira que não sabe o seu nome.',
      },
    ],

    misread:
      'Leem você como modesto, tranquilo ou sem ambição — três palavras que descrevem a ' +
      'superfície e erram o motivo. Quem tipa de fora costuma chutar ISFJ ou INFP, porque a ' +
      'ausência de agressividade apaga toda a assinatura de Te. E quem convive de perto às vezes ' +
      'confunde a baixa reatividade com depressão. A distinção importa: baixa reatividade é uma ' +
      'linha de base estável e não retira prazer de nada. Se, além da calma, houver perda de ' +
      'interesse pelo que costumava importar, mudança de sono e de apetite, isso é uma pergunta ' +
      'clínica e não uma questão de temperamento.',

    versus:
      'A confusão é com o melancólico–fleumático, e ela é sutil e decisiva. Lá o padrão comanda e ' +
      '<em>dói</em>: o trabalho não terminado é sofrimento ativo, e de vez em quando esse ' +
      'sofrimento converte-se em surtos de entrega. Aqui o padrão é igualmente alto e não dói, ' +
      'porque o fleumático absorve a frustração antes de ela virar combustível — por isso ela ' +
      'nunca converte. O teste: pense na melhor coisa inacabada que você tem. Se lembrar dela ' +
      'arde, o melancólico lidera. Se lembrar dela é apenas um fato registrado — “está lá” —, ' +
      'quem lidera é o fleumático, e você está na página certa.',

    sources: [...COMMON, 'galen-c170', 'hippocrates-c400bc', 'grant-1983'],
  },

  'phlegmatic-choleric': {
    lede:
      'Você tem dois estados e nada entre eles. O normal é a calma — longa, real, sem esforço, ' +
      'imune a provocação, prazo e grosseria. O outro é a lâmina, e ela não negocia. O erro que ' +
      'todo mundo comete é imaginar que existe um percurso gradual do primeiro ao segundo, ' +
      'alguma escalada que dê para acompanhar. Não existe: o colérico secundário não é um ' +
      'termostato, é um <strong>interruptor</strong>. Ele dorme meses e acorda inteiro.',

    sections: [
      {
        eyebrow: 'O mecanismo',
        title: 'Um interruptor, não um termostato',
        paragraphs: [
          'Quase todas as combinações de temperamento modulam de forma contínua: o secundário ' +
            'colore o dominante o tempo todo, em graus. A sua não faz isso. O fleumático governa ' +
            'a casa inteira e o colérico não participa da administração — ele intervém. Enquanto ' +
            'não há intervenção, ele não está atenuado nem contido: está genuinamente ausente. ' +
            'É por isso que a sua calma não é máscara e não custa energia, e é também por isso ' +
            'que ela não serve de aviso para ninguém.',
          'Duas coisas acionam o interruptor, e vale saber quais são as suas. A primeira é uma ' +
            'linha de Fi cruzada — deslealdade, mentira deliberada, alguém tratado de forma ' +
            'indigna na sua frente. Fi é terciário na ordem de Grant (1983), forte em intensidade ' +
            'e fraco em articulação, e é exatamente esse perfil que produz um limite absoluto que ' +
            'você nunca enunciou em voz alta antes de ele ser ultrapassado. A segunda é a ' +
            'incompetência deixando de ser irritante e passando a ser perigosa: no instante em ' +
            'que Ni mostra o desfecho e o desfecho envolve dano real, Te dispara com a força que ' +
            'o colérico fornece, e não há mais deliberação a fazer.',
          'A partir do disparo, a combinação vira outra pessoa por algumas horas — direta, rápida, ' +
            'sem apetite por explicação, com uma economia verbal que assusta quem só conhecia a ' +
            'versão paciente. E depois o fleumático volta e fecha por cima, sem ressaca. Essa ' +
            'ausência de ressaca é importante: é ela que impede o episódio de virar aprendizado.',
        ],
      },
      {
        eyebrow: 'A latência',
        title: 'O intervalo entre saber e agir',
        paragraphs: [
          'A sua leitura raramente está errada. Ni viu no primeiro mês que aquela contratação não ' +
            'ia dar certo, que aquele contrato tinha uma cláusula desenhada para te prender, que ' +
            'aquela relação já tinha acabado e estava apenas continuando. O fleumático não ' +
            'contesta a leitura — ele apenas não age sobre ela. E assim você carrega, por um ano ' +
            'ou três, uma previsão precisa de uma situação que apodrece.',
          'Esse é o custo característico da combinação, e ele não aparece nas descrições populares ' +
            'porque não é dramático. Quando o colérico finalmente intervém, você está certo e ' +
            'está atrasado, e estar certo não devolve o ano. Pior: a intervenção chega tarde ' +
            'demais para salvar e cedo demais para ser entendida, então ela quase nunca conserta ' +
            'nada — apenas encerra.',
          'Repare no padrão temporal, que é o seu mais confiável: você tolera algo por um período ' +
            'longo e uniforme e depois o resolve numa tarde. Nunca há a fase intermediária de ' +
            'negociação, de reclamação crescente, de aviso. Não é escolha estratégica. É que a ' +
            'fase intermediária exigiria irritação sustentada, e irritação sustentada é ' +
            'exatamente o que o fleumático não produz.',
        ],
      },
      {
        eyebrow: 'As pessoas',
        title: 'A conta apresentada fechada',
        paragraphs: [
          'Como o colérico aparece raro, ele aparece pesado. As pessoas ao seu redor aprendem a ' +
            'ler a sua temperatura com uma atenção que jamais dedicariam a alguém que se exalta ' +
            'toda semana, e um único “não” dito naquele tom encerra o assunto de forma ' +
            'permanente. É uma autoridade que não se constrói de propósito e que não se pode ' +
            'gastar duas vezes no mesmo semestre.',
          'O outro lado é que elas também aprendem que o seu silêncio é seguro. Ninguém escala ' +
            'contra alguém que reage cedo; contra você, escala-se devagar, porque nada aconteceu ' +
            'nas dezenove primeiras vezes. E então a vigésima recebe a resposta que a primeira ' +
            'merecia. Do lado de fora isso parece desproporcional, e a rigor é: a resposta é ' +
            'proporcional ao arquivo inteiro, não ao último episódio, e o arquivo era invisível ' +
            'para todo mundo, menos para você.',
        ],
        points: [
          'A pessoa que recebe o corte quase sempre diz que “nunca foi avisada”, e está dizendo a ' +
            'verdade do ponto de vista dela.',
          'Você lembra as datas. Não como rancor deliberado — Fi arquiva sozinho, com precisão ' +
            'desnecessária, e o fleumático nunca esvazia o arquivo.',
          'Não existe registro médio: você não tem o repertório da irritação comum, do bilhete ' +
            'seco, da reclamação de terça-feira.',
          'Depois do episódio você volta imediatamente ao normal, o que as pessoas leem como ' +
            'frieza calculada e é apenas a base fleumática retomando o comando.',
          'Você raramente se arrepende do corte. Ocasionalmente se arrepende da hora — e mesmo ' +
            'esse arrependimento não gera pressa na próxima vez.',
        ],
      },
      {
        eyebrow: 'No trabalho e a portas fechadas',
        title: 'Por que te chamam quando está feio',
        paragraphs: [
          'Numa crise real, o seu estado interno não muda, e isso é uma vantagem operacional ' +
            'concreta, não uma pose. Enquanto o resto da sala opera em cortisol, você opera na ' +
            'mesma frequência de sempre e Ni continua entregando um desfecho. Some-se o colérico ' +
            'disponível para o momento em que a decisão dura tiver de ser tomada, e você é a ' +
            'pessoa exata para o pior dia do trimestre.',
          'A fraqueza está no resto do trimestre. Prioridade, para você, não muda por ' +
            'insistência: quando não vê motivo, você não muda, e não sente obrigação nenhuma de ' +
            'justificar por que não mudou. Isso é lido como teimosia por gestores e como falta de ' +
            'engajamento por pares, quando na verdade é ausência de reatividade social. E como ' +
            'você não explica, a interpretação errada é a única disponível.',
        ],
      },
      {
        eyebrow: 'De onde isto vem',
        title: 'A ordem é a única afirmação — e ela não foi medida',
        paragraphs: [
          'Toda a diferença entre você e o colérico–fleumático está na ordem, e a ordem é ' +
            'exatamente a parte do modelo que ninguém mediu. Os pares dominante/secundário são de ' +
            'LaHaye (1984), popularizados no mesmo circuito editorial em que Littauer (1983) ' +
            'havia difundido os quatro tipos. Não há instrumento que estabeleça qual metade vem ' +
            'na frente; há uma descrição que você reconhece ou não.',
          'O que sobrou de mensurável está do lado fleumático: Rothbart (2011) trata reatividade ' +
            'e autorregulação como dimensões contínuas e Kagan (1994) as trata como categorias, ' +
            'mas ambos as descrevem como precoces e observáveis ' +
            '— e uma linha de base baixa é uma diferença real. Eysenck e Eysenck (1985) chegaram ' +
            'a usar os quatro nomes antigos como rótulos dos quadrantes de extroversão × ' +
            'neuroticismo, o que às vezes é lido como se a ciência tivesse validado os humores. ' +
            'Não validou: foi empréstimo mnemônico sobre dimensões medidas. E nada disso descreve ' +
            'um “interruptor colérico”, que é linguagem descritiva sua e minha, não achado de ' +
            'ninguém.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Estabilidade sob fogo real',
        text:
          'Não é autocontrole, é ausência de reação — e por isso não se esgota. Você continua ' +
          'pensando com clareza em situações que desorganizam gente muito competente, e Ni não ' +
          'perde precisão sob ameaça, porque a ameaça não chega a alterar o estado interno.',
      },
      {
        title: 'Autoridade que não foi construída',
        text:
          'Uso raro dá peso ao uso. Um “não” seu vale mais do que dez de alguém que se irrita ' +
          'toda semana, e o efeito é permanente. É a única forma de autoridade que não exige ' +
          'manutenção, e você a possui sem ter feito nada para obtê-la.',
      },
      {
        title: 'Capacidade de encerrar',
        text:
          'Você consegue terminar o que a maioria arrasta por anos: um contrato ruim, uma sociedade ' +
          'errada, uma relação vazia. Combinado a Fi terciário, que sabe exatamente onde está a ' +
          'linha, isso é uma competência rara — mesmo quando chega tarde, chega.',
      },
      {
        title: 'Nenhuma vaidade na discussão diária',
        text:
          'Você não precisa vencer a discussão de quinta-feira, o que te torna surpreendentemente ' +
          'fácil de trabalhar em coisas que não importam. O custo, e a vantagem, é a mesma: você ' +
          'só entra quando entra de verdade.',
      },
    ],

    traps: [
      {
        title: 'Latência',
        text:
          'O erro central da combinação não é o corte: é o ano anterior a ele. Você viu, ' +
          'registrou, não agiu, e a situação piorou em silêncio enquanto você tinha a leitura ' +
          'correta inteira na cabeça.',
      },
      {
        title: 'Tolerância confundida com aprovação',
        text:
          'A sua calma é lida como consentimento por quem devia estar sendo avisado, e como ' +
          'desprezo por quem esperava uma discussão. Nenhuma das duas leituras é injusta: você ' +
          'não forneceu nenhuma terceira.',
      },
      {
        title: 'A lâmina como única ferramenta',
        text:
          'Você tem calma e tem ruptura, e nada no meio. Não dispõe do aborrecimento comum, da ' +
          'reclamação pequena, do “isso me incomoda” dito sem gravidade — que é justamente a ' +
          'ferramenta que resolveria noventa por cento dos casos antes de virar caso.',
      },
      {
        title: 'Ausência de ressaca',
        text:
          'Depois do corte, o fleumático fecha por cima e não sobra remorso suficiente para ' +
          'interromper o padrão. É por isso que ele se repete década após década, com pessoas ' +
          'diferentes e a mesma forma.',
      },
    ],

    stress:
      'Esta combinação vem abaixo na direção da ruptura, não do colapso. Sob tensão prolongada o ' +
      'fleumático continua absorvendo — porque é o que ele faz — até o ponto em que absorver ' +
      'deixa de ser possível; e então o colérico não acorda uma vez, acorda repetidamente. A ' +
      'faixa de estados encolhe para dois e o intervalo entre eles some. Em algumas semanas você ' +
      'encerra relações, contratos e vínculos que levaram anos para existir, cada decisão ' +
      'defensável isoladamente e o conjunto sendo uma demolição. Depois o fleumático volta, ' +
      'fecha, e a ausência de remorso impede que o episódio ensine qualquer coisa. Se inferior ' +
      'entra por via física, que é a única que resta quando nada é dito: mandíbula travada, sono ' +
      'curto, direção mais rápida do que o necessário, uma raiva sem objeto que aparece no corpo ' +
      'antes de aparecer em palavra. O aviso mais confiável não é você se sentir mal — é você ' +
      'notar que o interruptor disparou duas vezes no mesmo mês.',

    growth: [
      {
        title: 'Instale o registro médio',
        text:
          'Diga a irritação pequena enquanto ela é pequena, numa frase deliberadamente sem graça, ' +
          'no mesmo dia. Você vai achar desnecessário — é esse o ponto. O objetivo não é ser ' +
          'ouvido: é impedir que o arquivo cresça até o tamanho em que a única resposta ' +
          'disponível é a lâmina.',
      },
      {
        title: 'Ponha data no que você tolera',
        text:
          'Decida por escrito, antes, o ponto em que você agirá: “se em março ainda estiver ' +
          'assim, eu saio”. Converte latência em regra e retira a decisão do momento em que a ' +
          'raiva a distorce. É a única forma de a sua leitura correta chegar a tempo.',
      },
      {
        title: 'Dê um aviso explícito',
        text:
          'Um aviso, uma vez, dito com todas as letras — não para ser justo com o outro, mas para ' +
          'que o corte deixe de ser um evento sem histórico. Se você avisou e nada mudou, a ' +
          'ruptura vira consequência em vez de mistério, inclusive para você.',
      },
      {
        title: 'Não use a calma como prova',
        text:
          'Não sentir nada não é evidência de que a situação está boa. A sua ausência de reação é ' +
          'uma característica do seu sistema nervoso, não um dado sobre o mundo — e confundir as ' +
          'duas coisas é como você acaba dentro de situações que qualquer outro INTJ teria ' +
          'rompido no primeiro mês.',
      },
    ],

    misread:
      'De longe, leem você como fácil, acomodado ou sem limites — alguém que “não se importa”. ' +
      'De perto, quem já viu uma intervenção passa a te descrever como alguém de pavio curto, o ' +
      'que é o oposto exato do que acontece. As duas leituras erram porque supõem duas pessoas ' +
      'onde há um mecanismo com dois estados. Em tipagem externa isso costuma virar ISTP ou ISFP, ' +
      'porque a paciência apaga o Te visível e a intervenção parece impulso sensorial quando é, ' +
      'na verdade, uma conclusão de Ni represada há meses.',

    versus:
      'A confusão é com o colérico–fleumático, e a inversão muda a pessoa inteira. Lá o colérico ' +
      'dispara primeiro — a decisão é tomada em minutos — e o fleumático entra depois para torná-la ' +
      'irreversível e silenciosa; a marca daquele perfil é decidir rápido e não explicar. A sua ' +
      'marca é o contrário: o silêncio vem primeiro e a decisão vem tarde. O teste é cronométrico. ' +
      'Meça o intervalo entre o momento em que você soube que algo estava errado e o momento em ' +
      'que você fez alguma coisa a respeito. Se for de minutos a dias, o colérico lidera. Se for ' +
      'de meses a anos, quem lidera é o fleumático.',

    sources: [...COMMON, 'eysenck-eysenck-1985', 'grant-1983'],
  },

  'phlegmatic-sanguine': {
    lede:
      'Você é o INTJ de quem as pessoas gostam sem reservas, e isso não é performance: a ' +
      'simpatia é verdadeira, a paciência é real, e ninguém que te conhece descreveria você como ' +
      'arrogante ou frio. Também é o INTJ em que <strong>Te</strong> menos aparece do lado de ' +
      'fora. Duas fontes de tranquilidade e nenhuma de exigência — o que significa que Ni ' +
      'continua enxergando o desfecho com a mesma precisão desconfortável de sempre, e nada, em ' +
      'nenhum ponto do sistema, converte isso em ato.',

    sections: [
      {
        eyebrow: 'O mecanismo',
        title: 'Calor sem exigência',
        paragraphs: [
          'O fleumático retira a urgência e o sanguíneo secundário acrescenta apetite por ' +
            'companhia. É a única das doze combinações em que Se inferior é alimentado de forma ' +
            'agradável em vez de perigosa: sabores, ambientes, conversas longas, presença física ' +
            'sem risco. Comparada ao sanguíneo–colérico, que usa a mesma função inferior como ' +
            'acelerador, a sua a usa como conforto. É melhor para o corpo e pior para a obra.',
          'A pilha não muda. Ni entrega o mesmo desfecho fechado, Te continua afiado e privado, ' +
            'Fi mantém as mesmas linhas inegociáveis. O que muda é a saída: numa combinação com ' +
            'colérico, Te vira ordem dada; numa com melancólico, vira padrão cobrado; na sua, não ' +
            'vira nada. Ele permanece como comentário interno de altíssima qualidade sobre o ' +
            'trabalho de outras pessoas.',
          'Vale ser preciso sobre o que é raro aqui. Sanguíneo é busca de estímulo social, o que ' +
            'trabalha contra a introversão e contra uma função sensorial inferior — por isso ele ' +
            'raramente lidera num INTJ. Como <em>secundário</em> sobre uma base fleumática, ' +
            'porém, ele não exige plateia: exige apenas que a companhia seja fácil. Essa versão ' +
            'baixa do sanguíneo é perfeitamente compatível com um INTJ, e é o que produz esta ' +
            'combinação.',
        ],
      },
      {
        eyebrow: 'A leitura de fora',
        title: 'A simpatia é verdadeira, e é isso que confunde',
        paragraphs: [
          'Você gosta de gente em doses pequenas, recebe bem, ouve bem, faz a pergunta boa. Nada ' +
            'disso é fachada — e é por isso que o mal-entendido é tão persistente. Quem te vê ' +
            'conclui que você recarrega em companhia, e conclui errado. Você continua gastando ' +
            'energia; apenas não gasta atrito.',
          'O padrão concreto é fácil de reconhecer: o jantar corre bem, você fica até tarde, todo ' +
            'mundo sai com a impressão de que você adorou — e os dois dias seguintes não têm nada ' +
            'dentro. Não há queda de humor, não há arrependimento, não há a ressaca melancólica de ' +
            'quem se expôs. Simplesmente não sobra corrente para mais nada. Como não dói, você ' +
            'nunca fez a conta.',
          'Essa mesma facilidade produz um ativo que a maior parte dos INTJ não tem: as pessoas ' +
            'te contam coisas. Você recebe informação — sobre times, sobre intenções, sobre o que ' +
            'realmente aconteceu naquela reunião — que jamais chegaria a um INTJ que intimida. ' +
            'Ni faz um trabalho notável com esse material, e o resultado é uma leitura de ' +
            'ambiente mais precisa do que a de quase todo mundo em volta. Que você não usa.',
        ],
      },
      {
        eyebrow: 'O que se acumula',
        title: 'O ressentimento que nunca vira raiva',
        paragraphs: [
          'Existe um ressentimento específico desta combinação, e ele é o sintoma mais confiável ' +
            'de que a descrição acima é a sua: assistir alguém receber crédito por uma solução ' +
            'que você tinha inteira na cabeça meses antes e nunca teve calor suficiente para ' +
            'defender. Não é inveja — você sabe que a sua versão era melhor, e é justamente por ' +
            'isso que dói.',
          'O que torna esse ressentimento peculiar é que ele nunca vira raiva. O fleumático não ' +
            'retém calor, então não há acúmulo explosivo como no fleumático–colérico. O que ' +
            'acontece é mais silencioso e mais corrosivo: um rebaixamento privado da pessoa. Você ' +
            'não briga, não cobra, não expõe — apenas recalcula a estimativa que fazia dela, para ' +
            'baixo, permanentemente, e continua simpático. Ao longo de dez anos isso produz um ' +
            'INTJ cordial que, por dentro, tem uma opinião bastante rebaixada sobre quase todos ' +
            'os colegas, e nenhum deles jamais soube.',
        ],
        points: [
          'Você concorda em reuniões com decisões que sabe que vão falhar, e sabe inclusive em ' +
            'que trimestre vão falhar.',
          'Você raramente negocia salário, título ou escopo — não por medo, mas porque a fricção ' +
            'parece cara e o assunto nunca parece urgente.',
          'Você ajuda muito, e ajudar é socialmente recompensado, o que faz o dia se preencher ' +
            'sozinho com coisas razoáveis e irrelevantes.',
          'Você tem uma lista mental precisa de quem é bom e quem não é, e nunca a comunicou a ' +
            'ninguém.',
          'Quando alguém finalmente pergunta o que você acha, a resposta sai completa, ' +
            'estruturada e claramente pronta há muito tempo — o que costuma surpreender a sala.',
        ],
      },
      {
        eyebrow: 'De onde isto vem',
        title: 'A combinação que a literatura popular não sabe descrever',
        paragraphs: [
          'Os doze pares dominante/secundário são de LaHaye (1984); Littauer (1983) havia ' +
            'popularizado os quatro tipos no mesmo circuito. Vale notar o viés desse circuito, ' +
            'porque ele te afeta diretamente: era literatura motivacional, e o registro ' +
            'motivacional trata o sanguíneo como “o popular” e o melancólico como “o profundo”, ' +
            'reservando elogio para ambos. Um perfil quente e de baixa propulsão como o seu não ' +
            'rende material inspirador, e por isso é o menos descrito e o pior descrito dos doze ' +
            '— quando aparece, aparece como preguiça.',
          'O que a pesquisa contemporânea autoriza é modesto e vale mais do que o rótulo. Rothbart ' +
            '(2011) trata temperamento como reatividade e autorregulação precoces, incluindo ' +
            'afetividade positiva e aproximação como dimensões separadas da reatividade negativa; ' +
            'Kagan (1994) mediu inibição e desinibição em coortes de crianças. Ou seja: ser ' +
            'simultaneamente pouco reativo e propenso a afeto positivo é uma combinação ' +
            'dimensional plausível e observável. O nome “fleumático–sanguíneo”, com todo o retrato ' +
            'que vem junto, é vocabulário descritivo — não há medida por trás dele.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Acesso à informação que o tipo normalmente perde',
        text:
          'Pessoas te contam o que realmente aconteceu. Um INTJ que intimida recebe versões ' +
          'editadas; você recebe as originais. Combinado a Ni, isso produz um modelo de ambiente ' +
          'organizacional mais preciso do que o de qualquer outra combinação da lista.',
      },
      {
        title: 'Ni sem paranoia',
        text:
          'A base quente mantém generoso o seu modelo dos outros, e um modelo generoso é, na ' +
          'prática, mais exato: você não atribui hostilidade onde havia incompetência, nem plano ' +
          'onde havia acaso. Isso te protege da armadilha clássica de Ni, que é a teoria elaborada ' +
          'demais sobre intenções alheias.',
      },
      {
        title: 'Custo de convivência baixíssimo',
        text:
          'Equipes funcionam perto de você. Casamentos duram perto de você. Num tipo cuja fama é ' +
          'de ser difícil, isso não é detalhe — é uma vantagem de vida inteira, e é sua sem ' +
          'esforço.',
      },
      {
        title: 'Recuperação rápida',
        text:
          'Você não retém calor: uma discussão ruim na sexta não contamina o sábado. Isso te dá ' +
          'longevidade em contextos que desgastam qualquer INTJ mais quente, e explica por que ' +
          'você aguenta anos em ambientes que outros abandonariam.',
      },
    ],

    traps: [
      {
        title: 'Deriva agradável',
        text:
          'A vida se preenche com coisas razoáveis. Nenhuma delas é errada, nenhuma delas é sua, ' +
          'e o conjunto ocupa exatamente o espaço em que caberia o trabalho que só você poderia ' +
          'fazer.',
      },
      {
        title: 'Sim automático',
        text:
          'Você concorda porque recusar é atrito e o atrito parece caro. Depois cumpre o que ' +
          'aceitou, porque Fi trata palavra dada como valor — de modo que um segundo de baixa ' +
          'resistência vira três meses de trabalho.',
      },
      {
        title: 'Subcobrança crônica',
        text:
          'Salário, título, crédito e escopo ficam sistematicamente abaixo da sua capacidade, e ' +
          'ninguém está te enganando: você nunca pediu, e a ausência de pedido é lida como ' +
          'ausência de interesse.',
      },
      {
        title: 'Desprezo silencioso',
        text:
          'O rebaixamento privado das pessoas acumula sem nunca ser dito, e um dia sai inteiro — ' +
          'em uma frase, num momento errado, com uma precisão que devasta. Quem ouve não entende ' +
          'de onde veio, porque a superfície era cordial há dez anos.',
      },
    ],

    stress:
      'Esta combinação não briga e não detona: ela <em>dilui</em>. Sob pressão você fica mais ' +
      'disponível, não menos — mais reuniões aceitas, mais ajuda prestada, mais concordâncias ' +
      'fáceis, e menos do seu próprio trabalho, até que a semana inteira não tenha nenhuma marca ' +
      'sua. Parece estar tudo bem, e por isso ninguém intervém. O sinal confiável é aritmético: ' +
      'a quantidade de conversa sobe enquanto a quantidade de coisa dita desce. Se inferior entra ' +
      'como excesso gentil — comida, bebida, compras pequenas, noites agradáveis que não deixam ' +
      'nada — em vez do excesso violento das combinações quentes. Como o estado é confortável, ' +
      'ele pode durar anos sem disparar um único alarme. Quando o alarme enfim toca, não é ' +
      'exaustão no sentido usual: é uma aritmética súbita e seca, feita numa madrugada qualquer, ' +
      'em que você conta o que construiu e o número é pequeno demais para a capacidade que você ' +
      'sabe ter.',

    growth: [
      {
        title: 'Compromisso público e datado',
        text:
          'Você precisa de corrente vinda de fora, porque nenhuma das suas duas metades a produz. ' +
          'Uma data anunciada a alguém que vai cobrar vale mais do que qualquer quantidade de ' +
          'intenção — e é, na prática, a única coisa que funciona.',
      },
      {
        title: 'Diga a conclusão de Ni na sala',
        text:
          'Uma frase, na reunião em que importa, antes que outra pessoa a diga pior. Não peça ' +
          'permissão e não amacie: a sua leitura é boa, e o único motivo de ela não estar ' +
          'circulando é a temperatura, não a qualidade.',
      },
      {
        title: 'Negocie uma vez por ano, com data marcada',
        text:
          'Coloque no calendário e trate como tarefa técnica, não como conflito. Fora do ritual, ' +
          'você nunca vai sentir o impulso — e a subcobrança crônica é, ao longo de vinte anos, ' +
          'o dano material mais caro desta combinação.',
      },
      {
        title: 'Proteja duas horas antes de ficar disponível',
        text:
          'Trabalho seu primeiro, gentileza depois. Invertida a ordem, a gentileza consome o dia ' +
          'inteiro, todos os dias, e você chega ao fim do ano com uma reputação excelente e ' +
          'nenhum objeto com o seu nome.',
      },
    ],

    misread:
      'Tipam você de fora como ISFJ, ENFP ou INFP, porque a superfície é calor e a assinatura de ' +
      'Te está toda voltada para dentro. Leem você como sem ambição — quando o que falta é ' +
      'propulsão, não desejo. E, o erro mais custoso: as pessoas presumem que você não tem ' +
      'opiniões fortes sobre elas. Você tem, com detalhe, com data e com veredito, e parceiros ' +
      'costumam descobrir isso tarde demais, num momento em que a avaliação inteira sai de uma ' +
      'vez e parece crueldade súbita quando é apenas um arquivo antigo sendo aberto.',

    versus:
      'A confusão é com o sanguíneo–fleumático, o espelho. Lá o calor lidera: a pessoa acende ' +
      'primeiro, se anima com um assunto ou com uma companhia, e a calma entra depois para ' +
      'dissolver o impulso — ignição fácil, sustentação nenhuma. Aqui a calma lidera: você não ' +
      'acende, você acompanha, e o calor é uma cor sobre uma base que já era estável. O teste ' +
      'mais rápido é o da festa. Se você chega com energia e vai murchando ao longo da noite, o ' +
      'sanguíneo lidera. Se você chega neutro e só esquenta quando a conversa vira um assunto ' +
      'com uma pessoa, quem lidera é o fleumático.',

    sources: [...COMMON, 'grant-1983'],
  },

  'sanguine-melancholic': {
    lede:
      'Ignição e depois auditoria. Num INTJ, o sanguíneo acende com material perigoso: não é a ' +
      'novidade do ambiente que te empolga, é <strong>Ni mostrando a obra pronta</strong> — ' +
      'inteira, coerente, brilhante — antes de a primeira linha existir. A euforia é real e a ' +
      'visão costuma ser boa. Então o melancólico secundário entra e faz o que sabe fazer: mede a ' +
      'distância entre o que foi visto e o que existe, e conclui, com razão técnica, que o que ' +
      'existe é indigno.',

    sections: [
      {
        eyebrow: 'O mecanismo',
        title: 'A obra pronta antes da primeira linha',
        paragraphs: [
          'Este é o ponto que muda tudo, e é o motivo pelo qual conselhos genéricos sobre ' +
            '“disciplina” não funcionam com você. O seu entusiasmo não é superficial — ele é a ' +
            'coisa mais precisa que você tem. Ni converge para um desfecho único e o entrega ' +
            'inteiro, sem etapas; o sanguíneo pega essa entrega e transforma em calor imediato, ' +
            'com necessidade de dizer em voz alta. Vinte e quatro horas depois da ideia, alguém ' +
            'já ouviu você descrevendo o produto acabado com detalhe de quem já o usou.',
          'O problema estrutural é que o padrão de comparação não é externo. Não é a concorrência, ' +
            'não é o estado da arte, não é o que seria bom o bastante para o cliente. É a imagem ' +
            'de Ni, que é sempre superior a qualquer implementação porque não passou por nenhuma ' +
            'restrição de matéria, tempo ou dinheiro. O melancólico secundário compara a coisa ' +
            'real com essa imagem e emite um veredito de indignidade que está, isoladamente, ' +
            'sempre correto.',
          'É essa correção técnica que torna a armadilha tão difícil de escapar. Cada avaliação ' +
            'individual sua procede. O erro está no conjunto: um padrão calibrado contra uma ' +
            'imagem impossível reprova, por construção, absolutamente tudo que possa vir a ' +
            'existir — inclusive as coisas que teriam sido excelentes.',
        ],
      },
      {
        eyebrow: 'O ciclo',
        title: 'Quatro tempos, e o quinto que ninguém vê',
        paragraphs: [
          'A forma se repete com regularidade quase mecânica, o que é uma má notícia e também a ' +
            'melhor alavanca que você tem: um padrão previsível pode ser interceptado num ponto ' +
            'específico.',
        ],
        points: [
          'Dias 1 a 3 — ignição. A visão chega inteira, você conta a alguém, e a qualidade do ' +
            'que você diz é genuinamente alta. Alguém se anima junto.',
          'Semana 2 — primeiro contato real com a matéria. A coisa resiste: o código é feio, o ' +
            'texto é fraco, o material não obedece. Isso é normal e universal, e você lê como ' +
            'sinal.',
          'Semana 4 — comparação com a imagem de Ni e veredito. Não é desânimo difuso; é uma ' +
            'sentença articulada, com argumentos bons, sobre por que aquilo não merece continuar.',
          'Depois — silêncio. A pasta não é apagada, o que importa: você guarda os inícios, e ' +
            'cada um deles tem as vinte melhores páginas de algo que nunca teve a vigésima ' +
            'primeira.',
          'O quinto tempo, invisível — cada abandono alimenta a tese de que você não termina ' +
            'nada, e a tese torna o próximo abandono mais barato de justificar. O ciclo deixa de ' +
            'ser comportamento e vira identidade.',
        ],
      },
      {
        eyebrow: 'A raridade',
        title: 'Por que isto é incomum num INTJ e como reconhecer mesmo assim',
        paragraphs: [
          'O sanguíneo é busca de estímulo social e opera contra a introversão e contra uma ' +
            'função sensorial inferior — motivo pelo qual raramente lidera num INTJ. Quando ' +
            'lidera, o que ele empresta não é sociabilidade geral. É a <em>ignição</em> e a ' +
            'necessidade de falar o que acendeu. Essa distinção é o que separa esta combinação de ' +
            'um erro de tipagem.',
          'Os sinais de que é isto, e não um ENFP mal tipado, são específicos: você não quer uma ' +
            'festa, quer <em>uma</em> pessoa para contar às onze da noite; o entusiasmo tem forma ' +
            'de assunto e não de gente, e a mesma companhia sem o assunto te esvazia em vinte ' +
            'minutos; você pode estar eufórico e recusar terminantemente sair de casa; e a ' +
            'euforia é sobre uma estrutura — um sistema, uma tese, um encadeamento — não sobre ' +
            'possibilidades ramificadas. Ni continua convergindo. Só que agora ele fala.',
        ],
      },
      {
        eyebrow: 'O custo social',
        title: 'A reputação de quem anuncia',
        paragraphs: [
          'Você anuncia, e as pessoas lembram de anúncios. Ao longo de alguns anos isso constrói ' +
            'uma reputação bem definida: alguém que fala coisas grandes e entrega poucas. É a ' +
            'ferida mais dolorosa da combinação, e não por vaidade — é porque Fi trata integridade ' +
            'como valor inegociável, e nada te acusa com mais eficácia do que a distância entre a ' +
            'sua palavra e o seu histórico.',
          'A defesa que você desenvolve piora tudo. Você passa a anunciar menos, a contar só ' +
            'quando estiver mais adiantado, a não falar do projeto “desta vez”. Só que o anúncio ' +
            'era a única prestação de contas externa que existia no seu sistema. Sem ele, o ciclo ' +
            'continua igual, mas agora inteiramente em privado, onde o veredito melancólico não ' +
            'encontra nenhuma resistência. Menos vergonha, menos entrega ainda.',
        ],
      },
      {
        eyebrow: 'De onde isto vem',
        title: 'Um retrato reconhecível, sem nada por trás',
        paragraphs: [
          'A combinação dominante/secundário é de LaHaye (1984), e o retrato do sanguíneo que ' +
            'circula desde Littauer (1983) — expansivo, caloroso, disperso — foi escrito para um ' +
            'público motivacional, não a partir de amostra. Nenhum periódico revisado por pares ' +
            'mede “sanguíneo–melancólico”, e a expressão não corresponde a nenhuma variável.',
          'O que existe de mensurável é dimensional e apenas se aproxima. Rothbart (2011) separa ' +
            'aproximação e afetividade positiva do controle voluntário e da afetividade negativa, ' +
            'e nada impede que uma mesma pessoa pontue alto em aproximação e alto em ' +
            'autoavaliação punitiva — mas essa coexistência é um perfil de escores, não um tipo, ' +
            'e ninguém a estudou junto com tipo MBTI. Onde este texto descreve o ciclo com ' +
            'confiança, ele está descrevendo um mecanismo reconhecível, não um resultado medido.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Ignição real',
        text:
          'Você começa. É banal dito assim, e é a coisa que a maioria dos INTJ liderados pelo ' +
          'melancólico não consegue fazer em dez anos de preparo. Você atravessa a linha de ' +
          'partida por reflexo, e essa é uma vantagem que não se ensina.',
      },
      {
        title: 'Contágio com conteúdo',
        text:
          'Quando você fala a visão, as pessoas seguem — e diferentemente de quase todo entusiasta, ' +
          'o que você está descrevendo é uma convergência de Ni, não um otimismo. A combinação de ' +
          'calor e substância é o que te torna capaz de reunir gente em torno de algo que ainda ' +
          'não existe.',
      },
      {
        title: 'Padrão que não é decorativo',
        text:
          'Os seus vereditos são tecnicamente corretos. Como crítico — do próprio trabalho e do ' +
          'alheio — você tem uma taxa de acerto alta, e isso é aproveitável em revisão, ' +
          'consultoria e mentoria, ou seja, exatamente onde julgar é a entrega.',
      },
      {
        title: 'Recomeço disponível',
        text:
          'O sanguíneo volta. Depois de qualquer colapso de projeto, uma nova ignição está a ' +
          'semanas de distância, o que significa que você nunca fica sem energia inicial — o ' +
          'recurso mais escasso da maioria das pessoas é o que você tem de sobra.',
      },
    ],

    traps: [
      {
        title: 'O anúncio como substituto da entrega',
        text:
          'Contar a ideia entrega uma fração do prazer de tê-la terminado, e essa fração é ' +
          'suficiente para descarregar a pressão. Você paga adiantado, em conversa, o que ' +
          'deveria financiar a semana três.',
      },
      {
        title: 'A reescrita das melhores vinte páginas',
        text:
          'Em vez de escrever a página vinte e um, você melhora as vinte que já existem, porque ' +
          'melhorar é agradável e avançar é feio. O trabalho fica mais polido e permanentemente ' +
          'do mesmo tamanho.',
      },
      {
        title: 'A tese sobre si mesmo',
        text:
          '“Eu não termino nada” deixa de ser observação e vira identidade — e uma identidade é ' +
          'uma previsão que se cumpre. É a armadilha mais cara da combinação, mais cara do que ' +
          'qualquer projeto perdido.',
      },
      {
        title: 'Vergonha retroativa',
        text:
          'Você não consegue reler o próprio entusiasmo. A mensagem que você mandou às duas da ' +
          'manhã descrevendo o projeto se torna insuportável em duas semanas, e o constrangimento ' +
          'ensina você a se calar — que é exatamente a lição errada.',
      },
    ],

    stress:
      'Sob estresse esta combinação não desacelera: ela <em>acelera o ciclo</em>. As ignições ' +
      'ficam mais curtas e os vereditos mais rápidos, até você começar e matar coisas dentro da ' +
      'mesma semana, às vezes do mesmo dia. E então acontece o movimento perigoso, que é a ' +
      'generalização: a auditoria melancólica deixa de julgar o trabalho e passa a julgar a ' +
      'pessoa, com o mesmo aparato argumentativo e a mesma aparência de rigor. Um veredito sobre ' +
      'um capítulo ruim é útil; o mesmo veredito aplicado a uma vida inteira é o dano real desta ' +
      'combinação, muito acima de qualquer projeto perdido. Se inferior aparece como noites ' +
      'invertidas, estimulantes, um novo início às três da manhã, o corpo usado como combustível ' +
      'da ignição e depois punido pela queda. O aviso que você deve procurar não é a tristeza — é ' +
      'a frase “eu sou assim” aparecendo no lugar onde antes havia uma avaliação sobre um ' +
      'trabalho específico.',

    growth: [
      {
        title: 'Escopo do tamanho de uma ignição',
        text:
          'Meça honestamente quanto tempo o seu calor dura — costumam ser dias, não trimestres — ' +
          'e recorte entregas que caibam nesse intervalo. Terminar cinco coisas pequenas ' +
          'desmonta a tese sobre si mesmo de um jeito que nenhum argumento consegue.',
      },
      {
        title: 'Publique a versão feia, com data',
        text:
          'Não a versão pronta: a feia, no dia marcado, sem revisão final. O objetivo não é o ' +
          'objeto — é interromper a semana quatro antes de o veredito ter tempo de se formar, e ' +
          'provar empiricamente que o mundo aceita coisas piores do que a sua régua.',
      },
      {
        title: 'Separe a auditoria do trabalho',
        text:
          'O melancólico não pode rodar ao vivo. Marque um dia para avaliar e nenhum outro; ' +
          'enquanto produz, você não julga. É uma regra artificial e é a única coisa que impede ' +
          'as duas metades de se cancelarem.',
      },
      {
        title: 'Conte para uma pessoa que cobra',
        text:
          'Não para a plateia, que consome o anúncio e não devolve nada. Uma pessoa, com data ' +
          'combinada e autoridade para perguntar “cadê?”. Isso preserva a prestação de contas ' +
          'externa sem o custo de reputação do anúncio público.',
      },
    ],

    misread:
      'Leem você como inconstante, e quem já se animou junto com um projeto seu que morreu lê ' +
      'como pouco confiável — um julgamento que dói mais em você do que na pessoa que o faz. Em ' +
      'tipagem externa isso costuma virar ENFP ou ENTP, porque a superfície é calor e fala rápida. ' +
      'E o pior mal-entendido é o seu sobre si mesmo: você diagnostica falta de disciplina, ' +
      'quando o mecanismo é um padrão calibrado contra uma imagem de Ni que nenhuma execução ' +
      'poderia alcançar. Disciplina não conserta um problema de referencial.',

    versus:
      'A confusão é com o melancólico–sanguíneo, e a diferença é de base, não de ingredientes. ' +
      'Lá a base é o recolhimento: semanas de silêncio, mundo interno denso, e o sanguíneo ' +
      'aparece como janelas que se abrem por assunto — três horas de entusiasmo genuíno e depois ' +
      'a casa inteira volta a ser melancólica. Aqui a base é a ignição, e o melancólico é o que ' +
      '<em>fecha</em>. O teste é ouvir a queixa de quem convive com você. Se reclamam que você ' +
      'some, o melancólico lidera. Se reclamam que você promete, quem lidera é o sanguíneo.',

    sources: [...COMMON, 'grant-1983'],
  },

  'sanguine-choleric': {
    lede:
      'Calor sobre calor e nenhum freio. O sanguíneo entrega apetite e presença, o colérico ' +
      'entrega força e decisão, e o conjunto produz um INTJ que parece qualquer coisa menos um ' +
      'INTJ — rápido, expansivo, confrontador, sempre em movimento. É a combinação mais rara ' +
      'desta lista e a que mais faz o próprio dono duvidar do resultado do teste. O motor não ' +
      'mudou: <strong>Ni continua convergindo e Te continua organizando</strong>. O que mudou é ' +
      'que os dois foram acelerados até ficarem irreconhecíveis — e que Ni perdeu o tédio de que ' +
      'depende para funcionar.',

    sections: [
      {
        eyebrow: 'O mecanismo',
        title: 'Duas fontes de calor, nenhuma de freio',
        paragraphs: [
          'Repare no que <em>não</em> está nesta combinação. Não há melancólico, então nada por ' +
            'dentro insiste que a coisa precise estar boa antes de sair. Não há fleumático, então ' +
            'nada absorve a urgência nem impõe um intervalo entre o impulso e o ato. Sobram duas ' +
            'metades que fazem a mesma coisa em direções ligeiramente diferentes: uma quer ' +
            'engajamento, a outra quer controle, e ambas querem agora.',
          'O efeito sobre Ni é o dado central e quase nunca é dito. Intuição introvertida não é ' +
            'uma função rápida: ela converge em silêncio, ao longo de dias sem estímulo, e precisa ' +
            'de tempo morto do mesmo jeito que um músculo precisa de descanso. Uma agenda cheia de ' +
            'ponta a ponta não deixa Ni mais lento — deixa Ni mais raso. O horizonte encolhe de ' +
            'anos para semanas, e o que você chama de estratégia passa a ser reação bem executada.',
          'É por isso que esta combinação perde exatamente a vantagem que definia o tipo. Você ' +
            'continua tendo o motor que enxerga cinco anos à frente; simplesmente parou de ' +
            'alimentá-lo. E como a execução vai bem e os resultados de curto prazo aparecem, não ' +
            'há nenhum sinal de erro no painel.',
        ],
      },
      {
        eyebrow: 'A verificação',
        title: 'Como saber que ainda é um INTJ',
        paragraphs: [
          'Você provavelmente já se testou como ENTJ, e quem te conhece de trabalho ficaria ' +
            'surpreso de saber que é introvertido. A verificação não se faz pela superfície — a ' +
            'superfície está toda contaminada pelo temperamento. Faz-se pela forma do pensamento ' +
            'e pelo custo do dia.',
        ],
        points: [
          'O conteúdo do que você diz é uma leitura única e convergida, não um leque de ' +
            'possibilidades. Você não faz brainstorm: você já sabe, e está informando.',
          'Você decide sozinho e comunica depois. A consulta, quando acontece, é confirmação — e ' +
            'você sabe disso, mesmo que não diga.',
          'Conversa fiada sem assunto te esvazia em minutos, ainda que você seja bom nela. Você é ' +
            'competente socialmente e não é alimentado socialmente.',
          'Você termina um dia que dominou completamente e chega em casa vazio, sem entender por ' +
            'que, já que tudo correu bem.',
          'Você continua precisando de porta fechada para pensar. A diferença em relação aos ' +
            'outros INTJ não é a necessidade — é que você nunca se concede a porta.',
        ],
      },
      {
        eyebrow: 'A função inferior',
        title: 'Onde Se cobra caro nesta combinação',
        paragraphs: [
          'Na maioria dos INTJ, Se inferior é ponto cego: o corpo é lembrado tarde e a vida ' +
            'acontece alguns centímetros à frente do presente. Aqui não. O sanguíneo dá voz a Se ' +
            'e o colérico dá permissão, e o resultado é um INTJ que de fato vive no agora — ' +
            'velocidade, risco físico, prazer imediato, decisões tomadas na cadência do estímulo. ' +
            'Isso tem um lado bom real: você é o único INTJ que não precisa ser convencido a ' +
            'habitar o próprio corpo.',
          'O problema é de supervisão. Na ordem de desenvolvimento de Grant (1983) — uma hipótese ' +
            'sobre quando cada função amadurece, nunca verificada em coorte —, Se é a última da ' +
            'fila e a menos consciente. Usada com intensidade e sem nada que a monitore, ela não ' +
            'amadurece: ela apenas dirige. E o que ela dirige, com o colérico ao lado, tem forma ' +
            'de decisão executiva. Você não vai sentir que está sendo impulsivo. Vai sentir que ' +
            'está sendo decisivo, com argumentos estratégicos disponíveis para cada um dos casos.',
        ],
      },
      {
        eyebrow: 'O que se perde',
        title: 'As perdas específicas, em ordem de aparecimento',
        paragraphs: [
          'A degradação desta combinação é ordenada e razoavelmente previsível, o que ajuda: dá ' +
            'para reconhecer em que estágio você está sem esperar o desfecho.',
        ],
        points: [
          'Primeiro some a previsão longa. Você continua acertando o trimestre e para de ter ' +
            'opinião sobre a década.',
          'Depois cai o padrão, em silêncio. Sem melancólico, nada segura a régua, e a queda é ' +
            'invisível porque a velocidade compensa nos resultados imediatos.',
          'Depois as relações passam a ser conduzidas em ritmo de agenda. As pessoas próximas ' +
            'sentem-se processadas, e a queixa que aparece não é de frieza — é de pressa.',
          'Fi acumula sem ser dito, porque não há intervalo em que ele possa ser ouvido. Um dia ' +
            'sai como ruptura total, e todo mundo estranha vindo de alguém tão caloroso.',
          'Por último vem o corpo, que é o único sistema que não aceita ser adiado ' +
            'indefinidamente e que, nesta combinação, é o primeiro a ser gasto e o último a ser ' +
            'consultado.',
        ],
      },
      {
        eyebrow: 'De onde isto vem',
        title: 'Nomes emprestados, medidas nenhumas',
        paragraphs: [
          'Os pares dominante/secundário são de LaHaye (1984), sobre os quatro tipos que Littauer ' +
            '(1983) havia popularizado. Eysenck e Eysenck (1985) usaram os mesmos quatro nomes ' +
            'antigos como rótulos dos quadrantes de extroversão × neuroticismo — o seu perfil ' +
            'cairia, na leitura popular desse esquema, no canto de alta aproximação. Vale ser ' +
            'claro: aquilo foi empréstimo mnemônico sobre duas dimensões medidas, e não um retorno ' +
            'dos humores nem uma validação deles.',
          'Kagan (1994) descreveu bebês de baixa reatividade e desinibidos, seguidos ao longo do ' +
            'desenvolvimento; Rothbart (2011) trata aproximação e afetividade positiva como ' +
            'dimensões precoces e observáveis. É plausível que a sua propulsão tenha uma base ' +
            'temperamental precoce nesse sentido. O que não existe, em lugar nenhum, é um estudo ' +
            'ligando qualquer dessas medidas a tipo MBTI — de modo que a frase “INTJ ' +
            'sanguíneo–colérico” é uma descrição útil e não um achado.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Velocidade com conteúdo por trás',
        text:
          'Quase todo mundo que se move rápido não tem nada sustentando o movimento. Você tem: a ' +
          'coisa que sai depressa da sua boca é uma convergência de Ni, não uma reação. É por isso ' +
          'que as suas decisões rápidas acertam com uma frequência que irrita os cautelosos.',
      },
      {
        title: 'Capacidade de fundar',
        text:
          'Você consegue começar uma organização, o que exige simultaneamente visão, apetite por ' +
          'responsabilidade e tolerância a incerteza social — três coisas que quase nenhuma outra ' +
          'combinação de INTJ reúne ao mesmo tempo.',
      },
      {
        title: 'A sala ocupada',
        text:
          'Você carrega uma reunião, negocia bem e fala em público sem esforço aparente. Nenhum ' +
          'outro INTJ faz isso sem pagar caro, e é uma vantagem estratégica genuína em qualquer ' +
          'ambiente onde a decisão passa por convencer gente.',
      },
      {
        title: 'Risco calculado que os outros não podem correr',
        text:
          'A previsão de Ni somada ao apetite do sanguíneo permite apostas que seriam ' +
          'imprudentes para quem tem só uma das duas. Quando o horizonte ainda está longo, esta é ' +
          'a combinação mais poderosa da lista.',
      },
    ],

    traps: [
      {
        title: 'Agitação confundida com estratégia',
        text:
          'Movimento produz a sensação de progresso e resultados de curto prazo produzem ' +
          'confirmação. Nada no seu painel avisa que o horizonte encolheu — e o encolhimento do ' +
          'horizonte é a perda mais cara que um INTJ pode sofrer.',
      },
      {
        title: 'Compromissos em série',
        text:
          'Você assume mais do que qualquer pessoa poderia entregar, porque no momento de assumir ' +
          'a entrega parece trivial — Ni já a viu pronta. O sexto projeto é aceito com a mesma ' +
          'confiança do primeiro.',
      },
      {
        title: 'Queda silenciosa do padrão',
        text:
          'Sem contrapeso melancólico, a régua cai sem aviso e sem culpa. Você percebe dois anos ' +
          'depois, ao reencontrar algo que fez antes e notar que aquilo era melhor do que o que ' +
          'você entrega hoje.',
      },
      {
        title: 'O corpo como recurso',
        text:
          'Se está sendo ouvido apenas como fonte de estímulo, nunca como fonte de aviso. O ' +
          'esgotamento chega como surpresa não porque não havia sinais, mas porque nenhuma ' +
          'função da sua pilha estava encarregada de lê-los.',
      },
    ],

    stress:
      'Esta combinação não desacelera sob estresse: ela <em>acelera</em>. Mais projetos, mais ' +
      'viagem, mais fala, mais decisões tomadas em pé. E a metade colérica vira o ritmo contra as ' +
      'pessoas — você fica seco, depois sarcástico, depois definitivo, e cortes que levariam ' +
      'meses para amadurecer em outro perfil acontecem em uma tarde. Como o sanguíneo mantém a ' +
      'agenda cheia e agradável, nenhum sinal chega até você: não há hora vazia em que ele ' +
      'pudesse chegar. Por isso o colapso desta combinação é famoso por não dar aviso, e a razão ' +
      'é estrutural — nenhuma das duas metades monitora custo, e Ni, que teria visto isso a ' +
      'quilômetros, não recebe uma hora de silêncio há um ano. O rompimento costuma vir inteiro e ' +
      'de fora: um corpo que para numa quinta-feira, alguém que vai embora sem discussão prévia, ' +
      'uma empresa que quebra num prazo que você não olhou.',

    growth: [
      {
        title: 'Tédio por calendário, não por vontade',
        text:
          'Blocos protegidos e recorrentes de nada — sem tela, sem pauta, sem companhia. Não é ' +
          'descanso: é a condição operacional de Ni. Sem esses blocos a vantagem estratégica do ' +
          'tipo simplesmente não se forma, por mais horas que você trabalhe.',
      },
      {
        title: 'Regra de um',
        text:
          'Nada novo entra antes de algo sair. A regra tem de ser aritmética e externa, porque ' +
          'nenhuma das suas duas metades vai gerar hesitação no momento em que a oportunidade ' +
          'aparecer — e no momento em que aparece, ela sempre parece diferente.',
      },
      {
        title: 'Contrate a régua que você não tem',
        text:
          'Coloque ao seu lado alguém com autoridade real para segurar o padrão e para recusar o ' +
          'sexto projeto. Não um assistente: alguém que possa dizer não a você e sobreviver a ' +
          'isso. É a peça que a sua combinação não fornece e que nenhuma força de vontade supre.',
      },
      {
        title: 'Escreva a previsão e volte nela',
        text:
          'Anote o que você acha que vai acontecer, com data, e confira depois. Isso calibra Ni e ' +
          'faz mais uma coisa, específica para você: torna visível o encolhimento do horizonte, ' +
          'porque em algum momento você vai notar que só escreve previsões sobre o mês que vem.',
      },
    ],

    misread:
      'Quase todo mundo te tipa como ENTJ, e quem te vê em modo de rua chuta ESTP. Leem você ' +
      'como extrovertido — o que é compreensível, já que você ocupa a sala — e ninguém desconfia ' +
      'do custo, porque o esgotamento aparece em casa e a competência aparece em público. Quem ' +
      'convive de perto reclama de pressa, não de frieza: a queixa é sobre o ritmo, sobre a ' +
      'sensação de ser um item numa agenda muito boa. E, o mal-entendido mais caro, você mesmo ' +
      'lê o próprio cansaço como falta de disciplina, quando ele é o preço estrutural de rodar um ' +
      'motor introvertido em rotação de motor extrovertido.',

    versus:
      'A confusão é com o colérico–sanguíneo, o espelho, e a diferença aparece na ordem interna ' +
      'de cada episódio. Lá o colérico lidera: a decisão é a primeira coisa que existe, e o calor ' +
      'sanguíneo entra depois como meio de execução — a pessoa decide e então encanta para ' +
      'conseguir o que decidiu. Aqui o apetite lidera: você é atraído antes de decidir, e o ' +
      'colérico chega em seguida para fornecer força e justificativa ao que você já queria. Em ' +
      'uma frase: o colérico–sanguíneo quer controle e usa o calor; o sanguíneo–colérico quer ' +
      'engajamento e usa a força. O teste é lembrar da última decisão grande e perguntar qual das ' +
      'duas chegou primeiro — a vontade ou o veredito.',

    sources: [...COMMON, 'eysenck-eysenck-1985', 'grant-1983'],
  },

  'sanguine-phlegmatic': {
    lede:
      'Nenhuma urgência e nenhuma dureza. Você acende com facilidade e sustenta com dificuldade; ' +
      'é leve de conviver, avesso a conflito, flexível — e ninguém, olhando de fora, ' +
      'reconheceria nisso o estrategista implacável do folclore. E ainda assim o motor está ' +
      'intacto: as conclusões de Ni chegam com a mesma certeza desconfortável, o julgamento de Te ' +
      'continua afiado e privado, os valores de Fi continuam inegociáveis. Falta apenas ' +
      '<strong>temperatura</strong> — e é por isso que você sabe, com consistência, coisas a ' +
      'respeito das quais nunca faz nada.',

    sections: [
      {
        eyebrow: 'O mecanismo',
        title: 'Motor intacto, corrente ausente',
        paragraphs: [
          'A pilha cognitiva é a mesma nas doze combinações — o temperamento não muda arquitetura, ' +
            'muda temperatura. Na sua, as duas metades falham em fornecer propulsão por motivos ' +
            'diferentes e complementares. O sanguíneo fornece ignição, mas ignição sem ' +
            'sustentação: acende rápido, apaga rápido, e não deixa resíduo de obrigação. O ' +
            'fleumático fornece estabilidade, mas estabilidade sem exigência: absorve a ' +
            'frustração antes que ela vire pressão. Nenhum dos dois produz aquilo que empurraria ' +
            'uma conclusão de Ni para fora da sua cabeça.',
          'É útil comparar com as duas combinações que resolvem isso. No melancólico–colérico, a ' +
            'dor do padrão gera pressão e o colérico converte a pressão em movimento. No ' +
            'colérico–fleumático, a decisão sai antes de haver tempo para hesitar. Você não tem ' +
            'nem a dor nem a decisão precoce. Tem clareza, e clareza é notoriamente inerte.',
          'Daí o sintoma mais característico e mais subestimado: a dúvida sobre o próprio tipo. ' +
            'Esta é a combinação que mais refaz o teste, que mais lê descrições de INTJ com a ' +
            'sensação de estar vendo outra pessoa, e que mais frequentemente conclui que houve ' +
            'engano. Não houve. A descrição padrão do tipo é escrita a partir das combinações ' +
            'quentes, porque são elas que produzem histórias.',
        ],
      },
      {
        eyebrow: 'A raridade',
        title: 'Por que isto é incomum — e como se reconhece mesmo assim',
        paragraphs: [
          'Sanguíneo é busca de estímulo social, e um INTJ é introvertido com função sensorial ' +
            'inferior; a rigor, os dois puxam em direções opostas. Isso torna esta combinação ' +
            'incomum, não impossível — e ela é reconhecível justamente por não se parecer com a ' +
            'extroversão. O que o sanguíneo empresta aqui não é apetite por plateia: é <em>' +
            'facilidade</em>. Você entra em contato sem custo de entrada, gosta de gente sem ' +
            'precisar de gente, e sai cedo sem sofrer por isso.',
          'A verificação está por baixo, e é implacável. A avaliação privada que você faz das ' +
            'pessoas e das decisões é tão dura quanto a de qualquer INTJ colérico — só que nunca ' +
            'foi verbalizada. Se você reconhece a combinação de uma superfície leve com um ' +
            'tribunal interno permanentemente em sessão, o tipo está certo e o teste não errou. ' +
            'O que confundiu foi a temperatura.',
        ],
      },
      {
        eyebrow: 'O dia a dia',
        title: 'O custo de nunca incomodar',
        paragraphs: [
          'A vida sem atrito parece barata e não é. Cada uma das renúncias abaixo é pequena e ' +
            'defensável isoladamente; o dano está na taxa de repetição ao longo de vinte anos.',
        ],
        points: [
          'A objeção que você não levantou na reunião, e que teria evitado seis meses de trabalho ' +
            'errado — você a formulou inteira, mentalmente, enquanto a decisão era tomada.',
          'O salário que você nunca negociou, porque a conversa parecia desagradável e o assunto ' +
            'nunca parecia urgente.',
          'O amigo que você não confrontou, e a amizade que foi se esvaziando sem nenhum ' +
            'incidente — nunca houve briga, apenas a subtração lenta de conteúdo.',
          'O plano que você tinha em detalhe e viu alguém executar mal, sem dizer nada, e sem ' +
            'sentir raiva suficiente para dizer.',
          'Os projetos próprios que começaram bem, com entusiasmo real, e terminaram em nada — ' +
            'sem abandono dramático, sem culpa, apenas por evaporação.',
        ],
      },
      {
        eyebrow: 'O que se acumula',
        title: 'Nem rancor, nem vergonha — arquivo',
        paragraphs: [
          'Cada combinação acumula uma coisa diferente. As lideradas pelo melancólico acumulam ' +
            'vergonha; as lideradas pelo colérico acumulam contas a cobrar. A sua não acumula ' +
            'nenhuma das duas: o fleumático não retém calor e o melancólico não está presente ' +
            'para punir. O que se acumula é mais estranho e mais silencioso — um arquivo de ' +
            'precisão não gasta. Leituras corretas que nunca foram ditas. Previsões que se ' +
            'confirmaram sem plateia. Uma década de saber sem consequência.',
          'Fi é a exceção, e é por isso que ele surpreende. Terciário na ordem de Grant (1983), ' +
            'forte em intensidade e fraco em articulação, ele mantém as linhas absolutas com a ' +
            'mesma firmeza que teria em qualquer outro INTJ — e a base leve não as amolece, ' +
            'apenas as esconde. Quando uma delas é cruzada, a pessoa flexível e agradável encerra ' +
            'algo de forma permanente, sem volume e sem explicação, e todo mundo em volta acha que ' +
            'não faz sentido. Faz. Foi só a única coisa nesta combinação que nunca foi negociável.',
        ],
      },
      {
        eyebrow: 'De onde isto vem',
        title: 'Vocabulário antigo, estrutura recente, medida nenhuma',
        paragraphs: [
          'Os quatro humores são fisiologia pré-científica: o Corpus Hipocrático (c. 400 a.C.) ' +
            'descreve sangue, fleuma, bile amarela e bile negra como equilíbrio de saúde, e ' +
            'Galeno (c. 170 d.C.) organiza nove misturas ao longo de quente/frio e seco/úmido — ' +
            'não quatro tipos, e sem dominante e secundário. A estrutura dominante/secundário que ' +
            'te descreve nesta página é de LaHaye (1984), sobre os quatro tipos popularizados por ' +
            'Littauer (1983).',
          'Do lado mensurável, Kagan (1994) e Rothbart (2011) estabelecem que reatividade e ' +
            'autorregulação são diferenças precoces e razoavelmente estáveis — contínuas em ' +
            'Rothbart, categóricas em Kagan —, o que ' +
            'dá lastro à ideia de uma linha de base tranquila, e nenhum lastro à ideia de doze ' +
            'caixas. Um último cuidado, que é a confusão mais comum: nada disto tem relação com ' +
            'os temperamentos de Keirsey (1998), em que o INTJ é sempre Racional por definição, ' +
            'sem dominante, sem secundário e sem mistura. Mesma palavra, outro modelo, outra ' +
            'lógica.',
        ],
      },
    ],

    strengths: [
      {
        title: 'Julgamento exato sem hostilidade',
        text:
          'Você vê o que os outros INTJ veem e não acrescenta desprezo. Essa combinação é rara e ' +
          'vale muito onde julgar bem e não humilhar são requisitos simultâneos — mentoria, ' +
          'avaliação, arbitragem, qualquer papel em que a verdade precise ser recebida para ser ' +
          'útil.',
      },
      {
        title: 'Convivência que dura',
        text:
          'Você é o INTJ com quem as pessoas continuam casadas e continuam amigas. Não é pouco ' +
          'num tipo cuja fama é queimar relações por rigor, e é uma vantagem cumulativa: ' +
          'trinta anos de vínculos preservados valem mais do que qualquer projeto.',
      },
      {
        title: 'Ausência de necessidade de vencer',
        text:
          'Você consegue ouvir um argumento melhor e mudar de posição sem custo de ego. Num tipo ' +
          'cuja armadilha clássica é a certeza fechada em torno de uma única leitura do futuro, ' +
          'isso é uma imunidade real e escassa.',
      },
      {
        title: 'Reserva de energia',
        text:
          'Você não gasta em atrito, então tem sobra: aguenta ambientes, prazos e pessoas que ' +
          'esgotariam um INTJ mais quente. A energia existe. Ela nunca foi apontada para nada.',
      },
    ],

    traps: [
      {
        title: 'A visão que morre na cabeça',
        text:
          'É a armadilha central, e ela não faz barulho. Você enxerga o desfecho correto com ' +
          'antecedência e regularidade, e o registro dessa clareza permanece inteiramente ' +
          'interno. Ninguém além de você jamais soube que os planos existiram.',
      },
      {
        title: 'Aceitação por omissão',
        text:
          'Você não escolhe: você deixa de recusar. Escopo, cargo, cidade, relação — quase tudo ' +
          'na sua vida entrou por ausência de objeção, e a soma disso é uma biografia desenhada ' +
          'por terceiros com o seu consentimento silencioso.',
      },
      {
        title: 'Anos perdidos na dúvida sobre o tipo',
        text:
          'Refazer o teste, ler descrições, concluir que não bate, recomeçar. Cada rodada dessas ' +
          'adia o uso concreto do que você tem, e o mecanismo é sempre o mesmo: você está ' +
          'comparando a sua temperatura com a das combinações quentes.',
      },
      {
        title: 'Ambição terceirizada',
        text:
          'Você deixa que um parceiro, um chefe ou um acaso definam o tamanho da sua vida, e ' +
          'depois se adapta com competência genuína ao tamanho que foi definido — o que faz o ' +
          'arranjo parecer escolha.',
      },
    ],

    stress:
      'Esta combinação não intensifica sob estresse: ela <em>rareia</em>. Você fica mais ' +
      'agradável, mais disponível e mais ausente ao mesmo tempo — assume mais trabalho dos outros ' +
      'e menos do seu, concorda mais depressa, e a certeza interna sobre o que deveria ser feito ' +
      'fica mais alta e mais desconectada de qualquer ato. O dano não é colapso, é erosão: como ' +
      'nada quebra, nada é consertado, e o estado pode durar cinco anos. Quando finalmente ' +
      'rompe, quase sempre rompe por Fi — uma linha inegociável é cruzada e a pessoa leve e ' +
      'flexível encerra alguma coisa de forma definitiva, sem elevar a voz, para o espanto geral. ' +
      'Se inferior aparece como conforto e não como excesso: sono, tela, comida, uma noite que se ' +
      'estica para ocupar o lugar onde deveria estar o seu trabalho. É o estresse mais difícil de ' +
      'diagnosticar dos doze, porque em nenhum momento ele parece estresse.',

    growth: [
      {
        title: 'Uma coisa, pública',
        text:
          'Não um sistema de produtividade: uma coisa só, anunciada a alguém, com data. Você não ' +
          'precisa de mais clareza — tem de sobra. Precisa de um compromisso externo que torne o ' +
          'adiamento visível, porque nada interno o tornará.',
      },
      {
        title: 'Use o incômodo alheio como métrica',
        text:
          'Se ninguém foi levemente incomodado por você neste mês, você não agiu. É uma métrica ' +
          'grosseira e é a única que funciona num perfil que confunde ausência de atrito com ' +
          'ausência de problema.',
      },
      {
        title: 'Contrate a pressão',
        text:
          'Prazo, sócio, editor, cliente, professor — alguém cuja função seja cobrar. Você não ' +
          'está terceirizando disciplina; está instalando a corrente que a sua combinação, por ' +
          'construção, não gera.',
      },
      {
        title: 'Discorde no dia, em uma frase',
        text:
          'Sem preâmbulo, sem amaciar, no momento. Uma frase por semana já reorganiza como você é ' +
          'lido, e reorganiza mais ainda a sua relação com o próprio julgamento: opinião dita em ' +
          'voz alta começa a exigir consequência.',
      },
      {
        title: 'Pare de refazer o teste',
        text:
          'A dúvida sobre o tipo é sintoma desta combinação, não evidência contra ela. Aceite o ' +
          'diagnóstico e gaste a energia da dúvida na única coisa que falta, que é aplicar o que ' +
          'você já enxerga.',
      },
    ],

    misread:
      'Tipam você como INFP ou ISFP, sempre. Leem você como passivo, sem ambição ou sem opiniões ' +
      'fortes — e essa última é o oposto exato da verdade: você tem vereditos completos sobre ' +
      'quase tudo, apenas nunca os emitiu. Amigos presumem que você concorda com eles. Chefes ' +
      'presumem que você está satisfeito. Parceiros descobrem, geralmente tarde, que havia uma ' +
      'avaliação inteira rodando o tempo todo. E você mesmo se lê como alguém que foi mal tipado, ' +
      'o que é o mal-entendido mais caro dos cinco, porque atrasa qualquer uso do que você tem.',

    versus:
      'A confusão é com o fleumático–sanguíneo, o espelho, e a diferença está em qual metade ' +
      'define o estado de repouso. Lá a calma lidera e o calor é uma cor por cima: aquele INTJ ' +
      'não acende, ele acompanha, e a sua marca é a estabilidade agradável e constante. Aqui o ' +
      'calor lidera e a calma é o que dissolve o impulso: você acende com facilidade e não ' +
      'sustenta. O teste: quando um assunto te interessa, o que acontece nas primeiras horas? ' +
      'Se há um pico real de energia que depois se dissipa sem deixar obra, o sanguíneo lidera. ' +
      'Se nunca houve pico — apenas um interesse morno e constante que também não vira obra —, ' +
      'quem lidera é o fleumático.',

    sources: [...COMMON, 'galen-c170', 'hippocrates-c400bc', 'keirsey-1998', 'grant-1983'],
  },
};

export const DEEP_PHLEGMATIC_MELANCHOLIC_PT = TEMPERAMENTS_DEEP_B_PT['phlegmatic-melancholic'];
export const DEEP_PHLEGMATIC_CHOLERIC_PT = TEMPERAMENTS_DEEP_B_PT['phlegmatic-choleric'];
export const DEEP_PHLEGMATIC_SANGUINE_PT = TEMPERAMENTS_DEEP_B_PT['phlegmatic-sanguine'];
export const DEEP_SANGUINE_MELANCHOLIC_PT = TEMPERAMENTS_DEEP_B_PT['sanguine-melancholic'];
export const DEEP_SANGUINE_CHOLERIC_PT = TEMPERAMENTS_DEEP_B_PT['sanguine-choleric'];
export const DEEP_SANGUINE_PHLEGMATIC_PT = TEMPERAMENTS_DEEP_B_PT['sanguine-phlegmatic'];
