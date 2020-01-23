import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home';
import {PhonemeCategoriesComponent} from './pages/phoneme-categories';
import {PhonemeListAllComponent} from './pages/phoneme-list-all';
import {PhonemeListVowelsComponent} from './pages/phoneme-list-vowels';
import {PhonemeListConsonantsComponent} from './pages/phoneme-list-consonants';
import {PhonemeListConsonantBlendsComponent} from './pages/phoneme-list-consonantblends';
import {PhonemeListVowelBlendsComponent} from './pages/phoneme-list-vowelblends';
import {PhonemeListVowelsConsonantsComponent} from './pages/phoneme-list-vowelsconsonants';
import {AComponent} from './pages/phonemes/a';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'phoneme-categories', component: PhonemeCategoriesComponent },
    { path: 'phoneme-list-all', component: PhonemeListAllComponent },
    { path: 'phoneme-list-vowels', component: PhonemeListVowelsComponent},
    { path: 'phoneme-list-consonants', component: PhonemeListConsonantsComponent},
    { path: 'phoneme-list-consonantblends', component: PhonemeListConsonantBlendsComponent},
    { path: 'phoneme-list-vowelblends', component: PhonemeListVowelBlendsComponent},
    { path: 'phoneme-list-vowelsconsonants', component: PhonemeListVowelsConsonantsComponent},
    { path: 'a', component: AComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
