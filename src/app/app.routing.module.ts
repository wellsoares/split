import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaFormComponent } from './formularios/cadastro/app.component.form.ficha';
import { NaoEncontradoComponent } from './erros/nao-encontrado/nao-encontrado.component';


const routes: Routes = [
    { path: 'usuario/ficha', component: FichaFormComponent },
   // { path: 'usuario/:id  ', component: FichaFormComponent }, Necessário para que :id Seja uma variável
    { path: '**'           , component: NaoEncontradoComponent}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }