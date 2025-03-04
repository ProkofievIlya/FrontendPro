function name(a) {
    return function(b) {
        return a * b;
    };
}

console.log(name(5)(2));
console.log(name(7)(3));





