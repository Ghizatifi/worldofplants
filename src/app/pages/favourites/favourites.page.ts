import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { ConfigService } from '../../services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { ProductPage } from '../product/product.page';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  constructor(
    
    public config: ConfigService ,
    public fetch:FetchService ,
    private modalCtr:ModalController

  ) { }

  ngOnInit() {
    this.config.favourite.forEach(l=>{
      l.count=1
    })
  }
  


  async openProduct(product){
    let modal = this.modalCtr.create({
      component:ProductPage , 
      componentProps :{
        "product": JSON.stringify(product),
        "products": JSON.stringify([]),

      }
    }); 
    
    (await modal).onDidDismiss().then((data:any)=>{
      //this.navCtrl.pop()
    })
    
    return (await modal).present();
  }

}
