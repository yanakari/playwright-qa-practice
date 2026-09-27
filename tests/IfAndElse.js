/*//IF 1. Проверка свойства объекта
const user = {
    name: 'Yana',
    age: 25
};

 if (user.age === 25) {
 console.log('Correct age');
 } else {
    console.log('Wrong age')};

//IF2. Проверка свойства объекта в массиве
const products = [
    {
        name: 'Backpack',
        price: 30
    },
    {
        name: 'Jacket',
        price: 50
    }
];

console.log(products[1].name);

if (products[0].price === 30) {
    console.log('Correct price')
} else {
    console.log('Wrong price')
};

//IF3. Получение данных из массива объектов
const products1 = [{
    name: 'Backpack',
    price: 30
},
{   name: 'Jacket',
    price: 50
}
];
console.log(products1[1].price);
if (products1[0].price === 30) {
    console.log('Correct price')
    } else {
        console.log('Wrong price')
    };

console.log(products1[0].name);
*/

//If 4. Проверка свойства объекта в массиве объектов
const products2 = [
    {
        name: 'Backpack',
        price: 30
    },
    {
        name: 'Jacket',
        price: 50
    }
];

console.log(products2[1].name);

if (products2[1].price === 50) {
    console.log('Correct price')
};