import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckoutPage } from './checkout.page';
import { KeysPipeModule } from '../../services/key.pipe.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    KeysPipeModule,
    TranslateModule.forChild()
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
