import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { InscriptionService } from 'src/app/services/inscription.service';
import { debounceTime, take, map } from 'rxjs/operators';
import { AuthService } from '../../chat/services/auth/auth.service';
import { ApiService } from '../../chat/services/api/api.service';
import { HelperService } from '../../chat/services/helper/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connecc',
  templateUrl: './connecc.component.html',
  styleUrls: ['./connecc.component.css']
})
export class ConneccComponent implements OnInit {
  connect=new FormGroup({
    email:new FormControl('',[Validators.required],EmailValidator.mail(this.afs)),
    password:new FormControl('',[Validators.required]),
  });
  constructor(private service:InscriptionService,private afs:AngularFirestore,private router:Router,
    private api:ApiService,private helper:HelperService, private auth:AuthService) { }

  ngOnInit() {
  }
  login(){
    this.auth.login('chat'+this.connect.get('email').value , this.connect.get('password').value).then(data=>{
      console.log('data', data)
      // user login 
       this.router.navigate(['/cprofil']).then(()=>{
         this.api.setCurrentUser(data.user.uid)
        //  console.log(this.api.currentUser)
       })
    },err=> this.helper.openSnackBar(err.message, 'Close'));
  }

  
   
  
   
    profil(){
      this.login();
      console.log(this.connect.get('email').value);
      this.service.loginc(this.connect.get('email').value,this.connect.get('password').value);
    this.service.client = true ;
    this.service.con(true);
    this.service.clie(true);
    }
}
export class EmailValidator{
  static mail(afs:AngularFirestore){
    return (control:AbstractControl)=>{
const mail=control.value.toLowerCase();
return afs.collection('Client',ref=>ref.where('email','>',mail))
.valueChanges().pipe(debounceTime(500),take(1),map(arr=>arr.length ?{emailAvailable:false }:null),)

    }
  }
}
