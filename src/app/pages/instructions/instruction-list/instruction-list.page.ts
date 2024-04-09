import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.page.html',
  styleUrls: ['./instruction-list.page.scss'],
})
export class InstructionListPage implements OnInit {


  loaded = false;
  route = 'plants_instructions';//
  list = []
  is_plants  = false;
  constructor(
    private config: ConfigService ,
    private fetch: FetchService ,
    private routeA: ActivatedRoute,
    private navCtrl: NavController
  ) { 
    
  }

  async ngOnInit() {
    await this.routeA.queryParams.subscribe(res=>{
      console.log("res is ",res)

      if(res.is_plants ==true) {
        console.log("plants true")
        this.route = "plants_instructions"
        this.is_plants = true
      }
      else {
        console.log("plants flase")
        this.route = "diseases";//disaese list api
      }
    })

    this.loadList()

  }

  loadList(){
    
    this.loaded = true
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get(this.route, headers)
    .then((res:any)=> {
      this.loaded = true
      this.list = res.data;
      if(!this.is_plants){
        this.list.forEach(disease => {
          disease.images = JSON.parse(disease.images)
        });
      }

    }).catch(err=>{
      console.log("there was err ",err)
    })
  }
  details(id){
      if(this.is_plants)
    this.navCtrl.navigateForward(['instruction-details'] , {queryParams:{plant_id:id}});
    else this.navCtrl.navigateForward(['instruction-details'] , {queryParams:{disease_id:id}});
  }

}
