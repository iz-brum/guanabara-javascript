let animal = {nome: 'Morcego',
familia: 'Vespertilionidae',
peso: 8,
engordar(parametro=0){
    console.log('engordou');
    this.peso += parametro;
}
}

animal.engordar(2)

console.log(`\nNesta semana o ${animal.nome} aumentou o peso para ${animal.peso}g\n`)

//
/**/ 