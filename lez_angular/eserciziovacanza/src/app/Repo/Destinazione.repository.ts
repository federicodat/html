import { Injectable } from "@angular/core";
import { Destinazione } from "../Models/destinazione";
import { DestinazioneListaComponent } from "../destinazione-lista/destinazione-lista.component";


@Injectable({
    providedIn: 'root'
}) export class DestinazioneRepository {

    private Elencodest : Destinazione[] =  [];

    constructor() {}

         GetAll(): Destinazione[] {

         let endpoint = "http://localhost:5140/api/Destinazioni/lista";
       
    
        // $.ajax({
        //     url: endpoint,
        //     type: "GET",
        //     success: function(risultato){
        //         console.log(risultato)
        //     },
        //     error: function(errore){
        //         console.log(errore)
        //     }
        // })
                debugger
        fetch(endpoint)
            .then(risultatoResponse => risultatoResponse.json())
            .then(arrayDestinazione => {
                arrayDestinazione.forEach((destinazione: Destinazione) => {
                    this.Elencodest.push(destinazione)
                }); 
                //ciclo push
                console.log(arrayDestinazione)
            })
            .catch(errore => {
                console.log(errore)
            });

            return this.Elencodest;
     
      }

    
}
