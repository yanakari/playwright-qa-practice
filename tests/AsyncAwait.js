//get Promise Confirmed
async function getStatus() {
    return 'Confirmed';
}

const result = getStatus();
console.log(result);


//get 'Confirmed'
async function getStatus2() {
    return 'Confirmed';
}
async function showStatus() {
const result2 = await getStatus2()
console.log(result2);
}
showStatus()

//getUser
async function getUser(){
    return {
        name:'Yana',
        role:'QA'
    }
}

async function showUser() {
    const user = await getUser()
    console.log(user.name)
}
showUser()

//one more async
async function openPage() {
    return 'Page opened'
}
async function login() {
    return 'User logged in'
}
async function runTest() {
    const pageResult = await openPage()
    console.log(pageResult)
    const loginResult = await login()
    console.log(loginResult)
    console.log('Test finished')
}
runTest()