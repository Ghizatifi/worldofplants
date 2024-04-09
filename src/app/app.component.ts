import { Component, ViewChild } from '@angular/core';

import { Platform, NavController, AlertController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './services/config.service';
import { Router } from '@angular/router';
import { NotificationsService } from './services/notifications.service';
import { FetchService } from './services/fetch.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ImageLoaderConfigService } from 'ionic-image-loader-v5';

import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static:false}) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    public config:ConfigService,
    public share:SocialSharing,

    private router: Router,
  public notificationsService: NotificationsService,
    public fetch:FetchService ,
    private imageLoaderConfig: ImageLoaderConfigService , 
  ) {
    // localStorage.clear()
    this.setupImageLoader()
    this.initializeApp();
    // return

    this.checkLogin()
    
  }

  setupImageLoader(){
    this.imageLoaderConfig.enableSpinner(true);
    this.imageLoaderConfig.setConcurrency(10);
    this.imageLoaderConfig.useImageTag(true); // use `<img>` tag by default
    this.imageLoaderConfig.setFallbackUrl('assets/images/no-image.png'); // if images fail to load, display this image instead
    this.imageLoaderConfig.enableFallbackAsPlaceholder(true);

  }

  checkIsJordan(phone){//phone should be full with code
    let ph :any = phone[0]+phone[1]+phone[2]
    if(ph=='962'){
    return true
    }else{
      return false;
    }
  }
  async checkLogin(){
    this.config.token =  localStorage.getItem('token');
    var user =await localStorage.getItem('user');

    if (user) {
    
      this.config.user = JSON.parse(user)
      this.config.is_jordan = this.checkIsJordan(this.config.user.phone)
      this.notificationsService.getNotifications();
    
      this.navCtrl.navigateRoot('tabs');
    }
    else {
      this.navCtrl.navigateRoot('on-boarding');
    }
  }


  public onesignalv5(){
    console.log("onesignal v5 init")
    OneSignal.setAppId(this.config.onesignal_key)
    OneSignal.setNotificationOpenedHandler((res)=>{
      console.log("noti handler ",  res)
    });

    OneSignal.addSubscriptionObserver( (state)=> {
      console.log("state is ",state);
      if (state.from.userId && !this.config.device_id) {
       this.config.device_id= state.from.userId
        } ; 
        if(state.to.userId && !this.config.device_id){
         this.config.device_id= state.to.userId
        }
     });
     
     OneSignal.getDeviceState((state:any)=>{
       if(state.userId)
       this.config.device_id = state.userId
   
       console.log("device id : " +this.config.device_id);
     });

     OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
         console.log("User accepted notifications: " + accepted);
     });
  }
  public async startOneSignal(){

    this.onesignalv5();
    return;
    (window as any).plugins.OneSignal.setAppId(this.config.onesignal_key);

    (window as any).plugins. OneSignal.setNotificationOpenedHandler(function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));

  },  error=>{
  })

  (window as any).plugins.OneSignal.addSubscriptionObserver( (state)=> {
   console.log("state is ",state);
   if (state.from.userId && !this.config.device_id) {
    this.config.device_id= state.from.userId
     } ; 
     if(state.to.userId && !this.config.device_id){
      this.config.device_id= state.to.userId
     }
  },err=>{console.log("state err ",JSON.stringify(err))})
  (window as any).plugins.OneSignal.getDeviceState((state:any)=>{
    if(state.userId)
    this.config.device_id = state.userId

    console.log("device id : " +this.config.device_id);
  })
  (window as any).plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
  });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.config.getConfig();
      var lang = localStorage.getItem('lang')?localStorage.getItem('lang') : 'ar'
      this.config.setLanguage(lang)
      this.config.token = localStorage.getItem('token');
      this.statusBar.backgroundColorByHexString("#2a2a2a")
      this.splashScreen.hide();
      //push notification device id set
      if(this.platform.is('cordova')) { this.startOneSignal() } 
      else {this.config.device_id = "from_website"}
      this.setupDeviceBackbutton()
      
    });
  }

  setupDeviceBackbutton(){
    this.platform.backButton.subscribeWithPriority(0, async () => {
      console.log("Is Opened:", this.config.mapOpened);
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        if (!this.config.mapOpened)
        this.routerOutlet.pop();
      } else if (this.router.url === '/login') {
        // this.platform.navigator['app']; 
  
        // or if that doesn't work, try
        navigator['app'].exitApp();
      } else {
        let alert = await this.alertCtrl.create({
          header: "الخروج من التطبيق",
          message: "هل تريد الخروج من التطبيق؟",
          buttons: [
            {
              text: "إلغاء",
              role: "cancle",
            },
            {
              text: "نعم",
              handler: ()=> {
                navigator['app'].exitApp();
              }
            }
          ]
        });
        alert.present();
      }
    });
  }
}
