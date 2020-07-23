package study;

// ① TaskクラスにCalculatorクラスを継承させなさい。
public class Task extends Calculator {
    /**
     * タスクの実行
     */
    public void doTask() {

        // ② Calculator.javaのすべてのオーバーロードメソッド「plus」に適当な引数を与え、下記画像のよう出力されるようコーディングしなさい。
        // 尚、「どのクラスから呼び出しているか」を明確にするため、plus()には呼び出し元のキーワードを付与すること。

int a = 10;
int b = 20;
int c = 30;

System.out.println("plusメソッド引数が一個の場合:"+Calculator.plus(a));
System.out.println("plusメソッド引数が二個の場合:"+Calculator.plus(a, b));
System.out.println("plusメソッド引数が三個の場合:"+Calculator.plus(a, b, c));



    }
}