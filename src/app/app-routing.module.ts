import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './marvel/list/list.component';
import { DescricaoComponent } from './marvel/descricao/descricao.component';
import { HomeComponent } from './marvel/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lista',
    component: ListComponent
  },
  {
    path: 'lista/:id',
    component: DescricaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
