let num = [1,22,3,16,9,25,7]

// num.push(4) // adciona o valor ao final do vetor

num.sort((a, b) => a - b) 
//O sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

// Se for 0 indica que são iguais
// Se for -1 indica que o primeiro valor é menor
// Se for 1, o segundo é menor.

console.log(`O vetor tem ${num.length} posições`)  
console.log(`O primeiro valor do vetor é num[0] = ${num[0]}`)

// for (let posicao = 0; posicao < num.length; posicao++) {
//     console.log(`A posicao ${posicao} tem o valor ${num[posicao]}`)
// }
// console.log('\n')

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}



if (num.indexOf(22) == -1) {
    console.log('O valor não foi encontrado') 
} else {
    console.log(`\nO valor tal está na posição ${num.indexOf(22)}`)
}

