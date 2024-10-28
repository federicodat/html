import { Injectable } from "@angular/core";
import { Recensione } from "../Models/recensione";


@Injectable({
    providedIn: 'root'
})
export class RecensioneRepository {
    private elenco: Recensione[] =  [];

    private endpoint = "http://localhost:5140/api/Recensioni" ;    
         
         constructor() { }

        InserisciRece(Recensione :any)    {

          debugger

            return fetch(this.endpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(Recensione)
              }).then(response => {
                if (!response.ok) {
                  throw new Error('Errore inserimento');
                }
                console.log('inserito', response.json()) ;
                return response.json();
               
              });
      }

    
}

