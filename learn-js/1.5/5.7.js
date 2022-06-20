// Фильтрация уникальных элементов массива

function unique(arr) {
    return new Set(arr);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

// Отфильтруйте анаграммы

function aclean(arr) {
    return Array.from(new Set (
        arr.map(
            item => Array.from(item.toLowerCase()).sort().join('')
        )
    ));

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));