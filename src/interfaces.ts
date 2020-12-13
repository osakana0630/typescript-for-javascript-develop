export {};

class Mahotukai {}
class Souryo {}

//classを多重継承することはできない

class Taro extends Mahotukai {

}

interface Kenja {
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

//interfaceを使用することで多重継承のようなことが実現できる
class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log("ionazun")
    }

    kougeki(): void {
        console.log("kougeki")
}
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();