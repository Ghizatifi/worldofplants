import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TipsPage } from '../tips/tips.page';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {


  constructor(
    private popO: PopoverController,
    public utils: UtilsService
  ) { 
  }

  async ngOnInit() {
  }
  tast(){
    this.utils.toast("hey")
  }

}
