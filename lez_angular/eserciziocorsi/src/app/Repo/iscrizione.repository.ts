import { Injectable } from "@angular/core";
import { Iscrizione } from "../Models/iscrizione";

@Injectable({
    providedIn: 'root'
})

export class IscrizioneRepository { 
    private iscrizione: Iscrizione[] =  [];

constructor() { }
Create(p: Iscrizione): boolean{
    this.iscrizione.push(p);
    localStorage.setItem("negozio", JSON.stringify(this.iscrizione))
    
    return true;
}
}
