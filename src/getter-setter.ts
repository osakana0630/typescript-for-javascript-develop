export {};

// 仕様

// owner
// 所有者
//初期化時に設定できる
//途中で変更できない

// secretNumber
//個人番号
//途中で変更可能
//参照できない

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {
        return this._owner;
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    debugPrint() {
        return `secretNumber: ${this._secretNumber}`
    }

}

let card = new MyNumberCard("はむ", 1234567890);
console.log(card.debugPrint())
card.secretNumber = 11111111;
console.log(card.debugPrint())

// card.owner = "あいえうお";
// console.log(card.owner)
// console.log(card._secretNumber)