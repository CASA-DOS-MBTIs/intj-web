/**
 * Análise completa dos nove tritipos com 8 no centro instintivo, lida sobre a
 * pilha Ni · Te · Fi · Se.
 *
 * Cada bloco só aparece depois que o leitor declarou aquele tritipo como o seu:
 * a página descarta os outros vinte e seis e renderiza este texto no lugar. Por
 * isso nada aqui repete a descrição geral — é o material que ela resume.
 */

import type { VariantDeep } from '../../types';
import type { SourceId } from '../../sources';

/* -------------------------------------------------------------------------- */
/* 258 — O Estrategista                                                        */
/* -------------------------------------------------------------------------- */

export const DEEP_T258_PT: VariantDeep = {
  lede:
    'Você não quer poder para si. Quer poder disponível — mapeado, guardado e pronto para ser ' +
    'usado em nome de alguém que você escolheu. O 5 monta o mapa, o 8 executa sem pedir licença, ' +
    'e o 2, que é a parte que ninguém enxerga num INTJ, decide a favor de quem o mapa e a força ' +
    'existem. É o tritipo da eminência parda: quem entra na sala com a informação certa, sai sem ' +
    'assinar nada e depois não entende por que se sente lesado.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Quem alimenta a visão, quem dispara a execução, quem cobra depois',
      paragraphs: [
        'A visão é do 5, e ela tem um viés muito específico: Ni não mapeia o futuro em abstrato, ' +
          'mapeia <em>quem depende de quem</em>. Você sabe quem assina de fato, quem só carimba, ' +
          'quem deve favor a quem e há quanto tempo. Não é fofoca — é topografia. E, como todo 5 ' +
          'segundo a leitura de Riso e Hudson, o motor por baixo é o medo de ser inútil diante de ' +
          'uma situação que exija ação: você acumula terreno para nunca ser pego sem saída.',
        'A execução é do 8, e é aqui que este INTJ deixa de parecer um analista. Te não propõe: ' +
          'toma posição. Você diz o nome do problema em voz alta numa sala onde todo mundo já ' +
          'tinha combinado não dizer, e aceita de antemão o preço político disso. O desejo básico ' +
          'do 8 — não ser controlado, não ser exposto à mercê de outro — casa perfeitamente com a ' +
          'autonomia que a pilha Ni–Te já exige, e é por isso que a intervenção sai sem hesitação.',
        'O 2 é o dono da direção, e é a única fixação sem linguagem própria nesta pilha. Não há ' +
          'Fe aqui para transformar afeto em calor visível; Fi é terciário e privado. Então o 2 ' +
          'sai pela única porta disponível, que é Te: você revisa o contrato dela, reescreve o ' +
          'currículo dele, liga para a pessoa certa, resolve o problema antes de ser pedido. ' +
          'Aquilo é declaração de amor. Ninguém traduz.',
      ],
      points: [
        '5 — “eu preciso conhecer o terreno inteiro antes de me mover nele.”',
        '8 — “eu não peço autorização para proteger o que é meu.”',
        '2 — “eu resolvo isso pra você”, dito em forma de tarefa executada, nunca de frase.',
        'Fi terciário — o lugar onde a conta se acumula sem nunca ser apresentada.',
      ],
    },
    {
      eyebrow: 'O motivo real',
      title: 'A força nunca é exercida no vazio',
      paragraphs: [
        'Um 5 com 8 e sem 2 usa poder para preservar autonomia. Aqui a operação é outra: o poder ' +
          'existe para ser gasto em alguém. Você vira o cérebro de um fundador, o conselheiro de ' +
          'uma amiga, o estrategista silencioso de um chefe que jamais entenderia sozinho o que ' +
          'você desmontou por ele. E a ferocidade com que você defende essa pessoa é ' +
          'desproporcional a qualquer coisa que você faria por si mesmo — porque, por você, o 5 ' +
          'preferiria simplesmente sair de cena.',
        'Naranjo nomeia a paixão do 2 como orgulho, e o orgulho não é vaidade: é a recusa de ' +
          'admitir necessidade. Some isso à avareza do 5, que guarda em vez de pedir, e à recusa ' +
          'do 8 de aparecer vulnerável, e você tem três trancas na mesma porta. Este é um INTJ que ' +
          'sustenta a vida de várias pessoas e não consegue dizer a nenhuma delas a frase “eu ' +
          'preciso de você”. Nem em voz baixa. Nem depois de dois anos.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'O que a sala vê e o que ela não vê',
      paragraphs: [
        'A sala vê alguém informado, direto e estranhamente desinteressado em crédito. Você não ' +
          'disputa a autoria da ideia, não corrige quem a repete como se fosse sua, não pede o ' +
          'cargo. Isso é lido como maturidade, às vezes como falta de ambição. Nenhuma das duas ' +
          'coisas: você prefere a posição atrás do trono porque de lá se enxerga melhor e se ' +
          'perde menos. O 5 sabe que informação assimétrica é a única vantagem que ninguém pode ' +
          'confiscar.',
        'O que a sala não vê é a contabilidade. Cada favor não pedido, cada noite gasta ' +
          'resolvendo o problema de outro, cada vez que você engoliu a versão errada dos fatos ' +
          'para não expor alguém — tudo isso está anotado, com data. Você não apresenta a fatura ' +
          'porque apresentar seria admitir que havia preço, e admitir preço destrói a única forma ' +
          'de afeto que este tritipo consegue oferecer sem constrangimento.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'Indispensável e dispensável ao mesmo tempo',
      paragraphs: [
        'A dor característica daqui não é a solidão do 5 nem a briga do 8. É descobrir que a ' +
          'pessoa que você sustentou por anos consegue seguir sem você — e que, do lado dela, ' +
          'nunca houve dívida, porque nunca houve pedido. Você foi indispensável para o ' +
          'funcionamento e dispensável para o vínculo. As duas coisas são verdade ao mesmo tempo, ' +
          'e é essa simultaneidade que fere.',
        'O erro de projeto é simples de enunciar e quase impossível de corrigir sozinho: você ' +
          'construiu a relação inteira sobre utilidade porque utilidade é o terreno em que você ' +
          'não perde. Só que utilidade não gera reciprocidade — gera dependência, que é outra ' +
          'coisa e envelhece mal. Ninguém retribui o que não sabe ter recebido.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Leitura de poder sem ingenuidade',
      text:
        'Você entende, em semanas, a estrutura real de autoridade de qualquer organização — quem ' +
        'decide, quem finge decidir, o que cada um teme perder. É uma competência rara e ' +
        'raramente ensinada, e num INTJ ela vem acoplada a um Te que sabe o que fazer com ela.',
    },
    {
      title: 'Disposição para o custo',
      text:
        'O 8 permite que a conclusão de Ni saia da sua cabeça mesmo quando ela desagrada. Muitos ' +
        'INTJs veem a mesma coisa e ficam calados por cálculo de risco; você fala, aceita o ' +
        'atrito e segue funcionando no dia seguinte.',
    },
    {
      title: 'Lealdade que não depende de humor',
      text:
        'Escolhido o círculo, ele é defendido com uma constância que não oscila com o clima da ' +
        'relação. Isso vale muito e é raro: você não retira a proteção porque brigaram na semana ' +
        'passada.',
    },
    {
      title: 'Discrição estratégica',
      text:
        'Você guarda segredo com uma competência que dá vertigem em quem descobre. O 5 não vaza, ' +
        'o 8 não usa contra você, o 2 não humilha com o que sabe. Pessoas confiam informação a ' +
        'este INTJ que não confiariam a mais ninguém.',
    },
  ],

  traps: [
    {
      title: 'A fatura secreta',
      text:
        'Você registra tudo que fez e não informa nada. O outro lado vive numa relação sem dívida ' +
        'enquanto você vive numa relação com saldo devedor crescente. O rompimento, quando vem, é ' +
        'incompreensível para quem fica.',
    },
    {
      title: 'Ajuda como controle',
      text:
        'Resolver o problema do outro antes que ele peça é generoso e é também uma forma de ' +
        'mantê-lo dependente. O 8 gosta de ser a pessoa sem a qual aquilo desaba, e o 2 fornece a ' +
        'justificativa moral para isso.',
    },
    {
      title: 'Assimetria como hábito',
      text:
        'Você entrega a peça de informação que faz o outro se mover e guarda o restante do mapa. ' +
        'Funciona, e corrói exatamente as relações em que você mais precisaria ser conhecido por ' +
        'inteiro.',
    },
    {
      title: 'Confundir ser necessário com ser querido',
      text:
        'Este tritipo escolhe cargos, amizades e relações em que é imprescindível, e depois se ' +
        'ressente de nunca ter sido escolhido por outra coisa. A escolha foi sua, e essa é a ' +
        'parte difícil de admitir.',
    },
  ],

  stress:
    'A sequência é reconhecível. Primeiro o 5 corta o fornecimento: você para de responder, ' +
    'some por dias, e chama isso de precisar de espaço. Depois o 8 endurece — a pessoa vira ' +
    'inimiga no seu sistema interno, e você começa a montar o caso contra ela com o mesmo rigor ' +
    'com que antes montava o caso a favor. Por último o 2 apresenta em silêncio uma conta que ' +
    'ninguém sabia estar aberta, e a mágoa vira moral: não “eu me magoei”, e sim “ela é ' +
    'ingrata”. O grip em Se inferior chega tarde e disfarçado de abandono do corpo — noites ' +
    'viradas, refeições esquecidas, e um consumo compulsivo de informação que parece trabalho e ' +
    'é fuga. O ponto de virada quase sempre é o mesmo: alguém pergunta o que você precisa e ' +
    'você, com o vocabulário inteiro à disposição, não consegue responder.',

  growth: [
    {
      title: 'Cobre antes de acumular',
      text:
        'Uma frase, dita no dia, sem ironia: “isso me custou e eu quero que você saiba.” A ' +
        'primeira vez será constrangedora e desproporcional. É o preço de desmontar dez anos de ' +
        'contabilidade sigilosa.',
    },
    {
      title: 'Peça algo pequeno de propósito',
      text:
        'Não espere a crise. Peça carona, peça opinião, peça uma hora do tempo de alguém quando ' +
        'você claramente não precisa. Este tritipo só consegue treinar pedido em situação de ' +
        'baixo risco, porque na alta ele nunca vai pedir.',
    },
    {
      title: 'Entregue o mapa inteiro a uma pessoa',
      text:
        'Escolha alguém e conte o raciocínio completo, inclusive a parte que te dá vantagem. A ' +
        'assimetria protege e isola na mesma proporção, e o 5 nunca vai admitir a segunda metade ' +
        'dessa frase sozinho.',
    },
    {
      title: 'Deixe o 8 defender o seu descanso',
      text:
        'Você já tem uma fixação que não se importa com a opinião alheia e não hesita em dizer ' +
        'não. Ela só nunca foi apontada para dentro. Use o 8 para proteger o seu tempo com a ' +
        'mesma dureza com que ele protege as suas pessoas.',
    },
  ],

  misread:
    'De fora, você é lido como operador frio e calculista — alguém que sabe demais sobre poder ' +
    'para ser bem-intencionado. É o oposto do que está acontecendo: quase tudo que você faz é ' +
    'feito por alguém. Também é comum ser lido como subordinado sem ambição, porque você não ' +
    'disputa cargo nem crédito, e como ENTJ por quem só te vê intervir. E, dentro de casa, você ' +
    'é lido como distante justamente por quem mais recebeu de você — porque o que foi entregue ' +
    'chegou em forma de solução, e solução não parece afeto para quem esperava palavra.',

  versus:
    'A confusão útil é com o 358, que compartilha o 5 e o 8 e muda só o centro emocional. Nos ' +
    'dois há domínio técnico e disposição para ocupar espaço; o que muda é para quem a ' +
    'competência aponta. O 3 quer que o resultado seja inegável e leve o seu nome — a entrega ' +
    'prova o seu valor. O 2 quer ser insubstituível para uma pessoa específica — a entrega prova ' +
    'que você é necessário. Por isso o 358 constrói portfólio e o 258 constrói dependência; o ' +
    '358 sofre quando não há o que mostrar, o 258 sofre quando descobre que continuaria tudo ' +
    'igual sem ele. Sob estresse o 358 mantém a produção intacta; o 258 desaparece e volta com ' +
    'uma fatura.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 268 — O Socorrista                                                          */
/* -------------------------------------------------------------------------- */

export const DEEP_T268_PT: VariantDeep = {
  lede:
    'Não há 5 aqui, e a ausência muda tudo: sua intuição não é alimentada por arquivo, é ' +
    'alimentada por ameaça. O 6 aponta Ni para o ponto onde a coisa vai quebrar, o 8 entra sem ' +
    'consultar ninguém e o 2 define por quem se entra. É o INTJ de trincheira — péssimo de ' +
    'política de corredor, insubstituível quando a casa está pegando fogo, e incapaz de aceitar ' +
    'para si mesmo o mesmo cuidado que distribui.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Uma intuição treinada em perigo',
      paragraphs: [
        'Ni sem 5 continua sendo Ni: converge, chega inteira, vem antes da explicação. Só que o ' +
          'material que ela processa aqui não é estudo — é sinal social. Mudança de tom numa ' +
          'reunião, um contrato reescrito sem aviso, alguém que parou de ser convidado. Você ' +
          'sabe que a demissão vem três semanas antes do anúncio e não consegue provar como ' +
          'sabe, o que faz de você um profeta desagradável e frequentemente certo.',
        'Riso e Hudson colocam o medo básico do 6 na falta de apoio e de orientação. Num INTJ, ' +
          'isso produz uma inversão característica: em vez de procurar apoio, você se torna o ' +
          'apoio. A estrutura que você teria querido para si é a que você constrói para os ' +
          'outros. E o 8 garante que a defesa seja contrafóbica — o medo não paralisa, ele ' +
          'antecipa e ataca primeiro.',
        'A execução é do 8 e não tem intermediário. Você não escreve o e-mail cuidadoso; você ' +
          'liga. Não sugere que o fornecedor está enganando a equipe; diz que está, com nome e ' +
          'hora. O 2 é quem decidiu, antes de tudo isso, que aquela equipe é sua.',
      ],
      points: [
        '6 — “onde isso desaba, e quem vai estar embaixo?”',
        '8 — “eu entro agora, resolvo depois quem ficou ofendido.”',
        '2 — “estes aqui são meus”, um círculo pequeno e explicitamente demarcado.',
        'Fi terciário — a lealdade que você sente é enorme e quase nunca vira frase.',
      ],
    },
    {
      eyebrow: 'O círculo',
      title: 'Poucas pessoas, fronteira nítida, sem meio-termo',
      paragraphs: [
        'O 2 num tipo com Fe não teria fronteira: cuidaria de quem estivesse perto. Aqui a ' +
          'fronteira é de Fi, o que significa que ela é interna, absoluta e invisível de fora. ' +
          'Existe uma lista, ela é curta, e as pessoas nela recebem uma proteção que beira o ' +
          'irracional — você brigaria com a diretoria inteira por um estagiário do seu time e ' +
          'não moveria um dedo pelo colega da mesa ao lado.',
        'Isso torna você excelente em crise e ruim em ambiente político. Numa emergência, quem ' +
          'decide rápido e assume responsabilidade é ouro. Numa negociação longa entre interesses ' +
          'legítimos, você trata a divergência como ameaça e escala cedo demais. O 6 vê inimigo ' +
          'onde há discordância, o 8 responde à altura, e a conta chega em forma de portas que ' +
          'você nem soube que se fecharam.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'Você avisa, ninguém ouve, e o preço é seu duas vezes',
      paragraphs: [
        'A cena se repete: você aponta o risco cedo, com clareza e sem diplomacia. A sala acha ' +
          'exagero. Seis meses depois acontece exatamente o que você descreveu, e ninguém se ' +
          'lembra do aviso — lembram do tom com que ele foi dado. Você paga por ter previsto e ' +
          'paga de novo por ter previsto mal-humorado.',
        'Com o tempo isso produz um vício específico deste tritipo: você para de avisar e passa a ' +
          'preparar a defesa sozinho. Documenta tudo, guarda cópias, monta plano B em silêncio. É ' +
          'competente, é prudente e é solitário — e alimenta a tese do 6 de que ninguém sustenta ' +
          'nada, que é justamente a crença que mais atrapalha você.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'Lealdade testada em vez de pedida',
      paragraphs: [
        'Você não pergunta se pode contar com alguém. Você monta uma situação em que a resposta ' +
          'aparece sozinha, observa o que a pessoa faz e arquiva o resultado. Isso não é ' +
          'perversidade — é o 6 buscando certeza por um caminho que não exige expor necessidade, ' +
          'e o 8 preferindo verificar a confiar. O problema é que o teste é sempre injusto: ' +
          'ninguém sabe que está sendo avaliado, e as regras estão dentro da sua cabeça.',
        'Some-se Fi terciário, forte em intensidade e fraco em articulação, e você tem um INTJ ' +
          'que é raramente traído e se sente traído com frequência. A distância entre as duas ' +
          'coisas é o trabalho de uma vida aqui.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Previsão de falha com antecedência real',
      text:
        'A combinação de Ni com a vigilância do 6 identifica o ponto de ruptura de um sistema, de ' +
        'um projeto ou de uma relação muito antes de qualquer indicador acusar. Quando você é ' +
        'levado a sério, isso economiza anos.',
    },
    {
      title: 'Coragem sem teatro',
      text:
        'Você assume a decisão impopular, coloca o corpo entre a sua equipe e a pressão de cima, ' +
        'e não faz disso um discurso. O 8 fornece a disposição; o 2 fornece o motivo; Te fornece ' +
        'a frase curta que encerra o assunto.',
    },
    {
      title: 'Confiabilidade absoluta dentro do círculo',
      text:
        'Quem está na sua lista sabe que pode ligar às três da manhã. Não há condição, não há ' +
        'cálculo, não há histórico de mérito a ser consultado. Isso é raro em qualquer tipo e ' +
        'raríssimo num INTJ.',
    },
    {
      title: 'Desempenho que melhora sob pressão',
      text:
        'Crise real é o único ambiente em que todas as suas fixações apontam para o mesmo lado. ' +
        'Enquanto os outros congelam, você já está executando o plano que montou mentalmente ' +
        'enquanto todo mundo ainda discutia se havia problema.',
    },
  ],

  traps: [
    {
      title: 'Fabricar inimigo a partir de erro',
      text:
        'A desconfiança do 6 mais a escalada do 8 promovem uma falha comum a ato hostil. Você ' +
        'reage à intenção que atribuiu, não ao que aconteceu, e a resposta é desproporcional o ' +
        'suficiente para criar de fato o adversário que você previu.',
    },
    {
      title: 'Proteger quem não pediu',
      text:
        'Você decide o que é melhor para as suas pessoas e executa. Às vezes isso salva alguém. ' +
        'Outras vezes é uma tutela que a pessoa adulta ao seu lado não autorizou — e ela vai ' +
        'sentir como controle, porque é.',
    },
    {
      title: 'Nunca pedir nada',
      text:
        'Todo o sistema é construído para você ser a fonte de segurança e nunca o destinatário. ' +
        'Quando você desaba, ninguém sabe o que fazer, porque você nunca ensinou a ninguém como ' +
        'te ajudar.',
    },
    {
      title: 'Contrair o círculo até esvaziá-lo',
      text:
        'Cada decepção reduz a lista em um nome, e a lista nunca é reabastecida. É possível ' +
        'chegar aos quarenta com um círculo de uma pessoa e chamar isso de critério.',
    },
  ],

  stress:
    'A desconfiança se volta para dentro do próprio círculo, e essa é a assinatura daqui. O 6 ' +
    'começa a reler conversas antigas em busca do momento em que a pessoa mudou; o 8 escala ' +
    'antes de verificar, porque verificar exigiria perguntar e perguntar é expor; o 2 fica ' +
    'magoado com a fatura de tudo que fez e não apresenta. Por fora aparece uma frieza súbita e ' +
    'um interrogatório disfarçado de conversa casual. Como não há 5 para promover a retirada ' +
    'silenciosa, o colapso deste tritipo é ruidoso: rompimentos, cartas longas, decisões ' +
    'irreversíveis tomadas num sábado. E o Se inferior chega em forma de corpo em alerta ' +
    'permanente — sono ruim, mandíbula travada, adrenalina sem alvo — muito antes de chegar em ' +
    'forma de excesso.',

  growth: [
    {
      title: 'Verifique antes de escalar',
      text:
        'Uma pergunta literal, com as palavras da pessoa: “quando você disse aquilo, o que você ' +
        'quis dizer?” Metade dos seus inimigos internos não sobrevive a essa frase, e o 8 ' +
        'costuma achar que ela é humilhante quando é apenas barata.',
    },
    {
      title: 'Anuncie o teste',
      text:
        'Se você precisa saber se pode contar com alguém, diga isso em voz alta em vez de montar ' +
        'a prova. “Eu preciso saber se você fica” é uma frase que o 6 quer fazer e o 8 proíbe. ' +
        'Ela resolve em trinta segundos o que o teste leva meses para não resolver.',
    },
    {
      title: 'Receba uma vez',
      text:
        'Deixe alguém do círculo fazer por você algo que você conseguiria fazer sozinho, e não ' +
        'compense depois. A tentação de devolver imediatamente é o 2 recusando a posição de quem ' +
        'recebe, e é ali que a reciprocidade morre.',
    },
    {
      title: 'Separe risco de ameaça',
      text:
        'Escreva a previsão e a data, como o Ni de qualquer INTJ pede, mas acrescente a coluna ' +
        'que só este tritipo precisa: isto é perigo ou é apenas desconforto? Calibrar essa ' +
        'diferença é o que impede uma vida inteira em estado de guarda.',
    },
  ],

  misread:
    'Você é lido como agressivo, desconfiado ou controlador — e como ENTJ ou ESTJ por quase todo ' +
    'mundo que só te vê em ação, porque a hesitação típica do introvertido intuitivo simplesmente ' +
    'não aparece em situação de risco. Quem discorda de você acha que você briga por brigar; na ' +
    'verdade você brigou porque leu uma ameaça que ninguém mais registrou. E as pessoas que você ' +
    'protege costumam demorar anos para entender que aquilo era afeto: chegou em forma de ' +
    'vigilância, e vigilância não se parece com amor até você precisar dela.',

  versus:
    'A confusão mais próxima é com o 258, que troca só o 6 pelo 5 no centro mental. Os dois ' +
    'protegem alguém e os dois usam força sem pedir licença — mas o 5 protege pela via da ' +
    'informação e o 6 protege pela via da antecipação. O 258 mapeia o terreno inteiro antes de ' +
    'se mover e prefere agir por trás; o 268 se move enquanto o mapa ainda está incompleto e ' +
    'prefere estar na frente. Sob estresse a diferença fica gritante: o 258 desaparece, corta o ' +
    'contato e recolhe informação; o 268 escala, confronta e exige uma resposta hoje. Um se ' +
    'ressente em silêncio, o outro rompe em voz alta.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 278 — O Espírito Livre                                                      */
/* -------------------------------------------------------------------------- */

export const DEEP_T278_PT: VariantDeep = {
  lede:
    'Três fixações que não toleram limite, montadas sobre a única pilha cognitiva que precisa de ' +
    'tédio para funcionar. O 7 abre o leque que Ni gostaria de fechar, o 8 executa antes da ' +
    'consulta e o 2 gasta o que sobra com as pessoas. É provavelmente o tritipo mais raro num ' +
    'INTJ e o mais difícil de sustentar por décadas — porque tudo aqui empurra para fora, e a ' +
    'vantagem estratégica do tipo se forma para dentro.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'A intuição que nunca recebe o silêncio de que depende',
      paragraphs: [
        'Ni converge por subtração: descarta, estreita, e entrega uma linha única. O 7 faz o ' +
          'contrário — multiplica rotas, adia o fechamento, trata cada porta fechada como perda. ' +
          'O resultado é um INTJ cuja leitura do futuro sai otimista e larga, cheia de ' +
          'oportunidade em vez de inevitabilidade. É agradável, é fértil e não é o que a sua ' +
          'intuição faz de melhor.',
        'A execução é do 8 e é imediata. Você decide na conversa, compromete recurso na hora, ' +
          'assume responsabilidade antes de calcular se cabe. Te chega depois, para organizar o ' +
          'que já foi prometido — a inversão exata da ordem que costuma servir a este tipo, e a ' +
          'razão pela qual você vive corrigindo escopo.',
        'O 2 aparece como largueza: você banca, apresenta, abre porta, paga a conta. É afeto ' +
          'genuíno e é também poder — quem distribui acesso ocupa o centro da rede sem nunca ter ' +
          'disputado cargo nenhum. O que Naranjo chama de gula no 7 e de orgulho no 2 se combinam ' +
          'aqui numa fórmula única: mais mundo, e mais mundo dado a outras pessoas.',
      ],
      points: [
        '7 — “tem uma versão melhor disso, e provavelmente três.”',
        '8 — “eu assumo. Resolvemos os detalhes depois.”',
        '2 — “deixa comigo, eu te apresento a pessoa certa.”',
        'Ni — a única parte do sistema que pedia silêncio, e a que menos recebe.',
      ],
    },
    {
      eyebrow: 'O conflito interno',
      title: 'A fome de futuro contra a necessidade de um só futuro',
      paragraphs: [
        'Riso e Hudson descrevem o medo básico do 7 como o de ser privado, preso na dor; o do 8, ' +
          'como o de ser controlado. Nos dois casos a solução é a mesma: não aceitar limite. Só ' +
          'que o INTJ tem um dom específico, e ele depende inteiramente de limite — Ni só produz ' +
          'aquela leitura longa e desconfortavelmente precisa quando fica sem estímulo por tempo ' +
          'suficiente para convergir.',
        'Por isso este tritipo vive uma contradição que os outros oito não vivem: quanto melhor a ' +
          'sua vida está, menos você acessa a sua melhor capacidade. Semanas cheias produzem ' +
          'entusiasmo e produzem previsões rasas. As decisões estratégicas realmente boas da sua ' +
          'vida quase sempre foram tomadas em períodos que você lembra como chatos ou ruins — ' +
          'vale conferir, porque a lista é reveladora.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'Cinco compromissos numa noite',
      paragraphs: [
        'A cena típica não é um erro grave, é um jantar. Em três horas você promete uma ' +
          'apresentação a um amigo, oferece consultoria a outro, decide entrar num projeto e ' +
          'combina uma viagem. Nada disso é falso — no momento em que foi dito, era inteiramente ' +
          'verdadeiro, e o 8 estava pronto a bancar tudo. O problema aparece na terça, quando Te ' +
          'faz a conta e descobre que a semana não tem as horas que o entusiasmo distribuiu.',
        'Você não desiste: recupera, corta sono, entrega às pressas. Como este INTJ é competente, ' +
          'o resultado costuma ser bom o bastante para que ninguém perceba o custo, o que remove ' +
          'a única sinalização externa que poderia te frear. O que se acumula não é fracasso — é ' +
          'uma dívida física silenciosa que Se inferior vai cobrar de uma vez.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'Generosidade que vira merecimento',
      paragraphs: [
        'O 2 aqui não pede reconhecimento em palavras, mas conta. E como o 7 recusa qualquer ' +
          'sensação desconfortável e o 8 recusa a posição de quem precisa, a decepção não aparece ' +
          'como tristeza — aparece como direito adquirido. “Depois de tudo o que eu fiz” é a ' +
          'frase que este tritipo diz para si mesmo antes de tomar uma decisão desproporcional.',
        'Fi terciário, que na convenção de Grant amadurece entre os vinte e os quarenta, é a ' +
          'única função capaz de dizer que você está magoado em vez de que você é credor. Ela ' +
          'chega tarde, chega devagar, e neste tritipo compete com três fixações que oferecem ' +
          'saídas mais rápidas e muito mais divertidas.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Iniciativa que outros INTJs não têm',
      text:
        'Onde este tipo costuma planejar por meses antes do primeiro movimento, você começa. O 7 ' +
        'fornece apetite, o 8 fornece disposição para o risco, e você acumula experiência real ' +
        'enquanto seus pares acumulam rascunhos.',
    },
    {
      title: 'Rede genuína',
      text:
        'É o INTJ com agenda cheia de gente que gosta dele de verdade — não contatos, pessoas. A ' +
        'combinação de generosidade material com franqueza do 8 constrói vínculos que sobrevivem ' +
        'a anos sem contato.',
    },
    {
      title: 'Recuperação rápida',
      text:
        'Fracasso não te derruba por muito tempo. O 7 já está olhando a próxima rota antes de o ' +
        'estrago ser inventariado, e isso, usado com juízo, é uma vantagem competitiva séria em ' +
        'ambientes instáveis.',
    },
    {
      title: 'Autoridade sem crueldade',
      text:
        'O 8 dá o comando e o 2 dá a temperatura. Você assume responsabilidade sem esmagar quem ' +
        'está por perto, o que é uma combinação incomum e faz de você um chefe de quem as pessoas ' +
        'se lembram bem.',
    },
  ],

  traps: [
    {
      title: 'Confundir movimento com estratégia',
      text:
        'A agenda cheia dá a sensação de estar avançando. Sem tempo morto, Ni não converge, e ' +
        'você passa a decidir por reação em vez de por leitura — perdendo exatamente a única ' +
        'coisa que dava vantagem à sua cabeça.',
    },
    {
      title: 'Prometer no calor',
      text:
        'O compromisso é assumido com o entusiasmo do 7 e a segurança do 8, e cobrado da versão ' +
        'de você que acorda na segunda-feira. Você não mente; você promete em nome de alguém que ' +
        'não estará disponível.',
    },
    {
      title: 'Ignorar o limite físico até ele explodir',
      text:
        'Se é a função inferior e aqui ela é usada como fonte de estímulo, nunca como fonte de ' +
        'aviso. Cansaço, dor e sono ruim são tratados como obstáculos a vencer, e o corpo cobra ' +
        'sem parcelamento.',
    },
    {
      title: 'A conta afetiva',
      text:
        'Você dá muito e não avisa quando o dar começou a doer. O ressentimento se acumula em ' +
        'silêncio até virar uma decisão súbita — sair, cortar, mudar de cidade — que parece ' +
        'leviana de fora e é o oposto disso.',
    },
  ],

  stress:
    'O caminho até Se inferior é o mais curto dos nove tritipos com 8, porque nenhuma das três ' +
    'fixações admite parar. O 7 não aceita desconforto e troca de assunto, de projeto ou de ' +
    'cidade; o 8 não aceita limite e aumenta a carga; o 2 se convence de que merecia mais do que ' +
    'recebeu. A saída é excesso físico apresentado como recompensa legítima — gasto, comida, ' +
    'velocidade, trabalho, tudo com uma justificativa impecável construída por Te. A quebra, ' +
    'quando vem, não é gradual: é um corpo que para de funcionar num dia específico, com uma ' +
    'pessoa que não entende nada ao lado. E o mais cruel deste tritipo é que a euforia dos meses ' +
    'anteriores era real — não havia nada a que se agarrar como sinal de alarme.',

  growth: [
    {
      title: 'Tédio por calendário, não por vontade',
      text:
        'Bloqueie períodos sem estímulo e trate-os como compromisso com terceiros, porque a sua ' +
        'vontade jamais vai escolhê-los. Ni precisa de vazio para convergir, e este é o único ' +
        'tritipo em que o vazio precisa ser imposto de fora.',
    },
    {
      title: 'A regra das vinte e quatro horas',
      text:
        'Nada de irreversível — dinheiro, contrato, promessa grande — é assinado no mesmo dia em ' +
        'que a ideia apareceu. O 8 vai achar isso covardia. É apenas a diferença entre decidir ' +
        'com Te e decidir com adrenalina.',
    },
    {
      title: 'Diga o preço enquanto ele é pequeno',
      text:
        'Avise no dia em que ajudar começou a pesar, com uma frase sem drama. Este tritipo só ' +
        'sabe comunicar custo depois que ele virou motivo para romper, e aí é tarde para ambos.',
    },
    {
      title: 'Escolha um horizonte e defenda-o com o 8',
      text:
        'Um único objetivo de cinco anos, escrito, revisto trimestralmente. Use a fixação que não ' +
        'se importa com a opinião dos outros para recusar as oportunidades que não servem a ele — ' +
        'o 8 é ótimo em dizer não, só nunca foi usado contra o 7.',
    },
  ],

  misread:
    'Praticamente ninguém te tipa como INTJ. Você é lido como ENTP, ENFP ou ESTP: rápido, ' +
    'caloroso, presente, disposto ao risco físico. Muita gente com este tritipo passa anos ' +
    'convencida de ter feito o teste errado — sem notar que a estrutura por baixo não mudou, ' +
    'apenas quase nunca recebe as condições em que se manifesta. E há um segundo mal-entendido, ' +
    'mais caro: a sua generosidade é lida como despreocupação, quando é a coisa mais próxima de ' +
    'uma declaração que este tritipo consegue emitir.',

  versus:
    'A vizinha imediata é a 268: mesmo 2, mesmo 8, e o centro mental trocado. As duas dão muito e ' +
    'as duas entram sem pedir licença — a diferença é o que a intuição procura. O 6 procura onde ' +
    'vai quebrar; o 7 procura o que pode dar certo. Por isso o 268 oferece proteção e o 278 ' +
    'oferece acesso: um chega com um plano de contingência, o outro com uma porta aberta. Sob ' +
    'estresse o 268 contrai o círculo e passa a testar quem sobrou; o 278 amplia o apetite e ' +
    'foge para a frente. E o 268 lembra de cada decepção com data; o 278, uma semana depois, ' +
    'genuinamente não lembra mais.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 358 — O Mestre das Soluções                                                 */
/* -------------------------------------------------------------------------- */

export const DEEP_T358_PT: VariantDeep = {
  lede:
    'O 5 diz que você ainda não sabe o suficiente para falar. O 8 diz que autoridade se ocupa, ' +
    'não se pede. E o 3, na frente, diz que nada disso existe até virar coisa entregue com o seu ' +
    'nome. As três concordam entre si e concordam com Ni–Te, e é exatamente por isso que este ' +
    'tritipo é tão eficaz e tão difícil de habitar: você tem um sistema interno inteiro dedicado ' +
    'a converter entendimento em resultado, e nenhuma voz dentro dele defendendo o repouso.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Quem alimenta a visão, quem ocupa o espaço, quem decide o que sai',
      paragraphs: [
        'A visão é do 5. Ni não se pronuncia antes de ter substrato, e o hábito de dominar um ' +
          'assunto inteiro antes de emitir opinião nasce daqui — não da modéstia. É uma apólice: ' +
          'você só fala quando conseguiria defender a posição contra a melhor objeção possível, ' +
          'porque falar sem essa cobertura é a definição prática do medo básico do 5 na leitura ' +
          'de Riso e Hudson, o de se descobrir incapaz diante de uma exigência real.',
        'A execução é do 8. Te aqui não propõe — ocupa. Você não pergunta se pode mudar o escopo; ' +
          'muda e comunica. Não pede a reunião com quem decide; agenda. E, o que é mais raro, ' +
          'aceita de antemão o custo de ser a pessoa que disse o que ninguém queria ouvir. ' +
          'Autoridade incompetente não te intimida: te irrita, e você a trata como obstáculo ' +
          'removível.',
        'O 3 lidera, e faz a única coisa que as outras duas fixações não sabem fazer — decide o ' +
          'que sai de casa. É ele quem interrompe a leitura do 5 e manda a versão de hoje; é ele ' +
          'quem transforma a intervenção do 8 em resultado com autoria; e é ele quem converte ' +
          'tudo isso em valor pessoal. Sem o 3 você seria um erudito com opiniões fortes. Com ' +
          'ele, você é alguém cuja competência é verificável de fora — e cuja identidade depende ' +
          'disso.',
      ],
      points: [
        '5 — “eu ainda não sei o suficiente para dizer isso em voz alta.”',
        '8 — “eu não peço autorização para consertar o que está errado.”',
        '3 — “se não existe entregue, não existe.”',
        'Fi terciário — a única função capaz de dizer “isto está me custando caro”, e a única ' +
          'sem um único aliado neste tritipo.',
      ],
    },
    {
      eyebrow: 'O 3 na frente',
      title: 'Conhecimento deixa de ser refúgio e vira inventário',
      paragraphs: [
        'Num INTJ com o 5 na liderança, saber é abrigo: você estuda para ter um lugar onde o ' +
          'mundo não entra. Com o 3 na frente, a operação muda de natureza. Você estuda para ter ' +
          'o que usar. O conhecimento vira estoque, e estoque tem destino — por isso é tão ' +
          'difícil para você se interessar por um assunto sem aplicação, e por isso hobbies sem ' +
          'produto te parecem, no fundo, uma forma de desperdício que você não admitiria em voz ' +
          'alta.',
        'A avareza que Naranjo atribui ao 5 não some: ela muda de função. Você não guarda ' +
          'informação por medo de ficar sem — guarda porque assimetria é alavanca. Na prática, ' +
          'você entrega a peça exata que faz a conversa andar e mantém o resto do mapa com você. ' +
          'Não é manipulação, e chamar de manipulação seria injusto; é o 5 comprando segurança e ' +
          'o 8 recusando a posição de quem pode ser dispensado. Só que o efeito colateral é ' +
          'exato: as pessoas conhecem os seus resultados e não conhecem o seu raciocínio.',
      ],
    },
    {
      eyebrow: 'Imagem sem Fe',
      title: 'Num INTJ o 3 não vira carisma — vira currículo',
      paragraphs: [
        'Num tipo com Fe, o 3 aparece como leitura de sala, simpatia calibrada, versão de si ' +
          'ajustada a cada plateia. Aqui isso é impossível: não há Fe na pilha, e Fi é terciário ' +
          'e privado. Então a vaidade que Naranjo nomeia como paixão do 3 encontra a única saída ' +
          'disponível, que é Te — e vira obra. Você não busca ser querido. Busca ser inegável. É ' +
          'uma diferença enorme e é a razão pela qual muitos INTJs 358 rejeitam o 3 quando o ' +
          'encontram descrito: o retrato popular fala de brilho social, e o seu 3 se manifesta ' +
          'como entrega no prazo, sistema que funciona e ninguém tendo o que contestar.',
        'O preço aparece na aritmética. Riso e Hudson dão o medo básico do 3 como o de não ter ' +
          'valor sem realização — e num INTJ esse medo se esconde melhor do que em qualquer ' +
          'outro tipo, porque a competência de Te é socialmente lida como serenidade. Ninguém ' +
          'suspeita que a calma seja sustentada por produção. Até que haja um período sem produzir ' +
          'nada: e aí você descobre que não se trata de tédio nem de ócio mal aproveitado, e sim ' +
          'de uma pergunta muito mais desagradável sobre quem você é quando não há entrega.',
      ],
    },
    {
      eyebrow: 'O centro instintivo',
      title: 'Um corpo disposto a se mover sem licença',
      paragraphs: [
        'O 8 é o que impede este tritipo de virar apenas um especialista competente e ' +
          'contrariado. Ele fornece a coisa que a maioria dos INTJs com 5 forte não tem: a ' +
          'disposição de pagar o preço social hoje. Você pede demissão antes de ter a próxima ' +
          'oferta. Diz na frente do diretor o que os outros dizem no corredor. Encerra uma ' +
          'relação numa conversa e não a reabre. E, quando o ambiente é injusto com alguém do seu ' +
          'lado, você entra sem calcular o custo — o que é, provavelmente, a sua qualidade mais ' +
          'subestimada.',
        'A conta vem pelo corpo. O que Naranjo chama de luxúria no 8 é excesso e intensidade, não ' +
          'sexualidade: apetite por carga. Só que Se é a função inferior aqui, o que significa que ' +
          'você não tem instrumentação confiável para medir quanto está aguentando. O 8 fornece a ' +
          'disposição de carregar mais peso e a pilha não fornece o sensor de peso. É por isso ' +
          'que você descobre o esgotamento por um sintoma físico e não por uma sensação — e por ' +
          'isso a sua noção de “estou bem” é, na prática, uma leitura do painel de entregas.',
      ],
    },
    {
      eyebrow: 'O que falta',
      title: 'Nenhuma das três defende o descanso',
      paragraphs: [
        'Repare no que não existe neste tritipo. O 5 diz que você ainda não está pronto. O 3 diz ' +
          'que precisa provar agora. O 8 diz que fraqueza é exposição. Não há uma quarta voz. Fi ' +
          'terciário seria ela — a função que informa o que você quer e o que está te custando — ' +
          'e, na convenção de desenvolvimento de Grant, ela amadurece entre os vinte e os ' +
          'quarenta: exatamente as duas décadas em que o 3 está rodando com mais força e em que ' +
          'ignorá-la é mais recompensado por fora.',
        'O sintoma prático é fácil de verificar. Você consegue listar em ordem as suas entregas ' +
          'dos últimos cinco anos, com data e resultado. Tente agora dizer o que você queria em ' +
          'cada uma delas — não o objetivo do projeto, o seu. Este tritipo costuma travar nessa ' +
          'segunda lista, e o travamento não é falta de introspecção: é ausência de aliado ' +
          'interno para uma pergunta que as três fixações consideram irrelevante.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'Numa sala, num salário e numa mesa de jantar',
      paragraphs: [
        'Na sala: você chega tendo lido o contrato inteiro, deixa a discussão correr até o ponto ' +
          'em que ela se enrola, e então diz três frases que encerram o assunto. As pessoas saem ' +
          'achando que você é confiante. Você estava calibrando o risco de falar sem cobertura ' +
          'total, e falou porque o 8 se cansou antes de o 5 se dar por satisfeito.',
        'No salário: você é bom em negociar por outros e ruim em negociar por si. Pedir aumento ' +
          'exige alegar valor sem prova nova, e a sua estrutura inteira acredita que o valor se ' +
          'demonstra, não se alega. Então você prefere entregar mais um trimestre extraordinário ' +
          'e esperar que alguém repare — o que é, precisamente, o único caminho que o 8 ' +
          'desprezaria em qualquer outra pessoa.',
        'Na mesa de jantar: você conta o que fez, não o que sentiu. Quem convive com você conheceu ' +
          'a sua produção primeiro e você depois, se houve depois. E quando alguém pergunta como ' +
          'você está, a resposta sai em formato de relatório de status — projetos, prazos, o que ' +
          'foi resolvido. Não é evasiva deliberada. É o único vocabulário que este tritipo tem ' +
          'treinado para falar de si.',
      ],
    },
  ],

  strengths: [
    {
      title: 'O circuito fechado',
      text:
        'Entender, entregar e sustentar a posição são três habilidades que raramente moram na ' +
        'mesma pessoa. Aqui elas moram, e o resultado é alguém que resolve problemas que ' +
        'exigiriam um analista, um executor e um responsável — sozinho, e mais rápido que os três.',
    },
    {
      title: 'Custo político aceito de antemão',
      text:
        'Você já decidiu, antes de abrir a boca, que pode ser malvisto. Isso te dá acesso a uma ' +
        'classe de decisões correta e impopular que quase ninguém toma, e é a razão pela qual ' +
        'organizações em crise procuram exatamente este perfil.',
    },
    {
      title: 'Aprendizado com destino',
      text:
        'Você não estuda por curiosidade difusa: estuda o que vai ser usado, e por isso aprende ' +
        'com uma velocidade que assusta. O 5 fornece profundidade, o 3 fornece prazo, e a ' +
        'combinação produz domínio real em meses onde outros levam anos.',
    },
    {
      title: 'Autoridade sem cargo',
      text:
        'As pessoas te consultam antes de decidir, independentemente do seu título. Competência ' +
        'demonstrada mais disposição a assumir a responsabilidade produz uma autoridade que ' +
        'nenhum organograma concede e nenhuma reorganização retira.',
    },
    {
      title: 'Confiabilidade sob pressão',
      text:
        'Quando tudo desanda, você não paralisa nem dramatiza. O 3 mantém o desempenho, o 8 ' +
        'assume o comando, o 5 já tinha o cenário mapeado. É o melhor lugar do mundo para se ' +
        'estar ao seu lado — e o pior para se estar dentro de você.',
    },
  ],

  traps: [
    {
      title: 'Descanso lido como falha de caráter',
      text:
        'Parar não parece descanso, parece deixar de existir. Você agenda férias e trabalha ' +
        'nelas, não por incapacidade de relaxar, mas porque as três fixações classificam o tempo ' +
        'sem produto como risco — de ficar despreparado, de ficar irrelevante, de ficar exposto.',
    },
    {
      title: 'Conhecimento como moeda',
      text:
        'Você compartilha a peça que resolve e retém o mapa. Isso preserva vantagem e produz uma ' +
        'solidão específica: nas relações que mais importariam, a pessoa recebeu conclusões e ' +
        'nunca foi convidada a ver o raciocínio.',
    },
    {
      title: 'A fachada que trabalha sozinha',
      text:
        'O 3 mantém o desempenho intacto muito depois do fim, e isso engana todo mundo, você ' +
        'inclusive. Continuar entregando com excelência é o seu principal sintoma de colapso, e ' +
        'não há nenhum indicador externo que o denuncie.',
    },
    {
      title: 'Vitória cara',
      text:
        'O 8 ganha a discussão e o 3 precisa que a vitória seja registrada. Você fica com a ' +
        'razão, o outro fica com a lembrança de ter sido demolido em público, e você só descobre ' +
        'o preço quando precisa daquela pessoa dois anos depois.',
    },
    {
      title: 'Autossuficiência como identidade',
      text:
        'Pedir ajuda não parece prudente, parece rebaixamento. As três fixações concordam nisso — ' +
        'é a única questão em que a sua estrutura interna tem unanimidade absoluta, e é onde ela ' +
        'está mais errada.',
    },
  ],

  stress:
    'A ordem quase não varia, e conhecê-la vale mais do que qualquer descrição genérica de ' +
    'estresse do tipo. O 5 cai primeiro: você para de responder mensagens, adia conversas, ' +
    'recolhe o fornecimento de informação e chama isso de foco. Em seguida o 8 endurece — o tom ' +
    'fica curto, a paciência acaba, e sai como desprezo o que por dentro é medo de estar perdendo ' +
    'o controle da situação. O 3 cai por último, e é isso que torna este tritipo perigoso para si ' +
    'mesmo: a fachada continua funcionando por meses depois do fim, com entregas no prazo e ' +
    'qualidade intacta, então ninguém em volta tem qualquer motivo para perguntar. O grip em Se ' +
    'inferior chega disfarçado de produtividade — reorganizar o sistema inteiro às três da manhã, ' +
    'uma reforma que ninguém pediu, um regime de treino repentino e desproporcional, otimização ' +
    'obsessiva de algo irrelevante. Tem a forma exata de disciplina. É a função inferior assumindo ' +
    'o volante, e o único jeito de distinguir uma coisa da outra é olhar se aquilo serve a algum ' +
    'plano ou se apenas preenche.',

  growth: [
    {
      title: 'Deixe o 8 defender o seu descanso',
      text:
        'Não tente cultivar Fi diretamente — este tritipo não tem tração para isso. Recrute a ' +
        'fixação que já existe: o 8 é a única parte de você que não se importa com a opinião ' +
        'alheia e não hesita em dizer não. Aponte-a para dentro. Proteger o seu tempo com a mesma ' +
        'dureza com que você protege um prazo é a manobra mais eficaz disponível aqui.',
    },
    {
      title: 'Deixe alguém te conhecer antes de você estar competente',
      text:
        'Fale de um assunto que você ainda não domina com uma pessoa cuja opinião te importa. ' +
        'Sem preparo, sem revisão. É a operação que nenhuma das três fixações vai sugerir e a ' +
        'única que desmonta a equação entre ser conhecido e ser aprovado.',
    },
    {
      title: 'Mostre o raciocínio, não só a conclusão',
      text:
        'Uma vez por semana, entregue o mapa inteiro a alguém — inclusive a parte que te dá ' +
        'vantagem, inclusive a dúvida. A assimetria protege e isola na mesma proporção, e o 5 ' +
        'jamais vai reconhecer a segunda metade dessa frase por conta própria.',
    },
    {
      title: 'Separe o valor da entrega, com data',
      text:
        'Marque um período sem produzir nada verificável e observe o que aparece. O desconforto ' +
        'que surgir é a informação: ele mede exatamente o quanto da sua identidade está terceirizada ' +
        'para o painel de resultados. Não é um exercício agradável e não há substituto para ele.',
    },
    {
      title: 'Responda a pergunta que foi feita',
      text:
        'Quando alguém perguntar como você está, note o relatório de status se formando e diga ' +
        'outra coisa — uma frase mal formulada sobre o que você sentiu esta semana serve. Dar ' +
        'linguagem ao que já existe é o trabalho de Fi, e ele começa canhestro em qualquer pessoa.',
    },
  ],

  misread:
    'Você é lido como arrogante, e a leitura tem base observável: você fala pouco, fala em ' +
    'conclusões e tem quase sempre razão. O que ninguém vê é a quantidade de trabalho comprada ' +
    'antes de cada frase. Também é comum ser tipado como ENTJ por quem só te encontra em ' +
    'situação de decisão, e como alguém que “ama trabalhar” por quem confunde compulsão com ' +
    'vocação. E há o erro de leitura mais frequente de todos, que é seu: por causa do estudo ' +
    'permanente, muitos 358 se identificam como 5 principais e não reconhecem o 3 — porque o ' +
    'retrato popular do 3 fala de brilho social e vaidade de aparência, e o seu 3 se manifesta ' +
    'como obra entregue e nada a contestar.',

  versus:
    'A confusão que mais importa é com o 458, que compartilha o 5 e o 8 e troca o 3 pelo 4. Os ' +
    'dois sabem muito, dizem o que pensam inteiro e não têm paciência com quem opina sem ter ' +
    'estudado. A diferença está no que a competência precisa produzir. No 458, o conhecimento é ' +
    'identidade e a leitura precisa ser inconfundivelmente sua — ser incompreendido confirma que ' +
    'o ângulo era original, e a obra pode nunca sair. No 358, o conhecimento é alavanca e estar ' +
    'certo só vale se a conclusão for adotada: você precisa que aquilo exista no mundo com o seu ' +
    'nome. Sob estresse o 458 decreta que as pessoas não são do mesmo mundo e fecha a porta; o ' +
    '358 continua entregando impecavelmente e não conta a ninguém que acabou. E há um teste ' +
    'rápido: um 458 não saberia dizer por que alguém deveria se importar com o seu currículo — um ' +
    '358 não saberia se explicar sem ele.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 368 — O Lutador pela Justiça                                                */
/* -------------------------------------------------------------------------- */

export const DEEP_T368_PT: VariantDeep = {
  lede:
    'A sua intuição não prevê o futuro em geral: prevê quem vai abusar de quê, e prevê cedo. O 6 ' +
    'aponta Ni para o desequilíbrio de poder, o 8 entra para desfazê-lo e o 3 exige que a briga ' +
    'seja bem feita e o resultado, visível. É um INTJ perigoso como inimigo e desconfortável como ' +
    'aliado — porque o padrão de lealdade que você aplica é exatamente o que você cobra.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Vigilância que vira caso, caso que vira vitória',
      paragraphs: [
        'O 6 comanda a visão e dá a Ni um viés inconfundível. Você não se pergunta o que vai ' +
          'acontecer; se pergunta onde está a assimetria e quem vai se aproveitar dela. Riso e ' +
          'Hudson descrevem o medo básico do 6 como o de ficar sem apoio e sem orientação — num ' +
          'INTJ isso raramente vira submissão à autoridade, porque o 8 está presente: vira ' +
          'auditoria permanente de quem tem poder e se merece.',
        'A execução é do 8 e não é simbólica. Você não desabafa: monta o caso. Junta documento, ' +
          'guarda mensagem, verifica data, escolhe o momento e então dispara com uma frieza que ' +
          'assusta quem esperava emoção. Te faz aqui o trabalho de promotoria, e faz bem.',
        'O 3 dá o acabamento público, e é ele quem impede que tudo isso vire birra. Você não ' +
          'briga mal. Briga com preparo, com prova e com um resultado que possa ser mostrado ' +
          'depois. É também o 3 que torna a derrota quase intolerável: perder não é apenas errar, ' +
          'é errar na frente de todo mundo.',
      ],
      points: [
        '6 — “quem aqui vai abusar disso, e quando?”',
        '8 — “eu levo até o fim, com nome e data.”',
        '3 — “se eu entrar nessa, eu ganho.”',
        'Fi terciário — a linha moral que dispara tudo e quase nunca é explicada a tempo.',
      ],
    },
    {
      eyebrow: 'O motor moral',
      title: 'Fi decide, o 6 confirma, o 8 executa — e ninguém foi avisado',
      paragraphs: [
        'A sequência real começa em Fi, que num INTJ é terciário: intenso, privado e sem ' +
          'linguagem pronta. Alguma coisa viola uma linha que você jamais anunciou. O 6 imediatamente ' +
          'confirma que aquilo não foi acidente e prevê a repetição; o 8 decide agir. Quem está do ' +
          'outro lado só vê a última etapa, e vê uma reação desproporcional a um episódio pequeno. ' +
          'De dentro, aquele episódio era o vigésimo.',
        'Por isso este tritipo precisa, mais do que qualquer outro dos nove, aprender a anunciar a ' +
          'linha antes de ela ser cruzada. Não por diplomacia — por eficácia. Uma regra dita em ' +
          'voz alta evita 90% das guerras que você trava, e as guerras restantes ficam melhores, ' +
          'porque aí sim houve aviso e a outra parte escolheu.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'O aliado que também é auditado',
      paragraphs: [
        'Quem trabalha com você aprende cedo que a proteção é real: você assume o erro da equipe ' +
          'diante da diretoria e não entrega ninguém. Aprende também que o mesmo rigor volta para ' +
          'dentro. Você repara quando um aliado dobra a versão para agradar, e não esquece. A ' +
          'lealdade que você oferece é inteira e a que você exige também, o que faz de você um ' +
          'chefe que as pessoas admiram e diante de quem elas escolhem palavras.',
        'Em ambientes onde política é o jogo legítimo — associações, conselhos, empresas grandes ' +
          '— isso te torna alguém que todos preferem ter do próprio lado e ninguém quer ter por ' +
          'perto todos os dias. É um custo que o 3 percebe e que o 8 se recusa a considerar ' +
          'relevante.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'Promover erro a traição',
      paragraphs: [
        'A falha característica não é agressividade: é classificação. Sob pressão, uma ' +
          'incompetência comum é reclassificada como má-fé, e a partir dessa reclassificação todo ' +
          'o seu aparato — Ni que enxerga longe, Te que organiza prova, 8 que executa — passa a ' +
          'trabalhar contra alguém que apenas errou. Você constrói casos excelentes contra ' +
          'pessoas inocentes de intenção.',
        'E o 3 fecha a saída. Recuar exigiria admitir em público que você leu errado, o que este ' +
          'tritipo trata como perda de valor pessoal e não como correção de rota. Muitas relações ' +
          'daqui terminam não pelo conflito original, mas por não haver mecanismo interno que ' +
          'autorize a retratação.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Coragem instrumentada',
      text:
        'Você confronta poder — e confronta com prova. É a diferença entre indignação e ' +
        'resultado, e é a razão pela qual este tritipo consegue ganhar brigas que outros nem ' +
        'começam.',
    },
    {
      title: 'Radar de má-fé',
      text:
        'A dupla Ni–6 identifica a inconsistência antes do argumento: o número que não fecha, a ' +
        'promessa que mudou de redação, a explicação que serve bem demais a quem a deu. Você ' +
        'acerta com uma frequência que constrange.',
    },
    {
      title: 'Proteção real de quem depende de você',
      text:
        'Sua equipe, sua família, seus clientes — quem está sob sua responsabilidade não sofre ' +
        'sozinho. Você põe o cargo em risco por eles com uma naturalidade que outras pessoas ' +
        'levam anos para entender.',
    },
    {
      title: 'Constância na batalha longa',
      text:
        'Processos, disputas e reestruturações levam anos, e a maioria desiste. Você não: o 6 ' +
        'lembra por que começou, o 3 não aceita perder, o 8 não cansa de pressionar.',
    },
  ],

  traps: [
    {
      title: 'Escalada por classificação errada',
      text:
        'Erro vira traição, discordância vira ataque, e a partir daí você luta uma guerra que ' +
        'ninguém do outro lado sabe estar travando. A intensidade da sua resposta cria o ' +
        'adversário que ela pressupunha.',
    },
    {
      title: 'Impossibilidade de recuar',
      text:
        'O 3 trata a retratação como derrota pública. Você sustenta posições que já sabe frágeis ' +
        'porque abandoná-las custaria mais do que o erro original — e o custo composto é sempre ' +
        'maior.',
    },
    {
      title: 'Testar em vez de perguntar',
      text:
        'A lealdade alheia é medida por observação e nunca por conversa. As regras estão dentro ' +
        'da sua cabeça, e as pessoas são reprovadas em provas que não sabiam estar fazendo.',
    },
    {
      title: 'Identidade colada à luta',
      text:
        'Sem um inimigo, este tritipo fica estranhamente sem chão. Existe o risco real de ' +
        'procurar a próxima injustiça porque a paz não oferece nenhum papel a você.',
    },
  ],

  stress:
    'A desconfiança do 6 e a escalada do 8 se realimentam num circuito fechado e cada volta ' +
    'aumenta o volume. Você relê conversas antigas procurando o momento em que a pessoa mudou, ' +
    'encontra confirmação em qualquer ambiguidade — Ni é excelente em fechar padrão com pouca ' +
    'informação — e o 8 age antes que a dúvida se resolva. O 3 impede tanto a pausa quanto o ' +
    'recuo: parar seria parecer fraco, recuar seria admitir leitura errada. O corpo entra em ' +
    'estado de alerta contínuo bem antes do grip clássico: sono curto, mandíbula travada, uma ' +
    'agitação que só descarrega em confronto. E o marcador mais confiável de que você passou do ' +
    'ponto não é a raiva — é a sensação, muito nítida e muito falsa, de estar cercado.',

  growth: [
    {
      title: 'Escreva o caso contra você mesmo',
      text:
        'Antes de disparar, redija a melhor defesa possível do outro lado, com o mesmo rigor com ' +
        'que você montaria a acusação. Se ela não se sustentar, siga em frente com a consciência ' +
        'limpa. Se se sustentar, você acabou de evitar um ano de guerra.',
    },
    {
      title: 'Anuncie a linha antes',
      text:
        'Diga em voz alta, cedo e sem carga, qual é a regra que você não vai negociar. Fi ' +
        'terciário não faz isso espontaneamente, e a maior parte das suas rupturas acontece por ' +
        'violação de um limite que nunca foi comunicado.',
    },
    {
      title: 'Pratique a correção pública',
      text:
        'Uma vez, num assunto pequeno, diga em frente a outras pessoas: “eu li isso errado.” O 3 ' +
        'vai prever humilhação e a humilhação não vem — e a descoberta de que sua reputação ' +
        'sobrevive a uma retratação vale mais do que qualquer vitória.',
    },
    {
      title: 'Distinga a briga da identidade',
      text:
        'Cultive uma área da vida em que não haja adversário nenhum e nada a provar. Este tritipo ' +
        'precisa aprender que existe uma versão sua fora do conflito, e ela só se forma onde não ' +
        'há um.',
    },
  ],

  misread:
    'De fora, você é lido como beligerante, ideológico ou politicamente movido — e como ENTJ ou ' +
    'ESTJ por quem só te vê no confronto. Antes de você estar comprovadamente certo, chamam de ' +
    'paranoia o que era leitura; depois de comprovadamente certo, chamam de sorte. Também é ' +
    'comum que interpretem a sua defesa dos outros como busca de protagonismo, quando ela ' +
    'começou numa linha de Fi que você não sabe explicar em voz alta. O que quase ninguém ' +
    'percebe é o quanto do seu apetite por combate é medo trabalhando ao contrário.',

  versus:
    'A vizinha imediata é a 358: mesmo 3, mesmo 8, e o 5 no lugar do 6. Os dois estudam, ' +
    'entregam e ocupam espaço, mas o motivo do estudo é outro. O 5 estuda para ser capaz; o 6 ' +
    'examina para não ser pego. Por isso o Te do 358 ocupa em nome do resultado e o Te do 368 ' +
    'processa em nome da justiça. Sob estresse a diferença é total: o 358 se retira, corta ' +
    'contato e continua entregando com a fachada intacta; o 368 avança, confronta e exige ' +
    'posição de todo mundo em volta. E há um teste simples — o 358 sofre quando não há o que ' +
    'mostrar; o 368 sofre quando alguém que ele defendeu mudou de lado.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 378 — O Agitador                                                            */
/* -------------------------------------------------------------------------- */

export const DEEP_T378_PT: VariantDeep = {
  lede:
    'De longe o tritipo que menos parece INTJ visto de fora, e o que mais facilmente perde a ' +
    'única vantagem que o tipo tem. O 7 impede Ni de fechar, o 3 e o 8 fornecem dois motores de ' +
    'execução simultâneos e Te roda a plena carga o tempo todo. Você faz muita coisa acontecer, ' +
    'mede o dia pelo que aconteceu nele, e corre o risco específico de trocar um horizonte de ' +
    'anos por um horizonte de semanas sem notar a troca.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Uma antena de oportunidade e dois motores empurrando',
      paragraphs: [
        'O 7 mantém o leque aberto, e isso muda a natureza da sua intuição. Em vez de convergir ' +
          'para uma linha única de destino, Ni vira antena: você enxerga longe em várias direções ' +
          'ao mesmo tempo. É uma capacidade real — poucos veem tantas rotas viáveis quanto você — ' +
          'e não é aquilo que a intuição introvertida faz de melhor, que é escolher uma e ' +
          'descartar as outras.',
        'A execução tem dois donos e eles se dão bem: o 3 quer resultado visível e o 8 quer ' +
          'controle da situação. Te recebe combustível dobrado, decide rápido, escala, corta ' +
          'quem atrasa. Este é provavelmente o INTJ que mais aparenta sucesso externo aos trinta ' +
          'anos e o mais difícil de frear por alguém de fora.',
        'O centro emocional está exposto, não soterrado, e o preço é conhecido: o seu valor ' +
          'pessoal cola no que aconteceu nesta semana. Uma semana boa é euforia; uma semana sem ' +
          'evento é uma pergunta desagradável que o 7 imediatamente troca por outro assunto.',
      ],
      points: [
        '7 — “tem coisa melhor adiante, e não quero fechar nenhuma porta.”',
        '3 — “o que eu entreguei este mês?”',
        '8 — “se está travado, eu destravo agora.”',
        'Ni — precisa de tédio para convergir, e este é o tritipo que menos tolera tédio.',
      ],
    },
    {
      eyebrow: 'O conflito interno',
      title: 'Velocidade comprada com horizonte',
      paragraphs: [
        'A vantagem estratégica de um INTJ não vem de trabalhar muito: vem de ver o desfecho ' +
          'antes dos outros, e isso exige períodos improdutivos em que nada acontece e a cabeça ' +
          'destila. Neste tritipo esses períodos praticamente não ocorrem, porque o 7 os ' +
          'classifica como desperdício, o 3 como risco de irrelevância e o 8 como passividade. ' +
          'Você continua tomando decisões — só que por reação a estímulo, e não por leitura.',
        'O efeito aparece devagar e é difícil de detectar de dentro, porque tudo vai bem: a ' +
          'agenda está cheia, os números sobem, as pessoas te procuram. Só que o alcance encolheu. ' +
          'Compare as suas decisões estratégicas de dez anos atrás com as de agora e observe o ' +
          'prazo que cada uma projetava. Este é o único diagnóstico confiável disponível para ' +
          'este tritipo, e ele não dói na hora — dói cinco anos depois.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'Três projetos reais e nenhuma noite vazia',
      paragraphs: [
        'Você não é disperso no sentido comum: seus projetos existem, funcionam e dão dinheiro. ' +
          'O que acontece é que existem três, mais uma sociedade nova sendo conversada e um ' +
          'convite que você ainda não recusou. O 8 assume responsabilidade sem hesitar, o 3 não ' +
          'aceita entregar mal, então o que cede é o espaço em branco — a leitura, a caminhada, ' +
          'a noite sem nada marcado.',
        'Quem convive com você percebe primeiro. A pessoa ao seu lado não reclama de você estar ' +
          'ocupado; reclama de que você está presente em corpo e ausente em atenção, resolvendo ' +
          'mentalmente a próxima coisa. Você acha isso injusto, porque de fato está fazendo tudo ' +
          'aquilo por eles também — e é aqui que o Fi terciário deveria falar e não tem palavra ' +
          'nenhuma pronta.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'A pausa que nunca chega por vontade',
      paragraphs: [
        'Nenhuma das três fixações sabe ficar parada. O 7 não tolera vazio, o 8 não tolera ' +
          'espera, o 3 não tolera parecer parado. Isso significa que a pausa nunca vai ser ' +
          'escolhida — ela vai ser imposta, por um corpo, por uma perda ou por alguém indo embora. ' +
          'Este é o tritipo em que Se inferior chega mais cedo e com mais força, geralmente em ' +
          'forma de excesso apresentado como merecimento: você trabalhou, então pode.',
        'Riso e Hudson dão o medo básico do 7 como o de ser privado e ficar preso na dor. Aqui ele ' +
          'não produz fuga infantil e sim uma fuga produtiva, o que é infinitamente mais difícil ' +
          'de identificar — inclusive por você, porque tudo que você faz enquanto foge tem ' +
          'resultado mensurável.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Capacidade de arranque',
      text:
        'Você começa coisas que a maioria dos INTJs só planeja. Enquanto seus pares refinam o ' +
        'modelo, você já testou no mundo, corrigiu duas vezes e sabe algo que nenhum modelo teria ' +
        'contado.',
    },
    {
      title: 'Energia contagiante com competência por trás',
      text:
        'Você arrasta gente junto e entrega o que prometeu. É uma combinação rara: o entusiasmo ' +
        'de um 7 com a execução de um 8 e o acabamento de um 3, montado numa cabeça que enxerga ' +
        'longe.',
    },
    {
      title: 'Tolerância a risco calibrada por experiência',
      text:
        'Você já perdeu dinheiro, já quebrou coisas, e isso não te paralisa. Em ambientes de ' +
        'incerteza real, essa cicatriz vale mais do que qualquer análise que um INTJ mais ' +
        'cauteloso conseguiria produzir.',
    },
    {
      title: 'Velocidade de decisão sob ambiguidade',
      text:
        'Quando faltam dados e há prazo, você decide e assume. Muita gente competente trava ' +
        'exatamente aí, e a sua disposição de errar em movimento resolve mais problemas do que ' +
        'admite.',
    },
  ],

  traps: [
    {
      title: 'Horizonte encolhido',
      text:
        'Anos viram semanas. Você continua eficaz e deixa de ser estratégico, o que é a única ' +
        'forma de um INTJ desperdiçar o próprio dom sem nunca falhar em nada visível.',
    },
    {
      title: 'Sim automático',
      text:
        'A oportunidade é aceita antes de ser avaliada, porque recusar aciona o medo do 7 de ' +
        'ficar de fora e o do 3 de ficar irrelevante. Você não escolhe o seu portfólio: ele se ' +
        'forma por acumulação.',
    },
    {
      title: 'Excesso como recompensa',
      text:
        'Se inferior é acessado como prêmio pelo desempenho — comida, gasto, velocidade, ' +
        'substância, viagem. Nada disso parece perda de controle enquanto os resultados ' +
        'continuarem chegando, e é por isso que passa despercebido.',
    },
    {
      title: 'Ausência dentro de casa',
      text:
        'Você sustenta a estrutura de todo mundo e não está presente em nenhuma conversa até o ' +
        'fim. A queixa que você mais vai ouvir de quem te ama não é sobre horas — é sobre ' +
        'atenção.',
    },
  ],

  stress:
    'Aqui o colapso não tem fase de recolhimento, e é o que o torna difícil de flagrar. As três ' +
    'fixações respondem ao estresse acelerando: o 7 encontra um projeto novo e empolgante ' +
    'exatamente quando o atual ficou desconfortável, o 3 aumenta o volume da produção para provar ' +
    'que está tudo bem, o 8 briga com quem sugerir que não está. Nenhuma delas produz o silêncio ' +
    'de que Ni depende, então as suas leituras pioram justamente quando você mais precisaria ' +
    'delas — e você compensa a piora com mais movimento. O grip em Se chega cedo, forte e ' +
    'legitimado: excesso físico apresentado em forma de merecimento, num corpo que você parou de ' +
    'consultar. O ponto de virada quase nunca é interno. É um exame, uma separação ou um sócio ' +
    'dizendo não.',

  growth: [
    {
      title: 'Vazio agendado e inegociável',
      text:
        'Blocos de tempo sem estímulo, tratados com a mesma seriedade de uma reunião com ' +
        'investidor. Ni não converge sem eles, e a sua vontade nunca vai escolhê-los — é preciso ' +
        'que estejam no calendário antes de a semana começar.',
    },
    {
      title: 'Uma métrica de cinco anos',
      text:
        'Escolha um único indicador que só faça sentido em prazo longo e revise-o a cada ' +
        'trimestre. É a única forma de manter o horizonte visível num sistema interno que ' +
        'recompensa exclusivamente a semana.',
    },
    {
      title: 'Use o 8 para recusar',
      text:
        'Você já tem uma fixação sem nenhum medo de desagradar. Aponte-a para as oportunidades: ' +
        'o não que você dá com facilidade a pessoas incompetentes é o mesmo não que você precisa ' +
        'aprender a dar a projetos interessantes.',
    },
    {
      title: 'Termine antes de começar',
      text:
        'Regra dura e simples: nada novo entra enquanto algo em curso não for encerrado ou ' +
        'entregue. O 3 aceita essa regra melhor do que qualquer outra, porque ela é formulada em ' +
        'linguagem de entrega.',
    },
  ],

  misread:
    'Quase ninguém te lê como introvertido, e muita gente te tipa como ENTJ ou ESTP. Dentro do ' +
    'eneagrama, você é lido como 8 principal por causa da presença e do apetite por comando, o ' +
    'que costuma esconder o 3 que de fato conduz. E a leitura mais injusta é a de superficialidade: ' +
    'quem vê a agenda supõe que não há profundidade por trás, quando o que existe é uma cabeça ' +
    'de longo alcance que quase nunca recebe as condições de operação — e sente essa falta, sem ' +
    'saber nomeá-la, como uma inquietação que nenhum projeto novo resolve.',

  versus:
    'A confusão útil é com o 368: mesmo 3, mesmo 8, e o 7 no lugar do 6. Os dois são rápidos, ' +
    'ocupam espaço e precisam vencer de forma visível. A diferença está na direção do movimento. ' +
    'O 6 move contra uma ameaça; o 7 move em direção a uma oportunidade. Por isso o 368 acumula ' +
    'inimigos e o 378 acumula compromissos; o 368 lembra de cada deslealdade com data, o 378 já ' +
    'esqueceu na semana seguinte. Sob estresse o 368 escala contra uma pessoa específica, com ' +
    'prova; o 378 escala a agenda, contra ninguém — e é por isso que o segundo é muito mais ' +
    'difícil de perceber a tempo.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 458 — O Erudito                                                             */
/* -------------------------------------------------------------------------- */

export const DEEP_T458_PT: VariantDeep = {
  lede:
    'A visão mais privada dos vinte e sete arquétipos de Fauvre, montada sobre a pilha que já era ' +
    'a mais privada dos dezesseis tipos. O 5 fornece o material, o 4 exige que a leitura seja ' +
    'inconfundivelmente sua e o 8 garante que ela saia inteira, sem amortecimento, quando sair. ' +
    'É um INTJ que enxerga o que a sala não vê, sabe que enxerga, e vive administrando a distância ' +
    'que isso cria.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Dois alimentadores para a intuição, um executor para a fala',
      paragraphs: [
        'Ni recebe combustível de duas fixações, o que é raro. O 5 traz profundidade — anos de ' +
          'leitura, fonte primária, nada de segunda mão. O 4 traz o ângulo: não basta estar ' +
          'certo, a leitura precisa ser sua, montada por um caminho que mais ninguém percorreu. ' +
          'O resultado é uma síntese que costuma ser genuinamente original e genuinamente ' +
          'isolante, porque explicar como você chegou lá exigiria refazer a trajetória inteira ' +
          'diante de alguém.',
        'A execução é do 8, e é ela que impede este tritipo de ser inofensivo. Você não guarda a ' +
          'conclusão: diz uma vez, inteira, sem preparar o terreno. O 4 dá carga emocional à ' +
          'frase e o 8 remove qualquer atenuante, o que produz aquele efeito característico de ' +
          'sala em silêncio depois que você fala.',
        'O centro emocional está na frente, mas na sua versão orgulhosa. A inveja que Naranjo ' +
          'atribui ao 4 aparece aqui invertida: a diferença não é vivida como falta, é vivida como ' +
          'qualidade. Você não quer ser como os outros. Quer que fique claro que não é.',
      ],
      points: [
        '5 — “eu não falo do que não estudei, e espero o mesmo dos outros.”',
        '4 — “se qualquer um pudesse ter chegado a isso, não vale a pena.”',
        '8 — “eu digo, e digo inteiro.”',
        'Fi terciário — aqui ele tem um aliado no 4, e é o único dos nove tritipos em que isso ' +
          'acontece.',
      ],
    },
    {
      eyebrow: 'A marca da casa',
      title: 'Desprezo como reflexo',
      paragraphs: [
        'A reação mais automática deste tritipo não é raiva: é desprezo. Alguém opina com ' +
          'confiança sobre um assunto que você estudou por seis anos, e a resposta interna chega ' +
          'antes de qualquer decisão sua. O 5 registra a incompetência, o 4 registra a ' +
          'vulgaridade, o 8 fornece a licença para demonstrar as duas coisas. Você não precisa ' +
          'dizer nada — o silêncio já comunica, e comunica com uma clareza que você subestima.',
        'Isso te dá autoridade real em qualquer ambiente técnico e te custa quase todos os ' +
          'ambientes restantes. E há um detalhe que o 4 esconde bem: o desprezo é a defesa mais ' +
          'confortável disponível, porque transforma a possibilidade dolorosa de não pertencer na ' +
          'escolha orgulhosa de não pertencer. As duas se parecem por fora. Só uma delas dói ' +
          'menos por dentro, e não é a verdadeira.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'Você abandona o campo quando ele fica popular',
      paragraphs: [
        'O padrão se repete a vida inteira: você entra num assunto cedo, vai fundo, domina — e ' +
          'perde o interesse mais ou menos no momento em que ele vira conversa de todo mundo. Não ' +
          'é esnobismo consciente. É o 4 informando que aquilo deixou de servir como território, ' +
          'e o 5 já procurando um lugar onde ainda seja possível saber algo que os outros não ' +
          'sabem.',
        'A consequência prática é uma competência descontínua e extraordinariamente profunda: ' +
          'quatro ou cinco domínios não relacionados, cada um trabalhado até a raiz, nenhum ' +
          'exercido profissionalmente por tempo suficiente para virar carreira. Somado ao 8, que ' +
          'não tolera chefe medíocre, isso produz um currículo que parece errático de fora e é ' +
          'perfeitamente coerente por dentro.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'A obra que não sai porque ainda não é sua o bastante',
      paragraphs: [
        'A publicação é o gargalo. O 5 diz que falta material, o 4 diz que ainda não está ' +
          'suficientemente original, e nenhum dos dois tem prazo. O 8 poderia forçar, mas ele ' +
          'defende posição, não cronograma: força para dizer uma verdade numa reunião, não para ' +
          'terminar um manuscrito num domingo. Este tritipo produz quantidades enormes de ' +
          'pensamento com uma taxa de conversão baixíssima.',
        'E como o valor está na singularidade e não na entrega, você não sente o custo até muito ' +
          'tarde — até ver alguém publicar, de forma mais rasa, a coisa que você tinha inteira há ' +
          'seis anos. O 8 então vira desprezo pelo trabalho alheio, o que é conveniente e não ' +
          'muda nada.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Profundidade sem substituto',
      text:
        'Você sabe coisas do jeito que quase ninguém sabe: da fonte, com contexto histórico, ' +
        'sabendo onde o consenso é frágil. Em qualquer campo que recompense domínio real, essa é ' +
        'uma vantagem que não se compra com esforço médio.',
    },
    {
      title: 'Independência intelectual',
      text:
        'O 4 impede que você adote conclusão pronta e o 8 impede que você a repita por ' +
        'conveniência. É a combinação que produz leituras que ninguém mais teria montado — o tipo ' +
        'de contribuição que envelhece bem.',
    },
    {
      title: 'Franqueza sem interesse',
      text:
        'Você diz a verdade técnica mesmo quando ela é cara, porque não há um 3 aqui cuidando de ' +
        'imagem nem um 2 cuidando de relação. Quem precisa de um parecer honesto procura ' +
        'exatamente este perfil.',
    },
    {
      title: 'Uma vida interior com linguagem',
      text:
        'O 4 dá a Fi terciário algo que ele quase nunca tem num INTJ: vocabulário. Você consegue ' +
        'nomear estados internos que outros tritipos deste tipo sentem e não conseguem descrever ' +
        '— e é um recurso que você usa menos do que poderia.',
    },
  ],

  traps: [
    {
      title: 'Isolamento com boa justificativa',
      text:
        'Cada retirada tem um argumento tecnicamente correto: aquela pessoa é rasa, aquele ' +
        'ambiente é medíocre, aquela conversa é perda de tempo. Todos verdadeiros isoladamente e ' +
        'catastróficos somados.',
    },
    {
      title: 'A pureza que impede a entrega',
      text:
        'Enquanto não for original o bastante, não sai. Como o critério é interno e móvel, ele ' +
        'nunca é atingido, e o padrão vira o mecanismo mais eficiente de autossabotagem que este ' +
        'tritipo possui.',
    },
    {
      title: 'Diferença como identidade',
      text:
        'Se ser distinto é o que te define, qualquer aproximação ameaça o que você é. Você ' +
        'sabota semelhança sem perceber — mudando de assunto, subindo o nível, tornando-se um ' +
        'pouco mais difícil sempre que alguém chega perto.',
    },
    {
      title: 'A frase que não se desdiz',
      text:
        'O 8 entrega a verdade inteira de uma vez, com a carga que o 4 acrescentou. Você não ' +
        'exagera nem mente, e ainda assim deixa estragos que levam anos para consertar, porque o ' +
        'volume não estava calibrado para quem ouvia.',
    },
  ],

  stress:
    'As três fixações colaboram na mesma direção, e é isso que torna a queda daqui tão rápida. O ' +
    '4 conclui que ninguém é do mesmo mundo — não por drama, por evidência acumulada. O 5 fecha ' +
    'a porta e corta o fornecimento: você para de responder, some de grupos, cancela sem ' +
    'explicar. O 8 fornece o desprezo que transforma a retirada em decisão legítima em vez de ' +
    'sofrimento. A espiral do “eu terminei com as pessoas” é o modo de falha clássico, e ela é ' +
    'perigosa porque não parece crise: parece lucidez. Diferente do 358, aqui não há fachada ' +
    'nenhuma sendo mantida, então a queda é visível para quem restou — só que quem restou é ' +
    'pouca gente, e você já treinou todos eles a não insistir. O grip em Se costuma chegar como ' +
    'abandono do corpo e do ambiente: casa, horários, alimentação, tudo cedendo enquanto a vida ' +
    'mental segue intensa.',

  growth: [
    {
      title: 'Publique antes de ser original o bastante',
      text:
        'Estabeleça uma data e entregue o que existir nela. O 4 vai declarar que a versão é ' +
        'indigna e o 4 vai estar errado — não sobre a qualidade, sobre a importância dela. Uma ' +
        'obra existente e imperfeita ensina mais do que uma obra perfeita e inexistente.',
    },
    {
      title: 'Deixe alguém discordar sem virar veredito',
      text:
        'Quando um par apontar um erro, resista ao movimento automático de transformar isso em ' +
        'julgamento sobre o seu valor ou sobre a mediocridade dele. Perguntar “onde exatamente?” ' +
        'é a frase que este tritipo menos usa e mais precisa.',
    },
    {
      title: 'Aponte o 8 para a exposição, não para o isolamento',
      text:
        'A sua fixação instintiva é excelente em aceitar custo. Use-a para bancar o risco de ' +
        'mostrar trabalho inacabado, e não apenas para bancar o custo de romper com quem te ' +
        'decepcionou.',
    },
    {
      title: 'Semelhança em doses',
      text:
        'Procure deliberadamente uma pessoa que tenha chegado às mesmas conclusões por outro ' +
        'caminho e resista à vontade de encontrar onde ela é rasa. O 4 vai sentir isso como ' +
        'ameaça à singularidade. É o remédio exato.',
    },
  ],

  misread:
    'Você é frequentemente tipado como INFJ ou INFP por causa da intensidade e do vocabulário ' +
    'interior, e lido como arrogante por quase todo mundo que não trabalha na sua área. Dentro do ' +
    'eneagrama, muita gente te chama de 5 principal e ignora o 4, ou de 8 por causa da franqueza. ' +
    'O mal-entendido mais caro, porém, é sobre a retirada: ela é lida como desprezo quando na ' +
    'maior parte das vezes é proteção — e como você usa o desprezo para cobri-la, a leitura errada ' +
    'é uma que você mesmo ajudou a construir.',

  versus:
    'A confusão mais próxima é com o 468, que mantém o 4 e o 8 e troca o 5 pelo 6. Os dois falam ' +
    'com carga e nenhum dos dois cuida da própria imagem. A diferença está no tempo de reação. O ' +
    '458 se recolhe, estuda, e volta com um veredito montado; o 468 não se recolhe — interroga na ' +
    'hora, com a informação que tem. Por isso o 458 costuma estar certo com prova e o 468 costuma ' +
    'estar certo sem conseguir demonstrar. Sob estresse o 458 fecha a porta e declara o mundo ' +
    'raso; o 468 abre a porta com tudo e exige explicação. Um se afasta com desprezo, o outro se ' +
    'aproxima com acusação.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 468 — O Arauto da Verdade                                                   */
/* -------------------------------------------------------------------------- */

export const DEEP_T468_PT: VariantDeep = {
  lede:
    'Sem 5 e sem 3, este tritipo não tem o hábito de recuar para estudar nem o instinto de cuidar ' +
    'da própria imagem — e o que sobra é muito direto. O 6 aponta Ni para a inconsistência, o 4 ' +
    'faz da verdade um assunto pessoal e o 8 dispensa qualquer intermediário entre perceber e ' +
    'dizer. É o INTJ que fala aquilo na reunião, na frente de quem não devia, e está certo com ' +
    'uma frequência que não melhora nada a situação.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Uma intuição rápida, sem arquivo e sem freio',
      paragraphs: [
        'Ni funciona aqui sem o depósito que o 5 costuma fornecer. Você percebe a inconsistência ' +
          'antes do argumento: o número que não bate com a história, a explicação boa demais, o ' +
          'colega que mudou de versão entre duas frases. Chega como certeza e chega cedo — e ' +
          'frequentemente antes de você conseguir explicar como chegou.',
        'É a pior combinação social possível: estar certo sem poder demonstrar. Sem 5, você não ' +
          'tem o hábito de montar dossiê; sem 3, não tem o instinto de escolher o momento. Então a ' +
          'percepção sai crua, no meio da reunião, com a carga que o 4 anexou e a franqueza que o ' +
          '8 autoriza. Meses depois costuma ficar claro que você tinha razão. Ninguém lembra.',
        'O 4 é o que diferencia este tritipo de uma máquina de confronto. A verdade não é uma ' +
          'questão técnica para você — é uma questão de integridade pessoal, e mentira te ofende ' +
          'de um jeito quase físico. Riso e Hudson colocam o desejo básico do 4 na busca de si ' +
          'mesmo e de significado; aqui isso se traduz numa incapacidade genuína de fingir ' +
          'concordância, mesmo quando fingir seria trivial e barato.',
      ],
      points: [
        '6 — “tem algo errado nessa história e eu vou dizer.”',
        '4 — “eu não consigo participar de uma farsa educada.”',
        '8 — “eu falo agora, não depois.”',
        'Fi terciário — intenso, com o 4 emprestando linguagem e nenhuma das três oferecendo ' +
          'contenção.',
      ],
    },
    {
      eyebrow: 'O motor',
      title: 'Medo, intensidade e gume operando juntos',
      paragraphs: [
        'Naranjo nomeia a paixão do 6 como medo, e é preciso dizer com cuidado: aqui ele nunca ' +
          'aparece como covardia. Com o 8 presente, o medo é contrafóbico — você vai na direção ' +
          'da coisa que te assusta e a confronta antes que ela cresça. O que parece coragem, e é, ' +
          'começa como antecipação de perigo.',
        'O 4 dobra a aposta ao tornar tudo pessoal. Uma incoerência não é apenas um erro no ' +
          'sistema: é um insulto à sua percepção, a evidência de que estão tratando você como ' +
          'alguém que pode ser enganado. É por isso que a sua reação tem sempre um pouco mais de ' +
          'temperatura do que a situação pedia — e por que ela é lida como desproporcional por ' +
          'quem não sente a mesma coisa.',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'A frase que muda a sala',
      paragraphs: [
        'A cena é sempre parecida. Uma reunião correndo em piloto automático, um consenso sendo ' +
          'construído sobre algo que não se sustenta, e você diz em voz alta a frase que todo ' +
          'mundo pensou e ninguém formularia. O clima muda. Metade da sala fica secretamente ' +
          'grata, a outra metade nunca mais te vê da mesma forma, e a decisão em geral melhora.',
        'O custo é cumulativo e invisível na hora. Você não é convidado para a conversa em que a ' +
          'coisa é decidida antes; recebe o convite para a reunião em que já foi decidida. Este ' +
          'tritipo costuma interpretar isso como confirmação de que existe uma conspiração de ' +
          'mediocridade — o que é meio verdade e é também, em parte, uma consequência direta do ' +
          'próprio comportamento.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'As pessoas que aguentariam você já foram embora',
      paragraphs: [
        'Este tritipo precisa exatamente de uma coisa: gente que aguente franqueza e tenha ' +
          'autoridade para dizer “você passou do ponto”. E costuma já ter afastado essas pessoas, ' +
          'porque elas são também as únicas que te confrontam de volta — e confronto de volta, no ' +
          'meio de um ciclo do 6 com o 4, é lido como deslealdade.',
        'A verificação é simples e desagradável: pense em quem, nos últimos dois anos, te disse ' +
          'que você estava sendo injusto com alguém. Se a lista está vazia, não é porque você ' +
          'ficou justo. É porque a função de controle externo foi desligada, e num tritipo sem 5 ' +
          'para checar e sem 3 para pesar consequência, ela era a única que existia.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Detecção de mentira',
      text:
        'A dupla Ni–6 registra a incoerência antes de qualquer análise consciente, e este ' +
        'tritipo confia nesse sinal em vez de racionalizá-lo. Você evita fraudes, sócios ruins e ' +
        'contratos tortos que gente mais paciente assina.',
    },
    {
      title: 'Coragem sem cálculo de imagem',
      text:
        'Não há 3 aqui pesando o custo reputacional. Você fala mesmo quando falar te prejudica, ' +
        'e em organizações onde todo mundo mede a frase, esse é um recurso escasso e valioso.',
    },
    {
      title: 'Autenticidade indisfarçável',
      text:
        'Você é a mesma pessoa em todas as salas. Não há versão corporativa, versão familiar, ' +
        'versão de entrevista. Quem convive sabe exatamente com quem está lidando, o que é raro e ' +
        'vale mais do que parece.',
    },
    {
      title: 'Lealdade sem contrato',
      text:
        'Quem passa no seu escrutínio recebe uma fidelidade sem cláusulas. O 6 fornece a ' +
        'constância, o 4 fornece a profundidade e o 8 fornece a disposição de brigar por quem ' +
        'está do seu lado.',
    },
  ],

  traps: [
    {
      title: 'Ofensa como sistema operacional',
      text:
        'Discordância vira desrespeito e desrespeito vira guerra. Como o 4 personaliza e o 8 ' +
        'escala, você reage a um insulto que muitas vezes ninguém quis dar — e a resposta cria ' +
        'retroativamente o conflito que a justificava.',
    },
    {
      title: 'Certeza sem prova',
      text:
        'Sem o hábito de estudo do 5, a sua leitura chega inteira e indefensável. Você acerta ' +
        'muito e não consegue mostrar por quê, o que arruína a sua credibilidade justamente nos ' +
        'casos em que ela mais importaria.',
    },
    {
      title: 'Nenhuma administração de imagem',
      text:
        'Não é humildade: é ausência de instrumento. Você paga anos de custo político por uma ' +
        'frase de dez segundos e não constrói o capital que absorveria esse custo.',
    },
    {
      title: 'Solidão fabricada',
      text:
        'Sucessivos rompimentos, sempre com motivo defensável, vão reduzindo o círculo a ' +
        'ninguém. E a explicação que este tritipo dá a si mesmo — que as pessoas não aguentam a ' +
        'verdade — é atraente e impede qualquer correção.',
    },
  ],

  stress:
    'A suspeita do 6 ganha a intensidade do 4 e o gume do 8, nessa ordem e em poucos minutos. ' +
    'Você não fica apenas desconfiado: fica ofendido, e a resposta sai desproporcional ao ' +
    'episódio que a disparou — que era pequeno, mas foi lido como o vigésimo. Como não há 5 para ' +
    'promover a retirada nem 3 para calcular o dano à reputação, nada freia a escalada por ' +
    'dentro: o freio teria de vir de fora, e você já removeu quase todos. Depois vem a ressaca, ' +
    'que é a parte que ninguém vê: horas de reconstituição da cena, vergonha retroativa pela ' +
    'intensidade e uma certeza igualmente forte de que, no mérito, você estava certo. As duas ' +
    'coisas coexistem e nenhuma cancela a outra. O grip em Se aparece como impulsividade física ' +
    '— sair, romper, comprar, dirigir rápido, mudar tudo num sábado.',

  growth: [
    {
      title: 'Compre vinte e quatro horas',
      text:
        'Nada dito no dia. Escreva a frase inteira, com toda a carga, e guarde até amanhã. Se ' +
        'amanhã ela ainda for verdadeira, diga — e ela quase sempre sairá mais curta, mais ' +
        'precisa e infinitamente mais eficaz.',
    },
    {
      title: 'Recrute dois auditores',
      text:
        'Duas pessoas com permissão explícita para dizer que você passou do ponto, e um ' +
        'compromisso seu de não tratar isso como traição. Sem esse mecanismo externo, este ' +
        'tritipo não tem nenhum limite interno funcional.',
    },
    {
      title: 'Traga a prova junto com a percepção',
      text:
        'Você não precisa virar um 5, precisa de um caderno. Anote o que te fez desconfiar, com ' +
        'data e frase literal. Duas semanas de anotação transformam uma intuição indefensável ' +
        'num argumento que ninguém consegue descartar.',
    },
    {
      title: 'Separe o erro do insulto',
      text:
        'Antes de responder, uma pergunta única: isto foi incompetência ou foi contra mim? Na ' +
        'maioria das vezes é a primeira, e este tritipo tem uma taxa de classificação errada alta ' +
        'o suficiente para justificar a pergunta todas as vezes.',
    },
  ],

  misread:
    'Você é lido como instável, agressivo ou difícil, e frequentemente tipado como ENTP ou ESTP ' +
    'por causa da velocidade do confronto. No eneagrama, quase todo mundo te chama de 8 principal ' +
    'e não vê o 6, que é quem de fato dirige a sua atenção. O erro mais sério, porém, é de ordem: ' +
    'as pessoas concluem que você é hostil e que por isso desconfia. É o contrário — você ' +
    'desconfiou primeiro, com razão em boa parte dos casos, e a hostilidade foi o formato ' +
    'disponível para dizer isso.',

  versus:
    'A vizinha imediata é a 368, que mantém o 6 e o 8 e troca o 4 pelo 3. Os dois enxergam abuso ' +
    'de poder e nenhum dos dois deixa passar. A diferença é o que acontece entre ver e falar. O 3 ' +
    'monta o caso, escolhe o momento e precisa vencer de forma visível; o 4 não consegue esperar ' +
    'e não se importa se vai vencer — precisa que a coisa seja dita. Por isso o 368 acumula ' +
    'vitórias e inimigos poderosos, enquanto o 468 acumula episódios e reputação de difícil. Sob ' +
    'estresse o 368 fabrica uma traição e a processa com documentos; o 468 fabrica um insulto e ' +
    'responde na mesma frase.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};

/* -------------------------------------------------------------------------- */
/* 478 — O Mensageiro                                                          */
/* -------------------------------------------------------------------------- */

export const DEEP_T478_PT: VariantDeep = {
  lede:
    'A pilha Ni–Te tem dificuldade real em segurar este tritipo, e é dessa tensão que ele vive. O ' +
    '7 quer mais mundo, o 4 quer o mundo que falta, e os dois alimentam a mesma intuição em ' +
    'direções opostas; o 8 converte o que foi sentido em ação antes que Te tenha tido chance de ' +
    'opinar. Nada aqui é morno. É um INTJ que parece um tipo sensorial por fora, é inteiramente ' +
    'interior por dentro, e confunde as duas coisas em si mesmo.',

  sections: [
    {
      eyebrow: 'Arquitetura',
      title: 'Dois alimentadores em conflito e um executor sem intermediário',
      paragraphs: [
        'Ni recebe material demais e de duas origens que não conversam. O 7 traz possibilidade — ' +
          'a vida maior, a cidade nova, o projeto que ainda não existe. O 4 traz falta — o que ' +
          'está ausente, o que poderia ter sido, o significado que ainda não apareceu. A ' +
          'intuição, que funcionaria melhor com pouca informação e muito silêncio, trabalha aqui ' +
          'com intensidade em excesso e converge mal.',
        'A execução é do 8 e ela não espera Te. O que foi sentido vira movimento no mesmo dia: ' +
          'você pede demissão pelo aplicativo às duas da manhã, encerra uma relação numa frase, ' +
          'compra a passagem antes de conferir a agenda. Não é impulsividade sensorial no sentido ' +
          'comum — é a fixação instintiva executando uma conclusão emocional sem revisão lógica.',
        'O resultado é a maior amplitude dos nove tritipos com 8. Os picos são altos e reais, os ' +
          'vales são fundos e igualmente reais, e a distância entre eles não é instabilidade ' +
          'clínica: é a faixa em que este arranjo opera. Vale dizer, porém, que não existe ' +
          'nenhuma pesquisa revisada por pares sobre tritipos — a revisão sistemática de Hook e ' +
          'colegas, de 2021, varreu 104 amostras de estudos de eneagrama e não achou um único ' +
          'trabalho sobre o modelo de três fixações. Isto é vocabulário para se descrever, não ' +
          'resultado.',
      ],
      points: [
        '7 — “tem mais vida do que essa aí, e eu quero.”',
        '4 — “falta alguma coisa e eu sei exatamente o quê.”',
        '8 — “então muda hoje.”',
        'Te — a função que deveria entrar entre sentir e agir, e que costuma chegar depois do ato.',
      ],
    },
    {
      eyebrow: 'A tensão central',
      title: 'Fugir da dor e cavar dentro dela, ao mesmo tempo',
      paragraphs: [
        'Riso e Hudson descrevem o medo básico do 7 como o de ser privado, preso na dor, e o ' +
          'desejo do 4 como o de encontrar a si mesmo e o próprio significado — o que costuma ' +
          'exigir descer exatamente até onde dói. Este tritipo faz as duas coisas na mesma semana, ' +
          'às vezes no mesmo dia: mergulha na melancolia com uma seriedade impressionante e, ' +
          'quarenta e oito horas depois, marca uma viagem.',
        'Quem convive interpreta isso como incoerência ou teatro. Não é nenhum dos dois. São duas ' +
          'fixações legítimas com estratégias opostas para a mesma matéria-prima, e o 8 dá a ' +
          'ambas a mesma autorização imediata de agir. A pergunta útil, para você, nunca é “qual ' +
          'dos dois sou eu de verdade?”. É: qual dos dois está no volante agora, e ele deveria ' +
          'estar assinando alguma coisa?',
      ],
    },
    {
      eyebrow: 'Na prática',
      title: 'A saída dramática de uma situação consertável',
      paragraphs: [
        'A cena mais cara deste tritipo não é uma explosão pública: é uma decisão irreversível ' +
          'tomada num estado alterado, com argumentos impecáveis. O emprego não era ruim, era ' +
          'sufocante naquela terça. A relação não estava morta, estava sem sentido naquela noite. ' +
          'Te chega no dia seguinte, monta a justificativa retroativa com competência e você ' +
          'segue em frente convencido de que foi lucidez.',
        'Às vezes foi mesmo. Este tritipo tem uma taxa de acerto surpreendente nessas rupturas, ' +
          'porque o 4 realmente percebe quando algo perdeu significado e o 7 realmente vê a ' +
          'alternativa melhor. O problema é que ele tem a mesma taxa em decisões que dariam para ' +
          'consertar, e não há mecanismo interno para distinguir os dois casos no momento em que ' +
          'importa.',
      ],
    },
    {
      eyebrow: 'O ponto cego',
      title: 'Intensidade tomada como prova de verdade',
      paragraphs: [
        'A crença silenciosa deste tritipo é que o que se sente com força é mais verdadeiro do ' +
          'que o que se conclui com calma. É uma inversão exata da hierarquia da pilha — Ni e Te ' +
          'primeiro, Fi terciário, na convenção de desenvolvimento de Grant amadurecendo entre os ' +
          'vinte e os quarenta — e ela custa caro por décadas, porque nenhum dos seus estados ' +
          'intensos é falso e nenhum deles é conclusivo.',
        'O trabalho de uma vida aqui é lento e é um só: deixar Te chegar antes do 8. Não para ' +
          'sentir menos — para que o que você sente passe por uma função capaz de perguntar ' +
          '“isto é reversível?” antes de o corpo já ter agido.',
      ],
    },
  ],

  strengths: [
    {
      title: 'Amplitude emocional com cabeça estratégica',
      text:
        'Você sente numa faixa que a maioria dos INTJs não acessa e continua tendo o motor ' +
        'analítico intacto. Quando os dois trabalham juntos, você entende pessoas e sistemas ao ' +
        'mesmo tempo — combinação rara e imediatamente perceptível.',
    },
    {
      title: 'Ausência total de fingimento',
      text:
        'Sem 3 e sem 2, não há administração de imagem nem cálculo relacional. O que você diz é o ' +
        'que você pensa, e as pessoas percebem isso em minutos. É desconcertante e é a base de ' +
        'toda confiança que você recebe.',
    },
    {
      title: 'Coragem para recomeçar',
      text:
        'Você é capaz de desmontar a vida inteira e reconstruí-la, mais de uma vez, sem a ' +
        'paralisia que trava quase todo mundo. O 7 fornece a visão da alternativa e o 8 fornece a ' +
        'disposição de pagar o preço.',
    },
    {
      title: 'Presença',
      text:
        'Quando você está numa conversa, você está inteiro nela. Não há parte de você calculando ' +
        'a próxima jogada, e isso, num tipo famoso por viver alguns centímetros à frente do ' +
        'presente, é uma qualidade que as pessoas lembram por anos.',
    },
  ],

  traps: [
    {
      title: 'Irreversível no calor',
      text:
        'A decisão que muda tudo é tomada no pico, e Te só é convocado depois, para justificar. ' +
        'Você não erra por falta de inteligência: erra por ordem de operações.',
    },
    {
      title: 'Tédio confundido com morte',
      text:
        'A rotina estável aciona no 7 o medo de estar preso e no 4 a sensação de vazio de ' +
        'sentido. As duas coisas juntas fazem uma vida boa e comum parecer insuportável — ' +
        'exatamente quando ela finalmente estava dando certo.',
    },
    {
      title: 'Excesso como método',
      text:
        'Se inferior é usado para sentir alguma coisa verdadeira: velocidade, substância, ' +
        'trabalho, corpo levado ao limite. Não é hedonismo — é uma busca de realidade por via ' +
        'sensorial, e por isso é muito mais difícil de largar.',
    },
    {
      title: 'Deixar rastro de gente',
      text:
        'Rupturas rápidas em relações que eram boas. Você atravessa o luto rápido demais, com o ' +
        '7 empurrando adiante, e descobre a perda anos depois, quando o 4 finalmente calcula o ' +
        'que ficou para trás.',
    },
  ],

  stress:
    'As três fixações empurram para fora ao mesmo tempo, e é por isso que a queda daqui é sempre ' +
    'visível — o oposto do INTJ que desaparece em silêncio. O 4 declara que nada tem sentido, o 7 ' +
    'não suporta ficar dentro dessa declaração por mais de um dia, o 8 age. O resultado é ruptura: ' +
    'demissão, mudança, fim de relação, viagem comprada de madrugada, tudo apresentado com uma ' +
    'argumentação que Te monta depois e que é boa o bastante para convencer qualquer um, você ' +
    'inclusive. O grip em Se chega junto e não separado: excesso físico como forma de voltar a ' +
    'sentir algo verdadeiro. E a assinatura deste tritipo é o depois — três meses adiante, com a ' +
    'poeira baixa, o 4 faz o inventário do que foi destruído e nenhuma das outras duas fixações ' +
    'tem qualquer coisa a oferecer contra isso.',

  growth: [
    {
      title: 'Nada irreversível no dia',
      text:
        'Regra única, escrita, sem exceção: decisões que não se desfazem esperam quarenta e oito ' +
        'horas. O 8 vai chamar isso de covardia e o 7 vai chamar de burocracia. É só a diferença ' +
        'entre decidir com Te e decidir com adrenalina.',
    },
    {
      title: 'Dê linguagem antes de dar ação',
      text:
        'Escreva o que está sentindo, mal formulado, antes de fazer qualquer coisa a respeito. ' +
        'Nomear o estado reduz a pressão de agir sobre ele, e este é o único tritipo dos nove em ' +
        'que a escrita funciona melhor do que qualquer regra externa.',
    },
    {
      title: 'Uma estrutura que você não decide todo dia',
      text:
        'Compromissos fixos com outras pessoas — aula, treino, ensaio, contrato — sustentam a ' +
        'vida nos períodos em que a sua vontade está oscilando. Não é rigidez: é o andaime que ' +
        'permite a amplitude sem colapso.',
    },
    {
      title: 'Deixe o luto acontecer no tempo dele',
      text:
        'O 7 vai propor a próxima coisa antes de a atual ter sido sentida. Recusar essa proposta ' +
        'uma vez, e ficar, é a manobra que mais muda a trajetória deste tritipo a longo prazo.',
    },
  ],

  misread:
    'Você é tipado como ESFP, ENFP ou ESTP por quase todo mundo, e no eneagrama é lido como 8 ' +
    'principal por causa da velocidade com que age, ou como 4 puro por causa da intensidade. Nas ' +
    'relações, o mal-entendido é mais grave: as pessoas concluem que você é instável ou dramático ' +
    'quando o que existe é uma amplitude larga com um executor rápido demais entre sentir e fazer. ' +
    'E quase ninguém acredita que você é introvertido — inclusive nos períodos em que você passa ' +
    'semanas sem falar com ninguém, que são tratados como exceção quando são a outra metade da ' +
    'mesma pessoa.',

  versus:
    'A confusão mais próxima é com o 378, que mantém o 7 e o 8 e troca o 4 pelo 3. Os dois são ' +
    'rápidos, expansivos e difíceis de reconhecer como INTJ. A diferença é o critério de saída. O ' +
    '378 abandona um projeto quando ele para de render; o 478 abandona quando ele para de ' +
    'significar. O excesso do 378 é comemorativo — recompensa por desempenho; o do 478 é uma ' +
    'busca de realidade. E sob estresse o 378 acelera a agenda e continua entregando, o que ' +
    'esconde a crise; o 478 rompe e some, o que a expõe imediatamente. O primeiro é descoberto ' +
    'tarde demais; o segundo, cedo demais para o próprio gosto.',

  sources: [
    'fauvre-tritype',
    'riso-hudson-1999',
    'naranjo-1994',
    'hook-2021',
    'grant-1983',
  ] satisfies SourceId[],
};
