import { RouterModule, Routes } from '@angular/router';

import { LearnComponent } from 'src/app/components/learn/learn.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WordStructuresComponent } from './word-structures.component';

const routes: Routes = [
  {
    path: 'word-structures',
    component: WordStructuresComponent,
    children: [
      { path: '', component: MenuComponent },
      { path: 'learn', component: LearnComponent },
      { path: 'figures-of-speech', component: MenuComponent }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [WordStructuresComponent, MenuComponent, LearnComponent]
})
export class WordStructuresModule {}
