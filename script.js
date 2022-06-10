
const paint = 'растопленный керзовый каблук';
let body = 'тело бродяги';

let title = "Придумать какой-нибудь заголовок",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 5,
    rollback = 99,
    fullPrice = 100,
    adaptive = true;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));