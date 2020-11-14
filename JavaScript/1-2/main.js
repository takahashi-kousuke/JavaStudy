let name = "hoge";
//nameと書いたのに、hogeと出力されるはずです
console.log(name);

let ikeda = "池田";
console.log(ikeda + "くん");
let number = 10;
console.log(number * 3);

console.log(`${ikeda}くんは${number}月生まれです`);
//`${ikeda}くんは${number}月生まれです`→テンプレートリテラル
//文字列全体を「 ` 」(バッククォート)で囲み、変数名は「 ${ } 」で
//囲むことで 一つの文字列の中に変数や定数を埋め込む ことができます。
//こうすると、文字列と変数を + で繋ぐ必要が無いので見やすくなります。
//テンプレートリテラルを書くとき、文字列を囲むのはダブルクォートではなく 
//バッククォートであることに注意してください。



//課題

//問1：次のコードを実行すると、エラーになります。エラー箇所を特定して、200と1000が出力されるように修正してください。

//const price = 100;
//console.log(price * 2);

//price = 500;
//console.log(price * 2);

let price = 100;
console.log(price * 2);

price = 500;
console.log(price * 2);