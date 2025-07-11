// app.routes.ts
import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo';
import { FetchComponent } from './fetch/fetch';
import { TemplateForm } from './forms/template-form/template-form';
import { ReactiveForm } from './forms/reactive-form/reactive-form';

export const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'template', component: TemplateForm },
  { path: 'reactive', component: ReactiveForm },
  // { path: '', redirectTo: 'todo', pathMatch: 'full' }, // default route
];
