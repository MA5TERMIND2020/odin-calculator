//Set some Global variables
let operator = "";
let previousValue = "";
let currentValue = "";

//Create a reference to the DOM elements that we want to work with
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const numbers = document.querySelectorAll(".number");
const dot = document.querySelector('.dot');
const operators = document.querySelector('.operator');
const equals = document.querySelector('.equals');
const previousScreen = document.querySelector('.previous');
const current = document.querySelector('.current');


//Add an Event Listener to the Number buttons
numbers.forEach((item) => item.addEventListener("click", function(e) {
    handleNumber(e.target.textContent);
}))

function handleNumber(num) {
    console.log(num);
}

