import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cerveja } from "../modelos/cerveja.modelo";
import { Observable } from "rxjs";

const API = 'http://localhost:8080/'

@Injectable({ providedIn : 'root' })
export class ServicoTeste {

    constructor(private http: HttpClient) {

    }

    buscarCervejaPorId(id: number): Observable<Cerveja[]> {
        return this.http.get<Cerveja[]>(API + 'alcoolicos/cerveja/' + id);
    }
}   