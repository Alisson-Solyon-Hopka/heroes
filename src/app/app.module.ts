import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarvelModule } from './marvel/marvel.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarvelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
