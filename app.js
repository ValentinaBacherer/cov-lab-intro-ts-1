"use strict";
var myName = 'valentina';
var states = 50;
// adds two numbers
var sum = 5 + 4;
// says hello
function sayHello() {
    alert('Hello world!');
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ", you aren't old enough to view this page!");
    }
}
var favVegs = ['carrot', 'brocoli', 'rucula'];
for (var _i = 0, favVegs_1 = favVegs; _i < favVegs_1.length; _i++) {
    var veg = favVegs_1[_i];
    console.log(veg);
}
var pet = {
    name: 'perla',
    breed: 'labrador',
};
console.log(pet.name, pet.breed);
var friends = [
    {
        name: 'Charles',
        age: 21,
    },
    {
        name: 'Abby',
        age: 27,
    },
    {
        name: 'James',
        age: 18,
    },
    {
        name: 'John',
        age: 17,
    },
];
for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
function getLength(word) {
    return word.length;
}
var phraseLength = getLength('Hello World');
function finalSentence(num) {
    if (num % 2 === 0) {
        console.log('The world is nice and even');
    }
    else {
        console.log('The world is an odd place!');
    }
}
finalSentence(phraseLength);
var moreFriends = [
    {
        name: 'Charl',
        age: 31,
    },
    {
        name: 'Anny',
        age: 20,
    },
    {
        name: 'James',
        age: 18,
    },
    {
        name: 'John',
        age: 17,
    },
    {
        name: 'Joel',
        age: 27,
    },
];
for (var i = 0; i < moreFriends.length; i++) {
    checkAge(moreFriends[i].name, moreFriends[i].age);
}
