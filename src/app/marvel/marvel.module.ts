import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ListComponent, 
    HomeComponent, 
    DescricaoComponent
  ],
  imports: [
    SharedModule, 
    BrowserModule, 
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  exports: [],
})
export class MarvelModule {}
