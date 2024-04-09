import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {
  order_id: string;
  reason
  loading = false
  constructor(
    private userService:UserService,
    private fetch:FetchService,
    private config:ConfigService ,
    public utils: UtilsService,
    private route: ActivatedRoute,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.config.token = localStorage.getItem("token")
    this.route.queryParamMap.subscribe((res:any)=>{
      console.log("params ",res)
      this.order_id = res.params.order_id
    })

  }

  submit(){
    this.loading = true
    let lnk = "auth/order/cancel"
    let payload ={
      order_id: this.order_id,
      reason:this.reason}
    
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
    this.fetch.post(lnk,payload,headers).subscribe((res:any)=>{
      this.loading = false
      if(res.status){
        this.utils.toastTranslate('success')
        this.navCtrl.navigateRoot("tabs/home")
      }
    } , er=>{this.loading = false})
  }
}
