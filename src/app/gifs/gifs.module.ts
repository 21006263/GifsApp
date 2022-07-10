import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsAppComponent } from './gifs-app/gifs-app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsAppComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GifsAppComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
