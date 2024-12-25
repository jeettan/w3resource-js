const digitSum = (num) => {
  let digit_sum = 0; // Initialize sum of digits variable
  while (num) { // Loop to calculate the sum of digits
    digit_sum += num % 10; // Add the last digit to the sum
    console.log("digital_sum", digit_sum)
    num = Math.floor(num / 10); // Remove the last digit from the number
    console.log("num", num)
  }
  return digit_sum; // Return the sum of digits
};

console.log(digitSum(45))