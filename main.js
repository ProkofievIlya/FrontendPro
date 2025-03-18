let isColorChanged = false;
const textBlock = document.querySelector('#textBlock');
const colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', () => {
    if (isColorChanged) {

        textBlock.style.color = 'black';
    } else {

        textBlock.style.color = 'red';
    }

    isColorChanged = !isColorChanged;
});
