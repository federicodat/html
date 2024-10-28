import { Injectable } from '@angular/core';
import { DestinazioneRepository } from '../Repo/Destinazione.repository';
import { Destinazione } from '../Models/destinazione';

@Injectable({
  providedIn: 'root'
})
export class DestinazioneService {

  constructor(private repo: DestinazioneRepository) { }
  Elencodest(): Destinazione[]{

    return this.repo.GetAll()
  }
}
