import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';
@Component({
  selector: 'app-profil-vclient',
  templateUrl: './profil-vclient.component.html',
  styleUrls: ['./profil-vclient.component.css']
})
export class ProfilVClientComponent implements OnInit {
getfree:any[];
frees:any[];
projet={Datedebut:"23/06/2020", Datefin:"08/06/2020"};
  constructor(private route:ActivatedRoute,private service : InscriptionService) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('email');
    
    this.service.getFreelancer().subscribe(free=>{
this.frees=free;
for (let i=0;i<this.frees.length;i++)
{
if(this.frees[i].email==id)
{
this.getfree=this.frees[i];
}
}
    })
  }

}
