import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { FetchService } from 'src/app/services/fetch.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController, NavController } from '@ionic/angular';
import { ProductPage } from '../product/product.page';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

 
  constructor(
    public notificationsService: NotificationsService,
    public fetch: FetchService,
    private iab: InAppBrowser,
    public navCtrl: NavController ,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.notificationsService.getNotifications()
    this.notificationsService.readAll();
  }

  open(noti){
    if(noti.link){
      this.iab.create(noti.link, "_system" )
    }
    else if(noti.product_id){
      this.openProduct({id:noti.product_id})
    }
    else if(noti.disease_id){
      this.openDisease(noti.disease_id)
    }
  }

  openDisease(id){
    this.navCtrl.navigateForward(['instruction-details'] , {queryParams:{disease_id:id}});
  }
  async openProduct(product){
    // this.navCtrl.navigateForward("produc")
    let modal = this.modalCtrl.create({
      component:ProductPage , 
      componentProps :{
        "product": JSON.stringify(product),
        // "products": JSON.stringify(this.products),

      }
    }); 
    
    (await modal).onDidDismiss().then((data:any)=>{
      //this.navCtrl.pop()
    })
    
    return (await modal).present();
  }
}
