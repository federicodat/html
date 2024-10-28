import { Pacchetto } from "../Models/pacchetto";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'

 
}) export class PacchettoRepository {
        private Elencopac : Pacchetto []=[] ;

    constructor() {}

        GetAll() : Pacchetto [] {

            let endpoint = "http://localhost:5140/api/Pacchetti/lista"
            
            fetch(endpoint)
            .then(risultatoResponse => risultatoResponse.json())
            .then(arrayPacchetto=> {
                arrayPacchetto.forEach((pacchetto: Pacchetto) => {
                    this.Elencopac.push(pacchetto)
                }); 
                //ciclo push
                console.log(arrayPacchetto)
            })
            .catch(errore => {
                console.log(errore)
            });

            return this.Elencopac;
     
      }

    
}

