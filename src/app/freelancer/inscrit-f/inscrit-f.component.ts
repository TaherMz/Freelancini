import { Component, OnInit } from '@angular/core';
import{InscriptionService}from'../../services/inscription.service'
import {FormBuilder, FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import {map,take,debounceTime} from 'rxjs/operators'
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { AuthService } from '../../chat/services/auth/auth.service';
import { ApiService } from '../../chat/services/api/api.service';
import { HelperService } from '../../chat/services/helper/helper.service';

@Component({
  selector: 'app-inscrit-f',
  templateUrl: './inscrit-f.component.html',
  styleUrls: ['./inscrit-f.component.css']
})
export class InscritFComponent implements OnInit {
domainee:string[]=['E-commerce','Web','Développement','Graphisme','Services','Webmarketing','autre'];


  vinformation= new FormGroup({
    reclamation:new FormControl(0),
    point:new FormControl(25),
    img:new FormControl(''),
    prenom:new FormControl('',[Validators.required]),
    nom:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email],EmailValidator.mail(this.afs)),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    genre:new FormControl(0,[Validators.required]),
    tel:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]),
    
    
  });
 vdomain=new FormGroup({
  domaine:new FormControl(),
description:new FormControl('',[Validators.required]) ,


});

 
  constructor(private service:InscriptionService,private _formBuilder:FormBuilder,private afs:AngularFirestore,private route:Router,
    private api:ApiService,private helper:HelperService, private auth:AuthService) { }
    
  
  ngOnInit() {
  
    


}
register(){
    
this.auth.signup('chat'+this.vinformation.get('email').value, this.vinformation.get('password').value).then(data=>{
  console.log('user', data.user);
  
  this.api.createUser(data.user.uid, {
    name: this.vinformation.get('nom').value+' '+this.vinformation.get('prenom').value, 
    email: 'chat'+this.vinformation.get('email').value,
    uid: data.user.uid,
    conversations:[]
  }).then(()=>{
    localStorage.setItem('uid', data.user.uid)
    this.route.navigate(['/accueil']).then(()=>{
      setTimeout(()=>{
        this.helper.openSnackBar('Welcome', 'Close');

      }, 300)
    })
  })
},err=>{
this.helper.openSnackBar(err.message, 'Close');


});
}


  
 

insc()
{
  if(this.vinformation.get('genre').value==1)

  {
    this.vinformation.patchValue({
    genre:"Homme",
    img:"https://p7.hiclipart.com/preview/518/320/1007/computer-icons-mobile-app-development-android-my-account-icon.jpg"
  })
  this.register();
   this.service.createfreelancer(this.vinformation.value,this.vdomain.value);
   
}
else{
  this.vinformation.patchValue({
    genre:"Femme",
    img:"https://cdn4.iconfinder.com/data/icons/flat-shaded-2/512/User-Female-512.png"
  })
  this.register();
  this.service.createfreelancer(this.vinformation.value,this.vdomain.value);
  
}

}
}
export class EmailValidator{
  static mail(afs:AngularFirestore){
    return (control:AbstractControl)=>{
const mail=control.value.toLowerCase();
return afs.collection('Freelancer',ref=>ref.where('email','==',mail))
.valueChanges().pipe(debounceTime(500),take(1),map(arr=>arr.length ?{emailAvailable:false }:null),)

    }
  }
}