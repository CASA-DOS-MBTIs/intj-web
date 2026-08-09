import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const PARA_QUEM_AMA_PT: ArticlePageContent = {
  meta: {
    title: 'Para quem ama um INTJ — o que ele não disse',
    description:
      'A única página deste site que não é escrita para o INTJ. É para o parceiro, o pai, o ' +
      'irmão, o amigo: o que o silêncio é, o que perguntar no lugar do óbvio, e o que dói de ' +
      'verdade.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-basics',
    'mbf-ethics',
    'quenk-2002-grip',
    'reynierse-2009',
    'who-2019-icd11-burnout',
    'bianchi-2015',
    'baumeister-leary-1995',
    'dyrenforth-2010',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Carta aberta — Para quem ama um INTJ',
    title: 'Para quem ama\num INTJ',
    lede:
      'É provável que você não tenha procurado esta página: alguém te mandou o link. Talvez sem ' +
      'comentário nenhum, talvez com um “lê isso”. Repare no que acabou de acontecer — a pessoa ' +
      'preferiu que um texto explicasse por ela. Não é preguiça nem covardia. É a forma mais ' +
      'precisa que ela encontrou de dizer uma coisa que, falada, sairia errada.',
  },

  intro:
    'Todas as outras páginas deste site são escritas em segunda pessoa, para um INTJ. Esta é a ' +
    'única escrita para <strong>você</strong> — a pessoa que ama, cria, aguenta, divide a casa ou ' +
    'a sala com um. Não é um manual de instruções, e não vai tratar quem você ama como um ' +
    'aparelho com defeito de fábrica. É uma tradução, nos dois sentidos: o que certos ' +
    'comportamentos costumam significar por dentro, e o que costuma funcionar melhor do que o ' +
    'instinto que você teria.',

  caveat:
    'Duas honestidades antes de começar. A primeira: o MBTI, pelo próprio manual do instrumento, ' +
    'ordena preferências declaradas e para por aí — não mede maturidade, caráter nem capacidade ' +
    'de amar, e a própria Fundação Myers & ' +
    'Briggs é explícita ao dizer que nenhum tipo vale mais que outro, que o instrumento não mede ' +
    'habilidade, competência nem perícia, e que o tipo não dita o comportamento de ninguém. ' +
    'Nada aqui explica ou desculpa desprezo, ' +
    'crueldade ou abandono; se é isso que você vive, o tipo não é a explicação, e esta página não ' +
    'é o lugar certo para procurar uma. A segunda: o que vem abaixo são padrões observados em ' +
    'pessoas que se identificam com esse tipo, não leis sobre uma pessoa específica. Se metade ' +
    'disto não reconhecer quem você tem em casa, confie na pessoa e descarte a metade.',

  sections: [
    {
      eyebrow: 'O silêncio',
      title: 'O que o silêncio é — e o que ele não é',
      paragraphs: [
        'Ele fica quieto e você começa a fazer contas. Foi alguma coisa que eu disse? Ontem estava ' +
          'bem. O silêncio de um INTJ é a parte mais mal-lida do repertório dele, e por um motivo ' +
          'razoável: se parece exatamente com o silêncio que, na maioria das pessoas, significa ' +
          'mágoa.',
        'Quase sempre não é. O que está acontecendo é uma conclusão se formando sem linguagem. ' +
          'Enquanto o pensamento não fecha, não há o que dizer — não porque ele esteja escondendo, ' +
          'mas porque aquilo literalmente ainda não existe em palavras. E quando finalmente ' +
          'existe, começa o segundo problema, que é o que Jung descreveu em 1921: o intuitivo ' +
          'introvertido dele não é alguém que se cala, é alguém que fala e não é compreendido — ' +
          'a fala dessa pessoa “não é aquela que se fala comumente”, e por isso os argumentos ' +
          'dela não convencem na medida em que deveriam. É observação clínica de um psiquiatra ' +
          'atento, não resultado de experimento — mas as duas metades juntas descrevem bem o que ' +
          'você tem visto no sofá: primeiro não há palavra, depois há palavra e ela não passa.',
        'Vale o mesmo para os silêncios longos. Uma noite inteira sem assunto, um fim de semana ' +
          'com pouca conversa, três semanas sem notícia de um amigo INTJ: na maior parte das vezes ' +
          'isso é descanso, não retirada. Quanto o silêncio custa por dentro, nem ele sabe medir ' +
          '— mas descanso não é avaliação: ele não está te julgando durante. Quando for a outra ' +
          'coisa, ela tem sinais próprios, e o parágrafo seguinte é sobre eles.',
        'Existe, claro, o silêncio que <em>é</em> retirada, e você merece saber diferenciar. O ' +
          'sinal não é a duração, é a temperatura. Um INTJ magoado não fica frio de repente: fica ' +
          'educado. As respostas encurtam, ficam corretas, param de ter opinião dentro. Cortesia é ' +
          'o que sobra quando ele desistiu de discutir.',
      ],
      points: [
        'Silêncio de processamento: continua na mesma sala, aceita companhia, responde se você fala.',
        'Silêncio de recarga: quer a porta fechada, volta em algumas horas e volta melhor.',
        'Silêncio de retirada: respostas curtas, corteses e sem discordância nenhuma.',
        'Na dúvida, pergunte uma coisa só: “isso é comigo?”. Vale mais que uma noite de dedução.',
      ],
    },
    {
      eyebrow: 'A pergunta',
      title: 'Por que “no que você está pensando?” devolve nada',
      paragraphs: [
        'Você pergunta com carinho legítimo e recebe “nada”. Não é evasiva. É que a resposta ' +
          'honesta, dependendo do minuto, ficaria entre “na arquitetura de um problema que eu não ' +
          'consigo explicar sem quarenta minutos de contexto” e “literalmente em nada, eu estava ' +
          'olhando a parede”. As duas soam mal. “Nada” é o arredondamento.',
        'A pergunta é larga demais para o que ela quer alcançar. Ela pede que ele transforme em ' +
          'frase, ao vivo e sem preparo, um processo que ainda está convergindo — e improviso é ' +
          'justamente a coisa que ele faz pior. O resultado é ele travando, você lendo o travamento ' +
          'como distância, e os dois saindo da conversa piores do que entraram.',
        'O que funciona é o contrário: pergunta estreita, respondível com um fato, e uma porta de ' +
          'volta. Pergunte sobre o objeto, não sobre o estado. Ele responde sobre coisas com uma ' +
          'facilidade que nunca terá para responder sobre si mesmo — e quase sempre, se o assunto ' +
          'for pelo objeto, ele chega em si mesmo sozinho, três frases depois.',
      ],
      points: [
        '“Você está resolvendo alguma coisa aí?” — dá para responder com sim ou não.',
        '“Isso é trabalho ou é outra coisa?” — divide o mundo em duas caixas e ele escolhe uma.',
        '“Quer me contar quando fechar?” — reconhece que ainda não fechou e agenda a conversa.',
        '“De zero a dez, quanto disso é comigo?” — número é uma língua que ele fala fluentemente.',
        'E o silêncio depois da resposta: ele quase sempre completa sozinho, se você não preencher.',
      ],
    },
    {
      eyebrow: 'O conserto',
      title: 'Resolver o seu problema é como o afeto sai',
      paragraphs: [
        'Você conta um dia ruim e, antes da segunda frase, já existe um diagnóstico e três passos. ' +
          'Você queria colo e recebeu consultoria. É muito fácil ler isso como frieza. É quase ' +
          'sempre o oposto.',
        'O que ele fez foi apontar para o seu problema a melhor coisa que ele tem. A cabeça dele ' +
          'trata o que importa transformando em algo que pode ser resolvido; quando você entra na ' +
          'lista das coisas que importam, você começa a ser otimizado em silêncio. Vale separar ' +
          'de quem é o quê. Isabel Myers construiu o modelo inteiro em torno da ideia de que os ' +
          'tipos são recursos complementares e não versões incompletas de um único jeito certo de ' +
          'ser — é uma tese dela, sustentada por observação e não por experimento. Que resolver o ' +
          'problema de alguém seja a forma como o afeto sai, isso ela não escreveu em lugar ' +
          'nenhum: essa parte é leitura desta página. Continua sendo a lente mais útil aqui: o ' +
          'que chegou até você não foi indiferença, foi atenção total, entregue no único formato em ' +
          'que ele sabe embrulhar.',
        'Redirecionar é simples, e a frase que funciona é literalmente esta: “eu quero companhia, ' +
          'não solução”. Ela funciona muito melhor dita <em>antes</em>. Dita no meio, depois de ele ' +
          'já ter começado a construir, o que chega é “o que você fez não presta” — e essa é uma ' +
          'das poucas coisas que ele leva para casa. Dita antes, o que chega é uma especificação, e ' +
          'especificação é a coisa que ele mais gosta de receber no mundo.',
        'A contrapartida é justa e quase ninguém faz: deixe ele resolver alguma coisa de vez em ' +
          'quando, mesmo que você não precisasse. Recusar sistematicamente a ajuda dele não é ' +
          'recusar um conselho — é recusar a língua inteira, e depois de um tempo ele para de ' +
          'oferecer. O silêncio que vem desse cansaço é o único que você deveria temer.',
      ],
    },
    {
      eyebrow: 'A memória',
      title: 'Ele lembra de tudo e não repete nada',
      paragraphs: [
        'O nome da sua chefe, o remédio a que você é alérgico, a frase que a sua mãe disse em uma ' +
          'ceia de 2019 e que você fingiu não ter ouvido. Está tudo guardado, com data. E você ' +
          'provavelmente nunca vai ouvir nada disso de volta em forma de “eu lembro que você ' +
          'disse”.',
        'Devolver o que você contou parece, para ele, encenação: você já sabe que disse. A memória ' +
          'não fica em forma de transcrição, fica em forma de estrutura — ele não guardou a frase, ' +
          'guardou o que a frase significa sobre a sua vida. Por isso ele não cita: ele age.',
        'É aí que aparece. Na coisa comprada sem comentário quatro meses depois. No caminho que ele ' +
          'passou a fazer porque o outro passava na frente daquele hospital. Na pessoa com quem ele ' +
          'parou de falar sem nunca te explicar por quê, e o motivo era o que ela te fez.',
        'O custo disso é seu, e é real: dá para passar anos sem nenhuma prova audível de estar ' +
          'sendo carregado na cabeça de alguém. Peça a prova. “Eu preciso ouvir de vez em quando ' +
          'que você lembra” é o tipo de pedido que costuma ser atendido sem resistência — não ' +
          'porque o tipo garanta nada, mas porque provavelmente não tinha ocorrido a ele que ' +
          'faltava.',
      ],
    },
    {
      eyebrow: 'A crítica',
      title: 'A obra e a pessoa não são a mesma coisa',
      paragraphs: [
        'Você mostra uma ideia e ela volta desmontada. Você sente que <em>você</em> voltou ' +
          'desmontada. Para ele, testar a sua ideia com força foi a forma de levá-la a sério — e ' +
          'vale saber que ele faz exatamente isso com o próprio trabalho, com mais violência e sem ' +
          'plateia. O que você ouviu é o que ele ouve o dia inteiro por dentro.',
        'Isso não te obriga a aceitar tudo em qualquer momento. Duas frases resolvem quase todo o ' +
          'atrito: “isso eu não trouxe para revisão” delimita, e “me diz primeiro o que está bom” ' +
          'reordena. Nenhuma das duas ofende — ele tende a ler as duas como instruções, e ' +
          'instrução costuma ser a coisa mais fácil de cumprir.',
        'O caminho inverso é o que quase ninguém enxerga, e é onde ele vai mentir para você. ' +
          'Crítica ao caráter dele pega muito mais fundo do que ele jamais vai admitir. “Você é ' +
          'frio”, “você não se importa com ninguém”, “é impossível conviver com você” — dito numa ' +
          'briga e retirado no dia seguinte, isso não é retirado. Não vai haver choro nem porta ' +
          'batendo. Vai haver uma cortesia nova.',
        'E há um descompasso que muda tudo na prática, e que é observação, não engrenagem ' +
          'conhecida: ele costuma descobrir o que sentiu depois de todo mundo. Se você perguntar ' +
          'na hora, é bem provável que ele diga, com sinceridade completa, que está tudo bem — ' +
          'não por evasiva; naquele momento a resposta ainda não está formulada. Pergunte de novo ' +
          'alguns dias depois. A segunda pergunta é a que costuma trazer a resposta. E vale o ' +
          'aviso geral: a própria ideia de funções operando em camadas, com atrasos e acessos, é ' +
          'modelo de tipo, e é a parte do MBTI com a evidência mais fraca — serve para descrever, ' +
          'não para explicar mecanismo.',
      ],
    },
    {
      eyebrow: 'O plano',
      title: 'Quando ele desaparece dentro de uma coisa',
      paragraphs: [
        'Chega um projeto e ele some. Três semanas de monossílabos, refeições puladas, olhos em uma ' +
          'tela às duas da manhã, e você do lado de fora de uma sala onde não pediram sua opinião. ' +
          'Não é sobre você, e isso não torna menos solitário.',
        'Entenda primeiro o preço da interrupção, porque ele nunca vai conseguir explicar sem soar ' +
          'grosseiro. Interromper alguém no meio de um pensamento longo não custa a frase — custa ' +
          'a estrutura que estava sendo segurada na cabeça, sem papel, e remontá-la pode levar ' +
          'muito mais tempo do que durou a interrupção. Isso não é privilégio do tipo e ninguém ' +
          'mediu nele; é o que ele relata, e explica a reação desproporcional a uma pergunta de ' +
          'dez segundos. Avisar de longe resolve quase tudo: “em vinte minutos eu preciso de você” ' +
          'é uma gentileza que ele vai registrar como presente, porque dá tempo de salvar o ' +
          'arquivo.',
        'Para trazê-lo de volta, o que não funciona é o julgamento: “você está trabalhando demais” ' +
          'é uma tese, e teses ele derruba em quinze segundos sem nem se esforçar. O que funciona é ' +
          'concreto e agendado. Peça uma data em vez de uma pausa. Marque hora, dia e lugar — ' +
          'compromisso marcado costuma ser cumprido com uma seriedade quase absurda; pedido ' +
          'difuso costuma ser adiado para sempre, sem má intenção nenhuma.',
        'E prepare-se para o outro extremo, se o esgotamento durar. Naomi Quenk, descrevendo o que ' +
          'chamou de <em>grip</em>, retratou pessoas assim virando o próprio oposto sob estresse ' +
          'prolongado: impulsividade concreta, excessos com comida ou compras, hiperfoco em ' +
          'detalhes irrelevantes, irritação com barulho e luz. É descrição clínica acumulada, não ' +
          'achado de laboratório — mas se você reconhecer a cena, saiba o que ela não é. Não é ele ' +
          'revelando quem realmente era. E saiba também o que ela pode ser: vista de fora, essa ' +
          'cena é indistinguível de esgotamento ocupacional, que a Organização Mundial da Saúde ' +
          'classifica como fenômeno ligado ao trabalho e não como doença, e de um episódio ' +
          'depressivo, que é outra coisa — e a literatura mostra que os dois se sobrepõem o ' +
          'bastante para que ninguém os separe no olho. Sono, comida e menos estímulo ajudam, e a ' +
          'conversa sobre a relação fica muito melhor depois de dormir. Mas se o estado durar ' +
          'semanas, se o desânimo não ceder a descanso, o que falta ali não é paciência sua: é um ' +
          'profissional, e essa distinção não é sua para fazer nem desta página.',
      ],
      points: [
        'Antes de interromper: avise alguns minutos antes, para ele salvar o que está segurando.',
        'Em vez de “você está trabalhando demais”: “quando isso acaba?”.',
        'Em vez de “a gente precisa sair mais”: uma data, uma hora e um lugar.',
        'Em vez de tirar a tarefa dele: ofereça-se para assumir uma tarefa menor — dizendo que vai.',
      ],
    },
    {
      eyebrow: 'A ferida',
      title: 'O que dói de verdade quase nunca é o que parece',
      paragraphs: [
        'Comece pelo que não dói, porque é contraintuitivo. Não dói uma crítica dura ao trabalho. ' +
          'Não dói ser contrariado com um argumento melhor — isso, sinceramente, ele gosta. Não dói ' +
          'passar uma festa inteira em pé no canto. Não dói você discordar dele em público, desde ' +
          'que seja sobre a coisa e não sobre ele.',
        'Dói ser manejado. Dói descobrir que foi assunto de conversa entre outras pessoas na ' +
          'categoria “difícil”. Dói uma coisa dita em privado reaparecer na boca de um terceiro. ' +
          'Dói afeto pedido com plateia. E dói, mais do que tudo, a hora em que ele percebe que uma ' +
          'certeza dele custou alguma coisa a alguém que ele ama — porque a certeza é a ferramenta ' +
          'de que ele mais se orgulha, e essa é a única prova de que ela corta nos dois sentidos.',
        'Ele vai te dizer que não precisa de gente. Baumeister e Leary, revisando a literatura em ' +
          '1995, defenderam que a necessidade de pertencer é uma motivação humana fundamental, e ' +
          'não um traço que algumas pessoas simplesmente não têm. É uma tese teórica sustentada por ' +
          'muita evidência convergente, não uma medição do seu INTJ em particular — mas serve de ' +
          'advertência. Quem diz não precisar de ninguém está descrevendo a própria tolerância à ' +
          'solidão, que costuma ser altíssima. Tolerância não é ausência de necessidade.',
        'O detalhe prático: a mágoa dele não vira briga, vira análise. E a análise, se ninguém ' +
          'interromper, vira conclusão — e conclusão, nele, tem força de decisão. Interromper é ' +
          'ridiculamente simples e quase ninguém faz a tempo. Pergunte. Antes de a conta fechar.',
      ],
    },
    {
      eyebrow: 'O que não muda',
      title: 'O que não vai mudar — e não é para pedir',
      paragraphs: [
        'Ele não vai virar espontâneo. Pode aprender a gostar de uma surpresa específica, depois de ' +
          'ela ter dado certo duas vezes; não vai aprender a gostar de surpresa. Uma variável não ' +
          'planejada não chega como presente, chega como variável não planejada. Isso não é rigidez ' +
          'moral — é o custo de uma cabeça que trabalha simulando o que vem, e que precisa refazer ' +
          'a simulação inteira quando o mundo muda de rota sem avisar.',
        'Ele não vai gostar de demonstrar afeto sob encomenda e com testemunhas. Não é vergonha de ' +
          'você. É que afeto pedido, para ele, deixa de ser verdade e vira desempenho, e desempenho ' +
          'é uma categoria que ele despreza inclusive em si mesmo. O mesmo abraço, dado dois dias ' +
          'depois e sem ninguém olhando, é real — e é o que você vai receber.',
        'E a distância não é sobre você. Esta é a frase mais importante da página. Ele vai querer ' +
          'horas sozinho mesmo estando feliz, mesmo com você em casa, mesmo sem nada errado. A ' +
          'solidão dele não é uma sala onde você não é bem-vindo: é uma sala onde ninguém é. Não ' +
          'existe uma versão dele que passa a vida inteira acompanhado e continua sendo ele.',
        'A tentação natural é pedir que ele seja um pouco mais como você — mais expansivo, mais ' +
          'rápido no afeto, mais presente na superfície das coisas. Vale lembrar que a própria ' +
          'Fundação Myers & Briggs — que vive do instrumento, e ainda assim diz isso — sustenta ' +
          'que nenhum tipo é melhor que outro, que preferência é inclinação e não previsão, e que ' +
          'o resultado não serve para rotular, prever comportamento nem selecionar ninguém. ' +
          'O pedido inverso — que você parasse de precisar de contato para se ' +
          'sentir amado — você reconheceria imediatamente como absurdo. É o mesmo pedido.',
      ],
    },
    {
      eyebrow: 'O que muda',
      title: 'O que ele pode aprender — e é justo você saber',
      paragraphs: [
        'Todas as outras páginas deste site pedem exatamente as mesmas quatro coisas a ele, então é ' +
          'justo que você saiba quais são. Dizer em voz alta, mesmo malfeito, o que já demonstra o ' +
          'tempo todo. Perguntar antes de consertar. Estar no presente e não apenas no que vem ' +
          'depois. E considerar, de vez em quando, que a conclusão a que ele chegou sozinho sobre ' +
          'você pode simplesmente estar errada. Nada disso é traço de personalidade. É habilidade, ' +
          'e habilidade se aprende devagar.',
        'Você pode pedir. Não pode fazer por ele — e há uma diferença enorme entre alguém que ainda ' +
          'não aprendeu e alguém que se recusa. A primeira é lenta e vale a paciência. A segunda já ' +
          'é uma resposta, e você tem o direito de tratá-la como tal.',
        'Quando o progresso vier, ele virá no formato dele, e é fácil não perceber: uma mensagem no ' +
          'meio da tarde sem motivo, uma frase dita de costas enquanto ele lava a louça, um ' +
          '“desculpa, isso saiu errado” dito uma vez só. É isso. Comemore por dentro — comemorar ' +
          'alto transforma o gesto em desempenho, e ele não repete.',
        'Uma última coisa, para tirar peso da sua cabeça: um dos maiores estudos já publicados ' +
          'sobre isso — Dyrenforth e colegas, 2010, 23.250 pessoas, cerca de onze mil e ' +
          'seiscentos casais, na Austrália, no Reino Unido e na Alemanha — encontrou que a ' +
          'semelhança de personalidade entre parceiros explica menos de meio por cento da ' +
          'variância na satisfação com a relação; o que pesava era a personalidade de cada um, e ' +
          'entre os traços que mais afetavam o outro apareceram amabilidade, conscienciosidade e ' +
          'estabilidade emocional. Foi medido com os cinco grandes fatores e não com MBTI, e ' +
          'satisfação não é a ' +
          'mesma coisa que amor. Mas a direção serve: o que vai decidir isso não é a combinação de ' +
          'siglas de vocês dois. É o que cada um faz com o que tem.',
      ],
    },
  ],

  closing: {
    title: 'A frase que ele provavelmente não disse',
    text:
      'Existe, em algum lugar dessa cabeça, uma frase inteira — formulada, revisada, considerada ' +
      'excessiva e arquivada — que diz mais ou menos assim: <em>você é a única coisa da minha vida ' +
      'que eu não quero otimizar; eu já rodei o cenário sem você e a conta dá errado.</em> Ele não ' +
      'vai falar isso. Ele vai consertar a torneira, lembrar do seu remédio, e te mandar o link de ' +
      'uma página. Você pode passar a vida esperando a frase, ou pode ler o que ele vem ' +
      'escrevendo há anos em outro alfabeto. Esta página é a sua permissão para a segunda opção. ' +
      'Não é permissão para ler permanência como prova: ficar, sozinho, não prova nada em ' +
      'ninguém, e tipo não dita comportamento — quem zela pelo uso do instrumento é explícito ' +
      'quanto a isso. O que dá para dizer é menor e mais útil: se ele decide sobre pessoas com a ' +
      'mesma seriedade com que decide o resto, então estar aqui foi decidido, e não herdado. ' +
      '<strong>Vale perguntar a ele. Provavelmente é o único jeito de ouvir a frase.</strong>',
  },
};
