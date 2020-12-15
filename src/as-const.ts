export {};

let name = "太郎";

name = "次郎";

let nickname = "次郎" as const;
nickname = "次郎";

let profile = {
    name: "次郎",
    height: 178
} as const;

// profile.name = "太郎";
// profile.height = 180;
