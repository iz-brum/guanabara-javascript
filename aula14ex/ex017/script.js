function tabuada() {
    let num = document.getElementById('id-numero');
    let resultado = document.getElementById('id-seletor-tabuada');

    if (num.value.length == 0) {
        alert('Por favor, digite um número válido')
    }
    else{
        let numero = Number(num.value)
        let c = 1
        resultado.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} * ${c} = ${numero*c}`
            item.value = `tabuada ${numero}` // identifcação de linha 
            resultado.appendChild(item)
            c++
        }
    }
}