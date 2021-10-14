// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal")
modal.className = "hidden"

// Error message
function displayError(error) {
  modal.classList.remove("hidden")
  document.querySelector("#modal-message").innerText = error
}


// Event listeners


const like = document.getElementsByClassName("like-glyph")
Array.from(like).forEach(function (element) {
  element.addEventListener("click", glyphClick)
})





// Event handlers

function glyphClick() {
  if (like.className = "activated-heart") {
    fullHeartClick()
  } else {
    emptyHeartClick()
  }
}

function emptyHeartClick(event) {
  mimicServerCall()
    .then(resp => console.log(resp))
    .catch(error => displayError(error))
  console.log(event)
  // like.className = "activated-heart"
}

function fullHeartClick(event) {
  mimicServerCall()
    .then(resp => console.log(resp))
    .catch(error => displayError(error))


}


// DOM render functions



// Page load functions

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
