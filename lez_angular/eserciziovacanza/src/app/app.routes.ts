import { Routes } from '@angular/router';
import {DestinazioneListaComponent} from './destinazione-lista/destinazione-lista.component';
import { PacchettoListaComponent } from './pacchetto-lista/pacchetto-lista.component';
import { RecensioneInserimentoComponent } from './recensione-inserimento/recensione-inserimento.component';

export const routes: Routes = [
 
    {path: "", redirectTo: "Destinazioni/lista", pathMatch: "full"},
    {path: "Destinazioni/lista", component:DestinazioneListaComponent },
    {path: "Pacchetti/lista", component:PacchettoListaComponent },
    {path: "Recensioni/inserimento", component:RecensioneInserimentoComponent }
];