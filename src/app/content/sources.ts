/**
 * The site's bibliography.
 *
 * Bibliographic data is language-neutral — an author and a year do not get
 * translated — so there is one registry rather than one per locale. Content
 * files cite entries by id; `SourceId` is derived from this object, so a typo in
 * a citation is a compile error and an unused work is visible here.
 *
 * `kind` matters as much as the citation itself. The site draws on several very
 * different kinds of authority, and blurring them is how a page ends up
 * claiming that "MBTI says" something that in fact comes from a commercial
 * questionnaire, a 2nd-century physician, or a self-selected online poll.
 */

export type SourceKind =
  /** Jung's own work. */
  | 'jung'
  /** Official MBTI instruments, manuals, and the publisher's own statements. */
  | 'mbti'
  /** Peer-reviewed academic psychology. */
  | 'academic'
  /** A named commercial or school-specific model (Keirsey, NERIS, Enneagram schools). */
  | 'model'
  /** Published criticism of the instruments. */
  | 'critique'
  /** Antiquity and its scholarship — historical context, not evidence. */
  | 'classical'
  /** Self-selected online polling. Describes who answered, never a base rate. */
  | 'survey'
  /** Health authorities and crisis services. */
  | 'clinical';

export interface Source {
  author: string;
  year: string;
  title: string;
  /** Publisher, or journal with volume and pages. */
  detail: string;
  kind: SourceKind;
}

