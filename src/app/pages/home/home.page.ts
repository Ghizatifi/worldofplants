import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cards = [
    {
      header: "home_page.plant_store" ,
      body : "home_cards.card_body1" ,
      image: "assets/images/home page/store.png" ,
      navigate: "tabs/home/stores" 
    },
    {
      header: "home_page.health_diagnosis" ,
      body : "home_cards.card_body2",
      image: "assets/images/home page/diagnosis.png" ,
      navigate: "tabs/home/select-plant" 
    },
    {
      header: "home_page.consultation_from_experts" ,
      body : "home_cards.card_body3" ,
      image: "assets/images/home page/consult.png" ,
      navigate: "chats" 
    },
    {
      header: "home_page.plant_care_instructions",
      body : "home_cards.card_body4" ,
      image: "assets/images/home page/vase.png" ,
      navigate: "instructions" 
    }
  ]
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  
  }

  navigate(page){
    this.navCtrl.navigateForward(page);
  }

  result(){
    this.navCtrl.navigateRoot(['result'] , {state:  {"disease_id":56, "img":"asdadsada" , "probability": 0.91}} )
  }
}
