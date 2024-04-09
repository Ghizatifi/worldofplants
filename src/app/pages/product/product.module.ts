import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { StarRatingModule } from 'ionic4-star-rating';

const routes: Routes = [
  {
    path: '',
    component: ProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule, 
    StarRatingModule ,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [ProductPage ]
})
export class ProductPageModule {}
