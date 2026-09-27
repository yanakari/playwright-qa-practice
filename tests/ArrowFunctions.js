const users = [
    { name: 'Yana', role: 'QA', isActive: true },
    { name: 'Alex', role: 'Developer', isActive: false },
    { name: 'Kate', role: 'PM', isActive: true }
];
const names = users.map(function(user){
    return user.name
});
console.log(names)

const members = users.map( member => member.name);
console.log(members)

const teammembers = users.filter(currentMember => currentMember.isActive)
console.log(teammembers)

const users2 = users.filter(currentUser => {return currentUser.isActive})
console.log(users2)

const activeNames = users
    .filter(user3 => user3.isActive)
    .map(user3 => user3.name)
console.log(activeNames)