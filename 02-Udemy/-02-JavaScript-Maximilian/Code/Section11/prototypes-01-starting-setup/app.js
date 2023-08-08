// practice with constructors functions
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

// or we can use the old way
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greeting = function () {
//     console.log(`My name is ${this.name} and I am ${this.age}`);
//   };
// }

const person1 = new Person("Shawky", 21);
const person2 = new Person("Mostafa", 21);
console.log(person1);
person1.greeting();
person2.greeting();
console.log(person1.__proto__ === person2.__proto__);
