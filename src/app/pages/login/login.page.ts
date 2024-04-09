import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { FetchService } from '../../services/fetch.service';
import { NavController, LoadingController, ActionSheetController, PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { HttpHeaders } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public screen:string = "login";
  public loginForm:any;
  public regForm:any;
  showPassword = false
  showPasswordReg = false
  showPasswordRegConf = false
  open_time :any
  close_time :any
  acceptTerms  = false
  CountryCode='+962'
  selectedCountry = { name: 'الاردن', name_en: 'Jordan' ,dial_code: '+962', code: 'AW' , flag: '../../../assets/imgs/flags/jordan.png' };
  
  homeTypes = [
    {
      name_ar:"منزل" , 
      name_en:"House" , 
      id:0 
    } ,{
      name_ar:"شقة" , 
      name_en:"Apartment" , 
      id:1
    } ,{
      name_ar:"مكتب" , 
      name_en:"Office" , 
      id:2
    } ,
  ]
  CountryFlag = '../../../assets/images/flags/jordan.png'
  CountryJson = [
    { name: 'الولاايات المتحدة', name_en: 'US' ,  dial_code: '+1', code: 'US' , flag: '../../../assets/images/flags/saudi.png'},
    { name: 'السودان', name_en: 'SD' ,  dial_code: '+249', code: 'SD' , flag: '../../../assets/images/flags/saudi.png'},

    { name: 'السعودية', name_en: 'Saudi Aribia' ,  dial_code: '+966', code: 'SA' , flag: '../../../assets/images/flags/saudi.png'},
    { name: 'مصر', name_en: 'Egypt' , dial_code: '+20', code: 'EG' , flag: '../../../assets/images/flags/egypt.png' },
    { name: 'الامارات',name_en: ' United Arab Emirates'  , dial_code: '+971', code: 'AE' , flag: '../../../assets/images/flags/emarats.png' },
    { name: 'الكويت', name_en: 'Kuwait', dial_code: '+965', code: 'KW' , flag: '../../../assets/images/flags/kuwait.png' },
    { name: 'قطر', name_en: 'Qatar' ,dial_code: '+974', code: 'AS' , flag: '../../../assets/images/flags/qatar.png' },
    { name: 'المغرب', name_en: 'Moroco' , dial_code: '+212', code: 'AD' , flag: '../../../assets/images/flags/morocco.png' },
    { name: 'تركيا', name_en: 'Turkey'  , dial_code: '+90', code: 'AO' , flag: '../../../assets/images/flags/turkey.png' },
    { name: 'البحرين', name_en: 'Bahreen' ,dial_code: '+973', code: 'AI' , flag: '../../../assets/images/flags/bahrain.png' },
    { name: 'الجزائر', name_en: 'Algeria' , dial_code: '+213', code: 'AG' , flag: '../../../assets/images/flags/algeria.png' },
    { name: 'تونس', name_en: 'Tunisia', dial_code: '+216', code: 'TU' , flag: '../../../assets/images/flags/tunisia.png' },
    { name: 'سوريا', name_en: 'Syria',dial_code: '+963', code: 'TU' , flag: '../../../assets/images/flags/syria.png' },
    { name: 'العراق', name_en: 'Iraq', dial_code: '+964', code: 'TU', flag: '../../../assets/images/flags/iraq.png'  },
    { name: 'فلسطين',name_en: 'Palestine' ,dial_code: '+970', code: 'AM' , flag: '../../../assets/images/flags/palestine.png' },
    { name: 'الاردن', name_en: 'Jordan' ,dial_code: '+962', code: 'AW' , flag: '../../../assets/images/flags/jordan.png' },
    ]
    lang = 'ar'
  public disableSubmit:boolean = false;
  public imgSrc:string = "";
  public loading:any;
  public loginRoleId:number = 2;
  public forgetEmail:string = "";
  constructor(private iab: InAppBrowser , 
    private fb: FormBuilder,
    private config: ConfigService,
    private fetch: FetchService,
    private navCtrl: NavController,
    public userService:UserService ,
    private popover:PopoverController,
    public actionSheet:ActionSheetController,
    private utils: UtilsService
  ) { }

  toggleShow(){
    
    this.showPassword=!this.showPassword
  }
  toggleShowReg(){
    this.showPasswordReg=!this.showPasswordReg
  }
  toggleShowConf(){
    this.showPasswordRegConf=!this.showPasswordRegConf
  }
  change(ev){
    this.loginRoleId = ev.target.value
  }
  ngOnInit() {
    //load plants to select fevourites
    this.get_plants()

    this.loginForm = new FormGroup({
      phone: new FormControl('', Validators.compose([
          Validators.required,
          ])),
      password: new FormControl('', Validators.compose([
          Validators.required,
          ]))
    });
    
    this.regForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        ])),
      username: new FormControl('', Validators.compose([
          Validators.required,
          ])),
          size: new FormControl(0, Validators.compose([
            Validators.required,
            ])),

            plants: new FormControl('', Validators.compose([
              ,
              ])),
      storeName: new FormControl('', Validators.compose([
        ,
        ])),
        open_at: new FormControl('', Validators.compose([
          ])),
          close_at: new FormControl('', Validators.compose([
          ])),
      phone: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          ])),
      password: new FormControl('', Validators.compose([
          Validators.required,
          ])),
      confirmPassword: new FormControl('', Validators.compose([
          Validators.required,
          ])),
          acceptTerms:new FormControl(false, Validators.compose([
            Validators.required,
            ])),
            phone2:new FormControl('', Validators.compose([])),
            address2:new FormControl('', Validators.compose([])),
            home_type:new FormControl('', Validators.compose([])),
    });
  }

  async get_plants(){
    if (this.userService.all_plants.length>0)return;
    let header = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    await this.fetch.get('plants', header)
    .then((res:any)=> {
      let data
      if(res){
        data = res.data
        this.userService.all_plants = data.plants
        this.userService.all_sizes = data.size
        this.userService.terms = data.config.terms
        console.log("plants ",data)
      }else{
        this.fetch.errorToast()
        return
      }
      this.config.all_user_data = data
      this.config.user = data
    },err=>{console.log("ERR ",err)})
  }
  public login() {
    if (this.loginForm.status == "VALID") {

      this.disableSubmit = true;
      let params = new FormData();
      
      this.utils.loadingPresent()
      params.append('phone', this.CountryCode.slice(1 , this.CountryCode.length)+(this.loginForm.controls.phone.value.length>="10"?this.loginForm.controls.phone.value.slice(1,this.loginForm.controls.phone.value.length): this.loginForm.controls.phone.value));
      params.append('password', this.loginForm.controls.password.value);
      params.append('device_id', this.config.device_id);
      this.fetch.post('auth/login', params)
      .subscribe(async (data:any)=> {
        this.utils.loadingDismiss()
        console.log("data ",data)
        this.disableSubmit = false;
        
        this.disableSubmit = false;
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("role_id", data.user.role_id);
          console.log("data ",data)
          let ph :any = data.user.phone[0]+data.user.phone[1]+data.user.phone[2]
          console.log("ph iz ",ph)
          if(ph=='962'){
          localStorage.setItem("is_jordan", "1");
          this.config.is_jordan = true
          }else{
            localStorage.setItem("is_jordan", "0");
            this.config.is_jordan = false;
          }

          console.log("IS JORDAN ",this.config.is_jordan)

          this.userService.user = data.user
          localStorage.setItem("user" , JSON.stringify(this.userService.user))
          this.config.user = data.user
          this.preformLogin(data.access_token, data.user.role_id, data.user.user_id);
        }
        else {
          this.utils.toastTranslate("phone_or_password_wrong")
        }
      }, async error => {
        this.utils.loadingDismiss()
        this.disableSubmit = false;
        this.utils.toastTranslate("phone_or_password_wrong")
      })
    }
    
  }

  public forget() {
    let params = new FormData();
    this.loading = true;
    this.fetch.post('auth/forget', params)
    .subscribe(async (data)=> {
      this.loading = false;
    }, error=> {
      this.loading = false;
      this.fetch.errorToast();
    })

  }

  public isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public signup() {
    if (this.regForm.status == "VALID" && this.regForm.controls.password.value == this.regForm.controls.confirmPassword.value) { 
     
      if(this.regForm.controls.password.value.length<8){
        this.fetch.errorToast("كلمة المرور يجب ألا تقل عن 8 خانات")
        return
      }

      if(this.regForm.controls.phone.value.length!==9){
        this.fetch.errorToast("رقم الهاتف يجب ان يتكون من 9 أرقام")
        return
      }

      this.disableSubmit = true;


      this.utils.loadingPresent()
      let params = new FormData();
      this.config.user.phone =(this.CountryCode+this.regForm.controls.phone.value).split('+')[1]
      params.append('phone', this.CountryCode.slice(1 , this.CountryCode.length)+this.regForm.controls.phone.value);//this.regForm.controls.phone.value);
      params.append('name', this.regForm.controls.username.value);
      params.append('storeName', this.regForm.controls.storeName.value);
      params.append('password', this.regForm.controls.password.value);
      params.append('farm_size', this.regForm.controls.size.value);
      params.append('email', this.regForm.controls.email.value);
      params.append('phone2', this.regForm.controls.phone2.value);
      params.append('address2', this.regForm.controls.address2.value);
      params.append('home_type', this.regForm.controls.home_type.value);
      params.append('role_name',this.loginRoleId==2?'user':'farmer');
      params.append('device_id', this.config.device_id);
      // params.append('plants', this.regForm.controls.plants.value.join(','));
      var route = "auth/signup";
      
      
      this.fetch.post(route, params)
      .subscribe(async (data:any)=> {
        this.utils.loadingDismiss()
        this.disableSubmit = false;
        var user = data.user
        user.token = data.access_token
        localStorage.setItem("user" , JSON.stringify(user))
        this.config.user = user
        if (data.access_token) {
          this.config.all_user_data = data
          
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("role_id", "2");
          if(this.CountryCode=='+962'){
            localStorage.setItem("is_jordan", "1");
            this.config.is_jordan = true
          }else{
            localStorage.setItem("is_jordan", "0");
            this.config.is_jordan = false
          }
          this.preformRegister(data.access_token, this.loginRoleId, data.user_id);
        }
        else {
          this.fetch.errorToast(data.error);
        }
      }, async error => {
        console.log("error",error)
        this.utils.loadingDismiss()
        this.utils.toast(error.error.text)
      })
    }
    else {
      if (this.regForm.controls.password.value != this.regForm.controls.confirmPassword.value) {
        this.fetch.errorToast("كلمة السر غير متطابقة");
      }
      else if (this.regForm.controls.phone.status != 'VALID') {
        this.fetch.errorToast("رقم الهاتف غير صحيح")
      }
      else {
        this.fetch.errorToast("جميع الحقول مطلوبة")
      }
    }
  }

  preformRegister(access_token, role_id, user_id){
    this.config.token = access_token;
    this.config.role_id =  role_id;
    this.config.user.id = user_id;
    if(!this.config.user.token){
      this.config.user.token = access_token

    }
    // this.oneSignal.sendTag('userId', user_id);
    // this.oneSignal.sendTag('roleId', role_id);

    this.navCtrl.navigateRoot(['select-plants'] , {queryParams:{role_id}});
  }

  public preformLogin(access_token, role_id, user_id) {
    this.config.token = access_token;
    this.config.role_id =  role_id;
    // this.config.user.id = user_id;
    if(!this.config.user.token){
      this.config.user.token = access_token

    }
    // this.oneSignal.sendTag('userId', user_id);
    // this.oneSignal.sendTag('roleId', role_id);

    this.navCtrl.navigateRoot('tabs/home');
  }


  getUserDetailf(userid) {
   }

   
   public b64toBlob(b64Data, contentType='', sliceSize=512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  public goToForgetPage() {
    this.navCtrl.navigateForward("forget");
  }
  

  async changeCountry(){
    let header = '' ;
    if(this.lang == 'ar')
    header = 'اختر الدولة';
    else
    header ='Choose Country';
    const actionSheet = await this.actionSheet.create({
      cssClass:'action-sheet' ,
      header: header ,
      buttons: [ ]
    });
    actionSheet.buttons = [] ;
    for (let i = 0; i < this.CountryJson.length; i++) {
      if(this.lang == 'ar'){
        actionSheet.buttons.push({'text': this.CountryJson[i].name + '  ' + this.CountryJson[i].dial_code , role: 'destructive' ,
        handler: () =>{
          this.selectCountry(i);
        }
      });
      } else {
        actionSheet.buttons.push({'text': this.CountryJson[i].name_en + '  ' + this.CountryJson[i].dial_code , role: 'destructive' ,
        handler: () =>{
          this.selectCountry(i);
        }
      });
      }


    }

    await actionSheet.present();
  }
  selectCountry(index){
    this.CountryCode = this.CountryJson[index].dial_code ;
    this.CountryFlag = this.CountryJson[index].flag ;
    console.log("Country code ",this.CountryCode )

}

acceptTermsFunc(){
  console.log("acc ",this.acceptTerms)
  this.acceptTerms =! this.acceptTerms
}

_terms(){ //for testing purposes
  const browser = this.iab.create('http://slyd4r.net/privacy-policy');
}

async terms(){

  let modal = this.popover.create({
    component:PrivacyPolicyPage , 
    componentProps :{
    }
  });
  
  (await modal).onDidDismiss().then((data:any)=>{
    
  })

  return (await modal).present();

}
test(){
  this.navCtrl.navigateForward("detect")
}
}
