var heightChecker = function (heights) {
  // 1. Create a shallow copy of the original array using the spread operator.
  // We need this copy to sort it without modifying the original 'heights'.
  let expected = [...heights];

  let n = expected.length;

  // 2. BUBBLE SORT: Manually sorting the 'expected' array in ascending order.
  for (let i = 0; i < n; i++) {
    // The inner loop compares adjacent elements.
    for (let j = 0; j < n - 1 - i; j++) {
      // If the current element is larger than the next, swap them.
      if (expected[j] > expected[j + 1]) {
        let temp = expected[j];
        expected[j] = expected[j + 1];
        expected[j + 1] = temp;
      }
    }
  }

  // 3. COMPARISON: Compare the original array with the sorted 'expected' array.
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    // If the height at index 'i' doesn't match the sorted height, it's a "mismatch."
    if (heights[i] !== expected[i]) {
      count++;
    }
  }

  // 4. Return the total number of indices where the heights didn't match.
  return count;
};

// Logic Breakdown
// 1. Creating the "Goal" State
// The variable expected represents what the array should look like if everyone stood in the correct height order (non-decreasing). By using [...heights], you ensure that the original data is preserved so you can compare against it later.

// 2. The Sorting Choice (Bubble Sort)
// The nested for loops implement Bubble Sort. While it is easy to write, it is generally the least efficient sorting algorithm.
// - How it works: It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest values "bubble up" to the end of the array with each pass.

// 3. The Counter
// Finally, the code loops through both arrays simultaneously. If heights[i] and expected[i] are different, it means the person at that position is not in the "expected" spot.