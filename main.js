function summery(arr) {
    let s = 0;
    let n = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            s += arr[i];
            n++;
        }
    }
    return n === 0 ? 0 : s / n;
}

let myArray = ["Max", 62, 8, "Dan", 12, 18,775, true];
console.log(summery(myArray));




