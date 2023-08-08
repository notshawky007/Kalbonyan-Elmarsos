const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.querySelector(".modal");
// const addMovieModal = document.body.children[1];
// const addMovieModal = document.body.firstElementChild.nextElementSibling;

const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild;

const backdrop = document.getElementById("backdrop");
// const backdrop = document.querySelector("#backdrop");
// const backdrop = document.querySelector("div");
// const backdrop = document.body.firstElementChild;
// const backdrop = document.body.children[0];

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
// const cancelAddMovieButton = document.querySelector(".btn--passive");
// const cancelAddMovieButton = document.getElementsByClassName("btn--passive");
const addMovieButton = cancelAddMovieButton.nextElementSibling;
// const addMovieButton = document.querySelector(".btn--success");
// const addMovieButton = addMovieModal.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

// Function to toggle backdrop visibility
const toggleBackdrop = () => {
  // Add the "visible" class to the backdrop if it's not there, and remove it if it is there
  backdrop.classList.toggle("visible");
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  // find the movie we want to delete
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  // delete the movie from the movies array
  movies.splice(movieIndex, 1);
  // delete the movie from the UI
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  cancelMovieDeletion();
  updateUI();
};

const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelAddMovieButton.removeEventListener("click", cancelMovieDeletion);

  cancelDeletionButton.addEventListener("click", cancelMovieDeletion);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  // Create a new list item element
  const newMovieElement = document.createElement("li");
  // Set CSS class for the list item
  newMovieElement.className = "movie-element";
  // Set the content of the list item
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  // Get the root element for the list of movies
  const listRoot = document.getElementById("movie-list");
  // Add the new list item to the list of movies
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  // Function to close the modal
  addMovieModal.classList.remove("visible");
};

const showMovieModL = () => {
  // Function to show the modal
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const addMovieHandler = () => {
  // get user input
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // validate user input
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

// Function to cancel adding a movie
const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

// Function to close modal
const closeMovie = () => {
  showMovieModL();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletion();
  clearMovieInput();
};

// Add event listener to the button that calls the toggle function
startAddMovieButton.addEventListener("click", showMovieModL);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
addMovieButton.addEventListener("click", addMovieHandler);
