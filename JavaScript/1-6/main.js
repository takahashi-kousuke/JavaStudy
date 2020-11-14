//let scores = [50, 60, 70, 80, 90];
//console.log(scores);
//console.log(scores[2]);
//console.log(scores.length);

//for (let i = 0; i < 5; i++) {
//    console.log("得点は" + scores[i] + "点です");
//}

let ORESAMA = {
   //キー:値(プロパティ)
    name: "GOD",
    height: 2000,
    weight: 56,
    gender: "両性",
    age: 77777,
};

console.log(ORESAMA.name);
       //オブジェクト.キー


//課題

//問1：10、15、20、25を含む配列の変数scoresを用意して、
//画像のように偶数だけを出力してください。
let scores = [10,15,20,25];
console.log(scores);
console.log(scores[0]+"は偶数です");
console.log(scores[2]+"は偶数です");



//問2：ガソリンとナンバーのプロパティを持った「carオブジェクト」
//を作成して、ガソリンとナンバーを出力してください。

let car = {
    gass :20.5,
    num : 1234,
};

console.log(car);
console.log("ガソリンは"+car.gass+"です");
console.log("ナンバーは"+car.num+"です");
