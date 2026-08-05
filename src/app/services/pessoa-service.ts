import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
    providedIn: 'root',
})
export class PessoaService {
    private pessoas: Pessoa[] = []

    adicionar(pessoa: Pessoa) {
        this.pessoas.push(pessoa)
        localStorage.setItem('pessoasStorage', JSON.stringify(this.pessoas))
    }

    listar() {
        const dados = localStorage.getItem('pessoasStorage');

        if (dados) {
            this.pessoas = JSON.parse(dados);
        } else {
            this.pessoas = [];
        }

        return this.pessoas;
    }


}
