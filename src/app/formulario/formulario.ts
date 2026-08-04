import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../service/pessoa-service';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  //Pessoa p = new Pessoa()
  id = 0
  nome = ''
  email = ''
  cpf = 0.0
  dataNascimento = ''


  constructor(private pessoaService: PessoaService){}

  salvar(){
    this.pessoaService.adicionar({
      id: 0,
      nome : this.nome,
      email : this.email,
      cpf : this.cpf,
      dataNascimento : this.dataNascimento
    })
  }
}
