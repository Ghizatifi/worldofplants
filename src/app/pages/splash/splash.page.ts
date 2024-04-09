import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    public storage: StorageService,
    public navCtrl:NavController ,
    private config: ConfigService , 
    private fetch: FetchService ,
    private userService: UserService , 
    public notificationsService: NotificationsService
  ) { 
    
  }

  async ngOnInit() {
    //get stored language//
    var lang = localStorage.getItem("lang")
    this.config.translate.setDefaultLang(lang? lang:'ar')


    // when publishin comment this
    this.checkLogin()


    //when publishing remove comment from this
    //  var isLoggedIn = await this.storage.local.getItem("is_logged_in"); 
    //  if(isLoggedIn) this.checkLogin()
    //  else
    // setTimeout(() => {
    //   if(isLoggedIn) this.navCtrl.navigateRoot("tabs/home")
    //   else{  
    //     localStorage.clear();
    //     this.storage.local.setItem("is_logged_in" , "true")
    //     this.navCtrl.navigateRoot("on-boarding")
    // }
    // }, 3000);
    
  
  }


  async checkLogin(){
    // this.config.token =  localStorage.getItem('token');
    // var user =await localStorage.getItem('user');

    // if (user) {
    //     this.config.user = JSON.parse(user)
    //     this.config.is_jordan = true
    //   this.notificationsService.getNotifications();
    //   this.navCtrl.navigateRoot('tabs');
    // }
    // else {
    //   this.navCtrl.navigateRoot('login');
    // }

    
    
  }

  async loginWithToken(){
    
    let header = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    await this.fetch.get('auth/user/account', header)
    .then((res:any)=> {

      console.log("account res ",res)
      let data

      if(res){
        data = res.data
      }else{
        this.fetch.errorToast()
        return
      }
      this.config.all_user_data = data
      this.config.user = data
      localStorage.setItem('user',JSON.stringify(data));
      this.userService.user =data

      console.log("user ",data)
    },err=>{console.log("ERR ",err)})
      
    console.log("step... ")
      this.config.token = localStorage.getItem('token');

      let is_jordan :any = localStorage.getItem('is_jordan');
      console.log("SIZ JPTDA ",is_jordan)
      // make always is jordan
      this.config.is_jordan = true
      // if(is_jordan==1 || is_jordan=='1' ){
      //   console.log("JORDAN TRUE")
      //   this.config.is_jordan = true
      // }else{
      //   console.log("JORDAN false")

      //   this.config.is_jordan = false
      // }
     

      this.notificationsService.getNotifications();
      this.navCtrl.navigateRoot('tabs/home');
  }

}
