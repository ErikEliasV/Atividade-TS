//3. Dados de Exemplo e Execução: ○ No arquivo app.ts: ■ Importe a função processarDados de utils/dataProcessor.ts. ■ Declare uma variável dadosRecebidos: any[] que contenha: ■ Um objeto que você sabe que é um UsuarioCompleto. ■ Um objeto que você sabe que é um ItemPedido. ■ Um objeto inválido ou incompleto (ex: { id: 3, descricao: "Algo" }). ■ Chame processarDados(dadosRecebidos) e observe a saída no console.
import { processarDados } from "./utils/dataProcessor";

const dadosRecebidos: any[] = [
    {
        id: 1,
        nome: "Erik Elias",
        email: "erik100.eliasv@gmail.com"
    },
    {
        id: 2,
        produtoId: "PROD001",
        valor: 150.50
    },
    {
        id: 3,
        letra: "Ouvi o grito de dor de um homem que falava a verdade. Mas ninguém se importava. Botando pra fora tudo o que sentiu na pele. Mas ninguém lhe dava ouvidos não."
    }
];

processarDados(dadosRecebidos);
