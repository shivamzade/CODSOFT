// Define variables
let resultField = document.getElementById('result');
let result = '';

// Function to update the result field
function updateResult() {
  resultField.value = result;
}

// Function to clear the result
function clearResult() {
  result = '';
  updateResult();
}

// Function to append a value to the result
function appendValue(value) {
  result += value;
  updateResult();
}

// Function to perform the calculation
function calculate() {
  try {
    result = eval(result);
    updateResult();
  } catch (error) {
    result = 'Error';
    updateResult();
  }
}
