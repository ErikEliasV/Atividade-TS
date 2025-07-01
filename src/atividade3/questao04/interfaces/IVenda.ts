//1. Interface Base Venda: ○ No arquivo interfaces/IVenda.ts, defina e exporte a interface Venda com as seguintes propriedades: idVenda: string, data: string, valorTotal: number, clienteId: string, status: 'pendente' | 'concluida' | 'cancelada'.

export interface IVenda {
    idVenda: string;
    data: string;
    valorTotal: number;
    clienteId: string;
    status: 'pendente' | 'concluida' | 'cancelada';
}
