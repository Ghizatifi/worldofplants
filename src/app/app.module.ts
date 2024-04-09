import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import{firebaseConfig} from "./constants/config"


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EditAddressPageModule } from './pages/edit-address/edit-address.module';
import { MapPageModule } from './pages/map/map.module';
import { PagePageModule } from './pages/page/page.module';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { GoogleMaps } from '@ionic-native/google-maps';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { CameraPreview} from '@ionic-native/camera-preview/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { TipsPageModule } from './pages/tips/tips.module';
import { SubscribePageModule } from './pages/subscribe/subscribe.module';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


import { IonicImageLoaderModule } from 'ionic-image-loader-v5';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { ResultPageModule } from './pages/result/result.module';
import { ProductPageModule } from './pages/product/product.module';
import { RatePageModule } from './pages/rate/rate.module';
import { PrivacyPolicyPageModule } from './pages/privacy-policy/privacy-policy.module';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ImageViewerPageModule } from './pages/image-viewer/image-viewer.module';
import { SelectPlantsPageModule } from './pages/login/select-plants/select-plants.module';
import { ChatInstructionsPageModule } from './pages/chatroom/chat-instructions/chat-instructions.module';



// impo
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent ,
    ],
  entryComponents: [
    
  ],
  imports: [
    ImageViewerPageModule,
    ChatInstructionsPageModule,
    SelectPlantsPageModule,
    NgxSliderModule ,
    IonicImageLoaderModule ,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    EditAddressPageModule,
    MapPageModule,
    RatePageModule ,
    PrivacyPolicyPageModule ,
    PagePageModule ,
    TipsPageModule  ,
    // ResultPageModule ,
    SubscribePageModule ,
    ProductPageModule ,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
     AngularFireModule.initializeApp(firebaseConfig.appConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    WebView,
    SocialSharing ,
    InAppBrowser , 
    StatusBar,
    SplashScreen,
    Geolocation,CameraPreview ,Camera ,File ,FilePath,
    // OneSignal,
    AndroidPermissions,
    GoogleMaps,
    LocationAccuracy,
    LaunchNavigator,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