export const SOURCES = {
  /* -- Jung ---------------------------------------------------------------- */

  'jung-1921': {
    author: 'Jung, C. G.',
    year: '1921',
    title: 'Psychologische Typen',
    detail: 'Rascher. Ed. inglesa: Psychological Types, Collected Works 6, Princeton UP, 1971',
    kind: 'jung',
  },
  'von-franz-1971': {
    author: 'von Franz, M.-L., & Hillman, J.',
    year: '1971',
    title: 'Lectures on Jung’s Typology',
    detail: 'Spring Publications',
    kind: 'jung',
  },

  /* -- Official MBTI ------------------------------------------------------- */

  'myers-1980-gifts': {
    author: 'Myers, I. B., & Myers, P. B.',
    year: '1980',
    title: 'Gifts Differing',
    detail:
      'Consulting Psychologists Press. O subtítulo “Understanding Personality Type” é da ' +
      'reedição Davies-Black de 1995',
    kind: 'mbti',
  },
  'myers-1998-manual': {
    author: 'Myers, I. B., McCaulley, M. H., Quenk, N. L., & Hammer, A. L.',
    year: '1998',
    title: 'MBTI Manual: A Guide to the Development and Use of the Myers-Briggs Type Indicator',
    detail: '3ª ed., Consulting Psychologists Press. Amostra nacional representativa, N = 3.009',
    kind: 'mbti',
  },
  'quenk-1993-beside': {
    author: 'Quenk, N. L.',
    year: '1993',
    title: 'Beside Ourselves: Our Hidden Personality in Everyday Life',
    detail: 'Consulting Psychologists Press',
    kind: 'mbti',
  },
  'quenk-2002-grip': {
    author: 'Quenk, N. L.',
    year: '2002',
    title: 'Was That Really Me? How Everyday Stress Brings Out Our Hidden Personality',
    detail: 'Davies-Black',
    kind: 'mbti',
  },
  'mbf-basics': {
    author: 'The Myers & Briggs Foundation',
    year: 's.d.',
    title: 'Myers-Briggs® Overview',
    detail: 'myersbriggs.org, acesso em 2026. Página antes intitulada “MBTI® Basics”',
    kind: 'mbti',
  },
  'mbf-type-dynamics': {
    author: 'The Myers & Briggs Foundation',
    year: 's.d.',
    title: 'The Processes of Type Dynamics',
    detail: 'myersbriggs.org, acesso em 2026',
    kind: 'mbti',
  },
  'mbf-ethics': {
    author: 'The Myers & Briggs Foundation',
    year: 's.d.',
    title: 'Ethical Use of the MBTI® Assessment · All Types are Equally Valuable',
    detail: 'myersbriggs.org, acesso em 2026. Duas páginas distintas',
    kind: 'mbti',
  },
  'mbtionline-2024': {
    author: 'The Myers-Briggs Company',
    year: '2017',
    title: 'What is the least common Myers-Briggs personality type?',
    detail:
      'mbtionline.com, publicado em 7 ago. 2017. INTJ: 2,1% do total; 3,3% dos homens; ' +
      '0,8% das mulheres (EUA). Amostra composta e autosselecionada, não probabilística',
    kind: 'mbti',
  },
  'myers-briggs-company': {
    author: 'The Myers-Briggs Company',
    year: 's.d.',
    title: 'The MBTI assessment (themyersbriggs.com)',
    detail:
      'Empresa que publica e licencia o instrumento, distinta da Myers & Briggs Foundation, ' +
      'que zela pelo uso ético',
    kind: 'mbti',
  },
  'capt-2003': {
    author: 'Center for Applications of Psychological Type',
    year: 's.d.',
    title: 'Estimated Frequencies of the Types in the United States Population',
    detail:
      'CAPT. Compilação 1972–2002, apenas EUA. Publica faixas, não estimativas pontuais ' +
      '(INTJ 2–4% do total; 2–6% dos homens; 1–3% das mulheres). Operação e marcas do CAPT ' +
      'passaram à Myers & Briggs Foundation em 2023; capt.org redireciona para myersbriggs.org',
    kind: 'mbti',
  },
  'mmtic-1987': {
    author: 'Meisgeier, C., & Murphy, E.',
    year: '1987',
    title: 'Murphy-Meisgeier Type Indicator for Children (MMTIC): Manual',
    detail:
      'Consulting Psychologists Press. Instrumento separado da linha MBTI. A 2ª ed. (Murphy & ' +
      'Meisgeier, 2008, pelo CAPT) cobre dos 7 aos 18 anos; a versão corrente é a de 2016, ' +
      'hoje publicada pela Myers & Briggs Foundation',
    kind: 'mbti',
  },
  'saunders-1991': {
    author: 'Saunders, F. W.',
    year: '1991',
    title: 'Katharine and Isabel: Mother’s Light, Daughter’s Journey',
    detail: 'Consulting Psychologists Press',
    kind: 'mbti',
  },

  /* -- Peer-reviewed ------------------------------------------------------- */

  'mccrae-costa-1989': {
    author: 'McCrae, R. R., & Costa, P. T.',
    year: '1989',
    title:
      'Reinterpreting the Myers-Briggs Type Indicator from the perspective of the ' +
      'five-factor model of personality',
    detail: 'Journal of Personality, 57(1), 17–40. N = 468',
    kind: 'academic',
  },
  'costa-mccrae-1992': {
    author: 'Costa, P. T., & McCrae, R. R.',
    year: '1992',
    title:
      'Revised NEO Personality Inventory (NEO PI-R) and NEO Five-Factor Inventory (NEO-FFI) ' +
      'Professional Manual',
    detail: 'Psychological Assessment Resources, Odessa, FL',
    kind: 'academic',
  },
  'schurr-1988': {
    author: 'Schurr, K. T., Ruble, V. E., & Henriksen, L. W.',
    year: '1988',
    title:
      'Relationships of Myers-Briggs Type Indicator personality characteristics and ' +
      'self-reported academic problems and skill ratings with Scholastic Aptitude Test scores',
    detail: 'Educational and Psychological Measurement, 48(1), 187–196. N = 1.902',
    kind: 'academic',
  },
  'kaufman-1996': {
    author: 'Kaufman, A. S., McLean, J. E., & Lincoln, A.',
    year: '1996',
    title:
      'The relationship of the Myers-Briggs Type Indicator (MBTI) to IQ level and the fluid ' +
      'and crystallized IQ discrepancy on the Kaufman Adolescent and Adult Intelligence Test ' +
      '(KAIT)',
    detail: 'Assessment, 3(3), 225–239. DOI 10.1177/1073191196003003004. N = 1.297',
    kind: 'academic',
  },
  'maslach-2001-burnout': {
    author: 'Maslach, C., Schaufeli, W. B., & Leiter, M. P.',
    year: '2001',
    title: 'Job burnout',
    detail: 'Annual Review of Psychology, 52, 397–422',
    kind: 'academic',
  },
  'bianchi-2015': {
    author: 'Bianchi, R., Schonfeld, I. S., & Laurent, E.',
    year: '2015',
    title: 'Burnout–depression overlap: A review',
    detail: 'Clinical Psychology Review, 36, 28–41',
    kind: 'academic',
  },
  'beck-1985-hopelessness': {
    author: 'Beck, A. T., Steer, R. A., Kovacs, M., & Garrison, B.',
    year: '1985',
    title:
      'Hopelessness and eventual suicide: A 10-year prospective study of patients hospitalized ' +
      'with suicidal ideation',
    detail: 'American Journal of Psychiatry, 142(5), 559–563. Amostra de internação psiquiátrica',
    kind: 'academic',
  },
  'cuijpers-2020': {
    author: 'Cuijpers, P., Karyotaki, E., Eckshtain, D., et al.',
    year: '2020',
    title:
      'Psychotherapy for depression across different age groups: A systematic review and ' +
      'meta-analysis',
    detail: 'JAMA Psychiatry, 77(7), 694–702',
    kind: 'academic',
  },
  'davis-1983': {
    author: 'Davis, M. H.',
    year: '1983',
    title: 'Measuring individual differences in empathy: Evidence for a multidimensional approach',
    detail: 'Journal of Personality and Social Psychology, 44(1), 113–126',
    kind: 'academic',
  },
  'melchers-2016': {
    author: 'Melchers, M., Li, M., Haas, B. W., Reuter, M., Bischoff, L., & Montag, C.',
    year: '2016',
    title: 'Similar personality patterns are associated with empathy in four different countries',
    detail: 'Frontiers in Psychology, 7, 290',
    kind: 'academic',
  },
  'lieberman-2007': {
    author: 'Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., et al.',
    year: '2007',
    title:
      'Putting feelings into words: Affect labeling disrupts amygdala activity in response to ' +
      'affective stimuli',
    detail: 'Psychological Science, 18(5), 421–428',
    kind: 'academic',
  },
  'pennebaker-beall-1986': {
    author: 'Pennebaker, J. W., & Beall, S. K.',
    year: '1986',
    title: 'Confronting a traumatic event: Toward an understanding of inhibition and disease',
    detail: 'Journal of Abnormal Psychology, 95(3), 274–281',
    kind: 'academic',
  },
  'rebar-2015': {
    author: 'Rebar, A. L., Stanton, R., Geard, D., Short, C., Duncan, M. J., & Vandelanotte, C.',
    year: '2015',
    title:
      'A meta-meta-analysis of the effect of physical activity on depression and anxiety ' +
      'in non-clinical adult populations',
    detail: 'Health Psychology Review, 9(3), 366–378',
    kind: 'academic',
  },
  'dyrenforth-2010': {
    author: 'Dyrenforth, P. S., Kashy, D. A., Donnellan, M. B., & Lucas, R. E.',
    year: '2010',
    title:
      'Predicting relationship and life satisfaction from personality in nationally ' +
      'representative samples from three countries: The relative importance of actor, ' +
      'partner, and similarity effects',
    detail:
      'Journal of Personality and Social Psychology, 99(4), 690–702. 23.250 pessoas ' +
      '(≈ 11.600 casais casados) na Austrália, Reino Unido e Alemanha',
    kind: 'academic',
  },
  'montoya-2008-similarity': {
    author: 'Montoya, R. M., Horton, R. S., & Kirchner, J.',
    year: '2008',
    title:
      'Is actual similarity necessary for attraction? A meta-analysis of actual and ' +
      'perceived similarity',
    detail:
      'Journal of Social and Personal Relationships, 25(6), 889–922. DOI 10.1177/0265407508096700',
    kind: 'academic',
  },
  'montoya-horton-2013': {
    author: 'Montoya, R. M., & Horton, R. S.',
    year: '2013',
    title:
      'A meta-analytic investigation of the processes underlying the similarity-attraction effect',
    detail: 'Journal of Social and Personal Relationships, 30(1), 64–94',
    kind: 'academic',
  },
  'kong-2010-mbti-couples': {
    author: 'Kong, S. S.',
    year: '2010',
    title:
      'Relationships between MBTI psychological type and marital satisfaction, divorce ' +
      'proneness, positive affect, and conflict regulation in clinic couples',
    detail:
      'Journal of Korean Academy of Nursing, 40(3), 336–348. PMID 20634625; artigo em coreano. ' +
      '62 casais de clínica. Sem diferença significativa em satisfação conjugal, afeto positivo ' +
      'e regulação de conflito conforme a semelhança de tipo — mas com diferença significativa ' +
      'na propensão ao divórcio dos maridos conforme a semelhança no índice Sensação/Intuição',
    kind: 'academic',
  },
  'leikas-ilmarinen-2017': {
    author: 'Leikas, S., & Ilmarinen, V.-J.',
    year: '2017',
    title:
      'Happy now, tired later? Extraverted and conscientious behavior are related to immediate ' +
      'mood gains, but to later fatigue',
    detail:
      'Journal of Personality, 85(5), 603–615. Experiência momentânea, 48 participantes, ' +
      '2.328 observações; efeito não moderado pelo traço extroversão',
    kind: 'academic',
  },
  'holt-lunstad-2010': {
    author: 'Holt-Lunstad, J., Smith, T. B., & Layton, J. B.',
    year: '2010',
    title: 'Social relationships and mortality risk: A meta-analytic review',
    detail: 'PLoS Medicine, 7(7), e1000316',
    kind: 'academic',
  },
  'baumeister-leary-1995': {
    author: 'Baumeister, R. F., & Leary, M. R.',
    year: '1995',
    title:
      'The need to belong: Desire for interpersonal attachments as a fundamental ' +
      'human motivation',
    detail: 'Psychological Bulletin, 117(3), 497–529',
    kind: 'academic',
  },
  'deci-ryan-2000': {
    author: 'Deci, E. L., & Ryan, R. M.',
    year: '2000',
    title:
      'The “what” and “why” of goal pursuits: Human needs and the self-determination of behavior',
    detail: 'Psychological Inquiry, 11(4), 227–268',
    kind: 'academic',
  },
  'roberts-2007': {
    author: 'Roberts, B. W., Kuncel, N. R., Shiner, R., Caspi, A., & Goldberg, L. R.',
    year: '2007',
    title:
      'The power of personality: The comparative validity of personality traits, ' +
      'socioeconomic status, and cognitive ability for predicting important life outcomes',
    detail: 'Perspectives on Psychological Science, 2(4), 313–345',
    kind: 'academic',
  },
  'jang-1996-heritability': {
    author: 'Jang, K. L., Livesley, W. J., & Vernon, P. A.',
    year: '1996',
    title: 'Heritability of the Big Five personality dimensions and their facets: A twin study',
    detail:
      'Journal of Personality, 64(3), 577–591. 123 pares MZ, 127 DZ; ' +
      'herdabilidade 41/53/61/41/44% para N, E, O, A, C',
    kind: 'academic',
  },
  'nunnally-bernstein-1994': {
    author: 'Nunnally, J. C., & Bernstein, I. H.',
    year: '1994',
    title: 'Psychometric Theory',
    detail: '3ª ed., McGraw-Hill',
    kind: 'academic',
  },
  'aera-2014-standards': {
    author: 'AERA, APA & NCME',
    year: '2014',
    title: 'Standards for Educational and Psychological Testing',
    detail: 'American Educational Research Association',
    kind: 'academic',
  },
  'kim-2025-mbti-disc': {
    author: 'Kim, D., Lee, D. H., & Hwang, M. K.',
    year: '2025',
    title:
      'A comprehensive profiling system integrating Myers-Briggs Type Indicator (MBTI) and ' +
      'Dominance, Influence, Steadiness, and Conscientiousness (DISC) for personalized health ' +
      'training: Correlational analysis and usability evaluation',
    detail: 'JMIR Human Factors, 12, e73397. DOI 10.2196/73397. PMID 40686278. N = 130',
    kind: 'academic',
  },
  'wundt-1874': {
    author: 'Wundt, W.',
    year: '1874',
    title: 'Grundzüge der physiologischen Psychologie',
    detail: 'Wilhelm Engelmann',
    kind: 'academic',
  },
  'eysenck-eysenck-1985': {
    author: 'Eysenck, H. J., & Eysenck, M. W.',
    year: '1985',
    title: 'Personality and Individual Differences: A Natural Science Approach',
    detail: 'Plenum Press',
    kind: 'academic',
  },
  'virchow-1858': {
    author: 'Virchow, R.',
    year: '1858',
    title:
      'Die Cellularpathologie in ihrer Begründung auf physiologische und pathologische ' +
      'Gewebelehre',
    detail: 'August Hirschwald',
    kind: 'academic',
  },
  'kagan-1994': {
    author: 'Kagan, J.',
    year: '1994',
    title: 'Galen’s Prophecy: Temperament in Human Nature',
    detail: 'Basic Books',
    kind: 'academic',
  },
  'rothbart-2011': {
    author: 'Rothbart, M. K.',
    year: '2011',
    title: 'Becoming Who We Are: Temperament and Personality in Development',
    detail: 'Guilford Press',
    kind: 'academic',
  },

  /* -- Named models -------------------------------------------------------- */

  'marston-1928': {
    author: 'Marston, W. M.',
    year: '1928',
    title: 'Emotions of Normal People',
    detail:
      'Kegan Paul, Trench, Trubner & Co. / Harcourt, Brace. Monografia sem estudo, amostra ' +
      'ou dado próprio; Marston nunca construiu um instrumento',
    kind: 'model',
  },
  'grant-1983': {
    author: 'Grant, W. H., Thompson, M., & Clarke, T. E.',
    year: '1983',
    title: 'From Image to Likeness: A Jungian Path in the Gospel Journey',
    detail: 'Paulist Press',
    kind: 'model',
  },
  'keirsey-1998': {
    author: 'Keirsey, D.',
    year: '1998',
    title: 'Please Understand Me II: Temperament, Character, Intelligence',
    detail: 'Prometheus Nemesis',
    kind: 'model',
  },
  'keirsey-bates-1978': {
    author: 'Keirsey, D., & Bates, M.',
    year: '1978',
    title: 'Please Understand Me: An Essay on Temperament Styles',
    detail:
      'Prometheus Nemesis. O subtítulo “Character and Temperament Types” é das edições a ' +
      'partir de 1984',
    kind: 'model',
  },
  'neris-our-theory': {
    author: 'NERIS Analytics Ltd.',
    year: 's.d.',
    title: 'Our Framework',
    detail:
      '16personalities.com/articles/our-theory, acesso em 2026. Página antes intitulada ' +
      '“Our Theory”. Instrumento comercial, sem manual técnico, normas ou validação publicada',
    kind: 'model',
  },
  'riso-hudson-1999': {
    author: 'Riso, D. R., & Hudson, R.',
    year: '1999',
    title: 'The Wisdom of the Enneagram',
    detail: 'Bantam',
    kind: 'model',
  },
  'riso-hudson-1996': {
    author: 'Riso, D. R., & Hudson, R.',
    year: '1996',
    title: 'Personality Types: Using the Enneagram for Self-Discovery',
    detail: 'ed. revista, Houghton Mifflin',
    kind: 'model',
  },
  'naranjo-1994': {
    author: 'Naranjo, C.',
    year: '1994',
    title: 'Character and Neurosis: An Integrative View',
    detail: 'Gateways/IDHHB',
    kind: 'model',
  },
  'chestnut-2013': {
    author: 'Chestnut, B.',
    year: '2013',
    title: 'The Complete Enneagram: 27 Paths to Greater Self-Knowledge',
    detail: 'She Writes Press',
    kind: 'model',
  },
  'fauvre-instincts': {
    author: 'Fauvre, K. C.',
    year: 's.d.',
    title: 'Instinctual Type and Subtype Origins',
    detail: 'katherinefauvre.com',
    kind: 'model',
  },
  'fauvre-tritype': {
    author: 'Fauvre, K. C.',
    year: '1994–',
    title: 'What is Tritype®?',
    detail:
      'katherinefauvre.com/tritype. Marca registrada da autora: USPTO 6.474.587 (2021) e ' +
      '6.558.145 (2021)',
    kind: 'model',
  },
  'lahaye-1984': {
    author: 'LaHaye, T.',
    year: '1984',
    title: 'Why You Act the Way You Do',
    detail:
      'Tyndale House. Publicado em 1984 como Your Temperament: Discover Its Potential e ' +
      'retitulado na edição Living Books (1988). As doze combinações dominante/secundário',
    kind: 'model',
  },
  'littauer-1983': {
    author: 'Littauer, F.',
    year: '1983',
    title: 'Personality Plus',
    detail: 'Fleming H. Revell',
    kind: 'model',
  },
  'thomson-1998': {
    author: 'Thomson, L.',
    year: '1998',
    title: 'Personality Type: An Owner’s Manual',
    detail: 'Shambhala',
    kind: 'model',
  },
  'beebe-2017': {
    author: 'Beebe, J.',
    year: '2016',
    title: 'Energies and Patterns in Psychological Type: The Reservoir of Consciousness',
    detail: 'Routledge. DOI 10.4324/9781315685946',
    kind: 'model',
  },
  'augustinaviciute-1998': {
    author: 'Augustinavičiūtė, A.',
    year: '1998',
    title: 'Socionika: Vvedenie',
    detail: 'AST / Terra Fantastica. Obra escrita em Vilnius, anos 1970–80',
    kind: 'model',
  },
  'wikisocion-ili': {
    author: 'Wikisocion',
    year: '2021',
    title: 'Intuitive Logical Introtim (ILI) · Logical Intuitive Introtim (LII)',
    detail:
      'wikisocion.github.io. Arquivo estático de wikisocion.net, congelado num backup de ' +
      'março de 2021; o site original saiu do ar em agosto de 2021',
    kind: 'model',
  },
  'wikipedia-disc': {
    author: 'Wikipedia',
    year: '2026',
    title: 'DISC assessment',
    detail: 'en.wikipedia.org, acesso em ago. 2026',
    kind: 'model',
  },
  'wikipedia-socionics': {
    author: 'Wikipedia',
    year: '2026',
    title: 'Socionics',
    detail:
      'en.wikipedia.org, acesso em ago. 2026. O próprio artigo carrega aviso de que depende ' +
      'excessivamente de fontes ligadas ao tema',
    kind: 'model',
  },

  /* -- Classical ----------------------------------------------------------- */

  'hippocrates-c400bc': {
    author: 'Hipócrates (atrib. Pólibo de Cós)',
    year: 'c. 400 a.C.',
    title: 'De natura hominis',
    detail: 'Corpus Hippocraticum; Loeb Classical Library IV, Harvard UP, 1931',
    kind: 'classical',
  },
  'galen-c170': {
    author: 'Galeno',
    year: 'c. 170 d.C.',
    title: 'Mixtures (De temperamentis)',
    detail:
      'Em Galen: Works on Human Nature, vol. 1, ed. e trad. P. N. Singer & P. J. van der Eijk, ' +
      'com P. Tassinari, Cambridge Galen Translations, CUP, 2018. Nove misturas',
    kind: 'classical',
  },
  'klibansky-1964': {
    author: 'Klibansky, R., Panofsky, E., & Saxl, F.',
    year: '1964',
    title: 'Saturn and Melancholy: Studies in the History of Natural Philosophy, Religion and Art',
    detail:
      'Thomas Nelson (Londres) / Basic Books (Nova York); ed. aumentada, org. P. Despoix & ' +
      'G. Leroux, McGill-Queen’s UP, 2019 — não é reimpressão, e a paginação não corresponde',
    kind: 'classical',
  },

  /* -- Criticism ----------------------------------------------------------- */

  'pittenger-1993': {
    author: 'Pittenger, D. J.',
    year: '1993',
    title: 'The utility of the Myers-Briggs Type Indicator',
    detail: 'Review of Educational Research, 63(4), 467–488',
    kind: 'critique',
  },
  'pittenger-2005': {
    author: 'Pittenger, D. J.',
    year: '2005',
    title: 'Cautionary comments regarding the Myers-Briggs Type Indicator',
    detail: 'Consulting Psychology Journal: Practice and Research, 57(3), 210–221',
    kind: 'critique',
  },
  'reynierse-2009': {
    author: 'Reynierse, J. H.',
    year: '2009',
    title: 'The case against type dynamics',
    detail: 'Journal of Psychological Type, 69(1), 1–21',
    kind: 'critique',
  },
  'bess-harvey-2002': {
    author: 'Bess, T. L., & Harvey, R. J.',
    year: '2002',
    title: 'Bimodal score distributions and the Myers-Briggs Type Indicator: Fact or artifact?',
    detail: 'Journal of Personality Assessment, 78(1), 176–186. N ≈ 12.000',
    kind: 'critique',
  },
  'stein-swan-2019': {
    author: 'Stein, R., & Swan, A. B.',
    year: '2019',
    title:
      'Evaluating the validity of Myers-Briggs Type Indicator theory: A teaching tool and ' +
      'window into intuitive psychology',
    detail: 'Social and Personality Psychology Compass, 13(2), e12434. DOI 10.1111/spc3.12434',
    kind: 'critique',
  },
  'boyle-1995': {
    author: 'Boyle, G. J.',
    year: '1995',
    title: 'Myers-Briggs Type Indicator (MBTI): Some psychometric limitations',
    detail: 'Australian Psychologist, 30(1), 71–74',
    kind: 'critique',
  },
  'howes-carskadon-1979': {
    author: 'Howes, R. J., & Carskadon, T. G.',
    year: '1979',
    title:
      'Test-retest reliabilities of the Myers-Briggs Type Indicator as a function of mood changes',
    detail: 'Research in Psychological Type, 2, 67–72',
    kind: 'critique',
  },
  'hook-2021': {
    author: 'Hook, J. N., Hall, T. W., Davis, D. E., Van Tongeren, D. R., & Conner, M.',
    year: '2021',
    title:
      'The Enneagram: A systematic review of the literature and directions for future research',
    detail: 'Journal of Clinical Psychology, 77(4), 865–883',
    kind: 'critique',
  },
  'wagner-walker-1983': {
    author: 'Wagner, J. P., & Walker, R. E.',
    year: '1983',
    title: 'Reliability and validity study of a Sufi personality typology: The Enneagram',
    detail: 'Journal of Clinical Psychology, 39(5), 712–717. N = 390',
    kind: 'critique',
  },

  /* -- Surveys ------------------------------------------------------------- */

  'enneagram-personality-2026': {
    author: 'Enneagram Personality',
    year: '2026',
    title: 'MBTI & Enneagram Correlation: Data From 120,000 People',
    detail:
      'enneagram-personality.com. Amostra autosselecionada: 60.000 homens e 60.000 mulheres ' +
      'que responderam ao teste de eneagrama do próprio site; o tipo do eneagrama é a saída ' +
      'desse teste e a origem do tipo MBTI não é informada. Respostas ambíguas foram ' +
      'descartadas (tipo principal >6% acima do segundo), o que infla as correlações',
    kind: 'survey',
  },

  /* -- Clinical and institutional ------------------------------------------ */

  'who-2019-icd11-burnout': {
    author: 'Organização Mundial da Saúde',
    year: '2019',
    title: 'Burn-out an “occupational phenomenon”: International Classification of Diseases',
    detail:
      'Notícia da OMS, 28 mai. 2019, who.int. Fenômeno ocupacional (CID-11 QD85), ' +
      'explicitamente não classificado como condição médica',
    kind: 'clinical',
  },
  'who-2022-icd11-6b66': {
    author: 'Organização Mundial da Saúde',
    year: '2022',
    title:
      'ICD-11 for Mortality and Morbidity Statistics — 6B66 Depersonalization-derealization disorder',
    detail:
      'CID-11 (versão 2022-02), icd.who.int. Transtorno dissociativo; a tradução oficial em ' +
      'português só foi publicada em 2024',
    kind: 'clinical',
  },
  'apa-2022-dsm5tr': {
    author: 'American Psychiatric Association',
    year: '2022',
    title:
      'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision ' +
      '(DSM-5-TR)',
    detail: 'American Psychiatric Association Publishing, Washington DC',
    kind: 'clinical',
  },
  'who-2023-media': {
    author: 'Organização Mundial da Saúde',
    year: '2023',
    title: 'Preventing suicide: a resource for media professionals, update 2023',
    detail: 'OMS, Genebra, em parceria com a IASP. ISBN 978-92-4-007684-6',
    kind: 'clinical',
  },
  'cvv-2026': {
    author: 'Centro de Valorização da Vida',
    year: 's.d.',
    title: 'O CVV',
    detail:
      'cvv.org.br, acesso em 2026. Ligue 188, gratuito, 24 horas, em todo o Brasil. O chat ' +
      'é gratuito mas tem horário reduzido, e não funciona de madrugada',
    kind: 'clinical',
  },
  'ms-brasil-suicidio': {
    author: 'Ministério da Saúde (Brasil)',
    year: 's.d.',
    title: 'Suicídio (Prevenção)',
    detail: 'gov.br/saude, Saúde de A a Z, acesso em 2025. CVV 188, CAPS e UBS, SAMU 192',
    kind: 'clinical',
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

export const SOURCE_IDS = Object.keys(SOURCES) as SourceId[];

/**
 * How much weight each kind of authority carries, heaviest first. Drives the
 * ordering of a references block so peer-reviewed work is not buried under a
 * commercial model that happens to start with an earlier letter.
 */
const KIND_RANK: Record<SourceKind, number> = {
  academic: 0,
  clinical: 1,
  critique: 2,
  jung: 3,
  mbti: 4,
  model: 5,
  classical: 6,
  survey: 7,
};

/** Resolve, de-duplicate and order a set of citations for a references block. */
export function resolveSources(ids: readonly SourceId[]): (Source & { id: SourceId })[] {
  return [...new Set(ids)]
    .map((id) => ({ id, ...SOURCES[id] }))
    .sort(
      (a, b) =>
        KIND_RANK[a.kind] - KIND_RANK[b.kind] ||
        a.author.localeCompare(b.author) ||
        a.year.localeCompare(b.year),
    );
}
