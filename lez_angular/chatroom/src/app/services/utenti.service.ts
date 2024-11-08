import { Injectable } from '@angular/core';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { }
  
  async Inserisci(iscri: Utente): Promise<string | any> {
    try {
      const response = await fetch("http://localhost:5058/api/iscrizione", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(iscri)
      });
  debugger
   
      if (!response.ok) {  // Controlla se la risposta è un errore (es. 400)
        if (response.status === 400) {
          console.log("Errore: Bad Request");  // Messaggio per Bad Request
          return null;
        }
        console.log(`Errore: ${response.status} - ${response.statusText}`);
        return null;
      }
        if (response.status === 200)
        { let risultato = response.status;
         console.log("risultato service:", risultato);
           return risultato
        }
  
    } catch (error) {
      console.error("Errore nella richiesta:", error);
      return null;
    }
  }


 

async Loggati(loggo: Utente): Promise<string | any> {
  try {
    debugger;
    // Costruisci l'URL con i parametri di rotta
    const url = `http://localhost:5058/${loggo.username}/${loggo.passw}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    });

    if (!response.ok) {
      // Gestisci gli errori HTTP (es. 400 o 404)
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }

    const risultato = await response.json();
    return risultato;

  } catch (error) {
    console.error("Errore nella richiesta:", error);
    return null;
  }
}






    
}
