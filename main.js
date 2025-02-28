function removeElement(array, item) {
    const z = array.indexOf(item);
    if (z !== -1) {
        array.splice(z, 1);
    }
}

const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array);




