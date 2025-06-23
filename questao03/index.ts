let numero: number = 10;
let nome: string = "Erik";
let boo: boolean = true;
let dado: undefined = undefined;

console.log(`Número: ${numero}`);
console.log(`Soma: ${numero + 5}`);
console.log(`Subtração: ${numero - 3}`);
console.log(`Multiplicação: ${numero * 2}`);
console.log(`Divisão: ${numero / 2}`);

console.log(`Nome: ${nome}`);
console.log(`Tamanho: ${nome.length}`);
console.log(`Maiúsculo: ${nome.toUpperCase()}`);
console.log(`Minúsculo: ${nome.toLowerCase()}`);
console.log("Concatenação:", nome + " Elias");

console.log(`Boolean: ${boo}`);
console.log(`Negação: ${!boo}`);
console.log(`AND com true: ${boo && true}`);
console.log(`OR com false: ${boo || false}`);

console.log(`Valor undefined: ${dado}`);
console.log(`Tipo: ${typeof dado}`);
console.log(`É undefined? ${dado === undefined}`);

export {};