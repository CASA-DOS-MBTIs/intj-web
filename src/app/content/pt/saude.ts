import type { SourceId } from '../sources';
import type { ArticlePageContent } from '../types';

export const SAUDE_PT: ArticlePageContent = {
  meta: {
    title: 'Saúde — o INTJ saudável e as condições em que ele funciona',
    description:
      'Como saber se você é um INTJ saudável, o que isso quer dizer em termos de tipo, e as ' +
      'condições em que esse motor trabalha bem — que são a mesma pergunta, feita duas vezes.',
  },

  sources: [
    'jung-1921',
    'myers-1980-gifts',
    'myers-1998-manual',
    'grant-1983',
    'riso-hudson-1999',
    'deci-ryan-2000',
    'roberts-2007',
    'quenk-2002-grip',
    'mbf-ethics',
    'rebar-2015',
    'lieberman-2007',
    'pittenger-2005',
    'mbf-type-dynamics',
    'aera-2014-standards',
    'cvv-2026',
    'who-2023-media',
    'ms-brasil-suicidio',
  ] satisfies SourceId[],

  header: {
    eyebrow: 'Página 14 — Saúde',
    title: 'Estar bem\ne funcionar bem',
    lede:
      'Você provavelmente chegou com uma das duas perguntas: <em>eu sou um INTJ saudável?</em> ou ' +
      '<em>como eu extraio o máximo desse tipo?</em> São a mesma pergunta. A segunda só parece ' +
      'mais interessante porque a primeira tem uma resposta que você já suspeita.',
  },

  intro:
    'Este site já tem uma página sobre desmoronar. Esta é a outra metade: como é quando ' +
    'funciona. Não “como ser feliz” — ninguém sabe, e quem diz que sabe está vendendo alguma ' +
    'coisa. Como reconhecer, de dentro, um motor <strong>Ni–Te</strong> rodando com folga; o que ' +
    'o desregula; e em que condições ele entrega sem se consumir no processo. As duas perguntas ' +
    'do parágrafo acima aparecem separadas na cabeça de quase todo mundo — e essa separação é ' +
    'exatamente o erro caro.',

  caveat:
    'Não existe medida de “INTJ saudável”. Nenhum instrumento de MBTI avalia maturidade, ' +
    'adaptação ou saúde mental: ele ordena preferências e para por aí, e a crítica psicométrica ' +
    'é dura até quanto a isso. O que esta página faz é costurar três materiais de pesos muito ' +
    'diferentes — a noção de desenvolvimento de tipo, que é teoria de Myers e da tradição que ' +
    'veio depois dela, inclusive do manual oficial, que descreve desenvolvimento sem oferecer ' +
    'qualquer escala que o meça; os Níveis de Desenvolvimento de Riso & Hudson, que são ' +
    'descrição clínica de uma escola do eneagrama, não instrumento validado; e um punhado de ' +
    'achados empíricos sobre necessidades psicológicas, movimento e nomeação de emoções, que ' +
    'valem para qualquer pessoa e nunca foram testados por tipo. Onde a costura entre eles é ' +
    'interpretação, a frase diz que é. Nada aqui diagnostica nada.',

  sections: [
    {
      eyebrow: 'A pergunta · e a que vem atrás dela',
      title: 'Você veio pela seção de performance',
      paragraphs: [
        'Existe uma versão bem provável desta visita: você rolou a página até achar “condições em ' +
          'que você trabalha bem”, leu aquilo, aplicou o que servia e ignorou o resto. Faz todo ' +
          'sentido — otimizar é o que você faz com tudo, sistema mal desenhado te incomoda ' +
          'fisicamente, e o sistema mal desenhado mais próximo do seu alcance costuma ser você ' +
          'mesmo. Querer extrair rendimento máximo do próprio funcionamento não é vaidade nem ' +
          'excentricidade: é Ni fechando uma versão melhor de você e Te querendo implementá-la ' +
          'esta semana. E isso descreve a forma exata em que a pergunta chega: como problema de ' +
          'engenharia, sobre uma máquina que por acaso é você.',
        'O problema não é a pergunta. É a ordem. Performance descolada de saúde funciona — por um ' +
          'tempo, e o tempo é sempre maior do que deveria ser, porque você aguenta muito. Depois ' +
          'cobra tudo de uma vez, e cobra pelo lado mais barato de invadir: você acorda cansado ' +
          'antes de começar, come em pé, para de conseguir imaginar o próximo ano — e chama isso ' +
          'de falta de disciplina. O INTJ raramente desaba de repente. Ele opera com rendimento ' +
          'decrescente por muito tempo antes de admitir que está operando mal, porque decrescente ' +
          'ainda é melhor que a média ao redor, e essa comparação é venenosa.',
        'A tese desta página é que as duas perguntas têm uma resposta só. Um INTJ saudável não é ' +
          'um INTJ que rende menos porque anda se cuidando; é a única configuração em que o motor ' +
          'entrega o que promete por mais de um ciclo. Você não precisa escolher entre estar bem ' +
          'e ser bom no que faz. Precisa parar de tratar as duas coisas como variáveis ' +
          'independentes.',
      ],
    },
    {
      eyebrow: 'Definição · e o que não é',
      title: 'Saudável não quer dizer mais extrovertido',
      paragraphs: [
        'A imagem popular de desenvolvimento é conversão: o INTJ saudável seria um INTJ mais ' +
          'sociável, mais caloroso, mais confortável numa mesa de doze pessoas. Isso não é ' +
          'desenvolvimento — é outro tipo. Ninguém melhora virando o oposto de si mesmo, e um ' +
          'INTJ que aprendeu a performar simpatia no happy hour da empresa não está mais ' +
          'saudável: está mais cansado, com uma habilidade nova e uma conta a pagar no domingo.',
        'Na leitura de Myers, desenvolver-se significa duas coisas bem específicas, e uma terceira ' +
          'mais tarde. Primeiro, a dominante se <em>diferencia</em>: você passa a distinguir o que ' +
          'é intuição sua do que é medo, expectativa alheia ou hábito antigo — Ni deixa de ser uma ' +
          'voz e vira um instrumento que você sabe operar. Segundo, a auxiliar se desenvolve de ' +
          'verdade, e desenvolvida não quer dizer barulhenta: Te maduro não é o reflexo de ' +
          'corrigir todo mundo, é o mecanismo que leva a visão até o mundo e a submete a um teste ' +
          'que ela pode perder. Ni sem Te maduro produz gente brilhante que nunca entregou nada e ' +
          'explica muito bem por quê.',
        'A terceira parte é a que quase todo texto trata como opcional, e não é: contato ' +
          'deliberado com a terciária e a inferior. Não domínio — contato. Fi que você consegue ' +
          'consultar <em>antes</em> de a decisão já estar tomada, em vez de descobrir três dias ' +
          'depois que estava contrariado desde o começo. Se que você visita de propósito, em vez ' +
          'de encontrar por acidente aos quarenta e cinco, num colapso. O esquema de idades que ' +
          'circula por aí — Ni na infância, Te até os vinte, Fi depois, Se por último — costuma ' +
          'ser creditado a Harold Grant e colegas, 1983, e as idades variam conforme a versão: a ' +
          'própria Myers & Briggs Foundation situa a terciária “por volta da meia-idade” e a ' +
          'inferior mais tarde ainda, sem prescrever faixas. A intuição de fundo é de Jung: a ' +
          'função inferior é assunto da segunda metade da vida. Nenhuma das versões foi ' +
          'verificada em coorte. Serve como mapa da direção. Não serve como cronograma que você ' +
          'esteja atrasado em cumprir, e se você leu aquilo e sentiu que estava atrasado, esse ' +
          'foi o Ni transformando um esquema em prazo.',
        'Do lado do eneagrama há uma descrição parecida por outro caminho: os Níveis de ' +
          'Desenvolvimento, nove degraus dentro de um mesmo tipo, do mais livre ao mais ' +
          'compulsivo. A escala é de Don Riso, que a formulou em 1977 e depois a desenvolveu com ' +
          'Russ Hudson, e ela corre dentro de um eneatipo — não dentro de uma sigla de quatro ' +
          'letras. A parte útil aqui não é a numeração: é a premissa, e a frase que vem a seguir ' +
          'é extrapolação desta página, não formulação deles. <strong>A distância entre a melhor ' +
          'e a pior versão de você é maior que a distância entre você e qualquer outro ' +
          'tipo.</strong> Do lado deles, o que existe é descrição clínica de uma escola do ' +
          'eneagrama, não escala medida: ninguém vai te aplicar um teste e devolver o seu nível. ' +
          'Mas a premissa se sustenta sozinha, e é a coisa mais libertadora que a tipologia ' +
          'inteira tem a dizer — o tipo é a estrutura, nunca a sentença.',
      ],
      points: [
        'Não é ser mais extrovertido — é depender menos de isolamento total para conseguir pensar.',
        'Não é ser mais gentil — é parar de usar franqueza como atalho para não precisar se ' +
          'importar com o efeito.',
        'Não é equilíbrio entre as quatro funções. Isso não existe, não é meta, e perseguir isso ' +
          'só produz culpa.',
        'Não é ausência de conflito interno — é conflito interno que você consegue nomear ' +
          'enquanto ele acontece.',
        'Não é produzir mais. Um INTJ em colapso costuma produzir bastante, e é por isso que ' +
          'ninguém percebe.',
      ],
    },
    {
      eyebrow: 'Sinais · quando está funcionando',
      title: 'Seis coisas que não parecem grande coisa',
      paragraphs: [
        'Saúde não se apresenta como euforia. Ela se apresenta como atrito reduzido: coisas que ' +
          'custavam caro passam a custar pouco, e você quase não nota, porque não houve evento — ' +
          'nada aconteceu, e é justamente esse o sinal. A lista abaixo é deliberadamente sem ' +
          'brilho, e não é escala: não conte itens, nem some pontos, porque não há nada aqui que ' +
          'meça você. Se boa parte dela descreve os seus últimos seis meses, o mais provável é ' +
          'que a sua autoavaliação esteja mais severa que os fatos. O INTJ é um avaliador injusto ' +
          'de si mesmo, e injusto sempre para o mesmo lado.',
        'De todos os itens abaixo, o segundo é o mais caro e o mais difícil de aceitar como sinal ' +
          'de saúde: conseguir dizer o que se sente <em>enquanto</em> se sente. Não é ritual nem ' +
          'sentimentalismo. Num estudo de neuroimagem, pôr em palavras a emoção estampada num ' +
          'rosto reduziu a resposta da amígdala em comparação com rotular o mesmo rosto por outro ' +
          'critério, o gênero — um único experimento, nada disso testado por tipo, e ainda assim ' +
          'o mais perto de uma explicação mecânica que existe para algo que muita gente já notou ' +
          'na prática. Para você o efeito é mais direto do que isso: Fi terciária é intensa e ' +
          'quase muda. Se você não der linguagem ao que sente, o corpo dá — em insônia, mandíbula ' +
          'travada e uma irritação difusa que você vai atribuir, com muita confiança e alguns ' +
          'argumentos bons, a outra pessoa.',
      ],
      points: [
        'Você muda de ideia quando o dado muda — e a mudança leva minutos, não três semanas de ' +
          'reorganização silenciosa do ego.',
        'Você consegue dizer o que sente enquanto está sentindo, ainda que mal: “estou irritado e ' +
          'não sei direito com o quê” já é a habilidade inteira funcionando.',
        'Você termina coisas imperfeitas. A versão 0.8 saiu. A versão perfeita continua existindo ' +
          'na sua cabeça, e agora tem companhia no mundo.',
        'Você não é a única pessoa que sabe no que você está trabalhando. Alguém sabe — e não foi ' +
          'preciso uma crise para você contar.',
        'Descanso acontece sem ter sido merecido. Você deita sem uma justificativa de ' +
          'produtividade pronta caso alguém pergunte, inclusive você.',
        'Suas certezas têm data. Você previu, anotou, voltou e conferiu — e algumas estavam ' +
          'erradas, e você sabe quais.',
      ],
    },
    {
      eyebrow: 'Sinais · quando não está',
      title: 'O cinismo chega antes da admissão',
      paragraphs: [
        'A falha do INTJ raramente se anuncia como sofrimento. Ela se anuncia como lucidez. Esse ' +
          'é o detalhe cruel do desenho: quando você está esgotado, o mundo não parece pior — ' +
          'parece <em>finalmente visto com clareza</em>. As pessoas parecem mais medíocres, os ' +
          'projetos mais fúteis, o esforço mais obviamente inútil. Nada disso soa como sintoma ' +
          'visto de dentro. Soa como conclusão, e você tem bons argumentos para ela.',
        'Daí a regra prática ser temporal, e não sobre conteúdo: não discuta a validade do ' +
          'pensamento — olhe a data em que ele apareceu. Se o desprezo é novo, a exaustão é mais ' +
          'velha que ele.',
      ],
      points: [
        'Loop Ni–Fi: análise que só se retroalimenta. Você revisa conversas de meses atrás ' +
          'procurando intenções, e cada revisão confirma a anterior. “Loop” é vocabulário de ' +
          'comunidade, não conceito do manual, mas descreve bem a câmara fechada — e a saída é ' +
          'dado de fora, nunca mais pensamento.',
        'Cinismo novo com gente que você respeitava, sem que nada tenha acontecido com essas ' +
          'pessoas.',
        'O plano cresce e nada sai. Cada semana acrescenta um requisito. Planejar virou o lugar ' +
          'onde dá para trabalhar sem se expor a errar.',
        'Desprezo usado como atalho: descartar alguém é mais rápido do que entender alguém, e ' +
          'você começou a fazer isso com pessoas de quem depende.',
        'O corpo aparece só como obstáculo. Fome é interrupção, sono é imposto, dor é bug. Você ' +
          'negocia com ele como quem negocia com um fornecedor ruim que não dá para trocar.',
        'Excessos súbitos e estranhos a você: comer, comprar, treinar, atravessar a madrugada em ' +
          'séries. Naomi Quenk descreveu esse padrão tipo a tipo como a tomada da função inferior ' +
          '— descrição clínica acumulada, não achado de laboratório, e ainda assim o melhor aviso ' +
          'prévio que você tem.',
      ],
    },
    {
      eyebrow: 'Motivação · autonomia, competência e vínculo',
      title: 'A terceira necessidade é a que você corta do plano',
      paragraphs: [
        'Deci e Ryan passaram décadas defendendo que motivação humana sustentável repousa sobre ' +
          'três necessidades psicológicas: <strong>autonomia</strong> — agir por escolha própria ' +
          '—, <strong>competência</strong> — sentir-se eficaz naquilo que faz — e ' +
          '<strong>vínculo</strong> — importar-se com alguém e importar para alguém. A teoria não ' +
          'foi escrita para tipologia nenhuma, tem literatura empírica extensa e tem críticos. É ' +
          'aqui que ela fica desconfortável, e convém dizer em que estatuto: nada em Deci e Ryan ' +
          'foi testado por tipo, e passar as três necessidades por um motor Ni–Te é costura desta ' +
          'página. Feita a ressalva, o mapa assenta neste tipo com uma limpeza que dá o que ' +
          'pensar — e os três parágrafos seguintes descrevem essa leitura, não um achado.',
        'As duas primeiras você defende com unhas. Autonomia não é preferência sua, é condição de ' +
          'operação — microgerenciamento não te aborrece, te desliga, e você provavelmente já ' +
          'pediu demissão, ou considerou seriamente, por causa de alguém olhando por cima do seu ' +
          'ombro, e não por causa de salário. Competência é onde mora a sua autoestima inteira, e ' +
          'é por isso que errar em público dói num registro completamente desproporcional ao ' +
          'tamanho do erro.',
        'A terceira você trata como opcional. Não por desprezo — por economia. Vínculo é caro, ' +
          'lento, imprevisível e não escala; num plano bem feito, é a primeira rubrica a cortar. ' +
          'E como ele não cobra na hora, o corte parece ter funcionado por muito tempo. O ' +
          'problema é o que vem depois: a falta de vínculo quase nunca se apresenta como solidão. ' +
          'Ela se apresenta como as outras duas falhando. Autonomia sem ninguém por perto vira ' +
          'deriva — liberdade completa e nenhuma direção que importe a alguém. Competência sem ' +
          'ninguém por perto vira esteira: você melhora, ninguém vê, e o próximo marco precisa ' +
          'ser maior para produzir a mesma sensação, que já está menor.',
        'A conclusão prática não é “socialize mais”, que você não vai fazer e nem deveria. É mais ' +
          'específica e mais suportável: você precisa de um número pequeno de pessoas que sabem o ' +
          'que você está fazendo de verdade e a quem você deve alguma coisa. Duas ou três. Não é ' +
          'rede de contatos, não é vida social — é testemunha. Sem testemunha, o Ni não tem ' +
          'contraprova e o Te não tem para quem entregar; e um sistema que só se avalia por dentro ' +
          'converge com uma confiança que não corresponde a nada.',
      ],
    },
    {
      eyebrow: 'Condições · a versão honesta de “maximizar performance”',
      title: 'Nada aqui promete resultado',
      paragraphs: [
        'Antes da lista, o aviso que pertence exatamente a esta seção, porque é aqui que a ' +
          'tentação mora. <strong>Tipo não prevê desempenho</strong> — e essa é conclusão desta ' +
          'página, não citação de ninguém. O que a própria Myers & Briggs Foundation diz é ' +
          'explícito e já basta: o instrumento não mede habilidade, competência nem perícia, não ' +
          'foi desenhado para selecionar pessoas, todos os tipos são igualmente valiosos e os ' +
          'resultados jamais devem ser usados para limitar alguém. Não existe carreira de INTJ, ' +
          'não existe teto de INTJ, e nenhuma das condições abaixo é promessa de resultado. São ' +
          'condições a arranjar, e o que elas mudam é o <em>custo</em> de trabalhar — não a ' +
          'qualidade do que você produz nem o seu valor como profissional.',
        'Se você quiser mesmo saber o que a psicologia da personalidade consegue prever sobre ' +
          'resultados de vida, a resposta existe e não é lisonjeira para siglas. Roberts e ' +
          'colegas revisaram estudos prospectivos e encontraram traços prevendo mortalidade, ' +
          'divórcio e realização ocupacional em magnitude comparável à do nível socioeconômico e ' +
          'à da habilidade cognitiva. E não é um traço só: conscienciosidade é o que aparece com ' +
          'mais constância, mas amabilidade, estabilidade emocional e emocionalidade positiva ' +
          'entram também, conforme o desfecho. São traços contínuos, sem relação com um código de ' +
          'quatro letras, e nenhum deles é “ser INTJ”. Aquela revisão mede o que os traços ' +
          'preveem, não o que os move: se dá para treiná-los, e quanto, é outra pergunta, e não é ' +
          'essa a que ela responde. E nada disso é o que você estava esperando ler.',
      ],
      points: [
        'Blocos longos e sem interrupção. Ni converge por acúmulo, e cada corte devolve o ' +
          'processo a um ponto anterior ao que você já tinha alcançado. Quatro horas contínuas e ' +
          'quatro horas picadas não rendem a mesma coisa. Quanto é essa diferença ninguém mediu, ' +
          'e aqui não vai número: o que se afirma é a direção.',
        'Um problema difícil em vez de cinco fáceis. Trabalho fragmentado te esgota mais do que ' +
          'trabalho pesado, e nenhuma métrica que conte tarefas fechadas vai registrar isso.',
        'Um resultado declarado, com o método deixado com você. Diga onde é para chegar e por que ' +
          'importa; o caminho é a parte que você faz melhor, e é a parte que você não entrega bem ' +
          'sob supervisão.',
        'Razão em vez de ordem. Você aceita autoridade competente com prazer — o que você não ' +
          'executa bem é uma instrução cuja lógica você não viu. Não é rebeldia: sem o porquê, ' +
          'você não consegue adaptar a ordem quando a realidade muda, e ela sempre muda.',
        'Crítica no trabalho, não na pessoa. “Esta abordagem tem um furo aqui” você absorve em ' +
          'segundos e agradece. “Você é difícil de trabalhar junto” você guarda por anos — e não ' +
          'por fragilidade: Fi não separa bem crítica de caráter de veredito sobre caráter.',
        'Prazo real em vez de urgência encenada. Urgência falsa gasta o crédito de confiança de ' +
          'quem a fabricou, e você não devolve esse crédito depois.',
      ],
    },
    {
      eyebrow: 'Manutenção · o que ninguém agenda',
      title: 'Se responde a pequeno e regular',
      paragraphs: [
        'Sono, movimento e comida não são o rodapé desta página. São o mecanismo pelo qual todo o ' +
          'resto acontece — e a razão de estarem perto do fim é que você teria pulado se ' +
          'estivessem no começo.',
        'A parte específica do tipo não é a negligência: é o formato dela. Você não ignora o corpo ' +
          'por descuido, ignora por hierarquia. O corpo é a última função da pilha, e o que a ' +
          'pilha põe por último não é o que você despreza — é o que você não <em>percebe</em>. ' +
          'Fome vira irritação antes de virar fome. Cansaço vira pessimismo estratégico antes de ' +
          'virar cansaço. Você reinterpreta estado fisiológico como conclusão sobre o mundo, e ' +
          'defende essa conclusão com argumentos bons, o que torna quase impossível alguém te ' +
          'convencer de que o problema era o almoço.',
        'A intervenção com melhor sustentação empírica aqui é o movimento: uma meta-meta-análise ' +
          'reunindo oito revisões de ensaios randomizados em população não clínica encontra ' +
          'efeito <em>médio</em> sobre sintomas de depressão e <em>pequeno</em> sobre ansiedade, ' +
          'sem heterogeneidade relevante entre as revisões. <em>Modesto</em> é a palavra honesta ' +
          '— não é tratamento, não substitui nada, e nada disso foi testado por tipo. Mas é o ' +
          'achado mais sólido desta página inteira, vale para gente que não estava doente, e é ' +
          'barato. Que dose e que intensidade produzem o efeito é exatamente o que essa revisão ' +
          'não responde, e quem afirmar o contrário está inventando a parte interessante.',
        'O que depende do tipo é a forma. A função inferior não se desenvolve por evento; ' +
          'desenvolve-se por repetição. E a tentação do INTJ é resolver o corpo do jeito que ' +
          'resolve tudo: um sistema completo, ambicioso, começando segunda — que é exatamente o ' +
          'formato que dura onze dias e produz mais uma evidência interna de que você é ' +
          'indisciplinado. Vinte minutos de caminhada cinco vezes por semana rende mais que duas ' +
          'horas de academia uma vez. Uma refeição por dia sem tela. Um horário de dormir que ' +
          'existe de fato. Isso é medíocre de propósito: o critério aqui não é o melhor protocolo ' +
          'possível, é o protocolo que sobrevive a uma semana ruim.',
      ],
      points: [
        'Ponha na agenda. Se está dentro do sistema, você cumpre; se depende de vontade na hora, ' +
          'compete com o trabalho e perde toda vez.',
        'Pequeno e frequente ganha de intenso e ocasional — para qualquer pessoa, e com margem ' +
          'maior para você.',
        'Trabalho manual conta: cozinhar, consertar, jardim, um instrumento. É Se sem a ' +
          'autoexigência de virar bom em Se.',
        'Nada disso precisa ser prazeroso no início para funcionar. Esperar gostar antes de ' +
          'começar é adiamento com roupa de critério.',
        'Encerre o dia com material ainda por fazer. Trabalhar até o esgotamento do assunto em ' +
          'vez do esgotamento do dia é o que transforma descanso em dívida.',
      ],
    },
    {
      eyebrow: 'Limite · quando não é mais tipologia',
      title: 'Uma página sobre tipo não alcança tudo',
      paragraphs: [
        'Esta página descreve tendências de um tipo. Há coisas que ela não alcança, e isso não ' +
          'merece vir em letra miúda.',
        'Se o que você reconheceu foi esgotamento e queda na inferior — o cansaço que vira ' +
          'cinismo, os excessos estranhos, a sensação de operar fora do próprio corpo —, a página ' +
          '<em>Luz & sombra</em> deste site trata disso com mais espaço. E se a apatia dura ' +
          'semanas, se a desesperança não cede a descanso nem a plano nenhum, então deixou de ser ' +
          'matéria de tipologia em qualquer versão: aí não falta análise, falta profissional. Se ' +
          'o assunto encosta na sua própria segurança, isso não espera a próxima página nem a ' +
          'próxima semana — no Brasil o CVV atende de graça no <strong>188</strong>, por ' +
          'telefone, 24 horas por dia (o chat em cvv.org.br também é gratuito, mas tem horário ' +
          'reduzido), e emergência é <strong>192</strong>. Fora do Brasil, findahelpline.com ' +
          'lista os serviços verificados de cada país. Procurar ajuda não é ' +
          'abandonar o sistema: é a única parte dele que você nunca instalou.',
      ],
    },
  ],

  closing: {
    title: 'O critério, se você quiser levar só um',
    text:
      'Você vai fechar esta página querendo uma métrica. Aqui vai a menos ruim que existe: ' +
      '<strong>pergunte-se se você ainda consegue mudar de ideia sobre coisas que importam.</strong> ' +
      'Não sobre táticas — sobre você, sobre pessoas, sobre o que vale o seu tempo. Um INTJ ' +
      'saudável é um sistema aberto: recebe informação nova e se reorganiza, às vezes com má ' +
      'vontade, mas recebe. Um INTJ em dificuldade é um sistema fechado que continua funcionando ' +
      'muito bem — com eficiência crescente, inclusive — na direção que decidiu há dois anos e ' +
      'não revisou desde então. A diferença não aparece na produtividade. Aparece na última vez ' +
      'em que alguém te disse algo que você não sabia e você mudou alguma coisa por causa disso.',
  },
};
