//Questão 13. Escreva uma function TypeScript que receba um argumento do tipo string | number. Dentro da function, use um type guard para verificar se o argumento é uma string ou um number. Em seguida, registre a mensagem apropriada. 

function checkType(value: string | number) {
    if (typeof value === "string") {
        console.log(`O valor é uma string: ${value}`);
    } else {
        console.log(`O valor é um número: ${value}`);
    }
}

checkType("Erik"); //Mostrando que o valor é uma string
checkType(10); //Mostrando que o valor é um número

export {};
