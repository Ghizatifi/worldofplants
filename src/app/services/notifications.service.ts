import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { ConfigService } from './config.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  public notifications:any = [];
  constructor(
    private fetch: FetchService,
    private config: ConfigService
  ) { 

  }

  public getNotifications() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('auth/user/notifications', headers)
    .then((data)=> {
      this.notifications = data;
    })
  }

  public getUnreaden() {
    return this.notifications.length ? this.notifications.filter((msg)=> msg.readen == 0 ) : [];
  }

  public readAll() {
    return
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.get('auth/user/readNotifications', headers)
    .then((data)=> {
      console.log("notificatons ",data)
      this.notifications = data;
    },err=>console.log("notifi err ",err))
  }

}
