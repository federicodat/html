import { Injectable } from '@angular/core';
import { IscrizioneRepository } from '../Repo/iscrizione.repository';
import { Iscrizione } from '../Models/iscrizione';
//import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IscrizioneService {

  constructor(private repo :IscrizioneService) { }


  
  Inserisciiscr(iscriz: Iscrizione): boolean{
   // iscriz.cod = uuidv4();

    return this.repo.Inserisciiscr(iscriz);
  }
}
 

  
 
