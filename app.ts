const myName: string = 'valentina';
const states: number = 50;
// adds two numbers
const sum: number = 5 + 4;

// says hello
function sayHello() {
  alert('Hello world!');
}

sayHello();

function checkAge(name: string, age: number) {
  if (age < 21) {
    alert('Sorry ' + name + ", you aren't old enough to view this page!");
  }
}

const favVegs: Array<string> = ['carrot', 'brocoli', 'rucula'];

for (let veg of favVegs) {
  console.log(veg);
}
interface IPet {
  name: string;
  breed: string;
}

const pet: IPet = {
  name: 'perla',
  breed: 'labrador',
};

console.log(pet.name, pet.breed);

interface IPerson {
  name: string;
  age: number;
}

const friends: Array<IPerson> = [
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

for (let i = 0; i < friends.length; i++) {
  checkAge(friends[i].name, friends[i].age);
}

function getLength(word: string): number {
  return word.length;
}

const phraseLength: number = getLength('Hello World');

function finalSentence(num: number): void {
  if (num % 2 === 0) {
    console.log('The world is nice and even');
  } else {
    console.log('The world is an odd place!');
  }
}

finalSentence(phraseLength);

const moreFriends: Array<IPerson> = [
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

for (let i: number = 0; i < moreFriends.length; i++) {
  checkAge(moreFriends[i].name, moreFriends[i].age);
}
