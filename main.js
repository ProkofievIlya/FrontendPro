function newNum() {
    let count = 0;
    while (count < 10) {
        let input = prompt("Введіть число більше 100:");

        if (input === null) {
            console.log("Ви нажали відміну та вийшли!");
            return;
        }

        let num = Number(input);

        if (num > 100) {
            console.log(`Ви ввели наступне число (воно > 100): ${num}`);
            return;
        } else {
            alert("Введіть число > 100.");
        }

        count++;
    }

    console.log("Ви зробили 10 спроб.");
}

newNum();





