/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let date = new Date();
let currentYear = date.getFullYear();
let year = document.querySelector('#year');
year.innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let array = document.querySelector('#array');
array.innerHTML = numbersArray;
/* Output Odds Only Array */
let odd = document.querySelector('#odds');
let oddArray = numbersArray.filter(number => number % 2 !== 0);
odd.innerHTML = oddArray;
/* Output Evens Only Array */
let even = document.querySelector('#evens');
let evenArray = numbersArray.filter(number => number % 2 === 0);
even.innerHTML = evenArray;
/* Output Sum of Org. Array */
let sum = document.querySelector('#sumOfArray');
let sumArray = numbersArray.reduce((sum, number) => sum + number);
sum.innerHTML = sumArray;
/* Output Multiplied by 2 Array */
let multiplied = document.querySelector('#multiplied');
let multiplyArray = numbersArray.map(number => number * 2);
multiplied.innerHTML = multiplyArray;
/* Output Sum of Multiplied by 2 Array */
let sumAndMultiple = document.querySelector('#sumOfMultiplied');
let sumOfMultiplyArray = multiplyArray.reduce((sum, number) => sum + number);
sumAndMultiple.innerHTML = sumOfMultiplyArray;