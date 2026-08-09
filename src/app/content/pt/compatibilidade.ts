import type { SourceId } from '../sources';
import type { CompatibilityContent } from '../types';

export const COMPATIBILIDADE_PT: CompatibilityContent = {
  meta: {
    title: 'Compatibilidade — três eixos, a regra e o que a pesquisa diz | INTJ',
    description:
      'Reconhecimento, complemento e convivência medidos em separado para o INTJ contra os ' +
      'dezesseis tipos, com a regra impressa por cima — e as três tradições que apontam três ' +
      'parceiros ideais diferentes, nenhum deles medido.',
  },

  sources: [
    'dyrenforth-2010',
    'montoya-2008-similarity',
    'montoya-horton-2013',
    'kong-2010-mbti-couples',
    'keirsey-1998',
    'keirsey-bates-1978',
    'wikisocion-ili',
    'wikipedia-socionics',
    'augustinaviciute-1998',
    'grant-1983',
    'myers-1980-gifts',
    'myers-1998-manual',
    'mbf-ethics',
    'myers-briggs-company',
    'pittenger-2005',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 10 — Compatibilidade',
    title: 'Três eixos, e a regra\nque os produz',
    lede:
      'Você veio pela porcentagem. Ela não existe — emparelhar siglas e acompanhar o que acontece ' +
      'com os casais já foi feito, é pouco, e não sustenta ranking nenhum; quem publica um número ' +
      'redondo por par está inventando. Esta página já errou duas vezes, e as duas correções estão ' +
      'aqui. A primeira versão tinha um índice só, de sobreposição de funções, e um índice de ' +
      'sobreposição premia semelhança: o primeiro lugar era sempre <strong>outro INTJ</strong>. ' +
      'A segunda partiu a régua em duas — <strong>reconhecimento</strong>, o quanto você é ' +
      'entendido sem traduzir, e <strong>complemento</strong>, o quanto o outro fornece do que a ' +
      'sua pilha não gera sozinha — e caiu no erro simétrico: sem nada medindo o custo do dia a ' +
      'dia, ela recomendava o seu oposto nas quatro letras. Daí o terceiro eixo. ' +
      '<strong>Convivência</strong> mede quanto da vida cotidiana não precisa ser negociado.',
  },

  intro:
    'As regras são publicadas antes dos números e recalculáveis à mão em um minuto: é a única ' +
    'forma honesta de fazer uma página destas. Nenhum tipo ocupa os três cantos ao mesmo tempo, e ' +
    'isso não é defeito da conta — é a forma das dezesseis pilhas. O espelho entende você sem ' +
    'traduzir e divide todas as suas preferências, e mesmo assim fica no meio da tabela, porque ' +
    'não te estica em nada. O ESFP tem as suas quatro funções em ordem quase invertida e é o seu ' +
    'oposto nas quatro letras: fica em último. E o ENFP, que a internet inteira lhe vendeu como ' +
    'destino, não é primeiro nem perto disso. <strong>A ordem é ordem de leitura, não ' +
    'veredito.</strong> A seção de evidência, que vem antes da tabela de propósito, explica por ' +
    'que nada disso prevê coisa alguma sobre a sua vida.',

  caveat:
    'Estes três eixos são construção deste site. Eles não medem nada. Emparelhar tipos MBTI para ' +
    'prever satisfação, duração ou qualidade de um relacionamento já foi tentado, e o pouco que ' +
    'existe não sustenta ranking nenhum: num estudo com 62 casais em atendimento clínico, a ' +
    'semelhança de tipo entre cônjuges não produziu diferença significativa em satisfação ' +
    'conjugal, afeto positivo ou regulação de conflito (Kong, 2010). A fundação que zela pelo uso ' +
    'do instrumento — que não é quem o publica — é explícita ao dizer que ele não foi desenhado ' +
    'para selecionar pessoas e que não mede habilidade, competência ou perícia. As pilhas de ' +
    'quatro funções ' +
    'sobre as quais as regras operam vêm de Grant, Thompson e Clarke (1983): são convenção de um ' +
    'modelo, não achado experimental, e a dinâmica de tipo é justamente a parte do MBTI com o ' +
    'histórico de evidência mais fraco. Leia o reconhecimento como sobreposição de vocabulário ' +
    'entre duas cabeças e o complemento como uma aposta teórica sobre o que falta na sua. Não é ' +
    'previsão, não é conselho, e não é permissão para terminar nada.',

  formula: {
    eyebrow: 'As regras',
    title: 'Como cada número foi produzido',
    intro:
      'As regras operam sobre as pilhas de quatro funções — <strong>Ni · Te · Fi · Se</strong> no ' +
      'seu caso — na convenção de Grant, Thompson e Clarke. Duas propriedades dessas pilhas ' +
      'tornam a conta simples e verificável. A primeira: <strong>todo tipo carrega exatamente uma ' +
      'função de cada eixo</strong> — uma intuição, uma sensação, um pensamento, um sentimento. ' +
      'A segunda: as duas funções de percepção de uma pilha têm sempre atitudes opostas, o que ' +
      'significa que <strong>nenhum tipo carrega Se e Ne ao mesmo tempo</strong>. Reconhecimento ' +
      'percorre as suas quatro funções e pergunta onde cada uma aparece na pilha do outro. ' +
      'Complemento percorre três coisas que a sua pilha não fornece e pergunta o quanto o outro ' +
      'as tem. Convivência não olha para funções: olha para as quatro letras, que é onde mora o ' +
      'custo de uma terça-feira. Os três vão de 0 a 100, e nenhum tipo lidera mais de um.',
    rules: [
      {
        label: 'Ponto de partida, nos três eixos',
        delta: '0',
        note: 'Nada é dado. Uma versão anterior desta página abria todo par em 40 para que a tabela coubesse num intervalo bonito, e isso era maquiagem: três zeros dizem a verdade.',
      },
      {
        label: 'Reconhecimento · peso de cada função sua',
        delta: 'Ni 40 · Te 30 · Fi 20 · Se 10',
        note: 'O eixo pergunta quanto de você a outra pessoa também roda, e as suas quatro funções não valem o mesmo: Ni é o comando e Se é o resto. Os pesos somam exatamente 100, que é o teto do eixo.',
      },
      {
        label: 'Reconhecimento · desconto por distância de posição',
        delta: '×1 · ×0,7 · ×0,4 · ×0,1',
        note: 'Mesma posição na pilha vale o peso inteiro; uma casa de distância vale 70%; duas, 40%; três, 10%. Te em segundo nos dois é o mesmo critério no mesmo instante da decisão; Te em segundo e em quarto é a mesma ferramenta, uma delas quase muda.',
      },
      {
        label: 'Reconhecimento · função de atitude invertida',
        delta: '×0,35',
        note: 'Ne não é Ni e Ti não é Te — mas também não é ausência, e esta linha já valeu ×0. Zerar punha INTP, ENTP, ISFJ e ESFJ exatamente no mesmo número, o que afirmava que um INTP é tão irreconhecível para você quanto um ESFJ. Ninguém acredita nisso. Um terço do peso: raciocinar por coerência interna e raciocinar por eficácia continuam sendo raciocinar, de um jeito que nenhum dos dois divide com quem lê a sala.',
      },
      {
        label: 'Complemento · Se, o corpo e o agora',
        delta: '30 · 50 · 28 · 6',
        note: 'A sua função inferior, pela posição dela na pilha do outro — e <strong>o pico é no auxiliar, não no dominante</strong>. Esta linha já pagou mais para quem lidera com a sua inferior, e era o erro central da página: teoria chama isso de complemento máximo; uma cozinha compartilhada chama de traduzir todo dia. Se em segundo te tira de casa no sábado. Se em primeiro mora lá, e quem visita é você.',
      },
      {
        label: 'Complemento · Ne, a opção mantida aberta',
        delta: '18 · 30 · 17 · 4',
        note: 'Vale para as pilhas que carregam Ne no lugar de Se — as duas nunca coexistem. Ne substitui parte do serviço: reabre o plano fechado por Ni, mas não devolve ninguém ao corpo. Mesma curva, teto menor.',
      },
      {
        label: 'Complemento · Fe, o calor dito para fora',
        delta: '18 · 30 · 17 · 4',
        note: 'A única função de valor que a sua pilha não tem em versão alguma. Zero para quem roda Fi: você já tem Fi, e mais Fi não resolve o problema de ninguém dizer nada em voz alta.',
      },
      {
        label: 'Complemento · dominante extrovertida',
        delta: '+10',
        note: 'Fixo, sem escala. Alguém tem de ir primeiro em direção ao mundo, e a sua pilha abre com uma função introvertida que só vai depois de convergir. Valia +20 e foi reduzido pelo mesmo motivo da curva de Se: ir primeiro ajuda, ir sempre cansa.',
      },
      {
        label: 'Convivência · preferências em comum',
        delta: 'I/E 30 · J/P 30 · N/S 25 · T/F 15',
        note: 'O eixo que faltava. Os outros dois respondem "essa pessoa me entende" e "essa pessoa me estica"; nenhum responde "como é uma terça-feira", e um ranking feito só com os dois recomendava o seu oposto nas quatro letras. Os pesos são o que cada preferência custa a um INTJ, não simetria: introversão decide quanto da semana é recuperação, J/P decide se um plano é um plano. T/F por último, a mais negociável das quatro.',
      },
      {
        label: 'A nota combinada',
        delta: 'média − 0,45 × (maior − menor)',
        note: 'A média dos três eixos, descontada quase metade da distância entre o melhor e o pior. O desconto é o que impede a média de recomendar você mesmo: o espelho marca 100 · 6 · 100 e subiria no lombo de dois eixos. Um par precisa valer alguma coisa nos três. <strong>É uma ordem de leitura, não um veredito</strong> — e ninguém na tabela passa de 45.',
      },
    ],
    disclaimer:
      'Os pesos foram escolhidos, não derivados. Não saíram de dado nenhum: saíram do que a teoria ' +
      'de tipo afirma sobre consciência e controle em cada posição da pilha — e essa teoria é, ' +
      'dentro do MBTI, exatamente a parte com menos apoio empírico. Faça o teste: troque o degrau ' +
      'de 0,7 por 0,5 e o ENTJ cai de 70 para 50, empatando com o ISTJ, e metade da leitura desta ' +
      'página muda de sentido. Duas outras coisas merecem ser ditas em voz alta, porque são a ' +
      'regra confessando o que ela é. A primeira: o reconhecimento chega a 100 uma única vez em ' +
      'dezesseis, e é no espelho — o teto do eixo é um aviso, não um prêmio. A segunda: o ' +
      'complemento nunca chega a 100, e o máximo real é 82, no ESTP. Isso não é compressão da ' +
      'escala; é estrutura. Se dominante e Fe dominante não cabem na mesma pilha, então a coisa ' +
      'que mais lhe falta e a segunda coisa que mais lhe falta jamais serão entregues pela mesma ' +
      'pessoa. Nenhuma sigla resolve você.',
  },

  evidence: {
    eyebrow: 'O que a pesquisa mostra',
    title: 'A melhor notícia desta página é que os números não importam',
    paragraphs: [
      'Existe um estudo grande o bastante para encerrar a discussão, e ele não é sobre MBTI — é ' +
        'sobre personalidade em geral, que é onde há dado. Dyrenforth, Kashy, Donnellan e Lucas ' +
        '(2010) usaram amostras nacionalmente representativas de casais casados na Austrália, no ' +
        'Reino Unido e na Alemanha — 23.250 pessoas, cerca de onze mil e seiscentos casais — para ' +
        'separar três coisas que quase sempre aparecem embaralhadas: o ' +
        'efeito dos traços da própria pessoa, o efeito dos traços do parceiro e o efeito da ' +
        '<em>semelhança</em> entre os dois. O terceiro é o que este tipo de página vende. ' +
        'Descontados os dois primeiros, ele explicou <strong>menos de 0,5% da variância</strong> ' +
        '— na satisfação com o relacionamento e também na satisfação com a vida. Menos de meio ' +
        'por cento. O que previu satisfação foram os traços de cada um: os da própria pessoa ' +
        'responderam por cerca de 6% da variância na satisfação com o relacionamento; os do ' +
        'parceiro, por 1% a 3% — e aí os que mais pesaram foram amabilidade, conscienciosidade e ' +
        'estabilidade emocional.',
      'Repare no que isso faz com o eixo do reconhecimento em particular. Ele é, por construção, ' +
        'uma medida de semelhança — e semelhança é precisamente a variável que quase não ' +
        'apareceu. O eixo do complemento não sai melhor: ninguém mediu isso tampouco, e a ideia ' +
        'de que opostos se completam tem, na literatura, ainda menos apoio do que a ideia de que ' +
        'iguais se entendem. Os dois eixos desta página estão no mesmo barco, e o barco é uma ' +
        'construção teórica.',
      'A nuance vem de Montoya, Horton e Kirchner (2008), uma meta-análise sobre semelhança e ' +
        'atração. Ela atrai mesmo: o efeito é robusto quando o que se mede é <strong>atração ' +
        'inicial</strong>, sobretudo em desenhos nos quais uma pessoa avalia outra que ainda não ' +
        'conheceu de verdade. Em relações já existentes, o efeito da semelhança <em>real</em> ' +
        'deixa de aparecer, e o que continua prevendo ali é a semelhança <em>percebida</em>. Ou ' +
        'seja: semelhança prevê bem quem você vai achar interessante na primeira conversa e mal ' +
        'como vocês vão estar no terceiro ano. A tabela que vem abaixo, e toda lista de ' +
        'compatibilidade que já ofereceram a você como INTJ, mede a primeira coisa e vende como ' +
        'se fosse a segunda.',
      'Traduzindo para a sua vida, sem rodeio: <strong>você não precisa encontrar um ENFP.</strong> ' +
        'Não existe pessoa certa esperando com a sigla correta, e não existe dívida sua com ' +
        'ninguém por ter se apaixonado por um ISFJ. A pergunta útil nunca foi quais letras — é se ' +
        'as duas pessoas estão maduras o suficiente, e maturidade aqui tem definição prática e ' +
        'desconfortável: saber o que você sente antes de alguém perguntar, dizer isso antes de ' +
        'virar mágoa arquivada, e mudar de plano quando os dados mudam. Nenhuma dessas três ' +
        'coisas é função de sigla. Todas são função de trabalho feito — que é, ponto por ponto, o ' +
        'assunto da página Jornada.',
      'E, para fechar o círculo com honestidade: quase nada disso testou tipo. O que existe é ' +
        'pouco, pequeno e sem réplica, e nada ali sustenta um ranking por sigla. Quem tentasse ' +
        'fazer melhor esbarraria antes ' +
        'num problema anterior: reaplicado com poucas semanas de intervalo, o instrumento devolve ' +
        'pelo menos uma letra diferente para perto de metade das pessoas nos estudos clássicos, e ' +
        'a dinâmica de tipo — a base sobre a qual as duas regras desta página foram construídas — ' +
        'nunca reuniu evidência consistente. A Myers & Briggs Foundation é explícita: o ' +
        'instrumento não foi desenhado para selecionar pessoas e não mede habilidade nem ' +
        'competência. Uma ' +
        'página de compatibilidade é precisamente isso, seleção e previsão. Por isso ela está aqui ' +
        'com as regras impressas por cima, e não como um número sozinho numa tela.',
    ],
    points: [
      'Dyrenforth et al. (2010), 23.250 pessoas casadas na Austrália, no Reino Unido e na ' +
        'Alemanha: descontados os traços de cada um, a semelhança entre parceiros explica menos ' +
        'de 0,5% da variância na satisfação com o relacionamento — e na satisfação com a vida.',
      'O que previu satisfação foram os traços de cada um: os próprios, cerca de 6% da variância; ' +
        'os do parceiro, de 1% a 3% — estes maiores para amabilidade, conscienciosidade e ' +
        'estabilidade emocional.',
      'Montoya, Horton & Kirchner (2008): a semelhança real prevê atração inicial e deixa de ' +
        'prever em relações já existentes — ali só a semelhança percebida se sustenta.',
      'Os poucos estudos que emparelharam tipos MBTI e mediram satisfação não sustentam ranking ' +
        'nenhum. Estes dois eixos também não medem nada.',
      'A Myers & Briggs Foundation: o instrumento não foi desenhado para selecionar pessoas e não ' +
        'mede habilidade, competência ou perícia.',
    ],
  },

  traditions: {
    eyebrow: 'Quem já respondeu isso',
    title: 'Três tradições, três parceiros ideais, e nenhuma medição',
    intro:
      'A pergunta “qual o par ideal do INTJ” já foi respondida com confiança por vários modelos, ' +
      'e é aqui que a coisa fica interessante: <strong>eles não concordam entre si</strong>. Não ' +
      'discordam em detalhe — discordam sobre a letra do meio. Se três sistemas formalizados ' +
      'apontam para três pessoas diferentes, a pergunta não tem uma resposta escondida em algum ' +
      'lugar: a pergunta está mal feita. Vale a pena ver a discordância de perto, porque ela ' +
      'dissolve o assunto melhor do que qualquer aviso de rodapé.',
    items: [
      {
        name: 'Keirsey',
        pick: 'ENFP — um Idealista qualquer',
        claim:
          'Keirsey trabalha com quatro temperamentos, não com pilhas de funções, e o INTJ é ' +
          'sempre Racional (NT). O conselho de emparelhamento de Please Understand Me II (1998), ' +
          'herdado de Please Understand Me (1978), é que Racionais se dão melhor com Idealistas ' +
          '(NF) — mesma abstração, tratamento oposto das pessoas. É daí que sai, em última ' +
          'instância, quase toda a fama do par INTJ × ENFP.',
        note:
          'É o palpite clínico de um autor, apresentado como observação de décadas de ' +
          'aconselhamento e nunca submetido a teste de desfecho. Keirsey, aliás, é quem mais ' +
          'avisa sobre o risco desse arranjo: ele batizou de “projeto Pigmalião” a tendência de ' +
          'cada parceiro tentar reformar o outro à própria imagem, que é exatamente o que um ' +
          'INTJ faz com um ENFP quando o entusiasmo vira pauta de auditoria.',
      },
      {
        name: 'Socionics',
        pick: 'ESFP — o SEE',
        claim:
          'A socionica tem a teoria de dualidade mais formalizada de todas, montada por Aušra ' +
          'Augustinavičiūtė a partir dos anos 1970 sobre uma estrutura de oito funções. E ela ' +
          'não concorda com Keirsey. O análogo funcional do INTJ é o <strong>ILI</strong> — ' +
          'intuição introvertida na base, lógica extrovertida como função criativa, o mesmo par ' +
          'Ni–Te — e o dual do ILI é o <strong>SEE</strong>, sensorial-ético extrovertido, o ' +
          'análogo do ESFP. Não do ENFP: do ESFP. O parceiro ideal, nessa tradição, é a pessoa ' +
          'que vive no corpo e diz o que sente na hora.',
        note:
          'E há uma discordância dentro da própria discordância, que convém saber antes de citar ' +
          'isto em qualquer lugar: a correspondência entre socionica e MBTI é disputada, e as ' +
          'letras J/P significam coisas diferentes nos dois sistemas. Mapeado por pilha, o INTJ ' +
          'vira ILI e o dual é SEE (ESFP). Mapeado por letras, o INTJ vira LII, cujo dual é ESE ' +
          '— o análogo do ESFJ. Duas rotas dentro do mesmo modelo, dois parceiros ideais ' +
          'diferentes, e em nenhuma das duas aparece o ENFP. A dualidade nunca foi testada em ' +
          'casais reais em desenho controlado; a própria correspondência entre os sistemas é ' +
          'estimada em algo perto de 30% dos casos.',
      },
      {
        name: 'Consenso de comunidade',
        pick: 'ENFP',
        claim:
          'Nos fóruns, subreddits e vídeos de MBTI, o par INTJ × ENFP circula como “golden pair” ' +
          'com um argumento de aparência técnica: os dois compartilhariam as mesmas funções em ' +
          'ordem trocada. Vale conferir a afirmação contra as pilhas, porque ela é falsa. Você é ' +
          'Ni · Te · Fi · Se; o ENFP é Ne · Fi · Te · Si. As funções em comum são duas, Te e Fi, ' +
          'com as prioridades invertidas — e o eixo da percepção, que é onde cada um de vocês é ' +
          'mais forte, está invertido em atitude.',
        note:
          'Folclore, e é assim que deve ser tratado: não existe publicação, dado ou instrumento ' +
          'por trás disso. Onde a genealogia é rastreável, ela volta a Keirsey pela internet — ' +
          'NT com NF —, e não a nenhuma medição. Sobrou uma coisa verdadeira no meio: com Fi em ' +
          'segundo lugar, o ENFP é de fato um dos poucos tipos que leem o seu tom plano ' +
          'corretamente. Isso é observação de mecanismo, não evidência de desfecho.',
      },
      {
        name: 'MBTI oficial',
        pick: 'Nenhum',
        claim:
          'A tradição com o direito mais forte sobre a sigla é a que se recusa a responder. ' +
          'Myers não publicou tabela de casais em Gifts Differing (1980); o manual de 1998 não ' +
          'traz coeficiente de compatibilidade entre tipos; e a Myers & Briggs Foundation afirma ' +
          'explicitamente que todos os tipos são igualmente valiosos, que os resultados jamais ' +
          'devem ser usados para limitar alguém e que o instrumento não foi desenhado para ' +
          'selecionar pessoas, porque não mede habilidade, competência nem perícia.',
        note:
          'É a posição mais chata das quatro e a única defensável. O que a literatura oficial ' +
          'oferece é vocabulário para descrever o atrito depois que ele aparece — não um critério ' +
          'para escolher alguém antes. E a advertência de Pittenger (2005) fecha o assunto: ' +
          'quanto mais genérica a descrição de um par, mais verdadeira ela parece a quem já está ' +
          'nele.',
      },
    ],
    verdict:
      'Três modelos, três parceiros ideais diferentes — ENFP, ESFP e, dentro da mesma socionica ' +
      'por outra rota de mapeamento, ESFJ —, mais uma quarta tradição que se recusa a nomear ' +
      'qualquer um. Nenhum dos três palpites foi medido: não há coorte, não há acompanhamento, ' +
      'não há desfecho. Quando modelos independentes discordam desse jeito sobre uma pergunta que ' +
      'nenhum deles testou, a discordância é o achado. É ela, e não a tabela abaixo, o que você ' +
      'deveria levar embora desta página.',
  },

  axes: {
    combined: {
      label: 'Combinada',
      note: 'A média dos três eixos, descontada quase metade da distância entre o maior e o menor — dá para conferir a conta com os três números da própria linha. O desconto é o motivo de existirem três eixos: <strong>reconhecimento sem complemento é um espelho, complemento sem convivência é um esforço diário</strong>, e nenhum dos dois é um par. Ninguém chega perto de 100, e ninguém zera.',
    },
    recognition: {
      label: 'Reconhecimento',
      note:
        'Quanto da sua pilha a outra pessoa também roda — o quanto você é entendido sem precisar ' +
        'traduzir. Satura em 100 uma única vez, no espelho, e o espelho é um dos piores pares da ' +
        'página. É esse o motivo de o eixo existir separado.',
    },
    complement: {
      label: 'Complemento',
      note:
        'Quanto a outra pessoa fornece do que a pilha Ni–Te–Fi–Se não gera sozinha: o presente ' +
        'físico da Se inferior, o calor dito para fora que Fe faz e você não tem, o plano ' +
        'reaberto, alguém que vá primeiro. O teto real é 82, e ninguém entrega tudo.',
    },
    livability: {
      label: 'Convivência',
      note: 'Quanto da vida cotidiana não precisa ser negociado, pelas preferências que vocês têm em comum. É o eixo que faltava, e o que mais mudou a tabela: o ESFP é o seu oposto nas quatro letras, marca 0 aqui, e sai do segundo lugar para o último. Note que o espelho marca 100 — e ainda assim fica em nono, porque não te estica em nada.',
    },
  },

  labels: {
    index: 'Os dois eixos, tipo a tipo',
    stack: 'Pilha',
    breakdown: 'Como os dois números foram feitos',
    attracts: 'O que atrai',
    friction: 'Onde atrita',
    theyNeed: 'O que essa pessoa precisa de você',
    youNeed: 'O que você precisa dessa pessoa',
    failure: 'Como esse par costuma falhar',
  },

  types: {
    INTP: {
      stack: 'Ti · Ne · Si · Fe',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 2ª',
          sign: '−',
          note: 'Intuição de atitude invertida: você converge para uma saída, ele abre vinte.',
        },
        {
          pair: 'Te 2ª ↔ Ti 1ª',
          sign: '−',
          note:
            'Lógica de eficácia contra lógica de coerência interna. A briga é sobre o que conta ' +
            'como “resolvido”.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 4ª',
          sign: '−',
          note: 'Valor privado contra clima do grupo.',
        },
        {
          pair: 'Se 4ª ↔ Si 3ª',
          sign: '−',
          note: 'O presente físico contra a memória do corpo. Sem Se, sem complemento nesta linha.',
        },
        {
          pair: 'Dominante Ti — introvertida',
          sign: '·',
          note: 'Ninguém neste par vai primeiro em direção ao mundo.',
        },
      ],
      attracts:
        'A conversa. Vale dizer isto em voz alta, porque a página inteira depende de você aceitar ' +
        'os números sem tomá-los como sentença: o INTP zera o reconhecimento e marca 24 de ' +
        'complemento — no papel, o par mais pobre da tabela —, e ainda assim é provavelmente a ' +
        'melhor conversa que você vai ter na vida. Ele acompanha o seu modelo inteiro sem pedir ' +
        'resumo e depois encontra o buraco que você não tinha visto, sem agenda e sem querer ' +
        'ganhar, só porque o buraco estava lá.',
      friction:
        'Ne abre, Ni fecha. Ti quer o argumento impecável, Te quer o argumento entregue. Você ' +
        'apresenta uma conclusão e ele começa a examinar a premissa três, que para você já estava ' +
        'resolvida havia meia hora. Nenhum dos dois está errado; os dois estão fazendo exatamente ' +
        'o que a própria pilha manda.',
      theyNeed:
        'Que o pensamento inacabado dele não seja tratado como indecisão. Ele pensa em voz alta e ' +
        'revisa em público; se cada rascunho for recebido como proposta a ser avaliada, ele para ' +
        'de mostrar os rascunhos — e o que sobra é silêncio, não concordância.',
      youNeed:
        'Alguém que teste a sua certeza sem estar disputando nada. O INTP é o único tipo que ' +
        'derruba a sua conclusão por prazer intelectual em vez de por posição, e Ni precisa ' +
        'desesperadamente desse serviço.',
      failure:
        'Nada é decidido. Dois introvertidos que acham logística uma tarefa menor conversam seis ' +
        'horas e ninguém compra a passagem. Aí você começa a executar sozinho, e ele vive isso ' +
        'como atropelo; ele levanta uma objeção de princípio a algo que você já mandou fazer, e ' +
        'você vive isso como obstrução. O par não termina em briga: termina em duas pessoas que ' +
        'gostam muito de conversar e não conseguiram construir uma vida em comum.',
    },

    ENTJ: {
      stack: 'Te · Ni · Se · Fi',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 2ª',
          sign: '+',
          note: 'A mesma visão de longo prazo, em segundo plano para ele.',
        },
        {
          pair: 'Te 2ª ↔ Te 1ª',
          sign: '+',
          note: 'O mesmo critério de eficácia, no comando dele.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 4ª',
          sign: '+',
          note: 'A mesma bússola privada, ainda mais muda nele.',
        },
        {
          pair: 'Se 4ª ↔ Se 3ª',
          sign: '+',
          note: 'A sua inferior é a terciária dele, um degrau menos cega.',
        },
        {
          pair: 'Dominante Te — extrovertida',
          sign: '+',
          note: 'Ele vai primeiro em direção ao mundo. Mas sem Fe: ninguém aqui administra a temperatura da sala.',
        },
      ],
      attracts:
        'Não há tradução a fazer. Você diz uma coisa dura em velocidade máxima e ela chega como ' +
        'informação, não como agressão. É o alívio específico de não precisar embalar nada — e de ' +
        'assistir a alguém pegar a sua ideia meio pronta e já estar movendo pessoas por ela.',
      friction:
        'Comando. São duas pessoas que já decidiram, e a mesma função em primeiro e segundo lugar ' +
        'significa que vocês chegam ao mesmo lugar por caminhos com prioridades trocadas: você ' +
        'quer o modelo fechado antes de mover, ele quer mover para descobrir o modelo. Ambos leem ' +
        'o outro como imprudente, cada um por um motivo diferente.',
      theyNeed:
        'Saber que o plano existe antes de você terminá-lo. O ENTJ lê silêncio como vácuo e vácuo ' +
        'como convite — se você não avisar que está pensando, ele já terá decidido por dois, e ' +
        'não por má-fé: por horror ao tempo parado.',
      youNeed:
        'A disposição dele de começar com o modelo a setenta por cento, que é o antídoto exato ' +
        'para o seu jeito de perder anos aperfeiçoando o plano. E a frente social que ele opera de ' +
        'graça, e que custaria a você o dia inteiro.',
      failure:
        'Vira uma empresa em vez de uma relação. Dois executores competentes, agenda cheia, ' +
        'divisão limpa de responsabilidades — e Fi em terceiro num e em quarto no outro, o que ' +
        'significa que <em>ninguém</em> nesse par tem a função de dizer a parte do sentimento. Os ' +
        'anos passam com eficiência notável e um dia um dos dois percebe que a última conversa ' +
        'sobre a relação em si foi na década anterior.',
    },

    ENTP: {
      stack: 'Ne · Ti · Fe · Si',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 1ª',
          sign: '−',
          note: 'Duas dominantes intuitivas em sentidos opostos: uma ramifica, a outra afunila.',
        },
        {
          pair: 'Te 2ª ↔ Ti 2ª',
          sign: '−',
          note: 'Mesma posição, lógica invertida: entregar contra provar.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 3ª',
          sign: '−',
          note: 'Valor próprio contra harmonia da sala.',
        },
        {
          pair: 'Se 4ª ↔ Si 4ª',
          sign: '−',
          note: 'A inferior de cada um é a mesma função invertida. Nenhum devolve o outro ao corpo.',
        },
        {
          pair: 'Dominante Ne — extrovertida',
          sign: '+',
          note: 'Ele começa a frase, sempre.',
        },
      ],
      attracts:
        'É a pessoa mais divertida com quem você vai discordar, e os números dizem por quê: zero ' +
        'de reconhecimento, 62 de complemento. Nada nele confirma você e quase tudo nele abre o ' +
        'que você fechou. O ENTP puxa você para fora de casa e para dentro de assuntos que você ' +
        'tinha descartado cedo demais, e faz isso sem nenhum peso — nada nele exige que você seja ' +
        'simpático primeiro.',
      friction:
        'Ele debate por esporte, você debate para concluir. Quatro eixos, quatro atitudes ' +
        'opostas: junto com INTP, ISFJ e ESFJ, este é um dos quatro perfis que não compartilham ' +
        'uma única função com você. Tudo o que parece semelhança aqui é coincidência de assunto.',
      theyNeed:
        'Que a ideia pela metade não seja recebida como proposta que você agora tem de avaliar. Ne ' +
        'joga hipóteses para ver o que acontece; a sua devolutiva instantânea de viabilidade mata ' +
        'o processo dele — e ele não vai dizer isso, vai só ir jogar com outra pessoa.',
      youNeed:
        'Alguém que quebre a sua certeza sem intenção de quebrá-la. Ele faz isso naturalmente, e ' +
        'Ni fica muito pior quando passa tempo demais sem contestação de fora.',
      failure:
        'Desgaste por assunto inacabado, e depois, de uma vez só, a linha vermelha. Ele vai ' +
        'testando onde está o limite do que você acha engraçado, porque testar limite é o modo de ' +
        'operação dele e não uma provocação pessoal. Um dia atravessa alguma coisa que Fi ' +
        'considera inegociável. Você encerra em silêncio, por completo e sem cena — e ele ' +
        'genuinamente não viu chegando, porque para ele aquilo tinha sido uma frase.',
    },

    INFJ: {
      stack: 'Ni · Fe · Ti · Se',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 1ª',
          sign: '+',
          note: 'O peso inteiro da sua dominante: a mesma certeza que chega antes da explicação.',
        },
        {
          pair: 'Te 2ª ↔ Ti 3ª',
          sign: '−',
          note: 'Você organiza o mundo de fora, ele organiza a coerência por dentro.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 2ª',
          sign: '−',
          note: 'O valor privado contra o clima do grupo.',
        },
        {
          pair: 'Se 4ª ↔ Se 4ª',
          sign: '+',
          note: 'A mesma inferior no mesmo lugar.',
        },
        {
          pair: 'Dominante Ni — introvertida',
          sign: '·',
          note: 'Dois silêncios esperando o outro começar.',
        },
      ],
      attracts:
        'Ser lido corretamente, o que praticamente não acontece na sua vida. O INFJ entende o ' +
        'silêncio longo porque roda o mesmo silêncio, e não pede que você explique como chegou à ' +
        'conclusão — ele chega a conclusões do mesmo jeito indefensável. É o par em que você menos ' +
        'precisa se justificar, e o único fora do espelho em que a sua dominante vale o peso ' +
        'inteiro.',
      friction:
        'Para onde Ni aponta. A sua mira em sistemas, a dele em pessoas. E depois o eixo do ' +
        'julgamento: você diz a coisa verdadeira, ele administra a sala. Ele vai achar que você ' +
        'foi desnecessariamente duro; você vai achar que ele preferiu o conforto de todo mundo à ' +
        'informação correta. Os dois vão estar certos.',
      theyNeed:
        'Aviso antes do veredito. Se você vai dizer algo definitivo sobre alguém que ele ama, diga ' +
        'que vai dizer. E, quando você emudecer, um sinal explícito de que não é raiva — Fe ' +
        'interpreta silêncio como estado da relação, não como estado do seu cérebro.',
      youNeed:
        'O serviço de tradução dele. O INFJ consegue contar o que uma sala sentiu, e essa é ' +
        'informação que você simplesmente não coleta. É a coisa mais próxima de um sentido a mais ' +
        'que você vai ter acesso.',
      failure:
        'Duas dominantes idênticas partilhando o mesmo ponto cego: com Se em quarto lugar nos ' +
        'dois — complemento 5 nessa linha, o piso da tabela —, ninguém cuida do concreto, e a ' +
        'vida material vai se degradando enquanto as duas cabeças estão a cinco anos daqui. E há o ' +
        'fim silencioso: o INFJ absorve a sua franqueza por anos sem devolver conta, até tomar a ' +
        'decisão sozinho e sair inteiro — a mesma porta que você bateria. Ninguém brigou. Os dois ' +
        'arquivaram.',
    },

    INFP: {
      stack: 'Fi · Ne · Si · Te',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 2ª',
          sign: '−',
          note: 'Uma intuição fecha, a outra abre.',
        },
        {
          pair: 'Te 2ª ↔ Te 4ª',
          sign: '+',
          note: 'A mesma lógica de eficácia, inferior nele — e por isso um ponto sensível.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 1ª',
          sign: '+',
          note: 'O mesmo tipo de valor privado, dominante nele e quase mudo em você.',
        },
        {
          pair: 'Se 4ª ↔ Si 3ª',
          sign: '−',
          note: 'O corpo agora contra a impressão guardada do corpo. Sem Se, sem complemento.',
        },
        {
          pair: 'Dominante Fi — introvertida',
          sign: '·',
          note: 'Duas pessoas que sabem o que sentem e não avisam.',
        },
      ],
      attracts:
        'Fi encontrando Fi. O INFP diz em voz alta, com facilidade e sem constrangimento, ' +
        'exatamente o tipo de coisa que você carrega há trinta anos sem conseguir formular. Ouvir ' +
        'a sua própria função dominar uma conversa é uma experiência estranha e boa — e repare que ' +
        'ela vale só 8 pontos de reconhecimento, porque duas casas de distância na pilha é muita ' +
        'distância.',
      friction:
        'Te é a sua segunda função e a inferior dele. A sua crítica comum — aquela que você ' +
        'considera informação neutra sobre o trabalho — cai exatamente no ponto mais frágil da ' +
        'pilha dele. Você não está atacando; ele não está sendo sensível demais. A arquitetura é ' +
        'que é assim.',
      theyNeed:
        'Que a crítica ao trabalho não chegue como veredito sobre a pessoa. Uma frase de separação ' +
        'resolve quase tudo aqui: “isto é sobre o texto, não sobre você.” Parece redundante para ' +
        'você. Não é para ele.',
      youNeed:
        'Linguagem para o lado de dentro. Ele tem, sem esforço, o vocabulário que a sua terceira ' +
        'função vai levar duas décadas para montar — e usá-lo por perto é a forma mais barata de ' +
        'aprender.',
      failure:
        'A divisão de trabalho vira desprezo mútuo. Você assume a competência do par, ele assume ' +
        'os sentimentos do par, e cada um para de desenvolver a função que o outro está cobrindo. ' +
        'Passa a valer o roteiro: você é o frio, ele é o disperso. Nenhum dos dois era isso quando ' +
        'começou.',
    },

    ENFJ: {
      stack: 'Fe · Ni · Se · Ti',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 2ª',
          sign: '+',
          note: 'A mesma intuição, uma casa abaixo. Ele enxerga longe e move gente.',
        },
        {
          pair: 'Te 2ª ↔ Ti 4ª',
          sign: '−',
          note: 'Eficácia externa contra coerência interna, e a dele está no fim da fila.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 1ª',
          sign: '−',
          note: 'A dominante dele é a atitude oposta da sua terceira função.',
        },
        {
          pair: 'Se 4ª ↔ Se 3ª',
          sign: '+',
          note: 'Ele te tira da cadeira.',
        },
        {
          pair: 'Dominante Fe — extrovertida',
          sign: '+',
          note: 'Ele vai primeiro em direção às pessoas, sempre.',
        },
      ],
      attracts:
        'Alguém que enxerga o futuro do mesmo jeito que você <em>e</em> consegue mover uma sala ' +
        'inteira em direção a ele. É o maior complemento da tabela depois do ESTP, empatado com o ' +
        'ESFP, e o único caso em que ele vem acompanhado de Ni alta: o ENFJ assume toda a ' +
        'manutenção social sem que você peça, ' +
        'e o que ele quer em troca é apenas participação — não desempenho.',
      friction:
        'Fe dominante mede o vínculo pela resposta que recebe. O seu silêncio de recarga entra ' +
        'nesse medidor como afastamento, e ele vai começar a consertar uma relação que não estava ' +
        'quebrada — o que quebra a relação. Você, do outro lado, sente a preocupação dele como ' +
        'cobrança e recolhe mais.',
      theyNeed:
        'Confirmação verbal com alguma regularidade. Isso não é carência: Fe lê o estado do laço ' +
        'pelo que é expresso, e na ausência de expressão a leitura é sempre a pior. Uma frase por ' +
        'semana faz um trabalho que você levaria meses para desfazer.',
      youNeed:
        'A leitura de pessoas que ele faz em tempo real, e o empurrão físico para fora de casa. ' +
        'Com Se em terceiro lugar, ele é o tipo que consegue te tirar da cadeira sem que aquilo ' +
        'pareça uma agressão à sua agenda.',
      failure:
        'Ele gerencia você. Devagar, com boa intenção e sem plano: começa editando a sua frase ' +
        'para o grupo, passa a editar a sua agenda, e termina editando você. Você não percebe por ' +
        'anos, porque a administração é competente e o resultado social é melhor. Aí um dia ' +
        'percebe — e Fi não trata isso como um mal-entendido, trata como violação de autonomia. ' +
        'Não existe conversa de reparo depois desse arquivamento.',
    },

    ENFP: {
      stack: 'Ne · Fi · Te · Si',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 1ª',
          sign: '−',
          note: 'As duas dominantes no mesmo eixo e em sentidos opostos.',
        },
        {
          pair: 'Te 2ª ↔ Te 3ª',
          sign: '+',
          note: 'A mesma lógica de execução, uma casa abaixo.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 2ª',
          sign: '+',
          note: 'O mesmo valor privado, articulado nele. É a ponte real deste par.',
        },
        {
          pair: 'Se 4ª ↔ Si 4ª',
          sign: '−',
          note: 'A mesma inferior, invertida. Ninguém no agora, e nenhum complemento aqui.',
        },
        {
          pair: 'Dominante Ne — extrovertida',
          sign: '+',
          note: 'Ele abre a conversa. Mas o calor dele é Fi dito alto, não Fe.',
        },
      ],
      attracts:
        'O par famoso. Os números são 35 e 50: respeitável nos dois eixos, recordista em nenhum, ' +
        'atrás do ENFJ no complemento e do ENTJ no reconhecimento. E ainda assim a atração é real ' +
        'e tem mecanismo. O ENFP chega com uma energia que você não teria de gerar e, com Fi em ' +
        'segundo lugar, é uma das poucas pessoas que lê o seu tom plano corretamente: ele sabe que ' +
        '“ok” não foi frieza. Isso é raro o suficiente para explicar a fama do par sem precisar de ' +
        'teoria nenhuma.',
      friction:
        'A dominante. Ne mantém as opções abertas porque fechar dói; Ni precisa fechar porque a ' +
        'indefinição dói. Vocês partilham as duas funções do meio e divergem exatamente onde cada ' +
        'um é mais forte, que é o pior lugar possível para divergir.',
      theyNeed:
        'Que cada entusiasmo não passe por auditoria de viabilidade. E ser escolhido de forma ' +
        'visível: o ENFP precisa ouvir que é a pessoa, não deduzir isso do fato de você continuar ' +
        'por perto há quatro anos.',
      youNeed:
        'Alguém que te arranque do plano. É o serviço que ele presta melhor do que qualquer outro ' +
        'tipo, e o único motivo de você aceitar receber é que ele consegue fazer isso sem te fazer ' +
        'sentir administrado.',
      failure:
        'O modo mais comum de todos: você vira o adulto. Ele começa as coisas, você termina; a ' +
        'contabilidade migra para o seu lado, os prazos também, e o cansaço se acumula em Fi, onde ' +
        'ninguém vê. Você não reclama, porque reclamar seria admitir que o arranjo não está ' +
        'funcionando. E então, numa terça-feira, você encerra em uma frase — e ele fica devastado, ' +
        'porque a conta foi somada inteira em silêncio e ele nunca teve acesso ao extrato.',
    },

    ISTJ: {
      stack: 'Si · Te · Fi · Ne',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 4ª',
          sign: '−',
          note:
            'O eixo da intuição em atitudes opostas: você fecha o futuro numa saída, e nele a ' +
            'ramificação está no fundo da pilha, onde só aparece como catástrofe imaginada.',
        },
        {
          pair: 'Te 2ª ↔ Te 2ª',
          sign: '+',
          note: 'O peso inteiro: mesma função, mesma posição. Vocês decidem pelo mesmo critério.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 3ª',
          sign: '+',
          note: 'O peso inteiro outra vez. Vocês valorizam pelo mesmo critério.',
        },
        {
          pair: 'Se 4ª ↔ Si 1ª',
          sign: '−',
          note:
            'O eixo sensorial invertido e nas pontas: o presente físico que você mal registra ' +
            'contra a memória do corpo que comanda a vida dele. As duas percepções olham para ' +
            'lados opostos do tempo.',
        },
        {
          pair: 'Dominante Si — introvertida',
          sign: '·',
          note: 'Ninguém vai primeiro, e não há Fe nem Se. É o complemento mais magro da página: dois planejadores esperando o outro propor o fim de semana.',
        },
      ],
      attracts:
        'O eixo de julgamento é idêntico, posição por posição — 50 de reconhecimento vindo ' +
        'inteiramente de Te e Fi, sem um único ponto de intuição. Não há nada a traduzir sobre ' +
        'promessa, horário, padrão de acabamento ou o que significa alguém dizer que vai fazer uma ' +
        'coisa. Para um tipo que passa a vida explicando o próprio critério, encontrar alguém que ' +
        'já o compartilha é um descanso que não se descreve.',
      friction:
        'A percepção. Ele confia no que já funcionou, você confia no que vai funcionar. Toda ' +
        'proposta sua de refazer o processo chega como acusação ao processo que ele construiu, e ' +
        'toda defesa dele do procedimento chega como recusa a pensar.',
      theyNeed:
        'Evidência, não visão. Mostre o percurso, não a conclusão — e aceite que “ainda não estou ' +
        'convencido” é uma resposta legítima e frequentemente sensata, não obstrução. Metade dos ' +
        'seus planos merece mesmo aquele grau de ceticismo.',
      youNeed:
        'Alguém que execute sem supervisão e segure todos os detalhes que você deixa cair. O ISTJ ' +
        'é a razão pela qual metade dos seus planos ambiciosos chega ao mundo em vez de morrer num ' +
        'caderno. O que ele não faz é te tirar de casa: complemento 3, o menor da página.',
      failure:
        'Funciona tão bem no plano operacional que ninguém nunca levanta uma questão de sentido. ' +
        'Vinte anos de casa bem administrada, contas em dia, obrigações cumpridas, e nenhuma ' +
        'conversa dentro. Depois há o modo lento: as suas propostas de reforma, acumuladas década ' +
        'após década, viram para ele um veredito permanente de insuficiência — e ele nunca vai ' +
        'dizer isso em voz alta, porque dizer não faz parte do repertório dele.',
    },

    ISTP: {
      stack: 'Ti · Se · Ni · Fe',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 3ª',
          sign: '+',
          note: 'A mesma intuição, duas casas abaixo. Ele reconhece, mas não roda sob demanda.',
        },
        {
          pair: 'Te 2ª ↔ Ti 1ª',
          sign: '−',
          note: 'Entregar contra entender. Dá discussão longa.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 4ª',
          sign: '−',
          note: 'Duas funções de valor invertidas.',
        },
        {
          pair: 'Se 4ª ↔ Se 2ª',
          sign: '+',
          note: 'A sua inferior é a auxiliar dele — o segundo degrau da linha da Se.',
        },
        {
          pair: 'Dominante Ti — introvertida',
          sign: '·',
          note: 'Ele não vai te chamar para sair; ele vai só sair.',
        },
      ],
      attracts:
        'Autossuficiência total. O ISTP não pede manutenção, não interpreta silêncio, não cobra ' +
        'presença — e é competente com objetos reais de um jeito que você admira sem conseguir ' +
        'imitar. O silêncio ao lado dele é dos poucos silêncios genuinamente confortáveis que ' +
        'existem para o seu tipo.',
      friction:
        'Ele mora no presente, você mora daqui a cinco anos. Qualquer plano que você faça para o ' +
        'fim de semana dele soa como imposição; qualquer improviso que ele proponha para a sua ' +
        'quarta-feira soa como caos.',
      theyNeed:
        'Nenhum plano imposto sobre a semana. E que a competência dele não seja avaliada em voz ' +
        'alta — Ti resolve sozinho e mostra o resultado; comentário durante o processo é ruído.',
      youNeed:
        'O Se dele, que vale 35 dos 38 pontos de complemento deste par. É a função mais fraca da ' +
        'sua pilha operando em segundo lugar bem na sua frente, todos os dias, e observá-la ' +
        'funcionar é o método de aprendizado mais eficiente que você vai encontrar para ela.',
      failure:
        'Duas pessoas que nunca pedem nada gradualmente param de ter o que dizer. Nenhum dos dois ' +
        'vai iniciar a conversa difícil, porque nenhum dos dois a considera necessária — e a ' +
        'relação não termina, esfria. Vira um arranjo eficiente entre dois independentes, e só ' +
        'quando um deles conhece outra pessoa é que fica claro há quanto tempo já tinha acabado.',
    },

    ESTJ: {
      stack: 'Te · Si · Ne · Fi',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 3ª',
          sign: '−',
          note: 'A sua dominante corresponde, nele, a uma função terciária e invertida.',
        },
        {
          pair: 'Te 2ª ↔ Te 1ª',
          sign: '+',
          note: 'O mesmo critério de eficácia, no comando dele.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 4ª',
          sign: '+',
          note: 'A mesma bússola privada, ainda mais silenciosa nele.',
        },
        {
          pair: 'Se 4ª ↔ Si 2ª',
          sign: '−',
          note: 'O presente físico contra o precedente. Sem Se, sem complemento nesta linha.',
        },
        {
          pair: 'Dominante Te — extrovertida',
          sign: '+',
          note: 'Ele vai primeiro. Mas sem Fe: a franqueza circula, o calor não.',
        },
      ],
      attracts:
        'Ninguém precisa ser diplomático. As decisões são tomadas, escritas e executadas, e a ' +
        'franqueza circula nas duas direções sem que ninguém se ofenda. Para você, que passa a ' +
        'vida calibrando o tom, é uma economia de energia considerável.',
      friction:
        'Te em primeiro lugar contra Te em segundo: é disputa de jurisdição, não de ideia. E a ' +
        'percepção dele é Si — o procedimento provado — enquanto a sua é Ni, o redesenho. Toda ' +
        'reunião de vocês tem um momento em que a discussão deixa de ser sobre o que fazer e passa ' +
        'a ser sobre quem decide.',
      theyNeed:
        'Respeito pelo que já funciona, e o argumento traduzido em resultado — não em elegância do ' +
        'modelo. “Isto reduz o retrabalho em três semanas” convence; “isto é estruturalmente ' +
        'superior” não convence ninguém que já tem um sistema rodando.',
      youNeed:
        'Alguém que converta plano em cronograma sem precisar ser lembrado, e que não confunda a ' +
        'sua secura com hostilidade porque opera na mesma frequência.',
      failure:
        'Vira uma administração. Duas pessoas que defendem posições em vez de examiná-las, e toda ' +
        'divergência escala até virar questão de autoridade. Com Fi em terceiro num e em quarto no ' +
        'outro, nada é reparado — só julgado. As mágoas ficam arquivadas em dois lugares ' +
        'diferentes, nenhuma delas jamais é lida em voz alta, e o par se dissolve com toda a ' +
        'logística impecável até o último dia.',
    },

    ESTP: {
      stack: 'Se · Ti · Fe · Ni',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 4ª',
          sign: '+',
          note: 'A sua dominante é a inferior dele, e ele a experimenta como pressentimento vago.',
        },
        {
          pair: 'Te 2ª ↔ Ti 2ª',
          sign: '−',
          note: 'Mesma posição, lógica invertida.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 3ª',
          sign: '−',
          note: 'Valor próprio contra clima da sala.',
        },
        {
          pair: 'Se 4ª ↔ Se 1ª',
          sign: '+',
          note: 'A sua inferior no comando dele, e a dele no seu: o menor reconhecimento que esta linha consegue produzir.',
        },
        {
          pair: 'Dominante Se — extrovertida',
          sign: '+',
          note: 'Ele começa tudo. É o complemento mais alto da página — e vale olhar a coluna do lado antes de tirar conclusão disso.',
        },
      ],
      attracts:
        'O canto oposto ao seu, e a página inteira aponta para cá: 5 de reconhecimento, 82 de ' +
        'complemento — nenhum tipo entrega mais do que lhe falta e nenhum entende menos do que ' +
        'você é. Nos primeiros meses isso é hipnótico. O ESTP resolve em quinze minutos, no mundo ' +
        'físico, com o corpo e sem modelo, um problema que você teria planejado por três semanas.',
      friction:
        'Tudo depois dos primeiros meses. Ele não consegue esperar e você não consegue mover, e ' +
        'nenhum dos dois está fingindo. A discussão nunca é sobre o assunto da discussão: é sobre ' +
        'o tempo, sempre.',
      theyNeed:
        'Não ser tratado como raso por ser rápido. Se em primeiro lugar é uma função de alta ' +
        'precisão sobre o real, e a sua tendência a confundir velocidade com falta de profundidade ' +
        'é preconceito da sua própria pilha, não uma observação sobre ele.',
      youNeed:
        'O Se dele em doses pequenas. O problema estrutural do par é que ele só sabe oferecer em ' +
        'enxurrada — e você absorve enxurrada de Se do mesmo jeito que absorve estresse: mal, e ' +
        'com atraso.',
      failure:
        'O complemento máximo é caro precisamente por ser máximo. Cada um é fluente exatamente ' +
        'onde o outro é cego, o que produz três meses elétricos e depois uma moeda que acaba. ' +
        'Nenhum dos dois consegue <em>entregar</em> a própria força ao outro; só consegue ' +
        'demonstrá-la, o que com o tempo deixa de ser admiração e vira acusação. Termina com os ' +
        'dois dizendo a mesma frase em versões diferentes: “você nunca está aqui.”',
    },

    ISFJ: {
      stack: 'Si · Fe · Ti · Ne',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 4ª',
          sign: '−',
          note:
            'O eixo da intuição em atitudes opostas: você fecha o futuro numa saída, e nele a ' +
            'ramificação está no fundo da pilha, onde só aparece como catástrofe imaginada.',
        },
        {
          pair: 'Te 2ª ↔ Ti 3ª',
          sign: '−',
          note: 'Eficácia externa contra coerência interna.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 2ª',
          sign: '−',
          note: 'Valor privado contra cuidado expresso, o eixo mais mal traduzido do par.',
        },
        {
          pair: 'Se 4ª ↔ Si 1ª',
          sign: '−',
          note:
            'O eixo sensorial invertido e nas pontas: o presente físico que você mal registra ' +
            'contra a memória do corpo que comanda a vida dele. As duas percepções olham para ' +
            'lados opostos do tempo.',
        },
        {
          pair: 'Dominante Si — introvertida',
          sign: '·',
          note: 'Zero funções em comum: os quatro eixos rodam na atitude oposta.',
        },
      ],
      attracts:
        'Ser cuidado em atos concretos e não solicitados — que é, por coincidência exata, a única ' +
        'linguagem de afeto que você decodifica sem esforço, porque é a que você mesmo usa. Alguém ' +
        'percebe que você não comeu. Alguém guardou o documento que você ia precisar. O ' +
        'reconhecimento é zero e isso não impede nada disso de ser verdade.',
      friction:
        'Zero funções em comum: os quatro eixos rodam na atitude oposta. Ele lê o seu silêncio ' +
        'como descontentamento e trabalha para consertar; você lê o cuidado dele como pressão e ' +
        'recua. Cada movimento de reparo agrava exatamente o que pretendia resolver.',
      theyNeed:
        'Reconhecimento dito, não implícito. O ISFJ sustenta a estrutura invisível de tudo e nunca ' +
        'vai reivindicar crédito; se você não nomear o que ele faz, ele conclui que não é visto — ' +
        'e conclui em silêncio, por anos.',
      youNeed:
        'Perceber que alguém está te mantendo vivo. Este é, sem ironia, o item mais útil da página ' +
        'para um INTJ que passou a vida convencido de que não depende de ninguém.',
      failure:
        'Ele absorve, absorve, absorve e nunca formula um pedido — e você, que só age sobre ' +
        'pedidos formulados, nunca age. Dez anos depois chega uma lista de mágoas inteira, com ' +
        'datas, sobre coisas que você teria corrigido em uma semana se alguém tivesse mencionado. ' +
        'E o pior: você vai achar isso injusto, e ele vai achar que estava óbvio. Estava óbvio na ' +
        'língua dele.',
    },

    ISFP: {
      stack: 'Fi · Se · Ni · Te',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 3ª',
          sign: '+',
          note: 'A sua dominante é a terciária dele — ele te acompanha, com atraso e sem controle.',
        },
        {
          pair: 'Te 2ª ↔ Te 4ª',
          sign: '+',
          note: 'A mesma lógica de eficácia, inferior nele. É o ponto sensível do par.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 1ª',
          sign: '+',
          note: 'O mesmo valor privado, no comando dele.',
        },
        {
          pair: 'Se 4ª ↔ Se 2ª',
          sign: '+',
          note: 'Corpo, presente, matéria — o segundo degrau da linha da Se.',
        },
        {
          pair: 'Dominante Fi — introvertida',
          sign: '·',
          note:
            'Ninguém vai primeiro, e não há Fe. As mesmas quatro funções que você tem, em ordem ' +
            'quase invertida.',
        },
      ],
      attracts:
        'As mesmas quatro funções, na ordem de importância quase invertida — e daí os dois números ' +
        'quase iguais, 40 e 35, sem pico em eixo nenhum. Isso significa uma ' +
        'coisa específica e rara: nada nele precisa ser decodificado, porque tudo o que ele usa ' +
        'você também usa, só que ele começa pelo fim da sua fila. Ele vive no valor e no corpo; ' +
        'você vive no padrão e no plano. Não é atração por diferença: é reconhecimento em ordem ' +
        'trocada.',
      friction:
        'Te é a inferior dele. O seu registro padrão — avaliativo, comparativo, orientado a ' +
        'melhoria — cai no lugar mais frágil da pilha do ISFP toda vez que você abre a boca sobre ' +
        'o trabalho dele. Você chama isso de retorno. Ele recebe como sentença.',
      theyNeed:
        'Nenhuma avaliação não pedida. Zero. Se ele mostrar uma coisa que fez, a resposta certa é ' +
        'sobre o que aquilo é, nunca sobre o que aquilo poderia ser — e você vai ter de segurar ' +
        'essa segunda frase à força, porque ela já estará formada.',
      youNeed:
        'Alguém que torne o presente habitável. Com Se em segundo lugar e Fi no comando, o ISFP é ' +
        'o tipo que consegue te devolver ao corpo sem transformar isso num projeto de ' +
        'desenvolvimento pessoal.',
      failure:
        'Você organiza a vida dele e chama isso de amor — o que, na sua língua, é exatamente o que ' +
        'é. Ele vive como sendo administrado. Aí ele se afasta sem anunciar, porque dominantes de ' +
        'Fi se afastam antes de explicar, e você interpreta o afastamento como problema a resolver ' +
        'e resolve com mais intensidade. Cada rodada de solução aumenta a distância. O par não ' +
        'morre de conflito: morre de excesso de ajuda.',
    },

    ESFJ: {
      stack: 'Fe · Si · Ne · Ti',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ne 3ª',
          sign: '−',
          note: 'Intuição invertida e enterrada: ele não vai te acompanhar no longo prazo.',
        },
        {
          pair: 'Te 2ª ↔ Ti 4ª',
          sign: '−',
          note: 'A sua segunda função é a mais fraca dele.',
        },
        {
          pair: 'Fi 3ª ↔ Fe 1ª',
          sign: '−',
          note: 'A dominante dele é a atitude oposta da sua terceira.',
        },
        {
          pair: 'Se 4ª ↔ Si 2ª',
          sign: '−',
          note: 'O agora físico contra o precedente vivido. Sem Se.',
        },
        {
          pair: 'Dominante Fe — extrovertida',
          sign: '+',
          note:
            'Ele vai primeiro em direção às pessoas. O retrato de alguém que entende muito ' +
            'pouco de você e te sustenta assim mesmo.',
        },
      ],
      attracts:
        'Calor competente e incansável, apontado para os fatos materiais da sua vida. O ESFJ ' +
        'organiza o aniversário, lembra do remédio, percebe que você emagreceu. É cuidado entregue ' +
        'em atos — a sua língua — embalado num tom que a sua pilha inteira estranha.',
      friction:
        'Nenhuma função em comum, e o choque concentra-se num eixo: Fe dominante quer o grupo ' +
        'harmônico e visível; Fi quer ser deixado em paz com aquilo em que acredita. Ele mede o ' +
        'vínculo pela presença; você mede pela lealdade. Ambos acham que o outro está medindo ' +
        'errado.',
      theyNeed:
        'Presença nos encontros e a confirmação dita em voz alta. Não adianta você achar que está ' +
        'óbvio: Fe lê o laço pelo que é expresso, e a sua economia de expressão é lida como ' +
        'esfriamento a cada semana que passa.',
      youNeed:
        'Admitir que ser alimentado, lembrado e recebido não é uma contribuição menor — e que você ' +
        'seria consideravelmente pior sem alguém fazendo isso. É literalmente o que o eixo do ' +
        'complemento está medindo quando marca 62 para alguém que não compartilha uma função com ' +
        'você.',
      failure:
        'Vira obrigação. Ele marca, você declina, ele lê o declínio como recusa dele, você lê a ' +
        'marcação como coerção, e a relação inteira se reduz a uma negociação permanente sobre ' +
        'comparecimento. Ninguém está errado e ninguém consegue ceder, porque para os dois o ponto ' +
        'em disputa é aquilo que cada um chama de amor.',
    },

    ESFP: {
      stack: 'Se · Fi · Te · Ni',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 4ª',
          sign: '+',
          note: 'A sua dominante é a inferior dele.',
        },
        {
          pair: 'Te 2ª ↔ Te 3ª',
          sign: '+',
          note: 'A mesma lógica prática. Vocês concordam sobre o que é resolver.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 2ª',
          sign: '+',
          note: 'O mesmo valor privado, articulado e imediato nele.',
        },
        {
          pair: 'Se 4ª ↔ Se 1ª',
          sign: '+',
          note: 'A sua inferior no comando dele, o máximo da linha.',
        },
        {
          pair: 'Dominante Se — extrovertida',
          sign: '+',
          note:
            'Ele começa a frase. E o calor dele é Fi dito na hora, que é uma língua que você ' +
            'entende.',
        },
      ],
      attracts:
        'Ele diz a parte do sentimento em voz alta, na hora, sem cerimônia — e é Fi, o mesmo tipo ' +
        'de convicção privada e inegociável que você tem, só que não enterrada em terceiro lugar. ' +
        'Ver a sua própria função funcionando com dois anos de vantagem é uma experiência que vale ' +
        'por terapia. Repare também em onde ele cai no mapa: 40 e 70 — no complemento empata com o ' +
        'ENFJ, no reconhecimento passa à frente dele, e é este o par que a socionica chama de ' +
        'dual.',
      friction:
        'Ni é a inferior dele. Tudo o que você faz por padrão — implicar em vez de dizer, planejar ' +
        'em vez de decidir agora, tratar o horizonte de cinco anos como se fosse hoje — é ' +
        'exatamente o que ele não consegue acompanhar sob demanda.',
      theyNeed:
        'O presente, e você dentro dele. Além disso: plano dito como plano. Se o combinado existe ' +
        'apenas na sua cabeça, para o ESFP ele não existe — e não é desatenção, é a função no fim ' +
        'da fila.',
      youNeed:
        'O corpo de volta, e a permissão para uma noite que não tenha finalidade. Você não vai ' +
        'gostar da primeira vez.',
      failure:
        'Fi contra Fi, sem árbitro: duas pessoas que sabem exatamente o que sentem e consideram ' +
        'isso inegociável, e nenhuma das duas com uma função de harmonização para ceder primeiro. ' +
        'Some a isso a fratura de tempo — ele não consegue esperar, você não consegue improvisar — ' +
        'e a briga deixa de ter assunto. Vira uma disputa sobre o ritmo da vida, e ritmo é a única ' +
        'coisa que nenhum dos dois consegue ceder por amor.',
    },

    INTJ: {
      stack: 'Ni · Te · Fi · Se',
      breakdown: [
        {
          pair: 'Ni 1ª ↔ Ni 1ª',
          sign: '+',
          note: 'A mesma certeza chegando antes da frase.',
        },
        {
          pair: 'Te 2ª ↔ Te 2ª',
          sign: '+',
          note: 'O mesmo critério, no mesmo momento da decisão.',
        },
        {
          pair: 'Fi 3ª ↔ Fi 3ª',
          sign: '+',
          note: 'A mesma bússola, igualmente sem palavras.',
        },
        {
          pair: 'Se 4ª ↔ Se 4ª',
          sign: '+',
          note: 'O mesmo ponto cego, na mesma profundidade.',
        },
        {
          pair: 'Dominante Ni — introvertida',
          sign: '·',
          note: 'Ninguém vai primeiro, e não há Fe nem Ne. O reconhecimento máximo da página encostado no complemento mínimo: é a leitura inteira deste par.',
        },
      ],
      attracts:
        'Reconhecimento, na dose que você nunca recebeu — literalmente 100, a única vez que a ' +
        'régua satura em dezesseis tipos. Ninguém pede explicação para o silêncio, ninguém ' +
        'interpreta a franqueza, ninguém precisa que o plano seja traduzido em sentimento antes de ' +
        'ser avaliado. Você diz três palavras e a pessoa já está no mesmo lugar. É uma das ' +
        'descrições mais precisas de alívio que existem para o seu tipo, e é exatamente por isso ' +
        'que a página tem dois eixos: o número ao lado é 5.',
      friction:
        'Duas máquinas idênticas têm pontos cegos idênticos. Se em quarto lugar nos dois significa ' +
        'que ninguém percebe que a casa está caindo aos pedaços; Fi em terceiro nos dois significa ' +
        'que ninguém diz a parte do sentimento primeiro. E, quando os dois modelos de futuro ' +
        'divergem, não há uma terceira função no par disposta a ceder — só duas certezas ' +
        'construídas em silêncio.',
      theyNeed:
        'Exatamente o que você precisa, e é esse o problema: os dois estão esperando o outro ir ' +
        'primeiro, e esperar é a habilidade em que ambos são excelentes. Alguém tem de quebrar a ' +
        'simetria. Nomear que o silêncio não é distância, dizer que a coisa importa, começar a ' +
        'conversa que os dois já concluíram sozinhos há semanas.',
      youNeed:
        'O mesmo. E convém saber que isso é assimétrico na prática: quem quebra a simetria ' +
        'primeiro é quem sustenta o par. Se a sua leitura for “ele também deveria”, a leitura está ' +
        'correta e não muda nada.',
      failure:
        'O único 100 desta página é também um dos caminhos mais eficientes para a solidão, e o ' +
        'complemento 5 explica por quê: não há uma única coisa que falta em você que o outro possa ' +
        'fornecer. Duas pessoas que concluem sozinhas, arquivam a mágoa em Fi e nunca abrem o ' +
        'arquivo. Não termina em briga — termina em agenda: duas vidas eficientes correndo em ' +
        'paralelo no mesmo apartamento, com um respeito mútuo que nenhum dos dois jamais converteu ' +
        'numa frase. E quando um decide encerrar, a decisão foi tomada meses antes, em silêncio, ' +
        'sem recurso. O outro vai perguntar por que não foi avisado. E a resposta honesta — ' +
        '<em>porque você teria feito igual</em> — não ajuda ninguém.',
    },
  },
};
