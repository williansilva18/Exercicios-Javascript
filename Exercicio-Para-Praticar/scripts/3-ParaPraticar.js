function Subtracao(numero1, numero2) {
    if (numero1 > numero2) {
        const resultado = numero1 - numero2;
        console.log(`O resultado da subtração é: ${resultado}`);
    } else if (numero2 > numero1) {
        const resultado = numero2 - numero1;
        console.log(`O resultado da subtração é: ${resultado}`);
    } else {
        console.log("Os números são iguais, a subtração resulta em 0.");
    }
}

// Testando a função com diferentes números
Subtracao(20, 10);   
Subtracao(5, 10);   
Subtracao(3, 3);    

