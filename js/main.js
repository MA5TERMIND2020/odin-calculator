//Set some Global variables
let operator = '';
let previousValue = '';
let currentValue = '';

//Create a reference to the DOM elements that we want to work with
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.back');
const numbers = document.querySelectorAll('.number');
const decimal = document.querySelector('.dot');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');


/*Add an Event Listener to the Number buttons that updates the currentValue variable
 and displays it on the screen if it is not longer than 10 digits.*/
numbers.forEach(item => item.addEventListener('click', (e) => {
    if (currentValue.length <= 18) {
        currentValue += e.target.textContent;
    currentScreen.textContent = currentValue;
    }
}))

//Add an Event Listener to the Decimal button, so that as long as no decimal has already been used, it will add the decimal to the currentValue."
decimal.addEventListener('click', (e) => {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
})

/*Add an Event Listener to the Operator buttons, so that if there is no value already in operator, it updates the operator variable, sets the
 previousValue equal to the currentValue, sets the previousScreen.textContent to the previousValue and the operator, sets the
 currentScreen.textContent equal to the currentValue, and finally empties the contents of currentValue to get ready for new input.*/
operators.forEach(item => item.addEventListener('click', (e) => {
    if (!currentValue.includes('-' || '+' || '*' || '/') && !previousValue.includes('-' || '+' || '*' || '/')) {
    operator = e.target.textContent;
    previousValue = currentValue;
    previousScreen.textContent += previousValue + ' ' + operator;
    currentValue = '';
    currentScreen.textContent = currentValue;
    
    }
}))

/*Add an Event Listener to the Clear button that empties the Global variables and clears the screen.*/
clear.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = '';
    currentScreen.textContent = '';
})

/*Add an Event Listener for the Backspace button.*/
backspace.addEventListener('click', (e) => {
    
    currentValue = currentValue.slice(0, -1);
    currentScreen.textContent = currentValue;
})

/*Add an Event Listener to the Equals button that calculates the expression and then displays the result on the screen as long as it is 15
 characters or less.*/
equals.addEventListener('click', () => {
    if (currentValue != '' && previousValue != '') {
        previousValue = Number(previousValue);
        currentValue = Number(currentValue);
    if (operator === "+") {
            previousValue += currentValue;
    }
        else if (operator === "-") {
            previousValue -= currentValue
        }
        else if (operator === "*") {
            previousValue *= currentValue
        }
        else {
            previousValue /= currentValue
        }

        previousValue = (Math.round(previousValue * 1000) / 1000);

        previousValue = previousValue.toString();
        currentValue = previousValue.toString();
        previousScreen.textContent = '';
    if (previousValue.length > 15) {
        currentScreen.textContent = "Too Large to Show!"
    }
        else {
        currentScreen.textContent = previousValue;
        }
    }    
})