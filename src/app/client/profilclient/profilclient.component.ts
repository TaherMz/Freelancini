import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FreelancerService } from '../../services/freelancer.service';
import {MatDialog , MatDialogConfig} from '@angular/material'
import { Clients } from '../../classe/client';
import {Freelancers} from '../../classe/freelancer';
import {map} from 'rxjs/operators';

import { InscriptionService } from 'src/app/services/inscription.service';

import'rxjs/add/observable/of';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profilclient',
  templateUrl: './profilclient.component.html',
  styleUrls: ['./profilclient.component.css']
})
export class ProfilclientComponent implements OnInit {


  


  

    client: firebase.User;
    getcli:any[];
  clis:any[];
  cli2:AngularFirestoreCollection<any>;
    projet={Datedebut:"23/06/2020", Datefin:"08/06/2020"};
    constructor( private service:FreelancerService,private connect:InscriptionService,private aft:AngularFirestore ) {
  this.cli2=this.aft.collection('Client');
  
     }
  
    ngOnInit() {
      this.connect.getConnect()
      .subscribe(client=>{this.client=client;console.log(this.client.uid);
        this.connect.getClient().subscribe(cli=>{
          this.clis=cli;
          for (let i=0;i<this.clis.length;i++)
          {
  if(this.clis[i].email==this.client.email)
  {
    this.getcli=this.clis[i];
  }
          }
  
        });
    
          
         
  
  
          
         
      
          })
          
         
          
       
      
      
      
        
    
              }
/*
  ngOnInit() {
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ModifierprofilclientComponent,dialogConfig);
  }
  */



/* ngOnInit() {
   this.getclient(this.idclient);
 }
 getclient(id: string) {
   console.log(id);
   this.service.getClientById(id).subscribe(value => { this.client = value; console.log(value.id)});
   return this.client;
 }*/

}
