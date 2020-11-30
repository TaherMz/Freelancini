import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ProjetService} from '../../../services/projet.service';
import {PostulationService} from '../../../services/postulation.service';
import {Postulation} from './postulation';
import { Projets } from '../../projet'
import { InscriptionService } from 'src/app/services/inscription.service';
@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  private x: Projets;
  submitted= false;
  private pr: Projets;
  freelancer: firebase.User;
  getfree:any[];
  frees:any[];
  dateactuelle = new Date;
  postulation = {
    date: new Date(),
    devis: 0,
    email_freelancer: '',
    id_projet: '',
  };
  constructor(public dialogRef: MatDialogRef<PostulerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private postulerService: PostulationService,
              private connect:InscriptionService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.pr = this.getFreelancerPostule(this.data.id);
    this.connect.getConnect()
    .subscribe(freelancer=>{this.freelancer=freelancer;console.log(this.freelancer.uid);
      this.connect.getFreelancer().subscribe(free=>{
        this.frees=free;
        for (let i=0;i<this.frees.length;i++)
        {
if(this.frees[i].email==this.freelancer.email)
{
  this.getfree=this.frees[i];
  this.postulation.email_freelancer = this.getfree['email'];
}
        }

      });








        })
  }
  getFreelancerPostule(id: string) {
    /*this.projetService.getArticleByMatricule(id).forEach(value => {this.x = value; } );
    return this.x;*/
    this.postulerService.getFreelancer(id).subscribe(value => { this.x = value; console.log('**'+value.id)});
    console.log(id);
    this.postulation.id_projet = id;
    return this.x;
  }
  onSubmit() {
    this.submitted = true;
    this.postulerService.addProjet(this.postulation);
    this.snackBar.open('ajouté', 'ok', {
        duration: 2000,
        direction: 'ltr'
      });
  }
}

