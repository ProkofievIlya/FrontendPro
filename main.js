let num = parseInt(prompt("Введіть ціле число:"));

if (num <= 1) {
    console.log(`${num} не є простим числом.`);
} else {
    let test = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            test = false;
            break;
        }
    }

    if (test) {
        console.log(`${num} є простим числом.`);
    } else {
        console.log(`${num} не є простим числом.`);
    }
}




