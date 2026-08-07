// Importa o tipo Routes, utilizado para definir as rotas da aplicação.
import { Routes } from '@angular/router';

// Importa o componente de formulário.
import { Formulario } from './component/formulario/formulario';

// Importa o componente de listagem.
import { Lista } from './component/lista/lista';

// Importa o componente da página inicial.
import { HomeComponent } from './component/home-component/home-component';

// Define as rotas da aplicação.
export const routes: Routes = [

    // Quando a URL estiver vazia, redireciona para a página inicial.
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    // Rota para a página inicial.
    {
        path: 'home',
        component: HomeComponent
    },

    // Rota para o formulário de cadastro de uma nova pessoa.
    {
        path: 'cadastro',
        component: Formulario
    },

    // Rota para editar uma pessoa existente.
    // O ":id" representa o identificador da pessoa.
    {
        path: 'cadastro/:id',
        component: Formulario
    },

    // Rota para exibir a lista de pessoas cadastradas.
    {
        path: 'lista',
        component: Lista
    },

];