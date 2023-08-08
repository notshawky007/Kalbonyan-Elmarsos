let defaultGreet = "Hi";
const sayHello5 = (name, greet = defaultGreet) => {
  console.log(greet + " " + name);
};
sayHello5("Shawky");
sayHello5("Hi", "Shawky");