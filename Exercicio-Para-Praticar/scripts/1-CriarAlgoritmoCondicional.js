// Solicita um número para digitação no prompt
var numero = prompt("Digite um número:");

// Converte o valor inserido para um número inteiro
numero = parseInt(numero);

// Verifica se o número está no intervalo entre 10 e 50
if (numero >= 10 && numero <= 50) {
    alert("O número está entre 10 e 50.");
} else {
    console.log("O número não está no intervalo entre 10 e 50.");
}
