package org.example;

public class Quadrilatero {
    //sobrecarga: matem o nome do metodo contudo altera sua lita de parametros
    //ou seja sua asssinatura -> nomeMetodo(tipo parametro1, tipo parametro2...)


    public static void area (int lado1){
        int resultado = lado1 * lado1;
        System.out.println("Area do quadrado é"+ resultado);
    }

    public static void area (int lado1, int lado2){
        int resultado = lado1 * lado2;
        System.out.println("Area do retangulo é"+ resultado);
    }

    public static void area (int baseMaior, int baseMenor, int altura){
        int resultado = (baseMaior * baseMenor * altura) / 2;
        System.out.println("Area do trapezio é"+ resultado);
    }

//    public static void area (int diagonal1, int diagonal2){
//        int resultado = diagonal1 * diagonal2 * 2;
//        System.out.println("Area do losango é"+ resultado);
//    }
    //erro ocorre desta forma pois conflita com o retangulo,
    //indico a mudança de tipo dos parametros
}
