import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Assets } from 'src/app/constants/constants';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {
  assets = Assets
  
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goTo(is_plants){
    this.navCtrl.navigateForward(['instruction-list'] , {queryParams:{is_plants}});
  }
}
