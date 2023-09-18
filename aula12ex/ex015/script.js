function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('id-txt-ano')
    var res = document.querySelector('div#id-resultado')

    if (fano.value.length == 0 || fano.value.length > ano) {
        window.alert('ERRO: Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radio-sexo')
        var idade = ano - Number(fano.value)
        genero = ''

        var image = document.createElement('img')
        image.setAttribute('id', 'foto')  // <img id="foto"> 

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10) { // Criança
                image.setAttribute('src', 'imgs/2.png')
                genero = 'uma criança' 
                
            }
            else if(idade < 21){ // Jovem
                image.setAttribute('src', 'imgs/5.png')
                genero = 'um jovem'  
            }
            else if(idade < 60){ // Adulto
                image.setAttribute('src', 'imgs/5.png')
                genero = 'um homem' 
            }
            else{ // Idoso
                image.setAttribute('src', 'imgs/3.png')
                genero = 'um homem' 
            }
        }
        else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) { // Criança
                image.setAttribute('src', 'imgs/1.png')
                genero = 'uma criança'  
            }
            else if(idade < 21){ // Jovem
                image.setAttribute('src', 'imgs/6.png')
                genero = 'uma jovem' 
            }
            else if(idade < 60){ // Adulto
                image.setAttribute('src', 'imgs/6.png')
                genero = 'uma mulher' 
            }
            else{ // Idoso
                image.setAttribute('src', 'imgs/4.png')
                genero = 'uma mulher' 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(image)

    }
}