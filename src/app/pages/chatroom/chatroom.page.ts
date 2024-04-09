import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ActionSheetController, Platform, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { FetchService } from 'src/app/services/fetch.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'
import { UserService } from '../../services/user.service';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FireService } from 'src/app/services/fire.service';
import { Assets } from 'src/app/constants/constants';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  
  @ViewChild('IonContent', { static: true }) content: IonContent
  start_typing = false;
User=''; // get the user id only
consult; //we use this to check the status of the current consult .. if it's closed user will ne be able to send messages
consult_key;
consult_id;
chatData ;
user_input = ''
user_input_image;
assets = Assets;
paramData = {
  name:'', image:'assets/images/logo.png'
}
  msgList :any = [
  ]
  loader = false;
  constructor(
    public actionSheetCtrl:ActionSheetController ,
    public fetch: FetchService,
    public config: ConfigService ,
    public route:ActivatedRoute ,
    public userService:UserService , 
    public camera:Camera ,
    public platform:Platform,
    private navCtrl: NavController,
    public file:File ,
    public filePath:FilePath ,
    public fireService: FireService,
    public utils: UtilsService
  ) {
    this.User = config.user.id
    route.queryParams.subscribe(res=>{
      this.chatData = res
      if(!res.id){
        return;
      }
      this.consult_id = res.id;
      this.getMessages()
    })
   }

  ngOnInit() {
    this.utils.loadingPresent()

  }

  sendMsgFire(message , type){
    let msg = {
      sender:  this.config.user.id ,
      message_type:type , 
      type: type ,
      msg: message ,
      date : new Date()
    }
    this.fireService.sendMsg(this.consult_key , msg)
  }
  sendMsg() {
    if(this.consult.status==0){
      this.fetch.errorToast("لقد تم إغلاق هذه الدردشة")
      return
    }
    if (this.user_input !== '' || this.user_input_image) {

      if(this.user_input_image){
        this.utils.loadingPresent()
        let payload = new FormData()
        payload.append('image',this.user_input_image)
        let headers = new HttpHeaders().set("Authorization", "Bearer " + this.config.token);
        this.fetch.post('upload-file', payload , headers)
        .subscribe((res:any)=> {
          this.utils.loadingDismiss()
        if(res.status){
          this.sendMsgFire(res.url , 'image')
          this.user_input_image = null
        } }, err=> this.utils.loadingDismiss())

      }else{
        this.sendMsgFire(this.user_input , 'text')
        this.user_input = ''
      }

    }
  }
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: "../../assets/chat/chat5.jpg",
        time: "12:01",
        message: "Pagas, this themes support but ionic 3 ionic 4, etc.."
      });
      this.loader = false;
      this.scrollDown()
    }, 2000)
    this.scrollDown()
  }
  scrollDown() {
    console.log("scrol")
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 500);
  }

  userTyping(event: any) {
    // console.log(event);
    this.start_typing = event.target.value;
    this.scrollDown()
  }

  getMessages(){
    this.consult = null;
    this.fireService.getConsult(this.consult_id).subscribe((res)=>{
      if(res.length>=1){
        this.consult_key = res[0].key;
      this.fireService.getChat(this.consult_key).subscribe((consult:any)=>{
        this.utils.loadingDismiss()
      this.consult = consult
      console.log("consult ",this.consult)
      this.msgList = consult.chat?Object.values(consult.chat): []
      this.scrollDown();
    })}
      else {
        this.utils.loadingDismiss()
        this.fireService.createConsult(this.consult_id)}
    },err=>{
      this.utils.toast()
      this.utils.loadingDismiss()
    })

  }

  pop(){
    this.navCtrl.back()
  }

  async getPhoto(){
    let buttons = [
      {
        text: "تصوير صورة",
        icon: 'camera',
        handler: () => {
          this.TakePhoto();
        }
      }
      ,{
        text: "إختيار من الإستديو",
        icon: 'images',
        handler: () => {
          this.uploadfn();
        }
      }
      ,{
        text: "إلغاء",
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

  public TakePhoto() {
    let sourceType = this.camera.PictureSourceType.CAMERA
      var options: CameraOptions = {
          quality: 100,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true ,
          destinationType: this.camera.DestinationType.DATA_URL
      };
  
      this.camera.getPicture(options).then(imagePath => {
          
        this.convertImage('data:image/jpeg;base64,' + imagePath);
      });
  
  }
  async convertImage(photo){
    const response = await fetch(photo);
    const blob = await response.blob();
    
    this.user_input_image = blob
    this.sendMsg()

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
              this.user_input_image = file
              this.sendMsg()
            }
          };
        }
  };
        input.change(trigger);
        input.attr('accept', 'image/x-png,image/png,image/jpeg');
        input.trigger("click"); 
  }
}
