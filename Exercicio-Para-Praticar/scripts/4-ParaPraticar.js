const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

const calculator = (operacao, a, b) => {
  switch (operacao) {
    case 'soma':
      return soma(a, b);
    case 'subtracao':
      return subtracao(a, b);
    case 'multiplicacao':
      return multiplicacao(a, b);
    case 'divisao':
      return divisao(a, b);
    default:
      return 'A operação é inválida';
  }
};

const operacao = prompt('Enter operation (soma, subtracao, multiplicacao, divisao):');
const numero1 = parseFloat(prompt('Digite o primeiro número:'));
const numero2 = parseFloat(prompt('Digite o segundo número:'));

const resultado = calculator(operacao, numero1, numero2);
alert(`O resultado é: ${resultado}`);
