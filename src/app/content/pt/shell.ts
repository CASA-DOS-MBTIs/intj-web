import type { ShellContent } from '../types';

export const SHELL_PT: ShellContent = {
  references: {
    title: 'Fontes',
    note:
      'Nem toda afirmação sobre tipo tem o mesmo peso. A etiqueta ao lado de cada obra ' +
      'indica de onde ela vem — e o que vale como evidência muda bastante entre elas.',
    kinds: {
      academic: 'Psicologia acadêmica',
      clinical: 'Saúde · institucional',
      critique: 'Crítica metodológica',
      jung: 'Jung original',
      mbti: 'MBTI oficial',
      model: 'Modelo específico',
      classical: 'Antiguidade',
      survey: 'Levantamento online',
    },
  },
  nav: {
    brandLabel: 'INTJ — início',
    languageLabel: 'Idioma',
    skipToContent: 'Pular para o conteúdo',
    menuLabel: 'Menu de navegação',
    items: [
      { key: 'mente', label: 'Mente' },
      { key: 'luz-e-sombra', label: 'Luz & Sombra' },
      { key: 'comparacoes', label: 'Comparações' },
      { key: 'espelho', label: 'Espelho' },
    ],
    menus: [
      {
        key: 'vida',
        label: 'Vida',
        items: [
          { key: 'infancia', label: 'Infância' },
          { key: 'jornada', label: 'Jornada por idade' },
          { key: 'trabalho', label: 'Trabalho' },
          { key: 'vinculos', label: 'Vínculos' },
          { key: 'compatibilidade', label: 'Compatibilidade' },
          { key: 'amizades', label: 'Amizades' },
          { key: 'familia', label: 'Família' },
          { key: 'genero', label: 'Homem & Mulher' },
          { key: 'saude', label: 'Saúde e desempenho' },
          { key: 'o-que-ninguem-diz', label: 'O que ninguém te diz' },
          { key: 'para-quem-ama', label: 'Para quem ama um INTJ' },
        ],
      },
      {
        key: 'alem',
        label: 'Além do MBTI',
        items: [
          { key: 'alem-do-mbti', label: 'Visão geral' },
          { key: 'combinacoes', label: 'Combinações e mitos' },
          { key: 'eneagrama', label: 'Eneagrama' },
          { key: 'tritipos', label: 'Tritipos' },
          { key: 'subtipos', label: 'Subtipos instintivos' },
          { key: 'temperamentos', label: 'Temperamentos' },
          { key: 'big-five', label: 'Big Five' },
          { key: 'socionics', label: 'Socionics' },
          { key: 'disc', label: 'DISC' },
          { key: 'jung', label: 'Jung original' },
          { key: 'glossario', label: 'Glossário' },
        ],
      },
    ],
  },
  footer: {
    tagline:
      'Tipologia é linguagem, não destino. Serve para você se entender — nunca para se justificar.',
    pagesTitle: 'Páginas',
    pages: [
      { key: 'home', label: 'Início' },
      { key: 'mente', label: 'A mente INTJ' },
      { key: 'luz-e-sombra', label: 'Luz & sombra' },
      { key: 'saude', label: 'Saúde e desempenho' },
      { key: 'trabalho', label: 'Trabalho e carreira' },
      { key: 'vinculos', label: 'Vínculos' },
      { key: 'compatibilidade', label: 'Compatibilidade' },
      { key: 'amizades', label: 'Amizades' },
      { key: 'familia', label: 'Família' },
      { key: 'contato', label: 'Contato' },
    ],
    deeperTitle: 'Mais fundo',
    deeper: [
      { key: 'infancia', label: 'Infância' },
      { key: 'jornada', label: 'Jornada por idade' },
      { key: 'genero', label: 'Homem & mulher' },
      { key: 'alem-do-mbti', label: 'Eneagrama e temperamentos' },
      { key: 'combinacoes', label: 'Combinações e mitos' },
      { key: 'glossario', label: 'Glossário' },
      { key: 'para-quem-ama', label: 'Para quem ama um INTJ' },
      { key: 'espelho', label: 'Espelho — mini-teste' },
    ],
    noteTitle: 'Nota honesta',
    note:
      'MBTI, eneagrama e temperamentos são modelos de autoconhecimento — não diagnósticos ' +
      'clínicos nem instrumentos de seleção. Conteúdo escrito para reflexão, com base na ' +
      'literatura junguiana e nas descrições funcionais mais aceitas. Estimativas de ' +
      'frequência variam conforme a amostra.',
    stack: 'Ni · Te · Fi · Se',
    madeFor: 'Feito para quem pensa devagar e decide de uma vez',
    community: {
      kicker: 'Comunidade',
      text: 'Regras, canais e redes da comunidade brasileira de MBTI no WhatsApp.',
      cta: 'Conhecer',
    },
    trademarks:
      'MBTI e Myers-Briggs Type Indicator são marcas da Myers & Briggs Foundation, Inc., ' +
      'registradas nos Estados Unidos e em outros países; 16Personalities, da NERIS Analytics ' +
      'Limited; Keirsey e Please Understand Me, da Keirsey, LLC; Tritype, de Katherine Chernick ' +
      'Fauvre; MMTIC, da Myers & Briggs Foundation, Inc.; NEO PI-R, da PAR, Inc.; DiSC e ' +
      'Everything DiSC, da John Wiley & Sons, Inc. As demais marcas pertencem a seus ' +
      'respectivos titulares. Este site não tem vínculo com nenhum deles, não é por eles ' +
      'endossado nem patrocinado — inclusive The Myers-Briggs Company, que publica e licencia o ' +
      'instrumento e é distinta da Foundation — e os menciona apenas para identificar e ' +
      'discutir os modelos que levam esses nomes.',
    legal: [{ key: 'privacidade', label: 'Privacidade' }],
  },
  entry: {
    meta: {
      title: 'INTJ — o retrato completo · intj.net.br',
      description:
        'Um retrato honesto do tipo INTJ, em português e em inglês: pilha cognitiva, ' +
        'forças e sombras, trabalho, vínculos e crescimento — com as fontes à vista.',
    },
    title: 'Ler em português',
    text: 'O site inteiro, escrito em português do Brasil.',
  },
  notFound: {
    meta: {
      title: 'Página não encontrada · INTJ',
      description: 'Esse endereço não existe neste site.',
    },
    title: 'Esse endereço não existe',
    text:
      'O link pode ter mudado, ou nunca ter existido. Nenhuma das duas coisas é culpa ' +
      'sua — mas a página que você procurava continua em algum lugar do índice.',
    cta: 'Voltar ao início',
  },
};
