const compare = (a, b) => {
  const ageA = a.age;
  const ageB = b.age;
  return ageB - ageA;
};

const names = [
  { name: "mostafa", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Jack", age: 18 },
  { name: "Jill", age: 24 },
  { name: "Joe", age: 21 },
  { name: "Jenny", age: 19 },
  { name: "Jen", age: 23 },
  { name: "mustafa", age: 25 },
  { name: "Jenny", age: 21 },
];

const newNames = names
  .sort(compare)
  .slice(0, 5)
  .filter((el) => el.age > 20)
  .map((el) => (el.name === "mustafa" ? { ...el, name: "Mostafa" } : el));
console.log(newNames);