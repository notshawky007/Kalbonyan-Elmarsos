const task3Element = document.getElementById("task-3");

function massage() {
  alert("hello guys");
}
// massage();

function massage2(name) {
  alert("hi  " + name);
}
// massage2(" Mostafa");

function combine(m1, m2, m3) {
  const combineMassage = `${m1} ${m2} ${m3}`;
  return combineMassage;
}
const combineStr = combine("hi", "guys", "i'm");
alert(combineStr);
console.log(combineStr);

task3Element.addEventListener("click", massage);
