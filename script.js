console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;





// Query selectors for all buttons and scooters go here
const pepperoniScooter = document.querySelector("#pepperoni-scooter");
const veggieScooter = document.querySelector("#veggie-scooter");
const bbqScooter = document.querySelector("#bbq-scooter");


// Write the function that moves the pepperoni scooter forward
const movePepperoni = () => {
  pepperoni_step += 1;
  shift(pepperoniScooter, pepperoni_step);
  checkWinner();
};
// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function



// Write the function that moves the veggie scooter forward

const moveVeggie = () => {
  veggie_step += 1;
  shift(veggieScooter, veggie_step);
  checkWinner();
}


// Write the function that moves the bbq scooter forward

const moveBbq = () => {
  bbq_step += 1;
  shift(bbqScooter, bbq_step);
  checkWinner();
}   

// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found
const checkWinner = () => {
  if (pepperoni_step === 7) {
    alert("Pepperoni Scooter Wins!");
    disableButtons();
  } else if (veggie_step === 7) {
    alert("Veggie Scooter Wins!");
    disableButtons();
  } else if (bbq_step === 7) {
    alert("BBQ Scooter Wins!");
    disableButtons();
  }



// Add event listeners for each button
// Each button should trigger its own movement function
const disableButtons = () => {
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
};
}
document.querySelector("#pepperoni-button").addEventListener("click", movePepperoni);
document.querySelector("#veggie-button").addEventListener("click", moveVeggie);
document.querySelector("#bbq-button").addEventListener("click", moveBbq);
