import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../services/fetch.service';
import { ConfigService } from '../../services/config.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EditAddressPage } from '../edit-address/edit-address.page';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { Assets } from 'src/app/constants/constants';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  assets = Assets
  public couponText:any;
  public coupon:any;
  paymentSelected = true;
  public selectedAddress:any = [];
  public loading:boolean = false;
  public address:any;
  public city:any;
  public d_price:number;
  public usingCoupon:boolean = false;
  constructor(
    private fetch: FetchService,
    public config: ConfigService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    public utils: UtilsService
  ) { }

  ngOnInit() {
    this.getAddresses();
  }

  public async getAddresses() {
console.log(this.config);

    if(this.config.user.area){
      this.address = {
        area_id:this.config.user.area.id?this.config.user.area.id:this.config.user.area_id
      }
    }
    else  if(this.config.user.area_id){
      this.address = {
        area_id:this.config.user.area_id
      }
    }
    else{
      this.fetch.errorToast("عليك إضافة عنوان")
    }
    this.getDeliveryCost()
    
  }
  public async addAddress() {
    let modal = await this.modalCtrl.create({
      component: EditAddressPage,
    });
    modal.present();
    modal.onDidDismiss().then((data)=> {
      if (data) {
        this.getAddresses();
      }
    })
  }

  public async testCoupon() {
    this.usingCoupon= true;
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.post('auth/coupon/use/' + this.couponText, null, headers)
    .subscribe(async (coupon:any)=> {
      console.log("RES ",coupon)
      this.usingCoupon= false;
      if (coupon.id) {
        this.utils.toastTranslate("coupon_added")
        this.coupon = coupon;
      }
      else {
        this.couponText = "";
        this.utils.toast(coupon.error.toString())
      }
    },
    async (error)=> {
      console.log("ERRR ",error)
      this.usingCoupon= false;
      this.couponText = "";
      this.utils.toastTranslate("coupon_not_correct")
    })
  }


  public total() {
    let price = 0;
    for (let index in this.config.cart) {
      price+=this.config.cart[index].quantity*this.config.cart[index].total_price;
    }
    return price;
  }

  public discount() {
    if (this.coupon)
      if (this.coupon.value) return this.coupon.value
      else return (this.total()*this.coupon.discount)/100;
  }

  public all() {
    return (this.total()- (this.discount() ? this.discount() : 0) + (this.d_price ? Number(this.d_price) : 0))
    ;
  }

  public async deleteCoupon() {
    let alert = await this.alertCtrl.create({
      header: this.utils.translator("cancel_coupon"),
      message: this.utils.translator("are_you_sure_cancel_coupon"),
      buttons: [
        {
          role: "cancle",
          text: this.utils.translator("cancel"),
        },
        {
          role: "cancle",
          text: this.utils.translator("yes"),
          handler: ()=> {
            this.coupon = "";
          }
        }
      ]
    })
    alert.present();
  }

  public placeOrder() {
    if(!this.address || !this.config.user){
      this.fetch.errorToast("should_select_address")
      return
    }
    let date = new Date()
    let date_2 = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':00'
    


    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    let params = new FormData();
    params.append('area_id', this.config.user.area_id);
    params.append('address', this.config.user.address);
    params.append('coupon_id', this.coupon ? this.coupon.id : 0);
    
    params.append('delivery_date',date_2);
    params.append('d_price', this.d_price.toString());
   
    params.append('lan', this.config.user.lan);
    params.append('lat', this.config.user.lat);
    let i=0;
    let items = []
    for (let index in this.config.cart) {
      let item = {
        product_id:this.config.cart[index].id ,
        product : {id: this.config.cart[index].id },
        quantity : this.config.cart[index].quantity
      }
      console.log(JSON.stringify(item))
      params.append("items["+i+"]", JSON.stringify(item));
      
      i++;
    }
    //params.append("items", items.toString())//JSON.stringify(items));
    this.loading = true;
    
    this.fetch.post('auth/orders/place', params, headers)
    .subscribe(async (data:any)=> {
      console.log("success ",data)
      // console.log(data);
      this.loading = false;
    
      this.utils.toastTranslate("orded_created_success")
      this.config.emptyCart()
      this.navCtrl.navigateRoot('order-success');
    },err=>{
      this.loading = false;

      console.log("ERRRR ",err)})
  }

  public back() {
    this.navCtrl.back();
  }

   async getDeliveryCost(){
    console.log(this.address);
    
  //  this.utils.loadingPresent()
     let link = 'auth/area/cost/'+this.address.area_id
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get(link, headers)
    .then((res:any)=> {
      let data 
      console.log("RES ",res)
      this.utils.loadingDismiss()

      if(res.status){
        data = res.data
        this.d_price = data.cost
      }else{
        this.fetch.errorToast(res.msg)
        
        return
      }
    },err=>{
      this.utils.loadingDismiss()
    })
    
  }
}
