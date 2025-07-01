// 3. Lógica Principal da Aplicação: ○ No arquivo app.ts: ■ Importe as interfaces (ItemCatalogo, Eletronico, Vestuario) e a classe CatalogoGenerico. ■ Crie instâncias de objetos literais que implementem Eletronico e Vestuario. ■ Crie um CatalogoGenerico<Eletronico> e adicione alguns objetos Eletronico. ■ Crie um CatalogoGenerico<Vestuario> e adicione alguns objetos Vestuario. ■ Chame listarProdutos() para cada catálogo e exiba os resultados no console. ■ Realize uma busca por nome em um dos catálogos usando buscarPorNome() e exiba os resultados. Use uma condicional para informar se algum produto foi encontrado.
import { IEletronico } from "./interfaces/IEletronico";
import { IVestuario } from "./interfaces/IVestuario";
import CatalogoGenerico from "./models/CatalogoGenerico";

const eletronico: IEletronico = {
    id: 1,
    nome: "Notebook",
    preco: 1000,
    marca: "Dell"
};

const vestuario: IVestuario = {
    id: 1,
    nome: "Camiseta",
    preco: 100,
    tamanho: "G"
};

const eletronico2: IEletronico = {
    id: 2,
    nome: "Celular",
    preco: 1000,
    marca: "Samsung"
};

const vestuario2: IVestuario = {
    id: 2,
    nome: "Calça",
    preco: 100,
    tamanho: "M"
};

const catalogoEletronico = new CatalogoGenerico<IEletronico>();
catalogoEletronico.adicionarProduto(eletronico);
catalogoEletronico.adicionarProduto(eletronico2);

const catalogoVestuario = new CatalogoGenerico<IVestuario>();
catalogoVestuario.adicionarProduto(vestuario);
catalogoVestuario.adicionarProduto(vestuario2);

console.log(catalogoEletronico.listarProdutos());
console.log(catalogoVestuario.listarProdutos());

console.log(catalogoEletronico.buscarPorNome("Notebook"));

console.log(catalogoVestuario.buscarPorNome("calça"));

if (catalogoEletronico.buscarPorNome("Celular")) {
    console.log("Produto encontrado");
} else {
    console.log("Produto não encontrado");
}

if (catalogoVestuario.buscarPorNome("Camiseta")) {
    console.log("Produto encontrado");
} else {
    console.log("Produto não encontrado");
}