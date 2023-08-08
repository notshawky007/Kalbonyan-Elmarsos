//Q1
// const number = [1, 3, 6, 4, 8];

// const filteredArray = number.filter((el) => el > 5);
// console.log(filteredArray);

// const mappedArray = number.map((el) => ({ num: el }));
// console.log(mappedArray);

// const reducedArray = number.reduce((accumulator, num) => {
//   return accumulator * num;
// }, 1);
// console.log(reducedArray);

//Q2
// const findLargest = (...arr) => {
//   return arr.reduce((accumulator, num) => {
//     return accumulator > num ? accumulator : num;
//   });
// };
// console.log(findLargest(1, 3, 6, 4, 8));
//Q3
// const findMinMax = (minMax, ...arr) => {
//   if (minMax === "min") {
//     return arr.reduce((accumulator, num) => {
//       return accumulator < num ? accumulator : num;
//     });
//   } else if (minMax === "max") {
//     return arr.reduce((accumulator, num) => {
//       return accumulator > num ? accumulator : num;
//     });
//   }
// };
// const [min, max] = [
//   findMinMax("min", 1, 3, 6, 4, 8),
//   findMinMax("max", 1, 3, 6, 4, 8),
// ];
// console.log(min, max);

//Q4
// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set);
