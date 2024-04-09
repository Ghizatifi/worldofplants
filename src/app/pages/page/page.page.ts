import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {
  public title:string = "";
  public content:string = "";
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.title = this.navParams.get('title');
    this.content = this.navParams.get('content');
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
