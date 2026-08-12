import type { VariantDeep } from '../../types';
import type { SourceId } from '../../sources';

const FONTES: SourceId[] = [
  'naranjo-1994',
  'chestnut-2013',
  'fauvre-instincts',
  'riso-hudson-1999',
  'hook-2021',
];

export const DEEP_SP_PT: VariantDeep = {
  lede:
    'Você não é ansioso: você é abastecido. O instinto de autopreservação faz a atenção correr, ' +
    'antes de qualquer outra coisa, para a margem — o que há na conta, o que há no armário, ' +
    'quantas horas você dormiu, quanto tempo você aguenta sem depender de ninguém. Num INTJ isso ' +
    'encontra o ponto cego perfeito: a <strong>Se inferior</strong> não reporta o corpo, então o ' +
    '<strong>Te</strong> assume o posto e administra por número aquilo que deveria ser sentido. ' +
    'O resultado é a pessoa mais autossuficiente que você conhece — e a que menos percebe o dia ' +
    'em que a autossuficiência deixou de proteger uma vida e passou a ocupar o lugar dela.',

  sections: [
    {
      eyebrow: 'Para onde a energia vai primeiro',
      title: 'A auditoria antes do dia',
      paragraphs: [
        'Antes da ambição, antes das pessoas, antes do projeto: o inventário. Não é um pensamento ' +
          'consciente, é o filtro por onde tudo passa antes de chegar à consciência. Um convite ' +
          'não chega como convite; chega como custo — deslocamento, sono perdido, dinheiro, a ' +
          'manhã seguinte comprometida. Você responde depois de fazer a conta, e a conta é feita ' +
          'rápido demais para que você a reconheça como conta. Por isso a recusa sai antes da ' +
          'vontade: a vontade só é consultada quando o orçamento aprova.',
        'Num INTJ essa vigilância assume uma forma particular, porque <strong>Ni</strong> detesta ' +
          'refazer trabalho já feito. Você resolve a autopreservação uma vez, por sistema, e ' +
          'depois defende o sistema em vez de reabrir a questão. Daí o horário fixo, a mesma ' +
          'refeição durante quatro meses, três unidades de tudo que funciona, a planilha que ' +
          'ninguém pediu e que você mantém há sete anos. Isso não é rigidez de temperamento — é ' +
          'economia cognitiva. Cada decisão automatizada é atenção devolvida ao que interessa, e ' +
          'quem mexe na rotina não está sendo espontâneo: está gastando o seu processador.',
      ],
      points: [
        'Convites precificados pelo que custam de sono, de deslocamento e da manhã seguinte.',
        'Redundância comprada de propósito: dois de tudo que quebra, três de tudo que funciona.',
        'A pergunta que antecede qualquer plano — quantos meses eu sobrevivo sem depender de ' +
          'ninguém.',
        'Conforto tratado como infraestrutura e não como luxo: cadeira, colchão, temperatura, ' +
          'silêncio.',
        'Uma irritação desproporcional com mudanças de última hora que outra pessoa acharia ' +
          'triviais.',
      ],
    },
    {
      eyebrow: 'A moeda real',
      title: 'Não é dinheiro. É autonomia.',
      paragraphs: [
        'Reduzir este instinto a avareza é errar o alvo por inteiro. Dinheiro é apenas a forma ' +
          'mais fácil de estocar a coisa que você realmente acumula: independência. Você poupa ' +
          'tempo, energia, obrigações não assumidas e favores não recebidos com a mesma disciplina ' +
          'com que outra pessoa poupa capital — e “dívida” é a palavra mais feia do seu ' +
          'vocabulário, muito além do sentido financeiro. Carona é dívida. Hospedagem é dívida. ' +
          'Uma indicação profissional é dívida. Você prefere pagar caro a dever barato.',
        'É aqui que o instinto encosta na <strong>Fi</strong>, e o encontro é decisivo. Te sabe ' +
          'precificar qualquer coisa; Fi é quem decide o que é inegociável — e a linha que a Fi ' +
          'traça neste subtipo costuma ser exatamente esta: ninguém manda em mim porque ninguém me ' +
          'sustenta. O movimento mais típico do INTJ sp segue daí, e visto de fora parece ' +
          'irracional: recusar uma oportunidade boa, às vezes ótima, porque ela exigiria depender ' +
          'de alguém durante dezoito meses. Não foi medo. Foi um valor sendo defendido com uma ' +
          'planilha.',
      ],
    },
    {
      eyebrow: 'O corpo',
      title: 'Administrado por número, porque não é sentido',
      paragraphs: [
        'Nenhum outro INTJ cuida tão bem do corpo, e nenhum outro o conhece tão mal. A ' +
          '<strong>Se inferior</strong> é o canal que deveria avisar fome, dor, cansaço e tédio, e ' +
          'esse canal chega tarde e baixo. O instinto de autopreservação não tolera essa lacuna, ' +
          'então o Te a preenche com o que sabe fazer: protocolo. Programa de treino cumprido com ' +
          'mais disciplina do que quem gosta de treinar. Exame anual em dia. Você sabe o seu ' +
          'percentual de gordura, a sua média de sono e a sua pressão de repouso, e continua sem ' +
          'saber se está cansado.',
        'A consequência é específica e vale ser dita sem rodeio: o seu sistema de aviso é ' +
          'justamente o que não funciona. Um sintoma sentido há seis semanas não vira consulta ' +
          'porque nunca chegou a virar frase; a exaustão não é reportada, é <em>descoberta</em> — ' +
          'por um número que saiu da faixa, ou por uma manhã em que o sistema simplesmente não ' +
          'liga. O INTJ sp raramente chega ao esgotamento por desleixo. Chega por confiar num ' +
          'painel que não tem sensor para a única coisa que importava medir.',
      ],
    },
    {
      eyebrow: 'O que fica sem verba',
      title: 'Os outros dois instintos, cronicamente subfinanciados',
      paragraphs: [
        'O instinto social é o primeiro a ser cortado, e o corte é silencioso porque você não ' +
          'sente falta. Os seus colegas não fazem ideia do que você entrega. Você acredita que o ' +
          'trabalho fala por si; ele não fala, e o INTJ social sentado três mesas adiante sabe ' +
          'disso desde sempre. O resultado é a experiência mais frequente deste subtipo: ver a ' +
          'promoção, o convite ou o projeto irem para alguém visivelmente menos competente — e ' +
          'concluir, com dados, que o mundo é injusto, quando a variável que faltava era barata e ' +
          'estava disponível.',
        'O um-a-um é adiado com mais elegância. Você não recusa a intimidade: você a agenda para ' +
          'depois que as condições estiverem certas. E cada vínculo novo é lido primeiro como ' +
          'perturbação do sistema — a rotina desmontada, o silêncio interrompido, a reserva ' +
          'dividida. Como a fortaleza nunca é declarada pronta, o depois não chega. É por isso que ' +
          'este é o subtipo que mais confunde solidão com preferência, e que descobre a diferença ' +
          'entre as duas coisas por volta dos quarenta.',
      ],
    },
    {
      eyebrow: 'Visto de fora',
      title: 'O que as pessoas acham que estão vendo',
      paragraphs: [
        'De longe, leem sovinice, medo e falta de ambição. De perto — de dentro de casa, ' +
          'sobretudo — leem controle: a insistência com o horário, a reação desproporcional a uma ' +
          'mudança de plano, a sensação de que existe um regulamento não escrito que só você ' +
          'conhece. Quase ninguém percebe que a rigidez toda protege uma coisa só, e que essa ' +
          'coisa não é conforto. É a capacidade de dizer não.',
        'Há também uma leitura simpática e igualmente incômoda: você vira infraestrutura. Como ' +
          'está sempre resolvido, sempre com margem, sempre disponível para emprestar o que ' +
          'ninguém mais tem, você se torna o ponto sólido do grupo — e ninguém pergunta como você ' +
          'está, porque a pergunta parece dispensável diante de tanta solidez. O INTJ sp costuma ' +
          'reclamar disso em silêncio e nunca corrigir, porque corrigir exigiria pedir. E pedir é ' +
          'dívida.',
      ],
    },
    {
      eyebrow: 'O ponto de virada',
      title: 'Quando a fortaleza começa a substituir a vida',
      paragraphs: [
        'A fortaleza funciona. Esse é o problema, e não há ironia na frase: ela cumpre exatamente ' +
          'o que promete, o que a torna quase impossível de questionar. Só que a autopreservação é ' +
          'um meio, e meios bem construídos têm o hábito de se tornarem fins. A partir de certo ' +
          'ponto você já não constrói margem para viver de determinada maneira; você vive de ' +
          'determinada maneira para continuar construindo margem.',
        'O sintoma é o mais caro que este tipo pode pagar. A visão de Ni — o projeto longo, a ' +
          'mudança de país, a obra, a coisa que só você enxerga inteira — vai para o armazém, ' +
          'ao lado da reserva de emergência, à espera de um momento seguro. Esse momento nunca é ' +
          'declarado, porque declará-lo custaria justamente a margem. Um INTJ desperdiçado quase ' +
          'nunca é um INTJ que falhou; é um INTJ que ficou pronto e não gastou.',
      ],
    },
  ],

  strengths: [
    {
      title: 'A margem compra recusa',
      text:
        'Reserva não é conforto: é poder de veto. Você pode sair de um emprego tóxico no mesmo ' +
        'mês, esperar o mercado virar, recusar um contrato humilhante — e o INTJ que pode recusar ' +
        'negocia de um lugar em que quase ninguém negocia.',
    },
    {
      title: 'O ponto cego mais bem administrado dos três',
      text:
        'Se é a função inferior de todo INTJ; você é o único dos três instintos que a leva a sério ' +
        'antes que ela cobre. Sono, comida e movimento tratados como infraestrutura entregam, na ' +
        'prática, mais anos de Ni funcionando bem.',
    },
    {
      title: 'Decisão sem pânico',
      text:
        'Urgência financeira distorce julgamento, e você quase nunca decide sob ela. É por isso ' +
        'que as suas escolhas grandes envelhecem melhor do que as dos seus pares: elas foram ' +
        'tomadas por alguém que podia esperar.',
    },
    {
      title: 'Constância sem entusiasmo',
      text:
        'O plano sobrevive aos meses chatos, e a maior parte de qualquer plano é mês chato. Você ' +
        'não depende de motivação porque nunca dependeu — o sistema roda igual em janeiro e em ' +
        'agosto.',
    },
  ],

  traps: [
    {
      title: 'A reserva que nunca é gasta',
      text:
        'Segurança que jamais é testada é indistinguível de imobilidade, e a diferença entre as ' +
        'duas só aparece no extrato de uma vida. Se a margem cresce todo ano e nada é feito com ' +
        'ela, o instinto deixou de servir a você.',
    },
    {
      title: 'Recusa por reflexo',
      text:
        'O não sai antes da avaliação, e depois o Te fabrica a justificativa — competente, ' +
        'coerente e retroativa. O sinal de alerta é notar que você nunca disse sim a nada que ' +
        'exigisse depender de alguém por mais de uma semana.',
    },
    {
      title: 'Protocolo no lugar de sensação',
      text:
        'Métrica é um bom complemento e um péssimo substituto. Enquanto todo sinal do corpo tiver ' +
        'de passar por um número para ser levado a sério, você continuará descobrindo o cansaço ' +
        'depois que ele virou dano.',
    },
    {
      title: 'Solidão logística',
      text:
        'Vínculos avaliados como perturbação da rotina são sempre reprovados, porque perturbação é ' +
        'exatamente o que eles são. Nenhuma pessoa real passa nesse critério, e o critério nunca é ' +
        'submetido a revisão.',
    },
  ],

  stress:
    'Contrai — e a contração é discreta o bastante para passar por disciplina, inclusive aos seus ' +
    'próprios olhos. O mapa encolhe até o apartamento e o trabalho, os convites são recusados em ' +
    'bloco, o telefone vira uma superfície de vidro que ninguém atravessa. Por dentro, o ' +
    '<strong>Te</strong> se vira para o que ainda pode ser controlado: a conta é conferida três ' +
    'vezes por dia, o sintoma é pesquisado até o fim da internet, o estoque é refeito antes de ' +
    'acabar, a apólice é revista. E o alívio chega pela <strong>Se inferior</strong> na forma mais ' +
    'barata disponível — comida entregue, compras que se justificam como preparo, temporadas ' +
    'inteiras numa noite. Repare na ironia própria deste subtipo, porque ela é o motivo de o ' +
    'quadro durar mais do que deveria: aqui o colapso se disfarça de autocuidado. Ninguém ' +
    'interrompe alguém que está apenas se organizando.',

  growth: [
    {
      title: 'Gaste a margem de propósito',
      text:
        'Escolha um valor, uma data e uma coisa irrecuperável — a viagem, o curso, o equipamento, ' +
        'o ano sabático — e gaste. Não por hedonismo: para verificar, empiricamente, que a ' +
        'reserva volta. Enquanto isso não for testado, ela governa você.',
    },
    {
      title: 'Deixe alguém carregar algo pequeno',
      text:
        'Peça uma carona, aceite a hospedagem, deixe que resolvam uma coisa por você. Dependência ' +
        'pequena e reversível é a única dose em que este instinto aceita treinar, e é a única ' +
        'maneira de descobrir que devolver favor não é humilhação.',
    },
    {
      title: 'Um canal de sensação sem métrica',
      text:
        'Uma atividade física, culinária ou manual que você tenha proibido de virar número: sem ' +
        'relógio, sem meta, sem registro. A Se só se desenvolve quando não está sendo auditada — ' +
        'e é ela que devolve o aviso precoce que o painel não dá.',
    },
    {
      title: 'Torne o trabalho visível quatro vezes por ano',
      text:
        'O instinto social é o seu terceiro, e negligência não é neutra: ela redistribui crédito. ' +
        'Um relato curto e datado do que você entregou, quatro vezes por ano, corrige a maior ' +
        'parte do prejuízo sem nenhuma política de escritório.',
    },
    {
      title: 'Ponha data no momento seguro',
      text:
        'A visão guardada só sai do armazém se for marcada no calendário como qualquer outro ' +
        'projeto. Escreva a condição que a liberaria e verifique se ela já foi cumprida há três ' +
        'anos — normalmente foi.',
    },
  ],

  misread:
    'Leem como avareza, como medo e, entre quem conhece eneagrama, como tipo 5 — a fortaleza de ' +
    'autopreservação é o retrato de escola do 5sp, e um INTJ 1, 3 ou 8 com sp dominante passa a ' +
    'vida sendo tipado errado por causa disso. Leem também como falta de ambição, que é o oposto ' +
    'exato do que está acontecendo: a ambição existe, está inteira e está guardada à espera de ' +
    'condições que você mesmo tornou impossíveis de declarar. E, dentro de casa, a sua calma é ' +
    'lida como indiferença — quando é apenas a aparência de um sistema que, naquele momento, está ' +
    'funcionando.',

  versus:
    'O social é o vizinho que mais se parece com você por fora: os dois planejam, os dois ' +
    'constroem estrutura, os dois são descritos como frios por quem não convive. A diferença é ' +
    'para onde a estrutura aponta. Você constrói muro; ele constrói posição. Terminado um projeto, ' +
    'você pergunta quanto sobrou de reserva e ele pergunta quanto sobrou de reputação — e é por ' +
    'isso que ele é promovido e você é confiável. Contra o um-a-um a distância é maior e mais ' +
    'incômoda: o sx gasta num único vínculo, em seis semanas, exatamente a margem que você levou ' +
    'dez anos acumulando, e considera isso barato. Você o acha imprudente; ele o acha adiado. Os ' +
    'dois têm razão sobre o outro e nenhum tem sobre si.',

  sources: FONTES,
};

