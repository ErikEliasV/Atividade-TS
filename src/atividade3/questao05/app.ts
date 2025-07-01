//3. Lógica Principal da Aplicação: ○ No arquivo app.ts: ■ Importe a função padrão formatarNome (dê a ela o nome que desejar) de utils/strings.ts. ■ Importe a função nomeada contarVogais de utils/strings.ts. ■ Importe a classe OperacoesMatematicas e a constante MAX_VALOR de utils/numeros.ts. ■ No corpo principal do arquivo: ■ Chame formatarNome com seu próprio nome completo e exiba o resultado. ■ Chame contarVogais com uma frase de sua escolha e exiba o resultado. ■ Crie um array de números (ex: [10, 25, 5, 40, 15]). ■ Use OperacoesMatematicas.somarArray para somar os números do array e exiba a soma. ■ Use OperacoesMatematicas.ehPar para verificar se a soma é um número par e exiba o resultado (true/false). ■ Use uma condicional (if/else) para verificar se a soma é maior que MAX_VALOR. Exiba uma mensagem apropriada (ex: "Soma excede o valor máximo permitido." ou "Soma dentro do limite.").
import formatarNome from "./utils/strings";
import { contarVogais } from "./utils/strings";
import { OperacoesMatematicas, MAX_VALOR } from "./utils/numeros";

const nomeFormatado = formatarNome("erik elias varela de sousa");
console.log("Nome formatado:", nomeFormatado);


const frase = "Seremos donos do nosso amanha se estivermos unidos!";
const quantidadeVogais = contarVogais(frase);
console.log(`A frase "${frase}" tem ${quantidadeVogais} vogais.`); // ele vai mostrar 18 vogais, porem tem 19 por conta que o "a" é maiusculo

const numeros = [33, 15, 3, 42, 7, 10, 25, 5, 40, 15];

const soma = OperacoesMatematicas.somarArray(numeros);
console.log(`Soma dos números [${numeros.join(', ')}]: ${soma}`);

const ehPar = OperacoesMatematicas.ehPar(soma);
console.log(`A soma ${soma} é par? ${ehPar}`);

if (soma > MAX_VALOR) {
    console.log("Soma excede o valor máximo permitido.");
} else {
    console.log("Soma dentro do limite.");
}
