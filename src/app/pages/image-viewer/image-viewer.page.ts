import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController } from '@ionic/angular';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.page.html',
  styleUrls: ['./image-viewer.page.scss'],
})
export class ImageViewerPage implements OnInit {

  @ViewChild('sliderRef', { static: true }) protected slides: IonSlides;

  url_storage ;
  images = ["https://app.worldofplants.ai/storage/diseases/January2024/xVfD1126jcjfn8HU9hCq.jpg"]
  // src = 'assets/images/logo.png';//https://app.worldofplants.ai/storage/diseases/January2024/xVfD1126jcjfn8HU9hCq.jpg
  
  slideOpts = {
    zoom: true
  };
  constructor(
    private modal: ModalController,
    // public fetch: FetchService
    
  ) { 
    
  }

  ngOnInit() {
    this.slides.update();
  }

  pop(){
    this.modal.dismiss()
  }

}
