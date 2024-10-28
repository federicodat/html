import { Component } from '@angular/core';
import { Pacchetto } from '../Models/pacchetto';
import { PacchettoService } from '../Services/pacchetto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacchetto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacchetto-lista.component.html',
  styleUrl: './pacchetto-lista.component.css'
})
export class PacchettoListaComponent {

  elencopac : Pacchetto[] = [];

   constructor (private service: PacchettoService) {

   }
  
 
  ngOnInit(){
    this.elencopac= this.service.Elencopac();
  }
}