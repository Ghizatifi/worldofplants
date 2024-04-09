import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagePage } from './page.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: PagePage
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
  declarations: [PagePage]
})
export class PagePageModule {}
