// 3. Lógica Principal da Aplicação: ○ No arquivo app.ts: ■ Importe a classe Livro (e Publicacao, se usada) de models/Livro.ts (e models/Publicacao.ts). ■ Crie duas instâncias da classe Livro. ■ Use condicionais (if/else) e chame o método emprestar() para tentar emprestar um dos livros. Exiba uma mensagem no console indicando se o empréstimo foi bem-sucedido ou não. ■ Tente emprestar o mesmo livro novamente e observe o resultado no console. ■ Chame o método devolver() para o livro emprestado e depois tente emprestá-lo novamente, exibindo os resultados.
import Livro from "./models/Livro";

const livro1 = new Livro("1", "Se não eu, quem vai fazer você feliz?: Minha história de amor com Chorão", "Graziela Gonçalves", 2018);
const livro2 = new Livro("2", "Código Limpo", "Robert C. Martin", 2009);

console.log(livro1.emprestar());
console.log(livro1.emprestar());
console.log(livro1.devolver());
console.log(livro1.emprestar());

console.log(livro2.emprestar());
console.log(livro2.emprestar());
console.log(livro2.devolver());