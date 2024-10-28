import { Component } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { ProdottoService } from '../services/prodotto.service';

@Component({
  selector: 'app-prodotti-lista',
  standalone: true,
  imports: [],
  templateUrl: './prodotti-lista.component.html',
  styleUrl: './prodotti-lista.component.css'
})

export class ProdottoListaComponent {
  elencoprodotti: Prodotto[] = [];
 
  constructor(private service: ProdottoService){

  }
 
  ngOnInit(){
    this.elencoprodotti = this.service.elencoprodotti();
  }
}
