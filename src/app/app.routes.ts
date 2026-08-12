import type { Route, Routes } from '@angular/router';

import { LANGS, type Lang } from './content/types';

function pageRoutes(): Routes {
  return [
    {
      path: '',
      loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    },
    {
      path: 'mente',
      loadComponent: () => import('./pages/mente/mente').then((m) => m.Mente),
    },
    {
      path: 'luz-e-sombra',
      loadComponent: () => import('./pages/luz-e-sombra/luz-e-sombra').then((m) => m.LuzESombra),
    },
    {
      path: 'trabalho',
      loadComponent: () => import('./pages/trabalho/trabalho').then((m) => m.Trabalho),
    },
    {
      path: 'vinculos',
      loadComponent: () => import('./pages/vinculos/vinculos').then((m) => m.Vinculos),
    },
    {
      path: 'genero',
      loadComponent: () => import('./pages/genero/genero').then((m) => m.Genero),
    },
    {
      path: 'jornada',
      loadComponent: () => import('./pages/jornada/jornada').then((m) => m.Jornada),
    },
    {
      path: 'comparacoes',
      loadComponent: () => import('./pages/comparacoes/comparacoes').then((m) => m.Comparacoes),
    },
    {
      path: 'espelho',
      loadComponent: () => import('./pages/espelho/espelho').then((m) => m.Espelho),
    },
    {
      path: 'compatibilidade',
      loadComponent: () =>
        import('./pages/compatibilidade/compatibilidade').then((m) => m.Compatibilidade),
    },
    {
      path: 'amizades',
      loadComponent: () => import('./pages/amizades/amizades').then((m) => m.Amizades),
    },
    {
      path: 'familia',
      loadComponent: () => import('./pages/familia/familia').then((m) => m.Familia),
    },
    {
      path: 'infancia',
      loadComponent: () => import('./pages/infancia/infancia').then((m) => m.Infancia),
    },
    {
      path: 'saude',
      loadComponent: () => import('./pages/saude/saude').then((m) => m.Saude),
    },
    {
      path: 'glossario',
      loadComponent: () => import('./pages/glossario/glossario').then((m) => m.Glossario),
    },
    {
      path: 'para-quem-ama-um-intj',
      loadComponent: () => import('./pages/para-quem-ama/para-quem-ama').then((m) => m.ParaQuemAma),
    },
    {
      path: 'o-que-ninguem-te-diz',
      loadComponent: () =>
        import('./pages/o-que-ninguem-diz/o-que-ninguem-diz').then((m) => m.OQueNinguemDiz),
    },
    {
      path: 'contato',
      loadComponent: () => import('./pages/contato/contato').then((m) => m.Contato),
    },
    {
      path: 'privacidade',
      loadComponent: () => import('./pages/privacidade/privacidade').then((m) => m.Privacidade),
    },

    {
      path: 'alem-do-mbti',
      children: [
        {
          path: '',
          loadComponent: () =>
            import('./pages/alem-do-mbti/alem-do-mbti').then((m) => m.AlemDoMbti),
        },
        {
          path: 'combinacoes',
          loadComponent: () => import('./pages/combinacoes/combinacoes').then((m) => m.Combinacoes),
        },
        {
          path: 'eneagrama',
          loadComponent: () => import('./pages/eneagrama/eneagrama').then((m) => m.Eneagrama),
        },
        {
          path: 'tritipos',
          loadComponent: () => import('./pages/tritipos/tritipos').then((m) => m.Tritipos),
        },
        {
          path: 'subtipos',
          loadComponent: () => import('./pages/subtipos/subtipos').then((m) => m.Subtipos),
        },
        {
          path: 'temperamentos',
          loadComponent: () =>
            import('./pages/temperamentos/temperamentos').then((m) => m.Temperamentos),
        },
        {
          path: 'big-five',
          loadComponent: () => import('./pages/big-five/big-five').then((m) => m.BigFive),
        },
        {
          path: 'socionics',
          loadComponent: () => import('./pages/socionics/socionics').then((m) => m.Socionics),
        },
        {
          path: 'disc',
          loadComponent: () => import('./pages/disc/disc').then((m) => m.Disc),
        },
        {
          path: 'jung',
          loadComponent: () => import('./pages/jung/jung').then((m) => m.Jung),
        },
      ],
    },
  ];
}

function languageTree(lang: Lang): Route {
  return { path: lang, data: { lang }, children: pageRoutes() };
}

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/entry/entry').then((m) => m.Entry),
  },

  ...LANGS.map(languageTree),

  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
