// Working With Arrays
//
// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// console.log(arr.slice(2));
//
// console.log(arr.slice(-2));
//
// console.log(arr.reverse()); // mutates the original array
// console.log(arr);
//
// console.log(arr.splice(1, 2)); // actually mutates the original array
// const arr2 = ['r', 's', 't', 'u', 'v'];
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]); // spread operator
// console.log(letters.join('-'));

// The AT method which as introduced in ES 2022

// const arr = [23, 11, 64];
// console.log(arr.at(0)); // The more modern looking
//
// console.log(arr[arr.length - 1]); // If we do not know thw length of the array;
// console.log(arr.slice(-1)[0]); // Another way to get the last value;
// console.log(arr.at(-1)); // By using the at method

// Looping The Arrays

// const movements = [200, 400, -400, 3000, -650, -130, 70, 1300];
//
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i + 1} : You've deposited ${movement}`);
//   } else {
//     console.log(`${i + 1} : You've withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log(
//   '=========================FOR EACH================================'
// );
// movements.forEach((movement, index, arr) => {
//   if (movement > 0) {
//     console.log(`${index + 1} : You've deposited ${movement}`);
//   } else {
//     console.log(`${index + 1} : You've withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
//
// currencies.forEach((value, Key, map) => {
//   console.log(`${Key}: ${value}`);
// });
//
// const currenciesunique = new Set(['USD', 'GBP', 'INR', 'USD', 'EUR', 'EUR']);
//
// console.log(currenciesunique);
//
// // value_ the underscore after a variable name lets the developer know that it is a
// // throwaway variable( completely unnecessary )
// currenciesunique.forEach((val, val_, map) => {
//   console.log(`${val_} : ${val}`);
// });
//
// const [a1, a2] = [];
