import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  imagem = 'assets/gato.jpg';
  i: number = 0;
  imagens = ['assets/gato.jpg','assets/pato.jpg','assets/sapo.jpg'];
  //selectdValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
subtrair():void{
  const tam = this.imagens.length;
  this.i = (tam + this.i -1) % tam;
}

aumentar():void{
  const tam = this.imagens.length;
  this.i = (tam + this.i +1) % tam;
}

}
