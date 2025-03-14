const user = {
    name: "Анна",
    age: 33,
    city: "Київ",
    country: "Україна",

        displayInfo: function() {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Вік: ${this.age}`);
        console.log(`Місце проживання: ${this.city}, ${this.country}`);
    }
};

user.displayInfo();


