let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")

const addBtn = document.getElementById("add-btn")
const subtractBtn = document.getElementById("subtract-btn")
const divideBtn = document.getElementById("divide-btn")
const multiplyBtn = document.getElementById("multiply-btn")

let sum = document.getElementById("sum-el")


// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

addBtn.addEventListener("click", add)
    
function add() {
    let firstNum = Number(num1.value)
    let secondNum = Number(num2.value)
    sum.textContent = firstNum + secondNum
}

subtractBtn.addEventListener("click", subtract)

function subtract() {
    let firstNum = Number(num1.value)
    let secondNum = Number(num2.value)
    sum.textContent = firstNum - secondNum
}

divideBtn.addEventListener("click", divide)

function divide() {
    let firstNum = Number(num1.value)
    let secondNum = Number(num2.value)
    sum.textContent = firstNum / secondNum
}