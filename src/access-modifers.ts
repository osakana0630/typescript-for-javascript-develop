export {};

class Person {
    public  name: string; //publicを明示的に追記したが、特にインスタンスからのアクセスを規制することを想定していない場合は書かなくても良い
    protected age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name},  age: ${this.age}`
}
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `name: ${this.name},  age: ${this.age}, nationality: ${this.nationality}`
    }
}


let taro = new Person("Taro", 30, "Japan"); //インスタンス生成
// console.log(taro.profile())
// console.log(taro.nationality)
let asimo = new Android("asimo", 100, "US");
console.log(asimo.profile())
// console.log(taro.age)


