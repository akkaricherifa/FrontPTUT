import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FormulairePatientComponent } from './formulaire-patient/formulaire-patient.component';

export const routes: Routes = [
    {path : 'home', component: HomePageComponent},
    {path : 'formulaire', component: FormulairePatientComponent}
];
