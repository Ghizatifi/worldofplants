import { Injectable } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';

import { ImageViewerPage } from '../pages/image-viewer/image-viewer.page';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  url_storage ;
  constructor(
    private modal: ModalController,
    private toastCtrl: ToastController,
    public translatePlugin: TranslateService ,
    private loadingCtrl: LoadingController ,
    // public fetch: FetchService
  ) { }


  async viewImage(images){
    console.log("view image") 
    let modal = await this.modal.create({
      component: ImageViewerPage,
      componentProps : {images:images , url_storage : this.url_storage},
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    })
    
    return await modal.present();
  
    // this.navCtrl.navigateForward(["image-viewer" , {src:image}])
  }
  public async toast(msg:string = 'حصل خطأ ما أثناء الإتصال بالسيرفر') {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      mode: "ios"
    });
    toast.present();
  }

  public async toastTranslate(msg:string = 'error') {
    let toast = await this.toastCtrl.create({
      message: this.translatePlugin.instant(msg),
      duration: 3000 ,
      mode: "ios"
    });
    
    toast.present();
  }

  translator(word){
    return  this.translatePlugin.instant(word)
  }

  async loadingPresent(message = "جاري التحميل..."){
    const loading = await this.loadingCtrl.create({ message});
        return await loading.present();
  }

  async loadingDismiss() {
    setTimeout(() => {
        return this.loadingCtrl.dismiss();
    }, 1000);
}
}
