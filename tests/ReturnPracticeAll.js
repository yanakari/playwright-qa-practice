/*//Return 1. Simple function
function getCity1() {
    return 'Moscow'
}

function showCity1(city) {
    console.log(city)
}

showCity1(getCity1())


//Return 3. Возвращаем параметр
function getCountry(country) {
    return country
};

console.log(getCountry('Russia'))
console.log(getCountry('Germany'))


//Return 5. Передача return в параметр
function getProduct() {
    return 'Backpack'
};

function showProduct(product) {
    console.log('Product: ' + product)
}

showProduct(getProduct())



//Return 6. Несколько функций подряд
function getPrice() {
    return 50
};

function showPrice(price) {
    return 'Price:' + price
}

console.log(showPrice(getPrice()))


//Return 7. Сохранение результата функции в перемнную

function getCity() {
    return 'Moscow'
};

const city = getCity()

console.log(city)


//Return 8. Несколько функций подряд
function getUserName() {
    return 'Yana'
};

function formatUser(name) {
    return 'User: ' + name
}

console.log(formatUser(getUserName()))


//Return 9. Return + вычисление
function getNumber() {
    return 100
};

function doubleNumber(number) {
    return 'Result: '+ number*2;
}

console.log(doubleNumber(getNumber()))


//Return 10. Return с условиями
function getPrice1() {
    return 100
};

function applyDiscount(price) {
    if (price >= 100) {
        return price-20
    } else {
        return price
    }
}

function showPrice1(price) {
    return 'Final price: ' + price
}

console.log(showPrice1((applyDiscount(getPrice1()))))


//Return 11. Return с условиями
function getAge() {
    return 19
};

function checkAge(age) {
    if (age >=18) {
        return 'Access granted'
    } else {return 'Access denied'}
}

console.log(checkAge(getAge()))


//Return 12. Return с условиями
function findUser(name) {
    if (name === 'Yana') {return 'User Found'
    } else {
        return 'User not found'
    }
}

console.log(findUser('Yana'))
*/

//Return 13. Return с циклом for of
const users = ['Yana', 'Salakh', 'Kate'];

function findUsers(userList) {for (const user of userList) {
    if ( user === 'Alex') {
        return 'Found Alex';
    }
}
return 'Not found Alex';
}

console.log(findUsers(users))