// 1. Definição de Interfaces: ○ No arquivo interfaces/IItemCatalogo.ts, defina e exporte a interface ItemCatalogo com id (number), nome (string), preco (number). ○ No arquivo interfaces/IEletronico.ts, defina e exporte a interface Eletronico que estenda ItemCatalogo (adicione marca: string). ○ No arquivo interfaces/IVestuario.ts, defina e exporte a interface Vestuario que estenda ItemCatalogo (adicione tamanho: string).
import { IItemCatalogo } from "./IItemCatalogo";

export interface IVestuario extends IItemCatalogo {
    tamanho: string;
}
