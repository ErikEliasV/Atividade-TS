// 3. Dados de Exemplo e Execução: ○ No arquivo app.ts:■ Importe a interface Venda e todas as funções de utils/relatorioVendas.ts. ■ Crie um array de objetos Venda simulando algumas vendas (inclua diferentes status). ■ Teste cada uma das funções criadas: ■ Chame gerarResumoVendas e exiba o resultado. ■ Chame atualizarStatusVenda para uma das vendas (atualize apenas o status, por exemplo) e exiba a venda atualizada. ■ Crie uma const que seja um objeto Readonly<Venda> (usando o as ou definindo o tipo explicitamente) e passe-a para registrarVenda. Tente modificar uma de suas propriedades logo após a criação para demonstrar o erro de compilação. ■ Chame prepararVendaParaCliente para uma das vendas e exiba o resultado. ■ Use um loop e condicionais para listar as vendas que estão com status &&= 'concluida'.

import { IVenda } from "./interfaces/IVenda";
import { 
    gerarResumoVendas, 
    atualizarStatusVenda, 
    registrarVenda, 
    prepararVendaParaCliente 
} from "./utils/relatorioVendas";

const vendas: IVenda[] = [
    {
        idVenda: "01",
        data: "2026-01-15",
        valorTotal: 150.00,
        clienteId: "01",
        status: "concluida"
    },
    {
        idVenda: "02",
        data: "2026-01-16",
        valorTotal: 89.50,
        clienteId: "02",
        status: "pendente"
    },
    {
        idVenda: "03",
        data: "2026-01-17",
        valorTotal: 200.00,
        clienteId: "03",
        status: "concluida"
    },
    {
        idVenda: "04",
        data: "2026-01-18",
        valorTotal: 75.25,
        clienteId: "04",
        status: "cancelada"
    }
];

// Teste 1: Gerar resumo de vendas
const resumoVendas = gerarResumoVendas(vendas);
console.log(resumoVendas);

// Teste 2: Atualizar status de uma venda
const vendaAtualizada = atualizarStatusVenda(vendas[1], { status: "concluida" });
console.log("Venda atualizada:", vendaAtualizada);

// Teste 3: Registrar venda com Readonly
const vendaReadonly = {
    idVenda: "05",
    data: "2026-01-19",
    valorTotal: 120.00,
    clienteId: "05",
    status: "pendente"
} as Readonly<IVenda>;

// Tentativa de modificar propriedade para demonstrar erro de compilação
// vendaReadonly.status = "concluida"; // Esta linha causaria erro de compilação

registrarVenda(vendaReadonly);


// Teste 4: Preparar venda para cliente
const vendaParaCliente = prepararVendaParaCliente(vendas[0]);
console.log("Venda para cliente:", vendaParaCliente);

// Teste 5: Listar vendas concluídas
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i].status === 'concluida') {
        console.log(`Venda ${vendas[i].idVenda} - Valor: R$ ${vendas[i].valorTotal}`);
    }
}
