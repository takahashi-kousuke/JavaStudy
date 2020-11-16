//let number = 1;
//while (number <= 100) {
//    console.log(number);
//    number++;
//}


//for (let number = 1; number <= 100; number++) {
//    console.log(number);
//}


//let number = 0;
//while (number < 5) {
//    if (number === 3) {
//        break;
//    }
//    console.log(number);
//    number++;
//}


//let number = 0;
//while (number < 5) {
//    if (number === 3) {
//        number++;
//        continue;
//    }
//    console.log(number);
//    number++;
//}


//課題

//3の倍数のとき、 Fizz! と出力します。
//5の倍数のとき、 Buzz! と出力します。
//3の倍数かつ5の倍数のとき、 FizzBuzz!! と出力します。(15の倍数、と考えるのはナシです。)
//3の倍数でも、5の倍数でもない場合は、その数を出力します。
//それを1〜100まで実施してください。

let number = 1;
for(let number = 1 ; number <= 100; number++){
    if(number%3===0 && number%5===0){
        console.log("FizzBuzz!!");
    }else if(number%5===0){
        console.log("Buzz!");
    }else if(number%3===0){
        console.log("Fizz!");
    }else if(number%3!==0 && number%5!==0){
        console.log(number);
    
    }

}


