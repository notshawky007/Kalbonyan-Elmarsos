//sets and maps

//sets are like arrays but they dont allow duplicates
//sets are iterable
// const ids = new Set([1, 2, 3, 4, 5]);
// ids.add(6);
// console.log(ids);

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }
//or
// for (const entry of ids.values()) {
//   console.log(entry);
// }

//maps are key value pairs
// const person1 = { name: "mostafa" };
// const person2 = { name: "shawky" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

// console.log(personData);

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }
// for (const value of personData.values()) {
//   console.log(value);
// }

//weak sets and weak maps
//weak sets and weak maps are similar to sets and maps but they dont prevent garbage collection

// let person = { name: "mostafa" };
// const persons = new WeakSet();
// persons.add(person);
// console.log(persons);
