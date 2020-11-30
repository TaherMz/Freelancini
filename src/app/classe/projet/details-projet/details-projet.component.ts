import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjetService} from '../../../services/projet.service';
import {Projets} from '../../projet';
import {map} from 'rxjs/operators';

// @ts-ignore
@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})
export class DetailsProjetComponent implements OnInit {
x: Projets;
pr: Projets;
  constructor(public dialogRef: MatDialogRef<DetailsProjetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private projetService: ProjetService) { }

  ngOnInit() {
    this.pr = this.getProjetList(this.data.id);
  }
  getProjetList(id: string) {
    /*this.projetService.getArticleByMatricule(id).forEach(value => {this.x = value; } );
    return this.x;*/
    this.projetService.getArticleByMatricule(id).subscribe(value => { this.x = value; console.log(value.titre)});
    return this.x;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
