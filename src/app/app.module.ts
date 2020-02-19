import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {CardComponent} from './components/card/card.component';
import {PhonemeLearnComponent} from './pages/phoneme-learn';
import {PhonemeQuizComponent} from './pages/phoneme-quiz';
import {AlphabetLearnComponent} from './pages/alphabet-learn/alphabet-learn.component';
import {ListSelectComponent} from './pages/list-select/list-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonemeCategoriesComponent,
    CardComponent,
    PhonemeLearnComponent,
    PhonemeQuizComponent,
    AlphabetLearnComponent,
    ListSelectComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
