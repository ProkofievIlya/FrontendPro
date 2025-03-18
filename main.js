function createMultiplicationTable() {
    const table = document.getElementById("multiplicationTable");

for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    const value = i * j;
    cell.textContent = value;

if (i === 1) {
    cell.classList.add("header-row");
}

    if (j === 1) {
    cell.classList.add("left-column");
}

    if (i === j) {
    cell.classList.add("diagonal");
}

row.appendChild(cell);
}

table.appendChild(row);
}
}

window.onload = createMultiplicationTable;


