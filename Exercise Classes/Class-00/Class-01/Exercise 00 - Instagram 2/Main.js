const User = require('./User');
const Instagram = require('./Instagram');
const readline = require('readline-sync');
const printSeparator = () => console.log('-----------------------------------');

const instagram = new Instagram();

const user1 = new User('Lucas', 'lucas@gmail.com', '123');

const user2 = new User('Mateus', 'mateus@gmail.com', '123');

const user3 = new User('Pedro', 'mateus@gmail.com', '123');

instagram.addUser(user1);
instagram.addUser(user2);
instagram.addUser(user3);
instagram.addUser(123);



// console.log(user1.id);
// console.log(user2.id);
// console.log(user3.id);

// user1.addFriend(user2.name);
// user1.addFollower(user3.name);

// console.log(user1.friends);
// console.log(user1.followers);

// printSeparator();

// user1.removeFriend("mateus");

// console.log(user1.friends);
// console.log(user1.followers);

// printSeparator();

// user1.removeFriend("Mateus");

// console.log(user1.friends);
// console.log(user1.followers);

// printSeparator();

// const line = readline.question();
// console.log(line);
module.exports.instagram = instagram;

// console.log(instagram.users);




