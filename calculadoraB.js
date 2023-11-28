
let currentInput = '';
let operator = '';
let previousInput = '';

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function calculateResult() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
  }
  clearDisplay();
  currentInput = result.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput || '0';
}
