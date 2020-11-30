import { Component, OnInit } from '@angular/core';
import {Freelancers} from '../../classe/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';
import {map} from 'rxjs/operators';

import { InscriptionService } from 'src/app/services/inscription.service';
import'rxjs/add/observable/of';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModifierProfilFreelancerComponent } from './modifier-profil-freelancer/modifier-profil-freelancer.component';
@Component({
  selector: 'app-profil-freelancer',
  templateUrl: './profil-freelancer.component.html',
  styleUrls: ['./profil-freelancer.component.css']
})
export class ProfilFreelancerComponent implements OnInit {
  idfreelancer: string ; 
  freelancer: firebase.User;
  getfree:any[];
frees:any[];
free2:AngularFirestoreCollection<any>;
  projet={Datedebut:"23/06/2020", Datefin:"08/06/2020"};
  constructor( public dialog: MatDialog,private service:FreelancerService,private connect:InscriptionService,private aft:AngularFirestore ) {
this.free2=this.aft.collection('Freelancer');

   }

  ngOnInit() {
    this.connect.getConnect()
    .subscribe(freelancer=>{this.freelancer=freelancer;console.log(this.freelancer.uid);
      this.connect.getFreelancer().subscribe(free=>{
        this.frees=free;
        for (let i=0;i<this.frees.length;i++)
        {
if(this.frees[i].email==this.freelancer.email)
{
  this.getfree=this.frees[i];
  this.idfreelancer=this.frees['id'];
}
        }

      });
  
        
       


        
       
    
        })
        
       
        
     
    
    
    
      
  
            }
            modif() {
              const dialogRef = this.dialog.open(ModifierProfilFreelancerComponent);
              dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
              });
            }
  //getfreelancer(id: string) {
  // console.log(id);
  //  this.service.getFreelancerById(id).subscribe(value => { this.free = value; console.log(value.id)});
   // return this.free;
 // }

  

}
