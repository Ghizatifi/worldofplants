import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-select-plants',
  templateUrl: './select-plants.page.html',
  styleUrls: ['./select-plants.page.scss'],
})
export class SelectPlantsPage implements OnInit {

loaded = false;
plants = [];
is_modal = false
selected_plants = [];
selected_plants_pushed = []
role_id;
  constructor(
    public fetch:FetchService,
    public config:ConfigService,
    private modalCtrl: ModalController,
    private utils: UtilsService, 
    private navCtrl: NavController
  ) { 


  }

  async ngOnInit() {
   
    this.modalCtrl.getTop().then((v)=>{
      this.is_modal = v?true:false
    })

    this.loaded = false
    this.fetch.get('plants')
    .then((res:any)=> {
      this.loaded = true
      this.plants = res.data.plants;
      this.selected_plants_pushed.forEach((plant)=>{
      this.select(this.plants.find((p)=>plant.id==p.id))
      })
      console.log("selected are ",this.selected_plants)
    }).catch(err=>{
      console.log("there was err ",err)
    })
  }

  select(plant){
    if(this.selected_plants.includes(plant)){
      let idx = this.selected_plants.indexOf(plant)
      this.selected_plants.splice(idx, 1)
    }else{
      this.selected_plants.push(plant)
    }
  }
  is_selected(plant){
    return this.selected_plants.includes(plant);
  }

  next(){
    if(this.is_modal){
      this.modalCtrl.dismiss({plants:this.selected_plants})
      return
    }
    var select = []
    this.selected_plants.forEach(plant => {
      select.push(plant.id)
    });
    
    console.log("selected ",select)
    if(select.length>0){
    this.utils.loadingPresent()
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      let params = new FormData();
      params.append("plants" , select.join(","))
      this.fetch.post("user/add-plants" , params , headers).subscribe((re)=>{
        this.utils.loadingDismiss()
        this.navCtrl.navigateRoot("tabs/home")
        console.log("res uwas ",re)
      },e=> this.utils.loadingDismiss())
    }else{
      this.navCtrl.navigateRoot("tabs/home")
    }
  }
}
