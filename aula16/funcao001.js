// Trabalhando um pouco com funções

// Função para determinar se um número é par ou ímpar
function parOuImpar(number) {
    if (number % 2 == 0) {
        return 'Par';   // Retorna uma string indicando que o número é par
    } else {
        return 'Ímpar'; // Retorna uma string indicando que o número é ímpar
    }
}

// Chama a função e imprime o resultado no console
console.log(parOuImpar(10));

// Utilizando parâmetros predefinidos (caso não sejam fornecidos)
function somarDoisNumeros(number_one = 0, number_two = 0) { 
    return number_one + number_two; // Retorna a soma dos dois números
}

// Chama a função com dois números e imprime o resultado no console
console.log(somarDoisNumeros(56, 95)); // Resultado = 151

// Variável que armazena uma função anônima que multiplica um número por 2
let varFuncao = function (x) {
    return x * 2;
}

// Chama a função armazenada na variável e imprime o resultado no console
console.log(varFuncao(22));

// Função para calcular o fatorial de um número
function fatorialSimples(parametro) {
    let fatorial = 1;
    
    // Loop para calcular o fatorial
    for (let i = 1; i <= parametro; i++) {
        fatorial *= i;
    }
    return fatorial; // Retorna o fatorial calculado
}

// Chama a função para calcular o fatorial de 5 e imprime o resultado no console
console.log(fatorialSimples(5));

// Função recursiva para calcular o fatorial de um número
function fatorialRecursiva(parametro) {
    let fatorial = 1;
    
    if (parametro == 1) {
        return 1; // Caso base: fatorial de 1 é 1
    } else {
        // Chama recursivamente a função para calcular o fatorial
        return parametro * fatorialRecursiva(parametro - 1);
    }
}

// Chama a função recursiva para calcular o fatorial de 5 e imprime o resultado no console
console.log(fatorialRecursiva(5));

// Este código JavaScript demonstra vários conceitos de funções, incluindo a definição de funções, parâmetros padrão, funções anônimas e recursividade. 

// Cada função tem um propósito diferente e os resultados são impressos no console.