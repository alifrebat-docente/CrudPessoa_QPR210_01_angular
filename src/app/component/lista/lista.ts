import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';
import { Pessoa } from '../../models/pessoa';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  constructor(private router: Router, private pessoaService: PessoaService){}

  listar(){
    return this.pessoaService.listar()
  }

  exluir(pObjPessoa: Pessoa) {
    if (confirm("Tem certeza que deseja Excluir a Pessoa?")) {
      this.pessoaService.excluir(Number(pObjPessoa.id))
    }

    this.listar()
  }

  buscarPorId(pObjPessoa: Pessoa) {
    this.router.navigate(['/cadastro', pObjPessoa.id])
  }

}
