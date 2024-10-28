import { Component } from '@angular/core';
import { Destinazione } from '../Models/destinazione';
import { DestinazioneService } from '../Services/destinazione.service';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinazione-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinazione-lista.component.html',
  styleUrl: './destinazione-lista.component.css'
})
export class DestinazioneListaComponent {
   elencodest : Destinazione[] = [];

   constructor (private service: DestinazioneService) {

   }
  
 
  ngOnInit(){
    this.elencodest= this.service.Elencodest();
  }
}

    // elimina(varnome?: string){
    //  console.log("ffffff");
    // }
  