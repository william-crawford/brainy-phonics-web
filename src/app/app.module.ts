import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {ListComponent} from './pages/phoneme-list-all';
import {AComponent} from './pages/phonemes/a';
import { AlphabetListAllComponent } from './pages/alphabet-list-all/alphabet-list-all.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonemeCategoriesComponent,
    ListComponent,
    AComponent,
    AlphabetListAllComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
