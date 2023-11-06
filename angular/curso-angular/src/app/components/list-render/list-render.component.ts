import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animais: Animal[] = [
    { nome: "Thomas", tipo: "cachorro", idade: 1 },
    { nome: "John", tipo: "gato", idade: 3  },
    { nome: "Arthur", tipo: "cachorro", idade: 2  },
    { nome: "Dosk", tipo: "cavalo", idade: 4  },
  ];

  idadeAnimal: string = "";

  ngOnInit(): void { }

  mostraIdade(animal: Animal) {
    this.idadeAnimal = `${animal.nome} ${animal.tipo} tem ${animal.idade} anos!`;
  }
}
