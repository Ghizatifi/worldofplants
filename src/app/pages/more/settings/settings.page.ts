import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { AppConstants, Assets } from 'src/app/constants/constants';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  assets = Assets;
  consts = AppConstants
  buttons = [
   
    {
      name: "settings.language",
      icon: this.assets.language,
      icon_builtin : false, 
      page : 'lang'
    },
    // {
    //   name: "settings.currency",
    //   icon: this.assets.currency,
    //   icon_builtin : false, 
    //   page : 'currency'
    // },
    {
      name: "settings.who_we_are",
      icon: "information-circle-outline",
      icon_builtin : true, 
      page : 'who_we_are',
      link: this.consts.WHO_WE_ARE
    },
    {
      name: "settings.delivery_policies",
      icon: "paper",
      icon_builtin : true, 
      page : 'policies',
      link:this.consts.POILICY_DELIVERY
    },
    {
      name: "settings.subscription_policies",
      icon: "paper",
      icon_builtin : true, 
      page : 'policies',
      link: this.consts.POILICY_SUBSCRIBE
    },
    {
      name: "settings.returns_polices",
      icon: "paper",
      icon_builtin : true, 
      page : 'policies',
      link:this.consts.POILICY_RETURN
    },
    {
      name: "settings.information_privacy",
      icon: "paper",
      icon_builtin : true, 
      page : 'policies',
      link:this.consts.PLOICY_PRIVACY_LINK
    },
    {
      name: "settings.terms_and_conditions",
      icon: "paper",
      icon_builtin : true, 
      page : 'policies',
      link:this.consts.TERMS_AND_CONDITIONS
    },
  ]
  constructor(
    private navCtrl: NavController ,
    private utils: UtilsService,
    private actionSheet: ActionSheetController,
    public config: ConfigService,
    private iab: InAppBrowser,
    public fetch: FetchService
  ) { }

  ngOnInit() {
  }

  public openPage(page , link) {
    if (link) {console.log("CHANGE LANF");this.openLink(link) ; return}
    if (page == 'lang') {console.log("CHANGE LANF");this.changeLanguage() ; return}
    if (page == 'currency') {this.utils.toastTranslate("under_developent") ; return}
    if (page) this.navCtrl.navigateForward([page] , {queryParams:{page_name:page}});
  }



  public openLink(link) {
    if (link)
    this.iab.create(link, "_system")
  }
  public async changeLanguage() {
    let logout = this.utils.translator("selectLang")
    
    let alert = await this.actionSheet.create({
      
      header: logout,
     
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
