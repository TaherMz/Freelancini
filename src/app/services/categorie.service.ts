import { Injectable } from '@angular/core';
import { Categories } from '../classe/categorie';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categories: Observable<Categories[]>;
  private dbPath = '/Categorie';
  categorie: Observable<Categories>;
  categorieDoc: AngularFirestoreDocument<Categories>;
  categorieCollection: AngularFirestoreCollection<Categories> = null;

  constructor(public afs: AngularFirestore) {
    this.categorieCollection = afs.collection(this.dbPath);
  }

  getCategories() {
    return this.categories;
  }

  getCategoriesList(): AngularFirestoreCollection<Categories> {
    return this.categorieCollection;
  }

  addProjet(categorie: Categories) {
    this.categorieCollection.add(categorie);
    console.log(categorie);
  }

  updateProjet(categorie: Categories) {
    this.categorieDoc = this.afs.doc(`Categorie/${categorie.id_categorie}`);
    this.categorieDoc.update(categorie);
  }

  deleteProjet(categorie: Categories) {
    this.categorieDoc = this.afs.doc(`Categorie/${categorie.id_categorie}`);
    console.log(this.categorieDoc);
    this.categorieDoc.delete();
  }





}
