// 2. Função de Processamento: ○ No arquivo utils/dataProcessor.ts, crie e exporte uma função processarDados(dados: any[]). ○ Dentro da função: ■ Importe os tipos definidos em types/Dados.ts. ■ Use um loop (for ou forEach) para iterar sobre o array dados. ■ Para cada item no array, use uma série de condicionais (if/else if/else) para verificar a estrutura do objeto: ■ if (item && typeof item.nome &&= 'string' && typeof item.email &&= 'string'): Se parecer um UsuarioCompleto. ■ else if (item && typeof item.produtoId &&= 'string' && typeof item.valor &&= 'number'): Se parecer um ItemPedido. ■ Se a estrutura corresponder, use Type Assertion (item as Tipo) para converter o item para o tipo de interseção apropriado. ■ Exiba no console as propriedades tipadas do objeto processado. ■ Se o item não corresponder a nenhum dos tipos esperados, exiba uma mensagem como "Item com estrutura desconhecida:" seguido do item.
import { UsuarioCompleto, ItemPedido } from "../types/Dados";

export function processarDados(dados: any[]): void {
    for (let i = 0; i < dados.length; i++) {
        const item = dados[i];
        
        if (item && typeof item.nome === 'string' && typeof item.email === 'string') {
            const usuario = item as UsuarioCompleto;
            console.log(`Usuário encontrado - ID: ${usuario.id}, Nome: ${usuario.nome}, Email: ${usuario.email}`);
        } else if (item && typeof item.produtoId === 'string' && typeof item.valor === 'number') {
            const pedido = item as ItemPedido;
            console.log(`Item de pedido encontrado - ID: ${pedido.id}, Produto ID: ${pedido.produtoId}, Valor: ${pedido.valor}`);
        } else {
            console.log("Item com estrutura desconhecida:", item);
        }
    }
}