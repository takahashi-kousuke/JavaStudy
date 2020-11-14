//num1とnum2の計算した結果をresultに入れるためにそれぞれ変数を用意します。
//let num1 = 10;
//let num2 = 4;
//let result;
//足し算
//result = num1 + num2;
//console.log(result);
//引き算
//result = num1 - num2;
//console.log(result);
//掛け算
//result = num1 * num2;
//console.log(result);
//割り算
//result = num1 / num2;
//console.log(result);
//剰余
//result = num1 % num2;
//console.log(result);



//文字列の結合の例
//HelloとWorldに空白を入れたいときは、Helloの直後か、Worldの直前にスペースを入れてください
//console.log('Hello ' + 'World');
//変数の結合の例
//let lastName = '田中';
//let firstName = '一郎';
//let fullName = lastName + firstName;

//console.log(fullName);




//「++」「--」を使うと、
//自分自身に1を足したり,1を引いたりすることができます。
//let x = 10;
//x++;
//console.log(x);  //11
//let y = 10;
//y--;
//console.log(y);  //9



//console.log(10 === 10); //true        「両辺が等しい」という条件 → 正しいのでtrue
//console.log(10 === 5); //false        「両辺が等しい」という条件 → 正しくないのでfalse
//console.log(10 !== 5); //true        「10と5は等しくない」という条件 → 正しいので true
//console.log(10 > 20); //false        「10と20を比べて、10の方が大きい」という条件 → 正しくないのでfalse
//console.log(10 <= 10); //true        「左辺の10は右辺の10という値以上か」という条件 → 正しいのでtrue

//console.log('10' === 10); //false
//console.log('10' == 10); //true
//最後の2行に注目してください。
//イコール記号2つと3つの書き方があります。
//「==」は 等価演算子 というもので、値が等しいかどうかの判定だけ行います。
//「===」は 厳密等価演算子 というもので、値の「 型 」も等しいかどうかまで判定します。

//今回の例で言うと、 console.log('10' === 10); は 文字列の10 と 数値の10 のように別の型同士を比べているので、
//等しくないと判断されて、falseになっています。

//「==」でも比較は可能なのですが、思いもよらないところでエラーが出たりするので、
//特別な理由がない限りは厳密等価演算子の「===」を使用することをお勧めします。


//if文
//let score = 69;
//if (score >= 70) {
//    console.log('合格');
//} else {
//    console.log('不合格');  
//}


//else if文
//let score = 60;
//if (score >= 70) {
//    console.log('合格');
//} else if(score === 0){
//    console.log('0点はまずいです...');  
//} else {
//    console.log('不合格'); 
//}



//論理演算子
//うまく「15」が出力されたら、条件がtrueだった証拠です。
//let a = 15;
//if (a >= 10 && a <= 20) {
//    console.log(a);  
//}


//偶数か奇数か選別
//let a = 10;
//let b = 15;
//偶数の条件式
//if (a % 2 === 0) {
//    console.log(a);
//}
//奇数の条件式
//if (b % 2 !== 0) {
//    console.log(b);
//}







//課題

//問1：次の条件を、論理演算子を使って表してください。
//・変数aは10ではない
//・変数bは10以上20未満、かつ偶数である。
let a = 5;
console.log(a !== 10);
let b = 14;
if((b >= 10 && b <= 20) && b%2===0){
    console.log("成功です");
}else{
    console.log("失敗です");
}

//問2：以下の条件を満たすように、記述してください
//・変数xが、10〜20の値だった場合「成功です」と出力される
//・それ以外は「失敗です」と出力される
//・変数xには、最初に10を入れておいてください
let x = 10;
if(x >= 10 && x <= 20){
    console.log("成功です");
}else{
    console.log("失敗です");
}

//問3：以下の条件を満たすように、記述してください
//・変数yが偶数なら「偶数です」と出力される
//・変数yが奇数なら「奇数です」と出力される
//・変数yには、最初に0を入れておいてください
let y = 3;
if(y % 2 === 0){
    console.log("偶数です");
}else{
    console.log("奇数です");
}


