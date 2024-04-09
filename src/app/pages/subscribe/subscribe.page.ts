import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { FetchService } from 'src/app/services/fetch.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  month_cost = 10;
  year_cost = 100;
  types = {
    monthly:{cost:10} 
    , yearly:{cost:60}
  }
  constructor(
    public navCtrl:NavController ,
    public modalCtrl:ModalController ,
    public fetch:FetchService ,
    public userService:UserService ,
  ) { }

  ngOnInit() {
  }

  async month(){
  }

  async year(){

  }

  pay(){

  }

  close(){
    this.modalCtrl.dismiss()
  }


  payment_success(sub){
    console.log('success sub ',sub)
  }
}
