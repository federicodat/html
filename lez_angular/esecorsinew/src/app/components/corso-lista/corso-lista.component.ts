import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Corso } from '../../models/corso';
import { CorsoService } from '../../services/corso.service';

@Component({
  selector: 'app-corso-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corso-lista.component.html',
  styleUrl: './corso-lista.component.css'
})
export class CorsoListaComponent {
  elenco: Corso[] = new Array();

  constructor(private service: CorsoService){

  }

  ngOnInit(){
    this.service.Lista().then(
      ris => {
        this.elenco = ris;
      }
    )
  }
}
 