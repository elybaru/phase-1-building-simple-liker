// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal")
modal.className = "hidden"

// Error message
function displayError(error) {
  setTimeout(modal.classList.remove("hidden"), 3000)
  const errorMessage = document.querySelector("#modal-message")
  errorMessage.innerText = error
}


// Event listeners


const like = document.getElementsByClassName("like-glyph")
// console.log(like)
Array.from(like).forEach(function (element) {
  // console.log(element)
  element.addEventListener("click", glyphClick)
})


function glyphClick(event) {
  mimicServerCall()
    .then(resp => console.log(resp))
    .catch(error => displayError(error))
  if (event.target.className === "activated-heart") {
    event.target.className = ""
    event.target.innerText = EMPTY_HEART
  } else {
    event.target.className = "activated-heart"
    event.target.innerText = FULL_HEART
  }
}


// Event handlers

// function glyphClick(event) {
//   console.log(event)
//   if (event.target.className === "activated-heart") {
//     emptyHeartClick(event)
//   } else {
//     fullHeartClick(event)
//   }
// }

// function emptyHeartClick(event) {
//   mimicServerCall()
//     .then(resp => console.log(resp))
//     .catch(error => displayError(error))
//   event.target.className = ""
//   event.target.innerText = EMPTY_HEART
// }

// function fullHeartClick(event) {
//   mimicServerCall()
//     .then(resp => console.log(resp))
//     .catch(error => displayError(error))
//   event.target.className = "activated-heart"
//   event.target.innerText = FULL_HEART

// }

// function serverCall() {
//   mimicServerCall()
//     .then(resp => console.log(resp))
//     .catch(error => displayError(error))
// }

// DOM render functions



// Page load functions

// mimicServerCall()
//   .then(resp => console.log(resp))
//   .catch(error => displayError(error))




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
