import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottoService } from '../../service/prodotto.service';

;

@Component({
  selector: 'app-prodotto-lista',
  standalone: true,
  imports: [],
  templateUrl: './prodotto-lista.component.html',
  styleUrl: './prodotto-lista.component.css'
})
export class ProdottoListaComponent {
  elencoprodotti: Prodotto[] = [];

  constructor(private service: ProdottoService){

  }

  ngOnInit(){
    this.elencoprodotti = this.service.ListaProdotti();
  }
}
