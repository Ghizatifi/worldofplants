import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RatePage } from './rate.page';

import { StarRatingModule } from 'ionic4-star-rating';

import { TranslateModule } from '@ngx-translate/core';


 const routes: Routes = [
  {
    path: '',
    component: RatePage
  }
]; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule ,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  // entryComponents: [RatePage] ,
  declarations: [RatePage]
})
export class RatePageModule {}
