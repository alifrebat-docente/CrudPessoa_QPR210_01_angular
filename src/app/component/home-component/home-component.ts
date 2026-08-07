// Importa o decorator Component do Angular.
import { Component } from '@angular/core';


@Component({

  // Define o nome da tag HTML que será usada para chamar este componente.
  selector: 'app-home-component',

  // Lista de módulos ou componentes importados pelo componente.
  // Neste caso, não possui nenhum.
  imports: [],

  // Define o arquivo HTML que contém a estrutura visual da página inicial.
  templateUrl: './home-component.html',

  // Define o arquivo CSS responsável pelos estilos da página inicial.
  styleUrl: './home-component.css',

})

// Classe responsável pelo componente da página inicial.
export class HomeComponent {

  // Este componente não possui atributos ou métodos.
  // Ele apenas exibe o conteúdo definido no arquivo HTML.
}