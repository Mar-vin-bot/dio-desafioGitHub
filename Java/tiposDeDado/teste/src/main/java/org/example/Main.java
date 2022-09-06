package org.example;



public class Main {
    public static void main(String[] args) {
    //Calculadora
        System.out.println("Calculadora");
        Calculadora.soma(3,5);
        Calculadora.subtracao(3,5);
        Calculadora.divisao(5,2);
        Calculadora.multiplicacao(5,3);

        System.out.println("");
    //Emprestimo
        System.out.println("Emprestimo");
        Emprestimo.calcular(1000, 2);
        Emprestimo.calcular(1000, 3);
        Emprestimo.calcular(1000, 7);

        System.out.println("");
        //Mensagem
        System.out.println("Mensagem");
        Mensagem.saudacao(9);
        Mensagem.saudacao(15);
        Mensagem.saudacao(21);
        Mensagem.saudacao(0);
        Mensagem.saudacao(24);

    }

}