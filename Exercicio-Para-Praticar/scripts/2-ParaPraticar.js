function verificaNumeroPar(numero) {
    if (numero % 2 === 0) {
        return "É par";
    } else {
        return "É ímpar";
    }
}

// Entrada de dados e verificação para 3 valores diferentes
for (let i = 0; i < 3; i++) {
    const entrada = parseInt(prompt("Digite um número: "));
    const resultado = verificaNumeroPar(entrada);
    alert(`O número ${entrada} é ${resultado}.`);
}
