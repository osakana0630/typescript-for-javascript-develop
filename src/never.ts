export {};

function error(message: string):never {
    throw new Error(message);
}

try {
    let result = error("例外");
    console.log(result)
} catch (error) {
    console.log({error});
}