function carregar() {
    var mensagem = document.getElementById('id-mensagem')
    var imagem = document.getElementById('id-imagem')

    var data = new Date()
    var hora = data.getHours()
    // var hora = 19
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) { //bom dia
        imagem.src = 'manha.png'
        document.body.style.background = '#BFCDD9'
    } 
    else if(hora >= 12 && hora < 19) {//boa tarde
        imagem.src = 'tarde.png'
        document.body.style.background = '#D9961A'
     }
     else{// boa noite
        imagem.src = 'noite.png'
        document.body.style.background = '#0F2426'
     }
}