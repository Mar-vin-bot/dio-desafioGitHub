
function calculadora() {
    const operacao = Number(prompt("Digite uma das opções: \n 1- Soma (+)\n 2- Subtração (-) \n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Potencia (**) "));

    if (operacao < 1 || operacao > 5) {
        alert("Opção invalida, verifique novamente");
        calculadora()
    } else {
        let n1 = Number(prompt("Digite o primeiro valor"));

        let n2 = Number(prompt("Digite o primeiro valor"));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divisao() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }

        function exponenciacao() {
            resultado = n1 ** n2;
            alert(`O resultado de ${n1}^${n2} é ${resultado}`);
            novaOperacao();
        }

        function novaOperacao() {
            let opc = prompt("Digite 1 para continuar")

            opc == 1 ? calculadora() : alert("Obrigado")
        }



        if (operacao == 1)
            soma()
        else if (operacao == 2)
            subtracao()
        else if (operacao == 3)
            multiplicacao()
        else if (operacao == 4)
            divisao()
        else if (operacao == 5)
            exponenciacao()


    }

    
}

calculadora();