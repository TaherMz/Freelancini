import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjetComponent} from './classe/projet/projet.component';
import {AccueilComponent} from './visiteur/accueil/accueil.component';
import { ListeFreelancerComponent } from './classe/liste-freelancer/liste-freelancer.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import { DashboardComponent } from './chat/dashboard/dashboard.component';
import { ContratComponent } from './contrat/contrat.component';
import { PresentationComponent } from './visiteur/presentation/presentation.component';
import { ProfilclientComponent } from './client/profilclient/profilclient.component';
import { ModifierprofilclientComponent } from './client/profilclient/modifierprofilclient/modifierprofilclient.component';
import { ModifierProfilFreelancerComponent } from './freelancer/profil-freelancer/modifier-profil-freelancer/modifier-profil-freelancer.component';
import { ProfilVClientComponent } from './freelancer/profil-vclient/profil-vclient.component';

const routes: Routes = [
  { path: 'projets', component: ProjetComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'freelancers', component: ListeFreelancerComponent},
  { path: 'fprofil',component:ProfilFreelancerComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'contrat', component:ContratComponent},
  { path: 'presentation', component:PresentationComponent},
  { path: 'cprofil', component:ProfilclientComponent},
  { path: 'modifierpc/:id', component:ModifierprofilclientComponent},
  { path: 'modifierpf/:id', component:ModifierProfilFreelancerComponent},
  { path: 'fprofilvc/:email', component:ProfilVClientComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]


})
export class AppRoutingModule { }
