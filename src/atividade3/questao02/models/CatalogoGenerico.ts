// 2. Definição da Classe CatalogoGenerico: ○ No arquivo models/CatalogoGenerico.ts, crie e exporte uma classe CatalogoGenerico<T extends ItemCatalogo>. ○ Ela deve ter uma propriedade privada produtos: T[]. ○ Adicione um método adicionarProduto(produto: T) que insere um produto no catálogo. ○ Adicione um método listarProdutos(): T[] que retorna a lista de todos os produtos. ○ Adicione um método buscarPorNome(nome: string): T[] que, usando um loop (for ou forEach) e uma condicional (if), filtre os produtos e retorne aqueles cujo nome contém a string de busca (ignorando maiúsculas/minúsculas).
import { IItemCatalogo } from "../interfaces/IItemCatalogo";

export default class CatalogoGenerico<T extends IItemCatalogo> {
    private produtos: T[] = [];

    adicionarProduto(produto: T) {
        this.produtos.push(produto);
    }

    listarProdutos(): T[] {
        return this.produtos;
    }

    buscarPorNome(nome: string): T[] {
        const resultado: T[] = [];
        
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome.toLowerCase().includes(nome.toLowerCase())) {
                resultado.push(this.produtos[i]);
            }
        }
        
        return resultado;
    }
}
