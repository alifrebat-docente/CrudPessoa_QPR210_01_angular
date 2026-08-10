// Importa o decorator Injectable do Angular.
import { Injectable } from '@angular/core';

// Importa o modelo Pessoa.
import { Pessoa } from '../../models/pessoa';

// Importa a função 'of' do RxJS para retornar um Observable.
import { of } from 'rxjs';

// Define que este serviço pode ser injetado em qualquer parte da aplicação.
@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  // Cria um array privado para armazenar as pessoas.
  private pessoas: Pessoa[] = [];

  // Adiciona uma nova pessoa ao array.
  adicionar(pessoa: Pessoa) {
    this.pessoas.push(pessoa);

    // Salva os dados no LocalStorage (desativado).
    // localStorage.setItem('pessoasStorage', JSON.stringify(this.pessoas))
  }

  // Retorna a lista de pessoas cadastradas.
  listar(): Pessoa[] {

    // Recupera os dados do LocalStorage (desativado).
    /*
    const dados = localStorage.getItem('pessoasStorage');

    if (dados) {
      this.pessoas = JSON.parse(dados);
    } else {
      this.pessoas = [];
    }
    */

    return this.pessoas;
  }

  // Retorna a quantidade de pessoas cadastradas.
  tamanhoArray(): number {
    return this.pessoas.length;
  }

  // Procura uma pessoa pelo ID e retorna um Observable.
  buscarPorId(id: number) {
    // Procura a pessoa cujo ID seja igual ao informado.
    const pessoa = this.pessoas.find(elem => elem.id == id);

    // Retorna a pessoa encontrada como Observable.
    return of(pessoa);
  }

  // Atualiza os dados de uma pessoa existente.
  editar(pessoa: Pessoa) {

    // Encontra a posição da pessoa no array pelo ID.
    const posArray = this.pessoas.findIndex(elem => elem.id === pessoa.id);

    // Se encontrou a pessoa, substitui pelos novos dados.
    if (posArray !== -1) {
      this.pessoas[posArray] = pessoa;
    }
  }

  // Exclui uma pessoa pelo ID.
  excluir(id: number) {
    // Cria um novo array sem a pessoa cujo ID foi informado.
    this.pessoas = this.pessoas.filter(elem => elem.id !== id);
  }
}