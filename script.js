

const sevenButton = document.querySelector('#seven')
const eightButton = document.querySelector('#eight')
const nineButton = document.querySelector('#nine')
const divideButton = document.querySelector('#divide')
const fourButton = document.querySelector('#four')
const fiveButton = document.querySelector('#five')
const sixButton = document.querySelector('#six')
const multiplyButton = document.querySelector('#multiply')
const oneButton = document.querySelector('#one')
const twoButton = document.querySelector('#two')
const threeButton = document.querySelector('#three')
const subtractButton = document.querySelector('#subtract')
const zeroButton = document.querySelector('#zero')
const decimalButton = document.querySelector('#decimal')
const plusButton = document.querySelector('#plus')
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear')
const percentageButton = document.querySelector('#percentage')
const backspaceButton = document.querySelector('#backspace')


let variable = ''
let num1 = ''
let num2 = ''

let answer = '' 
let mathOperator = ''


i = 0


let display = document.getElementById('calc-screen')
let numOnScreen = document.createElement('p')


//Event Listeners for Number Buttons
sevenButton.addEventListener('click', () => {
  console.log('Seven')

if (variable === ''){
  variable = '7';
}
else if (variable !== ''){
  variable = variable + '7';
}
numOnScreen.innerText = (variable)
display.appendChild(numOnScreen)
})


eightButton.addEventListener('click', () => {
  console.log('Eight')
  if (variable === ''){
    variable = '8';
  }
  else if (variable !== ''){
    variable = variable + '8';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)

})

nineButton.addEventListener('click', () => {
  console.log('Nine')

  if (variable === ''){
    variable = '9';
  }
  else if (variable !== ''){
    variable = variable + '9';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)

})

fourButton.addEventListener('click', () => {
  console.log('Four')
  if (variable === ''){
    variable = '4';
  }
  else if (variable !== ''){
    variable = variable + '4';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)

})

fiveButton.addEventListener('click', () => {
  console.log('Five')
  if (variable === ''){
    variable = '5';
  }
  else if (variable !== ''){
    variable = variable + '5';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)

})

sixButton.addEventListener('click', () => {
  console.log('Six')
  if (variable === ''){
    variable = '6';
  }
  else if (variable !== ''){
    variable = variable + '6';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)


})

oneButton.addEventListener('click', () => {
  console.log('One')
  if (variable === ''){
    variable = '1';
  }
  else if (variable !== ''){
    variable = variable + '1';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)


})


twoButton.addEventListener('click', () => {
  console.log('Two')
  if (variable === ''){
    variable = '2';
  }
  else if (variable !== ''){
    variable = variable + '2';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)


})


threeButton.addEventListener('click', () => {
  console.log('Three')
  if (variable === ''){
    variable = '3';
  }
  else if (variable !== ''){
    variable = variable + '3';
  }
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)
})


zeroButton.addEventListener('click', () => {
  console.log('Zero')
  if (variable === ''){
    variable = '0';
  }
  else if (variable === '0'){
    variable = '0'
  }
  else if (variable !== ''){
    variable = variable + '0';
  }
    numOnScreen.innerText = (variable)
    display.appendChild(numOnScreen)
})


//Math Operator functions

plusButton.addEventListener('click', () => {
  if (mathOperator === ''){
    mathOperator = "+"
    numOnScreen.innerText = (mathOperator)
    display.appendChild(numOnScreen)
  }

  if (num1 === ''){
    num1 = variable
    variable = ''
  }
  else if (num1 !== '' && num2 === ''){
    num2 = variable
    answer = eval(num1 + mathOperator + num2)
    variable = ''
    num1 = answer
    num2 = ''
    numOnScreen.innerText = (answer)
    display.appendChild(numOnScreen)
  }
  mathOperator = "+"

console.log(num1,num2)

})

subtractButton.addEventListener('click', () => {
  if (mathOperator === ''){
    mathOperator = "-"
    numOnScreen.innerText = (mathOperator)
    display.appendChild(numOnScreen)
  }
  
  if (num1 === ''){
    num1 = variable
    variable = ''
  }
  else if (num1 !== '' && num2 === ''){
    num2 = variable
    answer = eval(num1 + mathOperator + num2)
    variable = ''
    num1 = answer
    num2 = ''
    numOnScreen.innerText = (answer)
    display.appendChild(numOnScreen)
  }
  mathOperator = "-"

console.log(num1,num2)

})

multiplyButton.addEventListener('click', () => {
  if (mathOperator === ''){
    mathOperator = "*"
    numOnScreen.innerText = (mathOperator)
    display.appendChild(numOnScreen)
  }
  
  if (num1 === ''){
    num1 = variable
    variable = ''
  }
  else if (num1 !== '' && num2 === ''){
    num2 = variable
    answer = eval(num1 + mathOperator + num2)
    variable = ''
    num1 = answer
    num2 = ''
    numOnScreen.innerText = (answer)
    display.appendChild(numOnScreen)
  }
  mathOperator = "*"

console.log(num1,num2)

})


divideButton.addEventListener('click', () => {
  if (mathOperator === ''){
    mathOperator = "/"
    numOnScreen.innerText = (mathOperator)
    display.appendChild(numOnScreen)
  }
  
  if (num1 === ''){
    num1 = variable
    variable = ''
  }
  else if (num1 !== '' && num2 === ''){
    num2 = variable
    answer = eval(num1 + mathOperator + num2)
    variable = ''
    num1 = answer
    num2 = ''
    numOnScreen.innerText = (answer)
    display.appendChild(numOnScreen)
  }
  mathOperator = "/"

console.log(num1,num2)

})

equalsButton.addEventListener('click', () => {
  if (mathOperator === ''){
    return;
  }

  if (num1 === ''){
    num1 = variable
    variable = ''
  }
  else if (num1 !== '' && num2 === ''){
    num2 = variable
    answer = eval(num1 + mathOperator + num2)
    variable = ''
    num1 = answer
    num2 = ''
    numOnScreen.innerText = (answer)
    display.appendChild(numOnScreen)
  }

  mathOperator = ''

  answer = eval(num1 + mathOperator + num2)
  numOnScreen.innerText = (answer)
  display.appendChild(numOnScreen)
  num1 = answer

  console.log(answer)
  console.log(equation)

})

clearButton.addEventListener('click', () => {
  num1 = ''
  num2 = ''
  variable = ''
  answer = ''
  numOnScreen.innerText = ('AC')
  display.appendChild(numOnScreen)
})

decimalButton.addEventListener('click', () =>{
  if (variable.includes('.')){
    return;
  }
  variable = variable + '.'
  numOnScreen.innerText = (variable)
  display.appendChild(numOnScreen)

})


backspaceButton.addEventListener('click', () => {
  if (variable !== ''){
    variable = variable.substring(0, variable.length -1)
    numOnScreen.innerText = (variable)
    display.appendChild(numOnScreen)
  }
})