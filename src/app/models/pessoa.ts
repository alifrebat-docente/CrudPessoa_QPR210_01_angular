// Exporta a classe para que ela possa ser utilizada em outros arquivos.
export class Pessoa {
    
    id?: number;
    nome?: string;
    email?: string;
    cpf?: number;
    dataNascimento?: string;
    uf: string = ''
    municipio: string = ''

}