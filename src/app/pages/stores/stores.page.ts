import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { HttpHeaders } from '@angular/common/http';
import { FetchService } from 'src/app/services/fetch.service';
import { NavController, ActionSheetController, IonImg, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage{
  @ViewChild('imgEl',null) imgEl :ElementRef;
  sliderOne ;
  search_key = ''
  products = []
  top_ordered_products = []
  top_orderd
  categories = [
  ]
  noty_counts = 29;
  banners = []
  banner_images = []

  stores = [];
  slideOptsOne  = {
    freeMode : true ,
    initialSlide: 0,
   // slidesPerView: 1.5,
    autoplay: false,
    spaceBetween: 4
    
  };
  slideOpts  = {
    freeMode : true ,
    initialSlide: 0,
    // slidesPerView: 2,
    autoplay: false,
   // speed: 800,
    loop: true,
    
  };
  date :any = new Date()
  currentHour = 0
  
  imageEdited;
  imgPreview ;//= 'C:/Users/slyd4r/Downloads/pexels-jonas-kakaroto-736230.jpg';
  imgBlob;
  constructor(
    public config:ConfigService , 
    public fetch:FetchService ,
    private navCtrl:NavController ,
    public actionSheetCtrl:ActionSheetController ,
    public route:ActivatedRoute , public userService:UserService ,
    private modalCtr:ModalController
  )  { 
    
    this.currentHour = this.date.getHours()*60+this.date.getMinutes()
    console.log(this.date.getHours()*60)
    console.log(this.date.getMinutes())
  
  }
  ionViewDidEnter(){
    this.get_categories()
    this.get_products()
    this.get_top_ordered_products()
  }

  get_products(){
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      this.fetch.get('products', headers)
      .then((res:any)=> {
        let data 
        if(res.status){
          data = res.data
        }else{
          this.fetch.errorToast(res.msg)
        console.log("ERR ",res)
        this.products = []
        return

        }
        console.log(res.data)
        this.products= data
        for(let pro of this.products){
          pro.count = 1
        }
      }).catch(err=>{
        console.log("ERR ",err)
        this.fetch.errorToast();
      })
  }

  get_top_ordered_products(){
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('products/top-odered', headers)
    .then((res:any)=> {
      let data 
      if(res.status){
        data = res.data
      }else{
        this.fetch.errorToast(res.msg)
      console.log("ERR ",res)
      this.top_ordered_products = []
      return

      }
      console.log("pr ",res.data)
      this.top_ordered_products= data
      for(let pro of this.top_ordered_products){
        pro.count = 1
      }
    }).catch(err=>{
      console.log("ERR ",err)
      this.fetch.errorToast();
    })
}

  
  get_categories(){
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('product/categories', headers)
    .then((res:any)=> {
      let data 
      if(res.status){
        data = res.data

      }else{
        this.fetch.errorToast(res.msg)
      return

      }
     // let x = '';
     // for(let d of data){
     //   d.image = d.image.split('\\').join('/')
        // d.image = d.image.replace("\\" , "/")
    //  }
      this.categories = data
      console.log(data)
    }).catch(err=>{
      console.log("ERR ",err)
      this.fetch.errorToast();
    })
}

  search(){
    console.log("Search ",this.search_key)
    this.navCtrl.navigateForward(['products'] , {queryParams:{search:this.search_key}});
  }

  showAllCategories(){
    this.navCtrl.navigateForward(['categories']);
  }
  showTopOrdered(){
    this.navCtrl.navigateForward(['products'] , {queryParams:{search:this.config.translate.instant("top_ordered") , top_ordered:true}});
  }

  showRecentProducts(){
    this.navCtrl.navigateForward(['products'] , {queryParams:{search:this.config.translate.instant("new_products") , recent:true}});
  }

  showCategoryProducts(cat){
    console.log("cat is ",cat)
    this.navCtrl.navigateForward(['products'] , {queryParams:{name:this.config.lang=='en' ? cat.name_en :cat.name , id : cat.id}});
  }
}

