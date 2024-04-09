import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { FetchService } from '../../services/fetch.service';
import { NavController, AlertController, Events, LoadingController } from '@ionic/angular';
import { HttpHeaders, HttpParams ,HttpClient } from '@angular/common/http';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-active-phone',
  templateUrl: './active-phone.page.html',
  styleUrls: ['./active-phone.page.scss'],
})
export class ActivePhonePage implements OnInit {
  public inputFocused:boolean = false;
  public code:string = "";
  public loading:boolean = false;
  public phone:any;
  public time:any = 10;
  public timerText:string = '2:00';
  public interval:any;
  link_verify = 'https://slyd4r.com/app/php_code/verify.php'
  constructor(
    private config: ConfigService,
    private fetch:FetchService,
    private navCtrl:NavController,
    public http: HttpClient,  
    private alertCtrl: AlertController,
    public utils: UtilsService,
    private oneSignal: OneSignal
    ) {
      this.link_verify = fetch.url+'app/php_code/verify.php'
     }

  ngOnInit() {
    this.phone = this.config.user.phone;
    console.log("phone was ",this.phone)
    this.phone = this.phone.substring(1, this.phone.length);
    this.interval = setInterval(this.timer.bind(this), 1000);
  }

  public timer() {
    let numberWithZero = (n) => n > 9 ? n :  '0' +n;
    this.time -=1;
    this.timerText = Math.floor(this.time/60) + ':' + numberWithZero(Math.floor(this.time%60));
    if (this.time == 0) {
      clearInterval(this.interval);
    }
  }

  public log(event) {

    // if (event.target.value)
    // console.log(event.target.value);
  }

  public async logOut() {
    let alert = await this.alertCtrl.create({
      header: "رقم الهاتف خاطيء",
      message: "هل أنتِ متأكدة أن رقم الهاتف هذا ليس لكِ؟",
      buttons: [
        {
          text: "إلغاء",
          role: "cancle",
        },
        {
          text: "نعم",
          handler: async ()=> {
            // let loading = await this.loadingCtrl.create({
            //   animated: true,
            //   spinner: 'dots'
            // })
            // loading.present();
            localStorage.setItem('token', "");
            this.navCtrl.navigateRoot('login');
            this.oneSignal.deleteTag("userId");
            this.config.user =  [];
          }
        }
      ]
    });
    alert.present();
  }

  public activeAccount() {
    this.loading = true;
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.user.token);
    let params = new HttpParams().set("user_id", this.config.user.id).set("code", this.code);
    console.log("parms ",params)
    console.log("user id ",params)
    console.log("parms ",params)
    this.fetch.post('auth/code-v', params, headers)
    .subscribe(async (data:any)=> {
      this.loading = false;
      if (data.success) { 
        this.utils.toastTranslate("phone_verified_success")
        this.config.user.phone_verified = 1;
        // this.config.saveUser();
        this.http.post(this.link_verify , {phone:this.config.user.phone}).subscribe(res=>{
          console.log('res',res)
        this.navCtrl.navigateRoot("home");

        },err=>{
          console.log("there was error")
        })
      }
      else {
        this.fetch.errorToast('الكود غير صحيح');
      } 
    },
    error => {
      if (error  == 'wrong code' || error == 'invalid code')
        this.fetch.errorToast('الكود غير صحيح');
      else
        this.fetch.errorToast();
      this.loading = false;
      // error
    })
  }

  public resendCode() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.user.token);
    let params = new HttpParams().set("user_id", this.config.user.id).set("phone", this.phone);
    this.fetch.post("auth/code-resend", params, headers).subscribe(()=> {
      this.time = 120;
      this.interval = setInterval(this.timer.bind(this), 1000);
    },
    error => {
      this.fetch.errorToast();
    })
  }
  

}
