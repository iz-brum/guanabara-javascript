// Trabalhando um pocuo com funções

// Parametro unico 
function parOuImpar(number) {
    if (number%2==0) {
        return 'Par'    // retorna uma string
    } else {
        return 'Ímpar'  // retorna uma string também
    }
}

console.log(parOuImpar(10)) 




// Utilizando parametros predefinidos (geralmente utilizado quando a chamada não envia todos os parametros necessários)
function somarDoisNumeros(number_one=0, number_two=0) { 
    return number_one + number_two
}

console.log(somarDoisNumeros(56, 95)) // resultado = 151


// Uma variável pode receber uma função
let varFuncao = function (x) {
    return x*2
}

console.log(varFuncao(22))

function fatorialSimples(parametro) {
    let fatorial = 1
    
    for (let i = 1; i <= parametro; i++) {
        fatorial *= i
    }
    return fatorial
}

console.log(fatorialSimples(5))


// Utilizando recursividade de funções para calcular o fatorial 
function fatorialRecursiva(parametro) {
    let fatorial = 1
    
    if (parametro == 1) {
        return 1
    } else {
        return parametro * fatorialRecursiva(parametro-1)
    }
}

console.log(fatorialRecursiva(5))