import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { FetchService } from '../../services/fetch.service';
import { HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery'
import { ActionSheetController, ModalController, LoadingController, NavController, AlertController } from '@ionic/angular';
import { MapPage } from '../map/map.page';
import { config } from 'rxjs';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UserService } from 'src/app/services/user.service';
import { SelectPlantsPage } from '../login/select-plants/select-plants.page';
import { UtilsService } from 'src/app/services/utils.service';
import { TestPage } from '../test/test.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public plants=[];

  public_ = 'public/'
  street;
  deletingAccount =false
  slideOpts  = {
    freeMode : false ,
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: false,
    // spaceBetween: 5
  };
  public farm_size;
  
  
  public imageEdited:any;
  public imgPreview:any;
  public imgBlob:any;
  public editing:boolean = false;
  public citys:any;
  public address:any;
  public areas:any;
  public city:string;
  public city_area:string;
  public city_areas;
  public password:string;
  public oldEmail:string;
  public oldPhone:string;
  constructor(private alertCtrl:AlertController ,
    public config: ConfigService,
    public fetch: FetchService,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController ,
    public utils: UtilsService,
    public userService:UserService
  ) { 

    
    this.config.user = JSON.parse(localStorage.getItem('user'))
    this.config.token = localStorage.getItem('token')
  }
  

  ngOnInit() {
    this.userService.get_plants()
  }

  async ionViewDidEnter() {
    let loading = await this.loadingCtrl.create({
      message: this.utils.translator("loading")
    });
    loading.present();
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('auth/user/account', headers)
    .then((res:any)=> {
      
      let data 
      loading.dismiss();

      if(res.status){
        data = res.data
      }else{
        this.fetch.errorToast(res.msg)
        
        return
      }
      if(this.config.is_jordan){
        //this.getAddress();
      }
      if(data.home_type){
        data.home_type=data.home_type.toString()
      }
      if (data.farm_size){
        this.farm_size =data.farm_size.toString()
      }
      
      if(data.plants){
        let pl = []
        data.plants.forEach(p => {
          pl.push(p.plants)
        });
        data.plants = pl
      }

      this.street= data.address

      this.plants = data.plants
      
      this.config.user = data;
      if(this.config.user.home_type!==null)
        this.config.user.home_type = this.config.user.home_type.toString()
     

      this.config.all_user_data = data;
      
      if (!this.config.user.city)
      this.config.user.city = ""; 
      this.fetchAreas()
    },err=>{
      loading.dismiss();
      console.log("ERR ",err)
    })
    

  }

  fetchAreas(){
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('auth/areas', headers)
    .then((res:any)=> {
      let data 
      if(res.status){
        data = res.data
      }else{
        this.fetch.errorToast();
        return
      }
      this.citys = data.citys;
      this.areas = data.areas;
      if (this.config.user.area) {
        console.log('user ',this.config.user)
        this.city = this.config.user.area.city.id;
        this.city_area = this.config.user.area.id;
      }
      this.oldEmail = this.config.user.email;
      this.oldPhone = this.config.user.phone;
    });
  }
  public async editImage() {
    let buttons = [
      {
        text: this.utils.translator("take_photo"),
        icon: 'camera',
        handler: () => {
          this.TakePhoto();
        }
      }
      ,{
        text: this.utils.translator("from_studio"),
        icon: 'images',
        handler: () => {
          this.uploadfn();
        }
      }
      ,{
        text: this.utils.translator("cancel"),
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

  public edit() {
    
    if(this.config.user.lat==null &&  !this.fetch.url.includes("localhost")){
      this.utils.toastTranslate("should_add_map_location")
      return;
    }
    if (this.phoneGood() && this.emailIsGood()) {
      
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      let params = new FormData();
      params.append('name', this.config.user.name);
      // params.append('plants', this.plants.join(','));
      params.append('storeName', this.config.user.storeName);
      // if (this.config.user.email != this.oldEmail)
      if (this.config.user.email != null)
      params.append('email', this.config.user.email);
      if (this.config.user.phone != this.oldPhone)
      params.append('phone', this.config.user.phone);
      params.append('city', this.config.user.city);
      if(this.city_area)
      params.append('area_id',this.city_area);
      else {
        this.utils.toastTranslate("should_add_area")
        return
      }
      params.append('latlng', this.config.user.lng + " " + this.config.user.lat);
      if (this.imageEdited)
      params.append('avatar', this.imgBlob);
      if(this.config.user.other_phone)
        params.append('other_phone', this.config.user.other_phone);
      if(this.config.user.home_type)
        params.append('home_type',  this.config.user.home_type);
      params.append('address', this.street);
      if (this.password)
      params.append('password', this.password);
      if(this.plants.length>0){
        let ids = []
        this.plants.forEach(pl => {
          ids.push(pl.id)
        });
      params.append('plants', ids.join(','));
      }
      if(this.farm_size)
      params.append('farm_size', this.farm_size);
      
      this.editing = true;
      this.fetch.post('auth/user/edit', params,headers)
      .subscribe(async (res:any)=> {
        let data
        if(res.status){
          data = res.data
        }else{
          this.fetch.errorToast(res.msg)
        }
        this.editing = false;
        if (!data.error) {
          // this.imageEdited = false;
          this.config.user= data;
        this.utils.toastTranslate("account_edited_success")
          this.config.user.area_id = this.config.user.area_id;
          localStorage.setItem("user" , JSON.stringify(this.config.user))
          this.oldEmail = this.config.user.email;
          this.oldPhone = this.config.user.phone;

          this.navCtrl.pop()
          if (this.config.user.phone_verified == 0)
            this.navCtrl.navigateRoot("active-phone");
        }
        else {
          this.fetch.errorToast(data.error);
        }
      }, error => this.editing = false)
    }
    else {
      this.utils.toastTranslate("phone_not_ok");
    }
  }

  public phoneGood() {
    return this.config.user.phone.length >= 3;
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
                    this.imgBlob = file;
                    this.imageEdited = true;
                }
              };
            }
      };
            input.change(trigger);
            input.attr('accept', 'image/*;capture=camera');
            input.trigger("click"); 
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
            }
          };
        }
  };
        input.change(trigger);
        input.attr('accept', 'image/x-png,image/png,image/jpeg');
        input.trigger("click"); 
  }

  public async selectLocation() {
    console.log(this.config.user.lat, this.config.user.lng)
    let modal = await this.modalCtrl.create({
      component: MapPage,
      componentProps: {
        lat: this.config.user.lat,
        lng: this.config.user.lng,
        showToast: true
      }
    })
    modal.onDidDismiss().then(async (data:any)=> {
      // console.log("Dismissed with data:", data);
      if (data.data && data.data.lat && data.data.lng) {
        this.config.user.lat = data.data.lat;
        this.config.user.lng = data.data.lng;
        console.log("latln",this.config.user.lat )
        console.log("latln",this.config.user.lng )
        
      }
    })
    modal.present();
  }

  public async changePasswrod() {
    let modal = await this.modalCtrl.create({
      component: TestPage,
    })
    modal.present();
  }

  public getAreas() {
    return this.areas ? this.areas.filter(area=> area.city_id == this.city): [];
  }

  public emailIsGood() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.config.user.email) return true
    else return re.test(this.config.user.email)
  }

  async logout(){
    let alert = await this.alertCtrl.create({
      header: this.utils.translator("logout"),
      message: this.utils.translator("areYouSureLogout"),
      buttons: [
        {
          role: "cancle",
          text:  this.utils.translator("cancel"),
        },
        {
          role: "cancle",
          text:this.utils.translator("logout"),
          handler: ()=> {
            localStorage.setItem('token', "");
            this.navCtrl.navigateRoot('login');
            this.config.user =  [];
          }
        }
      ]
    })
    alert.present();
  }
  
  changeCity(){
    this.city_areas =this.areas.filter((a)=>a.city_id==this.city)
  }

  async addPlant(){
    let modal = await this.modalCtrl.create({
      component: SelectPlantsPage,
      componentProps:{selected_plants_pushed:this.plants}
    })
    await modal.present()
    modal.onDidDismiss().then((res)=>{
      this.plants = res.data.plants
    })
  }
  removePlant(index){
    console.log("remote")
    this.plants.splice(index,1)
  }

  async deleteAccount(){

    let alert = await this.alertCtrl.create({
      header: this.config.translateInstant("delete_account"),
      message: this.config.translateInstant("are_you_sure_delete"),
      buttons: [
        {
          role: "cancle",
          text: this.config.translateInstant("cancel"),
        },
        {
          text: this.config.translateInstant("confirm"),
          handler: async ()=> {

            
            let lnk = "auth/account/delete"
    
            let loading = await this.loadingCtrl.create({
              message: this.config.translate.instant("loading")
            });
            this.deletingAccount = true
            loading.present();
            let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
            this.fetch.get(lnk, headers)
            .then((res:any)=> {
              this.deletingAccount = false
              loading.dismiss()
              localStorage.clear()
              this.navCtrl.navigateRoot("login")
            },err=>{
              this.deletingAccount = false
              loading.dismiss()
            }).catch((e)=>{
              this.deletingAccount = false
              loading.dismiss()
            })
          }
        }
      ]
    })
    alert.present();

  }

}
