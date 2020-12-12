export {};


type Mojiretsu = string;

const fooString: string = "Hello"
const fooMojiretu: Mojiretsu = "Hello"

const obj = {
    name: "naoya",
    age: 12
};

type Profile = {name: string, age: number};
type Profile2 = typeof obj;

const obj2: Profile = {
    name: "naoya",
    age: 12
}