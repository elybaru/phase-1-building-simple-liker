// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal")
modal.className = "hidden"


// Event listeners


console.log(document.querySelectorAll(".like"))

// Error message
function displayError(error) {
  modal.classList.remove("hidden")
  modal.innerText = error
}

// Event handlers

// DOM render functions

// Fetch requests




mimicServerCall()
  .then(resp => console.log(resp))
  .catch(error => displayError(error))




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
