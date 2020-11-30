import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { Projets } from 'src/app/classe/projet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  projets: Projets[];
  constructor(private projetService: ProjetService) { }
  ngOnInit() {
    this.getProjetList();
  }
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

}


