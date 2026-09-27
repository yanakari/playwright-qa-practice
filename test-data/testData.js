require('dotenv').config({path: '../.env'});
//const result = require('dotenv').config();
const users = {
    standard: {
username: process.env.QA_USERNAME,
password: process.env.QA_PASSWORD
},
invalid: {
username:'standard_user',
password: 'wrong_password'
}
};

const checkoutData = {
    firstName: 'Yana',
    lastName:'Karim',
    postalCode:'123456'
};


module.exports = {users, checkoutData}