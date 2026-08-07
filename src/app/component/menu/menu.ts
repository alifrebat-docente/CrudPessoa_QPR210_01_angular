// Importa o decorator Component do Angular.
import { Component } from '@angular/core';

// Importa a diretiva RouterLink para permitir a navegação entre rotas.
import { RouterLink } from '@angular/router';

@Component({
  // Define o seletor utilizado para inserir este componente no HTML.
  selector: 'app-menu',

  // Importa a diretiva RouterLink para ser utilizada no template.
  imports: [RouterLink],

  // Define o arquivo HTML do componente.
  templateUrl: './menu.html',

  // Define o arquivo de estilos do componente.
  styleUrl: './menu.css',
})
export class Menu {
  // Classe do componente Menu.
  // Como toda a lógica está no arquivo HTML, não há necessidade de atributos ou métodos.
}