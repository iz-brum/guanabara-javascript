// Criação do objeto 'animal' com propriedades nome, familia e peso, 
// e um método 'engordar'.
let animal = {
    nome: 'Morcego',
    familia: 'Vespertilionidae',
    peso: 8,
    engordar(parametro = 0) {   // parametro predeterminado = 0, caso não seja passado valor por parametro
        console.log('engordou');
        this.peso += parametro;     // this.peso se refere à propriedade peso do objeto animal.
    }
}

// Chama o método 'engordar' com um parâmetro de 2.
animal.engordar(2);

// Exibe uma mensagem com o nome do animal e seu novo peso.
console.log(`\nNesta semana o ${animal.nome} aumentou o peso para ${animal.peso}g\n`)