
const inputs = document.querySelectorAll('input[name="state"]')
const displayInput = document.getElementById('display')
const keys = document.querySelectorAll('button')

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

    // Numbers
    if (value !== undefined) {
      calculation += value
      displayInput.value = thousandsComma(calculation)
    }

    // Operators
    else if (type && !["reset", "=", "del"].includes(type)) {

      // convert x to * for JS math
      if (type === "x") {
        calculation += "*"
        displayInput.value += "x"
      } else {
        calculation += type
        displayInput.value += type
      }

    }

    // Equals
    else if (type === "=") {
      equals()
    }

    // Reset
    else if (type === "reset") {
      reset()
    }

    // Delete
    else if(type=="del") {
      calculation = calculation.slice(0,-1)
      displayInput.value = thousandsComma(displayInput.value.slice(0, -1))
    }
  })
})

// helper function 
function thousandsComma(val){
return val.replace(/\d+(\.\d+)?/g, (num) => Number(num).toLocaleString())
}

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
  try {
    const result = eval(calculation)
    calculation = result.toString()
    displayInput.value = thousandsComma(calculation)
  } catch {
    displayInput.value = "Error"
  }
}

function reset(){
  calculation = ''
  displayInput.value = ""
}

