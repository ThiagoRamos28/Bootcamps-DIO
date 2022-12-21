/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo de combustível que está no carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância percorrida em KM;

Mostrar no console o valor do total gasto com combustível durante a viagem. */

// Definicao de Variáveis
const precoEtanol = 3.99;
const precoGasolina = 4.69;
const kmPorLitros = 13;
const distanciaEmKm = 127;
const tipoCombustivel = 'Gasolina';

// Algoritmo
const consumoLitros = (distanciaEmKm / kmPorLitros);

if (tipoCombustivel === 'Etanol') {
    const valorGasto = precoEtanol * consumoLitros;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = precoGasolina * consumoLitros;
    console.log(valorGasto.toFixed(2));
}