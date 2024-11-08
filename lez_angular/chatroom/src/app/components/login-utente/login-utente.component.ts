import { Utente } from '../../models/utente';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtentiService } from '../../services/utenti.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-utente',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-utente.component.html',
  styleUrl: './login-utente.component.css'
})
export class LoginUtenteComponent {
  username: string | undefined;
  passw: string | undefined;
  emai: string | undefined;
 

  constructor(private routeActive: ActivatedRoute, private service: UtentiService){

  }
  Loggati() {
    this.routeActive.params.subscribe((risultato) => {
      if (this.username && this.username.trim() !== "" &&
          this.passw && this.passw.trim() !== "" 
          ) {
  
        let loggo: Utente = {
          username: this.username,
          passw: this.passw,
       
        };
  
        this.service.Loggati(loggo).then(risultato => {
         debugger
         console.log("risultato compo" + risultato  )
          if (risultato) 
           { this.username ="" 
           this.passw =""  
            this.emai =""
            alert("Adesso sei loggato") }
           else 
            alert("Errore prova a iscriverti");
          
        });
      }
      else 
      alert("Errore campi inseriti");
    });
  }


}



 