function trailingZeros(n) {
  let count = 0;
  let powerOfFive = 5;
  while (n >= powerOfFive) {
    count += Math.floor(n / powerOfFive);
    powerOfFive *= 5;
  }
  return count;
}

document.getElementById('calculateBtn').addEventListener('click', () => {
  const input = document.getElementById('numberInput').value;
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
  const number = parseInt(input, 10);

  resultDiv.textContent = '';
  errorDiv.textContent = '';

  if (isNaN(number) || number < 0 || number > 10000) {
    errorDiv.textContent = 'Please enter a valid non-negative integer (0 to 10,000).';
    return;
  }

  const zeros = trailingZeros(number);
  resultDiv.textContent = `The number of trailing zeros in ${number}! is ${zeros}.`;
});
