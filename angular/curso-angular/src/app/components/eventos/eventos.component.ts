import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  
  mostrar: boolean = false;
  constructor() {}
  
  ngOnInit(): void {}

  mostrarMensagem(): void {
    this.mostrar = !this.mostrar;
  }
}
