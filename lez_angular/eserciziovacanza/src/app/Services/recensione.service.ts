import { Injectable } from '@angular/core';
import { RecensioneRepository } from '../Repo/Recensione.repository';
import { Recensione } from '../Models/recensione';

@Injectable({
  providedIn: 'root'
})
export class RecensioneService {
  constructor(private repo: RecensioneRepository) { }
 
  InserisciRece(rece: Recensione){
   debugger 

    return this.repo.InserisciRece(rece);
  }

}
