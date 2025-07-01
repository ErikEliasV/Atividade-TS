//2. Módulo de Utilitários Numéricos: ○ No arquivo utils/numeros.ts: ■ Exporte uma classe OperacoesMatematicas com os seguintes métodos estáticos: ■ somarArray(numeros: number[]): number: Usa um loop (forEach ou for&&.of) para somar todos os elementos de um array de números. ■ ehPar(numero: number): boolean: Retorna true se o número for par, false caso contrário. ■ Exporte uma constante nomeada (export const) chamada MAX_VALOR com o valor 1000.
export class OperacoesMatematicas {
    static somarArray(numeros: number[]): number {
        let soma = 0;
        for (const numero of numeros) {
            soma += numero;
        }
        return soma;
    }

    static ehPar(numero: number): boolean {
        return numero % 2 === 0;
    }
}

export const MAX_VALOR = 1000;
