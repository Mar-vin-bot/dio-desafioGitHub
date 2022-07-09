package org.example;

public class Calculadora {

    public static void soma(int a, int b){
        System.out.println("A soma de "+ (a+b));
    }
    public static void subtracao(int a, int b){
        System.out.println("A subtracao de "+ (a-b));
    }
    public static void divisao(double a, double b){
        double resultado = a/b;
        System.out.println("A divisao de "+resultado);
    }
    public static void multiplicacao(int a, int b){
        System.out.println("A multiplicacao de "+ (a*b));
    }

}
