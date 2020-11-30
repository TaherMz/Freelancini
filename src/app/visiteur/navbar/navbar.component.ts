import { Component, OnInit } from '@angular/core';
import{MatDialog,MatDialogConfig} from '@angular/material'
import { InscritFComponent } from 'src/app/freelancer/inscrit-f/inscrit-f.component';
import { InscritCComponent } from 'src/app/client/inscrit-c/inscrit-c.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public popupf:MatDialog,public popupc:MatDialog,public popupconnect:MatDialog,
    private service:InscriptionService, private router:Router) { }
connect : boolean;
client : boolean;
  ngOnInit() {
    this.service.c.subscribe(o=>this.connect=o);
    this.service.cl.subscribe(o=>this.client=o);
console.log('**'+this.connect);
  }
ffree()
{
  this.popupc.closeAll();
  const config=new MatDialogConfig();
    
    config.autoFocus=true;
    config.width="77%";
    config.position={
      top:'60px',
      
    };
    this.popupf.open(InscritFComponent,config);
    
}
fcli(){
  this.popupf.closeAll();
  const config=new MatDialogConfig();
  config.position={
    top:'60px',
    
  };
  config.autoFocus=true;
  config.width="77%";
  
  this.popupc.open(InscritCComponent,config);
}
stype()
{
  const config=new MatDialogConfig();
  config.position={
    top:'60px',
    
  };
  config.autoFocus=true;
  config.width="77%";
  this.popupconnect.open(ConnexionComponent,config);
}
logout(){
  this.service.logout();
  this.router.navigate(['/accueil']);
  this.service.con(false);
}
}
