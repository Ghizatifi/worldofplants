import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Assets } from 'src/app/constants/constants';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
})
export class OrderSuccessPage implements OnInit {

  assets  =Assets
  constructor(
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  track_order(){
    this.navCtrl.navigateRoot("tabs/orders")
  }
  home(){
    this.navCtrl.navigateRoot("tabs/home")
  }
}
