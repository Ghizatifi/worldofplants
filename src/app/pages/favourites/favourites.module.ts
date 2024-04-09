import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavouritesPage } from './favourites.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../modules/shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: FavouritesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule.forChild() ,
    RouterModule.forChild(routes)
  ],
  declarations: [FavouritesPage]
})
export class FavouritesPageModule {}
