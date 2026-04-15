// The Strategy
// There are two common ways to count digits in an integer:

// String Conversion: Convert the number to a string and check its .length.

// Mathematical Approach: Use logarithms or repeated division by 10.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigitCount = 0;

  for (let num of nums) {
    // Convert number to string to easily count digits
    if (num.toString().length % 2 === 0) {
      evenDigitCount++;
    }
  }

  return evenDigitCount;
};
