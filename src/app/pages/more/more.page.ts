import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { PagePage } from '../page/page.page';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppConstants, Assets, AppMessages } from 'src/app/constants/constants';
import { FetchService } from 'src/app/services/fetch.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  consts = AppConstants;
  messages  = AppMessages
  assets = Assets;
  buttons = [
    {
      name: "profile",
      icon: this.assets.person,
      icon_builtin : false, 
      page : 'profile',
      
    },
    {
      name: "share",
      icon: this.assets.share,
      icon_builtin : false, 
      page : 'share'
    },
    {
      name: "settings.contact_us",
      icon: this.assets.call,
      icon_builtin : false, 
      page : 'link' ,
      link: this.consts.CONTACT_US
    },
    {
      name: "settings.rate",
      icon: this.assets.star,
      icon_builtin : false, 
      page : 'rate'
    },
    // {
    //   name: "settings.my_subscriptions",
    //   icon: "body",
    //   icon_builtin : true, 
    //   page : 'my_subscriptions'
    // },
    {
      name: "settings.settings",
      icon: "settings",
      icon_builtin : true, 
      page : 'settings'
    },
    {
      name: "settings.our_partners",
      icon: this.assets.partners,
      icon_builtin : false, 
      page : 'link' ,
      link : this.consts.OUR_PARTNERS
    },
    {
      name: "logout",
      icon: this.assets.logout,
      icon_builtin : false, 
      page : 'logout'
    },
  ]
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    public config:ConfigService,
    public share:SocialSharing,
    private modalCtrl: ModalController ,
    public fetch: FetchService,
    public actionSheet:ActionSheetController ,
    public iab:InAppBrowser ,
    public utils: UtilsService
  ) { }

  ngOnInit() {
  }

  
  public openPage(page, pageObject=null) {
    if (page == 'logout') {this.logout(); return}
    if (page == 'exit') {navigator['app'].exitApp(); return}
    if (page == 'page') {this.openPageModule(pageObject.title, this.config.pages[pageObject.type]); return}
    if (page == 'link') {this.openLink(pageObject); return}
    if (page == 'lang') {console.log("CHANGE LANF");this.changeLanguage() ; return}
    if (page == 'share') {console.log("Share LANF");this.shareTo() ; return}
    if (page == 'rate') {this.rate() ; return}
    if (page) this.navCtrl.navigateForward(page);
  }

  shareTo(){
    this.share.shareWithOptions(
      {
        message: this.messages.SHARE_APP_MESSAGE,
        subject: this.consts.SHARE_LINK_ANDROID_PLAYSTORE,
        url: this.consts.SHARE_LINK_ANDROID_PLAYSTORE
      }
    )
  }
  rate(){
    this.iab.create( "https://play.google.com/store/apps/details?id=com.slyd4r.worldofplants", "_system")
  }
  private async openPageModule(title, content) {
    console.log("Will open page", title, content, this.config.pages);
    let modal = await this.modalCtrl.create({
      component: PagePage,
      componentProps: {
        title,
        content
      }
    });
    modal.present();
  }

  public openLink(link) {
    console.log("open ",link)
    if (link)
    this.iab.create( link, "_system")
  }

  public async logout() {
    let alert = await this.alertCtrl.create({
      header: "تسجيل اخروج",
      message: "هل متأكد من تسجيل الخروج؟",
      buttons: [
        {
          role: "cancle",
          text: "إلغاء",
        },
        {
          role: "cancle",
          text: "تسجيل الخروج",
          handler: ()=> {
            localStorage.setItem('token', "");
            localStorage.clear()
            this.navCtrl.navigateRoot('login');
            // this.oneSignal.deleteTag("userId");
            // this.oneSignal.deleteTag("roleId");
            this.config.user =  [];
          }
        }
      ]
    })
    alert.present();
  }

  public async changeLanguage() {
    let alert = await this.actionSheet.create({
      
      header: this.utils.translator("selectLang"),
     
      buttons: [
       
        {
          text: "العربية",
          handler: ()=> {
            this.config.setLanguage("ar") , 
            localStorage.setItem("lang" , 'ar')
            this.setLang()
          }
        } ,
        {
          text: "English",
          handler: ()=> {
            this.config.setLanguage("en") , 
            localStorage.setItem("lang" , 'en')
            this.setLang()
          }
        }
      ]
    })
    alert.present();
  }

  setLang(){
    var lang = localStorage.getItem('lang')?localStorage.getItem('lang') : 'en'
    this.config.lang = this.config.translate.getBrowserLang();
    this.config.setLanguage(lang)
  }

}
