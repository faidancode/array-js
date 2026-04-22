var sortedSquares = function (nums) {
  const n = nums.length;

  // Create an empty array of the same size to store results
  const result = new Array(n);

  // Initialize two pointers at the boundaries
  let left = 0;
  let right = n - 1;

  // Fill the result array from back to front (largest to smallest)
  for (let i = n - 1; i >= 0; i--) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    // Compare squares at both ends
    if (leftSquare > rightSquare) {
      // If the left square is bigger, put it at index i
      result[i] = leftSquare;
      // Move the left pointer forward
      left++;
    } else {
      // If the right square is bigger (or equal), put it at index i
      result[i] = rightSquare;
      // Move the right pointer backward
      right--;
    }
  }

  return result;
};

// Logic Breakdown

// 1. The Ends are the Heaviest: Since the input is sorted, the largest absolute values (and thus the largest squares) are either at the very beginning (large negative numbers) or the very end (large positive numbers).
// 2. Working Backwards: Instead of trying to find the smallest square first, the code finds the largest square and places it at the end of the result array.
// 3. Two Pointers: * left starts at the beginning ($0$).
// - right starts at the end ($n-1$).
// 4. Comparison: In each step of the loop, you compare the square of the value at left and right. Whichever is bigger gets placed in the current last available slot of result, and that pointer moves inward.