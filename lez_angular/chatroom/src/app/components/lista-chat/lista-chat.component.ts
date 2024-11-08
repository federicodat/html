import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chat } from '../../models/chat';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './lista-chat.component.html',
  styleUrl: './lista-chat.component.css'
})
 

 
export class ListaChatComponent  {
 
  elenco: Chat[] = new Array();
  
  constructor(private routeActive: ActivatedRoute,private service: ChatService){
    
    debugger
  }
  ngOnInit() {
    this.service.Lista().then(
    risultato => { console.log("risultato com:", risultato);
      this.elenco=risultato;
      console.log("risultato co elenco:", this.elenco);
    }
  )
  }
}
  

