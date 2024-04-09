import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { FetchService } from '../../services/fetch.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { RatePage } from '../rate/rate.page';
import { Assets } from 'src/app/constants/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  assets = Assets
  public order_id:string;
  public orderInfo:any;
  order_status = [
    {
      id: 1 ,
      name_ar: "تم استلام الطلب" ,
      name_en: "Order Active " ,
    },
    {
      id: 2,
      name_ar: "استلم المندوب الطلب",
      name_en: "Deliver Got the order" ,
    },{
      id: 3 ,
      name_ar: "الطلب في الطريق اليك" ,
      name_en: "Order On The Way" ,
    },
    {
      id: 4 ,
      name_ar: "تم  التوصيل" ,
      name_en: "Order Completed " ,
    }
  ]
  constructor(
    private route: ActivatedRoute,
    public fetch: FetchService,
    public config: ConfigService ,
    public modalCtrl:ModalController ,
    private popoverController:PopoverController ,
    public userService: UserService ,
    private navCtrl: NavController,
  ) { 
    console.log("USER ",this.config.role_id)
    console.log("user id  ",this.config.user)
  }

  ngOnInit() {
    this.order_id = this.route.snapshot.paramMap.get("id");
    this.getOrderInfo();
  }

  getOrderInfo() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('auth/order/track/'+this.order_id, headers)
    .then((res:any)=> {
      console.log("res ",res)
      let data
      if(res.status){
        data = res.data
      }else{
        this.fetch.errorToast()
        return
      }
      console.log("my ordes ",data)

      this.orderInfo = data;
    },err=>{console.log("ERROR ",err)})
  }


  public total() {
    let price :any = 0;
    for (let index in this.orderInfo.items) {
      price+=this.orderInfo.items[index].quantity*this.orderInfo.items[index].price;
    }
    return price.toFixed(1);
  }

  public discount() {
    if (this.orderInfo.coupon)
      if (this.orderInfo.coupon.value) return this.orderInfo.coupon.value
      else return ((this.total()*this.orderInfo.coupon.discount)/100).toFixed(1);
  }

  public all() {
    return ((this.total()- (this.discount() ? this.discount() : 0)) + (this.orderInfo.d_price ? this.orderInfo.d_price : 0)).toFixed(1)
    ;
  }

  async order_done(){
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.post('auth/order/complete/'+this.order_id,{}, headers)
    .subscribe((res:any)=> {
      console.log("res ",res)
      let data
      if(res.status){
        data = res.data
        this.check_rate()
      }else{
        this.fetch.errorToast()
        return
      }
      console.log("my ordes ",data)

      this.orderInfo = data;
    },err=>{console.log("ERROR ",err)})

  }
  

  goToMap(){
    
    this.navCtrl.navigateForward(['driver-map'] , {queryParams : this.orderInfo})
  }


  async check_rate(){
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('store/'+this.orderInfo.store_id+'/rate/'+this.order_id, headers)
    .then((res:any)=> {
      console.log("res ",res)
      let data
      if(res.status){

        data = res.data
      }else{
        this.ratePop()
        return
      }
      console.log("my ordes ",data)

      this.orderInfo = data;
    },err=>{
      console.log("ERROR ",err);
    this.ratePop()})
  }

  async ratePop(){
    let modal = this.popoverController.create({
      component:RatePage , 
      componentProps :{
        store_name:'Ali Store' ,
        img:'assets/imgs/logo.png',
      }
    });
    
    (await modal).onDidDismiss().then((data:any)=>{
      console.log('data ',data.data)
      
      if(data.data &&  data.data.comment && data.data.stars){
        this.rate(data.data.stars , data.data.comment)
      }
      else{
        this.goHome()
      }
    })

    return (await modal).present();
  }

  async rate(stars , comment){
    let payload = {
      rate:stars, comment:comment
    }
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.post('store/'+1+'/rate/add', payload, headers)//1 is the store id
    .subscribe((res:any)=> {
      this.fetch.errorToast("تم التقييم بنجاح")
      console.log("res ",res)
      let data
      if(res.status){
        data = res.data
        this.goHome()
      }else{
        this.goHome()
        //this.fetch.errorToast()
        //return
      }
      console.log("my ordes ",data)

      this.orderInfo = data;
    },err=>{
      console.log("ERROR ",err);
    this.ratePop()})
  }

  goHome(){
    this.navCtrl.navigateRoot("stores")
  }

  cancelOrder(){
    this.navCtrl.navigateForward(["cancel"] , {queryParams : {order_id : this.order_id}})
  }
}
