import { Injectable } from '@angular/core';
import { Iscrizione } from '../models/iscrizione';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IscrizioneService {

  constructor() { }

  async Inserisci(iscri: Iscrizione): Promise<string | null> {
    debugger
    let risultato = await (await fetch("http://localhost:5260/api/iscrizione",
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(iscri)
      }
    )).json();

    debugger
    if(risultato.codiceDisiscrizione)
      {
        let codiceDisiscrizione =risultato.codiceDisiscrizione
      risultato=  codiceDisiscrizione
       
      return  risultato
     }
      
      
     return risultato ; 

 
   
  }
 

  async cancella(varcod: any): Promise<string | null> {
    debugger;
     
    const url = `http://localhost:5260/api/iscrizione?varCodice=${encodeURIComponent(varcod)}`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE"
    });

    debugger;

    // Verifica che la risposta sia ok e prova a estrarre JSON se disponibile
    //const risultato = response.ok ? await response.json().catch(() => null) : null;
    let risultato = null;
        if (response.ok )  
           {  
            let risultato = "OK";

            console.log(risultato);
            return risultato;
           }
             
                 
    return risultato;
}

//   async cercapercodice(varcod : any): Promise<string | null> {
//     debugger
//     let risultato = await (await fetch("http://localhost:5260/api/iscrizione",
//       {
//         headers: {
//           "Content-Type": "application/json"
//         },
//         method: "GET",
//         body: JSON.stringify(varcod)
//       }
//     )).json();
//      debugger
//      if (risultato)
//        return risultato  ;
//     //  if(risultato.codiceDisiscrizione)
//     //  return risultato.codiceDisiscrizione;
// else 
//      return null;
   
//   }


}