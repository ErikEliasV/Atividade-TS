//1. Definição de Tipos:○ No arquivo types/Dados.ts, defina e exporte as interfaces e tipos: ■ Interface DadosBase com uma propriedade id: any. ■ Interface DadosUsuario com propriedades nome: string e email: string. ■ Interface DadosProduto com propriedades produtoId: string e valor: number. ■ Tipo de interseção UsuarioCompleto = DadosBase & DadosUsuario. ■ Tipo de interseção ItemPedido = DadosBase & DadosProduto
export interface DadosBase {
    id: any;
}
export interface DadosUsuario {
    nome: string;
    email: string;
}
export interface DadosProduto {
    produtoId: string;
    valor: number;
}
export type UsuarioCompleto = DadosBase & DadosUsuario;
export type ItemPedido = DadosBase & DadosProduto;
 
