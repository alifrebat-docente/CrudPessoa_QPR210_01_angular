import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PessoaService {
    private pessoas: Pessoa[] = []

    adicionar(pessoa: Pessoa) {
        this.pessoas.push(pessoa)
        //localStorage.setItem('pessoasStorage', JSON.stringify(this.pessoas))
    }

    listar() :Pessoa[]{
        /*const dados = localStorage.getItem('pessoasStorage');

        if (dados) {
            this.pessoas = JSON.parse(dados);
        } else {
            this.pessoas = [];
        }*/

        return this.pessoas;
    }


    tamanhoArray(): number {
        return this.pessoas.length
    }

    buscarPorId(id: number) {
        const pessoa = this.pessoas.find(elem => elem.id == id)

        return of(pessoa)
    }

    editar(pessoa: Pessoa) {
        const posArray = this.pessoas.findIndex(elem => elem.id === pessoa.id)

        if (posArray !== -1) {
            this.pessoas[posArray] = pessoa
        }
    }

    excluir(id: number) {
        this.pessoas = this.pessoas.filter(elem => elem.id !== id)
    }


}
