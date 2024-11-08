import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { UtentiService } from '../../services/utenti.service';
import { Utente } from '../../models/utente';

@Component({
  selector: 'app-inserisci-utente',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './inserisci-utente.component.html',
  styleUrl: './inserisci-utente.component.css'
})
export class InserisciUtenteComponent {
  username: string | undefined;
  passw: string | undefined;
  emai: string | undefined;
 

  constructor(private routeActive: ActivatedRoute, private service: UtentiService){

  }

  Iscriviti() {
    this.routeActive.params.subscribe((risultato) => {
      if (this.username && this.username.trim() !== "" &&
          this.passw && this.passw.trim() !== "" &&
          this.emai && this.emai.trim() !== "") {
  
        let iscrizione: Utente = {
          username: this.username,
          passw: this.passw,
          email: this.emai,
        };
  
        this.service.Inserisci(iscrizione).then(risultato => {
         debugger
         console.log("risultato compo" + risultato  )
          if (risultato) 
           { this.username ="" 
           this.passw =""  
            this.emai =""
            alert("Adesso sei iscritto") }
           else 
            alert("Errore di iscrizione");
          
        });
      }
      else 
      alert("Errore campi di iscrizione");
    });
  }


}


