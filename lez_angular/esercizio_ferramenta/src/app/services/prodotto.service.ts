import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { ProdottoRepository } from '../repository/prodotto.repository';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  constructor(private repository :ProdottoRepository) { }
    
  elencoprodotti(): Prodotto[]{
    return  this.repository.GetAll()
  }
}
