import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ConfigService } from '../../services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { ProductPage } from '../product/product.page';
import { Assets } from 'src/app/constants/constants';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public coupon:string;
  public products:any = [

  ];
  pageName =''
  assets= Assets;
  constructor(
    private navCtrl: NavController,
    public config: ConfigService ,
    public fetch:FetchService ,
    private modalCtr:ModalController ,
    private utils: UtilsService
  ) { 
    console.log(config.cart)
  }

  async ngOnInit() {
    this.pageName = this.utils.translator('cart')
  }

  public goToCheckOut() {
    this.navCtrl.navigateForward('checkout');
  }

  public haveMoreThanOneItem() {
    return Object.keys(this.config.cart).length > 0
  }
 
  total(){
    let total = 0
    for (let item of this.config.cart){
      total+=(item.quantity*item.total_price)
    }
    return total

  }

  async openProduct(product){
    let modal = this.modalCtr.create({
      component:ProductPage , 
      componentProps :{
        "product": JSON.stringify(product),
        "products": JSON.stringify(this.products),

      }
    }); 
    
    (await modal).onDidDismiss().then((data:any)=>{
      //this.navCtrl.pop()
    })
    
    return (await modal).present();
  }

}
