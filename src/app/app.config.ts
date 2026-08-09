import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Every route ships as prerendered HTML, so the browser adopts that markup
    // instead of throwing it away and re-rendering. `withEventReplay` keeps the
    // clicks that land in the gap — a reader who opens the Além do MBTI menu
    // before hydration finishes still gets the menu.
    provideClientHydration(withEventReplay()),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
    ),
  ],
};
