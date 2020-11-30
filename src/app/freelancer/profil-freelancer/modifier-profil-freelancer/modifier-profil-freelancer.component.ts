import {Component, OnInit} from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';
import {CategorieService} from 'src/app/services/categorie.service';
import {Freelancers} from '../../../classe/freelancer';
import {Categories} from '../../../classe/categorie';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-modifier-profil-freelancer',
  templateUrl: './modifier-profil-freelancer.component.html',
  styleUrls: ['./modifier-profil-freelancer.component.css']
})
export class ModifierProfilFreelancerComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModifierProfilFreelancerComponent>,
             
              
              private service:FreelancerService, private servicecat:CategorieService,
    private activatedRoute:ActivatedRoute, private servicef: InscriptionService) { }
  
  submitted = false;
  categories: Categories[];
 nom: string
  message:string;
  freelancer: firebase.User;
  getfree:any[];
  frees:any[];
  ngOnInit() {
    
    this.getListCategorie();
    this.servicef.getConnect()
    .subscribe(freelancer=>{this.freelancer=freelancer;console.log(this.freelancer.uid);
      this.servicef.getFreelancer().subscribe(free=>{
        this.frees=free;
        for (let i=0;i<this.frees.length;i++)
        {
if(this.frees[i].email==this.freelancer.email)
{
  this.getfree=this.frees[i];
this.nom=this.getfree['nom']
}
        }

      });








        })
    }

  getListCategorie() {
    this.servicecat.getCategoriesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(categories => {
      this.categories = categories;
    });
  }

 

  
  onSubmit() {
    this.submitted = true;
  }
  updateFreelancer(freelancer: Freelancers) {
    this.message = prompt(' Voulez vous modifier se produit (oui/non) ?' , this.message);
    // tslint:disable-next-line:triple-equals
    if (this.message == 'oui') {
      this.service.updateFreelancer(freelancer);
    }
  }

}
