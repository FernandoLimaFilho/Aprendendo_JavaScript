/*
Pense em um número. 
1°) Multiplique por 3 
2°) Some 27, 
3°) Divida por 3, 
4°) depois diminua o número que você pensou.
*/
var numero_escolhido = Number(prompt("Pense em um número: "))
// 1°) passo
console.log("\n1°) Multiplique ele por 3.\n")
numero_modificado = numero_escolhido * 3
console.log(`3*${numero_escolhido} = ${numero_modificado}\n`)
// 2°) passo
console.log("2°) Some 27 ao resultado anterior.\n")
console.log(`27 + ${numero_modificado} = ${27 + numero_modificado}\n`)
numero_modificado += 27
// 3°) passo
console.log("3°) Divida por 3.\n")
console.log(`${numero_modificado}/3 = ${numero_modificado/3}\n`)
numero_modificado /= 3
// 4°) passo
console.log("4°) Subtraia, do resultado, o número escolhido por você.\n")
console.log(`${numero_modificado} - ${numero_escolhido} = ${numero_modificado - numero_escolhido}\n`)
numero_modificado -= numero_escolhido
// Resultado
console.log(`O resultado é ${numero_modificado}!`)





