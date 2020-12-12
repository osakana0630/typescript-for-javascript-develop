export {};


type ObjectType = {
    name: string,
    age: number
};

//オブジェクト型で定義する
interface ObjectInterface {
    name: string,
    age: number
};

let object: ObjectType = {
    name: "naoya",
    age: 23
};

