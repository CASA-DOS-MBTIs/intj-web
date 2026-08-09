import type { FocusLabels } from '../../types';

/**
 * A moldura em volta de uma análise focada.
 *
 * Quando o leitor declara qual é a sua variação, a página descarta as outras e
 * renderiza só a dela. Estes rótulos são o que sobra de navegação: dizem o que
 * aconteceu com a página e como voltar à visão geral. São títulos — curtos por
 * obrigação.
 */

export const FOCUS_ENEAGRAMA_PT: FocusLabels = {
  title: 'A sua asa, por inteiro',
  note:
    'A página parou de descrever os nove eneatipos e passou a descrever o seu — a asa que você ' +
    'marcou no perfil, na profundidade que a visão geral não comportava. A visão geral continua a ' +
    'um clique.',
  backLabel: 'Ver os nove eneatipos',
  strengths: 'O que essa asa te dá',
  traps: 'Onde ela te prende',
  stress: 'Quando desaba',
  growth: 'O crescimento',
  misread: 'Como te leem errado',
  versus: 'Contra a outra asa',
};

export const FOCUS_TRITIPOS_PT: FocusLabels = {
  title: 'O seu tritipo, por inteiro',
  note:
    'A página parou de percorrer os 27 tritipos e passou a analisar apenas o seu, na profundidade ' +
    'que uma lista de 27 nunca poderia ter. A visão geral continua a um clique.',
  backLabel: 'Ver os 27 tritipos',
  strengths: 'O que os três juntos te dão',
  traps: 'Onde os três te prendem',
  stress: 'Quando desaba',
  growth: 'O trabalho',
  misread: 'Com o que confundem',
  versus: 'Contra o tritipo vizinho',
};

export const FOCUS_TEMPERAMENTOS_PT: FocusLabels = {
  title: 'A sua combinação, por inteiro',
  note:
    'A página parou de percorrer as doze combinações e passou a analisar só a sua — dominante e ' +
    'secundário na ordem que você marcou, que é o que muda tudo. A visão geral continua a um ' +
    'clique.',
  backLabel: 'Ver as doze combinações',
  strengths: 'O que esse ritmo te dá',
  traps: 'Onde ele te prende',
  stress: 'Quando desaba',
  growth: 'O ajuste',
  misread: 'Como te leem errado',
  versus: 'Contra a ordem invertida',
};

export const FOCUS_SUBTIPOS_PT: FocusLabels = {
  title: 'O seu instinto, por inteiro',
  note:
    'A página parou de descrever os três instintos e passou a analisar apenas o que comanda a sua ' +
    'atenção antes de qualquer outro. A visão geral continua a um clique.',
  backLabel: 'Ver os três instintos',
  strengths: 'O que esse instinto te dá',
  traps: 'Onde ele te prende',
  stress: 'Quando desaba',
  growth: 'O trabalho',
  misread: 'Com o que confundem',
  versus: 'Contra o instinto vizinho',
};
