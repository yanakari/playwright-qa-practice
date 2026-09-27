//values
const language = 'Javascript';
const experience = 3;
let isAutomation = false;
isAutomation = true;

console.log(language, experience, isAutomation);


//conditions
const status = 'Confirmed';

if (status === 'Confirmed') {
    console.log('Shift is confirmed')
} else {
    console.log('Shift is not confirmed')
}


//conditions
const organizationStatus = 'Active';
const counterPartyStatus = 'Active';
const hasUsers = true;

if (organizationStatus === 'Active' && counterPartyStatus === 'Active' && hasUsers === true) {
    console.log('Partnerhsip is available')
} else {
    console.log('Partnership is not available')
}

//indexes
const organizations = ['Sanford', 'Baptist', 'Sound', 'Concord'];

console.log(organizations[0]);
console.log(organizations[2]);
console.log(organizations[organizations.length - 1])


//pushing
const organizations1 = ['Sanford', 'Baptist', 'Sound', 'Concord'];

organizations1.push('Venn');
console.log(organizations1);
organizations1.pop()
console.log(organizations1);

const user = {
    name:'Yana',
    role: 'QA',
    isActive: true
};
console.log(user.name, user.role, user.isActive)

const users1 = [ 
    {
    name:'Yana',
    role:'QA',
    isActive:true
},
{
    name: 'Alex',
    role:'developer',
    isActive:false
},
{
    name:'Kate',
    role: 'PM',
    isActive: true
}
];

console.log(users1[1].role);
for (const user of users1) {
    if (user.isActive === true) {
    console.log(user.name + 'is active')
} else {
    console.log(user.name + 'is not active')
}
}

for (const user of users1) {
    if (user.isActive && user.role === 'QA') {
        console.log(user.name);
    }
    }
const names = users1.map(function(user) {
    return user.name;
});
console.log(names)

function showRole(name, role) {
    console.log(name, 'is', role);
}

showRole('Yana', 'QA')
showRole('Alex', 'developer')

function getName() {
    console.log('Yana');
}
const name = getName();
console.log(name)

//pizdets
function getStatus() {
    console.log('Function started');
    return 'Confirmed';
}

const result = getStatus;

console.log(result())

//task from gpt
function getUserRole(name,role) {
    return name + ' is ' + role
}

const result1 = getUserRole('Yana', 'QA')
console.log(result1)

//one more function
function getAccess(role, isActive) {
        if (role === 'QA' && isActive){
            return 'Access granted'
    } else {
        return 'Access denied'}
}
//const access = getAccess('QA', true)
console.log(getAccess('QA', true))

//pizda
const team = ['Yana', 'Alex', 'Kate'];
function findUser(usersList,name) {
    for (const currentUser of usersList) {
        if (name === currentUser) {
            return 'User found'
        }
    }
     return 'User not found'
}
console.log(findUser(team,'Alex'))
console.log(findUser(team,'Kate'))
console.log(findUser(team,'John'))

//find()
const teammembers = [
    { name: 'Yana', role: 'QA' },
    { name: 'Alex', role: 'Developer' },
    { name: 'Kate', role: 'PM' }
];

const outcome = teammembers.find(function(member){
    return member.name === 'Alex';
});
console.log(outcome.role)

//filter()
const teamusers = [
    { name: 'Yana', role: 'QA', isActive:true },
    { name: 'Alex', role: 'Developer', isActive:false },
    { name: 'Kate', role: 'PM', isActive:true }
];

const conclusion = teamusers.filter(function(person){
    return person.isActive //=== true;
});
const roles = teamusers.map(function(person){
    return person.role;
});
console.log(conclusion)
console.log(roles)