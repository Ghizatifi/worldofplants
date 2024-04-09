import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubscribePage } from './subscribe.page';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SubscribePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [SubscribePage]
})
export class SubscribePageModule {}
