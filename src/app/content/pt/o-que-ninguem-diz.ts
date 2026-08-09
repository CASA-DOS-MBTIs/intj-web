import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const O_QUE_NINGUEM_DIZ_PT: ArticlePageContent = {
  meta: {
    title: 'O que ninguém te diz sobre ser INTJ',
    description:
      'As experiências específicas que as descrições de tipo deixam de fora: a conversa que ' +
      'nunca aconteceu, o luto adiantado, o cansaço de ter sido percebido — e as partes que ' +
      'você não conta.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'quenk-2002-grip',
    'riso-hudson-1999',
    'hook-2021',
    'mbf-ethics',
    'pittenger-1993',
    'pittenger-2005',
    'reynierse-2009',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Reconhecimento — O que ninguém te diz',
    title: 'O que ninguém\nte diz sobre ser INTJ',
    lede:
      'Existe uma diferença entre ler sobre o seu tipo e ser pego por um texto. Esta página não ' +
      'explica nada: ela tenta descrever, com a maior precisão que couber, as coisas que ' +
      'acontecem dentro da sua cabeça e quase nunca aparecem nas descrições de INTJ — as ' +
      'pequenas, as constrangedoras, e duas ou três que você preferiria que não estivessem aqui.',
  },

  intro:
    'As descrições de tipo contam o que você faz: planeja, analisa, prefere poucas pessoas, ' +
    'trabalha melhor sozinho. São verdadeiras e são quase inúteis, porque descrevem de fora — ' +
    'do jeito que um vizinho descreveria. Esta página tenta o contrário: a coisa miúda, ' +
    'específica, meio vergonhosa, que você nunca contou a ninguém porque parecia particular ' +
    'demais para ter nome. Não há modelo aqui, nem teoria, nem argumento a defender. Só um ' +
    'teste: se em algum ponto você parar e pensar <em>como é que isso está escrito aqui</em>, ' +
    'era exatamente essa a intenção.',

  caveat:
    'Nada nesta página foi medido. Não há amostra, frequência nem porcentagem por trás de ' +
    'nenhuma frase — são descrições escritas para serem reconhecidas, e uma descrição bem ' +
    'escrita convence mesmo quando não é sua. É o efeito Barnum, o mesmo mecanismo que faz ' +
    'horóscopo funcionar — e Pittenger (1993) o aponta nos próprios retratos de tipo ' +
    'do MBTI. Vale desconfiar dele aqui também. Se você reconhecer três das nove seções, ótimo; ' +
    'se não ' +
    'reconhecer nenhuma, isso não te torna menos INTJ, e não torna a página menos verdadeira ' +
    'para outra pessoa. Nada aqui é exclusivo do tipo: introvertidos de qualquer sigla, e gente ' +
    'que nunca respondeu a teste nenhum, vivem várias destas coisas. E nenhuma delas mede quem ' +
    'você é: o material oficial do MBTI é explícito ao dizer que o instrumento não mede ' +
    'habilidade, competência nem perícia, e é uma das poucas coisas nesta área em que dá para ' +
    'confiar sem ressalva.',

  sections: [
    {
      eyebrow: '01 · A conversa que não aconteceu',
      title: 'Você ganha discussões com pessoas que estão dormindo',
      paragraphs: [
        'Três da manhã, o teto. Você está no meio de uma conversa com alguém que não faz a menor ' +
          'ideia de que ela está acontecendo. Já disse a frase certa — aquela que não saiu na ' +
          'quinta-feira, quando teria servido —, já ouviu a resposta que a pessoa daria, já ' +
          'desmontou a resposta. Você ganha. Ganha sempre, porque escreve os dois lados. E acorda ' +
          'com raiva de alguém que dormiu a noite inteira sem saber de nada.',
        'Isso não é insegurança nem rancor gratuito: é a mesma máquina que te faz prever o fim de ' +
          'um projeto na primeira reunião, rodando com um alvo humano — “intuição introvertida ' +
          'simulando até fechar o cenário” é como o vocabulário do tipo nomeia isso, e é ' +
          'metáfora, não anatomia. A conversa real ficou aberta — alguém desviou, alguém ' +
          'chorou, alguém disse “deixa pra lá” — então a simulação continua sozinha até alguém ' +
          'encerrar. Como a outra pessoa não está disponível para encerrar, você faz o papel dos ' +
          'dois.',
        'Existe também a versão escrita. A mensagem de quatro parágrafos, com estrutura, com ' +
          '“primeiro” e “segundo”, revisada três vezes para tirar o que soava agressivo, e ' +
          'apagada inteira às duas e meia. O que você mandou de manhã foi “tudo certo”. Você não ' +
          'estava mentindo: a essa altura não havia mais o que dizer, porque a conversa toda já ' +
          'tinha acontecido — e você tinha sido as duas pessoas.',
      ],
    },
    {
      eyebrow: '02 · Noventa segundos',
      title: 'Você conclui cedo demais — e sente que acerta',
      paragraphs: [
        'Você cumprimenta alguém e, antes do fim da primeira conversa, já sabe se essa pessoa vai ' +
          'importar. Não é simpatia nem antipatia — é arquivamento, e é silencioso. Você continua ' +
          'educado, faz as perguntas de praxe, ri na hora certa. Por dentro a pasta já foi ' +
          'escolhida, e você vai sustentar meia hora de conversa amável com alguém que, para ' +
          'todos os efeitos práticos, você já concluiu.',
        'O desconforto não é ter o julgamento. É a sensação de que ele se confirma. Se ' +
          'errasse sempre, seria fácil chamar de preconceito e largar mão. Como acerta o ' +
          'bastante, você foi deixando de duvidar dele — e aqui vale a única ressalva desta ' +
          'página: você só lembra dos acertos. As pessoas que você descartou em noventa segundos ' +
          'nunca tiveram a chance de te provar errado. Algumas teriam.',
        'E há o outro lado, que ninguém menciona: a pasta “vai importar” é pequena, abre com ' +
          'dificuldade, e o que entra nela entra por anos. Você não decide quem te marca. Só ' +
          'percebe, com um leve constrangimento, que já decidiu.',
      ],
    },
    {
      eyebrow: '03 · Decidido no minuto dois',
      title: 'Você continua a conversa por educação',
      paragraphs: [
        'A reunião tem quarenta minutos. Para você acabou no minuto dois. O resto é um teatro que ' +
          'você assiste com o rosto adequado, dizendo “faz sentido” em intervalos plausíveis, ' +
          'esperando o grupo chegar a pé onde você já está. Dizer agora seria grosseria — e você ' +
          'já disse antes, já viu a temperatura da sala cair, já foi chamado de arrogante por ter ' +
          'chegado rápido demais em voz alta. Então você espera. O cansaço da reunião não vem de ' +
          'pensar; vem de conter.',
        'A mesma coisa acontece fora do trabalho, e ali é pior. Você já sabe que não vai aceitar ' +
          'o convite, que não vai voltar com aquela pessoa, que a mudança de cidade não vai ' +
          'acontecer. Mas responder na hora soa como descaso, então você compra três dias de cara ' +
          'pensativa e devolve na sexta-feira uma resposta que estava pronta na terça. A demora ' +
          'não é dúvida. É embalagem.',
        'O efeito colateral é injusto com você: as pessoas concluem que você é impulsivo — ' +
          '“decidiu isso do nada” — quando foi o contrário. A decisão levou dois minutos porque ' +
          'vinha sendo montada há meses, em silêncio, sem que ninguém fosse convidado a assistir.',
      ],
    },
    {
      eyebrow: '04 · Ineficiência dói',
      title: 'Você sente uma tarefa mal feita antes de julgá-la',
      paragraphs: [
        'Alguém pega o mouse para fazer o que dois toques no teclado resolveriam. Alguém copia ' +
          'uma coluna de números à mão. Alguém procura o mesmo arquivo pela terceira vez no mesmo ' +
          'lugar errado, e você já sabe onde ele está desde a primeira. E aparece algo no ' +
          'antebraço — uma vontade quase muscular de tirar a pessoa da cadeira. Não é desprezo ' +
          'pela inteligência dela: é o corpo reagindo a um sistema mal desenhado — “é assim que o ' +
          'pensamento extrovertido olha para qualquer coisa” é como o vocabulário do tipo nomeia ' +
          'isso, e é metáfora, não anatomia.',
        'Você quase sempre segura. Segurar custa, e o custo aparece depois — na irritação ' +
          'desproporcional com outra coisa, ou na frase que escapa e sai exata e no tom errado. ' +
          'Vale saber que a exatidão é justamente o problema: se estivesse errado, seria uma ' +
          'discussão. Como está certo, vira humilhação.',
      ],
      points: [
        'Refazer sozinho o que seria mais rápido delegar, porque explicar custa mais que fazer.',
        'Reorganizar mentalmente a fila do supermercado, o fluxo do aeroporto, a cozinha alheia.',
        'Reescrever a planilha de outra pessoa às onze da noite, sem pedir e sem contar.',
        'Sentir alívio físico quando alguém finalmente faz do jeito certo — mesmo sem crédito.',
        'Aceitar um caminho pior por semanas para não ter a conversa de trinta segundos que o ' +
          'consertaria.',
      ],
    },
    {
      eyebrow: '05 · A solidão específica',
      title: 'Ser o único na sala que viu o problema',
      paragraphs: [
        'Todo mundo está animado. Você está olhando para a mesma coisa e enxergando onde ela ' +
          'quebra — não porque quis, não porque procurou defeito, mas porque a estrutura apareceu ' +
          'inteira com a falha piscando dentro dela. Você diz. Sai da sua boca como aviso e chega ' +
          'nos ouvidos como sabotagem. Alguém usa a palavra “negativo”. Alguém sugere focar no ' +
          'lado bom. A conversa segue, e você fica com a sensação exata de estar sozinho numa ' +
          'sala cheia — que é uma solidão diferente da de estar sozinho em casa, e muito pior.',
        'Dezoito meses depois quebra exatamente ali. E aqui está a parte que nenhuma descrição de ' +
          'tipo conta: não é bom. Não existe satisfação nenhuma em ter razão sobre um desastre ' +
          'que te atinge junto com todo mundo. “Eu avisei” não tem gosto de nada. O que sobra é ' +
          'pior do que o desastre — a suspeita de que você vai passar a vida vendo com ' +
          'antecedência coisas que ninguém quer ouvir a tempo.',
        'Uma hora você para de avisar. Chamam isso de maturidade, e às vezes é mesmo: nem toda ' +
          'falha alheia precisa da sua análise, e escolher os avisos é uma habilidade real. Mas o ' +
          'silêncio que vem de escolha e o silêncio que vem de cansaço são coisas diferentes, e ' +
          'por dentro você sabe muito bem qual dos dois está praticando esta semana.',
      ],
    },
    {
      eyebrow: '06 · Cansaço de outra natureza',
      title: 'Você está exausto de ter sido percebido',
      paragraphs: [
        'Doze horas de trabalho difícil te deixam com sono. Três horas num evento onde você foi ' +
          'visto, cumprimentado, apresentado a gente nova e simpático o tempo todo te deixam com ' +
          'outra coisa: um esgotamento com textura própria, que pede escuro e silêncio, e que não ' +
          'melhora com café nem com uma noite bem dormida. Não foi o esforço, e não é só o ' +
          'barulho de gente. É que a máquina não desliga: durante as três horas você leu a sala, ' +
          'adiantou cada conversa dois passos, mediu o efeito de cada frase antes de dizê-la e ' +
          'ainda montou, ao vivo, a versão de você que aquela sala aceitaria. Cansa ter estado ' +
          'visível. Cansa muito mais ter estado calculando enquanto isso.',
        'Daí o carro parado na garagem com o motor desligado. Cinco minutos, dez, antes de subir. ' +
          'Não é procrastinação e não é infelicidade doméstica: é o único trecho do dia em que ' +
          'ninguém está te vendo, e você está tomando fôlego para o próximo trecho em que alguém ' +
          'estará. Você provavelmente nunca contou isso a ninguém, porque dito em voz alta soa ' +
          'como um problema, e não é — é manutenção.',
        'Daí também a alegria desproporcional, quase física, quando o compromisso é cancelado por ' +
          'quem convidou. Você gostava daquelas pessoas. Queria genuinamente ter ido. O alívio ' +
          'veio do mesmo jeito, junto com uma pontada de culpa por ele ser tão grande — e você ' +
          'desistiu há anos de explicar essa combinação para quem não sente as duas coisas ao ' +
          'mesmo tempo.',
      ],
    },
    {
      eyebrow: '07 · O luto adiantado',
      title: 'Você termina as coisas meses antes de terminá-las',
      paragraphs: [
        'A amizade acabou numa terça-feira qualquer, no meio de uma conversa banal, quando você ' +
          'percebeu — não decidiu, percebeu — que não havia mais nada ali. Você não disse nada. ' +
          'Continuou respondendo às mensagens, continuou aparecendo, com uma cortesia que foi ' +
          'ficando cada vez mais fina. O luto aconteceu ali, sozinho, distribuído por alguns ' +
          'meses, sem que a outra pessoa soubesse que estava sendo enterrada.',
        'Quando a conversa final finalmente acontece, você está calmo de um jeito que assusta. ' +
          'Para ela é uma ruptura; para você é papelada — a assinatura de um documento cujo teor ' +
          'você aceitou no ano passado. E ela diz “você é frio”, e não é mentira, e também não é ' +
          'verdade: você já chorou isso, só que fora de hora e sem plateia.',
        'O preço da antecipação é real e vale nomear: você quase nunca dá à outra pessoa a chance ' +
          'de consertar. O cenário fecha na sua cabeça, você trata o fechamento como fato ' +
          'consumado, e sai de cena por dentro muito antes de sair por fora. Algumas relações que ' +
          'você encerrou assim estavam mesmo terminadas. Outras precisavam apenas de uma conversa ' +
          '— aquela que você já tinha tido sozinho às três da manhã. E ganhado.',
      ],
    },
    {
      eyebrow: '08 · As partes que você não conta',
      title: 'O que você sabe sobre si e não diz em voz alta',
      paragraphs: [
        'Talvez você já tenha machucado alguém com precisão. Não com um grito: com uma frase ' +
          'curta, exata, dita ' +
          'no momento em que ia doer mais, sobre a coisa exata que a pessoa tinha medo de ser ' +
          'verdade. Você sabia onde ficava o ponto porque presta atenção — a mesma atenção que ' +
          'guarda detalhes que a pessoa esqueceu de ter dito. E o que pesa não é o arrependimento ' +
          'depois; é o segundo e meio antes, quando dava para ver o efeito e você falou assim ' +
          'mesmo.',
        'Às vezes você prefere ter razão a estar perto. Não sempre, mas com frequência suficiente ' +
          'para não poder chamar de exceção. Havia um ponto ganho que dava para ceder sem custo ' +
          'nenhum, e você não cedeu, e viu o rosto do outro se fechar, e continuou. Isso não é ' +
          'ausência de amor. É uma escolha ruim tomada por alguém que ama e que, naquele minuto, ' +
          'preferiu a integridade do argumento à integridade da noite.',
        'E existe o desprezo. Não o explosivo — o leve, interno, quase confortável: alguém fala ' +
          'uma bobagem e algo em você se recolhe, reclassifica a pessoa e segue. A leitura útil ' +
          'aqui não é a comprovada, é a que deixa saída: trate isso como hábito e não como ' +
          'natureza. Hábito tem origem, tem função — costuma ter sido, em algum momento, o único ' +
          'lugar seguro disponível — e hábito se desfaz, devagar, com constrangimento, e só ' +
          'depois de admitido.',
        'Por fim, a independência de que você tem orgulho. Ela é real, funciona e te levou longe; ' +
          'nada disso está sendo desmentido. Mas existe aqui uma leitura que vem da tradição do ' +
          'Eneagrama, não de medição nenhuma: em muitos INTJs — não em todos, e talvez não em ' +
          'você — boa parte dela foi montada depois que depender de alguém deu errado, um adulto ' +
          'que não veio, uma promessa que não valeu, uma vez em que pedir ajuda saiu caro. Se for ' +
          'o seu caso, o que aconteceu foi que você chamou de princípio uma coisa que começou ' +
          'como proteção. Ninguém está pedindo a autonomia de volta. Só vale saber a diferença ' +
          'entre escolher ficar sozinho e não saber mais fazer diferente.',
      ],
    },
    {
      eyebrow: '09 · A parte que faltava',
      title: 'Quase tudo isso foi incompatibilidade, não defeito',
      paragraphs: [
        'Junte a lista de coisas que já te disseram: intenso demais, frio demais, difícil, ' +
          'complicado, sério demais, “por que você não relaxa”. Quase tudo isso foi dito por ' +
          'gente que estava te usando errado — sala de aula com ritmo de conversa, escritório ' +
          'organizado em reunião, jantar de família que mede afeto em quantidade de fala. Você ' +
          'não estava quebrado nesses lugares. Estava fora de encaixe, e a diferença entre as ' +
          'duas coisas é a página inteira: defeito se conserta na pessoa, encaixe se conserta na ' +
          'escolha de onde ficar.',
        'Segundo: as partes que doem são exatamente as desenvolvíveis. Ninguém melhora muito ' +
          'naquilo em que já é ótimo — o ganho está sempre no que está mal traduzido. O ' +
          'sentimento que você sente com atraso aprende linguagem com prática de nomear. O corpo ' +
          'que você esquece responde a hábito pequeno, não a força de vontade. A conversa que ' +
          'você teve sozinho pode ser tida com a outra pessoa, e o resultado costuma ser pior de ' +
          'roteiro e melhor de vida. Nada disso é promessa: tipo não mede habilidade, ' +
          'competência nem perícia, e quem zela pelo uso do instrumento diz isso com todas as ' +
          'letras. É só onde há espaço.',
        'E a terceira, que é a razão de esta página existir. Ser difícil de conhecer não é a ' +
          'mesma coisa que ser impossível de conhecer. Em algum momento — provavelmente cedo, ' +
          'provavelmente sem drama nenhum, provavelmente numa quarta-feira comum — você concluiu ' +
          'que as pessoas chegam a certa profundidade e param, e organizou uma vida inteira em ' +
          'torno dessa conclusão. É uma conclusão com evidência: elas pararam mesmo. Mas ela erra ' +
          'mais do que a evidência sugere, porque quase ninguém que parou tinha o mapa, e algumas ' +
          'dessas pessoas teriam continuado se soubessem que havia mais adiante. Você não é ' +
          'ilegível. Você é lento de ler, escrito em outro alfabeto — e as duas ou três pessoas ' +
          'que aprenderam a te ler não descrevem isso como esforço. Descrevem como sorte.',
      ],
    },
  ],

  closing: {
    title: 'Se você reconheceu quase tudo',
    text:
      'Então a única novidade desta página é esta: <strong>nada aqui é particular seu</strong>. ' +
      'A conversa às três da manhã, o alívio quando cancelam, o luto que terminou meses antes do ' +
      'fim, o segundo e meio antes da frase exata — cada uma dessas coisas já foi vivida com essa ' +
      'precisão por gente suficiente para caber num texto como este. O que você tratava como ' +
      'defeito privado é um jeito de funcionar, com vantagens caras e custos evidentes, e nenhum ' +
      'deles te torna difícil de amar. Difícil de conhecer rápido, sim — e isso tem conserto do ' +
      'lado de fora: basta alguém disposto a ficar mais que noventa segundos. Vale te dizer, ' +
      'porque provavelmente ninguém disse: essas pessoas existem, e você já reconheceria uma.',
  },
};
