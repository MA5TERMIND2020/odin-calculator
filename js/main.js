//Set some Global variables
let num1 = 0;
let tempNum1Array = [];
let num2 = 0;
let tempNum2Array = [];
let savedFirstValue = 0;
let operator = '';
let tempOperatorArray = [];
let operationComplete = false



//Create basic sub-functions for the math ops

function add(num1, num2) {
    let addValue = (num1 + num2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("add", rounded);
    currentScreen.textContent = rounded;
}


function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("subtract", rounded);
    currentScreen.textContent = rounded;
}


function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("multiply", rounded);
    currentScreen.textContent = rounded;
}


function divide(num1, num2) {
    let divideValue = (num1 / num2);
    //Error check for division by zero
    if (divideValue == "Infinity") {
        return alert("Yo... You is Trippin!!!");
        clearScreen();
    } else {
    let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("divide", rounded);
    currentScreen.textContent = rounded;
    }
}


//Use operator variable to determine which function to call

function operate(operator, num1, num2) {
    switch (operator) {
        case "+" :
            console.log("passing through switch +");
            add(num1, num2);
            break;
        case "-" :
            console.log("passing through switch -");
            subtract(num1, num2);
            break;
        case "*" :
            console.log("passing through switch *");
            multiply(num1, num2);
            break;
        case "/" :
            console.log("passing through switch /");
            divide(num1, num2);
            break;
        default:
            alert("Error! Didn't revieve an operator, or type not as expected!");
    }
}


//Calculator advanced features and algo


function runCalculator() {
    
    
    
    numbers.forEach(item => item.addEventListener('click', (e) => {
        savedFirstValue = e.target.textContent;
        console.log("saved first value: ", savedFirstValue);

        if (operationComplete == true) {
            clearScreen();
            tempNum1Array.push(savedFirstValue);
            console.log("show me Array1:", tempNum1Array);
            num1 = tempNum1Array.join("");
            console.log("saved first value is: ", num1);
            currentScreen.textContent = num1;
            operationComplete = false;
            return;
        }

        //Append to num1
        if (tempNum1Array.length <= 18 && operator == "") {
            tempNum1Array.push(savedFirstValue)
            console.log("show me Array1:", tempNum1Array);
            num1 = tempNum1Array.join("");
            console.log("saved first value is: ", num1);
            currentScreen.textContent = num1;
        } else {




        //Append to num2 if multiple numbers are pressed
        tempNum2Array.push(savedFirstValue);
        console.log("show me Array2: ", tempNum2Array);
        num2 = tempNum2Array.join("");
        console.log("num2 is: ", num2);
        currentScreen.textContent = num2;
        }
    }))


    function getOperatorSelection() {
        
        operators.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (operationComplete == true) {
                    savedFirstValue = parseInt(currentScreen.textContent);
                    num1 = savedFirstValue;
                    tempNum1Array = [num1];
                    tempNum2Array = [];
                    tempOperatorArray = [];
                    operator = e.target.textContent;
                    console.log(num1, savedFirstValue, tempNum1Array, "Hello!");
                    operationComplete = false;
                    return;
                }
                
                console.log("hit the operator");
                operator = e.target.textContent;
                console.log(operator);
                tempOperatorArray.push(operator);
                console.log("store temp operator in array for string calcs: ", tempOperatorArray);

                //enable the decimal button if disabled from previous click/use
                if ((tempNum1Array != "") && (tempNum2Array != "")) {
                    num1 = tempNum1Array.join("");
                    num2 = tempNum2Array.join("");
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    let tempOperator = tempOperatorArray[tempOperatorArray.length -2].toString();
                    console.log("Running string calculation now!");
                    operate(tempOperator, num1, num2);
                    let tempStringValue = currentScreen.textContent;
                    console.log("temp string value: ", tempStringValue);
                    console.log("clearing out the arrays and nums now");
                    tempNum1Array = [];
                    tempNum2Array = [];
                    num1 = 0;
                    num2 = 0;
                    console.log("array 1: ", tempNum1Array);
                    console.log("array 2: ", tempNum2Array);
                    console.log("num 1: ", num1);
                    console.log("num2: ", num2);
                    tempNum1Array.push(tempStringValue);
                    num1 = tempNum1Array.join("");
                    console.log("pushed string value to array 1: ", tempNum1Array);

                }
            })
        })
    }

    function RunCalculation() {
        equals.addEventListener('click', () => {
            console.log("time to run the math!", num1, num2, operator);
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            operate(operator, num1, num2);
            operationComplete = true;
        })
    }

    //decimal button
    decimal.addEventListener('click', () => {
        console.log("decimal pressed");
        if (operator == "") {
            console.log("decimal button registered here", decimal.textContent);
            tempNum1Array.push(decimal.textContent);
            console.log("append the decimal to array1: ", tempNum1Array);
            num1 = tempNum1Array.join("");
            currentScreen.textContent = num1;
            document.getElementById("decimal").disabled = true;
            console.log("num1 decimal button should be disabled now");
        } else {
            console.log("decimal button registered here", decimal.textContent);
            tempNum2Array.push(decimal.textContent);
            console.log("append the decimal to array2: ", tempNum2Array);
            num2 = tempNum2Array.join("");
            currentScreen.textContent = num2;
            document.getElementById("decimal").disabled = true;
            console.log("num1 decimal button should be disabled now");
        }
    })

    getOperatorSelection();
    RunCalculation();

}



//Create a reference to the DOM elements that we want to work with
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.back');
const numbers = document.querySelectorAll('.number');
const decimal = document.querySelector('.dot');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');

clear.addEventListener('click', clearScreen)

function clearScreen() {
currentScreen.textContent = 0.00;
num1 = 0;
tempNum1Array = [];
num2 = 0;
tempNum2Array = [];
savedFirstValue = 0;
operator = '';
tempOperatorArray = [];
console.log("calculator cleared!")
}

runCalculator();