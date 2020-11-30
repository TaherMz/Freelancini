import { Injectable } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import'rxjs/add/operator/switchMap';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
private connect = new BehaviorSubject<boolean>(false);
c=this.connect.asObservable();
con (va : boolean){
this.connect.next(va);
}
private clientt = new BehaviorSubject<boolean>(false);
cl=this.clientt.asObservable();
clie (va : boolean){
this.clientt.next(va);
}
private _client = false ;
get client(){
  return this._client;
}
set client(value: boolean) {
  this._client = value;
}
private enventAuthError=new BehaviorSubject<string>("");
enventAuthError$=this.enventAuthError.asObservable();
  nfreelancer:Observable<any>;
  nclient:Observable<any>;
  ndomain :any;
private dbPath = 'Freelancer';
private id;
private dbPath2='Client';
freelancercat: AngularFirestoreCollection<any>;
clientcat:AngularFirestoreCollection<any>;
  
  constructor(public free: AngularFirestore,private afAuth:AngularFireAuth,public router:Router) { 
    this.freelancercat=free.collection(this.dbPath);
    this.clientcat=free.collection(this.dbPath2);
    this.nfreelancer=free.collection(this.dbPath).valueChanges();
    this.nclient=free.collection(this.dbPath2).valueChanges();
  }
  getConnect()
{
 return this.afAuth.authState;
 

}
getFreelancer()
{
  return this.nfreelancer;
}
getClient()
{
  return this.nclient;
}
  //partie ajout freelacner et client au  meme temp creation d'authentification
createfreelancer(freelancer,domaine)
{
this.afAuth.createUserWithEmailAndPassword(freelancer.email,freelancer.password)
.then(()=>{
  this.nfreelancer=freelancer;
  this.ndomain=domaine;
  this.addfreelancer(freelancer,domaine).then(()=>{
    this.router.navigate(['/accueil']);
  }
 

  );
})
.catch(error=>{this.enventAuthError.next(error)})
}

  addfreelancer(info,info2){
   return( this.freelancercat.add(info).then(ref=>{
      this.id =ref.id;
      console.log(this.id);
      this.freelancercat.doc(this.id).update(info2);
    }))
   
    }

    createclient(client)
    {
      this.afAuth.createUserWithEmailAndPassword(client.email,client.password)
      .then(UserCredential=>{
        this.addclient(client).then(()=>{this.router.navigate(['/accueil']);console.log("jfuhjk")})
      
      })
      .catch(error=>{this.enventAuthError.next(error)})
    }

    addclient(info)
    {
      return this.clientcat.add(info);
    }
  
  //partie login et logout freelancer et client
  loginf(email,password)
  {
    this.afAuth.signInWithEmailAndPassword(email,password)
    .catch(error=>{this.enventAuthError.next(error)})
    .then(UserCredential=>{
      if(UserCredential){this.router.navigate(['/fprofil']);console.log("yes");}
    })
    
  }
loginc(email,password)
{
  this.afAuth.signInWithEmailAndPassword(email,password)
  .catch(error=>{this.enventAuthError.next(error)})
  .then(UserCredential=>{
    if(UserCredential){this.router.navigate(['/accueil']);console.log("yes");}
  })
}
  logout()
  {
    this.afAuth.signOut()
  }
}
