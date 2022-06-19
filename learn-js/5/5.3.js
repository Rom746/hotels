// Сделать первый символ заглавным

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Проверка на спам

function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx');
}

// Усечение строки

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 3) + '…';
    }
    return str
}

// Выделить число

function extractCurrencyValue(str) {
    return +str.slice(1);
}