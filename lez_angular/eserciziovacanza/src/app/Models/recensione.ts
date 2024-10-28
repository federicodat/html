import { CommonModule } from "@angular/common";
import { RecensioneService } from "../Services/recensione.service";
import { Component } from "@angular/core";


export class Recensione {
    oggettorece : Recensione[] = [] ;
     
 
 
 
    utente: string | undefined;
    commento: string | undefined;
    voto: number | undefined;
    pacchetto: number | undefined;
    datarece :Date|undefined;

    StampaDettaglio() : void{
        console.log(this.pacchetto,this.utente, this.commento, this.voto, this.datarece );
    }
}
