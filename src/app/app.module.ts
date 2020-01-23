import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {PhonemeListAllComponent} from './pages/phoneme-list-all';
import {AComponent} from './pages/phonemes/a';
import {CardComponent} from './components/card/card.component';
import { PhonemeListVowelsComponent } from './pages/phoneme-list-vowels';
import { PhonemeListConsonantsComponent } from './pages/phoneme-list-consonants';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonemeCategoriesComponent,
    PhonemeListAllComponent,
    AComponent,
    CardComponent,
    PhonemeListVowelsComponent,
    PhonemeListConsonantsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
