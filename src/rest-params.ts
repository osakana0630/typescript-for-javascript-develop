export {};

const reducer = (accumulator: number, currentValue: number) =>{
    console.log({accumulator, currentValue})
    return accumulator + currentValue;
};


const sum: (...values: number[]) => number = (...values: number[]):number => {
    return values.reduce(reducer);
};

const result = sum(1, 2, 3, 4, 5);
console.log(result)

