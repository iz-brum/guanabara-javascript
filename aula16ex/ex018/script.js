let number = document.querySelector('input#id-numero');
let lista = document.querySelector('select#id-lista');
let resultado = document.querySelector('div#id-resultado');
let valores = []

number.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
      adicionar()
    }
  });


function isNumberValid(n) {
    n = Number(n)
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } 
    else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false     
    }
}

function adicionar(){
   
    if (isNumberValid(number.value) && !inList(number.value, valores)) {
        valores.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado à lista.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }
    else{
     alert('Valor inválido ou já adicionado á lista!')
    }

    number.value = ''
    number.focus()
 }

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
 