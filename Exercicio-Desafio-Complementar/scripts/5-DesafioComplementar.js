//Função para calcular o ICMS:

function calcularICMS(precoCusto) {
    const taxaICMS = 0.14; // Exemplo de taxa de ICMS (14%)
    const icms = precoCusto * taxaICMS;
    return precoCusto + icms;
}

function calcularExibirICMS() {
    const precoCusto = parseFloat(prompt("Insira o preço de custo:"));
    const precoComICMS = calcularICMS(precoCusto);
    console.log(`O preço com ICMS é: R$${precoComICMS.toFixed(2)}`);
}

calcularExibirICMS();


// Função para Determinar se Dois Números são Múltiplos:
function saoMultiplos(num1, num2) {
    return num1 % num2 === 0 || num2 % num1 === 0;
}

function verificarExibeNumeroMultiplos() {
    const numero1 = parseInt(prompt("Digite o primeiro número:"));
    const numero2 = parseInt(prompt("Digite o segundo número:"));

    if (saoMultiplos(numero1, numero2)) {
        console.log("Os números são múltiplos um do outro.");
    } else {
        console.log("Os números não são múltiplos um do outro.");
    }
}

verificarExibeNumeroMultiplos();


// Função para Verificar se um Número é Primo:
function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

function verificarSePrimo() {
    const numero = parseInt(prompt("Digite um número para verificar se é primo:"));

    if (ehPrimo(numero)) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}

verificarSePrimo();
