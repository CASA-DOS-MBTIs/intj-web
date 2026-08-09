import { DEEP_1W2_PT, DEEP_1W9_PT, DEEP_2W1_PT, DEEP_2W3_PT } from './deep/wings-a';
import { DEEP_3W2_PT, DEEP_3W4_PT, DEEP_4W3_PT, DEEP_4W5_PT } from './deep/wings-b';
import { DEEP_5W4_PT, DEEP_5W6_PT, DEEP_6W5_PT, DEEP_6W7_PT } from './deep/wings-c';
import { DEEP_7W6_PT, DEEP_7W8_PT, DEEP_8W7_PT, DEEP_8W9_PT } from './deep/wings-d';
import { DEEP_9W1_PT, DEEP_9W8_PT } from './deep/wings-e';
import { FOCUS_ENEAGRAMA_PT } from './deep/focus';
import type { EnneagramDeepContent } from '../types';

export const ENEAGRAMA_PT: EnneagramDeepContent = {
  focus: FOCUS_ENEAGRAMA_PT,
  meta: {
    title: 'Eneagrama — as nove motivações rodando num INTJ',
    description:
      'Os nove eneatipos e as dezoito asas escritos como se manifestam num motor Ni–Te: o que ' +
      'cada motivação faz com a intuição, com a execução e com a sensação inferior.',
  },

  sources: [
    'riso-hudson-1999',
    'riso-hudson-1996',
    'naranjo-1994',
    'hook-2021',
    'wagner-walker-1983',
    'enneagram-personality-2026',
    'myers-1998-manual',
  ],

  header: {
    eyebrow: 'Além do MBTI · Eneagrama',
    title: 'Nove motivações\nsobre o mesmo motor',
    lede:
      'O MBTI descreve o mecanismo. O eneagrama tenta descrever por que ele está ligado. Esta ' +
      'página não resume os nove tipos — descreve o que cada um faz quando roda sobre <strong>Ni ' +
      '· Te · Fi · Se</strong>. Um 5 e um 3 INTJ têm exatamente a mesma máquina e quase nada em ' +
      'comum.',
  },

  intro:
    'O eneagrama não é uma teoria da personalidade no sentido acadêmico: é um mapa de motivação. ' +
    'A figura de nove pontas foi ensinada por Óscar Ichazo no fim dos anos 1960; a leitura ' +
    'psicológica que se usa hoje foi construída por Claudio Naranjo, que ligou cada ponto a uma ' +
    '“paixão” e a um padrão de caráter; e a versão que praticamente todo mundo lê é a de Don ' +
    'Riso e Russ Hudson, de quem vêm o desejo básico e o medo básico citados em cada tipo aqui. ' +
    '<em>Nada disso mede coisa alguma.</em> O que segue é vocabulário — vocabulário com meio ' +
    'século de uso e nenhuma base métrica, aplicado a um único tipo cognitivo.',

  caveat:
    'Antes de qualquer coisa: o eneagrama quase não tem literatura de validação. A revisão ' +
    'sistemática de Hook e colegas (2021) varre 104 amostras e conclui por evidência mista de ' +
    'confiabilidade e validade, e o achado mais incômodo é estrutural — as análises fatoriais ' +
    'dos questionários ' +
    'de eneagrama recuperam menos de nove fatores, e as asas e as setas de integração e ' +
    'desintegração têm apoio empírico mínimo. Ou seja: as dezoito asas descritas nesta página ' +
    'são uma convenção descritiva, não uma estrutura demonstrada. O cruzamento entre MBTI e ' +
    'eneagrama, que é exatamente o que esta página faz do começo ao fim, tem essencialmente um ' +
    'estudo revisado por pares — Wagner e Walker (1983), com 390 pessoas. E os percentuais de ' +
    '“quantos INTJs são 5” que circulam na internet não vêm de amostra probabilística nenhuma: ' +
    'vêm de enquetes online autosselecionadas e autotipadas, como a compilação de 120 mil ' +
    'respostas da Enneagram Personality (2026), que descreve quem respondeu e mais nada. Do lado ' +
    'do MBTI existe ao menos um manual técnico com amostra nacional representativa (Myers et ' +
    'al., 1998); do lado do eneagrama não existe equivalente. Leia tudo abaixo como descrição, ' +
    'nunca como medida.',

  centreLabels: {
    gut: 'Centro instintivo · a raiva',
    heart: 'Centro emocional · a vergonha',
    head: 'Centro mental · o medo',
  },

  labels: {
    want: 'Desejo básico (Riso e Hudson)',
    fear: 'Medo básico (Riso e Hudson)',
    look: 'Como aparece num INTJ',
    grow: 'O trabalho',
    engine: 'O que faz com o motor',
    wings: 'As duas asas',
    asIntj: 'Rodando sobre Ni–Te',
  },

  types: {
    '1': {
      name: 'O Reformador',
      centre: 'gut',
      motto:
        'Existe um jeito certo de fazer isso, e eu já vi exatamente onde este aqui está errado.',
      asIntj: [
        'A diferença entre um 1 e um 5 INTJ não está no que enxergam — está no modo verbal. Ni ' +
          'converge sempre para uma única leitura do futuro; no 1, essa leitura chega no ' +
          'imperativo. Não é “é para lá que isso vai”, é <em>“é assim que isso deveria ' +
          'ser”</em>, e a distância entre as duas frases é um dia inteiro de trabalho. Te, ' +
          'então, para de otimizar para eficiência e passa a otimizar para correção: critério ' +
          'antes de velocidade, padrão antes de entrega, processo documentado de um jeito que ' +
          'sobreviva à sua ausência. É o INTJ que reescreve a norma em vez de contorná-la.',
        'O preço é que a crítica perde o interruptor. O que Naranjo chama de ira do 1 não sai ' +
          'como explosão — sai como tensão, correção seca e o silêncio de quem já avaliou e ' +
          'decidiu não dizer. Fi terciária agrava: o valor violado é sentido com força absoluta ' +
          'e articulado com uma pobreza quase cômica, então você entrega o veredito sem ' +
          'conseguir mostrar o processo, e quem recebe ouve desprezo onde havia princípio. Sob ' +
          'pressão longa, Riso e Hudson descrevem o 1 se deslocando para o lado do 4 — no INTJ, ' +
          'o pior loop disponível: Ni ruminando a própria contaminação em vez do erro do mundo.',
        'Se inferior fecha a armadilha. Para o 1, o corpo é mais uma área sujeita a padrão: ' +
          'horário, dieta, treino, disciplina como prova moral. Isso funciona por anos e desaba ' +
          'de uma vez, com a forma clássica do <em>grip</em> — excesso sensorial súbito, comida, ' +
          'tela, compra, sono demais — seguido não de descanso, mas de um novo tribunal interno. ' +
          'O 1 INTJ raramente cai por falta de rigor. Cai porque nunca aprendeu a parar sem se ' +
          'acusar.',
      ],
      engine: 'Transforma Te em tribunal e Ni em sentença: o motor ganha uma norma e perde a ré.',
      want: 'Ser bom, íntegro e equilibrado — estar de acordo com o próprio senso do que é certo.',
      fear: 'Ser corrupto, mau ou defeituoso.',
      look:
        'Padrão altíssimo aplicado primeiro a si mesmo, irritação contida diante do descuido ' +
        'alheio, dificuldade real de aceitar qualquer coisa com o rótulo de “bom o bastante”.',
      grow:
        'Separar erro de culpa. Um plano que falhou é dado, não é caráter — e Te só volta a ' +
        'funcionar quando para de julgar quem produziu o número.',
    },

    '2': {
      name: 'O Prestativo',
      centre: 'heart',
      motto:
        'Eu vejo do que você precisa antes de você — e vou resolver, mesmo sem ter sido chamado.',
      asIntj: [
        'É uma das combinações mais raras — nas enquetes fica atrás só do 3 — e a pior ' +
          'descrita, porque quase tudo que se escreve sobre o 2 ' +
          'pressupõe calor extrovertido, e o INTJ não tem esse aparelho. O que existe aqui é ' +
          'outra coisa: Ni apontado para a pessoa como sistema. Você lê a necessidade do outro ' +
          'estruturalmente — o que falta na vida dele, o que vai quebrar em seis meses, o que ' +
          'ele não sabe pedir — e Te constrói a solução sem passar por nenhuma conversa sobre ' +
          'sentimentos. O 2 INTJ não consola: ele reorganiza a sua vida e entrega pronta.',
        'A paixão que Naranjo dá ao 2 é o orgulho, e num INTJ ela é quase invisível porque não ' +
          'se exibe — se acumula. Você dá muito, dá antes de ser pedido, dá em forma de ' +
          'infraestrutura, e mantém em silêncio uma contabilidade que jura não existir. Fi ' +
          'terciária guarda essa planilha com precisão absoluta e nenhuma linguagem. Quando o ' +
          'saldo estoura, Riso e Hudson descrevem o deslocamento para o lado do 8: não uma cena, ' +
          'um corte. A retirada fria de tudo que você vinha sustentando — e a pessoa do outro ' +
          'lado nunca soube que havia dívida.',
        'Se inferior aqui tem uma ironia própria: você registra a fome, o cansaço e a doença do ' +
          'outro com uma sensibilidade que não aplica ao próprio corpo. O 2 INTJ é o que chega ' +
          'ao esgotamento cuidando de gente que não pediu cuidado. E o <em>grip</em> vem virado ' +
          'para fora — gasto, presente, resgate de última hora — em vez de excesso feito para si.',
      ],
      engine: 'Aponta a máquina inteira para a vida de outra pessoa e chama isso de propósito.',
      want: 'Sentir-se amado.',
      fear: 'Não ser querido — ser indigno de amor.',
      look:
        'Ajuda entregue em forma de sistema, favores grandes e não solicitados, dificuldade real ' +
        'de pedir qualquer coisa, mágoa antiga guardada contra quem nunca notou nada.',
      grow:
        'Pedir explicitamente, cedo e em voz alta. O 2 INTJ não precisa dar menos — precisa ' +
        'parar de cobrar em silêncio.',
    },

    '3': {
      name: 'O Realizador',
      centre: 'heart',
      motto:
        'Eu não quero só ver o caminho: quero ter construído a coisa antes de os outros ' +
        'entenderem o problema.',
      asIntj: [
        'É a única motivação que não briga com o motor. Ni converge para um futuro único e Te ' +
          'quer transformar futuro em entrega — e no 3 as duas funções concordam sobre o alvo: a ' +
          'versão de você que já chegou lá. Por isso o 3 é o INTJ mais rápido do conjunto. Não ' +
          'perde os anos que o 5 perde estudando nem os que o 4 perde se examinando; a visão ' +
          'vira escopo, o escopo vira prazo, o prazo vira coisa entregue no mundo, e o ciclo ' +
          'reinicia antes de a entrega esfriar. De fora parece disciplina. Por dentro é a ' +
          'ausência de qualquer função na pilha argumentando a favor de parar.',
        'A paixão do 3, na leitura de Naranjo, é a vaidade — e vaidade aqui não tem nada a ver ' +
          'com espelho: é a substituição do interior pela imagem que funciona. Num INTJ isso é ' +
          'mais perigoso do que em qualquer outro tipo, porque Fi é terciária. A instância que ' +
          'deveria dizer <em>“isto eu quero de verdade, aquilo não”</em> é justamente a mais ' +
          'lenta e a mais muda da pilha, e Te preenche o vazio com uma prontidão admirável: na ' +
          'falta de um desejo articulado, ele fornece uma meta. Uma meta é indistinguível de um ' +
          'desejo enquanto está sendo perseguida. A diferença aparece no dia seguinte à ' +
          'conquista, num silêncio que não estava no plano.',
        'Sob estresse o 3 não faz cena. Riso e Hudson o descrevem indo para o lado do 9, e no ' +
          'INTJ isso significa anestesia com movimento preservado: você continua entregando, ' +
          'continua respondendo, e não está mais lá dentro. Se inferior participa desde muito ' +
          'antes — o corpo é instrumento, sono é ineficiência, sintoma é ruído a ser silenciado ' +
          'até a próxima entrega. Quando o <em>grip</em> chega, chega com a estética do próprio ' +
          'tipo: treino em excesso, consumo, trabalho compulsivo às três da manhã. O 3 INTJ é o ' +
          'único capaz de estar em colapso e em alta performance na mesma semana — e o segundo ' +
          'esconde o primeiro de todo mundo, inclusive dele.',
      ],
      engine:
        'Faz Ni e Te pararem de discutir — e motor sem discussão interna acelera antes de saber ' +
        'para onde.',
      want: 'Sentir-se valioso e digno de valor.',
      fear: 'Ser sem valor.',
      look:
        'Metas encadeadas sem intervalo, ajuste camaleônico de registro conforme a plateia, ' +
        'incapacidade de descansar sem apresentar justificativa, identidade colada no último ' +
        'resultado entregue.',
      grow:
        'Produzir uma coisa que ninguém vai ver. Não como exercício de humildade — como teste: ' +
        'descobrir se ainda existe alguém ali quando a métrica é removida.',
    },

    '4': {
      name: 'O Individualista',
      centre: 'heart',
      motto:
        'A distância entre o que eu imagino e o que eu consigo fazer existir é a minha biografia.',
      asIntj: [
        'No 4, Ni deixa de apontar para o mundo e aponta para você. A mesma máquina que reduz um ' +
          'sistema inteiro a um único fio de sentido é posta a trabalhar sobre um objeto que não ' +
          'se deixa reduzir — a própria identidade — e roda sem parar, sem nunca entregar. Te ' +
          'continua funcionando, mas troca de função: em vez de construir sistemas, constrói ' +
          'obra. O 4 INTJ escreve, projeta, compõe, filma, e trata a coisa feita como prova de ' +
          'existência, não como resultado.',
        'A inveja do 4, na descrição de Naranjo, não é cobiça de bens: é a sensação permanente ' +
          'de que falta em você algo que os outros receberam de fábrica. Cruzada com Fi ' +
          'terciária, ganha intensidade sem vocabulário — sentimento enorme, tradução péssima, e ' +
          'a tendência a confiar mais na intensidade do que no fato. Cruzada com Te, ganha um ' +
          'padrão estético implacável, ótimo para a obra e devastador para o autor. Sob ' +
          'estresse, Riso e Hudson descrevem o deslocamento para o 2, e o INTJ 4 faz isso do ' +
          'jeito mais estranho possível: aproximação súbita e carente de uma pessoa específica, ' +
          'seguida de vergonha e recolhimento total.',
        'Se inferior é, aqui, a única porta que abre com facilidade. O 4 é o eneatipo com mais ' +
          'acesso ao sensorial pela via estética — som, textura, luz, ritmo — e é por aí que o ' +
          'INTJ 4 consegue habitar o presente sem passar pela cabeça. A armadilha é confundir ' +
          'intensidade com contato: um disco ouvido no escuro às quatro da manhã ainda é Ni ' +
          'ruminando com trilha sonora. O corpo entra quando há repetição sem significado — e é ' +
          'exatamente a repetição sem significado que o 4 considera uma traição.',
      ],
      engine: 'Vira o motor para dentro até ele começar a usinar a própria carcaça.',
      want: 'Encontrar a si mesmo e a própria significância — criar uma identidade.',
      fear: 'Não ter identidade nem significância próprias.',
      look:
        'Reserva com temperatura alta por baixo, comparação constante e silenciosa, exigência ' +
        'estética que atrasa tudo, nostalgia de coisas que nem chegaram a acontecer.',
      grow:
        'Terminar em vez de refinar. Uma obra publicada imperfeita ensina mais sobre quem você é ' +
        'do que dez anos de introspecção sobre a obra ideal.',
    },

    '5': {
      name: 'O Investigador',
      centre: 'head',
      motto: 'Me deixem em paz até eu entender isso por inteiro — e talvez eu ainda não apareça.',
      asIntj: [
        'É o segundo cruzamento mais frequente nas enquetes, atrás do 1, e o mais mal ' +
          'diagnosticado, porque 5 e INTJ ' +
          'se parecem por fora e operam por motivos diferentes. INTJ é um mecanismo: Ni ' +
          'converge, Te executa. 5 é um medo: os recursos internos são finitos, o mundo cobra, e ' +
          'a única defesa é saber o bastante para não precisar de ninguém. Quando os dois ' +
          'coincidem, Ni ganha licença ilimitada para modelar e Te perde o emprego — porque ' +
          'entregar significa expor o modelo antes de ele estar completo, e <em>completo</em> é ' +
          'uma condição que nunca chega.',
        'A avareza do 5, em Naranjo, é avareza de si: tempo, energia, presença, informação sobre ' +
          'a própria vida. Num INTJ ela encontra terreno perfeito. Você não guarda dinheiro — ' +
          'guarda disponibilidade. Compromisso é lido como sangria, conversa como custo, e a ' +
          'autonomia deixa de ser preferência para virar condição de sobrevivência. Fi terciária ' +
          'transforma isso em ética — “eu não devo nada a ninguém” —, que é uma frase verdadeira ' +
          'e uma vida estreita. Sob estresse, Riso e Hudson descrevem a ida para o 7: a mente ' +
          'que se recusava a largar um assunto começa a pular de assunto em assunto, e nenhum ' +
          'dos pulos vai fundo.',
        'Se inferior encontra no 5 seu pior aliado. A pilha já coloca o corpo em quarto lugar; o ' +
          '5 acrescenta a doutrina de que o corpo é uma exigência inconveniente. O resultado é o ' +
          'INTJ mais desencarnado que existe — fome percebida às três da tarde, exaustão ' +
          'descoberta por diagnóstico, um cômodo de cortina fechada e três monitores. O ' +
          '<em>grip</em> aqui não vira festa: vira maratona sensorial solitária e mecânica, ' +
          'consumida com a mesma voracidade com que se consome um manual técnico.',
      ],
      engine: 'Deixa o motor a plena potência com o eixo de saída desacoplado.',
      want: 'Ser capaz e competente.',
      fear: 'Ser inútil, incapaz ou incompetente.',
      look:
        'Preparação sem fim, minimalismo de necessidades, respostas curtas e densas, um limite ' +
        'invisível que os outros descobrem tarde e sempre por terem atravessado.',
      grow:
        'Publicar cedo e mal. E aceitar dever alguma coisa a alguém: o 5 só descobre que ' +
        'sobrevive à dependência quando experimenta uma.',
    },

    '6': {
      name: 'O Leal',
      centre: 'head',
      motto:
        'Eu já sei exatamente como isso desanda. A dúvida é se eu confio em mim quando digo isso.',
      asIntj: [
        'O 6 aponta a convergência de Ni para o modo de falha. A mesma faculdade que no 3 ' +
          'desenha o futuro vencedor desenha aqui, com nitidez desconfortável, o ponto em que o ' +
          'plano quebra, quem vai sumir quando quebrar e o que sobra depois. Te adora esse ' +
          'insumo: redundância, plano B, contrato lido inteiro, verificação dupla, sistemas que ' +
          'degradam com elegância. É o INTJ que você quer em segurança, engenharia crítica, ' +
          'auditoria e qualquer lugar onde errar custa caro.',
        'A contradição é interna e cara. Ni entrega certeza sem processo; o 6 desconfia de tudo ' +
          'que chega sem processo, inclusive do próprio Ni. Você sabe e não confia em saber, ' +
          'então procura uma fonte externa que confirme — e depois desmonta a fonte, porque ' +
          'autoridade não verificada é justamente o que assusta. A versão contrafóbica que Riso ' +
          'e Hudson descrevem resolve o impasse atacando primeiro: é o INTJ 6 que parece um 8, ' +
          'confronta a hierarquia na reunião e passa a noite recalculando o custo. Sob estresse ' +
          'o deslocamento é para o 3 — atividade frenética e competente que serve para não ' +
          'sentir a dúvida.',
        'Se inferior no 6 vira vigilância sem propriocepção: você monitora o ambiente com ' +
          'precisão cirúrgica e o próprio corpo com precisão zero. A ansiedade fica somática ' +
          'antes de ficar consciente — mandíbula, estômago, sono picado — e você a interpreta ' +
          'como sinal externo, o que alimenta mais uma rodada de análise. Aqui o treino físico ' +
          'não é lazer, é instrumento diagnóstico: o jeito mais direto de descobrir que o perigo ' +
          'estava dentro e não na sala.',
      ],
      engine: 'Faz o motor rodar toda simulação duas vezes, inclusive a que manda desligar.',
      want: 'Ter segurança e apoio.',
      fear: 'Ficar sem apoio e sem orientação.',
      look:
        'Cenários de falha antecipados em voz alta, lealdade longa a pouquíssimas pessoas, ' +
        'ceticismo com quem tem cargo e respeito imediato por quem tem competência.',
      grow:
        'Agir com a informação que existe. Coragem não é ausência de dúvida — é a decisão tomada ' +
        'com a dúvida ainda ligada.',
    },

    '7': {
      name: 'O Entusiasta',
      centre: 'head',
      motto: 'Existem oito coisas que eu poderia estar fazendo agora, e nenhuma delas é esta aqui.',
      asIntj: [
        'É um cruzamento raro e o mais interessante de observar, porque é uma contradição em ' +
          'funcionamento. Ni converge, fecha, escolhe uma leitura e descarta o resto; o 7 existe ' +
          'para manter o leque aberto e a dor fora de alcance. O INTJ 7 vive isso como uma ' +
          'sequência de obsessões totais: um assunto toma a cabeça inteira, com a profundidade ' +
          'típica do tipo, por semanas ou meses — e então o fundo aparece, e com o fundo o ' +
          'tédio, e o assunto é abandonado num estágio irritantemente avançado.',
        'Te é sequestrado para produzir opção em vez de resultado. Você monta planos excelentes ' +
          'e mantém três abertos ao mesmo tempo, não por indecisão, mas porque fechar um é ' +
          'sentir a perda dos outros dois. A gula de Naranjo, aqui, é mental: não é excesso de ' +
          'prazer, é excesso de futuro. E Fi terciária, que já é lenta, fica sem chance alguma ' +
          'de dizer o que dói — o 7 INTJ é competentíssimo em reformular dor como oportunidade e ' +
          'chamar isso de racionalidade. Sob pressão, Riso e Hudson descrevem a ida para o 1: o ' +
          'entusiasmo azeda em crítica meticulosa e amarga, primeiro dos outros, logo depois de ' +
          'si.',
        'Se inferior, no 7, engana. Você espera fuga sensorial — festa, viagem, excesso — mas o ' +
          'INTJ 7 foge principalmente para dentro da própria cabeça: mais planejamento, mais aba ' +
          'aberta, mais projeto novo às duas da manhã. O corpo continua sendo a última coisa ' +
          'consultada, e o esgotamento chega travestido de entusiasmo, o que o torna quase ' +
          'impossível de detectar a tempo. O trabalho aqui é o mais antinatural dos nove: ficar ' +
          'no mesmo lugar depois que a novidade acabou.',
      ],
      engine: 'Mantém o motor em rotação alta e nunca deixa engatar.',
      want: 'Estar satisfeito e realizado — ter as próprias necessidades atendidas.',
      fear: 'Estar privado e preso na dor.',
      look:
        'Curiosidade voraz e serial, projetos brilhantes abandonados a oitenta por cento, humor ' +
        'afiado usado como saída de emergência, uma agenda cheia de coisas que você mesmo ' +
        'escolheu.',
      grow:
        'Terminar uma coisa depois que ela ficou chata. É na parte chata que mora tudo aquilo ' +
        'que o 7 nunca chegou a receber.',
    },

    '8': {
      name: 'O Desafiador',
      centre: 'gut',
      motto: 'Eu vi para onde isso vai e sei quem manda de verdade aqui. Não vou pedir licença.',
      asIntj: [
        'No 8, Ni não procura verdade nem futuro: procura alavanca. Onde está o poder de fato, ' +
          'quem depende de quem, qual ponto do sistema cede primeiro se for empurrado. É leitura ' +
          'estratégica no sentido literal, e Te vira braço direto da vontade — decisão sem ' +
          'consulta, escopo definido no ato, gente realocada antes do fim da frase. É o INTJ que ' +
          'ninguém acredita ser introvertido, e ele é: recarrega sozinho, planeja sozinho e não ' +
          'tem o menor interesse em ser acompanhado durante o processo.',
        'O que Naranjo chama de luxúria no 8 é excesso como forma de estar vivo — intensidade, ' +
          'confronto, apetite, trabalho até o limite. Cruzado com Fi terciária, produz um código ' +
          'pessoal rígido e quase inarticulável: lealdade absoluta a pouquíssimos, desprezo ' +
          'definitivo por quem falhou uma vez em algo inegociável, e nenhuma vontade de explicar ' +
          'o critério. Sob estresse, Riso e Hudson descrevem a ida para o 5, e é isso mesmo que ' +
          'acontece: o 8 some. Não briga — se tranca, corta contato, planeja em silêncio, e ' +
          'volta com uma decisão já executada.',
        'Se inferior é a fratura estrutural desta combinação. O 8 é um tipo do centro ' +
          'instintivo: quer presença física, impacto, ocupação de espaço — e roda numa pilha em ' +
          'que a sensação é a última função da fila. O resultado é força mal calibrada. Você ' +
          'aplica sistematicamente mais pressão do que a situação pedia e descobre isso pelo ' +
          'efeito, tarde, quando alguém já se afastou. Vulnerabilidade escolhida é a prática de ' +
          'crescimento; o passo anterior é mais simples e mais difícil: perceber a intensidade ' +
          'que você está emitindo <em>enquanto</em> a emite.',
      ],
      engine: 'Liga o motor direto à vontade, sem nada entre os dois.',
      want: 'Proteger a si mesmo — estar no controle da própria vida e do próprio destino.',
      fear: 'Ser prejudicado ou controlado por outros.',
      look:
        'Franqueza que testa, decisões tomadas na hora, proteção feroz de quem está dentro do ' +
        'círculo, alergia física a ser gerenciado.',
      grow:
        'Deixar alguém ver o lado não blindado — e cortar a força pela metade antes de ' +
        'aplicá-la, porque a sua metade já costuma ser o dobro do necessário.',
    },

    '9': {
      name: 'O Pacificador',
      centre: 'gut',
      motto: 'Eu enxergo isso com uma clareza que não me faz mover um centímetro.',
      asIntj: [
        'O 9 é a versão mais desconcertante, porque a máquina está inteira e fora da tomada. Ni ' +
          'funciona: você vê a estrutura, prevê o desfecho, entende as pessoas melhor do que ' +
          'elas gostariam. Te funciona: você organiza, entrega, resolve. O que falta é a etapa ' +
          'em que a sua própria prioridade entra na fila — o 9 substitui a agenda por consenso e ' +
          'depois trabalha, com competência real, naquilo que era importante para outra pessoa.',
        'A preguiça de Naranjo não é falta de trabalho; muitos 9 trabalham demais. É preguiça em ' +
          'relação a si mesmo — uma anestesia discreta que apaga o próprio desejo antes de ele ' +
          'ficar nítido o bastante para exigir conflito. Num INTJ isso é particularmente ' +
          'traiçoeiro, porque Ni continua produzindo visões grandiosas e Fi terciária continua ' +
          'sabendo o que importa, só que nada disso chega à superfície com força suficiente para ' +
          'virar decisão. Sob estresse, Riso e Hudson descrevem a ida para o 6: a calma se ' +
          'desmancha em ansiedade e desconfiança, e a inércia ganha justificativa técnica — mais ' +
          'uma análise antes de agir.',
        'Se inferior, aqui, não produz <em>grip</em> espetacular: produz desaparecimento ' +
          'gradual. Comida, tela, sono, rotina morna — o corpo usado como sedativo em vez de ' +
          'canal. E como o 9 INTJ raramente entra em colapso visível, ninguém intervém, você ' +
          'inclusive: a vida passa em qualidade média por uma década. A raiva é o material ' +
          'recusado — 9 é um tipo do centro instintivo com a ira embalada e guardada. ' +
          'Recuperá-la em doses pequenas, e ditas em voz alta, é o que devolve a partida ao ' +
          'motor.',
      ],
      engine: 'Deixa o motor em marcha lenta: capacidade inteira, acelerador desconectado.',
      want: 'Ter estabilidade interior — paz de espírito.',
      fear: 'Perda e separação.',
      look:
        'Concordância que não é acordo, prazos que escorregam sem drama, opiniões fortes ' +
        'reveladas anos depois, teimosia silenciosa quando você é finalmente empurrado.',
      grow:
        'Dizer o que você quer no dia em que você quer. Cada preferência declarada em voz alta ' +
        'religa um pedaço do motor.',
    },
  },

  wings: {
    '1w9': {
      deep: DEEP_1W9_PT,
      name: 'O idealista sereno',
      text:
        'A asa 9 põe um amortecedor entre o julgamento e a boca. O padrão continua absoluto, mas ' +
        'a ira sai do rosto e vira paciência: o INTJ 1w9 é lido como sábio, professoral, quase ' +
        'desprendido, enquanto por dentro o tribunal segue em sessão. Te trabalha em ritmo longo ' +
        '— reforma feita por acúmulo, ao longo de anos, sem confronto aberto. O risco é o do 9: ' +
        'a correção mais importante nunca é dita, e a firmeza degenera em obstrução educada.',
    },
    '1w2': {
      deep: DEEP_1W2_PT,
      name: 'O reformador engajado',
      text:
        'A asa 2 empurra o 1 na direção das pessoas, e num INTJ isso não sai como calor — sai ' +
        'como intervenção. Você corrige porque considera que deve ao outro a verdade que ninguém ' +
        'teve coragem de dar, e entrega isso na cara, com Te ligado, convencido de que é ' +
        'generosidade. É o INTJ que ensina, orienta, escreve manifestos internos e assume ' +
        'causas. O risco é o moralismo pessoalizado: a crítica deixa de ser sobre o trabalho e ' +
        'passa a ser sobre o caráter de quem o fez.',
    },
    '2w1': {
      deep: DEEP_2W1_PT,
      name: 'O servo de princípio',
      text:
        'A asa 1 dá à ajuda a forma de dever em vez de afeto, o que resolve o desconforto do ' +
        'INTJ 2 com a linguagem do carinho. Você cuida por padrão ético: é o certo, então é ' +
        'feito, e é feito bem. Te constrói o apoio como infraestrutura — a planilha da família, ' +
        'o processo do time, o sistema que sustenta gente que nem sabe da existência dele. O ' +
        'risco é a ajuda com veredito embutido: você socorre e julga no mesmo gesto, e quem ' +
        'recebe sente os dois.',
    },
    '2w3': {
      deep: DEEP_2W3_PT,
      name: 'O benfeitor visível',
      text:
        'A asa 3 quer que a ajuda funcione e que se saiba que funcionou. É o INTJ 2 que aparece: ' +
        'mentor, articulador, o que abre portas e conecta pessoas com uma competência social que ' +
        'ninguém esperava de um introvertido. Te trata o cuidado como projeto, com meta e ' +
        'resultado. O risco é o vínculo passar a depender da utilidade — você fica ' +
        'indispensável, nunca íntimo, e o dia em que não tem nada a entregar é o dia em que não ' +
        'sabe o que é.',
    },
    '3w2': {
      deep: DEEP_3W2_PT,
      name: 'O realizador relacional',
      text:
        'É o INTJ que mais destoa do estereótipo. A asa 2 orienta a conquista para as pessoas: ' +
        'você quer ser valioso para alguém, não apenas eficaz, e isso desenvolve uma leitura ' +
        'social que a maioria dos INTJs não tem — sabe entrar numa sala, calibrar registro, ' +
        'construir aliança. O risco é a dissolução. Com Fi terciária já muda, o camaleão do 3 ' +
        'somado ao radar do 2 produz alguém extremamente bem-sucedido que perdeu por completo a ' +
        'pista do que queria.',
    },
    '3w4': {
      deep: DEEP_3W4_PT,
      name: 'O realizador exigente',
      text:
        'A asa 4 estraga a vitória de propósito. O 3 puro aceita a conquista que a plateia ' +
        'reconhece; com asa 4, a conquista precisa ser inconfundivelmente sua, feita do material ' +
        'que só você tem, ou não conta. Num INTJ isso significa Ni fechando sobre uma imagem ' +
        'muito específica do que a coisa deveria ser, Te correndo para construí-la e Fi ' +
        'terciária vetando o resultado no fim, sem conseguir explicar o que faltou. Você entrega ' +
        'mais rápido que qualquer um e publica com relutância; a inveja não é do sucesso alheio, ' +
        'é da facilidade com que os outros parecem se contentar. É a variação mais produtiva e a ' +
        'que menos se dá crédito.',
    },
    '4w3': {
      deep: DEEP_4W3_PT,
      name: 'O individualista realizador',
      text:
        'A asa 3 dá saída ao 4. Onde o 4w5 acumula rascunho, o 4w3 entrega: carreira, obra ' +
        'publicada, presença. Te volta a ter emprego e a singularidade passa a existir no mundo ' +
        'em vez de doer em silêncio. O preço é a oscilação — entre a certeza de ser diferente e ' +
        'a vergonha de ser comum, agora com plateia envolvida na conta. Você começa a medir a ' +
        'autenticidade pela reação que ela provoca, que é exatamente o erro que o 4 jurou nunca ' +
        'cometer.',
    },
    '4w5': {
      deep: DEEP_4W5_PT,
      name: 'O visionário melancólico',
      text:
        'Duas posições retraídas somadas, num tipo que já é retraído. O 4w5 INTJ é o mais ' +
        'isolado dos dezoito: a intensidade vai inteira para dentro do trabalho, o trabalho não ' +
        'é mostrado, e o mundo recebe uma pessoa contida da qual não faz ideia da temperatura. A ' +
        'asa 5 dá rigor à estética — nada de sentimentalismo, tudo de precisão — e retira o ' +
        'pouco impulso social que restava. É a variação com maior chance de produzir algo ' +
        'genuinamente original e a menor chance de alguém ver.',
    },
    '5w4': {
      deep: DEEP_5W4_PT,
      name: 'O investigador excêntrico',
      text:
        'A asa 4 faz do conhecimento uma questão de identidade. Você não estuda o que é útil: ' +
        'estuda o que é seu, e a escolha do tema já é uma declaração. O modelo precisa ser ' +
        'bonito e não apenas correto; a explicação precisa ter forma. Ni ganha rédea longa, Te ' +
        'fica subempregado, e a produção sai como obra — ensaio, sistema, catálogo particular — ' +
        'e sai tarde. Isolamento com temperatura alta por baixo, e uma melancolia de fundo que o ' +
        '5w6 simplesmente não tem.',
    },
    '5w6': {
      deep: DEEP_5W6_PT,
      name: 'O analista cauteloso',
      text:
        'A asa 6 troca a excentricidade por método. Aqui o conhecimento não é identidade, é ' +
        'seguro: você aprende o sistema inteiro para não ser pego por ele, e a pergunta que ' +
        'organiza tudo é “onde isso falha”. Te tem muito mais serviço — verificação, ' +
        'redundância, documentação — e por isso o 5w6 entrega, e entrega no prazo, coisa que o ' +
        '5w4 raramente faz. Em troca carrega uma ansiedade de fundo permanente e uma ' +
        'desconfiança que volume nenhum de dados encerra. Sentado ao lado do 5w4, parece outra ' +
        'pessoa: mais lealdade, menos estranheza, muito mais plano B.',
    },
    '6w5': {
      deep: DEEP_6W5_PT,
      name: 'O cético blindado',
      text:
        'A asa 5 retira o 6 do mundo e o entrega ao próprio arquivo. É o 6 mais parecido com o 5 ' +
        '— reservado, técnico, econômico — e a diferença está na relação com o próprio modelo: o ' +
        '5 confia no que construiu, o 6w5 audita o que construiu. Num INTJ, isso vira ' +
        'competência analítica pesada com pouquíssima disposição para expô-la, e uma lealdade ' +
        'fria e duradoura às poucas fontes que sobreviveram ao escrutínio.',
    },
    '6w7': {
      deep: DEEP_6W7_PT,
      name: 'O pragmático inquieto',
      text:
        'A asa 7 tira o 6 do buraco da análise. Mais rápido, mais social, mais disposto a testar ' +
        'do que a modelar, o INTJ 6w7 decide antes de ter certeza e corrige em movimento. Te ' +
        'opera em ciclos curtos e o risco muda de forma: não é paralisia, é dispersão — planos ' +
        'B, C e D todos iniciados e nenhum sustentado. O humor entra como amortecedor da ' +
        'ansiedade e funciona bem o bastante para escondê-la de todo mundo, você incluído.',
    },
    '7w6': {
      deep: DEEP_7W6_PT,
      name: 'O planejador entusiasta',
      text:
        'A asa 6 amarra o 7 ao chão. Há lealdade, há alguma ansiedade útil, há compromisso com ' +
        'pessoas específicas — e por isso o INTJ 7w6 é a versão que de fato termina parte do que ' +
        'começa. Ni continua abrindo assunto novo, mas Te consegue fechar alguns, porque ' +
        'abandonar tem custo emocional aqui. É o 7 mais colaborativo e o menos temerário; em ' +
        'troca, sente com nitidez a dor que o 7 puro consegue reenquadrar.',
    },
    '7w8': {
      deep: DEEP_7W8_PT,
      name: 'O oportunista de aço',
      text:
        'A asa 8 arma o apetite. É o INTJ que menos parece INTJ: rápido, direto, expansivo, com ' +
        'uma capacidade genuína de transformar uma ideia de terça em empresa na sexta. Ni caça ' +
        'oportunidade, Te executa sem pedir autorização e a noção de limite é tratada como ' +
        'problema de engenharia. O risco é proporcional — excesso em tudo, dívidas de várias ' +
        'naturezas, e a incapacidade completa de ficar parado tempo suficiente para sentir o que ' +
        'quer que esteja sendo evitado.',
    },
    '8w7': {
      deep: DEEP_8W7_PT,
      name: 'O construtor de império',
      text:
        'A asa 7 acrescenta apetite e velocidade ao 8. Não basta controlar o próprio território: ' +
        'é preciso expandir, e expandir é divertido. O INTJ 8w7 abre frentes, assume risco alto ' +
        'com cálculo genuíno por trás e é magnético de um jeito que não combina com nenhuma ' +
        'descrição de introversão. O risco é o acúmulo de compromissos grandes sustentados por ' +
        'pura força — funciona até o dia em que o corpo, que é a Se inferior, apresenta a conta ' +
        'sem aviso prévio.',
    },
    '8w9': {
      deep: DEEP_8W9_PT,
      name: 'O estrategista de aço',
      text:
        'A asa 9 esfria o 8 e o torna bem mais perigoso. A força não sai como explosão, sai como ' +
        'pressão constante e sem pressa: você não levanta a voz, não ameaça, apenas não cede, e ' +
        'o outro lado acaba se reorganizando em torno da sua imobilidade. Num INTJ é a ' +
        'combinação com maior gravidade de presença — Ni paciente, Te implacável, nenhuma ' +
        'necessidade de ser visto decidindo. O risco é a distância: as pessoas param de trazer ' +
        'má notícia a alguém que nunca demonstra abalo.',
    },
    '9w8': {
      deep: DEEP_9W8_PT,
      name: 'O pacificador armado',
      text:
        'A asa 8 dá ao 9 uma fronteira. A vida corre em ritmo baixo e amistoso até alguém cruzar ' +
        'uma linha específica, e então aparece uma firmeza absoluta que ninguém tinha previsto — ' +
        'você inclusive, que descobre o próprio limite no instante em que ele é acionado. No ' +
        'INTJ é a variação mais funcional do 9: existe energia para agir quando o assunto ' +
        'realmente importa, e a inércia de sempre para todo o resto.',
    },
    '9w1': {
      deep: DEEP_9W1_PT,
      name: 'O pacificador de princípio',
      text:
        'A asa 1 dá ao 9 um motivo para se mexer que não depende de querer: o certo. Ordem, ' +
        'método, padrão, um senso quieto de dever — o INTJ 9w1 é discreto, correto, difícil de ' +
        'perturbar e mais produtivo do que aparenta. O problema é que ele nunca precisa se ' +
        'perguntar o que quer, porque a norma já respondeu; a ira dos dois tipos fica dobrada ' +
        'para dentro e sai como rigidez passiva, silêncio prolongado e uma frieza que chega ' +
        'muito depois do fato que a causou.',
    },
  },
};
