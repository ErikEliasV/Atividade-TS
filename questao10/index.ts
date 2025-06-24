//Questão 10. Escreva um programa TypeScript que declare uma variável 'result' que pode conter um valor do tipo string ou number. Agora, escreva uma function que receba um argumento do tipo string | number | boolean e exiba seu tipo. 

let result: string | number | boolean = "Hello";

function exibirTipo(argumento: string | number | boolean) {
    console.log(`O tipo do argumento é: ${typeof argumento}`);
    }

exibirTipo(result);

result = 10;

exibirTipo(result);
export {};