function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function allProblems(number1, number2) {
    results = add(number1, number2);
    resultsSubtract = subtract(number1, number2)
    resultsMultiply = multiply(number1, number2)
    resultsDivide = divide(number1, number2)
    return "The addition of your numbers equals " + results + "\n" + "The subtraction of your numbers equals " + resultsSubtract + "\n" + "The multiplication of your numbers equals " + resultsMultiply + "\n" + "The dividing of your numbers equals " + resultsDivide;
}

function allProblemsChallenge(number1, number2) {
    results = add(number1, number2);
    resultsSubtract = subtract(number1, number2)
    resultsMultiply = multiply(number1, number2)
    resultsDivide = divide(number1, number2)
    return number1 + " + " + number2 + " = " + results + "\n" + number1 + " - " + number2 + " = " + resultsSubtract + "\n" + number1 + " * " + number2 + " = " + resultsMultiply + "\n" + number1 + " / " + number2 + " = " + resultsDivide;
}

const number1 = prompt("Enter a number:");
const number2 = prompt("Enter another number:");

alert(allProblemsChallenge(parseInt(number1), parseInt(number2)));

alert(allProblems(parseInt(number1), parseInt(number2)));


