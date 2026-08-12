import { Component, input } from '@angular/core';

@Component({
  selector: 'app-site-logo',
  templateUrl: './site-logo.html',
  styleUrl: './site-logo.scss',
})
export class SiteLogo {
  readonly label = input<string>('');
}
