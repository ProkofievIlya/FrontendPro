const contactBook = {
    contacts: [
        {
            name: "Олексій",
            phone: "+380509999999",
            email: "alex@gmail.com"
        },
        {
            name: "Марія",
            phone: "+380985555555",
            email: "maria@gmail.com"
        }
    ],

    findContact: function(name) {
        const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (contact) {
            console.log(`Контакт знайдено!`);
            return contact;
        } else {
            return `Контакт "${name}" не знайдено.`;
        }
    },

    addContact: function(name, phone, email) {
        const newContact = { name, phone, email };
        this.contacts.push(newContact);
        console.log(`Контакт ${name} успішно додано!`);
    }
};

console.log(contactBook.findContact("Олексій"));
console.log(contactBook.findContact("Ілля")); // перевірка, на імя, якого не має


contactBook.addContact("Інна", "+380631111111", "inna@gmail.com");


console.log(contactBook.contacts); // виводимо усіх

