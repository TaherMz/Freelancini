import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../services/projet.service';
import {Projets} from '../projet';
import {map} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AjoutProjetComponent} from './ajout-projet/ajout-projet.component';
import {DetailsProjetComponent} from './details-projet/details-projet.component';
import {CategorieService} from '../../services/categorie.service';
import {Categories} from '../categorie';
import {PostulerComponent} from './postuler/postuler.component';
import {InscriptionService} from "../../services/inscription.service";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  private x: Projets;

  constructor(public dialog: MatDialog,
              private projetService: ProjetService,
              private categorieService: CategorieService,
              private connect: InscriptionService) { }
  tab = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
  ];
  totalRecords: number;
  page = 1;
  projets: Projets[];
  categories: Categories[];
  projet: Projets;
  code: string;
  test: boolean;
  private i: number;
  selected = '';
  hidden = true;
  searchText;
  nothidden = false;
  two: any;
  getProjetList() {
    this.projetService.getProjetsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(projets => {
      this.projets = projets;
    });
  }
  getProjets() {
    console.log(this.projetService.getArticleByMatricule('1').subscribe(value => { this.projet = value;
    }));
  }
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
  ngOnInit() {
    this.getProjetList();
    this.getListCategorie();
    this.totalRecords = this.tab.length;
    this.test = this.connect.client;
  }
  openDialogDetails(idp): void {
    const dialogRef = this.dialog.open(DetailsProjetComponent, {
      width: '700px',
      data: {id: idp}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ajouterProjet() {
    const dialogRef = this.dialog.open(AjoutProjetComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  selectOption(id: string) {
    console.log(id);
    console.log(this.selected);
  }

  postulerDialog(idp: string) {
    const dialogRef = this.dialog.open(PostulerComponent, {
      data: {id: idp}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

