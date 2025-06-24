// Questão 15. Escreva um programa TypeScript que declare um array contendo tanto numbers quanto strings. Use type assertions para extrair valores number, string e boolean do array. 

//Criando um array com números e strings
let array: (number | string)[] = [7, "Erik", 1, "Enzo", 15, "Layza", 5, 32, "Davi"];

//Fazendo o type assertion para extrair valores number, string e boolean do array
let number = array[0] as number;
let string = array[1] as string;
let boolean = array[2] as unknown as boolean; //Fazendo o type assertion para extrair valores boolean do array

console.log(number); //Mostrando o valor do número(7)
console.log(string); //Mostrando o valor da string(Erik)
console.log(boolean); //Mostrando o valor do boolean(true)

export {};