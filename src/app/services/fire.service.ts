import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import {AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { FetchService } from './fetch.service';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  loading = true;
  consult

  ConsultsRef: AngularFirestoreCollection<any>;

  constructor(
    public afs: AngularFirestore ,
    public db: AngularFireDatabase ,
    public configService: ConfigService,
    public fetchService: FetchService

  ) { 
    // let consults = db.object('consults');
    // consults.set({"chat" : [] , "status": 1 , "user_id" : 1}).then((res)=>{
    //   console.log("res" , res)
    // })
    this.getChat(5)
    // this.db.object('consults/2').valueChanges().subscribe((res)=>{
    //   console.log("consults are ",res)
    // })
    // console.log("init firebase services")

    // this.db.
    // this.ConsultsRef = afs.collection('consults'); 
    // this.chats = this.ConsultsRef.valueChanges();

    // this.changes('consults').subscribe((res)=>{
    // })
    // this.create("consults/1/chats", "hello").then((res)=>console.log("res" ,res))
  }

  getConsult(consult_id){
    return this.db.list("consults" , ref=>
    ref.orderByChild('consult_id').equalTo(consult_id)).snapshotChanges()
  }
  getChat(consult_key){
    return this.db.object("consults/"+consult_key).valueChanges()
  }
  sendMsg(consult_key , msg){ //msg object of message {msg:}
    console.log("msg ",msg)
    this.db.list("consults/"+consult_key+"/chat").push(msg)
  }
  createConsult(consult_id){
    this.db.list("consults").push({"status" : 1 , "user_id": this.configService.user.id , "consult_id": consult_id } )
  }

  create(path , msg) {
    return this.afs.collection(path).add({"from":1 , type: "text" , msg});
  }

  changes(path) {
    return this.afs.collection(path).snapshotChanges();
  }

  get(path) {
    return this.afs.doc(path).get()
  }
  
  read(path) {
    return this.afs.collection(path).get();
    // return this.afs.collection(path).snapshotChanges();
  }

  update(path, msg) {
    this.afs.doc(path+'/'+msg).update(msg);
  }

  delete(path , msg) {
    this.afs.doc(path + '/' + msg).delete();
  }
}
