import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StorageServiceModule} from 'angular-webstorage-service';
import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {CardComponent} from './components/card/card.component';
import {PhonemeLearnComponent} from './pages/phoneme-learn';
import {PhonemeQuizComponent} from './pages/phoneme-quiz';
import {AlphabetLearnComponent} from './pages/alphabet-learn/alphabet-learn.component';
import {AlphabetQuizComponent} from './pages/alphabet-quiz';
import {ListSelectComponent} from './pages/list-select/list-select.component';
import {GradeLevelsComponent} from './pages/grade-levels';
import {CoinsComponent} from './pages/coins/coins.component';
import {PuzzlesComponent} from './pages/puzzles/puzzles.component';
import {PuzzleComponent} from './pages/puzzle/puzzle.component';
import {PrekCategoriesComponent} from './pages/prek-categories';
import {PrekSoundsDetailsComponent} from './pages/prek-categories/prek-sounds-details';
import {PrekNamesDetailsComponent} from './pages/prek-categories/prek-names-details';
import {SecondCategoriesComponent} from './pages/second-categories';
import {SecondVowelsDetailsComponent} from './pages/second-categories/second-vowels-details';
import {SecondConsonantsDetailsComponent} from './pages/second-categories/second-consonants-details';
import {SecondBlendsDetailsComponent} from './pages/second-categories/second-blends-details';
import {SecondDigraphsDetailsComponent} from './pages/second-categories/second-digraphs-details';
import { KCategoriesComponentComponent } from './kcategories-component/kcategories-component.component';
import { KSoundsDetailsComponentComponent } from './ksounds-details-component/ksounds-details-component.component';
import { KNamesDetailsComponentComponent } from './knames-details-component/knames-details-component.component';
import { KEndingSoundsDetailsConponentComponent } from './kending-sounds-details-conponent/kending-sounds-details-conponent.component';
import { KBeginningSoundsDetailsComponentComponent } from './kbeginning-sounds-details-component/kbeginning-sounds-details-component.component';
import { FirstCategoriesComponentComponent } from './first-categories-component/first-categories-component.component';
import { FirstVowelsDetailsComponentComponent } from './first-vowels-details-component/first-vowels-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonemeCategoriesComponent,
    CardComponent,
    PhonemeLearnComponent,
    PhonemeQuizComponent,
    AlphabetLearnComponent,
    AlphabetQuizComponent,
    ListSelectComponent,
    GradeLevelsComponent,
    CoinsComponent,
    PuzzlesComponent,
    PuzzleComponent,
    PrekCategoriesComponent,
    PrekSoundsDetailsComponent,
    PrekNamesDetailsComponent,
    SecondCategoriesComponent,
    SecondVowelsDetailsComponent,
    SecondConsonantsDetailsComponent,
    SecondBlendsDetailsComponent,
    SecondDigraphsDetailsComponent,
    KCategoriesComponentComponent,
    KSoundsDetailsComponentComponent,
    KNamesDetailsComponentComponent,
    KEndingSoundsDetailsConponentComponent,
    KBeginningSoundsDetailsComponentComponent,
    FirstCategoriesComponentComponent,
    FirstVowelsDetailsComponentComponent

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FlexLayoutModule,
    StorageServiceModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
