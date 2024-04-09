import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {
  fullPage = false;
tips = [
  {
    image:'assets/images/tips/tip1.PNG',
    name: "tips.tip1"
  } ,
  {
    image:'assets/images/tips/tip2.PNG',
    name: "tips.tip2"
  },
  {
    image:'assets/images/tips/tip3.PNG',
    name: "tips.tip3"
  } ,
  {
    image:'assets/images/tips/tip4.PNG',
    name: "tips.tip4"
  },
  {
    image:'assets/images/tips/tip5.PNG',
    name: "tips.tip5"
  }

]
  constructor(
    public navParams:NavParams ,
    public modalCtrl:ModalController,
    public popover: PopoverController
  ) { 
  }
  ngOnInit() {
    this.fullPage = this.navParams.get('fullPage');

  }

  close(){
    this.modalCtrl.dismiss()
  }

}
