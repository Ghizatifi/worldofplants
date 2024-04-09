import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { HttpHeaders } from '@angular/common/http';
import { FetchService } from 'src/app/services/fetch.service';
import { NavController, ActionSheetController, IonImg, PopoverController, LoadingController, ModalController } from '@ionic/angular';
import * as $ from 'jquery'
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { TipsPage } from '../tips/tips.page';
import { Options } from '@angular-slider/ngx-slider';

import { Assets } from 'src/app/constants/constants';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.page.html',
  styleUrls: ['./detect.page.scss'],
})
export class DetectPage {
  assets = Assets;
  @ViewChild('imgEl',null) imgEl :ElementRef;
  value: number = 0;
  sliderOptions: Options = {
    floor: 0,
    ceil: 10,
    vertical: true
  };

  sliderOne ;
  
  detecte = 'فحص'
   noty_counts = 29;
  banners = []
  banner_images = []
  stores = [];
  slideOptsOne  = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 800,
    loop: true,
    
  };
  date :any = new Date()
  currentHour = 0
  model_url = 'http://localhost:8000/tensorflow/players/model/' //as sn example
  imageEdited;
  imgPreview ;//= 'C:/Users/slyd4r/Downloads/pexels-jonas-kakaroto-736230.jpg';
  imgBlob;
  setZoom = 1;
  flashMode = 'off';
  constructor(
    public config:ConfigService , 
    public fetch:FetchService ,
    private navCtrl:NavController ,
    public actionSheetCtrl:ActionSheetController ,
    public route:ActivatedRoute , public userService:UserService ,
    private cameraPreview:CameraPreview , 
    public popover:PopoverController ,
    private modalCtrl: ModalController
 
  )  {
    route.queryParams.subscribe(res=>{
      this.model_url = res.url
    })
  
  }
  
  ionViewDidEnter(){
    this.startCamera()
  }
  switchFlashMode() {
    if(this.flashMode=='off') this.flashMode='torch'//for ios use 'on'
    else this.flashMode='off'
    this.cameraPreview.setFlashMode(this.flashMode);
  }
  changeZoom() {
    this.cameraPreview.setZoom(this.setZoom);
  }
  async addImage() {
    let buttons = [
      {
        text: "تصوير صورة",
        icon: 'camera',
        handler: () => {
          this.TakePhoto();
        }
      }
      ,{
        text: "إختيار من الإستديو",
        icon: 'images',
        handler: () => {
          this.uploadfn();
        }
      }
      ,{
        text: "إلغاء",
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];
    let actionSheet = await this.actionSheetCtrl.create({
      buttons: buttons
    });
    actionSheet.present();
  }
  ionViewWillLeave(){
    this.cameraPreview.stopCamera()
  }



  public TakePhoto() {
    var input:any = $(document.createElement("input"));
            input.attr("type", "file");
            input.attr("multiple", false);
            // add onchange handler if you wish to get the file :)
            let trigger = (event)=> {
              console.log("CLick triggred");
              let reader = new FileReader();
            if(event.target.files && event.target.files.length > 0) {
              let file = event.target.files[0];
              reader.readAsDataURL(file);
              reader.onload = async () => {
                if (file.type == "image/png" || file.type == "image/x-png" || file.type == "image/jpeg") {
                  console.log(file.type);
                    // let x = (data) => this.imgblob = data;
                    
                    this.imgPreview = await reader.result.toString();
                    console.log("image preview is :", this.imgPreview)
                    this.imgBlob = file;
                    this.imageEdited = true;
                    this.check()
                }
              };
            }
      };
            input.change(trigger);
            input.attr('accept', 'image/*;capture=camera');
            input.trigger("click"); 
  }

  startCamera(){
    let cameraPreviewOpts  = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height:  800,//window.screen.height-200,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    }

      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
        },
        (err) => {

        });
  
    this.cameraPreview.show();
  }


  async convertImage(photo){
    const response = await fetch(photo);
    const blob = await response.blob();
    
    this.imgBlob = blob
    this.imgPreview =photo
    this.imageEdited = true;
    this.check()


  }
  takePicture() {
    this.cameraPreview.takePicture({
      width: 1280,
      height: 800,
      quality: 85 ,
    }).then((imageData) => {
      this.convertImage('data:image/jpeg;base64,' + imageData)
      console.log("image ",imageData)
    }, (err) => {
      console.log(err);
    });
  }
  
  public uploadfn() {
    var input:any = $(document.createElement("input"));
        input.attr("type", "file");
        input.attr("multiple", false);
        // add onchange handler if you wish to get the file :)
        let trigger = (event)=> {
          console.log("CLick triggred");
          let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = async () => {
            if (file.type == "image/png" || file.type == "image/x-png" || file.type == "image/jpeg") {
              console.log(file.type);
              this.imgPreview = await reader.result.toString();
              this.imgBlob = file
              this.imageEdited = true;
              this.check()
            }
          };
        }
  };
        input.change(trigger);
        input.attr('accept', 'image/x-png,image/png,image/jpeg');
        input.trigger("click"); 
  }

 

 async check(){
   this.navCtrl.navigateForward(['detecting'] , {queryParams:{img:this.imgPreview , model_url:this.model_url}})
  }

  async tips(){

    let modal = this.modalCtrl.create({
      component:TipsPage , 
      cssClass: "popover" ,
      componentProps :{
        store_name:'Ali Store' ,
        img:'assets/imgs/logo.png',
      }
    });
    
    (await modal).onDidDismiss().then((data:any)=>{
      
    })

    return (await modal).present();

  }
}

