//Set some Global variables
let operator = '';
let previousValue = '';
let currentValue = '';

//Create a reference to the DOM elements that we want to work with
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const numbers = document.querySelectorAll('.number');
const dot = document.querySelector('.dot');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');


/*Add an Event Listener to the Number buttons that updates the currentValue variable
 and displays it on the screen if it is not longer than 10 digits.*/
numbers.forEach(item => item.addEventListener('click', (e) => {
    if (currentValue.length <= 10) {
        currentValue += e.target.textContent;
    currentScreen.textContent = currentValue;
    }
}))

/*Add an Event Listener to the Operator buttons, so that if there is no value already in operator, it updates the operator variable, sets the
 previousValue equal to the currentValue, sets the previousScreen.textContent to the previousValue and the operator, sets the
 currentScreen.textContent equal to the currentValue, and finally empties the contents of currentValue to get ready for new input.*/
operators.forEach(item => item.addEventListener('click', (e) => {
    if (operator == 0) {
    operator = e.target.textContent;
    previousValue = currentValue;
    previousScreen.textContent = previousValue + '' + operator;
    currentScreen.textContent = currentValue;
    currentValue = '';
    }
}))