//2. Trabalhando com o Tipo any e Inferência de Tipos • Declare uma variável chamada dadosFlexiveis com o tipo any. • Atribua a ela um valor de string (por exemplo, "Olá TypeScript!"). 8888• Imprima o valor de dadosFlexiveis. • Reatribua dadosFlexiveis para um number (por exemplo, 123). • Imprima o novo valor de dadosFlexiveis. • Crie uma função inferirTipo que aceite um parâmetro valor. Não adicione uma anotação de tipo para valor. • Dentro de inferirTipo, imprima o typeof do valor. • Chame inferirTipo passando uma string e depois um number. Observe como o TypeScript infere o tipo. • Conceitos esperados: Tipo any, Inferência de tipos, Anotações de tipo opcionais. • Exemplo de Saída Esperada: Olá TypeScript! 123 string number
function inferirTipo(valor: any){
    console.log(typeof valor);
}

let dadosFlexiveis: any = "Olá TypeScript!";
console.log(dadosFlexiveis);
inferirTipo(dadosFlexiveis);

dadosFlexiveis = 123;
console.log(dadosFlexiveis);
inferirTipo(dadosFlexiveis);





