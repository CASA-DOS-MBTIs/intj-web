import { DEEP_SO_PT, DEEP_SP_PT, DEEP_SX_PT } from './deep/instincts';
import { FOCUS_SUBTIPOS_PT } from './deep/focus';
import type { InstinctsContent } from '../types';

export const SUBTIPOS_PT: InstinctsContent = {
  focus: FOCUS_SUBTIPOS_PT,
  meta: {
    title: 'Subtipos instintivos — os 27 subtipos aplicados ao INTJ',
    description:
      'Os três instintos de Ichazo cruzados por Naranjo com os nove eneatipos: como ' +
      'autopreservação, social e um-a-um mudam a aparência de um INTJ sem mudar o tipo.',
  },

  sources: ['naranjo-1994', 'chestnut-2013', 'fauvre-instincts', 'riso-hudson-1999', 'hook-2021'],

  header: {
    eyebrow: 'Além do MBTI — Subtipos instintivos',
    title: 'Três instintos,\nvinte e sete variações',
    lede:
      'Dois INTJs com o mesmo eneatipo podem parecer inimigos naturais. A diferença costuma ' +
      'estar aqui: qual dos três instintos comanda a atenção. O instinto não decide o que te ' +
      'move — decide <em>onde</em> essa motivação é gasta, na fortaleza, no grupo ou numa ' +
      'única pessoa. É a variável que mais muda a aparência do tipo sem mudar nada do que ele ' +
      'é por dentro.',
  },

  intro:
    'Os três instintos são de Oscar Ichazo; foi Claudio Naranjo quem os cruzou com os nove ' +
    'eneatipos e obteve os 27 subtipos descritos aqui — Katherine Fauvre trabalhou depois a ' +
    'ordem de dominância entre eles. Ninguém <em>é</em> um instinto: os três estão sempre ' +
    'presentes, e o que muda é a ordem. O primeiro consome a atenção, o segundo funciona ' +
    'razoavelmente bem e o terceiro é o que você negligencia sem sequer notar que está ' +
    'negligenciando. Os nomes entre aspas seguem a nomenclatura de Beatrice Chestnut, que ' +
    'também assinala, em cada eneatipo, o <strong>contratipo</strong>: o subtipo que corre ' +
    'contra a paixão do próprio tipo e por isso é confundido a vida inteira com outro. A ' +
    'grelha percorre os nove eneatipos, e não apenas os que aparecem com mais frequência ' +
    'entre INTJs — um subtipo incomum dentro de um tipo incomum continua a ser alguém.',

  caveat:
    'Descrição de escola, não achado de laboratório. Os instintos vêm da tradição oral do ' +
    'eneagrama e nunca foram validados empiricamente: a revisão sistemática da literatura ' +
    'encontra pouquíssima pesquisa controlada sobre o eneagrama e nenhuma que sustente os ' +
    'subtipos como categorias reais. Nada aqui foi medido. Leia como vocabulário útil para ' +
    'se descrever, não como diagnóstico de coisa nenhuma.',

  labels: {
    asIntj: 'No INTJ',
    stress: 'Sob pressão',
    grow: 'O trabalho',
    withType: 'Os 27 subtipos · o instinto cruzado com o eneatipo',
  },

  instincts: {
    sp: {
      deep: DEEP_SP_PT,
      code: 'SP',
      name: 'Autopreservação',
      text: 'Corpo, recursos, território e a margem que separa você da dependência.',
      asIntj: [
        'O instinto de autopreservação vigia corpo, comida, dinheiro, calor, território — ' +
          'exatamente o domínio que a <strong>Se inferior</strong> não reporta. O cruzamento ' +
          'produz uma coisa estranha e imediatamente reconhecível: um INTJ que administra o ' +
          'próprio corpo por sistema, porque não o sente. Planilha de gastos, horário de sono ' +
          'fixo, suplementos pesados na balança, um apartamento organizado como posto avançado. ' +
          'Te faz o trabalho que a sensação deveria fazer — e faz bem, até o dia em que a ' +
          'exaustão chega sem ter avisado.',
        'A moeda aqui não é só dinheiro: é <strong>autonomia</strong>. Este INTJ poupa tempo, ' +
          'energia e obrigações com a mesma avareza com que outra pessoa poupa capital, e cada ' +
          'compromisso novo é avaliado pelo que custa de independência futura. Daí o traço mais ' +
          'típico do subtipo: recusar oportunidades boas porque elas exigiriam depender de ' +
          'alguém durante algum tempo.',
        'A fortaleza funciona. O problema é que ela é confortável. Construída até o fim, ela ' +
          'deixa de proteger uma vida e passa a substituí-la — e a visão de Ni fica guardada ' +
          'junto com a reserva de emergência, à espera de um momento seguro que nunca chega a ' +
          'ser declarado.',
      ],
      stress:
        'Contrai. Cancela compromissos, reduz o mundo ao apartamento e ao trabalho, e o alívio ' +
        'chega pela Se inferior na forma mais barata disponível: comida, compras, temporadas ' +
        'inteiras numa noite.',
      grow:
        'Gastar a reserva de propósito. Marque a viagem, aceite o convite, dependa de alguém em ' +
        'algo pequeno e reversível — segurança que nunca é testada é indistinguível de ' +
        'imobilidade.',
    },
    so: {
      deep: DEEP_SO_PT,
      code: 'SO',
      name: 'Social',
      text: 'Posição, pertencimento e valor dentro de um grupo — não sociabilidade.',
      asIntj: [
        'O instinto social não tem nada a ver com gostar de festas. Tem a ver com lugar: ' +
          'posição, hierarquia, reputação, o peso que você tem dentro de um grupo que importa. ' +
          'Num INTJ isso produz um paradoxo que confunde todo mundo, inclusive ele: uma pessoa ' +
          'profundamente reservada que mesmo assim sabe exatamente quem manda em quem, qual ' +
          'aliança está apodrecendo e onde a decisão vai ser tomada de verdade. Ni lê o grupo ' +
          'como leria qualquer outro sistema.',
        'E Te age em conformidade — aceita o cargo, entra no conselho, funda a instituição. Não ' +
          'por gosto de holofote, mas porque a posição é onde ficam as alavancas. É o subtipo ' +
          'que constrói coisas duráveis em vez de projetos avulsos, e é também o INTJ que mais ' +
          'aparece em liderança formal apesar de detestar a parte social do cargo.',
        'O risco é específico e silencioso: a reputação começa a fazer o trabalho que cabia à ' +
          '<strong>Fi</strong>. Para um tipo cuja ética deveria ser interna e inegociável, ' +
          'trocar “o que eu considero certo” por “como isto vai ser lido” é uma corrosão que ' +
          'não dói enquanto acontece. O sintoma costuma ser desprezo pelo grupo — que é a forma ' +
          'que a dependência assume quando não é admitida.',
      ],
      stress:
        'Retira-se do grupo mas continua marcando o placar: distância crítica por fora, ' +
        'comparação contínua por dentro, e um desprezo que é sobretudo mágoa de estar de fora.',
      grow:
        'Contribuir sem contabilizar. Faça pelo grupo algo cuja devolução seja impossível de ' +
        'medir — é a única maneira de descobrir se a posição importa por si ou pelo que ela ' +
        'rende.',
    },
    sx: {
      deep: DEEP_SX_PT,
      code: 'SX',
      name: 'Um-a-um (sexual)',
      text: 'Intensidade, atração e fusão com um único objeto — não posse.',
      asIntj: [
        'O instinto sexual — “um-a-um” é o nome menos enganoso — é o instinto da intensidade e ' +
          'da fusão: a força que puxa para um único objeto, uma pessoa, uma obra, uma ideia, e ' +
          'que quer ser transformada por ele. Não é posse e não é ciúme. Convém dizer isso com ' +
          'todas as letras, porque a confusão é comum: a paixão do eneatipo 4 é a ' +
          '<strong>inveja</strong> — a falta, a comparação com o que o outro tem — e não o ' +
          'ciúme; e o instinto sx descreve a voltagem de um vínculo, nunca o direito sobre ele.',
        'Num INTJ, este instinto encontra uma mente que já convergia sozinha. Ni destila; o sx ' +
          'lhe entrega um objeto único; o resultado é absorção total — meses dentro de uma ' +
          'pessoa, de um autor, de um problema, com todo o resto reduzido a ruído de fundo. A ' +
          'Fi terciária acrescenta peso moral: o objeto não é interessante, é <em>sagrado</em>, ' +
          'e o vínculo passa a ser tratado com a seriedade que outras pessoas reservam para uma ' +
          'vocação.',
        'É também a porta de entrada mais eficaz que este tipo tem para a Se inferior — o sx é ' +
          'o único instinto que arrasta um INTJ para o corpo e para o presente por vontade ' +
          'própria, através de outra pessoa. E é exatamente aí que mora o perigo: Ni constrói ' +
          'uma versão do outro e depois se relaciona com a versão. Enquanto a pessoa real não ' +
          'contradiz a imagem, é a coisa mais intensa que existe. No dia em que contradiz, a ' +
          'queda é vertical.',
      ],
      stress:
        'Fixa. Repete a conversa inteira na cabeça, procura sentido em cada detalhe, e tudo o ' +
        'que é morno — pessoas, trabalho, conversa de corredor — vira insuportável.',
      grow:
        'Deixar a pessoa real desmentir a imagem, e continuar depois que a intensidade baixa. O ' +
        'que sobrevive à queda de voltagem era vínculo; o resto era projeção sua.',
    },
  },

  withType: {
    '1': {
      sp:
        '“Preocupação”. O padrão vira projeto doméstico: rotina, dieta e finanças auditadas ' +
        'pelo Te, com a raiva convertida em ansiedade sobre o próprio corpo — justamente o ' +
        'sistema que a Se inferior nunca reporta a tempo.',
      so:
        '“Não-adaptabilidade”. Você não corrige as pessoas: você encarna o critério e deixa que ' +
        'ele julgue ' +
        'por você — Ni transforma o certo em doutrina, e o seu silêncio pesa mais na sala do ' +
        'que qualquer bronca.',
      sx:
        '“Zelo”, o contratipo. A raiva sai da jaula e mira uma pessoa ou uma causa: é o INTJ 1 ' +
        'mais próximo de pregar, convertendo a visão de Ni em exigência sobre quem está ao lado.',
    },
    '2': {
      sp:
        '“Privilégio”, o contratipo. Ajuda menos e espera mais: este INTJ presta o favor ' +
        'invisível e cobra em silêncio, porque a Fi terciária não sabe pedir nada em voz alta.',
      so:
        '“Ambição”. Torna-se indispensável a quem decide — assessor, conselheiro, a inteligência ' +
        'atrás do trono. Te presta o serviço com competência real, e o preço é um ' +
        'reconhecimento que ninguém prometeu.',
      sx:
        '“Sedução”. Toda a força vai para uma pessoa: Ni estuda alguém até saber do que ela ' +
        'precisa antes dela mesma, e a generosidade fica indistinguível do controle.',
    },
    '3': {
      sp:
        '“Segurança”, o contratipo — a vaidade de não ter vaidade. Trabalha em silêncio e ' +
        'despreza autopromoção, mas mede o próprio valor pela autossuficiência, que é a mesma ' +
        'vitrine virada para dentro.',
      so:
        '“Prestígio”. A conquista precisa ser vista: Ni escolhe o palco certo com anos de ' +
        'antecedência, Te entrega, e o INTJ descobre tarde que otimizou a carreira para a ' +
        'plateia e não para si.',
      sx:
        '“Carisma”. Quer ser irresistível para um número muito pequeno de pessoas — desempenho ' +
        'privado em vez de currículo público, com a Fi emprestando ao outro exatamente a imagem ' +
        'que ele quer ver.',
    },
    '4': {
      sp:
        '“Tenacidade”, o contratipo. Nada de drama: aguenta em silêncio, converte a falta em ' +
        'disciplina e só deixa a inveja aparecer como padrão impossível aplicado ao próprio ' +
        'trabalho.',
      so:
        '“Vergonha”. A comparação é pública mesmo quando ninguém está olhando: mede-se contra o ' +
        'grupo, encontra sempre o déficit e usa a diferença como identidade — um introvertido ' +
        'que ainda assim precisa de testemunhas.',
      sx:
        '“Competição”. A inveja sai para fora e vira exigência: confronta, compete e corta ' +
        'contato com quem o diminui — e note que a paixão do 4 é inveja, falta, comparação, e ' +
        'nunca ciúme.',
    },
    '5': {
      sp:
        '“Castelo”. O limite é físico: uma casa, um horário e uma reserva que ninguém atravessa. ' +
        'Reduz a própria necessidade até a independência ficar barata — e confunde a fortaleza ' +
        'com uma vida.',
      so:
        '“Totem”. O conhecimento vira vínculo: pertence a um campo, não a um grupo. Domina o ' +
        'vocabulário, cita as fontes certas e conversa com autores mortos com mais facilidade ' +
        'do que com colegas vivos.',
      sx:
        '“Confiança”, o contratipo — o confidente. Procura uma pessoa a quem contar tudo: é o 5 ' +
        'mais romântico, o que gasta num único vínculo a energia que os outros dois subtipos ' +
        'passam a vida poupando.',
    },
    '6': {
      sp:
        '“Calor”. Compra segurança com aliança: pouquíssimos amigos, testados ao longo de anos, ' +
        'e uma cordialidade discreta que contradiz a frieza que o tipo costuma projetar.',
      so:
        '“Dever”. A dúvida é resolvida por sistema: adota um método, uma escola ou uma ' +
        'instituição e vira o seu guardião mais rigoroso — obediência a um critério, jamais a ' +
        'uma pessoa.',
      sx:
        '“Força”, o contratipo. Contrafóbico: vai contra o medo em vez de recuar, provoca a ' +
        'autoridade que teme e é lido como 8 por todo mundo — inclusive por si mesmo.',
    },
    '7': {
      sp:
        '“Guardiões do castelo”. Monta uma rede de aliados e de opções: nunca um plano só, ' +
        'nunca uma saída só — e Ni, que deveria convergir, acaba empregado em desenhar rotas de ' +
        'fuga.',
      so:
        '“Sacrifício”, o contratipo. Adia o próprio apetite para servir a um ideal e parece um 1 ' +
        'sério; a gula reaparece como projetos demais aceitos em nome da causa.',
      sx:
        '“Sugestionabilidade”. Tudo que é novo parece melhor: idealiza a próxima ideia, a ' +
        'próxima pessoa e ' +
        'o próximo país — e a convergência de Ni recomeça do zero antes de terminar uma vez.',
    },
    '8': {
      sp:
        '“Satisfação”. Poder concreto e pouca conversa: garante recursos, território e ' +
        'independência material antes de qualquer discurso, negocia como quem não pode perder e ' +
        'raramente explica por quê.',
      so:
        '“Solidariedade”, o contratipo. A força vira proteção de terceiros: escolhe uma ' +
        'injustiça, monta com Te a estrutura que a desfaz, e é o mais próximo de um líder ' +
        'social que este tipo produz.',
      sx:
        '“Posse”. Intensidade dirigida a uma pessoa e rebeldia como assinatura: toma conta do ' +
        'ambiente inteiro sem levantar a voz, e cobra do vínculo a mesma lealdade total que ' +
        'oferece.',
    },
    '9': {
      sp:
        '“Apetite”. O conforto substitui a busca — rotina, comida, hábito. É o único subtipo em ' +
        'que a Se inferior aparece como excesso morno e não como colapso, com a visão de Ni ' +
        'adiada indefinidamente.',
      so:
        '“Participação”, o contratipo. Pertence trabalhando: aceita a tarefa que ninguém quer, ' +
        'torna-se essencial à equipe e some da própria agenda — Te a serviço da prioridade dos ' +
        'outros.',
      sx:
        '“Fusão”. Existe através de alguém: funde-se a uma pessoa ou a uma causa e ' +
        'vive com uma intensidade que só aparece emprestada, porque o próprio projeto continua ' +
        'em branco.',
    },
  },
};
