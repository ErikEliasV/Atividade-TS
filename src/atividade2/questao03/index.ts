//3. Funções com Anotações de Retorno e Propriedades Opcionais em Objetos • Crie uma função chamada gerarSaudacao que aceite um parâmetro pessoa do tipo objeto. • O objeto pessoa deve ter as seguintes propriedades: • primeiroNome: string • ultimoNome!: string (opcional) • A função gerarSaudacao deve ter uma anotação de tipo de retorno string. • Dentro da função: • Se ultimoNome for fornecido, retorne uma saudação completa (ex: "Olá, [primeiroNome] [ultimoNome]!"). • Caso contrário, retorne uma saudação apenas com o primeiroNome (ex: "Olá, [primeiroNome]!"). • Chame gerarSaudacao duas vezes: uma com primeiroNome e ultimoNome, e outra apenas com primeiroNome. Imprima o resultado de cada chamada. • Conceitos esperados: Anotações de tipo de retorno, Objetos, Propriedades opcionais. • Exemplo de Saída Esperada: Olá, Ana Silva! Olá, Pedro!

//Criando a função gerarSaudacao que recebe um objeto com as propriedades primeiroNome e ultimoNome e que retorna uma string
function gerarSaudacao(pessoa: {primeiroNome: string, ultimoNome?: string}): string{
    //Verificando se o ultimoNome foi fornecido
    if(pessoa.ultimoNome){
        return `Olá, ${pessoa.primeiroNome} ${pessoa.ultimoNome}!`;
    }
    return `Olá, ${pessoa.primeiroNome}!`;
}

console.log(gerarSaudacao({primeiroNome: "Erik", ultimoNome: "Sousa"})); //Mostrando a saudação com o ultimo nome
console.log(gerarSaudacao({primeiroNome: "Erik"})); //Mostrando a saudação sem o ultimo nome