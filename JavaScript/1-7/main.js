class Taiyaki{

    constructor(nakami){
        this.nakami = nakami;
    }   

    eat(){
        console.log("中身は"+this.nakami+"です");
    }
}

let SYOKUMOTU = new Taiyaki("あんこ");
SYOKUMOTU.eat();

let SYOKUMOTU2 = new Taiyaki("クリーム");
SYOKUMOTU2.eat();

let SYOKUMOTU3 = new Taiyaki("チーズ");
SYOKUMOTU3.eat();

//let SYOKUMOTU4 = new Taiyaki("近所のおじさんが二日酔いで頭がちゃんと働いていない状態で作ったあんまり見た目がおいしそうに見えないけど実はおいしいピーナッツクリームのパン");
//SYOKUMOTU4.eat();

