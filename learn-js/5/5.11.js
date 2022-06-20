
// Создайте дату

const date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Покажите день недели

function getWeekDay(date) {
    const week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return week[date.getDay()];
}

console.log(getWeekDay(date));

// День недели в европейской нумерации

function getLocalDay(date) {
    let day = date.getDay();
    return day == 0 ? 7 : day;
}

// Какой день месяца был много дней назад?

function getDateAgo(date, days) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}

// Последнее число месяца?

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// Сколько сегодня прошло секунд?

function getSecondsToday() {
    let date = new Date();
    let day = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return (date - day) / 1000;
}

// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
    let date = new Date();
    let day = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

    return (day - date) / 1000;
}

// Форматирование относительной даты

function formatDate(date) {
    let time = new Date() - date;

    if (time < 1000) { return 'прямо сейчас'; }
    time = Math.floor(time / 1000);
    if (time < 60) { return time + ' сек. назад'; }
    time = Math.floor(time / 60);
    if (time < 60) { return time + ' мин. назад'; }

    let otherDate = [
        date.getDate(),
        date.getMonth(),
        date.getFullYear() % 100,
    ].join('.') + ', ' + date.getHours() + ':' + date.getMinutes();

    return otherDate;
}
console.log(formatDate(new Date(new Date - 86400 * 1000)));
