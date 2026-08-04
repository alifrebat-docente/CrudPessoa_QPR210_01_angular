import { Routes } from '@angular/router';

import { Formulario } from './formulario/formulario';
import { Lista } from './lista/lista';

export const routes: Routes = [
    {
        path: 'cadastro',
        component: Formulario
    },

    {
        path: 'lista',
        component: Lista
    },
   
];
