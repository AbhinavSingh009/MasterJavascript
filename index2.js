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

const flight = 'AT556';
const abhi ={
  name:'Abhinav Singh',
  passport: 6278282
}

const checkIn = function(flightNum, passanger){
  flightNum = 'LY556'; // this is different from flight
  passanger.name = 'Mr. Abhinav Singh'
  if(passanger.passport === 6278282)
    alert('Checked In');
  else
    alert('Wrong Passport');
}

checkIn(flight,abhi);
// flight here is a primitive type. So passing a primitive type to a function is same as creating a copy of the variable passed
console.log(flight);
// we pass reference type because of which the value got changed.So here, we are passing a reference
console.log(abhi);

// To be prepared in the real life

const newPassport = function(person){
  person.passport = Math.trunc(Math.random() * 10000000); // This is affecting the value in the original object as well
}

newPassport(abhi);
checkIn(flight,abhi);
// Javascript does not have passing by reference, only passing by value