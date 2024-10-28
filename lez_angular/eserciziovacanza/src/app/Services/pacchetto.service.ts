import { Injectable } from '@angular/core';
import { PacchettoRepository } from '../Repo/Pacchetto.repository';
import { Pacchetto } from '../Models/pacchetto';

@Injectable({
  providedIn: 'root'
})
export class PacchettoService {

  constructor(private repo : PacchettoRepository) { }
  Elencopac() : Pacchetto[] {
    return  this.repo.GetAll() ;
    
  }
}
