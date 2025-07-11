import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <h1>Test Playground</h1>
    <nav>
      <a [routerLink]="['/todo']" routerLinkActive="active">Todo</a>
      <a [routerLink]="['/fetch']" routerLinkActive="active">Fetch</a>
      <a routerLink="/template" routerLinkActive="active">Template Form</a>
      <a routerLink="/reactive" routerLinkActive="active">Reactive Form</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a {
        margin-left: 20px;
      }
    `,
  ],
})
export class App {}
