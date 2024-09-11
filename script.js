document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    // Obtendo valores dos inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');

    let result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = 'Erro: Divisão por zero não é permitida.';
                resultElement.style.color = 'red';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Por favor, selecione uma operação válida.';
            resultElement.style.color = 'red';
            return;
    }

    // Exibindo o resultado
    resultElement.textContent = `Resultado: ${result}`;
    resultElement.style.color = 'black';
});
