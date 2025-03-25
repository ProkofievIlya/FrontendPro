const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
const messageRegex = /^.{5,}$/;
const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;

    document.querySelector('#nameError').textContent = '';
    document.querySelector('#messageError').textContent = '';
    document.querySelector('#phoneError').textContent = '';
    document.querySelector('#emailError').textContent = '';

    let valid = true;

    if (!nameRegex.test(name)) {
        document.querySelector('#nameError').textContent = 'Поле "Name" повинно містити лише літери та пробіли.';
        valid = false;
    }


    if (!messageRegex.test(message)) {
        document.querySelector('#messageError').textContent = 'Повідомлення повинно містити не менше 5 символів.';
        valid = false;
    }


    if (!phoneRegex.test(phone)) {
        document.querySelector('#phoneError').textContent = 'Номер телефону має починатись з +380 і містити 12 цифр.';
        valid = false;
    }


    if (!emailRegex.test(email)) {
        document.querySelector('#emailError').textContent = 'Email повинен містити @ та крапку.';
        valid = false;
    }


    if (valid) {
        console.log('Дані користувача:');
        console.log('Name:', name);
        console.log('Message:', message);
        console.log('Phone:', phone);
        console.log('Email:', email);
    }
});