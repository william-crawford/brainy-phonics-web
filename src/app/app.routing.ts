import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {AlphabetLearnComponent} from './pages/alphabet-learn/alphabet-learn.component';
import {AlphabetQuizComponent} from './pages/alphabet-quiz';
import {PhonemeLearnComponent} from './pages/phoneme-learn';
import {PhonemeQuizComponent} from './pages/phoneme-quiz';
import {ListSelectComponent} from './pages/list-select/list-select.component';
import {GradeLevelsComponent} from './pages/grade-levels';
import {CoinsComponent} from './pages/coins/coins.component';
import {PuzzlesComponent} from './pages/puzzles/puzzles.component';
import {PuzzleComponent} from './pages/puzzle/puzzle.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'phoneme-categories', component: PhonemeCategoriesComponent},
    {path: 'alphabet-learn', component: AlphabetLearnComponent},
    {path: 'alphabet-quiz', component: AlphabetQuizComponent},
    {path: 'list-select', component: ListSelectComponent},
    {path: 'phoneme-learn', component: PhonemeLearnComponent},
    {path: 'phoneme-quiz', component: PhonemeQuizComponent},
    {path: 'grade-levels', component: GradeLevelsComponent},
    {path: 'coins', component: CoinsComponent},
    {path: 'puzzles', component: PuzzlesComponent},
    {path: 'puzzle', component: PuzzleComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
