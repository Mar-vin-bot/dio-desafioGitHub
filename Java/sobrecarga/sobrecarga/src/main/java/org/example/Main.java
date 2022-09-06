package org.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        //SobreCarga:  veja que de acordo com a quantidade de parametro foi chamado um
        //metodo diferente mesmo que estes tenham o mesmo nome contudo há parametros diferentes em cada
        //diferenciando na quatidade e tipo. Cuidado metodos com o mesmo tipo e quantidade de parametros
        //pode ocosionar erro. veja o metodo do losango
        Quadrilatero.area(5);
        Quadrilatero.area(5, 7);
        Quadrilatero.area(7,5,8);

    }
}