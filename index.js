'use strict';
// const interested = prompt('What is Abhinav Interested in ');

// console.log('Abhinav is interested in ', interested);

const userObject = {
  firstName: 'Abhinav',
  lastName: 'Singh',
  address: '9 Mabelle',
  birthYear: 1994,
  hasDriversLicense: false,
  calcAge: function () {
    return (this.age = 2037 - this.birthYear);
  },

  getSummary: function () {
    return (
      `${this.firstName} is  ${this.calcAge()} ` +
      `-year old  and he has ${
        this.hasDriversLicense ? 'a' : 'no'
      } drivers license`
    );
  },
};

console.log(userObject.getSummary());

const x = 23;

console.log('Live server is up');

// Function declerations

// console.log(addDecl(2, 3));
// console.log(addArrow(7, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addArrow = (a, b) => {
//   return a + b;
// };

// This keyword practice

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// const calcAgeArrow = birthYear => {
//   console.log('Arrow Function');
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);
// calcAgeArrow(1992);

// //var firstName = 'JJOO';

// var jonas = {
//   age: 24,
//   firstName: 'JJ',
//   year: 1889,
//   calcAge: function () {
//     console.log(this);
//     console.log(this.year);
//   },
//   greet: () => {
//     console.log('greet', this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();

// Array Destruction

// const openingHours= {
//   thur: {
//     open: 5,
//     close: 12,
//   },
//   fri: {
//     open: 5,
//     close: 2,
//   },
//   sat: {
//     open: 5,
//     close: 1,
//   },
//   sun: {
//     open: 1,
//     close: 9,
//   },
// }

