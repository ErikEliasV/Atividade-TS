//Questão 07. Escreva um programa TypeScript que declare um array de um tipo de dado específico. Ele demonstrará operações comuns de array como adicionar elementos, remover elementos e iterar pelo array. 

//Criando um array de strings
let Alimentos: string[] = ["Arroz", "Feijão", "Carne", "Ovo", "Leite"];

Alimentos.push("Carne"); // Adicionando um elemento ao array
console.log(Alimentos);

Alimentos.pop(); // Removendo o último elemento do array
console.log(Alimentos);

Alimentos.shift(); // Removendo o primeiro elemento do array
console.log(Alimentos);

Alimentos.unshift("Arroz"); // Adicionando um elemento ao início do array
console.log(Alimentos);

Alimentos.splice(2, 1); // Removendo o elemento do índice 2
console.log(Alimentos);



export {};