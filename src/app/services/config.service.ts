import { Injectable } from '@angular/core';
import { CartPage } from '../pages/cart/cart.page';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { FetchService } from './fetch.service';
import {  LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public plant_model = '';//the main url ex:https://slyd4r.github.io/plants/plant-detect/model
  public token;
  public role_id:number;
  public is_jordan = false //to ad
  public cart:any = [
    {
      image:'products/May2022/Ad0HYdX5FXBGlc0YiXMm.png',
      name:"na3na3",
      quantity:3 ,
      price:15.0 ,
      unit:'kl',
      id:1
    }
  ];
  favourite = []
  cart_store_id;
  
  public user:any = [];
  public all_user_data:any 
  public loading:any;
  public adding:boolean = false;
  public mapOpened:boolean = false;
  public pages:any = {};
  public units:any = []
  onesignal_key ='f091e835-6f9d-4a5e-84d2-6e8a250a4405'
  firebase_sender_id = '798851933722'

  device_id; ;
  lang = 'ar'
  constructor(
    private fetch: FetchService,
    private loadingCtrl: LoadingController ,
    public translate: TranslateService ,
    private utils: UtilsService
  ) {
    this.getCartFromStorage()
   }

  public getCartFromStorage(){
    let cart = localStorage.getItem('cart')
    this.cart_store_id = localStorage.getItem("cart_store_id")
    let fav = localStorage.getItem("fav")
    this.favourite = fav?JSON.parse(fav):[]
    // cart = "[]"
   this.cart = cart?JSON.parse(cart):[]
  }

  public saveCartToStorage(){
    localStorage.setItem('cart',JSON.stringify(this.cart))
    localStorage.setItem('cart_store_id',this.cart_store_id)
    localStorage.setItem('fav',JSON.stringify(this.favourite))
    let fav = localStorage.getItem("fav")
  }
  public getCartSize() {
    let timer = 0;
    for (let index in this.cart)
      timer+=this.cart[index].quantity;
    return timer
  }

  public getFavSize() {
    return this.favourite.length;
    
  }
  remove_item_fromCart(product){
    for(let index in this.cart){
      if(this.cart[index].id==product.id){
        
        this.cart.splice(index,1);
      }
    }
  }
  public async add_to_Cart(product , count=1){
    if(this.is_jordan==false){
    this.fetch.errorToast('لا يوجد توصيل لخارج الأردن')
    return
    }
    let found = false
     for(let item of this.cart){
      if (item.id== product.id){
        found = true
        item.quantity+=count
        
      this.fetch.errorToast("تم إضافة المنتج للسلة")
      }
    }
    if (!found){
      product.quantity = count
      this.cart.push(product)
      this.fetch.errorToast("تم إضافة المنتج للسلة")
    }

    this.saveCartToStorage()
  }
  public async remove_to_Cart(product){
    let index = 0
     for(let i=0;i<this.cart.length;i++ ){
      if (this.cart[i].id== product.id){
        this.cart[i].quantity-=1
        if(this.cart[i].quantity==0){
          this.cart.splice(i,1);
        }

      }
      if(this.cart.length==0)
      this.cart_store_id = null
    }
    this.saveCartToStorage()

  }

  public async switchFav(product){
    let index = 0
    if(this.favourite.length===0){
      this.favourite.push(product)
      this.saveCartToStorage()
      return
    }
    
    
     for(let i=0;i<this.favourite.length;i++ ){
       
      if (this.favourite[i].id === product.id){
        this.favourite.splice(i,1);
      }
      else if(i == this.favourite.length-1){
        console.log("last id ",i)
        this.favourite.push(product)
        this.saveCartToStorage()
        return
      }
    }
    this.saveCartToStorage()

    console.log("favourite ",this.favourite)
  }

  public async addItem(item_id, quantity, name) {

    // ifAdded
    let isItemExtis = this.getItemIndexFromId(item_id);
    if (!this.adding) {
      this.adding = true;
      if (isItemExtis) {

        // if delete
        if (quantity == '-' && isItemExtis.quantity == 1) {
          this.removeFromCart(isItemExtis.id, name)
        }
        else {
          this.updateItem(isItemExtis.id, 
            quantity == '+' ? isItemExtis.quantity + 1
            :
            isItemExtis.quantity - 1,
            name
            )
        }
      }
      else {
        if (quantity == '+')
        this.addToCart(item_id, 1, name);
      }
      this.loading = await this.loadingCtrl.create({
        message: "جاري تعديل السلة..."
      });
      // this.loading.present();
    }   
  }

  public removeFromCart(item_id, name) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let params = new HttpParams().set('item_id', item_id);
    this.fetch.post('auth/deleteItem', params, headers)
    .subscribe((data:any)=> {
      this.cart = data.items;
      this.showNotiToast(name, '-');
      // this.loading.dismiss();
      this.adding = false;
      // callback();
    }, error=> {
      // this.loading.dismiss();
      this.adding = false;
    })
    localStorage.setItem('cart',this.cart)

  }

  public updateItem(item_id, quantity, name) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let params = new HttpParams().set('item_id', item_id)
    .set('quantity', quantity);
    this.fetch.post('auth/updateItem', params, headers)
    .subscribe((data:any)=> {
      this.cart = data.items;
      this.showNotiToast(name, '+');
      // this.loading.dismiss();
      this.adding = false;
      // callback();
    }, error=> {
      // this.loading.dismiss();
      this.adding = false;
    })
  }

  public addToCart(product_id, quantity, name) {///not used in mohamed's code
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let params = new HttpParams().set('product_id', product_id)
    .set('quantity', quantity);
    this.fetch.post('auth/addItem', params, headers)
    .subscribe((data:any)=> {
      this.cart = data.items;
      this.showNotiToast(name, '+');
      // this.loading.dismiss();
      this.adding = false;
      // callback();
    }, error=> {
      // this.loading.dismiss();
      this.adding = false;
    })
  }



  public getItemIndexFromId(id) {
    for (let index in this.cart) {
      if (this.cart[index].product.id == id) return this.cart[index];
    }
  }

  public getItemQuaintyFromId(id) {
    for (let index in this.cart) {
      if (this.cart[index].id == id) return this.cart[index].quantity;
    }
    return 0;
  }

  public getItemFromFavourite(id) {
    for (let index in this.favourite) {
      if (this.favourite[index].id == id) return true;
    }
    return false;
  }

  emptyCart(){
    this.cart = []
    this.cart_store_id = null
    this.saveCartToStorage()
  }
  public async showNotiToast(productName, type) {
    let msg = '';
    if (type == '+')
    msg = "تم إضافة " + productName + " إلى السلة ";
    else
    msg = "تم إزالة " + productName + " من السلة "
    // msg += ' تحتوي السلة على:';
    let price = 0;
    for (let index in this.cart) {
      // msg += " ," + this.cart[index].product.name;
      price+=this.cart[index].product.price*this.cart[index].quantity;
    }
    msg += " المجموع: " + price + " JD"
    this.utils.toast(msg)
    this.adding = false;

  }

  getDefaultLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.lang = setLang;
    this.translate.use(setLang);
  }

  
  async translator(word) {
    var _word = await this.translate.get(word).toPromise()
    return _word;
  }
  translateWord(item){
    try {
      let translated = this.translate.currentLang!='en'?item.name:item.name_en
      return translated as String;
    } catch (error) {
      return 'undefined name'
    }
    

  }

  translateInstant(word){
    return this.translate.instant(word)
  }
  getConfig(){
    this.fetch.get("plants").then((res:any)=>{
      if(res.status)
      this.plant_model = res.data.config.plant_model
    
    })
  }
}
