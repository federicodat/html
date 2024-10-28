import { Injectable } from "@angular/core";
import { Utente } from "../Models/utente";

@Injectable({
    providedIn: 'root'
})
export class UtenteRepository { 
    private ute: Utente[] =  [];

constructor() { }
Create(p: Utente): boolean{
    this.ute.push(p);
    localStorage.setItem("negozio", JSON.stringify(this.ute))
    
    return true;
}
}
