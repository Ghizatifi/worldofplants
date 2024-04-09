import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import { ConfigService } from 'src/app/services/config.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams, NavController ,IonContent} from '@ionic/angular';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Assets } from 'src/app/constants/constants';
import { HttpHeaders } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  assets = Assets ;
  @ViewChild(IonContent,  {static: false}) private content:IonContent;
  products = [];//refers to other produts
  products_filtered = [];//refers to other produts
  item;
  isModal = false
 
  product_id;
  loaded = false;
  extras = []
  slideOptsOne  = {
    freeMode : true ,
    initialSlide: 0,
    // slidesPerView: 1,
    autoplay: true,
    speed: 800 
    // spaceBetween: 5
  };

  
  constructor(
    public fetch:FetchService ,
    public config:ConfigService ,
    public route:ActivatedRoute , 
    public modalCtr:ModalController , 
    public navParams :NavParams  , 
    private navCtrl:NavController ,
    private sr: DomSanitizer,
    public utils: UtilsService
  ) { 
    let itm =  JSON.parse(this.navParams.get('product'));
    this.product_id = itm.id

    this.getProductDetails()
    
  }

  ngOnInit() {
    // this.openParams()
    
  }

  getProductDetails(){
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get("products/"+this.product_id, headers)
    .then((res:any)=> {

      if(res.status){
        if(res.data.images) res.data.images = JSON.parse(res.data.images)
        else res.data.images = []
        this.item = res.data
        
        if(this.item.image)
        this.item.images.push(this.item.image)
      if(this.item.irrigation_ar || this.item.irrigation_en){
        this.extras.push({icon:this.assets.humidity,title:this.utils.translator("irrigation") , body: this.config.lang=='ar'?this.item.irrigation_ar: this.item.irrigation_en })
      }
      if(this.item.light_ar || this.item.light_en){
      this.extras.push({icon:this.assets.sun,title:this.utils.translator("light") , body:  this.config.lang=='ar'?this.item.light_ar: this.item.light_en })
      }

      if(this.item.tempreture_ar || this.item.tempreture_en){
      this.extras.push({icon: this.assets.tempreture,title:this.utils.translator("tempreture") , body:  this.config.lang=='ar'?this.item.tempreture_ar: this.item.tempreture_en })
      }
      // console.log("products ",this.products)
      this.item = Object.assign({},this.item, {count:1})
      this.item = Object.assign({},this.item, {quantity:0})

      console.log("item is ",this.item)
      this.loaded=true;
      }else{
        this.fetch.errorToast(res.msg)

      }
    }).catch(err=>{
      console.log("ERR ",err)
      this.fetch.errorToast();
    })
  }

  public htmlProperty() :SafeHtml  {
    return this.sr.bypassSecurityTrustHtml(this.item.description);
 }

  async openParams(){
    

  }
  close(){
    this.modalCtr.dismiss();
  }

  count_minus(product){
    if (product.count==0)return;
    product.count-=1
  }
  count_plus(product){
    product.count+=1
  }

  async openProduct(product){
    this.content.scrollToTop()
    this.item = product
    this.products_filtered = this.products.filter((ord)=>ord.id!=product.id)
    return
    // this.navCtrl.navigateForward(['product'] , {queryParams:product})
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
