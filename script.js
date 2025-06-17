function trailingZeros(n) {
  //your JS code hfunction trailingZeros(n) {
    let count = 0;
    let powerOfFive = 5;
    while (n >= powerOfFive) {
        count += Math.floor(n / powerOfFive);
        powerOfFive *= 5;
    }
    return count;
}
// Get input from the user
const input = prompt("Enter a non-negative integer:");
const number = parseInt(input, 10);
// Validate input
if (isNaN(number) || number < 0) {
    alert("Please enter a valid non-negative integer.");
} else {
    const result = trailingZeros(number);
    alert(`The number of trailing zeros in ${number}! is ${result}.`);
}ere. If required.
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
