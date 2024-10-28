import { Injectable } from '@angular/core';
import { Corso } from '../models/corso';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {
 

  constructor() { }
     
//     async Lista() : Promise<Corso[]>
    
//     {
//       let risultato : Corso []= await((await fetch("http://localhost:4200/api/corso")).json());
       
// debugger
//       return risultato;
//     }
//   }
async Lista() : Promise<Corso[]>
{
  let risultato = await(await fetch("http://localhost:5260/api/corso", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET",
    body: JSON.stringify(Corso)
  })).json();

  return risultato;
}
}