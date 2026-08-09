/**
 * Análise longa das seis primeiras combinações de temperamento — as de base
 * melancólica e as de base colérica —, exibida no lugar da visão geral quando
 * o leitor diz qual delas é a sua.
 *
 * Vocabulário pré-científico de LaHaye (1984) sobre uma pilha Ni · Te · Fi · Se.
 * O que muda de uma combinação para outra não é o motor: é a velocidade com que
 * ele decide, o que sai da cabeça depois de decidido e o que sobra para Fi.
 */

import type { VariantDeep } from '../../types';
import type { SourceId } from '../../sources';

/* -------------------------------------------------------------------------- */
/* Melancólico–colérico                                                        */
/* -------------------------------------------------------------------------- */

export const DEEP_MELANCHOLIC_CHOLERIC_PT: VariantDeep = {
  lede:
    'Você não hesita — você <em>retém</em>. A conclusão de Ni costuma chegar na primeira semana, ' +
    'inteira e quase sempre correta; o que leva seis meses não é descobrir o que fazer, é ' +
    'conceder a si mesmo a licença para fazer. O melancólico guarda a chave, o colérico espera ' +
    'com o motor ligado do lado de fora, e quando a chave enfim gira tudo acontece de uma vez. ' +
    'De fora, você passou meio ano parado e depois <strong>enlouqueceu num sábado</strong>.',

  sections: [
    {
      eyebrow: 'Velocidade de decisão',
      title: 'A conclusão chega cedo; a licença chega tarde',
      paragraphs: [
        'Vale separar duas coisas que, vistas de fora, parecem uma só. Ni não demora: ele converge ' +
          'rápido, com pouca informação, e entrega a leitura do desfecho quase completa logo no ' +
          'começo. O que demora é a homologação. O melancólico não põe em dúvida <em>o que</em> ' +
          'você viu — põe em dúvida se aquilo já está bom o bastante para existir fora da sua ' +
          'cabeça. Os seis meses seguintes não são deliberação; são a construção de um dossiê ' +
          'para um veredicto que já foi dado.',
        'Por isso a curva de esforço é assimétrica de um jeito que confunde qualquer equipe. ' +
          'Durante a fase longa você parece improdutivo e é o contrário disso; durante a fase ' +
          'curta você parece impulsivo e também é o contrário disso. O colérico secundário não ' +
          'decide nada — ele só executa, com latência quase zero, uma decisão que já estava ' +
          'assinada. É o INTJ que lê, desenha e descarta durante meses e entrega em oito horas o ' +
          'que os outros levariam semanas para começar.',
        'A consequência prática é que você tem dois modos e nenhum intermediário. Não existe, ' +
          'nesta combinação, o meio-termo de tocar uma coisa devagar todos os dias. Ou está em ' +
          'preparo, e nada sai; ou está em disparo, e nada entra — nem revisão, nem sugestão, nem ' +
          'a informação nova que teria mudado o desenho.',
      ],
      points: [
        'Ni converge cedo — em geral antes de você admitir para si mesmo que convergiu.',
        'O melancólico retém: nada é dito enquanto a solução não estiver íntegra por dentro.',
        'O colérico dispara com latência quase zero, porque a deliberação inteira já aconteceu.',
        'E não há terceiro tempo: nenhuma das duas metades sabe reabrir o que a outra fechou.',
      ],
    },
    {
      eyebrow: 'Como a decisão é comunicada',
      title: 'Coisa pronta não se coautora',
      paragraphs: [
        'Na fase de retenção não sai nada. Não é segredo nem estratégia: é que pedir opinião sobre ' +
          'algo inacabado exigiria mostrar a régua antes de tê-la cumprido, e o melancólico não ' +
          'faz isso. Você trabalha sem testemunha, e depois apresenta. O que chega à mesa dos ' +
          'outros é um objeto fechado, bem argumentado e sem juntas visíveis — e objetos assim só ' +
          'admitem duas respostas: aprovação ou rejeição.',
        'Daí o mal-entendido mais caro desta combinação. Alguém propõe um ajuste pequeno na ' +
          'terceira reunião e você ouve “recomece”. Não é orgulho; é que Te empacotou tudo num ' +
          'bloco só, e um bloco não tem onde ser editado. Quem trabalha com você aprende rápido ' +
          'que sugestões chegam tarde demais para serem úteis, e para de oferecê-las — o que ' +
          'remove exatamente a correção externa que teria encurtado a fase longa.',
        'Existe uma versão doméstica disso, e ela dói mais. Você decide mudar de emprego, de ' +
          'cidade ou de vida durante meses de silêncio produtivo, e comunica quando o plano já ' +
          'está inteiro. Quem convive não foi excluído por desprezo — foi excluído porque, para ' +
          'você, envolver alguém antes da homologação seria pedir que outra pessoa carregue uma ' +
          'coisa que ainda não está de pé.',
      ],
    },
    {
      eyebrow: 'O que faz com Fi terciário',
      title: 'Quando a régua vira moral',
      paragraphs: [
        'Fi é intenso e mal articulado nesta posição — e a própria orientação introvertida da ' +
          'terceira função é convenção do esquema de Grant, não consenso. O que o melancólico faz ' +
          'é entregar a Fi um objeto que Fi não sabe manusear: um padrão técnico. Fi trata padrão ' +
          'como valor. A partir daí, descumprir uma estimativa deixa de ser erro de cálculo e ' +
          'vira defeito de caráter — não “o prazo estava errado”, e sim “eu sou desleixado”.',
        'E o colérico aponta primeiro para dentro. A dureza de que os outros o acusam roda há anos ' +
          'contra você, em volume mais alto e sem nenhuma das atenuantes que você concede a ' +
          'terceiros. A cena típica: você entrega algo bom, todo mundo aprova, e você passa a ' +
          'noite catalogando os quatro defeitos que ninguém viu — com a precisão que Te reserva ' +
          'para auditorias, aplicada a si mesmo.',
        'O efeito colateral sobre os outros é que você estende a eles um código que eles nunca ' +
          'assinaram. Como a régua tem estatuto moral, quem a descumpre não parece apenas menos ' +
          'competente: parece menos íntegro. Fi arquiva a avaliação inteira, em silêncio, e a ' +
          'pessoa nunca é informada de que foi julgada.',
      ],
    },
    {
      eyebrow: 'Sob pressão',
      title: 'Aperte esta combinação e a régua sobe',
      paragraphs: [
        'A resposta desta combinação à pressão é contraintuitiva e vale conhecer com antecedência: ' +
          'antecipar o prazo não acelera você, aumenta o escopo. Entregar algo imperfeito sob ' +
          'observação é pior, para o melancólico, do que entregar tarde — então a régua sobe ' +
          'exatamente quando deveria descer. Quem cobra pensa estar apressando o INTJ e está ' +
          'financiando mais uma rodada de preparo.',
        'Ao mesmo tempo, o colérico precisa gastar carga em algum lugar. Sem permissão para ' +
          'atacar o mundo, ele ataca o plano: reorganiza o documento, reescreve a arquitetura, ' +
          'refaz a estrutura de pastas. É movimento intenso, cansativo e verificável — e é ' +
          'indistinguível de execução, inclusive para você. Muitos meses perdidos desta ' +
          'combinação foram perdidos assim, com sensação de trabalho duro o tempo todo.',
      ],
    },
    {
      eyebrow: 'O que o vocabulário sustenta',
      title: 'Uma linha contínua, não duas caixas empilhadas',
      paragraphs: [
        'O arranjo “melancólico com secundário colérico” é de LaHaye, 1984, publicado no mesmo ' +
          'circuito editorial em que Littauer havia popularizado os quatro tipos no ano anterior. ' +
          'Não vem de Galeno: as misturas de Galeno são nove, ao longo dos eixos quente/frio e ' +
          'seco/úmido, e não têm dominante nem secundário. O par que organiza esta página tem ' +
          'quatro décadas.',
        'O que existe de medido por perto é outra coisa, e é mais modesta. Rothbart descreve ' +
          'temperamento como diferenças precoces em reatividade e autorregulação — dimensões ' +
          'contínuas, observáveis desde os primeiros meses —, e Kagan acompanhou por anos ' +
          'crianças inibidas e desinibidas medidas por reatividade. Nessa linguagem, o retrato ' +
          'acima seria algo como afetividade negativa alta somada a controle voluntário alto: ' +
          'dois valores num contínuo, não uma caixa com encaixe. Nada disso foi medido em você, e ' +
          'nada disso é específico do INTJ — o que é específico do INTJ é o que a combinação faz ' +
          'com um motor Ni–Te, e isso é leitura, não medição.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Taxa de acerto',
      text:
        'Quando você finalmente se move, costuma estar certo, porque o custo do erro foi pago ' +
        'adiantado e em privado. Poucas pessoas conseguem sustentar esse pagamento antecipado; ' +
        'você o sustenta sem que ninguém precise cobrar.',
    },
    {
      title: 'Trabalho sem testemunha',
      text:
        'Você produz durante meses sem reforço externo, sem plateia e sem sinal de progresso ' +
        'visível. É uma capacidade rara e é o motivo de esta combinação conseguir terminar coisas ' +
        'longas que morrem na mão de quase todo mundo.',
    },
    {
      title: 'Execução barata',
      text:
        'Depois da homologação, executar quase não custa: não há dúvida a administrar, não há ' +
        'negociação interna, não há releitura. O colérico secundário converte plano em ato com ' +
        'uma eficiência que assusta quem só viu a fase silenciosa.',
    },
    {
      title: 'Fundações que aguentam',
      text:
        'Você se recusa a assentar a base duas vezes, e por isso a base aguenta. Em arquitetura, ' +
        'pesquisa ou qualquer coisa em que o erro estrutural só apareça em três anos, esta é ' +
        'exatamente a combinação que se quer ter feito o desenho.',
    },
  ],

  traps: [
    {
      title: 'Homologação que nunca chega',
      text:
        'A régua é calibrada por Ni, sem contato com o mundo, e por isso pode subir mais rápido do ' +
        'que o trabalho sobe. Quando isso acontece, a fase longa não termina — ela vira o projeto ' +
        'inteiro, e a versão 1 nunca existe.',
    },
    {
      title: 'Lealdade ao custo afundado',
      text:
        'Seis meses investidos transformam mudança de rota em traição ao próprio julgamento. Você ' +
        'defende o desenho não porque continua sendo o melhor, mas porque abandoná-lo seria ' +
        'admitir que o melancólico falhou na única coisa que ele acha que sabe fazer.',
    },
    {
      title: 'Erro como dívida moral',
      text:
        'Fi terciário converte padrão em valor, e falha em culpa. O problema não é o rigor: é que ' +
        'a culpa não gera correção, gera mais preparo — e mais preparo é justamente o que já não ' +
        'estava faltando.',
    },
    {
      title: 'Trabalho invisível',
      text:
        'Ninguém consegue ajudar você, porque ninguém sabe o que você está fazendo. Você chama ' +
        'isso de autonomia; na prática é a supressão do único mecanismo capaz de encurtar a fase ' +
        'longa, que é alguém de fora dizendo cedo que já está bom.',
    },
    {
      title: 'Sugestão lida como ataque',
      text:
        'O que chega pronto não tem onde ser editado, então qualquer emenda parece pedido de ' +
        'recomeço. Com o tempo, as pessoas param de emendar — e você conclui, erradamente, que ' +
        'ninguém tinha nada a acrescentar.',
    },
  ],

  stress:
    'Esta combinação não desaba parando. Ela desaba <strong>acelerando o preparo</strong>: mais ' +
    'leitura, mais reescrita, mais uma versão da estrutura, com a sensação honesta de estar ' +
    'trabalhando muito. Em seguida o colérico vira-se inteiro para dentro e assume a voz que Te ' +
    'usa em auditoria — frio, específico, com datas e exemplos, montando o caso contra você com ' +
    'a mesma competência com que montaria contra um fornecedor. E então vem a parte que é ' +
    'característica daqui: a purga. Numa noite qualquer você apaga o repositório, cancela o ' +
    'plano, joga fora os seis meses e chama isso de clareza. É Se inferior fazendo o que faz — um ' +
    'ato sensorial, imediato e irreversível — com um argumento melancólico impecável por cima. ' +
    'Os dias seguintes são planos, silenciosos, e sem nenhum alívio proporcional ao tamanho do ' +
    'que foi destruído.',

  growth: [
    {
      title: 'Homologue com data, não com sensação',
      text:
        'Marque no começo o dia em que o que existir será entregue, e trate essa data como Te ' +
        'trata um contrato de terceiros: inegociável. A régua não some — ela passa a operar dentro ' +
        'de uma janela em vez de definir a janela.',
    },
    {
      title: 'Publique uma versão feia de propósito',
      text:
        'Uma entrega deliberadamente inacabada por projeto, escolhida antes de começar. Serve para ' +
        'quebrar a regra de que só sai o que está pronto — e para você descobrir, empiricamente, ' +
        'que o mundo reage ao rascunho com informação, não com desprezo.',
    },
    {
      title: 'Escreva a régua como especificação',
      text:
        'Padrão escrito em linguagem de engenharia — critérios, limites, casos de teste — deixa de ' +
        'ser um sentimento e vira uma medida. Falhar numa medida é um dado. Falhar num sentimento ' +
        'é um veredicto, e Fi executa veredictos sem apelação.',
    },
    {
      title: 'Dê o plano a uma pessoa no meio do voo',
      text:
        'Uma só, escolhida pela competência e não pela intimidade, com acesso à fase longa e ' +
        'mandato para dizer “já está bom”. É o contrapeso externo que a combinação não produz ' +
        'sozinha, e é barato: uma conversa por mês resolve.',
    },
    {
      title: 'Treine reabrir coisas pequenas',
      text:
        'Reverta de propósito decisões de baixo custo — uma ferramenta, uma rotina, um formato — ' +
        'só para manter viva a capacidade de reverter. Sem esse treino, quando chegar a decisão ' +
        'grande e errada, você não terá o gesto no repertório.',
    },
  ],

  misread:
    'Lido primeiro como indeciso e depois como impulsivo, sem que ninguém perceba que os dois ' +
    'são o mesmo movimento. Durante a fase longa você é o INTJ que “não se compromete”; no ' +
    'sábado da execução você é o que “decidiu do nada”. E como o que sai é sempre um objeto ' +
    'pronto e bem defendido, o rótulo final costuma ser arrogância — quando o que houve foi o ' +
    'contrário: uma exigência tão alta que só deixou passar a versão blindada.',

  versus:
    'A confusão é com o colérico–melancólico, que tem os mesmos dois humores na ordem inversa — ' +
    'e a inversão é a pessoa inteira. Lá, Te fecha a decisão cedo e a profundidade melancólica é ' +
    'convocada depois, para fundamentar e blindar o que já foi feito; aqui, a profundidade vem ' +
    'antes e a decisão é o ato final. O teste é curto: pergunte a que serve a sua análise. Se ela ' +
    'existe para lhe dar permissão, você é melancólico–colérico. Se ela existe para defender uma ' +
    'decisão que você já anunciou, é o outro.',

  sources: [
    'lahaye-1984',
    'littauer-1983',
    'galen-c170',
    'rothbart-2011',
    'kagan-1994',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* Melancólico–fleumático                                                      */
/* -------------------------------------------------------------------------- */

export const DEEP_MELANCHOLIC_PHLEGMATIC_PT: VariantDeep = {
  lede:
    'A decisão existe. Ela foi tomada, é boa, e está guardada. Nesta combinação Ni trabalha com ' +
    'toda a profundidade de sempre e <em>nada</em> no sistema exige que o resultado saia: o ' +
    'melancólico eleva a régua, o fleumático remove a urgência, e a soma é um INTJ que sabe cedo ' +
    'e demais, e que quase nunca converte o que sabe em coisa que exista no mundo. É a ' +
    'combinação mais agradável de conviver das doze — e a que <strong>mais custa caro ao próprio ' +
    'dono</strong>.',

  sections: [
    {
      eyebrow: 'Velocidade de decisão',
      title: 'Rápido para concluir, sem prazo para agir',
      paragraphs: [
        'A confusão comum é achar que esta combinação pensa devagar. Não pensa: Ni entrega a ' +
          'leitura no ritmo de sempre, e você costuma saber como uma reunião, um projeto ou um ' +
          'relacionamento vai terminar antes de qualquer outra pessoa na sala. O que falta é a ' +
          'etapa seguinte. Nas outras combinações há alguma coisa empurrando — a pressa do ' +
          'colérico, o apetite do sanguíneo, a vergonha de ficar para trás. Aqui não há nada. ' +
          'A conclusão fica onde nasceu.',
        'O melancólico contribui com a única força que o sistema tem, e ela aponta na direção ' +
          'errada: exige mais qualidade, nunca mais velocidade. O fleumático, por sua vez, ' +
          'absorve o desconforto de adiar. Numa combinação com colérico, o adiamento incomoda o ' +
          'suficiente para gerar movimento; aqui o adiamento é indolor, e por isso pode durar ' +
          'anos sem produzir um único sinal de alarme.',
        'O efeito prático é que a sua vida se organiza por prazos externos. Onde existe alguém ' +
          'pedindo, você entrega com um rigor que impressiona. Onde não existe, o trabalho fica ' +
          'pronto e não sai da gaveta — e a diferença entre as duas situações não tem nada a ver ' +
          'com o quanto o assunto importa para você.',
      ],
      points: [
        'A conclusão de Ni chega no tempo normal do tipo; o que não chega é a obrigação de agir.',
        'O melancólico pede mais qualidade — nunca mais velocidade.',
        'O fleumático absorve o desconforto do adiamento antes que ele vire combustível.',
        'Resultado: desempenho excelente sob prazo alheio, quase nulo sob prazo próprio.',
      ],
    },
    {
      eyebrow: 'Como a decisão é comunicada',
      title: 'A objeção que você nunca fez',
      paragraphs: [
        'Te é a função que transformaria a leitura de Ni em critério dito em voz alta, e nesta ' +
          'combinação ela quase não recebe corrente. O julgamento continua inteiro por dentro, ' +
          'severo e detalhado; o que não existe é o impulso de publicá-lo. Você vê o plano ruim, ' +
          'localiza o ponto exato onde ele quebra, calcula o custo — e não diz, porque dizer ' +
          'abriria um confronto e o confronto custa mais do que assistir.',
        'A consequência é específica e você provavelmente já a viveu várias vezes: sua ausência de ' +
          'objeção é registrada como concordância. Meses depois, quando o plano quebra no ponto ' +
          'previsto, você fica com uma parte da responsabilidade por um erro que enxergou ' +
          'primeiro e não impediu — e com um ressentimento que não tem endereço, porque ninguém ' +
          'lhe pediu silêncio.',
        'A versão longa disso é a carreira. Esta é a combinação que assiste a pessoas menos ' +
          'capazes ocuparem posições que exigiriam exatamente o que você tem, sem nunca ter ' +
          'reivindicado nada, e que descreve isso para si mesma como falta de vaidade. Em parte ' +
          'é. Em parte é Te desligado.',
      ],
    },
    {
      eyebrow: 'O que faz com Fi terciário',
      title: 'A conta que é fechada sem ser apresentada',
      paragraphs: [
        'O fleumático não reduz o que Fi registra — reduz apenas a chance de que aquilo seja dito. ' +
          'Todas as ofensas são arquivadas inteiras, com data, com a frase exata; é o melancólico ' +
          'quem garante a fidelidade do arquivo. Só que nada nunca chega à superfície na hora em ' +
          'que aconteceu, e Fi terciário — intenso, mal articulado, na posição que Grant supôs ' +
          'introvertida sem que Myers tivesse fechado a questão — não sabe emitir aviso.',
        'Por isso o rompimento, quando vem, é silencioso e total. Não há briga, não há explicação, ' +
          'não há segunda chance. A pessoa simplesmente descobre que passou a receber respostas ' +
          'curtas e que os convites pararam. Do seu lado, houve um processo longo, documentado e ' +
          'justo; do lado dela, houve um sumiço. As duas leituras são sinceras e nenhuma consegue ' +
          'alcançar a outra.',
        'Há um custo interno que se soma a isso. Como a raiva nunca é gasta, ela não se dissipa — ' +
          'ela sedimenta. O melancólico revisita o arquivo periodicamente, e cada revisita ' +
          'reforça a conclusão. É assim que esta combinação chega aos quarenta com uma lista ' +
          'precisa de pessoas que nunca souberam que foram julgadas e nunca tiveram como recorrer.',
      ],
    },
    {
      eyebrow: 'Sob carga',
      title: 'A crise que não parece uma crise',
      paragraphs: [
        'Nas combinações quentes, sobrecarga produz ruído: gente atropelada, prazos rompidos, ' +
          'decisões tomadas em cima da hora. Aqui não produz nada visível. A carga entra e o ' +
          'sistema simplesmente desacelera mais, com o mesmo tom de voz, a mesma cortesia e a ' +
          'mesma aparência de equilíbrio. Ninguém em volta recebe sinal, porque não há nada ' +
          'projetado para emitir sinal.',
        'O que muda é o horizonte. O prazo escorrega mais um mês, depois mais dois; a régua sobe ' +
          'como sempre sobe; a correspondência fica sem resposta e o assunto vira aquilo que você ' +
          'evita abrir. Quando alguém finalmente pergunta se está tudo bem, a resposta honesta é ' +
          'que sim — o estado interno é mesmo estável. O que não está bem é a trajetória, e ' +
          'trajetória não se sente, só se mede.',
      ],
    },
    {
      eyebrow: 'O que o vocabulário sustenta',
      title: 'Calma medida é reatividade baixa, não virtude',
      paragraphs: [
        'Kagan passou anos acompanhando crianças inibidas e desinibidas, medidas por reatividade ' +
          'motora e emocional, e o que ele descreve — algumas pessoas se ativam pouco e voltam ' +
          'rápido ao repouso — é o grão real por baixo da palavra “fleumático”. Rothbart formaliza ' +
          'a mesma ideia como reatividade e autorregulação, dimensões contínuas e precoces. Nada ' +
          'nisso diz que a baixa reatividade seja maturidade, sabedoria ou domínio de si. É um ' +
          'ponto num contínuo, e ele tem custo tanto quanto tem benefício.',
        'Vale reter isso justamente aqui, porque esta é a combinação em que a confusão é mais ' +
          'sedutora. O elogio que você mais recebe — “você é muito tranquilo” — descreve um ' +
          'parâmetro de ativação, não uma conquista moral. E o par “melancólico com secundário ' +
          'fleumático” continua sendo o arranjo de LaHaye, de 1984, sem medida por trás.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Julgamento sem contaminação emocional',
      text:
        'Você avalia sob provocação, prazo e grosseria sem que o estado interno se altere, o que ' +
        'torna a sua leitura de uma situação difícil mais confiável do que a de quase todo mundo ' +
        'na sala. É a razão pela qual as pessoas o procuram antes de decidir.',
    },
    {
      title: 'Profundidade que se acumula',
      text:
        'Ni roda por anos sem interrupção e sem crise, e o melancólico garante que o que entra ' +
        'seja bom. Poucos INTJs conseguem sustentar um mesmo assunto por uma década; esta ' +
        'combinação consegue, e o que ela sabe no fim é genuinamente raro.',
    },
    {
      title: 'Presença fácil',
      text:
        'É o mais agradável dos doze de conviver. O julgamento severo permanece inteiro por dentro ' +
        'e quase nunca é despejado, e isso lhe dá acesso a pessoas e a informações que um INTJ ' +
        'colérico perde no primeiro mês.',
    },
    {
      title: 'Rigor constante',
      text:
        'Quando existe prazo externo, a entrega tem qualidade uniforme e não depende de humor, ' +
        'entusiasmo ou pressão. Você é o profissional que não tem semana ruim — e isso, ao longo ' +
        'de anos, vale mais do que picos.',
    },
  ],

  traps: [
    {
      title: 'Silêncio lido como aval',
      text:
        'Você não faz a objeção e ela é registrada como concordância. Depois carrega parte da ' +
        'culpa por um desastre que previu — e o ressentimento fica sem destinatário, porque ' +
        'ninguém pediu que você calasse.',
    },
    {
      title: 'Tolerância confundida com paciência',
      text:
        'Situações ruins duram porque encerrá-las exigiria confronto e o confronto custa mais do ' +
        'que a situação. Você aceita condições que um INTJ colérico teria rompido no primeiro mês, ' +
        'e chama isso de temperança.',
    },
    {
      title: 'A gaveta',
      text:
        'A análise está pronta, é boa, e não é publicada: falta um pouco de acabamento e não falta ' +
        'nenhuma obrigação. Somam-se anos assim, e o material envelhece dentro da gaveta até ' +
        'perder o valor que tinha.',
    },
    {
      title: 'Arquivo sem aviso prévio',
      text:
        'Fi registra tudo, o fleumático impede a emissão, e o corte final chega sem nenhum degrau ' +
        'anterior. Você foi justo no processo inteiro; a outra pessoa nunca teve como se defender ' +
        'de um processo que não sabia estar correndo.',
    },
  ],

  stress:
    'Não há explosão, não há grito e não há aviso — e é precisamente isso que torna o colapso ' +
    'desta combinação difícil de socorrer. O que acontece é uma <strong>redução silenciosa de ' +
    'amplitude</strong>: menos correspondência, menos saídas, menos assuntos, tudo mantendo o ' +
    'tom cortês de sempre. O melancólico continua trabalhando e passa a produzir a única coisa ' +
    'que consegue produzir sem Te: análise sobre si mesmo, cada vez mais detalhada e cada vez ' +
    'menos acionável. É o que a comunidade tipológica chama de loop Ni–Fi, vocabulário informal ' +
    'e não conceito oficial do MBTI, mas que descreve bem a máquina rodando fechada. O sinal ' +
    'externo, quando enfim aparece, costuma ser físico — sono desregulado, apatia, o corpo ' +
    'cobrando por Se inferior aquilo que nenhuma outra função sinalizou. Se você depende de ' +
    'sentir para saber que está mal, esta combinação não vai lhe avisar: monitore por medida — ' +
    'o que você entregou, com quem falou, quanto dormiu — e não por sensação.',

  growth: [
    {
      title: 'Importe prazo de fora',
      text:
        'Compromisso público, cliente, editor, prazo de submissão, alguém esperando numa data. ' +
        'Não é falta de disciplina: é que a sua combinação não fabrica urgência internamente, e ' +
        'insistir em fabricá-la é lutar contra o parâmetro em vez de contorná-lo.',
    },
    {
      title: 'Diga a objeção pequena',
      text:
        'Treine dizer discordâncias de baixo risco — a estimativa, o formato, a ferramenta — só ' +
        'para instalar o canal. Sem tráfego pequeno, o canal não existe quando chegar a ' +
        'discordância grande, e ela vai sair como ruptura em vez de conversa.',
    },
    {
      title: 'Apresente a conta antes de fechá-la',
      text:
        'Quando uma linha de Fi for cruzada, diga na primeira vez, mesmo mal formulado. Nomear o ' +
        'que se sente reduz a carga e transforma um arquivo em assunto — e dá à outra pessoa a ' +
        'única coisa que você nunca concede: a chance de corrigir.',
    },
    {
      title: 'Publique inacabado, com data',
      text:
        'Escolha uma data e entregue o que existir nela. Não para baixar a régua, mas para que a ' +
        'régua pare de ser a dona do calendário. O que você chama de “ainda não está bom” é, na ' +
        'maioria das vezes, melhor do que o que foi publicado por outra pessoa no mesmo assunto.',
    },
    {
      title: 'Meça a trajetória, não o estado',
      text:
        'Como o estado interno permanece estável mesmo quando a vida está indo mal, ele é um ' +
        'péssimo instrumento. Registre indicadores externos e revise-os a cada trimestre: é a ' +
        'única forma de esta combinação perceber uma década antes do fim dela.',
    },
  ],

  misread:
    'Lido como sábio, generoso e sem ambição — três leituras erradas ao mesmo tempo. A calma não ' +
    'é sabedoria conquistada, é reatividade baixa; a gentileza não é ausência de julgamento, é ' +
    'ausência de emissão; e a suposta falta de ambição convive com um padrão interno mais alto ' +
    'do que o de qualquer colérico da sala. Quem convive muito tempo costuma cometer o erro mais ' +
    'caro dos três: supor que, como você nunca reclama, nada está sendo contado.',

  versus:
    'A confusão é com o fleumático–melancólico, e a diferença é sutil e decisiva. Lá o padrão é ' +
    'alto e não dói: o fleumático absorve a frustração antes que ela vire combustível, e a vida ' +
    'inteira de preparo transcorre em paz. Aqui o padrão comanda e dói — há sofrimento genuíno na ' +
    'obra não terminada, autocrítica ativa, uma insatisfação que nunca vira ação mas também nunca ' +
    'silencia. Se você adia sem angústia, é o outro. Se você adia e se cobra todo dia por adiar, ' +
    'é este.',

  sources: [
    'lahaye-1984',
    'littauer-1983',
    'kagan-1994',
    'rothbart-2011',
    'grant-1983',
    'hippocrates-c400bc',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* Melancólico–sanguíneo                                                       */
/* -------------------------------------------------------------------------- */

export const DEEP_MELANCHOLIC_SANGUINE_PT: VariantDeep = {
  lede:
    'Você tem duas pessoas com o mesmo motor e agendas diferentes, e nenhuma delas mente. A base ' +
    'é o recolhimento melancólico — semanas de silêncio, régua alta, mundo interno denso. O ' +
    'sanguíneo secundário não desmonta isso: ele <em>abre janelas</em>, e as janelas se abrem por ' +
    'assunto, não por pessoa. O problema é que decisões tomadas com a janela aberta precisam ser ' +
    'cumpridas com a janela fechada, e é a <strong>versão fechada que paga a conta</strong>.',

  sections: [
    {
      eyebrow: 'Velocidade de decisão',
      title: 'Duas taxas de câmbio para a mesma moeda',
      paragraphs: [
        'Esta é a única das doze combinações em que a velocidade de decisão depende do estado em ' +
          'que você está no momento da pergunta. Com a janela aberta — alguém tocou no assunto ' +
          'certo, Ni acendeu, o sanguíneo está no comando — você decide rápido, com generosidade e ' +
          'em voz alta: aceita o convite, oferece ajuda, promete o capítulo, marca a viagem. Com a ' +
          'janela fechada, a mesma decisão levaria três semanas e provavelmente seria não.',
        'Não é falta de caráter, e a distinção importa. Ni converge igual nos dois estados; o que ' +
          'muda é quanto atrito existe entre a conclusão e a fala. O sanguíneo remove o atrito ' +
          'quase inteiro, e o melancólico, que normalmente faria a auditoria antes da promessa, ' +
          'chega atrasado — ele faz a auditoria depois, na segunda-feira, quando não há mais o que ' +
          'auditar além do compromisso já assumido.',
        'O padrão que se instala com os anos é reconhecível: um calendário construído por uma ' +
          'versão sua e executado por outra. E como o melancólico é implacável com dívida, você ' +
          'costuma cumprir tudo — com um ressentimento estranho, dirigido a você mesmo, por ter ' +
          'sido tão livre com o tempo de alguém que não estava presente para consentir.',
      ],
      points: [
        'Janela aberta: latência quase zero entre a conclusão de Ni e a promessa dita.',
        'Janela fechada: latência longa, régua alta e uma inclinação natural para o não.',
        'A auditoria melancólica não desaparece — apenas chega depois do compromisso.',
        'Você quase sempre cumpre. O custo aparece como cansaço, não como recusa.',
      ],
    },
    {
      eyebrow: 'Como a decisão é comunicada',
      title: 'Ou tudo, em três horas, ou nada por duas semanas',
      paragraphs: [
        'Comunicação nesta combinação não é um fluxo, é um evento. Quando abre, sai a análise ' +
          'inteira: o histórico, o mecanismo, as três objeções que você já respondeu sozinho, a ' +
          'previsão datada. É excelente, é generoso, e a pessoa do outro lado sai com a impressão ' +
          'de ter conhecido você. Depois vêm duas semanas em que uma pergunta simples fica sem ' +
          'resposta por seis dias.',
        'O que falta é o canal de manutenção — a mensagem curta, o retorno de uma linha, o sinal ' +
          'de que a relação continua existindo entre os eventos. Sem esse canal, as pessoas usam ' +
          'a janela aberta como linha de base e leem o silêncio seguinte como retirada ' +
          'deliberada. Praticamente ninguém acerta a leitura por conta própria, e explicar depois ' +
          'soa como desculpa.',
        'No trabalho isso vira uma reputação específica e injusta: brilhante e não confiável. As ' +
          'duas metades da frase vêm do mesmo mecanismo, e nenhuma equipe distingue “sem energia ' +
          'de emissão” de “sem interesse”.',
      ],
    },
    {
      eyebrow: 'O que faz com Fi terciário',
      title: 'A ressaca de ter se mostrado',
      paragraphs: [
        'Fi é a função que guarda o que é seu, e nesta posição ela é intensa e sem vocabulário — a ' +
          'orientação introvertida da terceira função é convenção de Grant, e não um ponto ' +
          'fechado. O sanguíneo faz Fi vazar em público, com prazer, e o melancólico depois audita ' +
          'o vazamento. É por isso que a euforia de uma conversa boa vira, na mesma noite, uma ' +
          'releitura linha a linha do que você disse a mais.',
        'A vergonha retroativa é o sintoma mais próprio desta combinação, e ela é desproporcional ' +
          'de forma quase cômica: você revisa uma frase inofensiva dita numa quarta-feira durante ' +
          'meses. O que Fi registra não é o erro social — é a exposição. Ter mostrado o interior ' +
          'a alguém que não passou pelo processo lento de aprovação parece, para Fi, uma cessão ' +
          'de território.',
        'O risco é o mecanismo de correção: para evitar a ressaca, você fecha a janela mais cedo ' +
          'da próxima vez. Repetido bastante, isso converte esta combinação num melancólico puro ' +
          'com boas lembranças — que é exatamente a perda que ela menos pode se permitir, porque ' +
          'a janela é a sua única via natural de vínculo.',
      ],
    },
    {
      eyebrow: 'Sob carga',
      title: 'A janela usada como fuga',
      paragraphs: [
        'Sob carga, o padrão saudável — recolhimento longo com aberturas genuínas — se distorce de ' +
          'duas maneiras opostas, e é útil saber qual é a sua. Na primeira, as janelas param ' +
          'simplesmente de abrir: o sanguíneo não tem material, e o INTJ que as pessoas conheciam ' +
          'desaparece por um trimestre sem que ninguém consiga dizer quando começou.',
        'Na segunda, mais perigosa, a janela vira o refúgio. Você abre para não ficar sozinho com ' +
          'o trabalho que está atrasado, e as três horas de conversa boa passam a ser a única ' +
          'parte do dia com tração. Como o conteúdo é sempre substancial, tem aparência de ' +
          'trabalho intelectual — e não é: é Se inferior encontrando um jeito respeitável de ' +
          'consumir o presente enquanto Ni deixa de convergir por falta de tédio.',
      ],
    },
    {
      eyebrow: 'O que o vocabulário sustenta',
      title: 'Oscilação não é um tipo, é uma linha',
      paragraphs: [
        'Wundt já havia reorganizado os quatro nomes antigos em dois eixos contínuos — intensidade ' +
          'da emoção e velocidade com que ela muda — e Eysenck e Eysenck usaram os mesmos quatro ' +
          'nomes como rótulos de quadrante sobre extroversão × neuroticismo, empréstimo mnemônico ' +
          'sobre dimensões medidas, não retorno dos humores. Nesse enquadramento, “melancólico com ' +
          'secundário sanguíneo” não é uma caixa: é alguém situado num ponto incômodo de duas ' +
          'linhas, com variação alta.',
        'A advertência específica desta combinação é clínica de bom senso, não de diagnóstico: ' +
          'oscilação de disponibilidade social é comum, tem muitas causas e não é, por si só, ' +
          'nada. Se a amplitude estiver aumentando, se as janelas vierem com pouco sono e decisões ' +
          'financeiras, ou se os fechamentos vierem com desesperança, isso deixou de ser assunto ' +
          'de tipologia — e nenhuma página sobre INTJ, esta inclusive, tem competência para dizer ' +
          'o que é.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Transmissão de alta densidade',
      text:
        'Na janela aberta, você entrega em três horas o que a maioria não entrega em um semestre: ' +
        'a estrutura inteira de um assunto, com as objeções já respondidas. É por isso que esta ' +
        'combinação ensina, orienta e escreve tão bem.',
    },
    {
      title: 'Calor verificável',
      text:
        'Diferente do INTJ que aprendeu simpatia como protocolo, o seu entusiasmo é real e as ' +
        'pessoas percebem. Isso lhe compra lealdade genuína de um número pequeno de pessoas — ' +
        'exatamente o formato de vínculo que o tipo sustenta bem.',
    },
    {
      title: 'Recolhimento produtivo',
      text:
        'As semanas de silêncio não são perdidas: é ali que Ni converge e que a régua melancólica ' +
        'trabalha. Você tem, de graça, o insumo que as combinações quentes precisam proteger no ' +
        'calendário com esforço.',
    },
    {
      title: 'Acesso ao próprio interior',
      text:
        'Poucos INTJs conseguem dizer em voz alta o que sentem; você consegue, ao menos em ' +
        'rajadas. Isso torna o trabalho sobre Fi terciário mais rápido nesta combinação do que em ' +
        'qualquer outra deste grupo.',
    },
  ],

  traps: [
    {
      title: 'Promessa feita por outra versão sua',
      text:
        'O compromisso é assumido na janela aberta e executado na fechada. Como o melancólico não ' +
        'aceita descumprir, você paga integralmente — e o custo aparece semanas depois, como ' +
        'exaustão sem causa aparente.',
    },
    {
      title: 'Reputação de inconstante',
      text:
        'A oscilação custa mais credibilidade do que qualquer um dos dois estados custaria sozinho. ' +
        'E é praticamente impossível de explicar sem parecer desculpa, porque a explicação honesta ' +
        '— “eu não tenho energia de emissão agora” — soa como desinteresse.',
    },
    {
      title: 'Vergonha retroativa',
      text:
        'Cada abertura é seguida por uma auditoria do que foi mostrado a mais. Repetida, ela ' +
        'ensina você a abrir menos — o que fecha justamente a via pela qual esta combinação forma ' +
        'vínculo e transmite o que sabe.',
    },
    {
      title: 'Conversa no lugar do trabalho',
      text:
        'Como a janela é substancial, é fácil confundi-la com produção. Um trimestre inteiro pode ' +
        'passar em conversas excelentes sobre um projeto que não avançou uma linha.',
    },
  ],

  stress:
    'O colapso aqui tem duas fases e a primeira engana. Primeiro vem uma abertura fora de hora: ' +
    'você fala demais, promete demais, procura pessoas que não procurava, e sente que finalmente ' +
    '“saiu da caverna”. É o sanguíneo puxado como analgésico, e por umas duas semanas funciona. ' +
    'Depois a janela fecha com estrondo e o melancólico recebe uma sala cheia de material novo ' +
    'para auditar — tudo que você disse, todas as promessas, todo o excesso. A auditoria é ' +
    'devastadora porque é <strong>tecnicamente competente</strong>: cada item da lista é ' +
    'verdadeiro, e o conjunto é uma mentira. O que se segue costuma ser um sumiço longo, com ' +
    'mensagens não respondidas e uma vergonha que cresce a cada dia de atraso, porque o custo de ' +
    'responder sobe junto com o tempo. Se você reconhecer esse ciclo, o ponto de intervenção não ' +
    'é a fase escura: é a semana de excesso, quando ainda parece que tudo está melhorando.',

  growth: [
    {
      title: 'Nunca prometa na janela',
      text:
        'Combine com você mesmo uma regra fixa: entusiasmo pode gerar interesse, nunca ' +
        'compromisso. “Quero fazer isso, te confirmo terça” preserva o calor e devolve a decisão ' +
        'à versão que vai executá-la.',
    },
    {
      title: 'Instale um canal mínimo',
      text:
        'Uma mensagem curta por semana para as três ou quatro pessoas que importam, mesmo sem ' +
        'assunto e mesmo sem vontade. É pouco e resolve quase todo o dano de reputação: o silêncio ' +
        'só é lido como abandono quando não há nenhum sinal entre os eventos.',
    },
    {
      title: 'Avise o formato, uma vez',
      text:
        'Diga cedo, e não durante uma crise, como você funciona: intensidade em blocos, silêncio ' +
        'entre eles, nada disso é sobre a outra pessoa. Dito antes, é um manual; dito depois de um ' +
        'sumiço de três semanas, é defesa.',
    },
    {
      title: 'Corte a auditoria pela metade',
      text:
        'Quando a releitura começar, escreva as duas coisas que você faria diferente e encerre. ' +
        'O restante da lista não produz correção, produz encolhimento — e o encolhimento tem custo ' +
        'maior do que qualquer frase que você tenha dito a mais.',
    },
    {
      title: 'Aceite trabalho em blocos',
      text:
        'Aulas, mentorias, palestras, escrita por temporada: formatos que pagam pela intensidade ' +
        'e não pela uniformidade. Tentar sustentar disponibilidade constante é competir na única ' +
        'métrica em que esta combinação nunca vai ganhar.',
    },
  ],

  misread:
    'Lido como falso. Quem só viu a janela aberta acha que a pessoa calorosa era o verdadeiro ' +
    'você e que o silêncio é jogo; quem só viu o silêncio acha que o entusiasmo era ' +
    'performance. Os dois estão errados e nenhum dos dois vai acreditar em você. Uma leitura ' +
    'secundária, comum no trabalho: brilhante e não confiável — dita por pessoas que gostam de ' +
    'você e que não conseguem depender de você.',

  versus:
    'A confusão é com o sanguíneo–melancólico, que tem os mesmos humores na ordem inversa. Lá o ' +
    'estado normal é o entusiasmo e o melancólico entra como auditor que interrompe: o padrão é ' +
    'começar, ver o abismo entre o imaginado e o possível, e parar — o que se acumula são ' +
    'inícios. Aqui o estado normal é o recolhimento e o sanguíneo é a exceção que abre: o que se ' +
    'acumula não são inícios abandonados, e sim compromissos assumidos numa janela e pagos no ' +
    'escuro. Pergunte o que sobra de você depois de um ano: pastas de projetos começados, ou uma ' +
    'agenda que você não reconhece?',

  sources: [
    'lahaye-1984',
    'littauer-1983',
    'wundt-1874',
    'eysenck-eysenck-1985',
    'rothbart-2011',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* Colérico–melancólico                                                        */
/* -------------------------------------------------------------------------- */

export const DEEP_CHOLERIC_MELANCHOLIC_PT: VariantDeep = {
  lede:
    'A decisão sai antes de Ni ter terminado, e o resto da sua vida mental é gasto provando que ' +
    'ela estava certa. Com o colérico na frente, Te fecha cedo, com informação parcial e sem ' +
    'pedir licença; o melancólico secundário chega depois — não para corrigir, mas para ' +
    '<em>fundamentar, blindar e refinar</em> o que já foi anunciado. Por fora, um comandante ' +
    'impassível. Por dentro, um auditor que revisita a mesma derrota por anos e ' +
    '<strong>nunca a informa a ninguém</strong>.',

  sections: [
    {
      eyebrow: 'Velocidade de decisão',
      title: 'A análise entra depois, e entra como advogada',
      paragraphs: [
        'O motor é o mesmo dos outros onze arranjos, mas aqui a ordem inverte a função da ' +
          'profundidade. Ni entrega uma leitura preliminar, Te a converte em decisão imediatamente, ' +
          'e a decisão é publicada enquanto Ni ainda estaria convergindo. O que o melancólico ' +
          'secundário faz em seguida é trabalho técnico de primeira qualidade a serviço de uma ' +
          'conclusão que não está mais em disputa.',
        'Isso produz uma competência real e um ponto cego preciso. A competência: você decide em ' +
          'ambientes onde decidir mal é melhor do que não decidir, e a maior parte das suas ' +
          'decisões rápidas resiste, porque a leitura preliminar de Ni já é boa. O ponto cego: o ' +
          'secundário nunca é convocado para perguntar se a decisão estava certa, apenas para ' +
          'torná-la mais defensável. Quantidade enorme de análise, taxa de revisão próxima de zero.',
        'Quando a correção enfim acontece, ela não se parece com uma correção. Três meses depois, ' +
          'a nova posição aparece já pronta, com fundamentação nova, sem nenhuma menção à ' +
          'anterior. Você não mentiu — Ni simplesmente reconvergiu e Te republicou. Quem trabalha ' +
          'com você registra outra coisa: que a sua posição muda sem que ninguém seja avisado de ' +
          'que mudou.',
      ],
      points: [
        'Te fecha a decisão antes de Ni terminar — a informação é parcial por desenho.',
        'O melancólico secundário chega como advogado de defesa, não como revisor.',
        'A taxa de revisão explícita é quase nula; a revisão real acontece em silêncio, meses depois.',
        'Fi arquiva o custo com precisão — e não emite fatura a ninguém, nem a você.',
      ],
    },
    {
      eyebrow: 'Como a decisão é comunicada',
      title: 'O veredicto sai; o raciocínio não',
      paragraphs: [
        'Você comunica muito e explica pouco, e a diferença é a origem de quase todo o atrito que ' +
          'esta combinação produz. A decisão é dita com clareza, no tempo certo e sem ambiguidade ' +
          '— nisso você é melhor do que a maioria. O que não sai é o caminho: as premissas, a ' +
          'leitura de Ni que ninguém mais fez, os dois cenários que você já descartou. Para quem ' +
          'ouve, uma conclusão sem caminho é indistinguível de arbitrariedade.',
        'E quando o raciocínio finalmente aparece, ele aparece sob contestação — isto é, no pior ' +
          'formato possível. Já não é explicação, é defesa: montada pelo melancólico, tecnicamente ' +
          'superior à objeção, e por isso mesmo humilhante para quem objetou. As pessoas param de ' +
          'objetar, você conclui que há consenso, e o único mecanismo capaz de corrigir uma ' +
          'decisão rápida é desligado por vitórias sucessivas.',
        'Há um detalhe que quase ninguém enxerga de fora: você trata a fase de discussão como ' +
          'imposto porque, para Ni, ela é mesmo redundante — a conclusão já está lá. O erro não ' +
          'está na impaciência, está na suposição de que os outros estariam apenas repetindo o que ' +
          'você já viu. Às vezes estão. Nas vezes em que não estão, esta combinação paga caro.',
      ],
    },
    {
      eyebrow: 'O que faz com Fi terciário',
      title: 'O livro-razão privado',
      paragraphs: [
        'A imagem externa é de alguém que não se abala, e ela é honesta: o colérico realmente não ' +
          'sente muito na hora. O que acontece é diferido. O melancólico secundário mantém um ' +
          'registro fiel de cada derrota, cada crítica pública, cada pessoa que viu você errar — e ' +
          'entrega esse registro a Fi terciário, que não tem vocabulário para processá-lo e ' +
          'converte tudo em julgamento sobre quem você é.',
        'Daí a assimetria que define esta combinação: você perdoa a incompetência dos outros mais ' +
          'facilmente do que a sua, e mesmo assim é a dos outros que você comenta. A sua fica no ' +
          'livro. Uma decisão errada de 2018 continua sendo revisitada com data e detalhe, sem ' +
          'nenhuma função capaz de encerrar a revisão, porque encerrar exigiria dizer em voz alta ' +
          'que você errou — e dizer em voz alta é justamente o que o colérico não concede.',
        'Quando uma linha de Fi é cruzada por outra pessoa, o efeito é imediato e desproporcional. ' +
          'Diferente do fleumático, que arquiva sem reagir, aqui o corte vem com força, na hora e ' +
          'com argumento — e o melancólico depois passa meses provando que foi justo. A relação ' +
          'acabou no primeiro minuto; a fundamentação continua sendo escrita por um ano.',
      ],
    },
    {
      eyebrow: 'Sob carga',
      title: 'Dobrar a aposta em público, processar-se em privado',
      paragraphs: [
        'Pressão aumenta a velocidade, não a cautela. Quando o plano começa a falhar, a resposta ' +
          'desta combinação é decidir mais e mais rápido: reestruturar, substituir, encurtar ' +
          'prazos, assumir pessoalmente o que estava delegado. É frequentemente a resposta certa ' +
          'em crise real, e é quase sempre a errada quando o problema era de leitura e não de ' +
          'execução.',
        'Em paralelo, o melancólico abre um processo interno com todas as garantias formais e ' +
          'nenhuma possibilidade de absolvição. As duas coisas acontecem ao mesmo tempo e são ' +
          'invisíveis uma para a outra: por fora você está mais decidido do que nunca; por dentro ' +
          'está montando o caso que prova que você não deveria estar no comando. Essa distância ' +
          'entre as duas camadas é o que torna o esgotamento desta combinação tão súbito para ' +
          'quem convive.',
      ],
    },
    {
      eyebrow: 'O que o vocabulário sustenta',
      title: 'Dominante e secundário não vêm da Antiguidade',
      paragraphs: [
        'A ideia de um humor que comanda e outro que serve — que é exatamente o que dá sentido a ' +
          '“colérico–melancólico” — não existe em Galeno. As misturas de Galeno são nove, ' +
          'organizadas ao longo de quente/frio e seco/úmido, sem hierarquia entre elas. E o ' +
          'próprio texto hipocrático que originou tudo isso descrevia estados corporais ' +
          'passageiros, não caráter: alguém tinha bile em excesso numa estação e depois não tinha ' +
          'mais.',
        'O par dominante/secundário é de LaHaye, 1984. Nada nele foi validado, nada nele é medida, ' +
          'e a advertência de Pittenger sobre descrições genéricas vale aqui com força: um retrato ' +
          'de alguém que decide rápido e depois se cobra em privado descreve uma parcela ' +
          'considerável de qualquer população adulta ambiciosa. O que este texto acrescenta é ' +
          'específico do INTJ — a ordem Ni antes de Te, o arquivo de Fi terciário —, e isso é ' +
          'leitura de modelo, não achado.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Decisão sob incerteza',
      text:
        'Você fecha questões com informação parcial, o que é raro e caro. Em crise, reestruturação ' +
        'ou fundação, a sua leitura preliminar de Ni convertida em ordem imediata vale mais do que ' +
        'a análise completa de alguém que decide tarde.',
    },
    {
      title: 'Fundamentação de primeira',
      text:
        'O melancólico secundário produz argumento técnico superior ao da maioria das pessoas na ' +
        'mesa. Quando a sua decisão é boa, ela fica praticamente inatacável — e você a defende sem ' +
        'precisar de aliados.',
    },
    {
      title: 'Memória operacional longa',
      text:
        'Erros não se repetem nesta combinação. O arquivo é fiel e vira critério: você constrói, ' +
        'ao longo de uma década, um repertório de julgamento que quase ninguém acumula, porque ' +
        'quase ninguém revisita o próprio fracasso com essa fidelidade.',
    },
    {
      title: 'Responsabilidade assumida sem ser pedida',
      text:
        'Você toma o comando quando ninguém está tomando, e aguenta o peso sem transferir custo ' +
        'emocional para a equipe. Do lado de fora, isso é experimentado como segurança — e é uma ' +
        'das poucas coisas que fazem pessoas seguirem um INTJ.',
    },
  ],

  traps: [
    {
      title: 'Análise como advogada, nunca como juíza',
      text:
        'Toda a sua profundidade é gasta defendendo a decisão em vez de testá-la. O volume de ' +
        'trabalho intelectual é enorme e a taxa de correção é próxima de zero — e o volume o ' +
        'convence de que houve rigor.',
    },
    {
      title: 'Vencer a objeção e perder a informação',
      text:
        'Como você refuta melhor do que os outros objetam, as objeções param de chegar. O silêncio ' +
        'seguinte parece concordância e é apenas cansaço, e ele desliga a única correção externa ' +
        'que uma decisão rápida ainda poderia receber.',
    },
    {
      title: 'Revisão silenciosa',
      text:
        'Você muda de posição em privado e republica sem avisar. É honesto e é ilegível: quem ' +
        'depende de você aprende que as suas certezas têm validade indeterminada e para de ' +
        'planejar com base nelas.',
    },
    {
      title: 'A conta que nunca fecha',
      text:
        'Fi terciário recebe do melancólico um arquivo detalhado dos seus erros e não tem como ' +
        'processá-lo. O resultado é uma dívida interna permanente, invisível de fora, que nenhuma ' +
        'conquista externa amortiza.',
    },
    {
      title: 'Pessoas como variáveis',
      text:
        'Velocidade cobra o seu preço em vínculo: a fase de discussão vira imposto, quem pede ' +
        'contexto vira atraso, e você descobre a perda quando alguém competente sai sem aviso e ' +
        'sem que você tenha registrado um único sinal.',
    },
  ],

  stress:
    'Esta combinação não desmorona: ela <strong>endurece</strong>. Sob estresse prolongado, a ' +
    'velocidade aumenta, a tolerância desaparece e o INTJ passa a decidir sobre coisas que não ' +
    'precisavam ser decididas — reorganiza a equipe, corta o contrato, encerra a relação, ' +
    'reescreve o sistema — porque decidir é a única ação que baixa a tensão interna, ainda que ' +
    'por horas. Em paralelo, o melancólico monta um caso contra você com material verdadeiro, e ' +
    'a conclusão a que ele chega não é “errei nisto”, é “eu sou o erro”. As duas camadas não se ' +
    'falam, e é por isso que o colapso chega sem escalonamento visível: quem convive vê alguém ' +
    'em plena capacidade até a semana em que não vê mais. A saída de Se inferior costuma ser ' +
    'compatível com a imagem — treino excessivo, trabalho de dezesseis horas, álcool ' +
    'administrado com disciplina — e por ser respeitável, ninguém interrompe. O sinal mais ' +
    'confiável não é o cansaço: é a razão de decisões irreversíveis tomadas por semana subindo ' +
    'sem que nada externo tenha mudado.',

  growth: [
    {
      title: 'Publique a premissa junto com a ordem',
      text:
        'Três linhas antes da decisão: o que você viu, o que você supôs, o que faria você mudar de ' +
        'ideia. Custa dois minutos, transforma arbitrariedade em raciocínio auditável e mantém ' +
        'aberto o canal por onde a correção chega.',
    },
    {
      title: 'Nomeie o critério de falseamento',
      text:
        'No momento de decidir, escreva qual resultado provaria que você errou, e a data em que ' +
        'isso será verificado. É a única forma conhecida de impedir que o melancólico assuma o ' +
        'papel de advogado — ele passa a ter uma tarefa de juiz, marcada em calendário.',
    },
    {
      title: 'Anuncie a mudança de posição',
      text:
        'Quando reconverger, diga que reconvergiu: “eu decidi X, hoje decidiria Y, por isto”. ' +
        'Você perde menos autoridade do que teme e ganha a coisa que esta combinação não compra ' +
        'de nenhuma outra forma — previsibilidade.',
    },
    {
      title: 'Feche o livro-razão em voz alta',
      text:
        'Erros arquivados só param de ser revisitados quando saem da cabeça. Diga a uma pessoa, ou ' +
        'escreva com data e encerramento explícito. Enquanto o registro for exclusivamente ' +
        'interno, Fi terciário continuará lendo cada entrada como sentença sobre o seu caráter.',
    },
    {
      title: 'Peça objeção a quem não perde para você',
      text:
        'Escolha uma pessoa cuja competência você respeite e cujo cargo não dependa do seu, e ' +
        'peça a discordância explicitamente. Objeção espontânea já não chega até você: quem ' +
        'tentou, perdeu, e aprendeu.',
    },
  ],

  misread:
    'Lido como arrogante e sem dúvida nenhuma — o oposto exato do que acontece por dentro, onde a ' +
    'auditoria nunca para. Uma segunda leitura errada é a de frieza: como o custo é processado ' +
    'com atraso e em privado, as pessoas concluem que uma demissão, um corte ou uma derrota não ' +
    'lhe custaram nada, quando na verdade continuam sendo processados anos depois. E há a leitura ' +
    'que mais atrapalha na prática: a de que você não quer ser contrariado. Você quer — só não ' +
    'sabe perder um argumento sem ganhá-lo.',

  versus:
    'A confusão é com o melancólico–colérico, os mesmos humores em ordem inversa. Lá a ' +
    'profundidade vem antes e serve para conceder permissão: a decisão é o ato final de um ' +
    'processo longo, e por isso demora e depois é irrevogável. Aqui a decisão é o ato inicial, e ' +
    'a profundidade vem depois para sustentá-la. Os dois parecem idênticos de fora — ambos ' +
    'seguros, exigentes e difíceis de demover. O que os separa é para onde aponta a sua análise: ' +
    'para a frente, buscando licença, ou para trás, buscando defesa.',

  sources: [
    'lahaye-1984',
    'littauer-1983',
    'galen-c170',
    'hippocrates-c400bc',
    'pittenger-2005',
    'rothbart-2011',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* Colérico–fleumático                                                         */
/* -------------------------------------------------------------------------- */

export const DEEP_CHOLERIC_PHLEGMATIC_PT: VariantDeep = {
  lede:
    'Há dois relógios dentro de você e eles nunca foram sincronizados. O relógio da decisão é ' +
    'colérico e marca segundos: Ni entrega a leitura, Te fecha, acabou. O relógio da comunicação ' +
    'é fleumático e não marca nada — não há impulso de anunciar, de convencer ou de ser ' +
    'concordado. O resultado é o INTJ mais mal interpretado dos doze: alguém que já decidiu, que ' +
    'não vai reabrir, e cujo silêncio todo mundo lê como <em>deliberação em curso</em> quando é, ' +
    'na verdade, <strong>uma sentença já transitada em julgado</strong>.',

  sections: [
    {
      eyebrow: 'Velocidade de decisão',
      title: 'Segundos para fechar, nunca para reabrir',
      paragraphs: [
        'A metade colérica faz com Te o que o colérico sempre faz: encurta a distância entre a ' +
          'conclusão de Ni e o ato até quase zero. A diferença é que, num INTJ, o que está sendo ' +
          'encurtado não é um impulso — é uma convergência. Ni não oferece opções, oferece um ' +
          'desfecho; o colérico apenas remove o intervalo entre ver o desfecho e agir sobre ele. ' +
          'Por isso as suas decisões rápidas raramente parecem precipitadas <em>para você</em>: ' +
          'do lado de dentro, elas não foram rápidas, foram imediatas, que é outra coisa.',
        'A metade fleumática entra depois e faz o trabalho decisivo — ela torna a decisão ' +
          'estável. Vale entender por que, porque é aqui que esta combinação se separa de todas as ' +
          'outras. Uma posição colérica sustentada por um temperamento colérico ainda é ' +
          'discutível: coléricos brigam, brigar consome energia, e o que consome energia acaba ' +
          'sendo renegociado. Um fleumático não gasta nada para manter uma posição. Não há atrito, ' +
          'não há necessidade de vencer, não há desgaste que force revisão. A decisão simplesmente ' +
          'fica onde foi posta, por anos, como um objeto.',
        'A consequência é que a sua taxa de reversão é próxima de zero — e ela é próxima de zero ' +
          'independentemente de a decisão ter sido boa. Este é o ponto que merece toda a sua ' +
          'atenção: nas outras combinações, decisões ruins são corrigidas por desconforto. Aqui ' +
          'não existe desconforto suficiente. Uma decisão excelente e uma decisão medíocre têm ' +
          'exatamente a mesma vida útil, porque nenhuma das duas encontra qualquer resistência ' +
          'interna depois de tomada.',
      ],
      points: [
        'Ni converge, Te fecha, o colérico executa — em minutos, às vezes em segundos.',
        'O fleumático não sustenta a decisão por convicção: sustenta por ausência de custo.',
        'Reabrir exigiria energia de ativação, e essa é exatamente a energia que a segunda metade ' +
          'não fornece.',
        'Boas e más decisões duram igual. O filtro tem de ser aplicado antes, porque depois não há ' +
          'nenhum.',
      ],
    },
    {
      eyebrow: 'Como a decisão é comunicada',
      title: 'O silêncio que não é dúvida',
      paragraphs: [
        'Quase todo o dano que esta combinação causa vem de um único mal-entendido, e ele é ' +
          'sempre o mesmo. Numa reunião, numa conversa, num jantar, alguém apresenta uma ' +
          'proposta. Você ouve, avalia, decide — e não diz nada. Para todos os presentes, um INTJ ' +
          'calado é um INTJ pensando; a sala segue argumentando, ajustando, tentando ganhá-lo. ' +
          'Mas a deliberação terminou antes do segundo parágrafo. O que está acontecendo ali não é ' +
          'processamento: é a ausência completa de qualquer impulso de informar o resultado.',
        'Não é estratégia e nem sequer é reserva. É que o colérico já obteve o que queria — a ' +
          'questão está fechada — e o fleumático não vê motivo para gastar palavras num resultado ' +
          'que não depende da aprovação de ninguém. Note a diferença em relação ao INTJ ' +
          'colérico–sanguíneo, que decide igualmente rápido e depois <em>fala</em>: lá a decisão ' +
          'chega à mesa em alto volume. Aqui ela nunca chega, e as pessoas continuam ' +
          'negociando com alguém que já saiu da mesa.',
        'O custo se paga em duas moedas. A primeira: quem devia ter sido avisado não foi, e ' +
          'descobre tarde — em geral quando já está diante da consequência. A segunda, mais ' +
          'silenciosa: como você não expõe raciocínio, ninguém pode encontrar o defeito nele. ' +
          'Um INTJ que argumenta em voz alta é corrigido pelos outros de graça, várias vezes por ' +
          'ano. Você não é corrigido nunca, e a sua taxa de acerto, por melhor que seja, não é ' +
          '100%.',
        'O antídoto é mecânico, e mecânico é o único formato que funciona aqui, porque nada ' +
          'espontâneo vai sair: escrito, curto, datado. Três linhas — decidi X, porque Y, o que me ' +
          'faria mudar é Z — enviadas às pessoas afetadas no mesmo dia. Não é um exercício de ' +
          'transparência emocional; é a instalação artificial de um canal que a sua combinação não ' +
          'possui de fábrica.',
      ],
    },
    {
      eyebrow: 'Por que não reabre',
      title: 'A física da irreversibilidade',
      paragraphs: [
        'Reabrir uma decisão exige três coisas: reconhecer que ela pode estar errada, sentir ' +
          'incômodo suficiente para agir sobre isso, e pagar o custo social de mudar publicamente ' +
          'de posição. Esta combinação falha nas três, e por motivos diferentes — o que é ' +
          'justamente o que torna o efeito tão robusto.',
        'A primeira falha é de Ni: a conclusão chega como certeza, não como hipótese, e certezas ' +
          'não se apresentam acompanhadas de dúvida. A segunda é do fleumático: manter a posição ' +
          'não incomoda, então não há pressão interna acumulando. A terceira é do colérico: mudar ' +
          'de posição em público seria uma concessão, e concessão é o único movimento que o ' +
          'colérico não faz de graça. Some as três e você tem um sistema em que nada empurra na ' +
          'direção da revisão.',
        'Vale ser preciso sobre o que isso custa, porque a força é real. Você é excelente em ' +
          'decisões que <em>devem</em> ser irreversíveis: encerrar um contrato ruim, recusar uma ' +
          'oferta boa que era armadilha, sair de um lugar que estava afundando. Onde isso destrói ' +
          'valor é nas decisões que deveriam ter validade de seis meses e recebem validade de dez ' +
          'anos — uma carreira escolhida aos vinte e três, uma opinião sobre uma tecnologia, uma ' +
          'avaliação sobre uma pessoa feita numa semana ruim dela.',
      ],
    },
    {
      eyebrow: 'O que faz com Fi terciário',
      title: 'O arquivo, e a lâmina no fim do arquivo',
      paragraphs: [
        'Fi terciário é intenso e quase sem palavras — e a própria orientação introvertida dessa ' +
          'terceira função é convenção do modelo de Grant, não um ponto pacificado. Numa ' +
          'combinação quente, essa intensidade encontra saída: você briga, diz o que doeu, ' +
          'estraga a noite de alguém e a relação continua. Aqui a metade fleumática remove a saída ' +
          'sem remover nada do registro. A ofensa é arquivada inteira, com data e com a frase ' +
          'exata, e nada é dito.',
        'O que se acumula não é raiva — é <em>evidência</em>. E como o colérico é quem executa ' +
          'veredictos, o arquivo tem um destino previsível: em algum momento a leitura de Ni sobre ' +
          'aquela pessoa se fecha, Te formaliza a conclusão, e a relação termina numa frase. Sem ' +
          'discussão, sem última tentativa, sem apelação. Para você é o desfecho ordenado de um ' +
          'processo que já durava meses. Para a outra pessoa é uma execução sem julgamento, e ela ' +
          'não está sendo dramática ao descrever assim: ela realmente nunca foi notificada.',
        'Há uma versão desse mecanismo que não envolve corte nenhum e é ainda mais silenciosa: a ' +
          'reclassificação. Alguém deixa de ser central e passa a ser periférico, sem que nada ' +
          'aconteça e sem que ninguém perceba. Você continua cordial, disponível, educado. ' +
          'Simplesmente parou de contar com aquela pessoa, e a decisão foi tomada num dia ' +
          'específico, sobre um episódio específico, que ela jamais soube ter sido decisivo.',
      ],
    },
    {
      eyebrow: 'Sob carga',
      title: 'Não é explosão — é subtração',
      paragraphs: [
        'Todo mundo espera que um INTJ colérico sob pressão exploda. Esta combinação não explode: ' +
          'ela subtrai. A carga entra e o sistema começa a remover — primeiro os compromissos ' +
          'periféricos, depois as conversas que exigem manutenção, depois as pessoas que pedem ' +
          'explicação, depois as que pedem qualquer coisa. Cada remoção é individualmente ' +
          'defensável, executada com calma e sem nenhum sinal de sofrimento, e é exatamente por ' +
          'isso que ninguém intervém.',
        'A fase seguinte é a que causa dano permanente: a consolidação. Depois de meses subtraindo ' +
          'em silêncio, a metade colérica agrupa tudo e executa de uma vez. Numa mesma semana você ' +
          'pede demissão, encerra duas relações e cancela um projeto de três anos — e sente ' +
          'alívio, porque cada uma dessas decisões estava concluída havia muito tempo e só ' +
          'faltava a execução. Nada disso parece impulsivo de dentro. Tudo parece impulsivo de ' +
          'fora, e é a leitura de fora que as pessoas usam para decidir se você é confiável.',
        'Se inferior aparece depois, e não antes, o que rouba de você o único aviso antecipado que ' +
          'o tipo teria. O corpo não foi consultado durante meses; quando ele finalmente entra, ' +
          'entra em excesso — sono desregulado, consumo, treino, dias inteiros sem comer seguidos ' +
          'de noites inteiras sem dormir. É a descrição de grip acumulada por Quenk e outros ' +
          'observadores clínicos, não achado de laboratório, mas é reconhecível o bastante para ' +
          'servir de alarme tardio.',
      ],
      points: [
        'Fase 1 — subtração silenciosa: compromissos, conversas e pessoas removidos um a um.',
        'Fase 2 — consolidação colérica: várias decisões irreversíveis executadas numa semana.',
        'Fase 3 — Se inferior: o corpo cobra tudo de uma vez, depois de meses sem ser ouvido.',
        'O melhor indicador precoce não é humor: é o número de canais abertos com outras pessoas ' +
          'caindo mês a mês.',
      ],
    },
    {
      eyebrow: 'O que dez anos disso constroem',
      title: 'Uma vida eficiente que ninguém foi consultado a respeito',
      paragraphs: [
        'Somadas ao longo de uma década, as qualidades desta combinação produzem algo que pouca ' +
          'gente consegue: quase nenhum ano desperdiçado. Você não fica cinco anos num emprego ' +
          'ruim, não sustenta uma relação morta por medo, não adia a saída de um lugar que estava ' +
          'acabando. O que outro INTJ paga em anos de indecisão, você não paga — porque a decisão ' +
          'foi tomada no primeiro mês e executada sem cerimônia.',
        'O custo aparece no outro eixo, e ele é cumulativo e difícil de enxergar de dentro. Cada ' +
          'decisão não anunciada é, para as pessoas em volta, um evento sem causa; e uma vida ' +
          'inteira de eventos sem causa produz uma reputação de imprevisibilidade em alguém que ' +
          'é, na verdade, a pessoa mais previsível da sala. Elas não estão erradas por não ' +
          'entenderem — elas não receberam a informação.',
        'A correção que vale a pena não é decidir mais devagar; você provavelmente não consegue, e ' +
          'a velocidade é a sua vantagem real. A correção é separar duas coisas que você trata ' +
          'como uma só: <strong>fechar a decisão</strong> e <strong>encerrar o assunto</strong>. ' +
          'A primeira pode continuar levando segundos. A segunda precisa de um passo a mais, ' +
          'artificial, escrito, quase burocrático — e é o passo que devolve às pessoas o direito ' +
          'de saber o que foi decidido sobre elas.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Decisões terminais',
      text:
        'Você encerra o que precisa ser encerrado, sem hesitar, sem plateia e sem precisar de ' +
        'concordância. Em contexto de risco real — onde adiar é o erro caro — esta é a combinação ' +
        'que se quer ter na sala, e é a que menos custa emocionalmente para quem a executa.',
    },
    {
      title: 'Estabilidade sob pressão genuína',
      text:
        'Crise não altera o seu estado interno. Enquanto o ambiente perde qualidade de julgamento ' +
        'por causa do medo, o seu julgamento fica exatamente onde estava — e essa constância vale ' +
        'mais do que qualquer discurso de liderança.',
    },
    {
      title: 'Independência de reconhecimento',
      text:
        'Você não precisa que a decisão seja aplaudida, atribuída ou lembrada. Isso o torna ' +
        'incorruptível pelo tipo de incentivo que dobra a maioria das pessoas competentes: a ' +
        'vontade de ficar bem na foto.',
    },
    {
      title: 'Custo zero para manter uma posição impopular',
      text:
        'Sustentar sozinho uma posição correta contra a sala não lhe consome nada. Onde outros ' +
        'cedem por desgaste, você não se desgasta — e por isso continua tendo razão em público ' +
        'muito depois de todo mundo ter desistido de ter razão.',
    },
    {
      title: 'Triagem rápida e limpa',
      text:
        'Você separa o que importa do que não importa quase instantaneamente, e não volta atrás ' +
        'para revisar a separação. Em ambientes com excesso de demanda, essa é a diferença entre ' +
        'entregar e afundar.',
    },
  ],

  traps: [
    {
      title: 'Calma lida como consentimento',
      text:
        'A ausência de reação é registrada como aprovação por quase todo mundo. Você deixa uma ' +
        'sala inteira avançar numa direção que já descartou, e depois é visto como tendo mudado ' +
        'de ideia — quando na verdade nunca informou qual era.',
    },
    {
      title: 'Veredictos sobre pessoas sem homologação',
      text:
        'A leitura de Ni sobre alguém fecha rápido, o fleumático não sente urgência de testá-la, e ' +
        'ela nunca é dita à pessoa. Um julgamento formado numa semana ruim da vida dela pode ' +
        'governar dez anos de relação sem jamais receber uma segunda medição.',
    },
    {
      title: 'Irreversibilidade aplicada ao que era reversível',
      text:
        'A mesma maquinaria que encerra bem um contrato ruim encerra igualmente bem uma amizade ' +
        'que precisava só de uma conversa. Como o mecanismo não distingue os dois casos, o filtro ' +
        'tem de ser aplicado antes — e ele não existe de fábrica.',
    },
    {
      title: 'Nenhum canal de recurso',
      text:
        'Quem convive com você não tem por onde apelar, porque nunca é notificado de que há um ' +
        'processo. A pessoa que mais te ama descobre a decisão junto com todo mundo, o que ' +
        'produz um tipo de mágoa que não tem a ver com o conteúdo da decisão.',
    },
    {
      title: 'Ausência de correção externa',
      text:
        'Como você não expõe raciocínio, ninguém encontra o defeito dele. Anos de decisões não ' +
        'discutidas significam anos sem uma única refutação — e uma taxa de acerto alta, mas nunca ' +
        'total, aplicada sem revisão por muito tempo.',
    },
  ],

  stress:
    'Esta combinação não se desfaz para fora — ela se <strong>reduz</strong>. Não há explosão, ' +
    'não há crise anunciada, não há ninguém percebendo que algo começou. O que existe é uma ' +
    'sequência de remoções calmas e justificáveis: primeiro os compromissos de baixo valor, ' +
    'depois as conversas que exigem manutenção, depois as pessoas que pedem explicação, até ' +
    'sobrar um perímetro pequeno o bastante para ser administrado sem falar com ninguém. Cada ' +
    'passo parece maturidade. Em seguida vem a consolidação: a metade colérica agrupa tudo o que ' +
    'a metade fleumática vinha concluindo em silêncio e executa numa única semana — a demissão, ' +
    'o corte de relação, o fim do projeto —, e você sente alívio genuíno, porque nada daquilo ' +
    'era novo para você. Só era novo para eles. Por último chega Se inferior, tarde demais para ' +
    'servir de aviso: o corpo, ignorado por meses, cobra em excesso — sono destruído, consumo, ' +
    'treino, ou dias sem comer seguidos de noites sem dormir. Descrição de grip acumulada por ' +
    'observação clínica, não achado de laboratório. O indicador que funciona nesta combinação ' +
    'não é como você se sente, porque você vai se sentir bem: é quantos canais com outras ' +
    'pessoas continuam abertos. Se esse número caiu três meses seguidos, o colapso já começou.',

  growth: [
    {
      title: 'A regra das quarenta e oito horas para pessoas',
      text:
        'Decisões sobre coisas podem continuar levando segundos. Decisões sobre pessoas — cortar, ' +
        'rebaixar, arquivar — ficam suspensas por dois dias antes de valer. Não é para você mudar ' +
        'de ideia; é para dar a Ni a chance de reconvergir com um dado que ainda não tinha.',
    },
    {
      title: 'Memorando de três linhas',
      text:
        'Decidi X, porque Y, o que me faria mudar é Z. Escrito, no mesmo dia, para quem for ' +
        'afetado. Espontaneamente isso nunca vai sair — a combinação não gera o impulso —, então ' +
        'trate como procedimento e não como gesto de abertura.',
    },
    {
      title: 'Uma pessoa com direito de recurso permanente',
      text:
        'Escolha uma, diga a ela que tem esse direito, e honre-o mesmo quando a decisão já estiver ' +
        'fechada. É o único mecanismo capaz de furar a irreversibilidade, e ele precisa ser ' +
        'concedido antes — no meio de um conflito, você não vai concedê-lo.',
    },
    {
      title: 'Carimbe validade nas decisões',
      text:
        'Ao decidir, classifique: irreversível ou revisável em seis meses. Escreva a data de ' +
        'revisão junto. Sem esse carimbo, tudo herda a mesma vida útil infinita, e é assim que ' +
        'uma opinião formada aos vinte e três anos ainda governa a sua vida aos quarenta.',
    },
    {
      title: 'Reabra uma coisa pequena por trimestre',
      text:
        'De propósito, sem necessidade: uma ferramenta, uma rotina, uma avaliação antiga sobre ' +
        'alguém. É treino de um gesto que você não tem no repertório — e você vai precisar dele ' +
        'exatamente uma vez, numa decisão grande, e não vai dar para improvisar na hora.',
    },
  ],

  misread:
    'Lido como frieza, quando quase sempre é economia: você não sente necessidade de dizer, e a ' +
    'ausência de dito é interpretada como ausência de importância. A segunda leitura errada é a ' +
    'mais perigosa no dia a dia — a de concordância. Como você não reage, as pessoas seguem ' +
    'adiante convencidas de que têm o seu aval, e o choque vem depois, quando descobrem que a ' +
    'decisão contrária já estava tomada desde o início e apenas não havia sido comunicada. Uma ' +
    'terceira, no trabalho: passividade. Chefes confundem baixa reatividade com baixa ambição, ' +
    'e costumam descobrir o erro no dia em que você entrega o pedido de demissão sem nunca ter ' +
    'reclamado de nada.',

  versus:
    'A confusão é com o fleumático–colérico, a imagem invertida no espelho, e a inversão muda ' +
    'tudo. Lá quem governa é o fleumático: o estado normal é a estabilidade, o colérico dorme por ' +
    'meses e desperta inteiro quando uma linha é cruzada — a intervenção é rara, pesada e ' +
    'sempre atrasada, e o problema é agir tarde demais. Aqui quem governa é o colérico: a decisão ' +
    'vem primeiro, em segundos, e o fleumático apenas retira o barulho que normalmente a ' +
    'acompanharia. O teste é a linha do tempo. Se você tolera longamente e depois corta de forma ' +
    'desproporcional ao último episódio, é o outro. Se você já tinha cortado meses antes e apenas ' +
    'não avisou ninguém, é este.',

  sources: [
    'lahaye-1984',
    'littauer-1983',
    'galen-c170',
    'hippocrates-c400bc',
    'kagan-1994',
    'rothbart-2011',
    'grant-1983',
    'quenk-2002-grip',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* Colérico–sanguíneo                                                          */
/* -------------------------------------------------------------------------- */

export const DEEP_CHOLERIC_SANGUINE_PT: VariantDeep = {
  lede:
    'Duas fontes de calor e nenhuma de freio. O colérico entrega a decisão rápida e a fome de ' +
    'responsabilidade; o sanguíneo entrega presença, sedução e apetite pelo agora — e o conjunto ' +
    'produz o INTJ que ocupa a sala, negocia bem e é sistematicamente tipado como extrovertido ' +
    'por quem só o vê trabalhando. O que quase ninguém percebe é o que essa temperatura faz com ' +
    'Ni: a intuição introvertida precisa de <em>tédio</em> para convergir, e esta é a combinação ' +
    'que <strong>não deixa um único minuto de tédio sobrar</strong>.',

  sections: [
    {
      eyebrow: 'Velocidade de decisão',
      title: 'Rápido demais até para o próprio motor',
      paragraphs: [
        'Esta é a combinação mais veloz das seis, e a velocidade não vem do mesmo lugar que nas ' +
          'outras. No colérico–fleumático, a decisão é imediata porque Ni já convergiu. Aqui a ' +
          'decisão é imediata porque o ambiente pede uma agora: alguém está esperando, a conversa ' +
          'tem energia, o momento é bom. O sanguíneo antecipa o gatilho e o colérico dispara sem ' +
          'verificar se a convergência terminou.',
        'Na maior parte das vezes funciona, e é isso que torna o padrão difícil de abandonar. A ' +
          'leitura preliminar de Ni é boa mesmo incompleta, você é rápido, o resultado aparece, e ' +
          'o reforço é imediato. O erro não se distribui de forma uniforme: ele se concentra nas ' +
          'decisões de horizonte longo — sociedade, contratação de sócio, escolha de mercado, ' +
          'casamento —, exatamente aquelas em que a vantagem estratégica do tipo deveria aparecer ' +
          'e é a primeira a ser gasta.',
        'O sintoma mais confiável é o encolhimento do horizonte. Um INTJ que planejava em anos ' +
          'passa a planejar em trimestres, depois em semanas, sem nunca ter decidido fazer isso. ' +
          'Ni não sumiu — ele deixou de receber a condição de que depende. Se você já teve a ' +
          'sensação de estar mais rápido e mais burro ao mesmo tempo, é exatamente isto, e não ' +
          'tem nada a ver com esforço.',
      ],
      points: [
        'Gatilho externo, não convergência interna: a decisão sai porque o momento pede.',
        'Acerto alto em decisões curtas, e é esse acerto que mantém o hábito de pé.',
        'O erro se concentra nas decisões de horizonte longo — as únicas em que o tipo teria ' +
          'vantagem estrutural.',
        'Sinal precoce: o seu horizonte de planejamento encolhendo sem que você tenha decidido ' +
          'encolhê-lo.',
      ],
    },
    {
      eyebrow: 'Como a decisão é comunicada',
      title: 'Anunciada antes de existir',
      paragraphs: [
        'Se as outras cinco combinações deste grupo comunicam de menos, esta comunica cedo demais. ' +
          'O compromisso é declarado em voz alta enquanto ainda era uma hipótese: você diz que vai ' +
          'fazer, diz quando, diz com quem — e o sanguíneo faz isso porque anunciar é agradável e ' +
          'porque a sala responde bem. O colérico, em seguida, transforma o anúncio em obrigação, ' +
          'porque voltar atrás publicamente não está no repertório.',
        'É assim que um INTJ acaba executando planos que Ni nunca chegou a aprovar. A sequência é ' +
          'sempre a mesma: entusiasmo genuíno, anúncio, compromisso público, e três semanas depois ' +
          'a convergência finalmente acontece e mostra que a coisa não era boa — só que agora ' +
          'existem pessoas contando com ela. Você entrega, porque entrega mesmo, e paga a conta em ' +
          'meses de trabalho numa direção que você já sabe estar errada.',
        'Há um efeito colateral no vínculo, e ele é injusto com você. O seu calor é real, e por ' +
          'isso as pessoas o leem como promessa de disponibilidade continuada. Elas não sabem que ' +
          'você continua sendo um INTJ — que precisa de silêncio para pensar, que termina o dia ' +
          'esgotado, que vai desaparecer por dez dias sem que isso queira dizer nada. Quando o ' +
          'desaparecimento chega, o contraste com a temperatura anterior faz parecer traição.',
      ],
    },
    {
      eyebrow: 'O que faz com Fi terciário',
      title: 'A bússola que não consegue ser ouvida',
      paragraphs: [
        'Fi terciário sinaliza baixo e devagar: pressão interna, irritação difusa, cansaço sem ' +
          'causa — e só depois, às vezes dias depois, a frase que explica. É pouco sinal para um ' +
          'ambiente barulhento, e esta combinação vive dentro de um ambiente barulhento fabricado ' +
          'por ela mesma. O resultado é o mais específico desta variante: você descobre que ' +
          'atravessou uma linha sua quando já está do outro lado.',
        'A cena típica não envolve nenhum ato grave. Você aceitou um contrato, entrou numa ' +
          'sociedade ou defendeu publicamente uma posição que, examinada com calma, viola algo que ' +
          'você não negocia. Nada gritou na hora. Cinco semanas depois aparece um mal-estar ' +
          'persistente, e o colérico interpreta mal-estar como fraqueza — então você acelera, o ' +
          'que abafa o sinal por mais um mês.',
        'Quando Fi finalmente é ouvido, ele não negocia. A correção vem no formato clássico do ' +
          'tipo: um corte inteiro, sem gradação, frequentemente destruindo junto coisas boas que ' +
          'estavam anexadas à coisa ruim. É o mesmo mecanismo que num INTJ mais frio produziria um ' +
          'aviso silencioso meses antes — aqui ele produz uma virada brusca, pública, e ' +
          'difícil de explicar a quem só viu o entusiasmo.',
      ],
    },
    {
      eyebrow: 'Sob carga',
      title: 'Mais velocidade como analgésico',
      paragraphs: [
        'A resposta desta combinação à sobrecarga é aumentar a dose do que já estava sobrecarregando: ' +
          'mais projetos, mais reuniões, mais pessoas, mais viagem. E funciona no curto prazo, ' +
          'porque velocidade realmente abafa desconforto — o que é exatamente o motivo de ser ' +
          'perigoso. Nenhuma função aqui está encarregada de monitorar o custo: Fi sinaliza baixo ' +
          'demais, Se inferior só fala quando já é tarde, e Te mede resultado, não desgaste.',
        'Por isso o colapso desta combinação chega sem escalonamento. Não houve semanas ruins ' +
          'progressivas nem produtividade em queda; houve desempenho alto até o dia em que não ' +
          'houve nenhum. É o padrão que a literatura de burnout descreve como exaustão emocional ' +
          'somada a distanciamento — e ela nasce de exposição prolongada, não de um evento, o que ' +
          'significa que ela vinha se formando durante todos aqueles meses em que você estava bem.',
      ],
    },
    {
      eyebrow: 'O que o vocabulário sustenta',
      title: 'Parecer extrovertido não é ser outro tipo',
      paragraphs: [
        'Duas confusões acontecem quase sempre nesta combinação, e vale desfazer as duas. A ' +
          'primeira: calor não é extroversão no sentido de Jung nem no de Eysenck. Eysenck e ' +
          'Eysenck usaram os quatro nomes antigos como rótulos de quadrante sobre extroversão × ' +
          'neuroticismo, o que é empréstimo mnemônico sobre dimensões medidas — e mesmo ali, ' +
          'sociabilidade alta é um comportamento, não a orientação da função dominante. Você ' +
          'continua descarregando na companhia e recarregando no silêncio.',
        'A segunda: nada disso muda o seu grupo em Keirsey. Em Please Understand Me II, cada tipo ' +
          'pertence a exatamente um dos quatro grupos por definição, e o INTJ é sempre Racional — ' +
          'não há dominante, secundário ou mistura possível ali. Um INTJ colérico–sanguíneo e um ' +
          'INTJ melancólico–fleumático são igualmente Racionais em Keirsey e igualmente ' +
          'Ni · Te · Fi · Se em dinâmica de tipo. O par colérico/sanguíneo é de LaHaye, 1984, e ' +
          'descreve temperatura — nada além disso.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Arranque',
      text:
        'Você tira projetos do zero, e isso é raro entre INTJs. A combinação entrega ao mesmo ' +
        'tempo a decisão e a energia social necessária para conseguir as primeiras pessoas, os ' +
        'primeiros recursos e os primeiros clientes — fase em que a maioria dos planos morre.',
    },
    {
      title: 'Negociação de verdade',
      text:
        'Te lê a estrutura do acordo e o sanguíneo lê a sala. Poucas pessoas têm as duas leituras ' +
        'ao mesmo tempo, e é por isso que esta combinação fecha condições que um INTJ mais frio ' +
        'não conseguiria nem começar a discutir.',
    },
    {
      title: 'Se exercitada em vez de negada',
      text:
        'A função inferior aqui recebe uso regular: corpo, velocidade, presente. Isso reduz o ' +
        'risco de grip por acumulação e dá a você algo que a maioria dos INTJs só alcança na ' +
        'meia-idade — alguma fluência real no mundo físico.',
    },
    {
      title: 'Recuperação rápida de derrota',
      text:
        'Você não fica meses processando um fracasso. O calor devolve movimento em dias, o que ' +
        'lhe permite tentar mais vezes do que quase qualquer outra combinação deste grupo — e ' +
        'número de tentativas costuma valer mais do que precisão.',
    },
  ],

  traps: [
    {
      title: 'Anúncio antes da convergência',
      text:
        'O compromisso público é assumido enquanto a ideia ainda era hipótese, e o colérico ' +
        'depois se recusa a desdizer. Você acaba executando com competência planos que a sua ' +
        'própria intuição reprovaria se tivesse tido mais três semanas.',
    },
    {
      title: 'Tédio eliminado do calendário',
      text:
        'Ni depende de tempo morto, e esta combinação preenche todo tempo morto com gente e ' +
        'estímulo. A perda não é sentida como perda — é sentida como uma vida cheia —, e o ' +
        'horizonte encolhe de anos para semanas sem que nada pareça errado.',
    },
    {
      title: 'Fi abafado até o corte',
      text:
        'O sinal de Fi é fraco e o ambiente é alto, então a linha só é notada depois de ' +
        'atravessada. A correção chega inteira, tarde e em público, destruindo junto o que era ' +
        'bom — e ninguém em volta consegue entender de onde aquilo veio.',
    },
    {
      title: 'Cinco projetos, nenhum terminado',
      text:
        'A combinação é excelente em começar e não tem nenhuma peça encarregada de terminar. Sem ' +
        'alguém com autoridade real para recusar o sexto projeto, o padrão se repete até virar a ' +
        'sua reputação profissional.',
    },
    {
      title: 'Calor lido como promessa',
      text:
        'A sua simpatia é genuína e por isso é interpretada como disponibilidade permanente. ' +
        'Quando o INTJ por baixo precisa desaparecer por dez dias, o contraste faz o sumiço ' +
        'parecer punição — e você é acusado de algo que não fez.',
    },
  ],

  stress:
    'O colapso desta combinação é o mais súbito das seis, porque nada nela está encarregado de ' +
    'medir custo. A carga sobe e a resposta é aumentar a velocidade: mais compromissos, mais ' +
    'viagens, mais gente, mais decisões por dia — e o alívio é real, o que fecha o ciclo. ' +
    'Enquanto isso, Se inferior deixa de ser exercício e vira consumo: excesso de álcool, ' +
    'excesso de treino, risco físico, sono tratado como variável ajustável, compras ou noites ' +
    'que no dia seguinte não fazem sentido nenhum. É a descrição de grip que Quenk sistematizou a ' +
    'partir de observação clínica acumulada, e não um achado de laboratório — mas o formato aqui ' +
    'é característico: o excesso vem <strong>com justificativa estratégica</strong>, o que impede ' +
    'que qualquer pessoa próxima o identifique como sintoma. Depois vem a queda, e ela vem ' +
    'inteira, num intervalo de dias. O que a literatura de burnout descreve — exaustão emocional ' +
    'com distanciamento, formada por exposição prolongada e não por um evento — encaixa bem no ' +
    'que acontece, e o pior detalhe é este: você estava se sentindo bem durante quase todo o ' +
    'período em que estava se destruindo.',

  growth: [
    {
      title: 'Vinte e quatro horas entre entusiasmo e anúncio',
      text:
        'A regra que mais muda a vida desta combinação. Você pode sentir tudo o que sente na hora ' +
        '— só não pode dizer em voz alta que vai fazer. Um dia é suficiente para Ni terminar de ' +
        'convergir, e é o dia que separa os seus bons projetos dos que você entregou por teimosia.',
    },
    {
      title: 'Tédio no calendário, não na intenção',
      text:
        'Blocos protegidos e recorrentes, sem estímulo e sem pessoas, marcados como compromisso ' +
        'inegociável. Não funciona por força de vontade: nesta combinação a vontade sempre vai ' +
        'preferir a sala cheia, e a vantagem estratégica do tipo simplesmente não se forma sem ' +
        'tempo morto.',
    },
    {
      title: 'Um operador com autoridade real',
      text:
        'Alguém ao seu lado com poder de terminar o que você começou e de recusar o sexto projeto ' +
        '— poder de verdade, não conselho. Você não vai se conter sozinho, e essa é uma ' +
        'constatação prática, não um julgamento moral.',
    },
    {
      title: 'Auditoria de Fi por escrito',
      text:
        'Uma vez por mês, quinze minutos, três perguntas: onde eu me senti mal sem saber por quê, ' +
        'o que eu aceitei que não teria aceitado há um ano, do que eu tenho evitado falar. É a ' +
        'única forma de ouvir uma função que sinaliza baixo demais para competir com o seu ruído.',
    },
    {
      title: 'Meça desgaste, não desempenho',
      text:
        'Te mede resultado, e o resultado continua bom até o dia em que acaba. Acompanhe sono, ' +
        'número de dias sem silêncio e quantas coisas você começou sem terminar — indicadores ' +
        'externos, revisados por outra pessoa se possível.',
    },
  ],

  misread:
    'Tipado como ENTJ por praticamente todo mundo que o vê trabalhando, e como ENFP por quem o ' +
    'vê em contexto social. Nenhuma das duas leituras alcança o que acontece depois: o silêncio ' +
    'obrigatório, o esgotamento no fim do dia, a necessidade de sumir. A segunda leitura errada é ' +
    'a de insinceridade — quando o entusiasmo some, as pessoas concluem que era performance. Era ' +
    'real; apenas não era sustentável, e a diferença entre as duas coisas é invisível de fora.',

  versus:
    'A confusão é com o sanguíneo–colérico, os mesmos humores na ordem inversa. Lá o apetite ' +
    'comanda e a força serve: o padrão é seguir o estímulo e usar o colérico para vencer o ' +
    'obstáculo que aparecer no caminho, e o risco é confundir agitação com estratégia. Aqui a ' +
    'força comanda e o apetite serve: existe um objetivo, ele é seu, e o calor é o que recruta ' +
    'pessoas para ele. Pergunte-se por que você está em movimento. Se há um alvo definido há ' +
    'meses e a energia social é meio de chegar lá, é esta combinação. Se o alvo muda conforme o ' +
    'que apareceu de interessante nesta semana, é a outra.',

  sources: [
    'lahaye-1984',
    'littauer-1983',
    'eysenck-eysenck-1985',
    'keirsey-1998',
    'rothbart-2011',
    'grant-1983',
    'quenk-2002-grip',
    'maslach-2001-burnout',
  ] satisfies SourceId[],
};
