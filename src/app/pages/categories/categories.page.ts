import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories = []
  constructor(
    public config: ConfigService,
    public fetch: FetchService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    
    this.get_categories()
  }

  get_categories(){
    this.config.token = localStorage.getItem("token")
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
      let x = '';
      // for(let d of data){
      //   d.image = d.image.split('\\').join('/')
      //   // d.image = d.image.replace("\\" , "/")
      // }
      this.categories = data
      console.log("cats are ",data)
    }).catch(err=>{
      console.log("ERR ",err)
      this.fetch.errorToast();
    })
}

showCategoryProducts(cat){
  this.navCtrl.navigateForward(['products'] , {queryParams:{name:this.config.lang=='en' ? cat.name_en :cat.name , id : cat.id}});
}

}
