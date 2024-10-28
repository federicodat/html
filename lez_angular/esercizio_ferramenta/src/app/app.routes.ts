import { Routes } from '@angular/router';
import { ProdottoListaComponent } from './prodotti-lista/prodotti-lista.component';
 
 
export const routes: Routes = [
    {path: "", redirectTo: "prodotti/lista", pathMatch: "full"},
    {path: "prodotti/lista", component: ProdottoListaComponent}

];