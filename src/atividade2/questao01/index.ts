//1. Manipulação de Tipos Primitivos e Arrays • Crie uma função chamada processarDados que aceite dois parâmetros: • nome: do tipo string. • idades: um array de number. • Dentro da função, realize as seguintes operações: • Imprima uma saudação usando o nome em letras maiúsculas. • Calcule e imprima a soma de todas as idades no array. • Verifique se a primeira idade no array é um número par ou ímpar e imprima o resultado. • Chame a função processarDados com os valores "João" e [25, 30, 22]. • Conceitos esperados: Tipos primitivos (string, number), Arrays (number[]), Funções, Anotações de tipo de parâmetro. • Exemplo de Saída Esperada: Olá, JOÃO!! Soma das idades: 77 A primeira idade é ímpar.

//criando a função processarDados que recebe dois parametros um string e um array de numeros
function processarDados(nome: string, idades: number[]) {
    console.log(`Olá, ${nome.toUpperCase()}!!`);
    const soma = idades.reduce((acc, curr) => acc + curr, 0);
    console.log(`Soma das idades: ${soma}`);
    //verificando se a primeira idade é par ou ímpar
    if(idades[0] % 2 === 0){
        console.log(`A primeira idade é par.`);
    }else{
        console.log(`A primeira idade é ímpar.`);
    }
}

processarDados("Erik", [20, 24, 42]);
