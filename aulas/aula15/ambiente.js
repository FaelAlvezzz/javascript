let num = [5, 8, 3, 7, 2]
num.push(1) // Ele adiciona um valor no ultimo índice
num.sort() // Ele organiza os valores em ordem decrescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // Ele mostra a quantidade de elemento
console.log(`O primeiro valor é o ${num[0]}`)
let pos = num.indexOf(4) // Esse indexOf() encontra a posição valor do elemento.
if (pos== -1) {
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor 8 está na posição ${pos}`)
}
