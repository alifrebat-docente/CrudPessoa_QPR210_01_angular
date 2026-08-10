import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../../models/estado';
import { Municipio } from '../../models/municipio';

@Injectable({
    providedIn: 'root'
})
export class UfMunicipio {

    constructor(private http: HttpClient) { }

    listaUF(): Observable<Estado[]> {
        const apiUrl = 'https://brasilapi.com.br/ibge/uf/v1'

        return this.http.get<Estado[]>(apiUrl)
    }

    listaMunicipios(uf: string): Observable<Municipio[]> {
        const apiUrl = `https://brasilapi.com.br/ibge/municipios/v1/${uf}`

        return this.http.get<Municipio[]>(apiUrl)
    }
}
