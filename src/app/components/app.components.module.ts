import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TextoComponent } from './texto/app.component.texto';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FichaFormComponent } from '../formularios/cadastro/app.component.form.ficha';


@NgModule({
  declarations: [
    TextoComponent,
    FichaFormComponent
  ],

  imports: [
    ButtonModule,
    HttpClientModule,
    CommonModule
  ],

  exports: [
    TextoComponent
  ]
})
export class ComponentsModule { 

}
