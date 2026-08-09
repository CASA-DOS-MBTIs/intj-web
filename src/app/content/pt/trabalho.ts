import type { SourceId } from '../sources';
import type { TrabalhoContent } from '../types';

export const TRABALHO_PT: TrabalhoContent = {
  meta: {
    title: 'Trabalho — Carreira, ambiente e liderança · INTJ',
    description:
      'Onde o INTJ prospera e o que o esvazia em três meses, como pedir autonomia sem soar ' +
      'insubordinado, o custo real das reuniões, colaboração contra comitê, e como a ' +
      'credibilidade se constrói devagar e se perde numa frase.',
  },

  sources: [
    'mbf-ethics',
    'mbf-basics',
    'myers-1998-manual',
    'roberts-2007',
    'deci-ryan-2000',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 03 — Trabalho',
    title: 'Carreira, ambiente\ne liderança',
    lede:
      'Para o INTJ, trabalho raramente é só trabalho: é o lugar onde a visão precisa virar ' +
      'coisa real. Isso torna a escolha de ambiente mais decisiva que a de cargo — e explica ' +
      'por que dois empregos com o mesmo título podem te energizar ou te apagar completamente. ' +
      'Quase tudo nesta página gira em torno de duas coisas: <strong>autonomia</strong> e ' +
      '<strong>competência</strong> — a sua e a de quem está ao redor. Não porque o INTJ seja ' +
      'especial nisso, mas porque é onde o seu tipo sente a falta primeiro, e mais forte.',
  },

  conditions: {
    thriveTitle: 'O que faz você prosperar',
    thrive: [
      {
        title: 'Autonomia sobre o método',
        text:
          'Diga o resultado esperado e saia do caminho. Você entrega mais e melhor quando ' +
          'decide o “como” — e o “como” é onde mora quase todo o seu valor.',
      },
      {
        title: 'Problemas complexos e de longo prazo',
        text:
          'Nada te acorda como um sistema difícil que exige meses de raciocínio para se ' +
          'resolver. Problema fácil e urgente te cansa mais que problema difícil e lento.',
      },
      {
        title: 'Competência ao redor',
        text:
          'Você aceita hierarquia sem atrito quando quem lidera sabe do que fala e explica os ' +
          'critérios. Não é o cargo que incomoda: é autoridade sem raciocínio por trás.',
      },
      {
        title: 'Silêncio e blocos longos',
        text:
          'Trabalho profundo em janelas de três a quatro horas, sem interrupção — o formato ' +
          'natural do Ni. Duas horas partidas ao meio não são duas horas: são quatro começos.',
      },
      {
        title: 'Um chefe que mostra o critério',
        text:
          'O bom gestor de um INTJ faz três coisas diferentes: entrega objetivo e prazo em vez ' +
          'de passo a passo, avisa quando muda de ideia e por quê, e pergunta antes de ' +
          'corrigir. Nada disso é indulgência — é a forma mais barata de te ter inteiro.',
      },
      {
        title: 'Colaboração com dono definido',
        text:
          'Duas ou três pessoas, um responsável nomeado, discordância tratada como informação. ' +
          'Nesse formato você colabora bem e às vezes até gosta. O que você não tolera é o ' +
          'outro formato — que costuma usar exatamente a mesma palavra.',
      },
      {
        title: 'Combinado por entrega, não por presença',
        text:
          'Você rende onde ninguém confunde estar disponível com estar produzindo. Horário fixo ' +
          'você cumpre sem drama; disponibilidade permanente te esvazia, porque ela custa o ' +
          'bloco inteiro e não só os minutos efetivamente usados.',
      },
      {
        title: 'Correção técnica e cedo',
        text:
          'Você prefere descobrir que está errado na terça a defender a coisa errada por três ' +
          'semanas. Ambientes que corrigem rápido, com argumento e sem plateia, são os únicos ' +
          'em que você baixa a guarda.',
      },
    ],
    drainTitle: 'O que te esvazia em três meses',
    drain: [
      {
        title: 'Microgerenciamento',
        text:
          'Ser vigiado em cada etapa não é irritante: é desmotivador em nível estrutural. E o ' +
          'efeito não é proporcional à dose — basta um pedido de satisfação não combinado por ' +
          'dia para o trabalho inteiro virar prestação de contas.',
      },
      {
        title: 'Trabalho decorativo',
        text:
          'Rituais sem função, relatórios que ninguém lê, reuniões que poderiam ser um ' +
          'parágrafo. Você raramente se recusa a fazer — você faz, e some por dentro um pouco ' +
          'a cada semana.',
      },
      {
        title: 'Interrupção constante',
        text:
          'Contexto fragmentado destrói a sua principal vantagem: o raciocínio contínuo. ' +
          'Remontar o modelo mental custa mais que a interrupção em si, e esse custo não ' +
          'aparece em relatório nenhum além do seu cansaço.',
      },
      {
        title: 'Decisão por política',
        text:
          'Ambientes onde o argumento certo perde para o cargo certo geram cinismo rápido em ' +
          'você. E o cinismo é caro de um jeito específico: ele te faz parar de trazer o ' +
          'argumento certo.',
      },
      {
        title: 'Reunião como formato padrão',
        text:
          'Uma reunião de cinquenta minutos raramente custa cinquenta minutos: custa o bloco ' +
          'que ela parte em dois e os vinte minutos de reentrada. Três por dia, bem ' +
          'espalhadas, consomem um dia útil sem aparecer em lugar nenhum.',
      },
      {
        title: 'Comitê disfarçado de colaboração',
        text:
          'Muita gente, ninguém responsável, e o produto final é a concordância em vez da ' +
          'decisão. Aqui você fica calado, decide sozinho depois, e passa a ser descrito como ' +
          'alguém que “não é de time”.',
      },
      {
        title: 'Presença como métrica',
        text:
          'Sala aberta, câmera obrigatória, corredor. Não é a companhia que cansa — é a ' +
          'impossibilidade de passar quarenta minutos sem ser interpretado. Você gasta em ' +
          'administração de imagem a energia que ia para o problema.',
      },
      {
        title: 'Critério que muda depois',
        text:
          'Poucas coisas te derrubam como descobrir, na entrega, que o alvo era outro havia ' +
          'semanas e ninguém te avisou. Não é o retrabalho que dói: é a suspeita de que ' +
          'esforço não é o que decide as coisas ali.',
      },
    ],
  },

  fields: {
    eyebrow: 'Campos que os INTJs costumam procurar',
    intro:
      'Não é conselho de carreira, e não é prova de aptidão. O tipo não mede habilidade em ' +
      'profissão nenhuma — a orientação ética do próprio MBTI é explícita em que o instrumento ' +
      'não foi desenhado para contratar ninguém, em que ele não mede habilidade, competência nem ' +
      'perícia, e em que resultado nenhum deve ser usado para limitar quem quer que seja; o ' +
      'manual, por sua vez, é explícito em que ele ordena preferências. Vale registrar o ' +
      'contraste honesto: traços de ' +
      'personalidade medidos em escala contínua têm, sim, relação com desfechos de trabalho — ' +
      'Roberts e colegas mostraram em 2007 que essa relação é comparável à da origem ' +
      'socioeconômica e à da habilidade cognitiva. Só que os efeitos são modestos, e o que foi ' +
      'medido ali são traços graduais, não tipos: nada disso autoriza ler quatro letras e ' +
      'concluir alguma coisa sobre uma pessoa. O que a lista abaixo mostra é atração, não ' +
      'competência: o que une esses campos é a combinação de complexidade, autonomia e ' +
      'resultado verificável, que é exatamente o que o INTJ vai procurar. Se você prospera ' +
      'fora dela, a lista está errada — não você.',
    items: [
      'Estratégia e consultoria',
      'Engenharia e arquitetura de sistemas',
      'Pesquisa científica e academia',
      'Dados, análise e modelagem',
      'Direito e áreas regulatórias',
      'Finanças e investimentos',
      'Auditoria, risco e conformidade',
      'Medicina diagnóstica e cirurgia',
      'Empreendedorismo de produto',
      'Escrita, roteiro e crítica',
      'Docência e formação técnica',
      'Cibersegurança e inteligência',
    ],
  },

  leadership: {
    eyebrow: 'Liderança',
    title: 'Você lidera pela direção, não pelo carisma',
    paragraphs: [
      'O INTJ líder é o que aponta para onde o time vai e por quê, com uma clareza que costuma ' +
        'ser rara. Você delega bem, protege o time de burocracia, defende decisões impopulares ' +
        'se estiverem corretas e cobra padrão alto sem precisar levantar a voz. A parte que ' +
        'quase ninguém te diz é que isso já é liderar — você tende a achar que ainda não está ' +
        'liderando porque não sente carisma nenhum acontecendo por dentro.',
      'O ponto cego é a temperatura. Você comunica o quê e esquece o quanto importa — e times ' +
        'precisam ouvir reconhecimento, não só correção. Uma frase específica de elogio por ' +
        'semana muda a percepção do seu comando mais que qualquer reorganização de processo. E ' +
        'vale olhar de onde vem o impulso de reorganizar: mexer no organograma é a forma mais ' +
        'confortável de resolver um problema que, no fundo, estava pedindo uma conversa.',
      'O erro mais caro do INTJ que lidera não é exigir demais: é delegar a tarefa sem delegar ' +
        'o julgamento. Você entrega o que fazer, guarda o critério com você, e depois se ' +
        'decepciona porque a pessoa não chegou onde você teria chegado. Ela não tinha o mapa. ' +
        'Dizer junto o que você consideraria um bom resultado — e o que consideraria fracasso ' +
        '— custa dez minutos e separa uma equipe que executa de uma que precisa de você em ' +
        'cada decisão.',
      'Em algum momento você é promovido para longe do trabalho em que era bom. É uma perda ' +
        'real e vale chamá-la pelo nome: você trocou blocos de quatro horas por um dia feito ' +
        'de interrupções, e o cargo novo não tem o prazer do problema fechado. Há duas saídas ' +
        'honestas. Uma é tratar gestão como ofício novo, com curva de aprendizado e critérios ' +
        'próprios, em vez de versão diluída do anterior. A outra é recusar a promoção e dizer ' +
        'por quê — recusar não é falta de ambição, e organizações que só sabem premiar com ' +
        'cargo têm um problema que não é seu.',
      'Uma última nota, e é a mais desconfortável: o que você quer de um chefe é quase ' +
        'exatamente o que a sua equipe quer de você. Deci e Ryan descreveram autonomia e ' +
        'competência como necessidades psicológicas básicas — proposta feita para pessoas em ' +
        'geral, não para um tipo, e ninguém testou isso por sigla. Ainda assim, a lista deles ' +
        'tem três itens, e o terceiro é vínculo. É justamente o que o INTJ tende a classificar ' +
        'como supérfluo, inclusive quando é ele quem está sem.',
    ],
    doLabel: 'Faça',
    avoidLabel: 'Evite',
    dos: [
      'Explique o raciocínio junto com a decisão. Para você é óbvio; para o time é o contexto ' +
        'que gera confiança.',
      'Dê retorno positivo específico. “Sua análise economizou duas semanas” vale mais que dez ' +
        '“bom trabalho”.',
      'Diga o grau de autonomia junto com a tarefa: “isso é seu, me avise no fim” ou “quero ver ' +
        'antes de sair”. Sem isso, a pessoa te consulta o tempo todo por prudência, não por ' +
        'incapacidade.',
      'Peça a objeção nominalmente. “Alguém discorda?” não produz resposta nenhuma; “Marina, ' +
        'qual é o pior cenário disso?” produz.',
    ],
    avoids: [
      'Refazer silenciosamente o trabalho de alguém. Corrigir sem explicar ensina só uma coisa: ' +
        'que não confia.',
      'Assumir que silêncio é concordância. Muita gente não discorda de você por intimidação, ' +
        'não por convicção.',
      'Usar a reunião só para comunicar o que já foi decidido — e depois estranhar que ninguém ' +
        'defenda o plano como se fosse seu.',
      'Deixar escapar uma frase de desprezo. “Isso é óbvio”, dito na frente de seis pessoas, ' +
        'cobra juros por meses — e a cobrança nunca chega até você.',
    ],
  },

  practice: {
    eyebrow: 'Na prática',
    title: 'Doze ajustes de alto retorno',
    items: [
      {
        n: '01',
        title: 'Mostre o rascunho antes do produto final',
        text:
          'Você prefere aparecer com a solução pronta. Mas retorno cedo evita meses gastos na ' +
          'direção errada — e faz o time se sentir parte, o que reduz resistência depois. ' +
          'Mostre a trinta por cento, dizendo que é trinta por cento: assim ninguém confunde ' +
          'esboço com descuido.',
      },
      {
        n: '02',
        title: 'Traduza a visão em uma frase',
        text:
          'Se o seu plano só existe completo, ninguém o carrega junto. Uma frase memorável faz ' +
          'mais pela execução do que um documento de trinta páginas — e ela não é simplificação ' +
          'do plano, é a alça por onde as outras pessoas conseguem pegá-lo.',
      },
      {
        n: '03',
        title: 'Peça autonomia sem soar insubordinado',
        text:
          'O pedido errado é o defensivo: “eu trabalho melhor sozinho”. O certo oferece ao ' +
          'gestor aquilo que a vigilância dele estava tentando comprar — previsibilidade. ' +
          '“Posso te trazer isso fechado na sexta, em vez de por partes? E se até quarta eu ' +
          'perceber que está fora do caminho, eu te aviso antes.” Você não está pedindo menos ' +
          'controle: está propondo um ponto de checagem melhor e um alarme antecipado. Quase ' +
          'nenhum chefe recusa esse acordo.',
      },
      {
        n: '04',
        title: 'Escolha o chefe antes da vaga',
        text:
          'Nenhum salário compensa liderança incompetente para um INTJ. Na entrevista, pergunte ' +
          'como as decisões são tomadas e peça um exemplo de uma que deu errado. A resposta ' +
          'prevê os seus próximos dois anos melhor que o organograma, o discurso de cultura e a ' +
          'descrição da vaga somados.',
      },
      {
        n: '05',
        title: 'Nos primeiros noventa dias, documente em vez de reorganizar',
        text:
          'Na segunda semana você já enxerga por que o sistema está quebrado, e é bem provável ' +
          'que esteja certo. O problema não é o diagnóstico: é que ninguém ali ainda tem motivo ' +
          'para acreditar em você. Escreva o que viu, com data, e guarde. Enquanto isso, ' +
          'conserte muito bem uma coisa pequena que te pediram. Legitimidade não se reivindica, ' +
          'se gasta — e você precisa acumular alguma antes de sacar.',
      },
      {
        n: '06',
        title: 'Trate reunião como despesa e diga o preço',
        text:
          'Antes de aceitar, uma pergunta resolve metade: “qual decisão precisa sair daqui?”. ' +
          'Se não houver decisão, é atualização, e atualização cabe em texto. Quando for você ' +
          'quem convoca, mande junto do convite o que precisa ser decidido. E reserve um bloco ' +
          'por dia com nome visível na agenda — bloco sem nome qualquer pessoa ocupa.',
      },
      {
        n: '07',
        title: 'Saiba se aquilo é colaboração ou comitê',
        text:
          'Colaboração tem poucas pessoas, um responsável nomeado e trata discordância como ' +
          'dado. Comitê tem muita gente, nenhum dono, e produz concordância em vez de decisão. ' +
          'Você tolera as duas de formas radicalmente diferentes, e o erro caro é punir a ' +
          'primeira pelos pecados da segunda. Dá para distinguir nos dez primeiros minutos: ' +
          'pergunte quem decide no fim. Se a resposta for “o grupo”, você já sabe onde está.',
      },
      {
        n: '08',
        title: 'Diga uma frase antes de ficar calado',
        text:
          'Na reunião, o seu silêncio é processamento. De fora, silêncio de processamento e ' +
          'silêncio de desdém são idênticos — e o colega escolhe a interpretação mais cara. ' +
          'Três segundos resolvem o mal-entendido inteiro: “estou pensando, volto nisso antes ' +
          'do fim” ou “concordo, não tenho nada a acrescentar”. Você não está performando ' +
          'entusiasmo; está informando o estado.',
      },
      {
        n: '09',
        title: 'No conflito, comece pelo fato menor',
        text:
          'A sua tendência é subir para o princípio em duas frases. Alguém perdeu um prazo e, ' +
          'de repente, a conversa é sobre se aquele lugar respeita compromissos. Você costuma ' +
          'estar certo no princípio e perder assim mesmo, porque a outra pessoa passa a se ' +
          'defender do julgamento em vez de resolver o prazo. Diga primeiro a coisa menor e ' +
          'verificável — “o prazo era terça e eu soube na quinta” — e guarde o princípio. Ele ' +
          'funciona uma ou duas vezes por ano; gasto toda semana, vira ruído.',
      },
      {
        n: '10',
        title: 'Escolha o remoto olhando os dois lados da conta',
        text:
          'Remoto te devolve o bloco de quatro horas, e é por isso que muito INTJ rende ' +
          'visivelmente mais em casa. O que ele tira é justamente o que você já não construía ' +
          'de propósito: a confiança de corredor, o contexto que circula sem pauta, o aviso de ' +
          'que o projeto vai mudar antes de mudar. Se você trabalha remoto, agende o que ' +
          'aconteceria sem querer no escritório — vinte minutos por semana com alguém de fora ' +
          'da sua área. É a compensação mais barata que existe, e a que você mais adia.',
      },
      {
        n: '11',
        title: 'Trate relações como infraestrutura',
        text:
          'Rede de contatos parece política vazia até você precisar de uma. Cinco relações ' +
          'profissionais mantidas com sinceridade valem mais que cem conexões frias — e ' +
          'mantidas quer dizer uma mensagem a cada poucos meses, sem pedir nada. Aparecer só ' +
          'quando precisa, depois de dois anos de silêncio, funciona menos do que você imagina; ' +
          'e você sabe disso, porque é exatamente assim que se sente quando fazem com você.',
      },
      {
        n: '12',
        title: 'Credibilidade se constrói em entregas e se perde numa frase',
        text:
          'A sua reputação num lugar novo é assimétrica de um jeito quase injusto: sobe ' +
          'devagar, entrega por entrega, ao longo de meses, e cai em um segundo — uma frase de ' +
          'desprezo dita diante das pessoas erradas, um suspiro audível, um “isso já era ' +
          'óbvio”. Você provavelmente não vai lembrar da frase. Todo mundo na sala vai. E o ' +
          'preço não chega como conflito aberto: chega como convites que param de vir, ' +
          'informação que passa a te alcançar tarde, decisões tomadas sem você na sala. Não é ' +
          'preciso virar simpático. É preciso não ser desdenhoso em voz alta — exigência bem ' +
          'menor, e um treino que cabe inteiro em dois segundos de pausa antes de responder.',
      },
    ],
  },

  next: {
    label: 'Próxima página',
    title: 'Vínculos: amor, amizade e família',
    index: '04 →',
    key: 'vinculos',
  },
};
