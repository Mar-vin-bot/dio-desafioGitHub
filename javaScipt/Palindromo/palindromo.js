//solução para resolver palindromo

//solução 1
function verificaPalindromo (string) {
    if (!string) return; //verificar se é var valida != null, undefined etc

    return string.split("").reverse().join("") === string;
    //faz o split para transforma palavra em vetor troca a sequencia com
    //reverse e depois junta todas as letras novamente e compara com inicio

}

//solução 2

function verificaPalindromo2 (string) {
    if (!string) return "Insira palavra valida";

    for(let i = 0; i < string.length /2; i++) {
        if (string[i] !== string[string.length - 1 - i]){
        return false; 
        }
    }
    return true;
}
