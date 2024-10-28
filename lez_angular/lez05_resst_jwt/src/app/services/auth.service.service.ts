import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenRisposta } from '../models/token-risposta';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  async EffettuaLogin(username: string, password: string): Promise<TokenRisposta> {
    let invio: any = {
      username,
      password
    }
    let risultato = await(await fetch("http://localhost:4200/api/Auth/login", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(invio)
    })).json();

    return risultato;
  }
}
