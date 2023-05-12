// #1
const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
]

function getYoungestName(users) {
let theYoungest = users[0]
for (let i = 0; i < users.length; i++) {
    if (users[i].age < theYoungest.age) {
        theYoungest = users[i];
    }
}
return theYoungest.name;
}
const theYoungestName = getYoungestName(users);
console.log(theYoungestName);

// #2
const user = {
    name: 'Sherlock',
    surname: 'Holmes',
    IQ: 190
}

function copyUser(user) {
    const newUser = {...user};
    return newUser;
}
console.log(copyUser(user))
// #3
let countA = 0;
let countB = 0;

let randomA;
let randomB;

const user1 = 'a';
const user2 = 'b';

function diceRandom(user1, user2) {
    if (countA < countB) {
        return user1 + ' არის გამარჯვებული';
    } else if (countA > countB) {
        return user2 + ' არის გამარჯვებული';
    } else {
        return 'ფრე';
    } 
}

do {
    randomA = Math.floor(Math.random() * 6) + 1;
    countA++;
} while (randomA !== 3);

do {
    randomB = Math.floor(Math.random() * 6) + 1;
    countB++;
} while (randomB !== 3);
console.log(diceRandom(user1, user2))