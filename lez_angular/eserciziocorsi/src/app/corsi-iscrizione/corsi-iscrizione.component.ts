import { Component } from '@angular/core';
import { IscrizioneService } from '../Services/iscrizione.service';
import { Router } from '@angular/router';
import { Iscrizione } from '../Models/iscrizione';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corsi-iscrizione',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './corsi-iscrizione.component.html',
  styleUrl: './corsi-iscrizione.component.css'
})
export class CorsiIscrizioneComponent {


  nome?: string;
  cognome?: string;
  mail?: string;
  

  errore: boolean = false;
  successo: boolean = false;

  constructor(private service: IscrizioneService, private router: Router){
  }

    salva(){

      if(!this.nome || this.nome?.trim() === "" ||!this.cognome|| this.cognome?.trim() === "" ||!this.mail|| this.mail?.trim() === "" ){
        this.errore = true;
        return;
      }
  
      let iscriz = new Iscrizione();

      iscriz.nom = this.nome;
      iscriz.cog = this.cognome;
      iscriz.mai = this.mail;
     
  
      if(this.service.Inserisciiscr(iscriz)){
        this.successo = true;
  
        // setTimeout(() => {
        //   this.router.navigateByUrl("/prodotti/lista")
        // }, 2000);
  
      }
      else{
        this.errore = true;
      }
    }
  }
  


