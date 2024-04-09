import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from 'src/app/components/home-card/home-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Header2Component } from 'src/app/components/header2/header2.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImgComponent } from 'src/app/components/img/img.component';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';
import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

@NgModule({
  declarations: [HomeCardComponent , Header2Component , ProductCardComponent ,ImgComponent, SkeletonComponent   ],
  imports: [
    IonicImageLoaderModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  exports: [HomeCardComponent , Header2Component , ProductCardComponent ,ImgComponent, SkeletonComponent  ,IonicImageLoaderModule ]
})
export class SharedModule { }
