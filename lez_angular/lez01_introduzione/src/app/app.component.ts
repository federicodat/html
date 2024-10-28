import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvaComponent } from './prova/prova/prova.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProvaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lez01_introduzione';
}