// const restaurant = {
//   Name: 'Classico Italiano',
//   location: 'Mississauga',
//   categories: ['Italian', 'Pizzaria', 'Vegeterian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Peas'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // ES6 enhanced object literals
//   openingHours,
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) { // object descructuring happened here with the use of curly braces 
//     console.log(`Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be
//     delivered to ${address} at ${time}`);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

/*
restaurant.orderDelivery({
  time: '2230',
  address: '4749 Cres',
  mainIndex: 2,
  starterIndex: 2,
});

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [a1, b1, c1] = arr;

// console.log(a1, b1, c1);

// const [first, , second] = restaurant.categories;

// console.log(first, second);

// console.log(restaurant.order(2, 0));

// Object Destructuring

const { Name, openingHours, categories } = restaurant;

console.log(Name, openingHours, categories);

const { menu = [], starterMenu: starters = [] } = restaurant; // assigning value in case it is missing and changing the name of the variable

console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;

const obj = { a: 7, b: 9, c: 12 };

({ a = [], b = [] } = obj); // values will be changed with values of the Object.

console.log(a, b);

// Destructuring nested Ojects. Essentially we want access to open and close

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c); 
*/

// Spread Operation
/*
const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

console.log(newArr);

console.log(...arr);

const newMenu = [...restaurant.mainMenu, 'Sushi'];

console.log(newMenu);

//String
const str = 'Abhinav';

const letters = [...str, '', 'S.23'];

console.log(letters);

// const ingredients = [prompt("Let's make a Pasta!! Ingredient1"),
// prompt('Ingedrient 2?'),
// prompt('Ingedrient 3?')];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
 const newRetaurant = {foundingYear:'1994', ...restaurant, founder:'Abhinav'}

 console.log('The new one is ', newRetaurant);

 // Copying Objects

 const copyofRestaurant = {...restaurant}
 copyofRestaurant.Name = 'Abhinav DDDD';
*/

// Rest Pattern
// Pack Elements into an arrays
// Destructuring
/*const arr  = [1,2,3,...[3,4]];

// Rest because on the left side of the operator
const [a,b,...others] = [1,2,3,4,5];

console.log(a, b, others);

const [pizza, ,resotto,...otherFood] =   [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza,resotto,otherFood);

const {sat, ...weekdays} = restaurant.openingHours;

console.log(sat, weekdays);

// Functions

const add = function(...numbers){
  let sum = 0;
  for(let i of numbers){
    sum += i;
  }
  console.log(sum);
}

add(2,3)
add(5,3,4,4);

const x1 = [23,5,7];

add(...x1);

restaurant.orerPizza('Tomato','Cheeze','Olives','Spinach');

restaurant.orerPizza('Tomato');

// Another way of assigning value to the variable which is null/undefined or empty 
// restaurant.anotherVarialble ||= 30;

// nullish (null or unefined) assignment operator
//restaurant.anotherVariable ??=10;
*/

//challange
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

console.log(players1, players2);

const [goalKeeper, ...fieldPlayer] = players1;

console.log(goalKeeper, fieldPlayer);

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

const players1Final = [...players1, 'Burki', 'Schulz', 'Hummels'];
console.log(players1Final);

const {
  odds: { team1, x: Draw, team2 },
} = game;

console.log(team1, team2, Draw);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
*/

const openingHours = {
  thur: {
    open: 5,
    close: 12,
  },
  fri: {
    open: 5,
    close: 2,
  },
  sat: {
    open: 5,
    close: 1,
  },
  sun: {
    open: 1,
    close: 9,
  },
};

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Mississauga',
  categories: ['Italian', 'Pizzaria', 'Vegeterian', 'Organic'],
  starterMenu: [
    { name: 'Focaccia' },
    { name: 'Bruschetta' },
    { name: 'Garlic Bread' },
    { name: 'Peas' },
  ],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  xyz: [1, 2, 3, 4],
  // ES6 enhanced object literals
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be 
    delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `);
  },
  orerPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// New Ways of Looping
const menu01 = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
  ...restaurant.xyz,
];

console.log(JSON.stringify(menu01));

restaurant.starterMenu[0].name = 'Abhinav';
restaurant.mainMenu[0] = 'Abhinav';
restaurant.xyz[0] = 100;

console.log(JSON.stringify(menu01));

for (let [i, el] of menu01.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Optional Chaining
// With Nullish Coalisc

console.log(restaurant.openingHours.Mon?.open ?? 'The property is not there');

// For Methods

console.log(restaurant.order3?.(0, 1) ?? 'The Method does not exist');

//SETS
// const orderSets = new Set([
//   'Pasta',
//   'Pizza',
//   'Cheese',
//   'Rissotto',
//   'Alak',
//   'Zukki',
//   'Pizza',
//   'Pasta',
// ]);

// console.log(orderSets);

//MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Italy');
console.log(rest.set(2, 'Lisbon'));
rest.get('name');

const question = new Map([
  ['Question', 'What is the best programming language'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'correct'],
  [false,'Try Again!!']
]);

console.log(question);

// Convert Objects to Maps;

const hrsmap = new Map(Object.entries(restaurant.openingHours));
console.log(hrsmap);

console.log(question.get('Question'));

for(const [key,value] of question){
  if(typeof key === 'number')
    console.log(`Answer ${key}: ${value} `)
}

const answer = 3;//Number(prompt('Your Answer'));

console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Converting Map to an Array

console.log([...question]);
console.log('Entries',[...question.entries()]);
console.log('Keys',[...question.keys()]);
console.log('Values',[...question.values()]);

const checkMiddleSeat = function(seat){
  // B and E are middle seat;
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat');
  }else{
    console.log('You got Lucky!!!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('1C');
checkMiddleSeat('21A');
checkMiddleSeat('4B');

const maskCreditCard = function(number){
  const str = number+'';
  const last  = str.slice(-4);
  return last.padStart(str.length,'*');
}

console.log('Credit Card', maskCreditCard(789788939093));

// Challange
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
document.querySelector('button').addEventListener('click', function(){
  const text  = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for(let [no,str] of rows.entries()){
    const [first,second] = str.toLowerCase().trim().split('_');
    const outPut = `${first} ${second.replace(second[0],second[0].toUpperCase())}`
    console.log(`${outPut.padEnd(20)} ${'✅'.repeat(no+1)}`);
  }
})
