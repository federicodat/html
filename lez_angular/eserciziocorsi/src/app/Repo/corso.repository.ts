import { Injectable } from "@angular/core";
import { Corso } from "../Models/corso";


@Injectable({
    providedIn: 'root'
})

export class CorsoRepository {

    private Elencocorsi: Corso[] =  [];

    constructor() { }
    
    GetAll(): Corso[] {

        let endpoint = "http://localhost:5243/Corsi/lista";
      
              debugger  
       fetch(endpoint)
           .then(risultatoResponse => risultatoResponse.json())
           .then (arraycorso => {
               arraycorso.forEach((corsi: Corso) => {
                   this.Elencocorsi.push(corsi)
               }); 
                debugger ;
               console.log(arraycorso)
           })
           .catch(errore => {
               console.log(errore)
           });

           return this.Elencocorsi;
    
     }

   
}
