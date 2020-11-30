import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { DEMOCRUDComponent } from './demo-crud/demo-crud.component';
import { AccueilComponent } from './visiteur/accueil/accueil.component';
import { ContactComponent } from './visiteur/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjetComponent } from './classe/projet/projet.component';
import { NavbarComponent } from './visiteur/navbar/navbar.component';
import { FooterComponent } from './visiteur/footer/footer.component';
import { CarouselComponent } from './visiteur/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { InscritFComponent } from './freelancer/inscrit-f/inscrit-f.component';
import { InscritCComponent } from './client/inscrit-c/inscrit-c.component';
import { ConnexionComponent } from './visiteur/connexion/connexion.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ConnectfComponent } from './freelancer/connectf/connectf.component';
import { ConneccComponent } from './client/connecc/connecc.component';
import { MatDatepickerModule } from '@angular/material';
import { ListeFreelancerComponent } from './classe/liste-freelancer/liste-freelancer.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PieComponent }from './freelancer/profil-freelancer/pie/pie.component';
import { ModifierProfilFreelancerComponent } from './freelancer/profil-freelancer/modifier-profil-freelancer/modifier-profil-freelancer.component';
import { DashboardComponent } from './chat/dashboard/dashboard.component';
import { ProfilVClientComponent } from './freelancer/profil-vclient/profil-vclient.component';
import { ProfilclientComponent } from './client/profilclient/profilclient.component';
import { ModifierprofilclientComponent } from './client/profilclient/modifierprofilclient/modifierprofilclient.component';
import { ContratComponent } from './contrat/contrat.component';
import { PresentationComponent } from './visiteur/presentation/presentation.component';
import { RechercheProjetPipe } from './recherche-projet.pipe';
//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { AjoutProjetComponent } from './classe/projet/ajout-projet/ajout-projet.component';
import { DetailsProjetComponent } from './classe/projet/details-projet/details-projet.component';
import { PostulerComponent } from './classe/projet/postuler/postuler.component';


import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { freelancerFilterPipe } from './classe/liste-freelancer/freelancer-Filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DEMOCRUDComponent,
    AccueilComponent,
    ContactComponent,
    ProjetComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    InscritFComponent,
    InscritCComponent,
    ConnexionComponent,
    ConnectfComponent,
    ListeFreelancerComponent ,
    ProfilFreelancerComponent,
    PieComponent,
    DashboardComponent,
    ProfilclientComponent,
    ModifierprofilclientComponent,
    ContratComponent,
    PresentationComponent,
    RechercheProjetPipe,
    AjoutProjetComponent,
    DetailsProjetComponent,
    PostulerComponent,
    ConneccComponent,
    ModifierProfilFreelancerComponent,
    ProfilVClientComponent,
    freelancerFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    DragDropModule,
    NgxPaginationModule,
    AccumulationChartModule,
    MatToolbarModule,MatIconModule,MatSidenavModule,MatInputModule,MatButtonModule,ScrollingModule,MatSnackBarModule,
    MatListModule, MatDialogModule,
    ScrollToModule.forRoot(),
    FilterPipeModule,
    MatCardModule,
    MatDatepickerModule,
    MatSnackBarModule,

    
  ],
  providers:[MatDatepickerModule,PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
    AccumulationDataLabelService],
  bootstrap: [AppComponent],
  entryComponents:[InscritFComponent,InscritCComponent,ConnexionComponent,ConnectfComponent,ConneccComponent,ProfilFreelancerComponent,AjoutProjetComponent, DetailsProjetComponent, PostulerComponent, ModifierProfilFreelancerComponent]
})
export class AppModule { }
