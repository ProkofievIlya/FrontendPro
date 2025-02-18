function splitAndPrintNumber() {
    let num = prompt("Введіть п'ятизначне число:");

    if (!num || num.length !== 5 || isNaN(num)) {
        alert("Будь ласка, введіть дійсне п'ятизначне число.");
        return;
    }

    let digits = num.split('');

    alert(digits.join(' '));
}

splitAndPrintNumber();


