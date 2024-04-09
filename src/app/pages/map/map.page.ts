import { ViewChild,Component, OnInit, ElementRef } from '@angular/core';
import { NavParams, ModalController, LoadingController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {
  GoogleMapsEvent,
  Marker,
  LatLng,
} from '@ionic-native/google-maps';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
declare var google;
import * as $ from 'jquery';
import { ConfigService } from '../../services/config.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map', {static: null, read: null}) mapElement: ElementRef;
  public lat:any;
  public lng:any;
  public map:any;//GoogleMap;
  public myLat:any;
  iconBase ={
    url: "https://app.worldofplants.ai/storage/marker.png",
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(50, 50)    ,
  }
  public myLng:any;
  public locationMarker:Marker;
  public havePermission:boolean = true;
  public locationInterval:any;
  public loading:any;
  constructor(
    // private navParams: NavParams,
    private geolocation: Geolocation,
    private modalCtrl: ModalController,
    private androidPermissions: AndroidPermissions,
    private loadingCtrl: LoadingController,
    private locationAccuracy: LocationAccuracy,
    private platform:Platform,
    private config: ConfigService ,
    public utils: UtilsService
  ) { }

  async ngOnInit() {
    
    this.showLocationPermissions();

    this.platform.backButton.subscribeWithPriority(999, async () => {
      console.log("nope!");
    });
  }

  showLocationPermissions() {
    if(this.platform.is("cordova")){
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
        result => {
          this.havePermission = result.hasPermission;
          if (result.hasPermission == false) this.givePermission()
          else {
            this.locationAccuracy.canRequest().then((canRequest: boolean) => {
  
              if(canRequest) {
                // the accuracy option will be ignored by iOS
                this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                  (ok) => {
                    console.log("Good:", ok)
                    setTimeout(()=> {
                      this.loadMapBrowser();
                    }, 1000)
                  },
                  error => {
                    console.log("Error", error);
                    setTimeout(()=> {
                      this.loadMapBrowser();
                    }, 1000)
                  }
                );
              }
            
            });
            
          }
          console.log('Has permission?',result.hasPermission)},
          
        err => {
          this.givePermission();
          this.havePermission = false;
        }
      );
    }else{
      this.loadMapBrowser()
    }
    
  }



  public givePermission() {
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then((ok)=> {
      this.havePermission = ok.hasPermission;
      if (ok.hasPermission == true)
      setTimeout(()=> {
        this.loadMapBrowser();
      }, 3000)
    });
  }

  ionViewWillLeave() {
    this.config.mapOpened = false;
    return
  }

  
  public async loadMapBrowser() {

    const location = new google.maps.LatLng(31.943297, 35.934779);
    const options = {

      center:location,
      zoom:17,
      mapTypeControl: false,
      disableDefaultUI: true,
      streetViewControl: false,
      mapTypeIds:'ROADMAP'

};

     this.map  = new google.maps.Map(this.mapElement.nativeElement,options);


     

      

    // var iconBase = 'https://ranrival.site/imgs/Drop-off.svg/';

  

     this.map.addListener('click',async (e)=>{
      let latLng: LatLng = e.latLng.toJSON();
      console.log("location is ",latLng)
       this.lat = latLng.lat;
       this.lng = latLng.lng;
      this.markerToPosition(latLng)
     })
   }
 
   markerToPosition(latLng){
     console.log("latLng ",latLng)
    if (!this.locationMarker) {
      this.locationMarker = new google.maps.Marker({
       position: latLng,
       map: this.map,
       icon: this.iconBase,
       draggable: false,
       animation: google.maps.Animation.DROP
 
     }) ;
 
    }
    else {
      this.locationMarker.setPosition(latLng);
    }
   }


  public focusMap() {
    this.map.animateCamera({
      target: new LatLng(this.myLat, this.myLng),
    });

  }
  public async getLocation() {
    this.loading = await this.loadingCtrl.create({
      message: this.utils.translator("getting_location"),
    });
    this.loading.present();

      this.geolocation.getCurrentPosition()
      .then((location: any) => {
      console.log("My Location:", location);

      this.myLat = location.coords.latitude;
      this.myLng = location.coords.longitude;
      this.loading.dismiss();
      // Move the map camera to the location with animation
      this.map.moveCamera({
        center: new google.maps.LatLng(this.myLat, this.myLng),
        zoom: 16,
      });

      // add a marker
      this.markerToPosition({lat:location.coords.latitude , lng:location.coords.longitude})

      // show the infoWindow

      // If clicked it, display the alert
    } , err=>{this.loading.dismiss();})
    .catch(err => {
      console.log("Error",err);
      this.loading.dismiss();
    });
  }

  public ok() {

  this.modalCtrl.dismiss({
    lat: this.lat,
    lng: this.lng
  });
  // this.map.getCameraPosition();
  
  }

  public back() {
    this.modalCtrl.dismiss();
  }

}
