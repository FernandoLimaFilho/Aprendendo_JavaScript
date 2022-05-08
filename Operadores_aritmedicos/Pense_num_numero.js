/*
Pense em um número. 
1°) Some 5; 
2°) multiplique por 2; 
3°) Subtraia 4; 
4°) Divida por 2; 
5°) Subtraia o número que você pensou inicialmente.
Deu 3?
*/
var numero_escolhido = Number(prompt("Escolha um número: "))
// 1°) passo
console.log("\n1°) Some 5 ao seu número.\n")
var numero_modificado = numero_escolhido + 5
console.log(`5 + ${numero_escolhido} = ${numero_modificado}\n`)
// 2°) passo
console.log("2°) Multiplique o resultado por 2.\n")
console.log(`2 * ${numero_modificado} = ${numero_modificado * 2}\n`)
numero_modificado *= 2
// 3°) passo
console.log("3°) Tire 4 unidades do número anterior.\n")
console.log(`${numero_modificado} - 4 = ${numero_modificado-4}\n`)
numero_modificado -= 4
// 4°) passo
console.log("4°) Divida o resultado por 2.\n")
console.log(`${numero_modificado}/2 = ${numero_modificado/2}\n`)
numero_modificado /= 2
// 5°) passo
console.log("5°) Do anterior, diminua pelo número escolhido por você.\n")
console.log(`${numero_modificado} - ${numero_escolhido} = ${numero_modificado - numero_escolhido}\n`)
numero_modificado -= numero_escolhido
// Resultado
console.log(`O resultado final é ${numero_modificado}!`)
