function sum(value) {
    let final = 0;

    return function (num) {
        final += num;
        return final;
    };
}

const mySum = sum();

console.log(mySum(4));
console.log(mySum(6));
console.log(mySum(10));
console.log(mySum(7));




