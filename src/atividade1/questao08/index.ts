//Questão 08. Escreva um programa TypeScript que defina uma enumeration 'Cor' com os valores 'Vermelho', 'Verde', 'Branco' e 'Azul'. Crie uma variável 'corSelecionada' do tipo 'Cor' e atribua a ela um dos valores da enumeration. 

enum Cor { 
    Vermelho = "Vermelho", 
    Verde = "Verde", 
    Branco = "Branco", 
    Azul = "Azul" 
};

//Falando que a variável corSelecionada é do tipo Cor e que o valor atribuído a ela é Branco
let corSelecionada: Cor = Cor.Branco;

console.log(`A cor selecionada é: ${corSelecionada}`);

export {};