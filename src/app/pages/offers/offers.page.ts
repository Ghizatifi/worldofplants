import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service'; 
import { FetchService } from 'src/app/services/fetch.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  products = []
  constructor(
    public config:ConfigService , 
    public fetch:FetchService ) { }

  ngOnInit() {
    this.get_products()
  }


  get_products(){
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('offers', headers)
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
      console.log("pr ",res.data)
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
