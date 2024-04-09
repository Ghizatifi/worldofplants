import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController, PopoverController } from '@ionic/angular';
import { FetchService } from 'src/app/services/fetch.service';
import { ConfigService } from 'src/app/services/config.service';
import { HttpHeaders } from '@angular/common/http';
import { ChatInstructionsPage } from '../chatroom/chat-instructions/chat-instructions.page';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  segmentTab: any;
  chatData = []
  fetch_requested = false;
  consults_open ;
  constructor(
    public navCtrl:NavController ,
    public fetch: FetchService,
    public config: ConfigService,
    private popOverCtrl: PopoverController
  ) { 
    console.log("user ",config.user)
}

ionViewDidEnter(){
  this.getChats()
  this.showConstractions()
}

  async showConstractions(){
  let p = await this.popOverCtrl.create({
    component: ChatInstructionsPage,
    cssClass:"popover"
  })
  p.present()
}
ngOnInit() {
  // this.getChats()
}

getChats(){
  let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      this.fetch.get('chats', headers)
      .then((res:any)=> {
        this.fetch_requested = true
        let data 
        console.log("chats s , ",res)

        this.consults_open =false;
        if(res.status){
          data = res.data
        }else{
          this.fetch.errorToast(res.msg)
        console.log("ERR ",res)
        this.chatData = []
        return

        }
        

        this.chatData= data
        this.consults_open =false
        for(let d of data){
          if(d.status==1){
            this.consults_open = true
            console.log("an open consult")
            break
          }
        }
      }).catch(err=>{
        this.fetch_requested = true
        console.log("ERR ",err)
        this.fetch.errorToast();
      })
}

goforChat(chat) {
  console.log("chat id ",chat.id)
  this.navCtrl.navigateForward(['chatroom'], {queryParams:chat});

}

create_chat(){
  //this functions is fired from the html .. and it will check if there are oppend consults
    if(this.consults_open==true){
      this.fetch.errorToast("عليك أغلاق الإستشارات المفتوحة")
      return
    }
    else if(this.chatData.length>2){
      this.fetch.errorToast("عليك الإشتراك في إحدى الباقات")
      return
    }
    else{
      this.createChat()
    }
    
}

createChat(){
  let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
      this.fetch.get('chat/create', headers)
      .then((res:any)=> {
        if(res.status){
          let chat = {id:res.consult_id,consults_open :true , status: 1}
        this.chatData.push(chat)
        this.goforChat(chat)
        
        }
        else{
          this.fetch.errorToast()
        }
      })
}

}