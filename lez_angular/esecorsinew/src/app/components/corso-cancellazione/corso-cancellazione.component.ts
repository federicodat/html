import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IscrizioneService } from '../../services/iscrizione.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-corso-cancellazione',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './corso-cancellazione.component.html',
  styleUrl: './corso-cancellazione.component.css'
})
export class CorsoCancellazioneComponent {


  coddis: string | undefined;

  constructor(private routeActive: ActivatedRoute, private service: IscrizioneService){}

    Cancellati() {
      this.routeActive.params.subscribe( (risultato) => {
        //this.coddis = risultato['corso'];
        if(this.coddis && this.coddis.trim() !== ""){
            let varcod = this.coddis              
          
  debugger
          this.service.cancella(this.coddis).then(risultato => {
            debugger
            if(risultato=="OK" )
              {alert("effettuata la cancellazione  " )     
            this.coddis   =""   }
            else
              alert("attenzione dati errati di iscrizione")
          });
        }
      })
    }
  
  }