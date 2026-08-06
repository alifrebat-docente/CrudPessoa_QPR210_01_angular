import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  id = 0
  nome = ''
  email = ''
  cpf = 0.0
  dataNascimento = ''

  constructor(private pessoaService: PessoaService) { }

  salvar() {
    console.log(this.nome, this.email, this.cpf, this.dataNascimento)
    const pessoa = new Pessoa()
    pessoa.id = this.pessoaService.tamanhoArray() + 1 //ARMENGANDO A GERAÇÃO DO ID
    pessoa.nome = this.nome
    pessoa.email = this.email
    pessoa.cpf = this.cpf
    pessoa.dataNascimento = this.dataNascimento

    this.pessoaService.adicionar( 
      pessoa
      /*{
        id: 0,
        nome: this.nome,
        email: this.email,
        cpf: this.cpf,
        dataNascimento: this.dataNascimento
      }*/
    )

    this.limpaAtributos()
  }

  limpaAtributos(){
    this.nome = ''
    this.email = ''
    this.cpf = 0.0
    this.dataNascimento = ''
  }


}
