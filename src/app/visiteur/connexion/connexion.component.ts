import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConnectfComponent } from 'src/app/freelancer/connectf/connectf.component';
import { ConneccComponent } from 'src/app/client/connecc/connecc.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(public popup:MatDialog) { }

  ngOnInit() {
   
  }
  todo = [
   'Je Suis:',
  ];

  done = [
    'Client/Entreprise',
    'Freelancer',
   
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
freelancer()
{
  this.popup.closeAll();
  const config=new MatDialogConfig();
  config.position={
    top:'60px',
    
  };
  config.autoFocus=true;
  config.width="30%";
  
  this.popup.open(ConnectfComponent,config);
}
client()
{
  this.popup.closeAll();
  const config=new MatDialogConfig();
  config.position={
    top:'60px',
    
  };
  config.autoFocus=true;
  config.width="30%";
  
  this.popup.open(ConneccComponent,config);
}

    
  }

