// script.js
let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function performOperation(operator) {
  displayValue += ` ${operator} `;
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue.replace('×', '*').replace('÷', '/'));
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}
