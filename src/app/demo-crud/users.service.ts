import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Users} from './user';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Observable<Users[]>;
  private dbPath = '/Users';
  user: Observable<Users>;
  userDoc: AngularFirestoreDocument<Users>;
  userCollection: AngularFirestoreCollection<Users> = null;

  constructor(public afs: AngularFirestore) {
    this.userCollection = afs.collection(this.dbPath);
  }

  getUsers() {
    return this.users;
  }
  getUsersList(): AngularFirestoreCollection<Users> {
    return this.userCollection;
  }

  addUser(user: Users) {
    this.userCollection.add(user);
    console.log(user);
  }
  updateUser(user: Users) {
    this.userDoc = this.afs.doc(`Users/${user.id}`);
    this.userDoc.update(user);
  }
  deleteUser(user: Users) {
    this.userDoc = this.afs.doc(`Users/${user.id}`);
    console.log(this.userDoc);
    this.userDoc.delete();
  }
 }
