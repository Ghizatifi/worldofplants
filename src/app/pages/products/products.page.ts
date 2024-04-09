import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController, ModalController } from '@ionic/angular';
import { FetchService } from '../../services/fetch.service';
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../services/config.service';
import { NotificationsService } from '../../services/notifications.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ProductPage } from '../product/product.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage{

  @ViewChild('slider', null) slider: IonSlides;
  public screen  = 0;
  public categories:any = ["فواكه", "خضراوات", "أعشاب", "تمور", "سلطات"];
  public cats:any = [
    
  ];
category_id = null;
category_name = ''
dataLoaded = false
search;
products = [];
recent = false;
top_ordered = false

  constructor(
    private navCtrl: NavController,
    public fetch: FetchService,
    public config: ConfigService,
    public notificationsService: NotificationsService,
    public route:ActivatedRoute , public userService:UserService , 
    private modalCtr:ModalController
  ) {
   

  }

  ngOnInit() {
    this.route.queryParams.subscribe(res=>{
      if(res.search){
        this.search = res.search
        this.category_name = res.search
        this.recent = res.recent;
        this.top_ordered = res.top_ordered;
        if(!this.recent && !this.top_ordered) this.get_products()
        if(this.recent) this.get_recent_products()
        if(this.top_ordered) this.get_top_ordered()
        return
      }
      this.category_id =res.id
      this.category_name =res.name
      this.get_products()

    })
    
  }

  get_products(){
    let link = this.search?"product/search/"+this.search:'product/categories/'+this.category_id
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      this.fetch.get(link, headers)
      .then((res:any)=> {
        let data 
        console.log("Productr s , ",res)

        if(res.status){
          data = res.data
        }else{
          this.fetch.errorToast(res.msg)
        console.log("ERR ",res)
        this.products = []
        return

        }

        this.products= data
        for(let pro of this.products){
          pro.count = 1
        }
      }).catch(err=>{
        console.log("ERR ",err)
        this.fetch.errorToast();
      })
 
  
  
  }

  get_recent_products(){
    let link = 'products'
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      this.fetch.get(link, headers)
      .then((res:any)=> {
        let data 
        console.log("Productr s , ",res)

        if(res.status){
          data = res.data
        }else{
          this.fetch.errorToast(res.msg)
        console.log("ERR ",res)
        this.products = []
        return

        }

        this.products= data
        for(let pro of this.products){
          pro.count = 1
        }
      }).catch(err=>{
        console.log("ERR ",err)
        this.fetch.errorToast();
      })
 
  
  
  }

  get_top_ordered(){
    let link = 'products/top-odered'
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      this.fetch.get(link, headers)
      .then((res:any)=> {
        let data 
        console.log("Productr s , ",res)

        if(res.status){
          data = res.data
        }else{
          this.fetch.errorToast(res.msg)
        console.log("ERR ",res)
        this.products = []
        return

        }

        this.products= data
        for(let pro of this.products){
          pro.count = 1
        }
      }).catch(err=>{
        console.log("ERR ",err)
        this.fetch.errorToast();
      })
 
  
  
  }

}
