import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { FetchService } from '../../services/fetch.service';
import { ConfigService } from '../../services/config.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { MapPage } from '../map/map.page';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {
  public areas:any = [];
  public city_areas:any = [];
  public citys:any = [];
  public phone:any;
  public city:any;
  public lat;
  public lng;
  public area:any;
  public street;
  public loading:boolean = false;
  public isEdit:boolean = false;
  public addressId:any;
  constructor(
    private fetch: FetchService,
    private config: ConfigService,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navParams: NavParams,
    public userService: UserService,
    public utils: UtilsService 

  ) { }

  changeCity(){
    this.city_areas =this.areas.filter((a)=>a.city_id==this.city)
  }
  ngOnInit() {
    this.utils.loadingPresent()
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('auth/areas', headers)
    .then((res:any)=> {
      this.utils.loadingDismiss()
      this.areas = res.data.areas;
      this.citys = res.data.citys;
    });
    this.isEdit = this.navParams.get('edit');
    if (this.isEdit) {
      return;
      let address = this.navParams.get('address');
      console.log('address', address)
      this.addressId = address.id;
      this.phone = address.phone;
      this.city = address.area.city_id;
      this.area = address.area.id;
    }
  }

  public async save() {
    if (this.area && this.city) {
      this.loading = true;
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      let params = new HttpParams()
      // .set('phone', this.phone)
      .set('area_id', this.area)
      .set('address', this.street)
      this.fetch.post('auth/address/add', params, headers)
      .subscribe(async (res:any)=> {
        if(res.status) this.config.user= res.user
        this.config.user.area_id = this.area;
        localStorage.setItem("user" , JSON.stringify(this.config.user))
        this.loading = false;
        this.utils.toastTranslate("address_created_success")
        this.modalCtrl.dismiss(true);
      },
      error => {
        this.loading = false;
      })
    }
    else {
      let alert = await this.alertCtrl.create({
        header: this.utils.translator("error"),
        message: this.utils.translator("all_fields") 
      })
      alert.present();
    }
  }

  public async saveEdit() {
    if (this.area && this.city) {
      this.loading = true;
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      let params = new HttpParams()
      .set('area_id', this.area)
      .set('address', this.street)
      this.fetch.post('auth/address/edit/' + this.addressId, params, headers)
      .subscribe(async (data)=> {
        this.loading = false;
        this.utils.toastTranslate("address_edited_success")
        this.modalCtrl.dismiss(true);
      },
      error => {
        this.loading = false;
      })
    }
    else {
      let alert = await this.alertCtrl.create({
        header: this.utils.translator("error"),
        message: this.utils.translator("all_fields") 
      })
      alert.present();
    }
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
        this.lat = data.data.lat;
        this.lng = data.data.lng;
        
      }
    })
    modal.present();
  }

}
