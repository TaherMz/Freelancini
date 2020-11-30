import { Injectable } from '@angular/core';
import {Projets} from '../classe/projet';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {Postulation} from '../classe/projet/postuler/postulation';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {
  projets: Observable<Projets[]>;
  private dbPath = '/Postulation';
  projet: Observable<Postulation>;
  projetDoc: AngularFirestoreDocument<Postulation>;
  projetCollection: AngularFirestoreCollection<Postulation> = null;
  projetts: Observable<Postulation[]>;
  private x: BehaviorSubject<string>;
  constructor(public afs: AngularFirestore, private db: AngularFireDatabase) {
    this.projetCollection = afs.collection(this.dbPath);
  }
  getFreelancer(id: string) {
    this.projetDoc = this.afs.doc<Postulation>(`Projet/${id}`);
    return this.projet = this.projetDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Postulation;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addProjet(post: Postulation) {
    this.projetCollection.add(post);
    console.log(post);
}
}
