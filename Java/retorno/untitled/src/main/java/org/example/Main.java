package org.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        int quadrado = Quadrilatero.area(5);
        System.out.println(quadrado);


       int retangulo = Quadrilatero.area(5 ,7);
        System.out.println(retangulo);

        int trapezio = Quadrilatero.area(7, 5, 8);
        System.out.println(trapezio);

    }
}