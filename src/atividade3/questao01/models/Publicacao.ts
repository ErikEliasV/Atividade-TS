// 1. Definição da Classe Base Publicacao (Opcional, para Herança): ○ No arquivo models/Publicacao.ts, defina uma classe base Publicacao com propriedades comuns como id: string e titulo: string. Exporte esta classe. ○ Esta é uma sugestão para praticar herança; se preferir, pode pular esta etapa e fazer Livro como uma classe independente.

export default class Publicacao {
    id: string;
    titulo: string;

    constructor(id: string, titulo: string) {
        this.id = id;
        this.titulo = titulo;
    }
}