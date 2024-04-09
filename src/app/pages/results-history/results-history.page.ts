import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-results-history',
  templateUrl: './results-history.page.html',
  styleUrls: ['./results-history.page.scss'],
})
export class ResultsHistoryPage implements OnInit {

  history = [];
  loaded = false
  constructor(
    private fetch: FetchService,
    public utils: UtilsService ,
    public config: ConfigService ,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.fetch.url_storage
    this.getHistory()
  }

  getHistory(){
    
    let route = "get-results"
    this.utils.loadingPresent()
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get(route , headers).then((res : any)=>{
      this.loaded = true
    this.utils.loadingDismiss()
      if(res.status){ this.history = res.data}
    },err=>{
      this.utils.loadingDismiss()
    }).catch((e)=>{
      this.loaded = true
      this.utils.loadingDismiss()
    }
    )
  }

  openDisease(disease){
    let extra = {
      just_show:true , 
      disease_id: disease.disease_id ,
      img: this.fetch.url_storage+disease.image
    }
    this.navCtrl.navigateForward(['result'] , {state:extra})
  }
}
