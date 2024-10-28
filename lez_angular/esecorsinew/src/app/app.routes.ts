import { Routes } from '@angular/router';
import { CorsoListaComponent } from './components/corso-lista/corso-lista.component';
import { CorsoIscrizioneComponent } from './components/corso-iscrizione/corso-iscrizione.component';
import { CorsoCancellazioneComponent } from './components/corso-cancellazione/corso-cancellazione.component';

export const routes: Routes = [
    {path: "", redirectTo: "corsi", pathMatch: "full"}, 
    {path: "corsi", component: CorsoListaComponent},
    {path: "iscrizione/:corso", component: CorsoIscrizioneComponent},
    {path: "disiscrizione/:corso", component: CorsoCancellazioneComponent}
];

