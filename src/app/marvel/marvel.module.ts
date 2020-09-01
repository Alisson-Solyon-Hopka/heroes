import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DescricaoComponent } from './descricao/descricao.component';

@NgModule({
  declarations: [
    ListComponent,
    HomeComponent,
    DescricaoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ],
})
export class MarvelModule { }
