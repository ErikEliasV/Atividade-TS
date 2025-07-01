// 2. Definição da Classe Livro: ○ No arquivo models/Livro.ts, crie e exporte uma classe Livro. ○ Propriedades: titulo (string), autor (string), anoPublicacao (number), estaDisponivel (boolean, inicialize como true no construtor). ○ Se usou Publicacao, faça Livro extends Publicacao. ○ O construtor deve aceitar titulo, autor e anoPublicacao. ○ Adicione um método emprestar(): boolean que: ■ Verifique se estaDisponivel é true. ■ Se sim, mude estaDisponivel para false e retorne true. ■ Se não, retorne false.○ Adicione um método devolver(): boolean que: ■ Verifique se estaDisponivel é false. ■ Se sim, mude estaDisponivel para true e retorne true. ■ Se não, retorne false.

import Publicacao from "./Publicacao";

export default class Livro extends Publicacao {
    autor: string;
    anoPublicacao: number;
    estaDisponivel: boolean;

    constructor(id: string, titulo: string, autor: string, anoPublicacao: number) {
        super(id, titulo);
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = true;
    }

    emprestar(): boolean | string {
        if (this.estaDisponivel) {
            this.estaDisponivel = false;
            return true + " - Livro emprestado com sucesso";
        }
        return false + " - Livro não está disponível";
    }

    devolver(): boolean | string {
        if (!this.estaDisponivel) {
            this.estaDisponivel = true;
            return true + " - Livro devolvido com sucesso";
        }
        return false + " - Livro já está disponível";
    }
}
