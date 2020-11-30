import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projets } from '../classe/projet';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  projets: Observable<Projets[]>;
  private dbPath = '/Projet';
  projet: Observable<Projets>;
  projetDoc: AngularFirestoreDocument<Projets>;
  projetCollection: AngularFirestoreCollection<Projets> = null;

  constructor(public afs: AngularFirestore) {
    this.projetCollection = afs.collection(this.dbPath);
  }

  getProjets() {
    return this.projets;
  }

  getProjetsList(): AngularFirestoreCollection<Projets> {
    return this.projetCollection;
  }

  addProjet(projet: Projets) {
    this.projetCollection.add(projet);
    console.log(projet);
  }

  updateProjet(projet: Projets) {
    this.projetDoc = this.afs.doc(`Projet/${projet.id}`);
    this.projetDoc.update(projet);
  }

  deleteProjet(projet: Projets) {
    this.projetDoc = this.afs.doc(`Projet/${projet.id}`);
    console.log(this.projetDoc);
    this.projetDoc.delete();
  }
  getArticleByMatricule(id: string) {
    this.projetDoc = this.afs.doc<Projets>(`Projet/${id}`);
    return this.projet = this.projetDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Projets;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
}
