import { Routes } from '@angular/router';
import { InserisciUtenteComponent } from './components/inserisci-utente/inserisci-utente.component';
import { LoginUtenteComponent } from './components/login-utente/login-utente.component';
import { ListaChatComponent } from './components/lista-chat/lista-chat.component';

export const routes: Routes = [


    {path: "", redirectTo: "iscrizione", pathMatch: "full"}, 
     
    {path: "login", component: LoginUtenteComponent},
    {path: "iscrizione", component: InserisciUtenteComponent},
    {path: "api/chat", component: ListaChatComponent}
];
 
