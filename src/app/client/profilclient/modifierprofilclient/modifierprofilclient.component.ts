import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import {Clients } from 'src/app/classe/client'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifierprofilclient',
  templateUrl: './modifierprofilclient.component.html',
  styleUrls: ['./modifierprofilclient.component.css']
})
export class ModifierprofilclientComponent implements OnInit {

  constructor ( private clientservice: ClientService,
    private activatedRoute:ActivatedRoute) { }

  submitted = false;
  
  client: Clients;
  idclient: string;
  message:string;
  

  ngOnInit() {
    this.idclient = this.activatedRoute.snapshot.params['id'];
    this.getClient(this.idclient);
    }

    
 

    getClient(id: string) {
    console.log(id);
    this.clientservice.getClientById(id).subscribe(value => { this.client = value; console.log(value.id)});
    return this.client;
  }


  onSubmit() {
    this.submitted = true;
  }


  updateClient(client: Clients) {
    this.message = prompt(' Voulez vous modifier votre profil (oui/non) ?' , this.message);
    // tslint:disable-next-line:triple-equals
    if (this.message == 'oui') {
      this.clientservice.updateClient(client);
    }
  }

}
