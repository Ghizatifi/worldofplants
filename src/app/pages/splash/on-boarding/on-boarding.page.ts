import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {

  
  @ViewChild("slides", { static: false }) slides: IonSlides;
  constructor(
    private navCtrl: NavController
  ) { }

  boards =[
    {
      image: "assets/images/onBoarding0.png" ,
      title: "onBboarding.page1_title" , 
    body: "onBboarding.page1_body" ,
    },
    {
      image: "assets/images/onBoarding1.png" ,
      title: "onBboarding.page2_title" , 
      body: "onBboarding.page2_body" ,
    },
    {
      image: "assets/images/onBoarding2.png" ,
      title: "onBboarding.page3_title" , 
      body: "onBboarding.page3_body" ,
    }
  ]
  ngOnInit() {
  }

  next(){
    console.log("next")
    this.slides.isEnd().then((istrue) => {
      console.log(istrue);
      if (istrue) {
        this.navCtrl.navigateRoot('login')
        }
        else{
          this.slides.slideNext()

        }
      }).catch((e)=>console.log("error ",e))

    
  }
  back(){
    this.slides.slidePrev()
  }
  skip(){
    this.navCtrl.navigateRoot('login')
  }
}
