import { Routes } from '@angular/router';
import {  CorsiListaComponent } from './corsi-lista/corsi-lista.component';
import { CorsiIscrizioneComponent } from './corsi-iscrizione/corsi-iscrizione.component';
import { UtenteComponent } from './utente/utente.component';
 

export const routes: Routes = [

    {path: "", redirectTo: "Corsi/lista", pathMatch: "full"},
    {path: "Corsi/lista", component: CorsiListaComponent},
    {path: "Corsi/iscrizioni", component:CorsiIscrizioneComponent},
    {path: "Corsi/login", component:UtenteComponent}
     
];
