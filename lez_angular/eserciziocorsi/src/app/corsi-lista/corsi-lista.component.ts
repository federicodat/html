import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Corso } from '../Models/corso';
import { CorsoService } from '../Services/corso.service';
 

@Component({
  selector: 'app-corsi-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corsi-lista.component.html',
  styleUrl: './corsi-lista.component.css'
})
export class CorsiListaComponent {
 

  elencocorsi: Corso[] = [];
  successo: boolean = false;

  constructor(private service : CorsoService ){
debugger
  }

  ngOnInit(){
    this.stampaTabella();
  }

  stampaTabella(){
    debugger
    this.elencocorsi = this.service.Elencocorsi();
  }
}
