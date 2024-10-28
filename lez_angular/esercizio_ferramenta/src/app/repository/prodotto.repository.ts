import { Injectable } from "@angular/core";
import { Prodotto } from "../models/prodotto";
import { ProdottoListaComponent } from "../prodotti-lista/prodotti-lista.component";

 @Injectable({
    providedIn:'root'
 })
export class ProdottoRepository {

    private elencoprodotti: Prodotto[] =  [];

    constructor() {
    debugger    
    }

       
     GetAll(): Prodotto[] {

        let endpoint = "http://localhost:5140/api/Prodotti/lista";
       
    
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

        fetch(endpoint)
            .then(risultatoResponse => risultatoResponse.json())
            .then(corpo => {
                console.log(corpo)
            })
            .catch(errore => {
                console.log(errore)
            });

            return this.elencoprodotti;
     
      }

    
}
