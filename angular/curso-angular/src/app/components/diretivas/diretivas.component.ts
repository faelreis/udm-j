import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  tamanho = '50px';
  fonte = 'arial';
  cor = 'red';
  classesCss = ['titulo-verde', 'titulo-pequeno'];
  sublinhadoCss = 'titulo-sublinhado';
}
