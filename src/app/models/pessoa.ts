// Exporta a classe para que ela possa ser utilizada em outros arquivos.
export class Pessoa {

    // Identificador da pessoa (opcional).
    id?: number;

    // Nome da pessoa (opcional).
    nome?: string;

    // E-mail da pessoa (opcional).
    email?: string;

    // CPF da pessoa (opcional).
    // Observação: normalmente o CPF é armazenado como string.
    cpf?: number;

    // Data de nascimento da pessoa (opcional).
    // O tipo string pode armazenar uma data no formato "AAAA-MM-DD".
    dataNascimento?: string;
}