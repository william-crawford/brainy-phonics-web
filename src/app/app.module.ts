import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {ListComponent} from './pages/phoneme-list-all';
import {AComponent} from './pages/phonemes/a';

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
