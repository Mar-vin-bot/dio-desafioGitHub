package org.example;

public class Mensagem {
    public static void saudacao(int hora) {
        if (hora > 6 && hora < 12) {
            System.out.println("Bom dia");
        } else if (hora > 12 && hora < 18) {
            System.out.println("Bom tarde");
        } else if (hora > 18 && hora <= 23 ) {
            System.out.println("Boa Noite");
        }else if (hora >= 0 && hora < 6){
            System.out.println("vai dormir");
        }else{
            System.out.println("hora invalida");
        }
    }
}


