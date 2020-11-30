import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import {Clients } from 'src/app/classe/client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  clients: Observable<Clients[]>;
  private dbPath = '/Client';
  client: Observable<Clients>;
  clientDoc: AngularFirestoreDocument<Clients>;
  clientCollection: AngularFirestoreCollection<Clients> = null;

  constructor(public afs: AngularFirestore) {
    this.clientCollection = afs.collection(this.dbPath);
   }

   form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    adresse: new FormControl(''),
    password: new FormControl(0),
    isPermanent: new FormControl(false)
  });


   getClients() {
    return this.clients;
  }

  getClientList(): AngularFirestoreCollection<Clients> {
    return this.clientCollection;
  }

  updateClient(client: Clients) {
    this.clientDoc = this.afs.doc(`Client/${client.client}`);
    this.clientDoc.update(client);
  }
/*
  populateForm(client){
    this.form.setValue(_.omit(client,'nom'));

  }
*/

  getClientById(id: string) {
    this.clientDoc = this.afs.doc<Clients>(`Client/${id}`);
    return this.client = this.clientDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Clients;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
}
