export {};

let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible)

fooCompatible = barCompatible;

console.log(typeof fooCompatible)


let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = "string";

fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";

//文字列リテラル型はstring型の集合の一部なので代入できる
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1996 = 1996;

fooNumber = fooNumberLiteral;

interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number, public name: string) {
    }
}

let me: Animal;
me = new Person(43, "太郎");

console.log(me)


