import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { PhonemeCategoriesComponent } from './phoneme-categories';
import { ListComponent } from './phoneme-list-all';
import { AComponent } from './phonemes/a';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'phoneme-categories', component: PhonemeCategoriesComponent },
    { path: 'phoneme-list-all', component: ListComponent },
    { path: 'a', component: AComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);