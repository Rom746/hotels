// Получите атрибут

let widgetName = document.querySelector('div').dataset.widgetName;

console.log(widgetName);

// Сделайте внешние ссылки оранжевыми

let arrLink = document.querySelectorAll('a');

for (const iterator of arrLink) {
    let href = iterator.getAttribute('href');
    if (href && href.includes('://') && !href.includes('http://internal.com')) {
        iterator.style.color = 'orange';
        console.log(iterator.href);
    }
}
