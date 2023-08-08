// // First, we select the h1 element and assign it to a variable called h1
// const h1 = document.querySelector("h1");

// // Next, we change the text content of the h1 element to "Hello World!"
// h1.textContent = "Hello World!";

// // Then, we change the color of the text to red
// h1.style.color = "red";

// // Then, we change the font size of the text to 50px
// h1.style.fontSize = "50px";

// // Next, we select the last li element and assign it to a variable called li
// const li = document.querySelector("li:last-of-type");

// // Then, we change the text content of the last li element to "I'm the last one! (changed!)"
// li.textContent = li.textContent + " (changed!)";

// // Then, we select the body element and assign it to a variable called body
// const body = document.querySelector("body");

// // Next, we select all li elements and assign them to a variable called listItem
// const listItem = document.querySelector("li");

// // Then, we loop through all list items and log them to the console
// for (const li of listItem) {
//   console.log(li);
// }

// // Create a list item element and store it in a variable
// const newList = document.createElement("li");

// // Store the unordered list element in a variable
// const ul = document.querySelector("ul");

// // Append the list item to the unordered list
// ul.appendChild(newList);

// // Change the text content of the list item
// newList.textContent = "Item 6";

const redButton = document.querySelector(".red"); // find the red button
const yellowButton = document.querySelector(".yellow"); // find the yellow button
const greenButton = document.querySelector(".green"); // find the green button
const visible = document.querySelector(".visibility"); // find the visibility button

const section = document.querySelector("section"); // find the section

redButton.addEventListener("click", () => {
  // when the red button is clicked
  section.className = "red-bg"; // change the background color to red
});

yellowButton.addEventListener("click", () => {
  // when the yellow button is clicked
  section.className = "yellow-bg"; // change the background color to yellow
});

greenButton.addEventListener("click", () => {
  // when the green button is clicked
  section.className = "green-bg"; // change the background color to green
});

visible.addEventListener("click", () => {
  // when the visibility button is clicked
  section.className = "hidden"; // change the class name to hidden
});
