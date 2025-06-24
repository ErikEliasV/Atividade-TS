// 5. Alias de Tipo, Interfaces e Enums • Defina um alias de tipo chamado StatusPedido que seja uma união de strings: "pendente" | "processando" | "concluido" | "cancelado". • Crie uma interface chamada Produto com as seguintes propriedades: • id: number • nome: string • preco: number • Defina um enum chamado PrioridadeEnvio com os valores Baixa = 1, Media = 2, Alta = 3. • Crie uma função chamada exibirDetalhesPedido que aceite os seguintes parâmetros: • produto: do tipo Produto (interface). • status: do tipo StatusPedido (alias de tipo). • prioridade: do tipo PrioridadeEnvio (enum). • Dentro da função, imprima todos os detalhes do pedido de forma legível. • Chame a função exibirDetalhesPedido com um exemplo de produto, status e prioridade. • Conceitos esperados: Aliases de tipo, Interfaces, Enums. • Exemplo de Saída Esperada: Detalhes do Pedido: Produto ID: 101 Nome do Produto: Camiseta Preço: 29.99 Status do Pedido: processando Prioridade de Envio: 2 (Media)

type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado";

interface Produto{
    id: number;
    nome: string;
    preco: number;
}

enum PrioridadeEnvio{ Baixa = 1, Media = 2, Alta = 3}

function exibirDetalhesPedido(produto: Produto, status: StatusPedido, prioridade: PrioridadeEnvio){
    console.log(`Detalhes do Pedido:\nProduto ID: ${produto.id}\nNome do Produto: ${produto.nome}\nPreço: ${produto.preco}\nStatus do Pedido: ${status}\nPrioridade de Envio: ${prioridade}`);
}

exibirDetalhesPedido({id: 87, nome: "Fone Kz", preco: 139.99}, "pendente", PrioridadeEnvio.Alta);