import { Component } from '@angular/core';
import { ProfiloServiceService } from '../../services/profilo.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent {

  profiloSelezionato : string | undefined;

  constructor(private service: ProfiloServiceService, private router: Router){

  }

  ngOnInit(){
    this.service.CaricaProfilo().then(risultato => {
      if(risultato){
        this.profiloSelezionato = risultato.dati;
      }
      else{
        this.router.navigateByUrl("/")
      }
    })
  }

}
