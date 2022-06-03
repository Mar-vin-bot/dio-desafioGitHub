function comparaNumeros (num1, num2){
const validaCondicaoIgual = validaCondicaoIgual(num1, num2); 

}

function numIgualOuDiferente (num1, num2) {
    let verifica = num1 === num2;
    return verifica;
}

function segundaCondicao (num1, num2) {
    let soma = num1 + num2;
    return soma;
}

function resultadoSomaMaioMenor   (soma, verifica) {
    let primeiraFrse = verifica ? `Os numeros ${num1} e ${num2} são iguais. `: `Os numeros ${num1} e ${num2} são diferentes`;

    let segundaFrase;
    
    if (soma > 10 && soma < 20)
    segundaFrase = `A soma dos numeros é ${soma} este valor é maior que 10 e menor que 20`
    else if (soma < 10)
    segundaFrase = `A soma dos numeros é ${soma} este valor é menor que 10 e 20`
    else if (soma > 20)
    segundaFrase = `A soma dos numeros é ${soma} este valor é maior que  que 10 e 20`

    return primeiraFrse, segundaFrase;

}

