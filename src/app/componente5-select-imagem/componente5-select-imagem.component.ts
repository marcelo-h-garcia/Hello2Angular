import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente5-select-imagem',
  templateUrl: './componente5-select-imagem.component.html',
  styleUrls: ['./componente5-select-imagem.component.css']
})
export class Componente5SelectImagemComponent implements OnInit {

  value: number = 0;
  imagens = ['assets/gato.jpg','assets/pato.jpg','assets/sapo.jpg','assets/capivara.jpg','assets/hipopotomo.jpg','assets/rato.jpg','assets/tamandua.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
