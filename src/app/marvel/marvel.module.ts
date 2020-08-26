import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DescricaoComponent } from './descricao/descricao.component';

@NgModule({
  declarations: [ListComponent, HomeComponent, DescricaoComponent],
  imports: [
    CommonModule
  ]
})
export class MarvelModule { }
