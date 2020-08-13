import { AlphabetLearnComponent } from './pages/alphabet-learn/alphabet-learn.component';
import { AlphabetQuizComponent } from './pages/alphabet-quiz';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { FirstCategoriesComponent } from './pages/first-categories/first-categories.component';
import { FirstConsonantsDetailsComponent } from './pages/first-categories/first-consonants-details/first-consonants-details.component';
import { FirstLettersDetailsComponent } from './pages/first-categories/first-letters-details/first-letters-details.component';
import { FirstVowelsDetailsComponent } from './pages/first-categories/first-vowels-details/first-vowels-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home';
import { HttpClientModule } from '@angular/common/http';
import { KBeginningSoundsDetailsComponent } from './pages/k-categories/k-beginning-sounds-details';
import { KCategoriesComponent } from './pages/k-categories';
import { KEndingSoundsDetailsComponent } from './pages/k-categories/k-ending-sounds-details';
import { KLettersDetailsComponent } from './pages/k-categories/k-letters-details';
import { ListSelectComponent } from './pages/list-select/list-select.component';
import { LoginComponent } from './pages/login';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { NobodysBetterComponent } from './pages/nobodys-better/nobodys-better.component';
import { PhonemeCategoriesComponent } from './pages/phoneme-categories';
import { PhonemeLearnComponent } from './pages/phoneme-learn';
import { PhonemeQuizComponent } from './pages/phoneme-quiz';
import { PrekCategoriesComponent } from './pages/prek-categories';
import { PuzzleComponent } from './pages/puzzle/puzzle.component';
import { PuzzlesComponent } from './pages/puzzles/puzzles.component';
import { SecondCategoriesComponent } from './pages/second-categories';
import { SecondConsonantsDetailsComponent } from './pages/second-categories/second-consonants-details';
import { SecondVowelsDetailsComponent } from './pages/second-categories/second-vowels-details';
import { SecretStuffComponent } from './pages/secret-stuff/secret-stuff.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ThirdCategoriesComponent } from './pages/third-categories';
import { ThirdConsonantsDetailsComponent } from './pages/third-categories/third-consonants-details';
import { ThirdVowelconsonantsDetailsComponent } from './pages/third-categories/third-vowelconsonants-details';
import { ThirdVowelsDetailsComponent } from './pages/third-categories/third-vowels-details';
import { WordStructuresComponent } from './pages/word-structures';
import { appRoutingModule } from './app.routing';

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
    CoinsComponent,
    PuzzlesComponent,
    PuzzleComponent,
    PrekCategoriesComponent,
    SecondCategoriesComponent,
    SecondVowelsDetailsComponent,
    SecondConsonantsDetailsComponent,
    ThirdCategoriesComponent,
    ThirdConsonantsDetailsComponent,
    ThirdVowelsDetailsComponent,
    ThirdVowelconsonantsDetailsComponent,
    KCategoriesComponent,
    KLettersDetailsComponent,
    KEndingSoundsDetailsComponent,
    KBeginningSoundsDetailsComponent,
    FirstCategoriesComponent,
    FirstLettersDetailsComponent,
    FirstConsonantsDetailsComponent,
    FirstVowelsDetailsComponent,
    NobodysBetterComponent,
    SecretStuffComponent,
    LoginComponent,
    WordStructuresComponent,
    MenuComponent
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
export class AppModule {}
