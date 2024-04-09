import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchService } from '../../services/fetch.service';
import { ConfigService } from '../../services/config.service';
import { HttpHeaders } from '@angular/common/http';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public orders:any = [];
  categories = [
    {
      id:0 ,
      name_en : 'Current' ,
      name_ar : 'الحالية' ,
      orders : []
    } ,
    {
      id:1 ,
      name_en : 'Completed' ,
      name_ar : 'المكتملة' ,
      orders : []
    } ,
    {
      id:2 ,
      name_en :  'Canceled' ,
      name_ar : 'الملغاة' ,
      orders : []
    } ,

  ]
  @ViewChild('slider', null) slider: IonSlides;
  public screen:any = 0;
  constructor(
    private fetch: FetchService,
    private config: ConfigService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.getOrders();
    this.screen = 0;
    this.slide(this.categories.length-1)
  }
  public sliderLoaded() {
    this.toggleSlider(true);
  }
  public async handleChange() {
    this.screen = await this.slider.getActiveIndex();
  }
  public slide(index) {
    console.log("Slide to:", index);
    this.toggleSlider(false);    
    this.slider.slideTo(index);
    this.toggleSlider(true);    
  }   

  public toggleSlider(condition:boolean) {
    this.slider.lockSwipeToNext(condition);
    this.slider.lockSwipeToPrev(condition);
  }

  public getOrders() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('auth/orders', headers)
    .then((data)=> {
      this.orders = data;

      if (data){
        this.categories[0].orders = this.orders.filter((order)=>  order.statusCode == 1 || order.statusCode == 2 || order.statusCode == 3)
        this.categories[1].orders = this.orders.filter((order)=>order.statusCode == 4 )
        this.categories[2].orders = this.orders.filter((order)=> order.statusCode == 0)
      }
    })
  }

  public orderTotal(order) {
    let total = 0;
    for (let item of order.items) {
      total+= item.product.price*item.quantity;
    }
    return total;
  }

  public orderProducts(order) {
    let names = "";
    for (let item of order.items) {
      names+= " ," + item.product.name;
    }
    return names;
  }

  public track(order_id) {
    this.navCtrl.navigateForward('order/' + order_id);
  }

}
