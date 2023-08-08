// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// const arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2);

// const arr3 = new Array(5);
// console.log(arr3);

// const arr4 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// for (data of arr4) {
//   for (num of data) {
//     console.log(num);
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// arr.pop();
// console.log(arr);
// arr.splice(2, 1);
// console.log(arr);
// arr.splice(2, 0, 3);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// arr.concat([6, 7, 8]);
// console.log(arr);
// console.log(arr.indexOf(3));
// console.log(arr.lastIndexOf(3));

// const prices = [100, 200, 300, 400, 500];
// const tax = 0.1;
// const taxPrices = [];

// // for (const price of prices) {
// //   taxPrices.push(price + price * tax);
// // }
// // console.log(taxPrices);

// prices.forEach((price, index, prices) => {
//   const priceObj = {
//     index: index,
//     taxIncludedPrice: price + price * tax,
//   };
//   taxPrices.push(priceObj);
// });
// console.log(taxPrices);

// const prices = [100, 200, 300, 400, 500];
// const tax = 0.1;

// const taxIncludedPrice = prices.map((price, index, prices) => {
//   const priceObj = {
//     index: index,
//     taxIncludedPrice: price + price * tax,
//   };
//   return priceObj;
// });
// console.log(prices, taxIncludedPrice);

// const arr = [10, 7, 16, 30, 14, 15];
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr);

// const arr = [10, 7, 16, 30, 14, 15];
// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(arr);

// const arr = [10, 7, 16, 30, 14, 15];
// const newArr = arr.map((el) => (el % 2 === 0 ? el : el * 2));
// console.log(newArr);

// const arr = [10, 7, 16, 30, 14, 15];
// const filteredArr = arr.filter((el) => el > 10 && el < 30);
// console.log(filteredArr);

// const arr = [10, 7, 16, 30, 14, 15];
// const arrFiltered = arr.filter((el) => el !== 16);
// console.log(arrFiltered);

// practice on filter/map/sort/slice/splice/forEach

// const compare = (a, b) => {
//   const ageA = a.age;
//   const ageB = b.age;
//   return ageB - ageA;
// };

// const names = [
//   { name: "mostafa", age: 22 },
//   { name: "Jane", age: 22 },
//   { name: "Jack", age: 18 },
//   { name: "Jill", age: 24 },
//   { name: "mustafa", age: 25 },
//   { name: "Joe", age: 21 },
//   { name: "Jenny", age: 19 },
//   { name: "Jen", age: 23 },
//   { name: "Jenny", age: 21 },
// ];

// const newNames = names
//   .sort(compare)
//   .slice(0, 5)
//   .filter((el) => el.age > 20)
//   .map((el) => (el.name === "mustafa" ? { ...el, name: "mostafa" } : el));
// console.log(newNames);

//reduce
// const arr = [10, 14, 12, 15, 14, 15, 20, 35];
// const addArr = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(addArr);

// const myName = ["s", "@", "h", "@", "a", "@", "w", "@", "k", "@", "y", "@"];
// const nameFiltered = myName.filter((el) => el !== "@");
// const finalName = nameFiltered.reduce((acc, cur) => acc + cur, "");
// console.log(finalName);

//split
// const cv =
//   "Name: Mostafa;Age: 22;Address: 1234, ABC Street, XYZ City, ABC Country;Phone: 1234567890;Email: mostafashawky100000 @gmail.com;Skills:html css javascript";
// const cvArr = cv.split(";");
// console.log(cvArr);

//join
// const myName = ["mostafa", "shawky", "mostafa"];
// const nameJoined = myName.join(" ");
// console.log(nameJoined);

//spread operator

//contact array with spread operator
// const name = ["mostafa", "shawky"];
// const age = [22];
// const contact = [01004813734, "Email: mostafashawky100000@gmail.com"];
// const skills = ["html", "css", "javascript"];
// const cv = [...name, ...age, ...contact, ...skills];
// console.log(cv);

//contact object with spread operator
// const nameObj = {
//   firstName: "mostafa",
//   lastName: "shawky",
// };
// const ageObj = {
//   age: 22,
// };
// const contactObj = {
//   phone: 01004813734,
//   email: "mostafashawky100000@gmail.com",
// };
// const skillsObj = {
//   skills: ["html", "css", "javascript"],
// };
// const cvObj = { ...nameObj, ...ageObj, ...contactObj, ...skillsObj };
// console.log(cvObj);

//find max number in array using spread operator
// const num = [
//   10, 5, 20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100,
//   95,
// ];
// const maxNum = Math.max(...num);
// console.log(maxNum);

//rest operator
// let getCv = (firstName, lastName, ...arg) => {
//   console.log(firstName, lastName, arg);
// };
// getCv("mostafa", "shawky", 21, 01004813734);

//array destructuring
// const cv = [
//   "mostafa shawky",
//   22,
//   "1234, ABC Street, XYZ City, ABC Country",
//   01004813734,
//   "mostafashawky100000@gmail.com",
//   ["html", "css", "javascript"],
// ];

// const [myName, myAge, myAddress, myPhone, myEmail, mySkills] = cv;
// console.log(myName, myAge, myAddress, myPhone, myEmail, mySkills);
// const [, , , , , mySkills] = cv;
// console.log(mySkills);

//default values
// const [
//   myName,
//   myAge,
//   myAddress,
//   myPhone,
//   myEmail,
//   mySkills = [],
//   about = "i'm web developer",
// ] = cv;
// console.log(myName, myAge, myAddress, myPhone, myEmail, mySkills, about);

//assigning rest of array to a variable
// const [...rest] = cv;
// console.log(rest);

// const getFullName = () => {
//   return ["mostafa", "shawky"];
// };

// const [...rest] = getFullName();
// console.log(rest);

//swap variables
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);
