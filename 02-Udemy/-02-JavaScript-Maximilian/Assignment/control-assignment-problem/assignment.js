// Generate two random numbers between 0 and 1
const randomNumber = Math.random();
const randomNumber2 = Math.random();
console.log(randomNumber, randomNumber2);

// If one of the numbers is greater than 0.7 or both are less than 0.2, alert the user
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert("One of the numbers is greater than 0.7 or both are less than 0.2");
}

// Create an array with numbers from 1 to 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// Loop through the array using a for loop and print each element in the console
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Loop through the array using a while loop and print each element in the console
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Loop through the array using a for-of loop and print each element in the console
for (const el of arr) {
  console.log(el);
}

// Loop through the array in reverse order using a for loop and print each element in the console
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// Loop through the array in reverse order using a while loop and print each element in the console
let j = arr.length - 1;
while (j >= 0) {
  console.log(arr[j]);
  j--;
}

// Loop through the array in reverse order using a for-of loop and print each element in the console
for (const el of arr.reverse()) {
  console.log(el);
}

// Loop through the array using forEach and print each element in the console
arr.forEach(function (element) {
  console.log(element);
});
