import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { map } from 'rxjs/operators';
import { Freelancers } from '../freelancer';
import { Categories } from '../categorie';
import{Router} from '@angular/router';
@Component({
  selector: 'app-liste-freelancer',
  templateUrl: './liste-freelancer.component.html',
  styleUrls: ['./liste-freelancer.component.css']
})
export class ListeFreelancerComponent implements OnInit {
free:string="freelancer";
  freelancers:Freelancers[];
  categories:Categories[];

  categorie:Categories[];

  totalRecords:number;
  page:number=1;
  searchTerm:string;

  constructor(private FreelancerService:FreelancerService,private CategorieService:CategorieService ,private route:Router ) { }

  ngOnInit() {
    this.getFreelancerListe();
    this.getCategorieListe();
    this.totalRecords=this.freelancers.length;
  }

  getCategorieListe() {
    this.CategorieService.getCategoriesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(categories => {
      this.categories = categories;
    });
  }

  getFreelancerListe() {
    this.FreelancerService.getFreelancerList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(freelancers => {
      this.freelancers = freelancers;
    });
  }
  profilfreelancer(x)
  {
this.route.navigate(['/fprofilvc',x.email]);
  }
}
