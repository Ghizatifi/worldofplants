import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Assets } from 'src/app/constants/constants';

@Component({
  selector: 'app-chat-instructions',
  templateUrl: './chat-instructions.page.html',
  styleUrls: ['./chat-instructions.page.scss'],
})
export class ChatInstructionsPage implements OnInit {
  assets = Assets;
  instructions = [
    {
      image:this.assets.pen_orange, 
      body:"instructions.type_your_problem", 
    },
    {
      image:this.assets.add_image_orange, 
      body:"instructions.add_image_problem", 
    },
    {
      image:this.assets.contact_orange, 
      body:"instructions.will_ritch_you_soon", 
    }

  ]
  constructor(
    private popover: PopoverController
  ) { }

  ngOnInit() {
  }

  close(){
    this.popover.dismiss()
  }

}
