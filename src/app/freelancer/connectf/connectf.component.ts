import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Router } from '@angular/router';
import { AuthService } from '../../chat/services/auth/auth.service';
import { ApiService } from '../../chat/services/api/api.service';
import { HelperService } from '../../chat/services/helper/helper.service';

@Component({
  selector: 'app-connectf',
  templateUrl: './connectf.component.html',
  styleUrls: ['./connectf.component.css']
})
export class ConnectfComponent implements OnInit {
  test : boolean;
  autherr:any;
connect=new FormGroup({
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
});

  constructor(private service:InscriptionService,private route:Router,
    private api:ApiService,private helper:HelperService, private auth:AuthService) { }

  ngOnInit() {
    this.service.enventAuthError$.subscribe(data=>{this.autherr=data;})
  }
  login(){
  this.auth.login('chat'+this.connect.get('email').value , this.connect.get('password').value).then(data=>{
    console.log('data', data)
    // user login 
     this.route.navigate(['/fprofil']).then(()=>{
       this.api.setCurrentUser(data.user.uid)
      //  console.log(this.api.currentUser)
     })
  },err=> this.helper.openSnackBar(err.message, 'Close'));
}
  profil(){
    this.login();
    console.log(this.connect.get('email').value);
    this.service.loginf(this.connect.get('email').value,this.connect.get('password').value);
    this.service.client = false ;
    this.service.con(true);
    this.service.clie(false);
  }
}
