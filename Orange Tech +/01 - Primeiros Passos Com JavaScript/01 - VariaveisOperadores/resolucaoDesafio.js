/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância percorrida em KM;

Mostrar no console o valor do total gasto com combustível durante a viagem. */

// Declaração de Variáveis
const precoCombustivel = 4.69;
const kmPorLitro = 13;
const distanciaEmKm = 125;

// Algoritmo de Resolução
const consumoLitros = distanciaEmKm / kmPorLitro;
const valorGasto = precoCombustivel * consumoLitros;

// Saída para console
console.log(valorGasto.toFixed(2));