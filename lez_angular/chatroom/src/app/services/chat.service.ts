import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
    async Lista():  Promise<Chat[]> {
    let risultato : Chat[] = await ((await fetch("http://localhost:5058/api/chat")).json());
    debugger;
    console.log("risultato service:", risultato);
    return risultato;
  }

  
Salvamess()
{console.log("saaaa co elenco:" );
}
}