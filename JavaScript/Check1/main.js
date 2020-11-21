//問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。

let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    console.log(num + 'は偶数です');
}

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        isEven(numbers[i]);
    }
}

class Car {

    //コンストラクタ
    constructor(fuel, number,) {
        this.fuel = fuel;
        this.number = number;
        
    }

    //表示メソッド（関数）作成
    getNumGas() {
        console.log(`ガソリンは${this.fuel}です。ナンバーは${this.number}です。`);
    }
}
//「Zonda」オブジェクト作成
let Zonda = new Car('ハイオク', 4649,);
Zonda.getNumGas();