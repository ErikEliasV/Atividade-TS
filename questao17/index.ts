//Questão 17. Escreva uma function TypeScript que aceite um parâmetro do tipo string | string[] e retorne o comprimento da string de entrada. Ela também deve retornar a soma dos comprimentos de todas as strings no array. Use type assertions para que o TypeScript saiba o tipo do parâmetro.

//Criando a function que vai calcular o tamanho da string ou o tamanho de cada string do array
function calculateSize(value: string | string[]): number {
    if (Array.isArray(value)) { //Verificando se o valor é um array
        return value.reduce((total, str) => total + str.length, 0); //Somando o tamanho de cada string do array
      } else {
        return value.length; //Retornando o tamanho da string
      }
    }

console.log(calculateSize("Erik"));
console.log(calculateSize(["Erik", "Enzo", "Layza", "Davi"]));

export {};