import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PhonemeCategoriesComponent } from './phoneme-categories';
import { ListComponent } from './phoneme-list-all';
import { AComponent } from './phonemes/a';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonemeCategoriesComponent,
    ListComponent,
    AComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
