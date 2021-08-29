import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
imagem = 'assets/gato.jpg';
//imagem1 = 'assets/pato.jpg';
//imagem2 = 'assets/sapo.jpg';
imagens = ['assets/gato.jpg','assets/pato.jpg','assets/sapo.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}

