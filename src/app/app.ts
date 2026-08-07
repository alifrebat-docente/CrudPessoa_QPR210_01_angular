// Importa o decorator Component e a função signal do Angular.
import { Component, signal } from '@angular/core';

// Importa o RouterOutlet para exibir as rotas da aplicação.
import { RouterOutlet } from '@angular/router';

// Importa o componente de menu.
import { Menu } from './component/menu/menu';

@Component({
  // Define o seletor do componente principal.
  selector: 'app-root',

  // Importa os componentes utilizados no template.
  imports: [RouterOutlet, Menu],

  // Define o arquivo HTML do componente.
  templateUrl: './app.html',

  // Define o arquivo de estilos do componente.
  styleUrl: './app.css'
})
export class App {

  // Cria um sinal (signal) chamado "title" com o valor inicial "CrudPessoa".
  // Signals são usados para armazenar valores reativos no Angular.
  protected readonly title = signal('CrudPessoa');
}