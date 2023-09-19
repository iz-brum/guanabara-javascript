function contar() {
    var inicio = document.getElementById('id-inicio')
    var final = document.getElementById('id-final')
    var pulos = document.getElementById('id-pulos')
    var resultado = document.getElementById('id-resultado')

    if (inicio.value == 0 || final.value == 0 || pulos.value == 0) {
        resultado.innerHTML = 'Impossível contar!'
    }
    else{
        resultado.innerHTML = 'Pulando: <br>'
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(pulos.value)

        if (p<=0) {
            alert('Valor para pulo invalido! Será considerado pulo de 1')
            p = 1
        }
        if (i<f) { // contagem crescente
            for (let c=i; c<=f; c+=p) {
                resultado.innerHTML += `${c} \u{27A3}`
            }
        }
        else{ // contagem regressiva
            for (let c=i; c>=f; c-=p) {
                resultado.innerHTML += `${c} \u{27A3}`
            }
            
        }
        resultado.innerHTML += '\u{1f3c1}'
    }
}