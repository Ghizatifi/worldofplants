import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { FetchService } from './fetch.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  terms = ""
  user:any
  all_plants = []
  all_sizes= []
  constructor(
    public loadingCtrl:LoadingController ,
    public fetch:FetchService , 
    public config:ConfigService , 

  ) { }

async get_plants(){
  if (this.all_plants.length>0)return;
  let header = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
  await this.fetch.get('plants', header)
  .then((res:any)=> {
    let data
    if(res){
      data = res.data
      this.all_plants = data.plants
      this.all_sizes = data.size
      this.terms = data.config.terms
      console.log("plants ",data)
    }else{
      this.fetch.errorToast()
      return
    }
  },err=>{console.log("ERR ",err)})
}

}
