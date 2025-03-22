let myLink = "";

function enterLink() {
    const link = prompt("Введіть посилання:");
    if (link) {
    myLink = link;
    alert("Посилання збережено!");
} else {
    alert("Посилання не введено.");
}
}

function redirectToLink() {
    if (myLink) {
        if (myLink.startsWith("http://") || myLink.startsWith("https://")) {
            window.location.href = myLink;
        } else {
            alert("Перевірте формат посилання! - (http://example.com або https://example.com)");
        }
    } else {
        alert("Посилання не має. Введіть його!");
    }
}



