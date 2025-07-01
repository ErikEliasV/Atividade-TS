// Questão 16. Escreva um programa TypeScript que declare uma variável como type any e use uma type assertion para convertê-la explicitamente para o type string. 

let any: any = "Erik";
let string = any as string;

console.log(string);