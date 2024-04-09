import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import { HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPage } from '../product/product.page';
import { Assets } from 'src/app/constants/constants';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  just_show = false
assets=Assets
  showMore = false;
  slideOptsOne  = {
    freeMode : true ,
    initialSlide: 0,
    slidesPerView: 3,
    autoplay: false,
    spaceBetween: 1
  };

  productSlideOptions  = {
    freeMode : true ,
    initialSlide: 0,
    // slidesPerView: 2.2,
    autoplay: false,
    spaceBetween: 1
  };
  show_confirm_result =true;
  disease_id : any = 50;
  products = []
  result :any = {
    name:'',
    description:''
  }
   loaded = false
   img;
   probability;
  constructor(
    public utils: UtilsService,
    public fetch:FetchService , 
    public config:ConfigService , 
    private navCtrl:NavController ,
    private route:ActivatedRoute ,
    public modalCtr:ModalController ,
    private router: Router

  ) { 
    route.queryParams.subscribe((res)=>{

      if (this.router.getCurrentNavigation().extras.state) {
        this.probability = this.router.getCurrentNavigation().extras.state.probability;
        this.disease_id = this.router.getCurrentNavigation().extras.state.disease_id;
        this.img = this.router.getCurrentNavigation().extras.state.img;
        if(!this.router.getCurrentNavigation().extras.state.just_show){
          this.storeResult()
        }else{
          this.showMore= true;
          this.show_confirm_result = false;
          this.just_show = true
        }
        this.loadResult()
      }
   
      
    })
    
  }
  async ngOnInit() {
  }
  
  loadResult(){
    let headers = new HttpHeaders();
    this.fetch.get('disease/'+this.disease_id, headers)
    .then((res:any)=> {
      this.loaded = true
      let data 
      if(res.status){
        if(res.data.images) res.data.images = JSON.parse(res.data.images)
        else res.data.images = []
        data = res.data
      }else{
        this.fetch.errorToast(res.msg)
      console.log("ERR ",res)
      this.products = []
      return
      }
      this.result = res.data
      this.products= data.medicines
      for(let pro of this.products){
        pro.count = 1
      }
      for(let img of this.result.images){
        
          console.log("SRC ",img)
          // img.src = img.src.split("\\").join("/")
        
        
      }
    }).catch(err=>{
      this.loaded = true

      console.log("ERR ",err)
      this.fetch.errorToast();
    })


  }
  close(){
    if(this.just_show) this.navCtrl.pop()
    else this.navCtrl.navigateRoot('tabs/home')
  }

  storeResult(){
    let params = new FormData();
      params.append('user_id', this.config.user.id);
      params.append('disease_id', this.disease_id);
      params.append('confirm_result', "1");
      params.append('base64_image', this.img);
    this.fetch.post('add-result' , params).subscribe((res)=>{
      console.log("")
    })
  }

  accept_result(val){
    this.show_confirm_result = false
    if(val=='no'){
      this.modalCtr.dismiss({chat: true})
      this.navCtrl.navigateRoot("chats")
    }
  }


}
