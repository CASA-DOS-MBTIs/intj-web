import type { BigFiveDeepContent } from '../types';

export const BIG_FIVE_PT: BigFiveDeepContent = {
  meta: {
    title: 'Big Five — o único modelo com pesquisa de verdade por trás',
    description:
      'Os cinco fatores aplicados ao INTJ: o que as correlações de McCrae e Costa (1989) ' +
      'realmente implicam, por que nenhuma escala do MBTI corresponde ao neuroticismo e de onde ' +
      'saiu o sufixo -A/-T.',
  },

  sources: [
    'jung-1921',
    'mccrae-costa-1989',
    'costa-mccrae-1992',
    'neris-our-theory',
    'pittenger-1993',
    'pittenger-2005',
    'myers-1998-manual',
  ],

  header: {
    eyebrow: 'Além do MBTI · Big Five',
    title: 'Cinco réguas\ne uma que falta',
    lede:
      'Este é o único modelo desta seção que a psicologia acadêmica leva a sério: cinco fatores ' +
      'contínuos, com normas, erro de medida e uma estrutura que reaparece em amostra após ' +
      'amostra. Ele não te dá um nome. Dá uma posição em cinco réguas — e uma delas o seu código ' +
      'de quatro letras <strong>simplesmente não mede</strong>.',
  },

  intro:
    'As barras desta página indicam <strong>direção, não medida</strong>. Elas foram derivadas ' +
    'das correlações entre as escalas contínuas do MBTI e as escalas dos cinco fatores, ' +
    'publicadas por McCrae e Costa em 1989 com 468 adultos — e não de uma amostra de INTJs ' +
    'submetida ao NEO-PI-R, que ninguém coletou. “Abertura 92%” aqui significa “o polo N puxa ' +
    'para o alto desta régua”; jamais “o INTJ está no percentil 92”. A distância entre as duas ' +
    'leituras é a distância entre um mapa e uma medição.',

  caveat:
    'O Big Five é o único modelo desta seção com base de pesquisa real: uma estrutura de cinco ' +
    'fatores que reaparece em amostras grandes e em vários idiomas, com normas, confiabilidade e ' +
    'erro de medida publicados (Costa & McCrae, 1992). Isso vale para o modelo. A ponte entre ' +
    'ele e o seu código de quatro letras é outra coisa: um estudo, 1989, N = 468, dois ' +
    'questionários de autorrelato correlacionados um com o outro. Firme o bastante para ' +
    'orientar, frágil o bastante para não virar veredicto.',

  traits: [
    {
      name: 'Abertura à experiência',
      width: '92%',
      level: 'MUITO ALTA · r = 0,72',
      text:
        'No NEO-PI-R, abertura é a amplitude e a permeabilidade da vida mental, medida em seis ' +
        'facetas: fantasia, estética, sentimentos, ações, ideias e valores. Não é inteligência ' +
        'nem cultura acumulada — é apetite por experiência interna nova, e o apetite tende a ' +
        'aparecer nas seis frentes ao mesmo tempo (Costa & McCrae, 1992).',
      asIntj:
        'É a correspondência mais limpa entre os dois modelos: a escala S–N, pontuada na direção ' +
        'de N, correlaciona 0,72 com abertura. O N da sua sigla e este fator estão medindo quase ' +
        'o mesmo terreno — e o terreno é o Ni: fome de padrão, de teoria, de sistema ainda não ' +
        'formulado. Cuidado, porém, com o mito confortável de que o intuitivo é alto em ideias e ' +
        'baixo em estética. A correlação atravessa as facetas, a estética inclusive; nada nos ' +
        'dados recorta o belo para fora do seu perfil. O que fica de fora não é a beleza — é o ' +
        'agora, o sensorial imediato que o Se inferior registra tarde e mal. Você pode ouvir ' +
        'Bach por três horas e ainda esquecer de jantar.',
    },
    {
      name: 'Conscienciosidade',
      width: '84%',
      level: 'ALTA · r = −0,49',
      text:
        'Conscienciosidade é controle de impulso a serviço de metas: competência, ordem, senso ' +
        'de dever, esforço por realização, autodisciplina e ponderação (Costa & McCrae, 1992). ' +
        'Mede o quanto você planeja, persiste e resiste ao desvio — não o quanto você trabalha ' +
        'bem, e muito menos o quanto você vale.',
      asIntj:
        'A escala J–P, pontuada na direção de P, correlaciona −0,49 com conscienciosidade: o ' +
        'polo J acompanha a metade alta da régua, mas com folga larga. Cerca de um quarto da ' +
        'variância é compartilhada, e os outros três quartos são exatamente onde vive o INTJ de ' +
        'mesa caótica e prazo cumprido. No seu caso a conscienciosidade é fabricada pelo Te e ' +
        'apontada para dentro: esforço por realização e autodisciplina contra um plano que você ' +
        'mesmo escreveu, não senso de dever diante de uma regra alheia. O J não promete ordem no ' +
        'quarto. Promete ordem no plano.',
    },
    {
      name: 'Extroversão',
      width: '18%',
      level: 'BAIXA · r ≈ −0,7',
      text:
        'Extroversão, no NEO-PI-R, é a quantidade e a intensidade do engajamento interpessoal, ' +
        'somadas ao nível de atividade e ao afeto positivo: acolhimento, gregarismo, ' +
        'assertividade, atividade, busca de excitação e emoções positivas (Costa & McCrae, ' +
        '1992). O polo baixo descreve apetite, não capacidade — quem pontua baixo não é incapaz ' +
        'de convívio, apenas não vai atrás dele.',
      asIntj:
        'A correspondência mais forte de todas: a escala E–I, pontuada na direção de I, ' +
        'correlaciona cerca de −0,7 com extroversão (−0,69 em mulheres, −0,74 em homens). O I do ' +
        'seu código e este fator são quase a mesma medida com dois nomes. E é aqui que mora a ' +
        'confusão que quase toda descrição de INTJ comete: assertividade é uma faceta da ' +
        'extroversão, a terceira delas. “Extroversão baixa com assertividade alta” só soa ' +
        'contraditório se você tratar o domínio como uma coisa só; ele é a média de seis, e ' +
        'média é onde a discordância entre as partes vai se esconder. A assertividade é a faceta ' +
        'pela qual o INTJ silencioso ainda assume o comando de uma sala em que não quis entrar. ' +
        'Note o que isso é e o que não é: ninguém publicou um perfil de facetas para INTJs. A ' +
        'estrutura do domínio dissolve a contradição aparente; ela não a mediu.',
    },
    {
      name: 'Amabilidade',
      width: '34%',
      level: 'BAIXA A MÉDIA · r = 0,44',
      text:
        'Amabilidade é a orientação interpessoal cooperativa contra a antagonística, em seis ' +
        'facetas: confiança, franqueza, altruísmo, complacência, modéstia e sensibilidade (Costa ' +
        '& McCrae, 1992). O polo baixo não é crueldade — é ceticismo, competitividade e ' +
        'disposição a discordar em voz alta.',
      asIntj:
        'Os 0,44 entre T–F e amabilidade são a mais fraca das quatro correspondências: menos de ' +
        'um quinto da variância em comum. É pouco, e é justamente essa correlação magra que o ' +
        'senso comum estica até “pensadores são frios”. Não estica. T é um critério de decisão — ' +
        'lógica impessoal acima de valor pessoal; amabilidade é um estilo de trato. Você pode ' +
        'ser baixo em complacência (não concorda por conveniência, não recua para manter a paz) ' +
        'e alto em altruísmo, e o domínio devolve uma média morna que não descreve nenhuma das ' +
        'duas coisas. Repare ainda no detalhe que quase todo texto sobre INTJ inverte: franqueza ' +
        'é faceta da amabilidade, e mede sinceridade contra manipulação, não delicadeza. Ser ' +
        'direto não te derruba na régua — te torna difícil de bajular.',
    },
    {
      name: 'Neuroticismo',
      width: '50%',
      level: 'SEM ANÁLOGO NO MBTI',
      text:
        'Neuroticismo é a propensão ao afeto negativo e à desregulação sob pressão: ansiedade, ' +
        'hostilidade, depressão, autoconsciência excessiva, impulsividade e vulnerabilidade ' +
        '(Costa & McCrae, 1992). É o fator que a literatura liga de forma mais consistente a ' +
        'sofrimento psicológico — e não tem relação com inteligência, caráter ou competência.',
      asIntj:
        'Este é o fato mais importante desta página: nenhuma escala do MBTI corresponde ao ' +
        'neuroticismo. Em 1989 as quatro dicotomias foram correlacionadas com os cinco fatores; ' +
        'quatro delas acharam par, e o quinto fator ficou sozinho. A consequência direta é ' +
        'brutal: as suas quatro letras não dizem absolutamente nada sobre quanto você sofre. ' +
        'Dois INTJs com a mesma pilha Ni–Te–Fi–Se, um sereno e outro corroído por ansiedade, ' +
        'recebem o mesmo código — e o instrumento não erra ao fazer isso, porque foi construído ' +
        'para ordenar preferências numa população não clínica, não para medir ajustamento ' +
        '(Myers et al., 1998). A barra ao lado está no meio porque não há direção a indicar. É a ' +
        'única régua desta página em que o seu tipo não te coloca em lugar nenhum.',
    },
  ],

  sections: [
    {
      eyebrow: 'Forma',
      title: 'Dimensões contínuas, e o que isso faz com uma sigla',
      paragraphs: [
        'Uma sigla é uma afirmação de espécie: você <em>é</em> I, ponto final. O Big Five só faz ' +
          'afirmações de grau. Não existe “tipo alto em abertura”; existe um escore, uma norma ' +
          'contra a qual compará-lo e um erro de medida em volta dele. Trocar um pelo outro é ' +
          'trocar um mapa de fronteiras por um mapa de altitude — e depois estranhar que a ' +
          'fronteira não apareça na paisagem.',
        'O detalhe desconfortável é que o próprio MBTI produz um número antes de produzir uma ' +
          'letra. O manual reporta um índice de clareza da preferência, isto é, o quanto as ' +
          'respostas puxaram para um lado, e a letra é o que sobra depois de aplicar um corte a ' +
          'esse número (Myers et al., 1998). Duas pessoas separadas por uma única resposta caem ' +
          'em categorias diferentes; duas pessoas com o mesmo I podem estar a uma distância ' +
          'enorme uma da outra na régua da extroversão.',
        'É exatamente aí que a crítica de Pittenger morde. Os escores se distribuem de forma ' +
          'contínua, com a maior parte das pessoas perto do meio, e não em dois montes ' +
          'separados nos polos; o que categoriza é o ponto de corte, não a natureza (Pittenger, ' +
          '1993; 2005). Isso não anula a linguagem de tipo como vocabulário — anula tratá-la ' +
          'como se cada letra fosse uma fronteira encontrada no mundo.',
      ],
      points: [
        'A letra é o sinal do número, não o número.',
        'Uma preferência marginal e uma preferência extrema recebem exatamente a mesma letra.',
        'Perto do corte, um reteste troca a letra sem que a pessoa tenha mudado.',
        'No Big Five não há corte a defender: o escore já é o resultado.',
      ],
    },
    {
      eyebrow: 'Correspondências',
      title: 'O que os números de 1989 realmente dizem',
      paragraphs: [
        'McCrae e Costa aplicaram o MBTI e um inventário dos cinco fatores aos mesmos 468 ' +
          'adultos e correlacionaram escala com escala (McCrae & Costa, 1989). As escalas do ' +
          'MBTI são pontuadas na direção do segundo polo — I, N, F, P —, e é só por isso que ' +
          'dois dos quatro números saem negativos: o sinal é convenção de pontuação, não ' +
          'descoberta sobre você.',
        'Correlação não é identidade. Um r de 0,72 significa cerca de metade da variância em ' +
          'comum; 0,44 significa menos de um quinto. Dizer “N é abertura” é um exagero ' +
          'tolerável; dizer “T é amabilidade baixa” já é caricatura. E os dois lados da conta ' +
          'são autorrelato — a mesma pessoa respondendo dois questionários no mesmo estado de ' +
          'espírito —, o que tende a inflar esse tipo de correlação. O achado é firme sobre ' +
          'questionários; a coincidência entre as teorias por trás deles continua sendo ' +
          'inferência sua.',
        'A leitura dos próprios autores foi econômica e pouco lisonjeira para o MBTI: o ' +
          'instrumento parece medir um subconjunto do modelo de cinco fatores, com uma dimensão ' +
          'a menos e uma camada teórica a mais, e no mesmo artigo eles argumentaram que os ' +
          'escores contínuos eram mais defensáveis do que as categorias construídas sobre eles.',
      ],
      points: [
        'E–I × Extroversão: cerca de −0,7 (−0,69 em mulheres, −0,74 em homens) — a mais forte.',
        'S–N × Abertura: 0,72.',
        'J–P × Conscienciosidade: −0,49.',
        'T–F × Amabilidade: 0,44 — a mais fraca das quatro.',
        'Neuroticismo: nenhuma escala do MBTI corresponde.',
      ],
    },
    {
      eyebrow: 'A lacuna',
      title: 'O sufixo -A/-T nasceu deste buraco',
      paragraphs: [
        'A quinta régua não escapou do estudo por acaso: ela não existe no instrumento. Myers e ' +
          'Briggs construíram um classificador de <em>preferências</em> para pessoas saudáveis, ' +
          'e estabilidade emocional nunca foi uma preferência — é um traço, e um traço que ' +
          'ninguém escolhe. O resultado é um sistema minucioso sobre como você decide e em ' +
          'silêncio absoluto sobre quanto isso te custa.',
        'A NERIS, que publica o teste de dezesseis personalidades mais respondido do mundo, ' +
          'resolveu o problema pelo caminho mais direto: acrescentou uma quinta escala. A ' +
          'empresa afirma ter se afastado dos tipos junguianos e organizado o questionário em ' +
          'torno de traços do modelo de cinco fatores, mantendo as letras de Myers como atalho ' +
          'reconhecível e somando a dimensão Identidade — Assertivo contra Turbulento (NERIS, ' +
          's.d.). O -A e o -T que você vê em toda parte são, em substância, a régua que faltava, ' +
          'colada no fim da sigla.',
        'Duas consequências, e nenhuma é confortável. A primeira: -A/-T não é um achado sobre ' +
          'INTJs, é uma decisão de projeto. Alguém notou a ausência e a preencheu, o que é ' +
          'diferente de descobrir que o tipo vem em duas versões emocionais. A segunda: o ' +
          'instrumento da NERIS é comercial e proprietário, sem o escrutínio revisado por pares ' +
          'que o NEO-PI-R acumulou. Se você quer saber onde está no neuroticismo, o sufixo é um ' +
          'indício simpático, não uma medida.',
      ],
    },
    {
      eyebrow: 'Facetas',
      title: 'Seis facetas por domínio, e a média que engana',
      paragraphs: [
        'O NEO-PI-R não mede cinco coisas: mede trinta, agrupadas em cinco (Costa & McCrae, ' +
          '1992). Cada domínio é a soma de seis facetas que caminham juntas o bastante para ' +
          'formar um fator e separadas o bastante para discordarem dentro da mesma pessoa. O ' +
          'escore do domínio é uma média — e média é o lugar onde a informação vai morrer.',
        'É por isso que “extroversão baixa com assertividade alta” não é contradição nenhuma. A ' +
          'assertividade mede dominância, iniciativa e disposição a falar primeiro, e não tem ' +
          'obrigação alguma de acompanhar gregarismo e busca de excitação. Um INTJ pode ser ' +
          'esvaziado por convívio, indiferente a festa e avesso a risco sensorial — e ainda ' +
          'assim ser a pessoa que decide o rumo da reunião antes do café esfriar.',
        'O que não dá para fazer é fingir que isso foi medido. O estudo de 1989 correlacionou ' +
          'domínios, não facetas, e não há perfil de facetas publicado para INTJs. A estrutura ' +
          'do NEO-PI-R explica por que a descrição popular não se contradiz; ela não a confirma.',
      ],
      points: [
        'Neuroticismo: ansiedade, hostilidade, depressão, autoconsciência, impulsividade, ' +
          'vulnerabilidade.',
        'Extroversão: acolhimento, gregarismo, assertividade, atividade, busca de excitação, ' +
          'emoções positivas.',
        'Abertura: fantasia, estética, sentimentos, ações, ideias, valores.',
        'Amabilidade: confiança, franqueza, altruísmo, complacência, modéstia, sensibilidade.',
        'Conscienciosidade: competência, ordem, senso de dever, esforço por realização, ' +
          'autodisciplina, ponderação.',
      ],
    },
    {
      eyebrow: 'Um mal-entendido comum',
      title: 'Abertura inclui o estético — o que fica de fora é o presente',
      paragraphs: [
        'Circula na literatura de tipologia, e circulou também na versão resumida desta seção, a ' +
          'ideia de que o intuitivo é alto em ideias e baixo em estética. Não há apoio para ' +
          'isso. A abertura correlaciona com a intuição ao longo das facetas, a estética ' +
          'inclusive; o fator existe justamente porque fantasia, arte, sentimento e ideia sobem ' +
          'juntos na mesma pessoa.',
        'O que de fato fica fora do seu alcance não é o belo — é o imediato: o presente ' +
          'sensorial, o corpo, o dado bruto que chega pelos sentidos antes de virar significado. ' +
          'E isso é uma afirmação sobre Se inferior, vocabulário de Jung e de Myers, não sobre o ' +
          'Big Five: no modelo de cinco fatores não existe função sensorial alguma para ' +
          'pontuar. Duas línguas diferentes, e para esta palavra a tradução simplesmente não ' +
          'tem correspondente.',
      ],
    },
    {
      eyebrow: 'Limites',
      title: 'O que este modelo não te dá',
      paragraphs: [
        'No Big Five não existe INTJ. Existem cinco escores. “INTJ” é uma categoria importada de ' +
          'outro instrumento, e tudo nesta página é tradução — traduções perdem coisas, e o que ' +
          'se perde aqui é a narrativa. O modelo não tem função dominante, não tem motivação, ' +
          'não tem medo básico. Ele não conta história nenhuma sobre você, e essa recusa é ' +
          'metade do seu valor.',
        'Em troca, entrega o que nenhum outro mapa desta seção entrega: normas contra as quais ' +
          'comparar um escore, estabilidade em reteste, erro de medida declarado e uma estrutura ' +
          'fatorial que insiste em reaparecer em amostras e idiomas diferentes (Costa & McCrae, ' +
          '1992). É pouco romântico e é verificável, que é precisamente o negócio que a ciência ' +
          'oferece.',
        'O aviso final vale nos dois sentidos. Pittenger argumenta que o MBTI não deveria ' +
          'orientar decisões consequentes — seleção, promoção, direção de carreira —, porque a ' +
          'evidência de validade preditiva não sustenta esse uso (Pittenger, 1993; 2005). Um ' +
          'perfil de cinco fatores derivado por correlação a partir de quatro letras herda esse ' +
          'limite inteiro e acrescenta o seu: você está lendo a estimativa de uma estimativa.',
      ],
    },
  ],

  verdict: {
    title: 'O único modelo desta seção que ganharia a discussão',
    text:
      'Se você ficar com uma frase desta página, fique com esta: o Big Five é o modelo com ' +
      'pesquisa de verdade por trás, e mesmo ele se recusa a te dar um nome. Não te chama de ' +
      'INTJ, não te chama de estrategista, não te promete nada — dá cinco posições e o erro de ' +
      'cada uma. Use-o como calibragem do resto do site: quando eneagrama, tritipo e ' +
      'temperamento estiverem cantando em harmonia suspeita, é este modelo que interrompe para ' +
      'perguntar quanto, comparado a quem, medido como. E não esqueça da régua que falta. A ' +
      'dimensão mais consistentemente ligada a sofrimento psicológico é exatamente aquela sobre ' +
      'a qual as suas quatro letras não dizem uma palavra.',
    weight:
      'Evidência: alta no modelo, moderada na ponte com o MBTI, nula no “perfil Big Five do ' +
      'INTJ” tratado como dado medido.',
  },
};
