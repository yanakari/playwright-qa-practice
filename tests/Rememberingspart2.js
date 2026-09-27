const users = [
    { name: 'Yana', role: 'QA', isActive: true },
    { name: 'Alex', role: 'Developer', isActive: false },
    { name: 'Kate', role: 'PM', isActive: true },
    { name: 'John', role: 'QA', isActive: true }
];
const names = users.filter(function(user) {
    return user.isActive
});
const actNames = users.map(function(actUser){
    return actUser.name
})
console.log(names)
console.log(actNames)