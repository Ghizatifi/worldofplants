import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Assets } from 'src/app/constants/constants';
import { ProductPage } from 'src/app/pages/product/product.page';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { ImageLoaderConfigService } from 'ionic-image-loader-v5';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  assets = Assets;
  @Input() product: any;
  
  constructor( 
    public config: ConfigService ,
    public  fetch: FetchService ,
    public navCtrl: NavController,
    public modalCtr: ModalController,
  ) { 
  }

  ngOnInit() {
console.log(this.product);

    if(this.product.is_offer){
      if(this.product.old_price==null){ this.product.is_offer = false ;return;}
      try {
        this.product.offer =100*(1-parseFloat((parseFloat(this.product.profit)/parseFloat(this.product.old_price)).toFixed(1)))
      } catch (error) {
        this.product.offer = 0
      }
    }
  }

  imageError(event) {
    let img = event.srcElement.shadowRoot.children[0];
    img.src = '/assets/images/no-image.png';
   }

   async openProduct(){
    // this.navCtrl.navigateForward("produc")
    let modal = this.modalCtr.create({
      component:ProductPage , 
      componentProps :{
        "product": JSON.stringify(this.product),
        // "products": JSON.stringify(this.products),

      }
    }); 
    
    (await modal).onDidDismiss().then((data:any)=>{
      //this.navCtrl.pop()
    })
    
    return (await modal).present();
   }
}
