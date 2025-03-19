const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

function changeImage() {

    const randomIndex = Math.floor(Math.random() * images.length);

    document.getElementById("randomImage").src = "./images/" + images[randomIndex];

    document.getElementById("imageName").textContent = images[randomIndex];
}

document.getElementById("changeImageButton").addEventListener("click", changeImage);

changeImage();