import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Users} from './demo-crud/user';
import {UsersService} from './demo-crud/users.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  constructor(private usersService: UsersService) {}
  showFiller = false;
  submitted = false;
  editState = false;
  r: string;
  userToEdit: Users;
  users: Users[];
  user = {
    nom : '',
    prenom : ''
  };
  onSubmit() {
    this.submitted = true;
    this.usersService.addUser(this.user);
  }
  deleteUser(event, user: Users) {
      console.log(user);
      this.usersService.deleteUser(user);
  }
  ngOnInit() {
    this.getProdList();
  }
  getProdList() {
    this.usersService.getUsersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }
  editUser(event,  user: Users) {
    this.editState = true;
    this.userToEdit = user;
  }
  updateProd(user: Users) {
    this.r = prompt(' Voulez vous modifier se produit (o/n) ?' , this.r);
    // tslint:disable-next-line:triple-equals
    if (this.r === 'o') {
      this.usersService.updateUser(user);
      this.editState = false;
    }
  }
}
