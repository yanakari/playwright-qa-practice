const users = [
    { name: 'Yana', role: 'QA', isActive: true },
    { name: 'Alex', role: 'Developer', isActive: false },
    { name: 'Kate', role: 'PM', isActive: true },
    { name: 'John', role: 'QA', isActive: false }
];
const activeUsers = users.filter(function(user) {
    return user.isActive
});
const activeNames = activeUsers.map(function(user2){
    return user2.name
})
console.log(activeUsers)
console.log(activeNames)

const onlyQA = users
    .filter(function(member){
        return member.role === 'QA' && member.isActive
    })
    .map(function(member){
        return member.name
    });
console.log(onlyQA)