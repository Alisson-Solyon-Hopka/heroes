import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DescricaoComponent } from './descricao/descricao.component';

@NgModule({
  declarations: [ListComponent, HomeComponent, DescricaoComponent],
  imports: [SharedModule],
  exports: [],
})
export class MarvelModule {}
