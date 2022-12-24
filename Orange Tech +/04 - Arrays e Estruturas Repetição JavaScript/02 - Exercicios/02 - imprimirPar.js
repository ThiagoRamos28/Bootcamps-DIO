// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [7,16,25,34,43,52,61,80,90,99];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    if (numero % 2 === 0) {
        console.log(numero)
    }    
}