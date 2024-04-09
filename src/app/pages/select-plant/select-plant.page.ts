

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ActionSheetController, ModalController } from '@ionic/angular';
import { FetchService } from '../../services/fetch.service';
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../services/config.service';
import { NotificationsService } from '../../services/notifications.service';
import { SubscribePage } from '../subscribe/subscribe.page';
import * as $ from "jquery" ;
import { UserService } from '../../services/user.service';
import { Assets } from 'src/app/constants/constants';

@Component({
  selector: 'app-select-plant',
  templateUrl: './select-plant.page.html',
  styleUrls: ['./select-plant.page.scss'],
})
export class SelectPlantPage implements OnInit {

  assets = Assets;
  instruction = true;
  instructions = [
    {
      header:"select_plant_instructions.take_photo", 
      image:"assets/images/home page/diagnosis.png", 
      body:"select_plant_instructions.take_photo_body", 
    },
    {
      header:"select_plant_instructions.diagnosis", 
      icon:this.assets.invoice, 
      body:"select_plant_instructions.diagnosis_body", 
    },
    {
      header:"select_plant_instructions.get_medicine", 
      icon:this.assets.medicine, 
      body:"select_plant_instructions.get_medicine_body", 
    }

  ]
  public loaded = false
  plants = [1,2,3,4,5,5,6]
  
  constructor(
    private navCtrl: NavController,
    public fetch: FetchService,
    public config: ConfigService,
    public notificationsService: NotificationsService,
    public actionSheetCtrl:ActionSheetController ,
    private modalCtrl:ModalController,
    public userService:UserService
  ) {
  }

  async ngOnInit() {
    
    this.loaded = true
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('plants', headers)
    .then((res:any)=> {
      this.loaded = true
      this.plants = res.data.plants;
    }).catch(err=>{
    })
  }


  async show(prod){

    let lang = this.config.translate.currentLang
    console.log("curent is ",lang)

    let buttons:any = [
      {
        text: lang=='en' ?"cancel": "إلغاء",
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];
    let x = {}
    prod.categories = [
      {
        name_en: "Fruit" ,
        name_ar : "الثمرة" ,
        url : prod.fruit
      },
      {
        name_en: "Leaf" ,
        name_ar : "الأوراق" ,
        url : prod.leaf
      },
      {
        name_en: "Root" ,
        name_ar : "الجزور" ,
        url : prod.root
      },
    ]
    if(prod.categories){
      prod.categories.forEach(element => {
        if(element.url)
        {
          buttons.push({
          text: lang=='en' ? element.name_en: element.name_ar ,
          handler: () => {
          this.go_detect(element)
          }
        })}
      });
    }
    
    
   if(prod.vip){
     this.fetch.errorToast('يجب عليك الإشتراك في إحدى الباقات')
     this.subscribe()
   }else{
     let act = await this.actionSheetCtrl.create({
      mode: "ios",
      
       buttons : buttons
       
     })
     act.present()
    // this.navCtrl.navigateForward('detect');
     
   }
  }
  go_detect(prod){
    this.navCtrl.navigateForward(['detect'] , {queryParams:prod});
  }
  
  async subscribe(){
    let modal = this.modalCtrl.create({
      component:SubscribePage
    })
    ;(await modal).present()
    
  }
}
