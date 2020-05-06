import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StorageServiceModule} from 'angular-webstorage-service';
import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {ModalComponent} from './components/modal/modal.component';
import {ModalService} from './services/modal.service';
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
    ModalComponent

  ],
  providers: [
    ModalService
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
