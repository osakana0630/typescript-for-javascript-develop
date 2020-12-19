export {};

// utility types

type Profile = {
    name: string;
    age?: number;
    zipCode: number;
};

// type Profile2 = {
//     name?: string;
//     age?: number;
// };

type PartialType = Partial<Profile>;

//required型
type RequiredType = Required<Profile>;

