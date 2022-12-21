// 3) - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function calcularPreco(condPagamento, valor) {
    if (condPagamento == 1) {
        vlrPagar = (valor - (valor * 0.10));
        console.log('Valor a pagar R$: ' + vlrPagar); 
    } else if (condPagamento == 2) {
        vlrPagar = (valor - (valor * 0.15));
        console.log('Valor a pagar R$: ' + vlrPagar); 
    } else if (condPagamento == 3) {
        console.log('Valor a pagar R$: ' + valor); 
    } else {
        vlrPagar = (valor + (valor * 0.10));
        console.log('Valor a pagar R$: ' + vlrPagar); ;
    }
}

calcularPreco(4,100.00);
