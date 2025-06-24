// 4. União de Tipos e Tipagem Contextual em Funções Anônimas • Crie uma função processarID que aceite um parâmetro id do tipo number | string (união de tipos). • Dentro da função processarID: • Utilize uma verificação de tipo (typeof) para determinar se id é uma string ou um number. • Se for string, imprima o ID em letras minúsculas. • Se for number, imprima o ID multiplicado por 2. • Crie um array de nomes: const nomes = ["João", "Maria", "Lúcia"]; • Use o método forEach do array nomes com uma função anônima para iterar sobre cada nome. • Dentro da função anônima do forEach, imprima cada nome em letras maiúsculas. Observe como o TypeScript infere o tipo do parâmetro da função anônima (tipagem contextual). • Conceitos esperados: União de tipos, Refinamento de tipos, Funções anônimas, Tipagem contextual. • Exemplo de Saída Esperada: Seu ID (string) em minúsculas: abc123def Seu ID (number) multiplicado por 2: 200 JOÃO MARIA LÚCIA}
function processarID(id: number | string){
    if(typeof id === "string"){
        console.log(`O ID em minúsculas: ${id.toLowerCase()}`);
    }if(typeof id === "number"){
        console.log(`O ID multiplicado por 2: ${id * 2}`);
    }else{
        console.log("O ID não é uma string ou um número");
    }
}

processarID("Erik");
processarID(20);
processarID(true);

let nomes: string[] = ["Erik", "Enzo", "Layza"];
 
nomes.forEach(nome => {
    console.log(nome.toUpperCase());
});
