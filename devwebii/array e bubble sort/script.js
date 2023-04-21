//i = contador principal
//j = contador secundário
//array e seu tamanho
let array = []
var quantidade = parseInt(prompt("Digite a quantidade de números: "))

//introduzindo dados
for (let i = 0; i < quantidade; i++) {//repete até a quantidade
    let numero = parseInt(prompt("Digite um número: "))//pega o número
    array.push(numero)//joga na array
}

//bubble sort
for (let i = 0; i < quantidade-1; i++) {//comparando com o último item
    for (let j = 0; j < quantidade-1-i; j++) {//comparando com antes do último
        if (array[j] > array[j+1]) {
            //organiza os itens dentro da array
            let org = array[j]
            array[j] = array[j+1]
            array[j+1] = org
        }
    }
}

//variáveis maior e menor
var maior = array[quantidade-1]//último item da array
var menor = array[0]//primeiro item da array

// Soma os valores positivos
let sompos = 0 //setta como 0
for (let item of array) {
    if (item > 0) { //caso positivo
        sompos += item //recebe e adiciona os intens
    }
}

//exibição
document.write('<h1>Array:</h1>')
document.write('<fieldset> <h2>' + array +'</h2></fieldset>')
document.write('<h1>Maior:</h1>')
document.write('<fieldset> <h2>' + maior +'</h2></fieldset>')
document.write('<h1>Menor:</h1>')
document.write('<fieldset> <h2>' + menor +'</h2></fieldset>')
document.write('<h1>Soma positivos:</h1>')
document.write('<fieldset> <h2>' + sompos +'</h2></fieldset>')
document.write('<br><a href="index.html"><button>FAzer novamente</button></a>')
