export {};

namespace Japanese {
   export namespace Tokyo {
        export class Person {
            constructor(public name: string) {
            }
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) {
            }
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {
        }
    }
}

const taro = new Japanese.Tokyo.Person("太郎");
const kaa = new Japanese.Osaka.Person("かああ");
const jiro = new English.Person("あああ", "いいい", "ううう");
console.log(taro);
console.log(kaa);
console.log(jiro);
