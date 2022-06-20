// Деструктурирующее присваивание

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

// Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let maxName;
    for (const [name, sum] of Object.entries(salaries)) {
        if (max < sum) {
            max = sum;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));