import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import * as tmImage from '@teachablemachine/image';

import { FetchService } from 'src/app/services/fetch.service';
import { ConfigService } from 'src/app/services/config.service';
import { TipsPage } from '../tips/tips.page';
import { UtilsService } from 'src/app/services/utils.service';
import { AppConstants } from 'src/app/constants/constants';


@Component({
  selector: 'app-detecting',
  templateUrl: './detecting.page.html',
  styleUrls: ['./detecting.page.scss'],
})
export class DetectingPage implements OnInit {

  @ViewChild('imgEl',null) imgEl :ElementRef;

  public finialImage;
  public img;
  public model_url;
  public check_blur_url = 'https://shahd1995913.github.io/models_world_of_plants_2022/NewPlantOrNotPlant/model/'

  download_label = ''
  download_progress = ''
  constructor(
    public http:HttpClient ,
    public userService:UserService ,
    public navCtrl:NavController ,
    public route:ActivatedRoute ,
    public fetch:FetchService ,
    private modalCtrl:ModalController,
    public config: ConfigService ,
    public utils: UtilsService

  ) {
   
   }

  ngOnInit() {
    if(this.config.plant_model)  this.check_blur_url= this.config.plant_model
    this.route.queryParams.subscribe(res=>{
    this.img = res.img ;
    this.model_url = res.model_url
    //for testing purposes we need to navigate to any diesase ;
    if(AppConstants.IS_SERVER_LOCAL){
      this.result([{probability:.9 , className:{id:10}}])
    }
    else{
      this.checkPlant()
    }
    
  })

  }

  async checkPlant(){
    //using teachable//

    this.download_label = this.download_label = this.utils.translator("checking_plant_running") 
    this.download_progress = "0%"

    const modelURL = this.check_blur_url + 'model.json';
    const metadataURL = this.check_blur_url + 'metadata.json';
    let model = await tmImage.load(modelURL, metadataURL);
    let maxPredictions = model.getTotalClasses();
   
    try { 
      let response = await fetch(this.check_blur_url+'class.json')
      let data :any = await response.json();
     data = JSON.stringify(data);
     data = JSON.parse(data);

     let prediction = await model.predict(this.imgEl.nativeElement)
    let topResult ;
    
    for (let i = 0; i < maxPredictions; i++) {
      if(topResult){
        if(topResult.probability<prediction[i].probability.toFixed(2)){
          topResult ={name:prediction[i].className ,probability:prediction[i].probability.toFixed(2) }
        }
      }else{
        topResult = {name:prediction[i].className ,probability:prediction[i].probability.toFixed(2) }

      }
      const classPrediction =
          prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
      
    }
    if(topResult.name!='plant'){
      this.tips()
    }
    else{
      this.download_progress = ''
      this.download_label = this.utils.translator("image_checked")

      this.checkUsingTeachable()
    }

    
    } catch (error) {
      this.fetch.errorToast()
      this.navCtrl.pop()
    }
   
    
  }

  

  async checkUsingTeachable(){

    this.download_progress = ''
    this.download_label =this.utils.translator("detecting_disease") 
    const modelURL = this.model_url + 'model.json';
    const metadataURL = this.model_url + 'metadata.json';
    let model = await tmImage.load(modelURL, metadataURL);
    let maxPredictions = model.getTotalClasses();
   

    try { 
      let response = await fetch(this.model_url+'class.json')
      let data :any = await response.json();
     data = JSON.stringify(data);
     data = JSON.parse(data);

     let prediction = await model.predict(this.imgEl.nativeElement)
    let desiease ;
    
    for (let i = 0; i < maxPredictions; i++) {
      if(desiease){
        if(desiease.probability<prediction[i].probability.toFixed(2)){
          desiease ={name:prediction[i].className ,probability:prediction[i].probability.toFixed(2) }
        }
      }else{
        desiease = {name:prediction[i].className ,probability:prediction[i].probability.toFixed(2) }

      }
      const classPrediction =
          prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
      
    }
    let top = [{"className":{id:data[desiease.name].id }, probability:desiease.probability}]
    this.result(top)
    } catch (error) {
      this.fetch.errorToast()
      this.navCtrl.pop()
    }
   
    

  }
  async tips(){
    let modal = this.modalCtrl.create({
      component:TipsPage , 
      componentProps :{
        "fullPage":true
      }
    });
    
    (await modal).onDidDismiss().then((data:any)=>{
      this.navCtrl.pop()
    })

    return (await modal).present();
  }


  async result(res){
    res.image = this.img;
    this.navCtrl.navigateRoot(['result'] , {state:{"disease_id":res[0].className.id, "img":this.img , "probability": res[0].probability}})
  
  }
}
