//Set some Global variables
let operator = '';
let previousValue = '';
let currentValue = '';

//Create a reference to the DOM elements that we want to work with
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const numbers = document.querySelectorAll('.number');
const dot = document.querySelector('.dot');
const operators = document.querySelector('.operator');
const equals = document.querySelector('.equals');
const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');


/*Add an Event Listener to the Number buttons that updates the currentValue variable
 and displays it on the screen if it is not longer than 10 digits.*/
numbers.forEach(item => item.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}))

function handleNumber(num) {
    if (currentValue.length <= 10) {
    currentValue += num;
    console.log(num);
    }
}

