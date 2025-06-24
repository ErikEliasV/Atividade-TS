// Questão 11. Escreva um programa TypeScript que crie uma function combine que aceite dois parâmetros dos tipos boolean e number. Ela deve retornar um valor que pode ser um boolean ou um number. Use um union type para conseguir isso. 

//Criando a função que recebe os dois parâmetros que é do tipo number ou boolean
function combine(a: number | boolean, b: number | boolean): number | boolean{
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return a && b;
    }
}

console.log(combine(10, 20)); //Mostra o resultado da soma dos dois números
console.log(combine(false, true)); //Mostra o resultado de dois valores booleanos fazendo que eles sejam false
console.log(combine(true, 10)); //Mostra o resultado da multiplicação do booleano pelo número
console.log(combine(false, 10)); //Mostra o resultado da multiplicação do booleano pelo número

export {};
