import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {

  stars:any = 5
  comment = ''
  store_name;
  store_img;
  constructor(
    private popOverCtrl:PopoverController ,
    private navParams:NavParams
  ) { }

  ngOnInit() {
    this.store_name = this.navParams.get('store_name');
    this.store_img = this.navParams.get('img');
  }

  logRatingChange($event){
    console.log("rate is ",$event)
    this.stars = $event
  }

  send(){
    this.popOverCtrl.dismiss({stars:this.stars  , comment: this.comment})
  }

  close(){
    console.log("Close")
  }
}
