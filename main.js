let year = prompt("Введіть рік народження:");
if (year === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("В якому місті Ви живете?");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {
        let sport = prompt("Ваш улюблений вид спорту:");
        if (sport === null) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else {
            let allYear = new Date().getFullYear();
            let age = allYear - year;

            let capitalMessage;
            if (city.toLowerCase() === "київ") {
                capitalMessage = "Ти живеш у столиці України.";
            } else if (city.toLowerCase() === "вашингтон") {
                capitalMessage = "Ти живеш у столиці США.";
            } else if (city.toLowerCase() === "лондон") {
                capitalMessage = "Ти живеш у столиці Великобританії.";
            } else {
                capitalMessage = "Ти живеш у місті " + city + ".";
            }

            let championMessage;
            switch (sport.toLowerCase()) {
                case "футбол":
                    championMessage = "Круто! Хочеш стати як Пеле?";
                    break;
                case "баскетбол":
                    championMessage = "Круто! Хочеш стати як Сампрос?";
                    break;
                case "теніс":
                    championMessage = "Круто! Хочеш стати як Фелпс?";
                    break;
                default:
                    championMessage = "Круто! " + sport + " - супер вибір!";
                    break;
            }

            alert("Тобі " + age + " років.\n" + capitalMessage + "\n" + championMessage);
        }
    }
}
