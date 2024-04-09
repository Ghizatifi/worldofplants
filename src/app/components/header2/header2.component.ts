import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Assets } from 'src/app/constants/constants';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component implements OnInit {

  assets = Assets;
  @Input() hide_tail: boolean = false;
  @Input() hide_back_button: boolean = false;
  @Input() hide_cart: boolean = false;
  @Input() user: boolean = false;
  @Input() username: String ;
  @Input() image: String = "assets/images/person.png";
  @Input() pageName: String = "";
  @Input() navHome : boolean = false;
  is_modal  = false;
  constructor(
    public navCtrl: NavController ,
    public modalCtrl: ModalController,
    public config: ConfigService,
    public fetch: FetchService,
    
  ) {
    
   }

  ngOnInit() {
    this.modalCtrl.getTop().then((v)=>{
      this.is_modal = v?true:false
    })
  }
    pop(){
      if(this.is_modal){
        console.log("is_modal");
        
        this.modalCtrl.dismiss()
      }
      else {
        if(this.navHome){
          console.log("navHome");
          
          this.navCtrl.navigateRoot("tabs/home")
        }else{
          console.log("! navHome");
          
          this.navCtrl.back()
        }
    }
    }
    navigate(page){
      this.navCtrl.navigateForward(page);
    }
}
