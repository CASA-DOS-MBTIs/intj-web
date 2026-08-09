import { RenderMode, type ServerRoute } from '@angular/ssr';

/**
 * Everything is rendered at build time.
 *
 * GitHub Pages serves files, not processes, so request-time SSR is not on the
 * table — but the reason to want it is, and prerendering delivers that reason:
 * each route ships as a complete HTML document with its own title, description,
 * canonical and copy, so a crawler never has to execute JavaScript to find out
 * what the page says.
 *
 * The concrete paths come from the router config, which the builder walks; none
 * of this site's routes take parameters, so the discovered set is the whole
 * site in both languages.
 */
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
