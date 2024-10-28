import { Injectable } from '@angular/core';
import { CorsoRepository } from '../Repo/corso.repository';
import { Corso } from '../Models/corso';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  constructor(private repo :CorsoRepository ) { }

  Elencocorsi(): Corso[]{
    return this.repo.GetAll();
  }

}

