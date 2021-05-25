'use strict';

// -------- Lecture: Default Parameters --------

const bookings = [];

const createBooking = function (
  flightNum,
  passengersNum = 3,
  price = 199 * passengersNum
) {
  // ES5
  // passengersNum = passengersNum || 1;
  // price = price || '$199';

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LFH123');
createBooking('LFH123', 2, 800);
createBooking('LFH123', 2);
createBooking('LFH123', undefined, 1000);
