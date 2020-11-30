import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freelancers } from '../classe/freelancer';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  freelancers: Observable<Freelancers[]>;
  private dbPath = '/Freelancer';
  freelancer: Observable<Freelancers>;
  freelancerDoc: AngularFirestoreDocument<Freelancers>;
  freelancerCollection: AngularFirestoreCollection<Freelancers> = null;

  constructor(public afs: AngularFirestore) {
    this.freelancerCollection = afs.collection(this.dbPath);
  }

  getFreelacers() {
    return this.freelancers;
  }

  getFreelancerList(): AngularFirestoreCollection<Freelancers> {
    return this.freelancerCollection;
  }

  updateFreelancer(freelancer: Freelancers) {
    this.freelancerDoc = this.afs.doc(`Freelancer/${freelancer.id}`);
    this.freelancerDoc.update(freelancer);
  }

  getFreelancerById(id: string) {
    this.freelancerDoc = this.afs.doc<Freelancers>(`Freelancer/${id}`);
    return this.freelancer = this.freelancerDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Freelancers;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

}