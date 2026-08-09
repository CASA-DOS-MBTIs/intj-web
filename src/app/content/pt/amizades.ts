import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const AMIZADES_PT: ArticlePageContent = {
  meta: {
    title: 'Amizades — poucas, longas e sem manutenção | INTJ',
    description:
      'Amizade para quem roda Ni–Te–Fi–Se: por que a conta é curta, o que constrói vínculo, ' +
      'por que conversa fiada é cara, o corte sem aviso, a rede que seca e o contato agendado.',
  },

  sources: [
    'baumeister-leary-1995',
    'holt-lunstad-2010',
    'dyrenforth-2010',
    'jung-1921',
    'myers-1998-manual',
    'myers-1980-gifts',
    'keirsey-1998',
    'mbf-ethics',
    'leikas-ilmarinen-2017',
    'stein-swan-2019',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Vínculos — Amizades',
    title: 'Amizade para quem\nnão faz manutenção',
    lede:
      'Você tem menos amigos do que a maioria das pessoas da sua idade, e sabe disso há muito ' +
      'tempo. O que talvez ninguém tenha te dito é que a conta curta não é o defeito — o defeito ' +
      'é que a amizade, no seu caso, se sustenta em outra coisa que não presença frequente, e ' +
      '<em>ninguém te explicou qual</em>. Esta página é sobre essa outra coisa, e sobre o que ' +
      'acontece com todo mundo quando ela para de rodar.',
  },

  intro:
    'Amizade é o vínculo que o INTJ menos administra. O trabalho tem método, o amor tem atenção, ' +
    'a família tem obrigação — a amizade não tem nada disso, e por isso é a primeira coisa que ' +
    'desaparece quando um projeto grande te engole. Não por decisão: por <em>ausência</em> de ' +
    'decisão. E como quase tudo que se perde por omissão, você só percebe muito depois, quando a ' +
    'lista de pessoas para quem daria para ligar já encolheu sozinha.',

  caveat:
    'Não existe pesquisa sobre amizade por tipo. Ninguém contou amigos de INTJs, mediu duração de ' +
    'vínculo por sigla ou comparou redes sociais entre as dezesseis combinações. O que existe é ' +
    'literatura descritiva de tipo — observação acumulada, nunca testada — e pesquisa geral sobre ' +
    'pertencimento e saúde, que vale para seres humanos e não para uma sigla. Esta página, ' +
    'portanto, descreve padrões e mecanismos plausíveis, e invoca evidência em três pontos, ' +
    'todos sinalizados no lugar: a frequência do tipo, que vem de uma amostra americana do ' +
    'manual do MBTI; a semelhança de personalidade, medida em casais e com traços, não em ' +
    'amizades e não com siglas; e o trecho sobre solidão. Nos três, os estudos são sobre gente ' +
    'em geral, você incluído — nunca sobre INTJs. Se alguma descrição aqui não for sua, ela está ' +
    'errada sobre você — e não o contrário.',

  sections: [
    {
      eyebrow: 'A contagem',
      title: 'Por que são poucas — e por que isso não é falta',
      paragraphs: [
        'Faça a lista honesta: as pessoas para quem você ligaria às três da manhã, sem ensaiar a ' +
          'primeira frase. Cabe numa mão, e provavelmente sobra dedo. Em algum momento você já ' +
          'comparou essa lista com a de outras pessoas e concluiu que havia algo errado com a sua.',
        'O mecanismo é menos dramático do que a conclusão. Ni faz o que a literatura de tipo ' +
          'posterior descreve como convergir — o termo é dela, não de Jung nem do manual: ele ' +
          'pega os primeiros sinais de alguém e fecha uma leitura inteira antes da segunda ' +
          'conversa, para onde essa pessoa vai, o que ela faz sob pressão, se o que ela diz e o ' +
          'que ela faz são a mesma coisa. Você não está rejeitando gente. Você está fechando uma ' +
          'pergunta cedo demais, e depois tratando a resposta provisória como definitiva. Some a ' +
          'isso uma aritmética que o resto do mundo faz sem rigor: cada vínculo custa alguma ' +
          'coisa, e você orça esse custo. A frase pronta — introvertido gasta energia, ' +
          'extrovertido ganha — é vocabulário de tipo, não medida: num estudo de experiência ' +
          'momentânea com 48 pessoas, o comportamento extrovertido produziu ganho imediato de ' +
          'humor e mais fadiga três horas depois, nos dois grupos igualmente, sem que o traço ' +
          'extroversão moderasse nada. É pouca gente e um estudo só; serve para tirar o ' +
          '“portanto” da frase, não para trocá-la por outra. O que te distingue não é a fatura. É ' +
          'a disposição de pagá-la. Poucos amigos não é uma escolha filosófica. É um orçamento.',
        'Nada disso está medido. As tabelas de frequência que circulam — a mais sólida é a ' +
          'amostra nacional de cerca de três mil pessoas do manual do MBTI, e é americana — ' +
          'dizem apenas quantos INTJs existem, nunca quantos amigos cada um tem. O retrato de ' +
          'redes pequenas e profundas é descrição acumulada há décadas por quem escreve sobre ' +
          'tipo, e nunca virou dado. Leia como retrato.',
        'E o que importa mais do que o número: três pessoas que sabem quem você é de verdade é ' +
          'mais vida social do que quarenta contatos que sabem o seu cargo. A conta curta só vira ' +
          'problema num caso — quando ela encolhe sem que você tenha decidido nada. É desse caso ' +
          'que trata o resto da página.',
      ],
    },
    {
      eyebrow: 'A forma',
      title: 'O silêncio que não cobra nada',
      paragraphs: [
        'Oito meses sem se falarem. Aí cai uma mensagem — sem “oi, sumido”, sem cobrança, sem ' +
          'preâmbulo — que continua exatamente a conversa interrompida em fevereiro. Um link, uma ' +
          'pergunta técnica, uma piada que só faz sentido para dois. E a amizade não perdeu um ' +
          'grau. Nenhum dos dois achou estranho. Nenhum dos dois pediu desculpa.',
        'Isso é raro e é seu. Para você, um vínculo é <strong>estado</strong>, não fluxo: fica ' +
          'guardado inteiro, com o modelo da pessoa dentro, e não se degrada com o tempo porque o ' +
          'tempo não é ingrediente dele. Para a maior parte das pessoas, vínculo é fluxo — feito ' +
          'de contato recente e acumulado, e portanto sujeito a evaporar. Duas arquiteturas ' +
          'diferentes de guardar a mesma coisa.',
        'O ponto cego mora exatamente aí. Você não sente o silêncio passar, então não imagina que ' +
          'do outro lado ele esteja sendo somado. A pessoa não está achando que você a odeia; ela ' +
          'está sentindo, mês após mês, uma retirada gradual — e retirada gradual é indistinguível ' +
          'de perda de interesse por quem está de fora da sua cabeça. A amizade de baixa ' +
          'manutenção só funciona entre duas pessoas que assinaram o mesmo contrato. Com quem não ' +
          'assinou, ela precisa ser dita em voz alta.',
      ],
      points: [
        'Você não sente falta na frequência em que a outra pessoa sente — e isso não mede o ' +
          'quanto ela importa.',
        'Você quase nunca inicia; quando inicia, é porque apareceu um assunto, não porque bateu ' +
          'uma saudade sem objeto.',
        'Cancelar te alivia mais do que sair te anima — e você gosta genuinamente da pessoa que ' +
          'acabou de cancelar.',
        'A lealdade não oscila: quem entrou está dentro, e você faria coisas desproporcionais por ' +
          'alguém com quem não fala há um ano.',
      ],
    },
    {
      eyebrow: 'O combustível',
      title: 'Amizade não nasce de tempo junto — nasce de problema junto',
      paragraphs: [
        'Repare em como as suas amizades de verdade começaram. Quase nenhuma começou num evento ' +
          'social. Começaram num projeto que deu errado, numa disciplina que quase reprovou os ' +
          'dois, num plantão de madrugada atrás de um bug, num chefe insuportável em comum, na ' +
          'crise de alguém que você decidiu resolver. Um objeto no meio — e a pessoa entrou junto ' +
          'com ele.',
        'Faz sentido pelo motor. Te precisa de um objeto para operar: dê a ele um problema e a ' +
          'sua atenção tem onde sentar, a conversa tem critério, o silêncio no meio não incomoda ' +
          'ninguém. Sem objeto, sobra a tarefa de gerar interação por si mesma, que é a única ' +
          'coisa social que você realmente não sabe fazer. Não é timidez. É que a máquina não ' +
          'liga no vazio.',
        'A consequência prática é simples e quase ninguém usa: se você quer aproximar alguém, não ' +
          'convide para um café — convide para construir alguma coisa. Consertar, montar, ' +
          'planejar, jogar, cozinhar, ler o mesmo livro e brigar por causa dele. E a consequência ' +
          'incômoda, que explica metade das suas perdas: como o objeto é o que sustenta, quando o ' +
          'objeto acaba a amizade tende a ir junto. O emprego termina, o curso termina, o projeto ' +
          'entrega — e some uma pessoa de quem você gostava de verdade, sem que nada tenha ' +
          'acontecido entre vocês. Converter colega em amigo é um ato deliberado. Se você não ' +
          'fizer de propósito, não acontece.',
      ],
    },
    {
      eyebrow: 'Conversa fiada',
      title: 'Não é que você deteste — é que custa caro',
      paragraphs: [
        'Você não tem nada contra falar do tempo. O que você tem é uma fatura. Conversa de ' +
          'superfície exige produzir fala em tempo real sobre um assunto que não tem estrutura, ' +
          'sem nada para concluir no fim — e o seu processo dominante trabalha convergindo, no ' +
          'vocabulário da literatura de tipo posterior; o termo é dela, não de Jung nem do ' +
          'manual. Não há para onde convergir em “como foi o fim de semana”. Sobra simular uma pessoa que ' +
          'está gostando daquilo. A simulação é o que cansa, não a conversa.',
        'Jung descreveu a intuição introvertida como percepção voltada para as imagens de fundo ' +
          'da própria consciência, e não para o que está diante dos olhos — chegando pronta, sem ' +
          'cadeia de raciocínio que a justifique. Ele estava descrevendo retratos extremos a ' +
          'partir de observação clínica, sem amostra, questionário nem estatística; tome como ' +
          'metáfora útil e não como achado. Mas se a descrição vale, ela explica por que a fala ' +
          'de superfície não é preguiça sua: não há ali nada em que o processo consiga morder.',
        'Agora a parte que costuma faltar. Conversa fiada não é conteúdo vazio: é ' +
          '<strong>protocolo</strong>. Um aperto de mão barato que anuncia “não sou ameaça e ' +
          'tenho tempo para você”, e que serve para a outra pessoa testar se a porta está aberta ' +
          'antes de arriscar qualquer coisa que importe. Quando você pula direto para o assunto, ' +
          'não está sendo eficiente — está começando a transferência sem o aperto de mão, e ' +
          'metade das vezes o outro lado descarta o pacote. Trate como pedágio, não como ' +
          'conversa: cinco minutos de nada compram uma hora de alguma coisa. É o melhor câmbio ' +
          'disponível para você.',
      ],
    },
    {
      eyebrow: 'Quem dura',
      title: 'As duas pessoas que ficam',
      paragraphs: [
        'A primeira é a que não personaliza a sua ausência. Costuma ser alguém com uma vida ' +
          'própria absorvente demais para ficar contando semanas — ela também sumiu, e por isso o ' +
          'seu sumiço não vira assunto. Com essa pessoa a amizade sobrevive a mudanças de cidade, ' +
          'de emprego e de década, e volta sempre no mesmo lugar em que parou. Você não precisa ' +
          'explicar o seu funcionamento para ela. É a única categoria em que isso é verdade.',
        'A segunda é a que traz o que Ni não fabrica sozinho. Você produz profundidade e ' +
          'direção; não produz novidade externa, nem corpo, nem presente. Essa pessoa aparece com ' +
          'um plano sem motivo, arrasta você para fora de casa, liga sem pauta, nota que o ' +
          'restaurante mudou o cardápio, ri de coisas que você jamais teria considerado ' +
          'engraçadas. Você a acha levemente cansativa — e é exatamente esse o serviço. Ela é a ' +
          'sua entrada de dados novos num sistema que, sozinho, só recircula os antigos.',
        'As duas têm um requisito, e é modesto: prova de vida. Não é presença, não é frequência, ' +
          'não é conversa longa. É um sinal ocasional de que elas continuam existindo dentro da ' +
          'sua cabeça — porque, do lado de fora, ninguém enxerga a sua lealdade. Ela é invisível ' +
          'por construção.',
      ],
      points: [
        'Sinal de que vai durar: ela responde depois de três semanas com a mesma naturalidade ' +
          'com que você respondeu depois de três meses.',
        'Sinal de que vai durar: dá para discordar dela em voz alta, com todas as letras, sem ' +
          'que o vínculo entre em risco.',
        'Sinal de que não vai: cada silêncio seu vira uma conversa sobre o silêncio.',
        'Sinal de que não vai: a amizade só existe dentro de um contexto — o trabalho, o curso, ' +
          'o grupo — e nenhum dos dois nunca tentou tirá-la de lá.',
      ],
    },
    {
      eyebrow: 'Tipos, com cuidado',
      title: 'Como essas amizades costumam ser',
      paragraphs: [
        'A página de compatibilidade já diz o essencial, e vale repetir aqui antes de qualquer ' +
          'sigla: nunca se mostrou que emparelhar quatro letras preveja qualidade ou duração de ' +
          'vínculo. Um dos maiores estudos sobre semelhança de personalidade e satisfação — ' +
          '23.250 pessoas, cerca de onze mil e seiscentos casais casados, em amostras ' +
          'nacionalmente representativas de três países — encontrou efeitos de semelhança perto ' +
          'de zero: descontados os traços de cada um, menos de meio por cento da variância. O que ' +
          'a pessoa é pesa muito mais do que o quanto ela se parece com você. Foi medido em ' +
          'casais, não em amizades, e com traços, não com MBTI. ' +
          'Ainda assim é o que existe de mais próximo, e aponta na direção contrária à das ' +
          'tabelinhas de combinação. A orientação ética da própria Fundação Myers & Briggs é ' +
          'explícita: tipo não serve para selecionar pessoas. O que vem abaixo não é um ranking ' +
          'nem uma previsão de encaixe — é como a amizade costuma <em>parecer</em> quando ela ' +
          'acontece.',
        '<strong>Com ENFP e com ENTP.</strong> O par mais citado com o INTJ, e por um motivo ' +
          'concreto: chegam com doze ideias, você mata nove, e a amizade não sofre — para eles a ' +
          'ideia morta era rascunho, não filha. Trazem movimento, gente nova e planos sem ' +
          'justificativa, que é exatamente o que você não fabrica sozinho. O atrito aparece do ' +
          'seu lado: a sua ausência é longa, e do lado de lá ela raramente é lida como pausa. ' +
          'Nada disso foi medido em ninguém; é retrato de literatura descritiva, aplicado ao caso ' +
          'em que uma das duas pessoas é você.',
        '<strong>Com um INTP, ou com outro INTJ.</strong> O silêncio não te custa nada e não ' +
          'custa nada a ele, a conversa vai fundo em dez minutos, e discordar é sinal de ' +
          'respeito, não de risco. O problema é específico e quase cômico: nenhum dos dois ' +
          'inicia. Você e alguém que também detesta ser o primeiro a mandar mensagem podem passar ' +
          'dois anos gostando muito um do outro à distância, cada um achando que foi o outro que ' +
          'se afastou. Aqui, escrever primeiro não é ceder. É a única coisa que impede a amizade ' +
          'de morrer de simetria.',
        '<strong>INFJ e ENFJ.</strong> São os que nomeiam em voz alta o que você estava ' +
          'circulando sem palavra, e a amizade fica profunda rápido demais para o seu conforto. ' +
          'O atrito aparece no tempo: eles querem tratar o sentimento na hora em que ele ' +
          'acontece, e você precisa de três dias e uma caminhada para saber o que sentiu. Dizer ' +
          'isso resolve quase todo o problema.',
        '<strong>ISTP e ESTP.</strong> Amizade feita de fazer. Ninguém pergunta como você está; ' +
          'vocês consertam a moto, escalam, cozinham, atiram, dirigem em silêncio — e em algum ' +
          'ponto da tarde você contou uma coisa que não tinha contado a ninguém. Eles te trazem ' +
          'para o presente sem exigir que você fale sobre o presente, o que é a única forma de ' +
          'isso funcionar em você.',
        '<strong>Com ISFJ e com ESFJ.</strong> São eles que mantêm o calendário que você não ' +
          'mantém: lembram do seu aniversário, perguntam do resultado do exame, sustentam um ' +
          'contato que sem eles teria secado — e por isso muitas vezes são a razão de você ainda ' +
          'ter amigos de quinze anos atrás. O atrito ' +
          'é com o formato: rituais obrigatórios, indireta em vez de frase, e a expectativa de ' +
          'reciprocidade na mesma moeda. A moeda pode ser outra, desde que você diga qual é.',
        'E a observação que vale mais do que todas as anteriores: as amizades que você de fato ' +
          'tem hoje provavelmente não obedecem a nada disso. Elas obedecem a quem apareceu numa ' +
          'hora difícil e não foi embora.',
      ],
    },
    {
      eyebrow: 'Dois modos de perder',
      title: 'O corte sem aviso e a rede que seca',
      paragraphs: [
        'Existe uma pessoa que foi sua amiga e não é mais, e ela não sabe por quê. Houve uma ' +
          'mentira, uma deslealdade, uma crueldade com alguém mais fraco, um valor atropelado com ' +
          'naturalidade na frente dos seus olhos — e por dentro o veredito foi instantâneo e ' +
          'final. Nada explodiu depois disso. As respostas foram ficando mais curtas, os intervalos ' +
          'mais longos, e o vínculo acabou por atrito até virar nada. Você não precisou de raiva. ' +
          'Precisou só de certeza. Fi assina esse tipo de sentença sem levar o caso a júri.',
        'Às vezes o corte estava certo. Há coisas que de fato encerram uma amizade, e ficar teria ' +
          'custado mais caro do que sair. O que quase nunca está certo é a ausência da frase — e ' +
          'ela cobra em dois lugares. Do lado de lá, uma pessoa perdeu um amigo sem receber a ' +
          'informação que a impediria de repetir aquilo com a próxima. Do lado de cá, e este é o ' +
          'que te interessa mais: você nunca teve que testar a sua leitura. Ni concluiu, Te ' +
          'executou, Fi assinou, e ninguém no processo perguntou à outra parte se a reconstrução ' +
          'dos fatos batia. Duas linhas — “você fez X, e isso é linha vermelha para mim” — custam ' +
          'dez minutos de desconforto e são o único jeito de descobrir se você estava certo. Você ' +
          'sai da conversa com o corte confirmado ou com um amigo. Os dois desfechos são melhores ' +
          'do que o silêncio.',
        'O segundo modo é pior justamente porque não tem história. Ninguém traiu ninguém. O ' +
          'projeto acabou, as mensagens rarearam, você deixou uma sem responder porque estava no ' +
          'meio de algo e respondeu na cabeça, o convite de dezembro você recusou por cansaço ' +
          'legítimo. Passam-se meses. E um dia, no meio de uma semana ruim, você percebe que a ' +
          'lista das três da manhã tem um nome só, e que esse nome também não escreve há tempo. ' +
          'Nada quebrou. A manutenção só parou — e rede sem manutenção não fica parada, ela ' +
          'seca. A crueldade está no cronograma: isso acontece exatamente nos períodos em que ' +
          'você está mais absorvido pelo trabalho, que são exatamente os períodos que costumam ' +
          'terminar precisando de gente.',
      ],
    },
    {
      eyebrow: 'A conta que o corpo cobra',
      title: 'A solidão é real mesmo quando a solidão foi escolhida',
      paragraphs: [
        'Você já disse a frase, e talvez acredite nela: “eu não preciso de gente”. Metade é ' +
          'verdade — você precisa de muito menos contato do que a média, tolera períodos longos ' +
          'de isolamento sem sofrer e trabalha melhor sozinho do que quase todo mundo. A outra ' +
          'metade é uma afirmação que o corpo não aceita, e vale saber o que existe de evidência ' +
          'antes de decidir o que fazer com ela.',
        'Em 1995, Baumeister e Leary revisaram a literatura disponível e argumentaram que ' +
          'pertencer não é uma preferência de temperamento e sim uma motivação humana ' +
          'fundamental: propuseram critérios para o que faria de uma necessidade uma necessidade ' +
          '— aparecer em todas as culturas, organizar cognição e emoção, produzir consequências ' +
          'quando frustrada — e defenderam que o vínculo os cumpre. É um artigo de revisão e ' +
          'argumento, não um experimento; é também um dos textos mais citados da psicologia ' +
          'social. O que ele sustenta é modesto e incômodo: preferir pouca gente não é o mesmo ' +
          'que não precisar de gente.',
        'Em 2010, Holt-Lunstad, Smith e Layton juntaram 148 estudos de acompanhamento — 308.849 ' +
          'pessoas, seguimento médio de sete anos e meio — e encontraram associação entre ' +
          'relações sociais mais fortes e maior probabilidade de sobrevivência ao longo do ' +
          'período observado: cinquenta por cento a mais, com intervalo de confiança estreito. Os ' +
          'próprios autores comparam a magnitude à de parar de fumar, e a colocam acima de ' +
          'obesidade e sedentarismo. Duas ressalvas, que a própria literatura faz e que você faria em três ' +
          'segundos: é associação, não causa demonstrada, e a direção não está resolvida, porque ' +
          'quem adoece também perde contatos. Nada disso permite prescrever uma dose. Permite ' +
          'apenas parar de tratar rede social como enfeite.',
        'E o registro em que isso precisa ser lido: não é para te dizer que você deveria sair ' +
          'mais. É para dizer uma coisa mais específica e mais útil — a solidão que dói em você, ' +
          'nas noites em que dói, não é fraqueza nem contradição com o seu tipo. Você pode ter ' +
          'escolhido o isolamento inteiramente de propósito e ainda assim sentir falta. As duas ' +
          'coisas cabem na mesma pessoa, e a segunda não invalida a primeira. O que não funciona ' +
          'é usar “eu sou introvertido” como resposta a um sintoma.',
      ],
    },
    {
      eyebrow: 'A correção',
      title: 'Contato agendado — funciona por ser sistema, não impulso',
      paragraphs: [
        'O conselho padrão é “mande mensagem quando sentir vontade”, e ele não funciona em você. ' +
          'Vale entender por quê, em vez de se culpar: o impulso não chega. Saudade, no seu caso, ' +
          'raramente é um alarme que dispara — é uma constatação que aparece tarde, geralmente já ' +
          'com o problema formado, do tipo “faz quanto tempo mesmo?”. Um sistema que depende de ' +
          'um sinal que o seu hardware não emite está quebrado por projeto.',
        'A correção é colocar a amizade no mesmo lugar em que você coloca todas as outras coisas ' +
          'importantes que não dão vontade de fazer: no calendário. Nomes escritos, lembrete ' +
          'recorrente, mensagem enviada quando o lembrete toca — e não quando o sentimento ' +
          'aparece. É o único método que respeita a sua arquitetura em vez de exigir uma que você ' +
          'não tem. E é, provavelmente, o ajuste de maior retorno em toda esta página.',
        'Você vai achar isso frio, e alguém a quem você contar vai achar também. Vale responder à ' +
          'objeção com precisão: o amigo extrovertido que lembra sozinho do seu aniversário e o ' +
          'lembrete que você configurou entregam exatamente a mesma coisa na outra ponta — a ' +
          'prova de que aquela pessoa existe dentro da sua cabeça. A diferença está só em qual ' +
          'parte de você fez o trabalho. <strong>Você não é menos amigo por usar Te para executar ' +
          'o que Fi já decidiu.</strong> É o que você faz com todo o resto da sua vida, e ' +
          'funciona.',
      ],
      points: [
        'Cinco a oito nomes, escritos. A lista é curta de propósito: não é agenda social, é ' +
          'sistema de retenção.',
        'Um lembrete recorrente por nome — mensal para os centrais, trimestral para o resto. ' +
          'Recalibre depois de um ano de dados reais.',
        'A mensagem não precisa ter assunto. Um link, uma lembrança, “vi isso e lembrei de ' +
          'você”. O que se entrega é sinal de vida, não conteúdo.',
        'Um encontro presencial por trimestre, com objeto: consertar, montar, andar, cozinhar, ' +
          'jogar. Café sem pauta é o formato em que você é pior.',
        'Quando alguém importante some, seja você a mandar — uma vez, sem cobrança. Se não ' +
          'voltar, você fez a sua parte, e saber disso vale mais do que ter razão.',
      ],
    },
  ],

  closing: {
    title: 'Poucas, e vivas',
    text:
      'Ninguém aqui vai te pedir para virar outra pessoa. A amizade que funciona em você é mesmo ' +
      'essa: pouca, longa, silenciosa, sem manutenção visível, com uma lealdade que a maior parte ' +
      'das pessoas nunca vai receber de ninguém na vida inteira. O único ajuste que este texto ' +
      'pede é minúsculo perto disso — <strong>manter a lista viva</strong>. Um sinal de vez em ' +
      'quando, para que o dia em que você precisar não seja o dia em que você descobre que parou ' +
      'de existir na cabeça das pessoas. Você é muito bom em construir sistemas para o que ' +
      'importa. Construa um para as quatro pessoas que importam.',
  },
};
