package org.example;

public class Quadrilatero {
    public static int area (int lado){
        return lado * lado;
    }
    public static int area (int lado1, int lado2){
        return lado1* lado2;
    }
    public static int area (int bMaior, int bMenor, int altura){
        return ((bMaior+ bMenor) * altura) /2;
    }

}
