import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ProjetService} from '../../../services/projet.service';
import {CategorieService} from '../../../services/categorie.service';
import {map} from 'rxjs/operators';
import {Categories} from '../../categorie';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.css']
})
export class AjoutProjetComponent implements OnInit {
  etat: boolean;
  categories: Categories[];
  submitted = false;
  selected = 'Web';
  projet = {
    budget: 0,
    catgorie: '',
    date_debut: '',
    date_fin: '',
    etat: this.etat = true,
    image: '',
    sujet: '',
    titre: ''
  };
  message: string;
  titree: string;
  constructor(public dialogRef: MatDialogRef<AjoutProjetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private projetService: ProjetService,
              private categorieService: CategorieService,
              private snackBar: MatSnackBar) {}
  getListCategorie() {
    this.categorieService.getCategoriesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(categories => {
      this.categories = categories;
    });
  }
  onSubmit(f: NgForm) {
    this.submitted = true;
    this.projetService.addProjet(this.projet);
    this.snackBar.open('ajouté', 'ok', {
        duration: 2000,
        direction: 'ltr'
      });
  }
  ngOnInit() {
    this.getListCategorie();
  }
  selectOption(id: string) {
    console.log(id);
    console.log(this.selected);
    this.projet.catgorie = this.selected;
  }
}
