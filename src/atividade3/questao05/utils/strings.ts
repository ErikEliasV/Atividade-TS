//1. Módulo de Utilitários de String: ○ No arquivo utils/strings.ts: ■ Exporte uma função padrão (export default) chamada formatarNome(nomeCompleto: string): string que: ■ Recebe um nome completo (ex: "joão silva souza"). ■ Usa métodos de string para transformar a primeira letra de cada parte do nome para maiúscula, exceto a primeira parte que deve ser totalmente em maiúsculas (ex: "JOÃO Silva Souza"). ■ Use condicionais para lidar com nomes com uma ou mais partes. ■ Exporte uma função nomeada (export function) chamada contarVogais(texto: string): number que: ■ Recebe uma string de texto. ■ Usa um loop para iterar sobre a string e contar o número de vogais (a, e, i, o, u, independentemente de maiúsculas/minúsculas).

export default function formatarNome(nomeCompleto: string): string {
    const partes = nomeCompleto.trim().split(' ');

    if (partes.length === 0) {
        return '';
    }

    const primeiraParte = partes[0].toUpperCase();
    
    if (partes.length === 1) {
        return primeiraParte;
    }

    const demaisPartes = partes.slice(1).map(parte => {
        if (parte.length === 0) return '';
        return parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase();
    });

    return [primeiraParte, ...demaisPartes].join(' ');
}

export function contarVogais(texto: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    const textoLower = texto.toLowerCase();

    for (let i = 0; i < textoLower.length; i++) {
        if (vogais.includes(textoLower[i])) {
            contador++;
        }
    }
    
    return contador;
}