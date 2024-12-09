import { Routes } from '@angular/router';
import { ListBookComponent } from './books/list/list-book.component';
import { FormBookComponent } from './books/form/form-book.component';

export const routes: Routes = [
  { path: 'livros', component: ListBookComponent },
  { path: 'livros/add', component: FormBookComponent },
  { path: 'livros/:id', component: FormBookComponent },
  { path: '', redirectTo: '/livros', pathMatch: 'full' },
];
