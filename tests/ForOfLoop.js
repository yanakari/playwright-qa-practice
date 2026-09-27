//Loop 1. Перебор массива строк
const users = ['Yana', 'Alex', 'Kate'];

for (const user of users) {
    console.log(user);
}

//Loop 2. Вывод всех элементов массива
const products = [
    'Backpack',
    'Jacket',
    'Bike Light'
];

for (const product of products) {
    console.log(product);
}

//Loop 3.1. Поиск элемента по условию
const users1 = [
    'Yana',
    'Alex',
    'Kate'
];

for (const user1 of users1) {
    if (user1 === 'Alex') {
        console.log(user1);
    }
}

//Loop 3.2
const user2 = {
    name: 'Yana',
    age: 25
};

if (user2.age === 25) {
    console.log('Correct age')
}  else console.log('Wrong age');


//Loop 4.1 Фильтрация элементов по условию
const products1 = [
    'Backpack',
    'Jacket',
    'Bike Light'
];

for (const product1 of products1) {
    if (product1 !== 'Jacket') {
        console.log(product1);
    }
}

//Loop 4.2.  Поиск элемента и вывод сообщения
const products2 = [
    'Backpack',
    'Jacket',
    'Bike Light'
];

for (const product2 of products2) {
    if (product2 === 'Jacket') {
        console.log('Found ' + product2);
    }
}

//Loop 4.3. Использование if/else при переборе массива 
const users3 = ['Yana', 'Alex', 'Kate'];

for (const user3 of users3) {
    if (user3 === 'Alex') {
        console.log('Found' + user3)
    } else {
        console.log('Not Alex')
    }
}

//Loop 4.4. Поиск элемента с помощью флага
// Идея: вывести только один итоговый результат после завершения цикла.
const users4 = ['Yana', 'Salah', 'Adam'];
let found = false;

for (const user4 of users4) {
    if (user4 === 'Alex') {
        found = true
    }
}

if (found === true) {
    console.log('Found Alex'); 
} else {
    console.log('Not found Alex')
        }

