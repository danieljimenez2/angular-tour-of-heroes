import { Component } from '@angular/core';
import { MensajeService } from '../mensaje.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.scss'
})
export class MensajesComponent {
  constructor(public mensajesService:MensajeService){}
}
