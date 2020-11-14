//関数を定義
function japanese(lowLevel) {
    console.log(lowLevel);
    return lowLevel+"はなぜ起こるのか..."

    console.log('こんにちは');
    console.log('こんばんは');
    console.log('日本語は時間帯によって挨拶が変わります');
    console.log('ひらがな');
    console.log('カタカナ');
    console.log('漢字');
    console.log('３種類も文字があります');
}
//関数を呼び出す
let extremeHUMAN = japanese("争い");

console.log(extremeHUMAN);


//課題


//問1：
//今まで日本語で書いてきた「ジュース工場」をしっかりとJavaScriptで書いてみます。
//以下の要件を満たすように、果物名を受け取ってジュースを作る「ジュース工場」関数を作成してください。

//【要件】
//関数名：createJuice
//仮引数名：fruits
//処理：
//・「〇〇を受け取りました。ジュースにして返します」と出力
//・受け取った果物に「ジュース」という文字列を結合する
//・結合した結果を呼び出し元に返す
//・呼び出し元で、返ってきたジュースを適当な変数に入れて、「〇〇ジュースが届きました」と出力する

//①関数名を適切なものに変えてください

//②仮引数を適切なものに変えてください

function createJuice (fruits) {
    //③「〇〇を受け取りました。ジュースにして返します」と出力
console.log(fruits+"を受け取りました。ジュースにして返します");
    //④受け取った果物にジュースという文字列を結合して、呼び出し元に返す
    return fruits+"ジュース"
}
//⑤関数の実行：「みかん」を渡して、結果を受け取れるように適当な変数（orangeJuice）を用意
let orengejuice = createJuice("みかん");

//⑥返ってきた変数を利用して「〇〇が届きました」と出力する
console.log(orengejuice);