import type { PrivacyContent } from '../types';

export const PRIVACIDADE_PT: PrivacyContent = {
  meta: {
    title: 'Privacidade — este site não coleta nada · INTJ',
    description:
      'Sem analytics, sem cookies, sem formulário, sem servidor. O que o navegador guarda ' +
      'fica no seu aparelho e você pode apagar a qualquer momento.',
  },
  header: {
    eyebrow: 'Privacidade',
    title: 'Este site não\ncoleta nada',
    lede:
      'A página existe porque "não coletamos dados" precisa estar escrito em algum lugar para ' +
      'valer alguma coisa. Silêncio não é política de privacidade.',
  },
  summary:
    'Não há analytics, não há cookies, não há pixel de rastreamento, não há formulário e não ' +
    'há servidor. O site é um conjunto de arquivos estáticos: o seu navegador os baixa e a ' +
    'conversa acaba aí. <strong>Nada que você escolhe ou responde aqui sai do seu ' +
    'aparelho.</strong> O que a hospedagem registra por conta própria está explicado abaixo.',
  sections: [
    {
      title: 'O que não existe aqui',
      body: [
        'Sem Google Analytics ou equivalente. Sem Meta Pixel. Sem mapa de calor, sem gravação ' +
          'de sessão, sem teste A/B. Sem botão de rede social que carregue script de terceiro — ' +
          'os poucos links externos são links comuns, que só fazem algo quando você clica.',
        'Sem cookies. Nenhum, nem "essenciais": o site não tem sessão, login ou carrinho, ' +
          'então não há o que lembrar entre requisições. É por isso que você nunca viu um banner ' +
          'de consentimento aqui — não porque ele foi escondido, mas porque não há consentimento ' +
          'a pedir.',
        'Sem fontes, ícones ou scripts vindos de outro domínio. Tudo é servido daqui, e uma ' +
          'política de segurança de conteúdo em cada página impede o navegador de buscar ' +
          'qualquer coisa fora — <strong>a verificação roda no build e falha se alguém tentar</strong>.',
      ],
    },
    {
      title: 'O que o servidor sabe',
      body: [
        'O site é hospedado no GitHub Pages. Como qualquer servidor web, a infraestrutura da ' +
          'GitHub registra as requisições que recebe, o que normalmente inclui endereço IP e ' +
          'user-agent. Esse registro é da GitHub e é regido pela política de privacidade dela; ' +
          'não é criado por este site, não é acessível a este site, e nada aqui pede que ele ' +
          'exista.',
        'Não há nada que possa ser feito sobre isso sem trocar de hospedagem, e é honesto ' +
          'dizer em vez de omitir.',
      ],
    },
    {
      title: 'Menores de idade',
      body: [
        'O site não pede idade nem qualquer outro dado, então não há como — e nem por que — ' +
          'tratar visitantes de forma diferente. Ainda assim: os textos são escritos para leitura ' +
          'adulta e tratam de temas como esgotamento e sofrimento psíquico.',
      ],
    },
  ],
  storage: {
    title: 'O que fica guardado no seu aparelho',
    intro:
      'Três coisas, no <code>localStorage</code> do seu navegador. Elas nunca são enviadas a ' +
      'lugar nenhum — não existe para onde enviar. Apagar os dados do site no seu navegador ' +
      'remove todas de uma vez.',
    items: [
      {
        key: 'intj-lang',
        what: 'A língua que você escolheu.',
        why: 'Para a porta de entrada não perguntar de novo a cada visita.',
      },
      {
        key: 'intj-profile',
        what:
          'A identidade (Assertivo/Turbulento), a asa, o tritipo, o instinto e o temperamento ' +
          'que você marcou, se marcou.',
        why: 'Para as páginas que se adaptam ao seu perfil continuarem adaptadas.',
      },
      {
        key: 'intj-espelho-v2',
        what: 'As suas respostas do Espelho.',
        why: 'Para você poder fechar a aba no meio e voltar depois.',
      },
    ],
    note:
      'Nada disso te identifica, e o site lê cada valor com desconfiança: um conteúdo ' +
      'inesperado é descartado em vez de usado.',
  },
  contact: {
    title: 'Dúvidas',
    text:
      'Qualquer pergunta sobre isto — ou sobre qualquer outra coisa — vai para ' +
      '<strong>contact@intj.net.br</strong>. Se você quiser que uma mensagem sua seja apagada ' +
      'depois de respondida, é só pedir.',
  },
};
