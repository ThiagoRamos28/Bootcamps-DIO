/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

// Declaração de Variável
const precoEtiqueta = 100;
const condicaoPagamento = 4;

// Algoritmo
if (condicaoPagamento === 1) {
    const vlrPagar = (precoEtiqueta - (precoEtiqueta * 0.10));
    console.log('Valor a pagar = R$ ' + vlrPagar.toFixed(2));
} else if (condicaoPagamento === 2) {
    const vlrPagar = (precoEtiqueta - (precoEtiqueta * 0.15));
    console.log('Valor a pagar = R$ ' + vlrPagar.toFixed(2));
} else if (condicaoPagamento === 3) {
    console.log('Valor a pagar = R$ ' + precoEtiqueta.toFixed(2));
} else {
    const vlrPagar = (precoEtiqueta + (precoEtiqueta * 0.10));
    console.log('Valor a pagar = R$ ' + vlrPagar.toFixed(2));
}