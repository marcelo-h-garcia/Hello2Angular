import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
imagem = 'assets/gato.jpg';
imagem1 = 'assets/pato.jpg';
imagem2 = 'assets/sapo.jpg';
imagens = [this.imagem,this.imagem1,this.imagem2]

  constructor() { }

  ngOnInit(): void {
  }

}
