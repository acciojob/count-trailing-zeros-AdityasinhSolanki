function trailingZeros(n) {
  let count = 0;
  let powerOfFive = 5;
  while (n >= powerOfFive) {
    count += Math.floor(n / powerOfFive);
    powerOfFive *= 5;
  }
  return count;
}

const input = prompt("Enter a non-negative integer:");
const number = parseInt(input, 10);

if (isNaN(number) || number < 0) {
  alert("Please enter a valid non-negative integer.");
} else {
  const result = trailingZeros(number);
  alert(`The number of trailing zeros in ${number}! is ${result}.`);
}
