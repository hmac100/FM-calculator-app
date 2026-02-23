
const inputs = document.querySelectorAll('input[name="state"]')

const displayInput = document.getElementById('display')
const keys = document.querySelectorAll('button')
// let operator = ''
// let firstValue = ''
// let secondValue = ''
let calculation = []


// |=========== Theme Toggle =============|
inputs.forEach(input => {
  input.addEventListener('change', () => {
    document.body.className = `theme-${input.value}`
  }) 
})

// |============ Keys =============|

keys.forEach(key => {
  key.addEventListener('click', () => {

    const { value, type } = key.dataset

    // If number clicked
    if (value !== undefined) {

      if (!operator) {
        firstValue += value   
      } else {
        secondValue += value
      }
        displayInput.value = firstValue + operator + secondValue
    }

    // Reset
    else if (type === "reset") {
      reset()
    }

    // Equals
    else if (type === "=") {
      equals()
    }

    // Operators
    else if (type && type!== "reset" && type!== "="&& type!== "del" ){
      operator = type
      displayInput.value += type
    }

  })
})

function add(a, b) {
  return Number(a) + Number(b)
}

function minus(a, b) {
  return Number(a) - Number(b)
}
function multiply(a, b) {
  return Number(a) * Number(b)
}

function divide(a, b) {
  return Number(a) / Number(b)
}

function equals() {

  let result

  if (operator === "+") {
    displayInput.value = operator
    result = add(firstValue, secondValue)
  }
  if(operator === "-") {
     displayInput.value = operator
     result = minus(firstValue, secondValue)
  }
  if(operator === "x") {
     displayInput.value = operator
     result = multiply(firstValue, secondValue)
  }
  if(operator === "/") {
     displayInput.value = operator
     result = divide(firstValue, secondValue)
  }

  displayInput.value = result

}

function reset(){
  firstValue = ''
  secondValue = ''
  operator = ''
  displayInput.value = ""
}

