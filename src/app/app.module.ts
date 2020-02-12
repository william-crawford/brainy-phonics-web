import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {PhonemeListAllComponent} from './pages/phoneme-list-all';
import {CardComponent} from './components/card/card.component';
import { PhonemeListVowelsComponent } from './pages/phoneme-list-vowels';
import { PhonemeListConsonantsComponent } from './pages/phoneme-list-consonants';
import { PhonemeListConsonantBlendsComponent } from './pages/phoneme-list-consonantblends';
import { PhonemeListVowelBlendsComponent } from './pages/phoneme-list-vowelblends';
import { PhonemeListVowelsConsonantsComponent } from './pages/phoneme-list-vowelsconsonants';
import { AlphabetListAllComponent } from './pages/alphabet-list-all/alphabet-list-all.component';
import { PhonemeLearnComponent } from './pages/phoneme-learn';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonemeCategoriesComponent,
    AlphabetListAllComponent,
    PhonemeListAllComponent,
    CardComponent,
    PhonemeListVowelsComponent,
    PhonemeListConsonantsComponent,
    PhonemeListConsonantBlendsComponent,
    PhonemeListVowelBlendsComponent,
    PhonemeListVowelsConsonantsComponent,
    PhonemeLearnComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
