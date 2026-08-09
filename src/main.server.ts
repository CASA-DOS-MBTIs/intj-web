import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';

import { App } from './app/app';
import { config } from './app/app.config.server';

/**
 * The prerenderer calls this once per route. `context` carries the platform it
 * set up for that render — without forwarding it, bootstrap has no platform to
 * attach to and fails with NG0401.
 */
export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(App, config, context);
}
