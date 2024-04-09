import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  terms = ""
  constructor(
    public userService:UserService ,
    public popOverCtrl:PopoverController
  ) {
    this.terms = userService.terms
   }

  ngOnInit() {
  }

  close(){

    this.popOverCtrl.dismiss()
  }
}
