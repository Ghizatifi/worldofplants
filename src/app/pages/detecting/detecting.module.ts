import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetectingPage } from './detecting.page';

import { TranslateModule} from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: DetectingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    RouterModule.forChild(routes) ,
    TranslateModule.forChild()
  ],
  declarations: [DetectingPage]
})
export class DetectingPageModule {}
