// Obtendo referências aos elementos HTML
let number = document.querySelector('input#id-numero');
let lista = document.querySelector('select#id-lista');
let resultado = document.querySelector('div#id-resultado');
let valores = []

// Adicionando um evento de tecla ao campo de número
number.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { // Código da tecla Enter
      adicionar()
    }
});

// Função para verificar se um número é válido (entre 1 e 100)
function isNumberValid(n) {
    n = Number(n)
    if (n >= 1 && n <= 100) {
        return true
    } 
    else {
        return false
    }
}

// Função para verificar se um número está na lista de valores
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false     
    }
}

// Função para adicionar um número à lista
function adicionar(){
    if (isNumberValid(number.value) && !inList(number.value, valores)) {
        valores.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado à lista.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }
    else{
     alert('Valor inválido ou já adicionado à lista!')
    }
    number.value = ''
    number.focus()
}

// Função para finalizar e calcular estatísticas
function finalizar(){
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        
        for (let posicao in valores) {
            soma += valores[posicao]

            if (valores[posicao] > maior) {
                maior = valores[posicao]
            }
            if (valores[posicao] < menor) {
                menor = valores[posicao]
            }
        }
        media = soma/total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores é igual a ${media.toFixed(2)}</p>`
    }
}

// Este código JavaScript cria uma aplicação que permite ao usuário adicionar números a uma lista e, em seguida, calcular estatísticas como o total de números, a soma, a média, o maior e o menor valor. 

// O código também inclui uma funcionalidade para aceitar a tecla Enter para adicionar um número.