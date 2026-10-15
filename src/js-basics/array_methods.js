const numbers = [5, 12, 8, 130, 44];
const users = [
    { id: 1, name: 'rafi', city: 'dhaka' },
    { id: 2, name: 'alex', city: 'ny' },
    { id: 3, name: 'sara', city: 'dhaka' },
];

// using filter() method : to keep only desired data, returns a new array

const numbersUnder10 = numbers.filter((num) => {
    return num < 10;
});

console.log(numbersUnder10);
// only take 'DHAKA' people from users

const dhakaPeople = users.filter((user) => {
    return user.city === 'dhaka';
});
console.log(dhakaPeople);

// using find() method : to find only a user

user = users.find((user) => user.id === 1);
console.log(user);

// map() method : to perform operation on an Array and return new same length array

const doubledNum = numbers.map((num) => num * 2);
console.log(doubledNum);

// forEach() method : works same as map but does not return new Array

let temp = [];
numbers.forEach((num) => {
    temp.push(num ** 2);
});
console.log(temp);

// normal for loop
temp = [];
for (let i = 0; i <= 5; i += 1) {
    temp.push(i);
}
console.log(temp);
