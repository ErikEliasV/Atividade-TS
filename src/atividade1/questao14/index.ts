// Questão 14. Escreva uma function TypeScript que aceite um parâmetro do tipo number e retorne um boolean indicando se o número é ímpar. Use um type guard para verificar e garantir que a entrada seja um number válido. 

function checkOddOrEven(number: number): boolean {
    if (number % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(checkOddOrEven(10)); //Mostrando que o número é par(retorna false)
console.log(checkOddOrEven(11)); //Mostrando que o número é ímpar(retorna true)

export {};