export const DEEP_SO_PT: VariantDeep = {
  lede:
    'Não confunda com sociabilidade — você provavelmente detesta festas. O instinto social é sobre ' +
    '<em>lugar</em>: posição, hierarquia, reputação, o peso que você tem dentro de um grupo que ' +
    'importa para você. Num INTJ isso produz uma criatura desconcertante: alguém profundamente ' +
    'reservado que, na segunda reunião, já sabe quem decide de verdade, qual aliança está ' +
    'apodrecendo e onde a decisão vai ser tomada — porque <strong>Ni</strong> lê um grupo ' +
    'exatamente como leria qualquer outro sistema, e <strong>Te</strong>, tendo lido, aceita o ' +
    'cargo. O preço é específico e silencioso: a reputação começa, devagar, a fazer o trabalho que ' +
    'cabia à Fi.',

  sections: [
    {
      eyebrow: 'Para onde a energia vai primeiro',
      title: 'O mapa de poder antes do assunto',
      paragraphs: [
        'Você entra numa sala e a sala é lida antes da pauta. Quem interrompe quem sem custo, quem ' +
          'olha para quem antes de concordar, qual silêncio é autoridade e qual é medo, quem tem o ' +
          'título e quem tem a decisão. Isso não é escolha: acontece mesmo quando você preferia ' +
          'estar pensando no problema técnico. É comum sair de uma reunião sabendo menos sobre o ' +
          'tema do que sobre a política que decidirá o tema — e ter razão, meses depois, sobre ' +
          'quem venceria.',
        'O que torna o INTJ social difícil de identificar é que nada disso vem acompanhado de ' +
          'gosto por gente. Você não circula, não puxa conversa e sai cedo. Mas mantém, sem ' +
          'esforço aparente, um modelo atualizado do organograma que não está no organograma — e ' +
          'esse modelo é bom o suficiente para ser usado. Ni não lê pessoas uma a uma; lê a ' +
          'estrutura entre elas, que é onde a informação está.',
      ],
      points: [
        'Saber, em duas reuniões, quem decide de fato e quem apenas assina.',
        'Perceber que uma aliança está apodrecendo antes das duas pessoas envolvidas.',
        'Escrever o documento que vira o processo — e depois ser consultado por causa dele.',
        'Detestar a parte social do cargo e aceitar o cargo mesmo assim.',
        'Sentir a saída de alguém como alteração estrutural, não como perda pessoal.',
      ],
    },
    {
      eyebrow: 'O que o Te faz com isso',
      title: 'Posição é onde ficam as alavancas',
      paragraphs: [
        'Lido o mapa, o pensamento extrovertido faz a única coisa que sabe fazer: ocupa o ponto de ' +
          'maior efeito. Aceita a coordenação, entra no conselho, vira mantenedor do repositório, ' +
          'preside o comitê chato que define o padrão que todo mundo vai obedecer por dez anos. ' +
          'Nada disso é apetite por holofote — o holofote, para você, é imposto. É que a posição ' +
          'é onde ficam as alavancas, e uma alavanca ociosa ofende o Te.',
        'Daí vem a assinatura deste subtipo: você constrói coisas que sobrevivem a você. Projetos ' +
          'avulsos entediam; instituições, normas, currículos, arquiteturas de referência e ' +
          'processos escritos, não. Um INTJ com instinto social dominante raramente quer ser ' +
          'lembrado — quer que a mudança continue funcionando depois que ninguém lembrar quem a ' +
          'fez. É, de longe, o INTJ que mais aparece em liderança formal, e o que mais reclama do ' +
          'cargo enquanto o mantém por doze anos.',
      ],
    },
    {
      eyebrow: 'O que isso protege',
      title: 'Pertencer por utilidade',
      paragraphs: [
        'Existe uma necessidade real por baixo da política, e ela não é cínica: é a de ter lugar. ' +
          'Só que este tipo não tolera o caminho comum. Ser querido depende de simpatia, de ' +
          'presença constante e de conversa fiada — três coisas caras para um INTJ. Ser ' +
          '<em>necessário</em>, não: depende de competência, que é exatamente o que você tem em ' +
          'excesso. Então a contribuição vira a taxa de associação, e o pertencimento é comprado ' +
          'com trabalho de qualidade em vez de afeto.',
        'Funciona, e funciona bem — até a conta chegar. Ser indispensável garante lugar e não ' +
          'garante nenhum vínculo: o grupo protege quem entrega, e quem entrega descobre, num ano ' +
          'ruim, que ninguém ali gosta de você o suficiente para atravessá-lo com você. É a ' +
          'solidão específica do INTJ social — estar dentro de todos os grupos e dentro de nenhum, ' +
          'com uma agenda cheia de pessoas que o respeitam e não o conhecem.',
      ],
    },
    {
      eyebrow: 'O que a Fi paga',
      title: 'Quando a reputação começa a decidir',
      paragraphs: [
        'Este é o dano central do subtipo, e ele não dói enquanto acontece. Para um INTJ, a ' +
          '<strong>Fi</strong> deveria ser a instância final: uma ética privada, mal traduzida em ' +
          'palavras e absolutamente inegociável. O instinto social oferece um substituto mais ' +
          'rápido e mais confiável de operar — o critério da sala. A troca é gradual e sempre ' +
          'razoável em cada caso isolado: “como isto vai ser lido” substituindo “o que eu ' +
          'considero certo”, uma vez, depois outra, cada uma delas defensável.',
        'Os sinais são discretos. A posição escolhida porque é sustentável publicamente, não ' +
          'porque é a sua. A demissão adiada por causa do momento. A crítica engolida diante de ' +
          'quem tem peso e despejada inteira diante de quem não tem. E o sintoma mais denunciador ' +
          'de todos: <strong>desprezo pelo grupo</strong>. Quem realmente não depende da opinião ' +
          'alheia não a despreza — apenas não a consulta. Desprezo é dependência que não foi ' +
          'admitida.',
      ],
    },
    {
      eyebrow: 'O que fica sem verba',
      title: 'O corpo e a pessoa',
      paragraphs: [
        'A autopreservação financia tudo isso, e ninguém pergunta de onde saiu o dinheiro. Sono ' +
          'cortado pela viagem, refeição resolvida no aeroporto, exame adiado por causa do ciclo ' +
          'de avaliação, o corpo tratado como o recurso mais renovável do orçamento — e a ' +
          '<strong>Se inferior</strong>, que já reportava mal, agora reporta para um chefe que não ' +
          'atende. O INTJ social costuma ser o que chega ao esgotamento com a agenda mais ' +
          'impressionante e o exame mais atrasado.',
        'O um-a-um paga a segunda parcela. Quem vive com você recebe o resíduo de alguém que ' +
          'passou o dia inteiro sendo institucional: em casa está a versão sem cargo, e a versão ' +
          'sem cargo chega esgotada, monossilábica e ainda parcialmente na reunião das quatro. É a ' +
          'queixa mais frequente de quem ama um INTJ social — não que você seja frio, mas que a ' +
          'melhor parte do seu dia, a atenção afiada e a presença completa, foi gasta com pessoas ' +
          'que não o amam.',
      ],
    },
    {
      eyebrow: 'Visto de fora',
      title: 'Político para uns, distante para outros',
      paragraphs: [
        'De cima, você é sólido: confiável, previsível, promovível, o adulto da sala. Do lado, ' +
          'você é político: alguém que sabe demais sobre quem manda para que a competência ' +
          'explique tudo, e cujo silêncio nas reuniões é interpretado como cálculo. De baixo, você ' +
          'é distante: um chefe justo, tecnicamente irrepreensível e um pouco frio, que corrige o ' +
          'sistema em vez de conversar com a pessoa.',
        'Nenhuma dessas leituras alcança a contabilidade que roda por dentro. Ninguém vê o placar ' +
          '— quem foi citado, quem foi convidado, quem ficou com o crédito daquilo que era seu, e ' +
          'a que distância você está do lugar que considera justo. É um dos poucos pontos em que ' +
          'o INTJ social é sistematicamente subestimado na direção contrária: acham que você se ' +
          'importa menos do que se importa.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Leitura de sistemas humanos',
      text:
        'A maior parte dos INTJs analisa organizações como se fossem máquinas e se surpreende com ' +
        'a política. Você a inclui no modelo desde o início, e por isso os seus planos sobrevivem ' +
        'ao contato com o comitê que os aprovaria.',
    },
    {
      title: 'Constrói o que dura',
      text:
        'Padrão, norma, processo, currículo, instituição: você prefere consertar o mecanismo a ' +
        'resolver o caso. É a forma mais eficiente que existe de gastar Ni e Te, e a que mais ' +
        'multiplica o efeito de uma pessoa só.',
    },
    {
      title: 'Autoridade sem barulho',
      text:
        'Você raramente precisa impor. A posição foi construída com entregas verificáveis, e a ' +
        'competência sustentada ao longo de anos dá um peso que nenhuma retórica compra — o seu ' +
        '“não” encerra pauta.',
    },
    {
      title: 'O INTJ que consegue mover um grupo',
      text:
        'Enxergar o desfecho não serve de nada se ninguém for junto. Este é o único instinto que ' +
        'faz o tipo se importar o bastante com o coletivo para conduzi-lo — e coletivos conduzidos ' +
        'por alguém que enxerga longe são raros.',
    },
  ],

  traps: [
    {
      title: 'A reputação no lugar da consciência',
      text:
        'Quando “como isto vai ser lido” chega antes de “o que eu considero certo”, a Fi foi ' +
        'terceirizada — e ninguém percebe, porque as duas respostas coincidem em nove casos de ' +
        'cada dez. O décimo é o que define quem você é.',
    },
    {
      title: 'O placar permanente',
      text:
        'Comparação contínua com pares, medida em cargos, citações e convites. Ela consome mais ' +
        'atenção do que qualquer projeto seu e nunca produz um resultado, porque não existe ' +
        'posição alta o bastante para encerrar a contagem.',
    },
    {
      title: 'Desprezo como sintoma',
      text:
        'Zombar do grupo enquanto se confere quem foi promovido é a assinatura da dependência ' +
        'negada. O desprezo protege você da constatação de que aquilo importa — e o custo dessa ' +
        'proteção é nunca poder tratar do assunto.',
    },
    {
      title: 'Cargos demais',
      text:
        'Toda alavanca é aceita porque toda alavanca é útil, e o calendário desaparece dentro de ' +
        'comitês legítimos. O trabalho profundo, que era a sua vantagem real, some por acúmulo de ' +
        'responsabilidades cada uma delas justificável.',
    },
  ],

  stress:
    'Você se retira — e continua marcando o placar. Por fora é distância crítica: a saída elegante ' +
    'do grupo, o afastamento sem escândalo, o silêncio de quem concluiu que aquilo não merece mais ' +
    'esforço. Por dentro é comparação ininterrupta — quem foi promovido, quem foi citado, quem ' +
    'ficou com o crédito do que era seu — e o <strong>Te</strong> constrói o argumento moral que ' +
    'justifica a retirada com uma competência assustadora. A <strong>Fi</strong> assina embaixo ' +
    'sem examinar, e é aí que o loop Ni–Fi fica mais convincente do que nunca: forma de princípio, ' +
    'conteúdo de mágoa. A <strong>Se inferior</strong> entra como consumo de informação social — ' +
    'perfis conferidos de madrugada, conversas relidas, anúncios de promoção lidos três vezes. ' +
    'O corte, quando vem, é apresentado como padrão ético e sentido como despedida; e a pergunta ' +
    'que quase nunca é feita é se você saiu porque discordou ou porque não foi chamado.',

  growth: [
    {
      title: 'Contribua sem contabilizar',
      text:
        'Faça algo pelo grupo cuja devolução seja impossível de medir e cujo crédito seja ' +
        'impossível de reivindicar. É o único experimento capaz de mostrar se a posição importa ' +
        'por si ou apenas pelo que ela rende.',
    },
    {
      title: 'Diga o que a Fi diz antes de consultar a sala',
      text:
        'Numa reunião por semana, formule a sua posição antes de estimar como ela será recebida — ' +
        'e depois diga assim mesmo. O objetivo não é coragem: é descobrir com que frequência as ' +
        'duas respostas já não coincidem.',
    },
    {
      title: 'Uma pessoa, não o grupo',
      text:
        'Escolha alguém que não lhe seja útil e invista tempo real, do tipo que não gera nenhuma ' +
        'posição. Este instinto trata todo vínculo como rede; um vínculo fora da rede é a única ' +
        'prova de que você sabe fazer outra coisa.',
    },
    {
      title: 'Separe retirada de vingança',
      text:
        'Antes de sair de um grupo, escreva as duas versões: a de princípio e a de mágoa. Sair ' +
        'continua podendo ser certo — mas sair sem saber qual das duas está dirigindo é como este ' +
        'subtipo perde relações que queria manter.',
    },
    {
      title: 'Devolva o corpo ao orçamento',
      text:
        'Sono, exame, refeição e movimento tratados como compromissos com terceiros, porque com ' +
        'terceiros você não falta. A autopreservação é o seu instinto mais fraco, e ela não se ' +
        'corrige por consciência — só por agenda.',
    },
  ],

  misread:
    'Leem como carreirista, e a acusação erra o motivo: você não quer subir, quer alavanca — mas ' +
    'de fora as duas coisas são idênticas. Leem como extrovertido, e às vezes como ENTJ, porque a ' +
    'quantidade de estrutura social que você opera parece impossível para um introvertido; ' +
    'ninguém vê as duas horas de silêncio necessárias depois. No eneagrama, é o subtipo mais ' +
    'confundido com o 3, mesmo quando o núcleo é 1, 5 ou 6, porque o instinto social empresta a ' +
    'qualquer tipo a aparência da imagem cuidada. E quem convive de perto lê o seu cansaço como ' +
    'desinteresse, quando ele é o resto de um dia gasto inteiro em outro lugar.',

  versus:
    'O um-a-um é o vizinho com quem você compartilha o essencial: os dois gastam a vida em ' +
    'pessoas. A diferença é aritmética e muda tudo. Você quer peso diante de muitos; ele quer ' +
    'voltagem com um. Você constrói o que sobrevive ao seu nome; ele queima o que tem numa ' +
    'ligação só e não considera isso perda. Num jantar de doze pessoas, você sai sabendo a ' +
    'estrutura da mesa e ele sai com uma conversa de três horas com alguém que talvez não veja de ' +
    'novo — e cada um acha o outro incompreensível. Já o autopreservador é o oposto exato do seu ' +
    'ponto cego: onde você constrói posição, ele constrói muro, e é o único que de fato consegue ' +
    'não consultar a opinião alheia, porque nunca lhe atribuiu valor de moeda.',

  sources: FONTES,
};

export const DEEP_SX_PT: VariantDeep = {
  lede:
    'Um objeto de cada vez, e ele ocupa tudo. O instinto um-a-um — chamá-lo de sexual engana mais ' +
    'do que explica — é a força que puxa para um único alvo, uma pessoa, uma obra, um problema, e ' +
    'que quer ser <em>transformada</em> por ele. Não é posse e não é ciúme. Num INTJ ele encontra ' +
    'uma mente que já convergia sozinha: <strong>Ni</strong> destila, o sx lhe entrega um alvo ' +
    'único, e o resultado é absorção total — com corpo, amigos, carreira e contas reduzidos a ' +
    'ruído de fundo. É o instinto que mais aproxima este tipo de estar vivo no presente, e o que ' +
    'mais o expõe, porque Ni constrói uma versão do outro e depois se relaciona com a versão.',

  sections: [
    {
      eyebrow: 'Para onde a energia vai primeiro',
      title: 'O alvo único, antes de o dia começar',
      paragraphs: [
        'Você acorda já dentro daquilo. Antes do café existe uma continuação: o argumento que ' +
          'ficou pela metade, a mensagem que não foi respondida, o trecho que precisa ser reescrito ' +
          'porque não está à altura. O resto do dia é atendido — com competência, inclusive — e ' +
          'sem presença nenhuma. Este é o único instinto em que o INTJ é visivelmente <em>menos</em> ' +
          'eficiente do que poderia, e a ineficiência não incomoda, porque a métrica interna deixou ' +
          'de ser produtividade.',
        'A intensidade quase nunca é visível. Por fora você continua o mesmo INTJ contido, cortês, ' +
          'econômico em palavras; por dentro há uma cidade inteira construída em volta de alguém ' +
          'que talvez tenha mandado três mensagens esta semana. Esse desnível entre o que acontece ' +
          'e o que aparece é a marca do subtipo — e a origem de quase todo o dano, porque ninguém ' +
          'ajusta a própria conduta a uma intensidade que não sabe que existe.',
      ],
      points: [
        'Meses inteiros dentro de um autor, de um problema ou de uma pessoa.',
        'Conversa de corredor tornada fisicamente insuportável enquanto o alvo está aceso.',
        'Um vínculo tratado com a seriedade que outras pessoas reservam a uma vocação.',
        'Amizades mornas que evaporam sem que nenhuma decisão tenha sido tomada.',
        'Uma memória minuciosa do que a pessoa disse, com data, tom e contexto.',
      ],
    },
    {
      eyebrow: 'Ni mais sx',
      title: 'Convergência com um alvo é uma combinação séria',
      paragraphs: [
        'A intuição introvertida já era estreita por vocação: ela não abre possibilidades, ela ' +
          'destila até sobrar uma. O instinto um-a-um entrega a esse mecanismo exatamente o que ele ' +
          'pedia — um objeto só — e o efeito é multiplicativo. Onde outro tipo se apaixona e segue ' +
          'vivendo, você constrói um modelo completo: o que a pessoa quis dizer, o que ela virá a ' +
          'ser, do que ela precisa antes de saber, o que aquilo significa para os próximos dez ' +
          'anos. O modelo é bom. É bom demais para ser abandonado com facilidade.',
        'Isso tem um lado produtivo que quase nunca é reconhecido: quase toda obra séria feita por ' +
          'um INTJ sx nasceu de uma obsessão, não de um plano. Um problema entrou pela porta do ' +
          'instinto, e a partir dali houve energia para dez mil horas que nenhuma disciplina ' +
          'sozinha teria sustentado. Você não trabalha melhor sob método; trabalha melhor sob ' +
          'fascínio — o que é uma vantagem enorme e uma dependência perigosa.',
      ],
    },
    {
      eyebrow: 'A Fi entra',
      title: 'O alvo não é interessante: é sagrado',
      paragraphs: [
        'A <strong>Fi</strong> terciária é intensa e mal traduzida, e o que ela toca deixa de ser ' +
          'preferência para virar valor. Somada ao sx, ela transforma o vínculo em compromisso ' +
          'moral: você não gosta daquela pessoa, você lhe deve lealdade; o projeto não é ' +
          'promissor, é justo; a obra não é boa, é verdadeira. Daí vem a devoção real deste ' +
          'subtipo, e ela é rara o bastante para merecer respeito — pouquíssima gente é capaz de ' +
          'levar outra pessoa tão a sério.',
        'Daí vem também a queda. Se o vínculo é valor e não preferência, decepção não é decepção: ' +
          'é profanação. Uma mentira pequena, uma indelicadeza, um sinal de que a pessoa real não ' +
          'corresponde à figura — e o que quebra não é a expectativa, é a coisa sagrada. O corte ' +
          'que se segue é característico do INTJ e devastador nesta versão: total, imediato, ' +
          'irreversível, e sentido pelo outro lado como uma sentença sem julgamento.',
      ],
    },
    {
      eyebrow: 'O corpo',
      title: 'A única porta que este tipo tem para a Se',
      paragraphs: [
        'Vale dizer com todas as letras, porque é a melhor notícia da página: o sx é o único ' +
          'instinto que arrasta um INTJ para o presente por vontade própria. Através de outra ' +
          'pessoa, o corpo volta a existir — comida que você jamais teria experimentado, uma ' +
          'cidade às três da manhã, música alta, um fim de semana inteiro sem plano, a atenção ' +
          'finalmente parada no que está acontecendo em vez do que aquilo significará. Isso não é ' +
          'a <strong>Se inferior</strong> tomando o controle numa crise; é a Se sendo <em>vivida</em>, ' +
          'que é a rota de desenvolvimento que Jung e von Franz descrevem para a função inferior.',
        'O risco é que a porta seja uma só. Se o presente só existe na presença daquela pessoa, ' +
          'você não conquistou acesso ao corpo: alugou. Quando o vínculo acaba, some junto com ele ' +
          'a comida, a música, o sono, a rua — e o INTJ volta a viver alguns centímetros à frente ' +
          'do momento, agora com a prova de que era possível estar aqui e a convicção de que só ' +
          'era possível com alguém.',
      ],
    },
    {
      eyebrow: 'O que fica sem verba',
      title: 'Tudo que não é o alvo',
      paragraphs: [
        'A autopreservação some primeiro, e some rápido. Sono, refeições, dinheiro, exames, a ' +
          'rotina que sustentava tudo: nada disso é abandonado por decisão, apenas deixa de ser ' +
          'visto. É comum um INTJ sx sair de um período de fascínio dez quilos diferente, com o ' +
          'sono invertido, alguma dívida boba e a sensação sincera de não ter negligenciado nada.',
        'O instinto social paga a segunda parcela, e essa cobra juros com atraso. Colegas, rede, ' +
          'grupo, as pessoas que decidem a sua carreira — tudo isso vira ruído durante meses ' +
          'seguidos, e você reaparece depois esperando encontrar as coisas onde as deixou. Não ' +
          'estão. Amizades esfriaram, oportunidades passaram, alguém ocupou o espaço. E o custo ' +
          'nunca é imputado ao instinto, porque na hora aquilo parecia a coisa mais importante do ' +
          'mundo — e, num sentido que você não consegue explicar a ninguém, era.',
      ],
    },
    {
      eyebrow: 'Visto de fora',
      title: 'Frio, e depois inexplicavelmente incendiário',
      paragraphs: [
        'Quase todo mundo vê apenas a reserva: um INTJ contido, difícil de acessar, econômico. ' +
          'Um número muito pequeno de pessoas vê o fogo, e para essas a experiência é ' +
          'desproporcional — atenção total, memória minuciosa, uma disposição de entender que ' +
          'ninguém mais ofereceu. É por isso que quem foi objeto deste instinto raramente ' +
          'esquece, e por isso que a retirada, quando vem, é lida como crueldade calculada.',
        'Há uma assimetria cruel embutida: o alvo quase nunca sabe a escala. Como a Fi não ' +
          'traduz e o Te não vê utilidade em declarar sentimento, a pessoa recebe intensidade sem ' +
          'nunca receber a informação — e responde na medida do que percebeu, que é uma fração. ' +
          'Você então interpreta a resposta proporcional como desinteresse, e a decepção se ' +
          'instala sobre um mal-entendido que uma frase teria evitado.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Profundidade que quase ninguém alcança',
      text:
        'Você conhece uma pessoa, um autor ou um problema num nível que exige tempo que quase ' +
        'ninguém está disposto a gastar. Num mundo de atenção fatiada, isso não é romantismo: é ' +
        'uma vantagem competitiva rara e verificável.',
    },
    {
      title: 'O presente, por vontade própria',
      text:
        'Este é o único instinto que abre a Se inferior sem crise. Corpo, comida, música, rua — ' +
        'através de alguém, sim, mas vividos de verdade. É a rota de desenvolvimento da função ' +
        'inferior acontecendo por atração em vez de por colapso.',
    },
    {
      title: 'Obra movida a obsessão',
      text:
        'As dez mil horas que método nenhum sustentaria, o fascínio sustenta. Quase todo trabalho ' +
        'sério de um INTJ sx começou como fixação, e a fixação entrega uma qualidade que a ' +
        'disciplina sozinha não alcança.',
    },
    {
      title: 'Lealdade sem cláusula',
      text:
        'Enquanto o vínculo existe, ele é integral. Não há reserva estratégica, não há saída ' +
        'guardada, não há cálculo de reciprocidade — e uma pessoa levada tão a sério assim sabe ' +
        'disso pelo resto da vida.',
    },
  ],

  traps: [
    {
      title: 'A imagem no lugar da pessoa',
      text:
        'Ni monta uma versão do outro em duas semanas e depois se relaciona com a versão. Enquanto ' +
        'a pessoa real não contradiz a figura, é a coisa mais intensa que existe; no dia em que ' +
        'contradiz, a queda é vertical e o culpado escolhido é sempre ela.',
    },
    {
      title: 'Desprezo pelo morno',
      text:
        'Tudo que não é intenso vira insuportável: colega, conversa de corredor, amizade estável, ' +
        'trabalho competente e sem fogo. Você chama isso de exigência, mas grande parte da vida ' +
        'adulta é morna — e ela vai embora se ninguém a mantiver.',
    },
    {
      title: 'Um alvo só, e nenhuma redundância',
      text:
        'Toda a energia numa aposta única significa que o fim de um vínculo derruba o corpo, a ' +
        'rotina, a carreira e o sentido ao mesmo tempo. Não é fragilidade emocional: é ausência de ' +
        'diversificação, e ela tem correção prática.',
    },
    {
      title: 'O corte apresentado como princípio',
      text:
        'A Fi fornece uma justificativa moral impecável para uma retirada que foi, na verdade, ' +
        'alívio de intensidade insuportável. O argumento é bom demais para ser examinado — e é por ' +
        'isso que este subtipo perde pessoas que queria ter mantido.',
    },
  ],

  stress:
    'Fixa. A conversa inteira é repetida palavra por palavra à procura do instante exato em que ' +
    'virou; cada silêncio recebe interpretação, cada demora ganha significado, e o ' +
    '<strong>Ni</strong> — que é excelente nisto — produz uma explicação coerente, completa e com ' +
    'frequência falsa. O sono vai primeiro. Depois vai o trabalho, que continua sendo entregue ' +
    'com a cabeça em outro lugar. A <strong>Se inferior</strong> entra pelo corpo, e nesta versão ' +
    'ela é mais física do que em qualquer outro subtipo: noites em claro, excesso, treino ' +
    'punitivo, uma imprudência assumida como se fosse decisão. E existe sempre um alívio ' +
    'traiçoeiro à mão — cortar. O corte devolve o controle em cinco minutos, converte a dor em ' +
    'princípio e cobra o resto durante anos, geralmente sob a forma de uma releitura obsessiva do ' +
    'que teria acontecido se você tivesse esperado mais três dias.',

  growth: [
    {
      title: 'Fique depois que a voltagem cair',
      text:
        'Toda intensidade baixa; isso não é sinal de erro, é o funcionamento normal de um vínculo ' +
        'passados alguns meses. O que sobrevive à queda era relação; o que não sobrevive era ' +
        'projeção sua. Só se descobre qual é qual ficando.',
    },
    {
      title: 'Deixe a pessoa real desmentir a imagem',
      text:
        'Pergunte em vez de deduzir, e receba a resposta mesmo quando ela estraga o modelo. Cada ' +
        'contradição aceita cedo poupa uma catástrofe tardia — o modelo de Ni é preciso e não é ' +
        'a pessoa.',
    },
    {
      title: 'Distribua o fogo',
      text:
        'Mantenha, por calendário e não por vontade, duas ou três relações mornas: um almoço fixo, ' +
        'uma mensagem semanal, um grupo que continue existindo. Redundância afetiva parece ' +
        'insossa até o dia em que ela é a única coisa de pé.',
    },
    {
      title: 'Diga a escala em voz alta',
      text:
        'A outra pessoa não sabe. Uma frase mal formulada sobre o tamanho do que está acontecendo ' +
        'vale mais do que seis meses de intensidade silenciosa, e evita a decepção construída em ' +
        'cima de uma informação que nunca foi enviada.',
    },
    {
      title: 'Nada de decisões irreversíveis por seis semanas',
      text:
        'Nem mudar de país por alguém, nem cortar alguém para sempre. Este instinto produz ' +
        'certeza em velocidade máxima, e a certeza do sx é a única coisa neste tipo que envelhece ' +
        'mal de forma previsível.',
    },
  ],

  misread:
    'Leem como ciumento e possessivo, e é a leitura mais comum e mais errada: o instinto descreve ' +
    'voltagem de vínculo, nunca direito sobre ele. Vale repetir a distinção vizinha, porque a ' +
    'confusão é constante — a paixão do eneatipo 4 é a <strong>inveja</strong>, a falta, a ' +
    'comparação com o que o outro tem; não é ciúme, e não é isto. Leem também como carente, ' +
    'quando o INTJ sx é justamente quem não pede nada e some. E há a leitura invertida, a mais ' +
    'injusta das três: quem só o viu ao lado do alvo o descreve como caloroso e sociável, e não ' +
    'entende por que o mesmo homem é uma parede em qualquer outro contexto. Não é personagem. É ' +
    'que só existe um lugar onde a corrente passa.',

  versus:
    'O social é o vizinho mais fácil de confundir com você, porque os dois gastam a vida inteira ' +
    'em pessoas. A diferença é de aritmética e é total: ele quer peso diante de muitos, você quer ' +
    'voltagem com um. Num jantar de doze, ele sai sabendo a estrutura da mesa e você sai com uma ' +
    'conversa de três horas com alguém que talvez nunca mais veja — e, para você, a mesa não ' +
    'existiu. Contra o autopreservador o contraste é ainda mais nítido: a margem que ele levou dez ' +
    'anos acumulando, você gasta em seis semanas e não considera isso perda. Ele o acha ' +
    'imprudente; você o acha morto em vida. Nenhum dos dois está descrevendo o outro — cada um ' +
    'está descrevendo o próprio terceiro instinto, que é a coisa que ninguém enxerga em si mesmo.',

  sources: FONTES,
};
