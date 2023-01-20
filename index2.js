'use strict';

const bookings = [];
const createBooking  = function(flightNumber, newPassengers = 1, price = 100) {
  const booking = {
    flightNumber,
    newPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH1234');

createBooking('LH1234', 2, 600);