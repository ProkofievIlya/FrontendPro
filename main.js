let num = prompt("Введіть тризначне число:");

if (num.length === 3 && !isNaN(num)) {
    let z1 = num[0];
    let z2 = num[1];
    let z3 = num[2];

    if (z1 === z2 && z2 === z3) {
        console.log("Усі цифри однакові!");
    }
    else if (z1 === z2 || z1 === z3 || z2 === z3) {
        console.log("Є однакові цифри!");
    }
    else {
        console.log("Усі цифри різні!");
    }
} else {
    console.log("Введіть тільки тризначне число!");
}






