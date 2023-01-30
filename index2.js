'use strict';

// const bookings = [];
// const createBooking  = function(flightNumber, newPassengers = 1, price = 100) {
//   const booking = {
//     flightNumber,
//     newPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }
//
// createBooking('LH1234');
//
// createBooking('LH1234', 2, 600);

// const flight = 'AT556';
// const abhi ={
//   name:'Abhinav Singh',
//   passport: 6278282
// }
//
// const checkIn = function(flightNum, passanger){
//   flightNum = 'LY556'; // this is different from flight
//   passanger.name = 'Mr. Abhinav Singh'
//   if(passanger.passport === 6278282)
//     alert('Checked In');
//   else
//     alert('Wrong Passport');
// }
//
// checkIn(flight,abhi);
// // flight here is a primitive type. So passing a primitive type to a function is same as creating a copy of the variable passed
// console.log(flight);
// // we pass reference type because of which the value got changed.So here, we are passing a reference
// console.log(abhi);
//
// // To be prepared in the real life
//
// const newPassport = function(person){
//   person.passport = Math.trunc(Math.random() * 10000000); // This is affecting the value in the original object as well
// }
//
// newPassport(abhi);
// checkIn(flight,abhi);
// Javascript does not have passing by reference, only passing by value

// First Class functions: (first citizens, This means that functions are simply values), Functions are another type of Objects

// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }
//
// const upperFirstWord = function(str) {
//   const [first,...restWords]  = str.split(' ');
//   return [first.toUpperCase(),...restWords].join(' ');
// }
//
// // Higher Order Function
// const transformer = function(str, fn) {
//   console.log(`Original String ${str}`);
//   console.log(`Transformed Sting ${fn(str)}`);
//   console.log(`Transformer by ${fn.name}`);
// }
//
// transformer('Javascript is the Best ', oneWord);
//
//
//
// const greeterArr = greeting => name => console.log(`${greeting} ${name}`);
//
// greeterArr('Hi')('Abhinav');
//
// const lufthansa  = {
//   airline: 'Lufthansa',
//   iaiaCode: 'LH',
//   bookings: [],
//   book(flightNumber, passangerName) {
//     console.log(`${passangerName} booked a seat on ${this.airline} flight ${this.iaiaCode}${flightNumber}`);
//     this.bookings.push({flight:`${this.iaiaCode}${flightNumber}`, name:passangerName});
//   }
// };
//
// lufthansa.book(239,'Abhinav');
// lufthansa.book(539,'Abhinav33');
//
// const eurowings = {
//   airline:'Eurowings',
//   iaiaCode: 'EW',
//   bookings: []
// }
//
// const swiss = {
//   airline:'Swiss Arilines',
//   iaiaCode: 'SW',
//   bookings: []
// }
//
// const book = lufthansa.book;
//
// //book(23,'Williams '); // This will throw error where this points to undefined
// book.call(eurowings, 23, 'Williams'); // Here this keyword is set to eurowings object
// console.log(eurowings);
//
// book.call(lufthansa,'289','Adam Smith');
// console.log(lufthansa);
//
// book.apply(swiss, [549, 'Brad Pitt']); // Not used anymore in modern javascript
// console.log(swiss);
//
// const flightData = [489,'Morgan Freeman'];
// book.call(swiss, ...flightData);
//
// // The Bind Method (Manually allows you to set this keyword same like what call and apply does )
//
// const bookEW = book.bind(eurowings,234);
// const bookLH = book.bind(lufthansa);
// const bookSH = book.bind(swiss);
//
// bookEW(288,'Fred Stone');
// bookEW('martha cooper');
//
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   this.planes++;
//
//   console.log(this.planes);
//
//   console.log(this);
// }
//
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));
//
// // Partial Application
// const addTax = (rate,value) => value + value*rate;
//
// console.log(addTax(0.1,200));
//
// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;
//
//
// console.log(addVAT(100));
//
// const addTaxrate  = function(rate) {
//   return function(value) {
//     return value + value * rate;
//   }
// }
//
// const addVAT2 = addTaxrate(0.23);
// console.log(addVAT2(100));

// Code Challange

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
