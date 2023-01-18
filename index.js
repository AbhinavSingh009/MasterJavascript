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

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Mississauga',
  categories: ['Italian', 'Pizzaria', 'Vegeterian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Peas'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },
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

// Destructuring nested Ojects

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

// Rest becasue on the left side of the operator
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
