import { Componente5SelectImagemComponent } from './componente5-select-imagem/componente5-select-imagem.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componete4Component } from './componete4/componete4.component';
import { Componente4Component } from './componente4/componente4.component';
import { FormsModule } from '@angular/forms';
import { Componente6NgIfComponent } from './componente6-ng-if/componente6-ng-if.component';
import { Componente7IfVideoComponent } from './componente7-if-video/componente7-if-video.component';
import { Componente8NgForComponent } from './componente8-ng-for/componente8-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente2Component,
    Componente3Component,
    Componete4Component,
    Componente4Component,
    Componente5SelectImagemComponent,
    Componente6NgIfComponent,
    Componente7IfVideoComponent,
    Componente8NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
