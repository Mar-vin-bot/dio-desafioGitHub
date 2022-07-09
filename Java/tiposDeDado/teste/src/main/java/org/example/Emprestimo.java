package org.example;

public class Emprestimo {
    public static int getDuasParcelas(){
        return 2;
    }
    public static int getTresParcelas(){
        return 3;
    }
    public static double getTaxaDuasParcelas(){
        return 1.2;
    }
    public static double getTaxaTresParcelas(){
        return 1.3;
    }

    public static void calcular(double valor, int parcelas){
        if (parcelas == 2){
            double valorEmprestimo = valor * getTaxaDuasParcelas();
            System.out.println("O valor é "+ valorEmprestimo);
        }else if (parcelas == 3){
            double valorEmprestimo = valor * getTaxaTresParcelas();
            System.out.println("O valor é "+ valorEmprestimo);
        }else {
            System.out.println("Numero de parcelas incorreto");
        }
    }
}
