import { Routes } from '@angular/router';
import { CorsoListaComponent } from './corso-lista/corso-lista.component';
import { CorsoIscrizioneComponent } from './corso-iscrizione/corso-iscrizione.component';

export const routes: Routes = [
    {path: "", redirectTo: "corsi", pathMatch: "full"}, 
    {path: "corsi", component: CorsoListaComponent},
    {path: "iscrizione/:corso", component: CorsoIscrizioneComponent}
];