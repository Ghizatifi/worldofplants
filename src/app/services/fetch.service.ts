import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { AppConstants } from '../constants/constants';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constants=AppConstants
  url         : String ;
  url_storage : String ;

  is_local = false
  is_wifi  = false
  
  constructor(
    public http: HttpClient, 
    private utils:UtilsService ,
    ) {
      this.urlSetup()
  }

  urlSetup(){
    this.is_local = this.constants.IS_SERVER_LOCAL
    if (this.is_local){
      if(this.is_wifi){
        this.url = this.constants.LOCAL_IP_API
        this.url_storage = this.constants.LOCAL_IP_STORAGE
      }else{
        this.url = this.constants.LOCALHOST_API
        this.url_storage = this.constants.LOCALHOST_STORAGE
      }
     
      }
      else{
        this.url  = this.constants.API_URL
        this.url_storage = this.constants.API_URL_STORAGE
      }

      this.utils.url_storage= this.url_storage
  }

  public get(route, headers = new HttpHeaders()) {
    return new Promise((resolve, reject)=> {
      this.http.get(this.url + route, {headers: headers}).subscribe((data)=> {
       resolve(data);
      },
      error => {
        reject(error);
      })
    })
}

public post(route, params, headers = new HttpHeaders()) {
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  console.log("headaer ",headers)
  return this.http.post(this.url+ route, params, {headers: headers})
}

public putt(route, params, headers = new HttpHeaders()) {
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.put(this.url + route, params, {headers: headers})
}

public async errorToast(msg:string = 'حصل خطأ ما أثناء الإتصال بالسيرفر') {
  this.utils.toast(msg)
}



}
