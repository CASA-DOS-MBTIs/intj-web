import type { ContactContent } from '../types';

export const CONTATO_PT: ContactContent = {
  meta: {
    title: 'Contato — corrigir, contribuir ou apoiar · INTJ',
    description:
      'Como falar com quem escreveu este site: correções, sugestões, apoio ao projeto e o ' +
      'portfólio do autor.',
  },
  header: {
    eyebrow: 'Contato',
    title: 'Fala comigo',
    lede:
      'Este site é escrito por uma pessoa só, e isso tem duas consequências: ele tem uma voz — ' +
      'e ele tem erros. A segunda é a que me interessa ouvir.',
  },
  emailKicker: 'E-mail',
  emailNote: 'Pode escrever em português ou em inglês.',
  reasons: [
    {
      kicker: '01',
      title: 'Achei um erro',
      text:
        'Esse é o e-mail mais útil que eu posso receber. Quase toda afirmação daqui aponta para ' +
        'uma fonte, e <strong>fonte citada é fonte que pode ser conferida</strong> — se eu li ' +
        'algo errado, atribuí uma ideia a quem não teve, ou estiquei um dado além do que o ' +
        'estudo aguenta, me diga onde. Corrigir é rápido; perceber sozinho, não.',
    },
    {
      kicker: '02',
      title: 'Quero contribuir',
      text:
        'Falta uma página, uma seção ficou rasa, a versão em inglês tropeçou em algum lugar. ' +
        'Vale o contrário também: se alguma parte descreveu você com precisão desconfortável, ' +
        'saber disso me diz o que está funcionando.',
    },
    {
      kicker: '03',
      title: 'Quero apoiar o projeto',
      text:
        'O site não tem anúncio, não tem rastreador e não vende nada — e a intenção é que ' +
        'continue assim. Ainda não publiquei nenhuma forma de doação; se você quiser apoiar ' +
        'mesmo assim, me escreve que a gente combina.',
    },
  ],
  author: {
    kicker: 'Quem escreveu',
    title: 'Sobre mim',
    text:
      'Sou desenvolvedor, e este site é um projeto pessoal — pesquisa, texto e código. Se ' +
      'quiser ver no que mais eu trabalho, o resto está no meu portfólio.',
    linkLabel: 'Ver o portfólio',
  },
  community: {
    kicker: 'Comunidade',
    title: 'Casa dos MBTIs',
    text:
      'Existe uma comunidade brasileira de MBTI no WhatsApp, com regras próprias, canais ' +
      'organizados e gente que discute tipologia a sério — sem o "você não pode ser INTJ porque ' +
      'chorou num filme". O link abaixo é a página da comunidade, não um convite solto: ela ' +
      'reúne as regras, as redes e por onde entrar, e vale ler antes de entrar em qualquer ' +
      'grupo.',
    linkLabel: 'Conhecer a Casa dos MBTIs',
  },
  closing: 'Se você leu até aqui, já contribuiu mais do que imagina.',
};
