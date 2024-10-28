import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Utente } from '../Models/utente';
import { UtenteService } from '../Services/utente.service';

@Component({
  selector: 'app-utente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent {

    userid: string = '';
    Password: string = ''; 
  
    constructor() {}
  
    
  }
  



