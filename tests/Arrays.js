// =====================================
//push() Добавляет элемент в конец массива
//pop()	Удаляет последний элемент массива, НО не умеет удалять конкретный элемент по имени и индексу
//includes() который проверяет наличие элемента в массиве и возвращает true, если элемент найден, и false, если элемент не найден.
//find() перебирает элементы массива и возвращает первый элемент, для которого условие стало true, либо возвращае undefined
//filter() Находит все подходящие элементы
//map() перебирает все элементы массива, преобразует каждый элемент и возвращает новый массив
// =====================================

//Arrays 1.1 Добавление элемента в конец массива(push)
const products = ['Backpack', 'Jacket'];

products.push('Bike Light');

console.log(products);

//Arrays 1.2 Добавление элементов в конец массива(push)
const users = ['Yana'];

users.push('Alex');
users.push('Kate');

console.log(users);

// Arrays 2. Получение количества элементов массива (length)

const users2 = ['Yana'];

users2.push('Alex');
users2.push('Kate');

console.log(users2.length);

//Arrays 3. Добавление и перебор элементов массива
const users3 = ['Yana'];

users3.push('Alex');
users3.push('Kate');

for (const user3 of users3) {
    console.log(user3);
}

console.log('Total users: ' + users3.length);

// Arrays 4. Удаление элемента и изменение длины массива
const products2 = ['Backpack', 'Jacket', 'Bike Light'];

products2.pop();

console.log(products2);
console.log(products2.length);

//Arrays 5. Проверка наличия элемента в массиве (includes)
const users4 = ['Yana', 'Alex', 'Kate'];
console.log(users4.includes('Alex'));

//Arrays 6.1 Поиск элемента по условию (find)
const users5 = ['Yana', 'Alex', 'Kate'];

const user5 = users5.find(function(item) {
    return item === 'Alex';
});

console.log(user5);


//Arrays 6.2 Поиск объекта в массиве (find)
const products3 = [{
    name:'Backpack',
    price: 30
},
{
    name:'Jacket',
    price:50
},
{
    name:'Bike Light',
    price: 20   
}
];

const product3  =products3.find(function(item){
    return item.name === 'Jacket';
});

console.log(product3);

//Arrays 7. Поиск объектов по условию (filter)
const products4 = [
    {
        name: 'Backpack',
        price: 30
    },
    {
        name: 'Jacket',
        price: 50
    },
    {
        name: 'T-Shirt',
        price: 50
    }
];

const filteredProducts = products4.filter(function(item) {
    return item.price === 50;
});

console.log(filteredProducts);

//Arrays 8.1. Несколько условий оператор и
const products5 = [
    {
        name: 'Backpack',
        price: 30
    },
    {
        name: 'Jacket',
        price: 50
    },
    {
        name: 'T-Shirt',
        price: 50
    }
];

const filteredProducts5 = products5.filter(function(item) {
    return item.price === 50 && item.name === 'Jacket';
});

console.log(filteredProducts5);

//Arrays 8.2. Несколько условий оператор ИЛИ
const products6 = [
    {
        name: 'Backpack',
        price: 30
    },
    {
        name: 'Jacket',
        price: 50
    },
    {
        name: 'T-Shirt',
        price: 50
    }
];

const filteredProducts6 = products6.filter(function(item) {
    return item.name === 'Jacket' || item.name === 'T-Shirt';
});

console.log(filteredProducts6);

//Arrays 9. Преобразование массива объектов (map)
const users6 = [
    {
        name: 'Yana',
        age: 25
    },
    {
        name: 'Alex',
        age: 30
    },
    {
        name: 'Kate',
        age: 28
    }
];
const names6 = users6.map(function(item) {
    return item.name;
});

console.log(names6);

//Arrays 10.
const users7 = ['Yana', 'Alex'];

const newUsers7 = users7.map(function(item) {
    return item + '!';
});

console.log(users7);
console.log(newUsers7);