import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Assets } from 'src/app/constants/constants';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-instruction-details',
  templateUrl: './instruction-details.page.html',
  styleUrls: ['./instruction-details.page.scss'],
})
export class InstructionDetailsPage implements OnInit {

  assets = Assets
  disease_id ;//= 10;
  plant_id;
  loaded = false;
  products = [];
  result;
  extras =[]
  slideOptsOne  = {
    freeMode : true ,
    initialSlide: 0,
    slidesPerView: 2.3,
    autoplay: false,
    spaceBetween: 5
  };
  constructor(
    private fetch: FetchService,
    public config:ConfigService ,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public utils: UtilsService
  ) { }

  async ngOnInit() {
    await this.route.queryParams.subscribe(res=>{
      this.plant_id = res.plant_id
      this.disease_id = res.disease_id
    })
    
    this.loadResult()
  }

  pop(){
    this.navCtrl.back()
  }

  loadResult(){
    let headers = new HttpHeaders();
    let route = this.disease_id? 'disease/'+this.disease_id: "plant/"+this.plant_id
    this.fetch.get(route, headers)
    .then((res:any)=> {
      this.loaded = true
      let data 
      if(res.status){
        if(res.data.images) res.data.images = JSON.parse(res.data.images)
        else res.data.images = []
        data = res.data
      
        if(data.irrigation_ar || data.irrigation_en){
          this.extras.push({icon: this.assets.humidity,title:this.utils.translator("irrigation") , body: this.config.lang=='ar'?data.irrigation_ar: data.irrigation_en })
        }
        if(data.light_ar || data.light_en){
          this.extras.push({icon: this.assets.sun ,title:this.utils.translator("light") , body: this.config.lang=='ar'?data.light_ar: data.light_en })
        }
    
        if(data.tempreture_ar || data.tempreture_en){
          this.extras.push({icon: this.assets.tempreture ,title:this.utils.translator("tempreture") , body: this.config.lang=='ar'?data.tempreture_ar: data.tempreture_en })
        }


      }else{
        this.fetch.errorToast(res.msg)
      console.log("ERR ",res)
      this.products = []
      return
      }
      this.result = data
      this.products= this.disease_id? data.medicines: data.products
      for(let pro of this.products){
        pro.count = 1
      }
    }).catch(err=>{
      this.loaded = true

      console.log("ERR ",err)
      this.fetch.errorToast();
    })


  }
}
