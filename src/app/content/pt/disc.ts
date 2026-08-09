import type { ModelPageContent } from '../types';

export const DISC_PT: ModelPageContent = {
  meta: {
    title: 'DISC — a superfície, não a máquina',
    description:
      'Marston, 1928: dois eixos, quatro emoções primárias e nenhum instrumento por trinta ' +
      'anos. O que D e C dizem sobre um INTJ, e o que o único estudo publicado encontrou — ' +
      'inclusive uma correlação negativa entre Pensamento e Dominância.',
  },

  sources: ['jung-1921', 'kim-2025-mbti-disc', 'marston-1928', 'pittenger-2005', 'wikipedia-disc'],

  header: {
    eyebrow: 'Além do MBTI — DISC',
    title: 'DISC: a superfície,\nnão a máquina',
    lede:
      'O DISC não descreve como você pensa. Descreve o que a sala vê quando você entra nela — e ' +
      'admite, ao contrário do MBTI, que isso muda conforme a sala. Para um INTJ essa distância ' +
      'entre o interior e a superfície é o problema social inteiro, o que torna o DISC útil ' +
      'exatamente na medida em que ele é raso.',
  },

  intro:
    'Você provavelmente já leu que o INTJ é <strong>D + C</strong>: dominância somada à ' +
    'exigência técnica. É a versão que circula em treinamento corporativo há décadas, e ela ' +
    'nunca foi verificada. O único estudo publicado que correlacionou os dois sistemas encontrou ' +
    'Pensamento associado a <em>menos</em> dominância, não a mais — o oposto exato do folclore.',

  caveat:
    'O DISC não deriva de Jung, não tem funções cognitivas e não descreve preferência interna: ' +
    'ele mede comportamento observável num contexto. Não existe “o” instrumento DISC — existem ' +
    'dezenas de versões comerciais com normas incompatíveis e nenhum manual comum. E a ponte ' +
    'entre DISC e MBTI repousa hoje sobre um único estudo, com 130 estudantes de um só país.',

  sections: [
    {
      eyebrow: 'Marston · 1928',
      title: 'Um livro que não era um teste',
      paragraphs: [
        'William Moulton Marston era doutor em psicologia por Harvard, advogado, inventor do ' +
          'componente de pressão sistólica que virou parte do polígrafo e — sob pseudônimo — ' +
          'criador da Mulher-Maravilha. Em 1928 publicou <em>Emotions of Normal People</em>, um ' +
          'livro sobre gente comum e não sobre patologia, escrito treze anos depois de Jung ter ' +
          'começado a rascunhar os tipos e sem nenhuma relação com eles.',
        'A construção é de uma simplicidade quase geométrica. Duas perguntas: o ambiente à sua ' +
          'frente é favorável ou hostil, e você se percebe mais forte ou mais fraco do que ele. ' +
          'Do cruzamento saem quatro emoções primárias — Dominância (ambiente hostil, você mais ' +
          'forte), Indução (favorável, você mais forte), Submissão (favorável, você mais fraco) e ' +
          'Complacência (hostil, você mais fraco). D, I, S, C. Os fornecedores modernos ' +
          'rebatizaram: Influência, Estabilidade, Conformidade ou Conscienciosidade.',
        'Repare no que isso não é. Não há introversão nem extroversão, não há função dominante, ' +
          'não há desenvolvimento ao longo da vida, não há inconsciente. A unidade de análise é ' +
          'uma <em>resposta a uma situação</em>. Marston teria achado estranha a pergunta “qual é ' +
          'o meu DISC?”, porque no esquema dele a resposta depende de qual ambiente você está ' +
          'olhando.',
      ],
    },
    {
      eyebrow: 'Trinta anos sem instrumento',
      title: 'Marston nunca construiu um teste',
      paragraphs: [
        'Este é o fato que quase todo material de treinamento omite: o autor do modelo não ' +
          'produziu questionário, escala, norma ou amostra. O primeiro instrumento baseado nos ' +
          'eixos dele apareceu em 1956, com Walter Clarke — a Activity Vector Analysis, uma ' +
          'lista de adjetivos, não escolha forçada. ' +
          'A versão que transformou o DISC em produto de recursos humanos veio nos anos 1970, com ' +
          'John Geier. Marston já tinha morrido em 1947.',
        'A consequência prática é que “o DISC diz” não é uma frase sobre um instrumento. Hoje ' +
          'existem dezenas de versões comerciais, cada uma com item próprio, norma própria e ' +
          'nenhuma obrigação de comparabilidade. Dois relatórios DISC do mesmo participante, de ' +
          'fornecedores diferentes, não são resultados do mesmo teste — são resultados de dois ' +
          'testes que compartilham quatro letras.',
      ],
    },
    {
      eyebrow: 'D + C',
      title: 'O que o folclore diz sobre o INTJ',
      paragraphs: [
        'A leitura corrente é direta: o D vem da borda executiva do Te — velocidade de decisão, ' +
          'corte, impaciência com processo decorativo — e o C vem da exigência de que o modelo ' +
          'esteja certo antes de sair da sua mesa. Alto D com alto C é um perfil que assina ' +
          'devagar e fala rápido, e é precisamente o par de reclamações que INTJs colecionam no ' +
          'trabalho: “direto demais” e “trava tudo até estar perfeito”.',
        'Como <em>descrição de superfície</em> isso funciona bem, e vale usar. É provavelmente a ' +
          'forma mais rápida de explicar a um time por que a sua franqueza não é hostilidade e ' +
          'por que a sua lentidão de aprovação não é obstrução. O DISC dá vocabulário comum para ' +
          'a conversa que o MBTI transforma em jargão.',
        'Mas repare no que o instrumento não tem onde anotar. A lealdade silenciosa do Fi não ' +
          'aparece em lugar nenhum das quatro letras. A convergência do Ni — a certeza que chega ' +
          'inteira e demora semanas para virar argumento — também não. O DISC registra o ritmo e ' +
          'o tom da sua conduta, não o motivo dela. Confundir os dois é como descrever um carro ' +
          'pela cor da lataria.',
      ],
    },
    {
      eyebrow: 'O único dado publicado',
      title: 'E ele contradiz o folclore',
      paragraphs: [
        'Em 2025, Kim, Lee e Hwang publicaram no <em>JMIR Human Factors</em> um sistema de ' +
          'perfilamento que integrava MBTI e DISC, com 130 estudantes coreanos respondendo aos ' +
          'dois instrumentos. É, até onde se sabe, o único estudo revisado por pares a ' +
          'correlacionar diretamente as duas escalas. Saíram correlações significativas nas ' +
          'quatro dicotomias; abaixo estão as dos quatro polos que formam o INTJ.',
      ],
      points: [
        'I–S, r = 0,38 — Introversão andou junto com Estabilidade. A mais forte das quatro, e ' +
          'também a menos surpreendente.',
        'N–I, r = −0,19 — Intuição andou junto com MENOS Influência. Fraca, e a única aparição ' +
          'da intuição no artigo inteiro.',
        'T–D, r = −0,38 — Pensamento andou junto com MENOS Dominância. O oposto exato do que ' +
          'todo material corporativo afirma.',
        'J–C, r = 0,31 — Julgamento andou junto com Conformidade. Modesto, e na direção que o ' +
          'folclore esperava: quem organiza o mundo externo também exige padrão.',
      ],
    },
    {
      eyebrow: 'Como ler aquele sinal negativo',
      title: 'Uma explicação plausível não é uma explicação verificada',
      paragraphs: [
        'Um r de −0,38 corresponde a cerca de 14% de variância compartilhada: não é nada ' +
          'desprezível, e também não é uma lei. A leitura mais econômica é que o D de Marston não ' +
          'é raciocínio lógico, é <em>força visível</em> — ocupar espaço, impor ritmo, enfrentar ' +
          'um ambiente percebido como hostil. O Te do INTJ dirige por critério, e dirigir por ' +
          'critério é perfeitamente compatível com falar pouco e não disputar sala.',
        'Há outras leituras igualmente plausíveis, e é aí que o cuidado começa. A amostra é de ' +
          'estudantes coreanos, e a expressão de dominância é fortemente moldada por cultura e ' +
          'por idade. Os dois instrumentos são de autorrelato — limitação que os próprios autores ' +
          'registram —, e o artigo não informa qual versão do DISC foi usada nem em que formato ' +
          'de resposta, o que importa porque instrumentos DISC variam entre lista de adjetivos e ' +
          'escolha forçada, e escolha forçada produz escores relativos dentro da pessoa. Nada ' +
          'disso é resolvido por um estudo.',
        'Então diga com precisão o que o dado autoriza: <strong>não</strong> ficou estabelecido ' +
          'que INTJs pontuam baixo em D. Ficou estabelecido que ninguém estabeleceu o contrário. ' +
          'A equação INTJ = D + C é folclore de consultoria — plausível, difundida, sem base ' +
          'publicada, e agora com um dado apontando na direção oposta.',
      ],
    },
    {
      eyebrow: 'Estilo natural e estilo adaptado',
      title: 'O detalhe metodológico que quase ninguém respeita',
      paragraphs: [
        'A maioria das versões comerciais entrega dois gráficos: o estilo “natural” e o estilo ' +
          '“adaptado” ao contexto de trabalho. Isso é uma afirmação honesta e incomum — o modelo ' +
          'assume que o comportamento medido depende do ambiente, coisa que o MBTI nunca admitiu ' +
          'sobre as preferências. Um INTJ que aparece como alto D no escritório e baixo D em casa ' +
          'não está inconsistente; está confirmando o que o instrumento afirma.',
        'O problema é o formato. Escolha forçada produz escores ipsativos: eles dizem qual das ' +
          'suas letras é mais alta em relação às suas outras letras, e não quanta dominância você ' +
          'tem em relação a outra pessoa. Comparar o seu D com o D de um colega — que é ' +
          'exatamente o que a maior parte dos workshops faz, com cartaz na parede — é uma ' +
          'operação que o formato do escore não sustenta.',
        'Some a isso as críticas já bem documentadas contra o MBTI: dicotomizar traços contínuos, ' +
          'confiabilidade teste-reteste frágil, validade preditiva fraca para desempenho no ' +
          'trabalho. Elas se aplicam ao DISC pelo menos com a mesma força, e o DISC tem muito ' +
          'menos literatura publicada para responder por si.',
      ],
    },
  ],

  verdict: {
    title: 'O que o DISC acrescenta',
    text:
      'Uma coisa só, que o MBTI não faz: ele descreve a superfície a que os outros de fato ' +
      'reagem, e admite que ela se move de sala para sala. O MBTI descreve o interior e afirma ' +
      'que ele não muda. Para um INTJ, a distância entre os dois é o problema social inteiro — ' +
      'por dentro Ni e Fi, por fora um perfil que a sala lê como frieza e controle. Se o DISC ' +
      'serve para alguma coisa na sua vida, é como espelho de recepção: não o que você é, mas o ' +
      'que chega do outro lado da mesa.',
    weight:
      'Muito baixo como evidência. O modelo é de 1928 e ficou trinta anos sem instrumento; hoje ' +
      'são dezenas de instrumentos sem norma comum; a ponte com o MBTI repousa sobre um único ' +
      'estudo de 130 pessoas, num só país, numa só faixa etária — e esse estudo contraria o ' +
      'mapeamento popular no ponto principal. Use como linguagem compartilhada num time. Não use ' +
      'para selecionar, promover ou explicar alguém a si mesmo.',
  },
};
