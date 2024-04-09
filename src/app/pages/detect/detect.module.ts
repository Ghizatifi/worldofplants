import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetectPage } from './detect.page';
import { TipsPageModule } from '../tips/tips.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


const routes: Routes = [
  {
    path: '',
    component: DetectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxSliderModule ,
    RouterModule.forChild(routes) ,
    TranslateModule.forChild()
  ],
  declarations: [DetectPage]
})
export class DetectPageModule {}
