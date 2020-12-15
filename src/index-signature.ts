export {};

interface Profile {
    underTwenty: boolean;
    [index: string]:string | number | boolean;
}

let profile: Profile = {name: "太郎", underTwenty: false};

//How write index signatures
// {[index: typeForIndex]}: typeForValue }


profile.name = "naoya";
profile.age = 24;
profile.nationarlity = "Japan";



