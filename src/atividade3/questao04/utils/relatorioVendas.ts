//2. Funções de Relatório com Utility Types: ○ No arquivo utils/relatorioVendas.ts, crie e exporte as seguintes funções: ■ gerarResumoVendas(vendas: Venda[]): Pick<Venda, 'idVenda' | 'valorTotal' | 'status'>[]: ■ Importe Venda de interfaces/IVenda.ts. ■ Use um loop (map ou forEach) para iterar sobre o array de Venda e retornar um novo array com apenas as propriedades idVenda, valorTotal e status. ■ atualizarStatusVenda(vendaOriginal: Venda, novoStatus: Partial<Venda>): Venda: ■ Retorne um novo objeto que combine a vendaOriginal com as propriedades de novoStatus usando o operador spread ({ &&.vendaOriginal, &&.novoStatus }). ■ registrarVenda(venda: Readonly<Venda>): void: ■ Simplesmente exiba os detalhes da venda no console. Adicione um comentário no código explicando que tentar modificar venda resultaria em erro de compilação. ■ prepararVendaParaCliente(venda: Venda): Omit<Venda, 'clienteId' | 'status'&: ■ Retorne uma nova versão da venda sem as propriedades clienteId e status.

import { IVenda } from "../interfaces/IVenda";

export function gerarResumoVendas(vendas: IVenda[]): Pick<IVenda, 'idVenda' | 'valorTotal' | 'status'>[] {
    return vendas.map(venda => ({
        idVenda: venda.idVenda,
        valorTotal: venda.valorTotal,
        status: venda.status
    }));
}

export function atualizarStatusVenda(vendaOriginal: IVenda, novoStatus: Partial<IVenda>): IVenda {
    return { ...vendaOriginal, ...novoStatus };
}

export function registrarVenda(venda: Readonly<IVenda>): void {
    console.log("Detalhes da venda:", venda);
}

export function prepararVendaParaCliente(venda: IVenda): Omit<IVenda, 'clienteId' | 'status'> {
    const { clienteId, status, ...vendaParaCliente } = venda;
    return vendaParaCliente;
}
