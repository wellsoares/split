import { Component, OnInit } from '@angular/core';
import { ServicoTeste } from 'src/app/servicos/servico.teste';
import { Cerveja } from 'src/app/modelos/cerveja.modelo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-texto',
  templateUrl: './app.component.texto.html',
  styleUrls: ['./app.component.texto.css']
})
export class TextoComponent implements OnInit {

  cervejas: Cerveja[] = [];

  constructor(private servico: ServicoTeste,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    //const idUsuario = this.activeRoute.snapshot.params.idUsuario; Pegando idUsuario da URL

    this.carregarCervejas();
  }

  public carregarCervejas() {
    this.servico.buscarCervejaPorId(1).subscribe(brejas => {
      console.log('CERVEJA: ', brejas);
      this.cervejas = brejas
    });
  }
}