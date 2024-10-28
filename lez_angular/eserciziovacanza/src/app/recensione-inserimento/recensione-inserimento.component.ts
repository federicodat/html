import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecensioneService } from '../Services/recensione.service';
import { Router } from '@angular/router';
import { Recensione } from '../Models/recensione';
import { Pacchetto } from '../Models/pacchetto';
import { PacchettoService } from '../Services/pacchetto.service';
import { PacchettoRepository } from '../Repo/Pacchetto.repository';
import { PacchettoListaComponent } from '../pacchetto-lista/pacchetto-lista.component';

@Component({
  selector: 'app-recensione-inserimento',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './recensione-inserimento.component.html',
  styleUrl: './recensione-inserimento.component.css'
})
export class RecensioneInserimentoComponent {

  utente?:string;
  voto: number=0;
  commento?: string;
  pacchetto: number =0;

  risultato:boolean=false;
  errorevoto: boolean = false;
  errore: boolean = false;
  successo: boolean = false;

  constructor(private service: RecensioneService, private router: Router){

  }

  salva(){
 debugger
 
    if(!this.utente||this.utente?.trim() === "" ||this.voto < 0){
      this.errore = true;
      return;
    }
    if (this.voto > 10 || this.voto < 0) {
      this.errore = false;
      this.errorevoto = true;
      return;
    }
    let rece = new Recensione() ;
    rece.pacchetto=this.pacchetto;
    rece.utente=this.utente;
    rece.commento=this.commento;
    rece.voto=this.voto;
    rece.pacchetto=this.pacchetto;
    
debugger
     
       this.service.InserisciRece(rece) ;

    //  if(this.service.InserisciRece(rece) ){
      this.successo = true;
 
      // setTimeout(() => {
      //   this.router.navigateByUrl("/pacchetti/lista")
      // }, 2000);

    }
     
       
}

// function popolapacchetto() {
//   debugger;
//   $.ajax({
//       url: "http://localhost:5140/api/Pacchetti/lista",
//       type: "GET",
//       success: function (risultato: any) {
//           let contenutoselect = "";
//           risultato.forEach(item => {
//               contenutoselect += `<option value="${item.id}">${item.nome}</option>`;
//           });
//           // Inserisce il contenuto dinamico all'interno della select
//           $("#input-pacchetto").html(contenutoselect);
//       },
//       error: function (errore :any) {
//           alert("Errore nel recupero dei pacchetti.");
//           console.log(errore);
//       }
//   });
// }

// // Chiamata alla funzione
// debugger;
// popolapacchetto();