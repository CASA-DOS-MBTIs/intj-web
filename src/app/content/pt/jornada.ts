import type { JornadaContent } from '../types';
import type { SourceId } from '../sources';

export const JORNADA_PT: JornadaContent = {
  meta: {
    title: 'Jornada — As fases do INTJ',
    description:
      'Como as funções do INTJ amadurecem ao longo das décadas: cinco fases, da infância aos ' +
      '45+, e seis práticas concretas de crescimento.',
  },

  sources: [
    'grant-1983',
    'mbf-type-dynamics',
    'reynierse-2009',
    'mmtic-1987',
    'pittenger-2005',
    'lieberman-2007',
    'pennebaker-beall-1986',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 05 — Jornada',
    title: 'As fases do INTJ',
    lede:
      'As funções não aparecem todas de uma vez: elas amadurecem em ordem, ao longo de décadas. ' +
      'Isso significa que um INTJ de 19 anos e um de 45 podem parecer tipos diferentes — e que ' +
      'várias dificuldades que você atribui a defeito de caráter podem ser questão de fase.',
  },

  timelineHint: 'Clique em uma fase',
  focusLabel: 'Função em foco:',
  painLabel: 'O que costuma pesar',
  gainLabel: 'O que se abre',
  taskLabel: 'Tarefa da fase',

  phases: [
    {
      range: '0–12',
      title: 'O observador estranho',
      focus: 'Ni emergindo',
      body:
        'A criança que mais tarde se reconhece INTJ costuma ser descrita como madura demais, ' +
        'séria demais, cheia de perguntas que ninguém esperava — retrato retrospectivo, não ' +
        'diagnóstico: tipo na infância é instável, e a escala menos estável é justamente a de ' +
        'pensamento e sentimento. O Ni já ' +
        'daria sinal: você percebe incoerência nos adultos, mente enquanto todos brincam, e ' +
        'prefere um livro ou um projeto solitário à movimentação do grupo. Muitos INTJs relatam ' +
        'a sensação, desde muito cedo, de estar assistindo o mundo de uma distância pequena.',
      pain:
        'Sentir-se deslocado sem saber por quê. Ser lido como mal-humorado ou arrogante quando ' +
        'você só estava pensando.',
      gain: 'Um mundo interno rico e uma independência precoce que vira base de tudo depois.',
      task:
        'Encontrar um adulto ou um amigo que trate a sua diferença como interessante, não como ' +
        'problema a corrigir.',
    },
    {
      range: '13–20',
      title: 'A afirmação da lógica',
      focus: 'Te em desenvolvimento',
      body:
        'O Te entra em cena e o INTJ jovem descobre uma arma poderosa: argumentar. Você começa a ' +
        'organizar tudo em sistemas, a questionar autoridade que não sustenta o próprio ' +
        'raciocínio, e a colecionar competência como forma de segurança. É também a fase mais ' +
        'dura socialmente — a paciência com convenções é mínima e a diplomacia ainda não existe.',
      pain:
        'Isolamento na escola, atrito com autoridade, impaciência com colegas, e a impressão de ' +
        'que sensibilidade é fraqueza.',
      gain: 'Capacidade real de análise, autonomia intelectual e o primeiro senso de projeto de vida.',
      task:
        'Separar ter razão de ser eficaz. Ganhar discussões custa aliados; a habilidade a treinar ' +
        'é escolher quais valem.',
    },
    {
      range: '20–30',
      title: 'A construção',
      focus: 'Ni–Te em regime',
      body:
        'É a década de maior produtividade externa: carreira, formação, projetos ambiciosos, ' +
        'planos de dez anos. O eixo Ni-Te opera em plena força e você entrega mais do que a ' +
        'maioria. Junto vem o preço: relações negligenciadas, corpo ignorado, primeiro burnout e ' +
        'uma dúvida que ainda não tem nome — “se está tudo certo, por que parece incompleto?”.',
      pain:
        'Excesso de trabalho, solidão escolhida virando solidão real, e dificuldade em nomear ' +
        'necessidades emocionais.',
      gain: 'Competência conquistada, independência material e confiança fundamentada em resultados.',
      task: 'Colocar pessoas e corpo dentro do plano, não fora. O que não entra no sistema desaparece.',
    },
    {
      range: '30–45',
      title: 'A abertura do Fi',
      focus: 'Fi amadurecendo',
      body:
        'Aqui muitos INTJs vivem a mudança mais profunda: os valores param de ser justificativa ' +
        'lógica e passam a ser sentidos. Você começa a perguntar não só se algo funciona, mas se ' +
        'importa. Relações ganham peso, sucesso puramente técnico perde graça, e frequentemente ' +
        'surge um redirecionamento de carreira ou de propósito.',
      pain:
        'Emoções antigas chegando de uma vez, arrepios de arrepender-se de anos frios e ' +
        'desconforto com a própria vulnerabilidade.',
      gain:
        'Empatia real, capacidade de intimidade e um propósito que não depende de aprovação ' +
        'externa.',
      task:
        'Aceitar sentir sem transformar tudo em análise. Terapia, escrita e conversas honestas ' +
        'aceleram muito essa fase.',
    },
    {
      range: '45+',
      title: 'A integração do Se',
      focus: 'Se cultivado',
      body:
        'O INTJ maduro é uma versão mais leve de si mesmo: mesma clareza estratégica, muito menos ' +
        'rigidez. Cultivar a função inferior — presença, corpo, prazer no concreto — encerra a ' +
        'guerra interna entre pensar e viver. É a fase em que o INTJ costuma virar mentor: alguém ' +
        'que enxerga longe, fala pouco e diz coisas que mudam o rumo de outras pessoas.',
      pain:
        'O luto pelo tempo em que você foi duro consigo mesmo, e o esforço de desacelerar depois ' +
        'de décadas de aceleração.',
      gain:
        'Presença, humor, tolerância à ambiguidade e a habilidade de estar em paz sem estar ' +
        'produzindo.',
      task:
        'Praticar o presente deliberadamente: mãos, natureza, comida, silêncio sem pauta. Ni não ' +
        'precisa mais de tudo resolvido.',
    },
  ],

  timelineNote:
    'As idades vêm do esquema de desenvolvimento de tipo de Harold Grant (1983), adotado depois ' +
    'pela tradição MBTI: hipótese sobre quando cada função amadurece, não média medida nem ' +
    'prazo. As idades aqui seguem o esquema publicado pela própria Myers & Briggs Foundation — ' +
    'dominante até por volta dos 7, auxiliar até os 20, terciária nos 30 e 40, inferior na ' +
    'meia-idade ou depois —, que é mais tardio que o de Grant e igualmente não verificado em ' +
    'coorte. Muita gente atravessa fases fora de ordem, e cedo ou ' +
    'tarde não significa melhor ou pior.',

  growth: {
    eyebrow: 'Crescimento',
    title: 'Seis práticas que funcionam para INTJs',
    intro:
      'Nenhuma delas é sobre virar extrovertido ou parar de pensar tanto. Todas são sobre ampliar ' +
      'alcance: manter a força e reduzir o custo.',
    items: [
      {
        n: '01',
        title: 'Externalize antes de concluir',
        text:
          'Fale ou escreva o raciocínio no meio, não no fim. Isso convida correção enquanto ela ' +
          'ainda é barata e treina a comunicação que o Ni sozinho não faz.',
      },
      {
        n: '02',
        title: 'Registre previsões',
        text:
          'Anote o que você acha que vai acontecer, com data. Revisar depois calibra a intuição e ' +
          'cura a certeza excessiva sem enfraquecer a confiança.',
      },
      {
        n: '03',
        title: 'Dê nome ao que sente',
        text:
          'Três linhas por dia sobre o estado emocional, sem tentar resolvê-lo. É o exercício ' +
          'mais direto de desenvolvimento de Fi — e o mais desconfortável. Nomear o que se sente ' +
          'reduz a reatividade emocional em estudos de laboratório — não é só metáfora ' +
          'tipológica.',
      },
      {
        n: '04',
        title: 'Coloque o corpo na agenda',
        text:
          'Movimento, comida e sono como itens do sistema, não sobras dele. Se inferior responde ' +
          'bem a rotina pequena e constante.',
      },
      {
        n: '05',
        title: 'Pratique o elogio específico',
        text:
          'Você já nota o que as pessoas fazem bem — só não diz. Verbalizar uma vez por dia muda ' +
          'a temperatura de todas as suas relações.',
      },
      {
        n: '06',
        title: 'Termine coisas imperfeitas',
        text:
          'Escolha um projeto e entregue na versão “boa o suficiente”. Cada entrega concluída ' +
          'enfraquece o perfeccionismo mais que qualquer reflexão sobre ele.',
      },
    ],
  },

  next: {
    label: 'Próxima página',
    title: 'Além do MBTI: eneagrama, temperamentos e Big Five',
    index: '06 →',
    key: 'alem-do-mbti',
  },
};
