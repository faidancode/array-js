/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let zeros = 0;
  let n = arr.length - 1;

  // 1. Count the zeros that will actually be duplicated within the bounds
  for (let i = 0; i <= n - zeros; i++) {
    if (arr[i] === 0) {
      // Edge case: if a zero is at the very last position of the
      // "virtual" expanded array, it can't be duplicated.
      if (i === n - zeros) {
        arr[n] = 0;
        n--;
        break;
      }
      zeros++;
    }
  }

  // 2. Iterate backwards and shift elements to their new positions
  let lastIndex = n - zeros;
  for (let i = lastIndex; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zeros] = 0;
      zeros--;
      arr[i + zeros] = 0;
    } else {
      arr[i + zeros] = arr[i];
    }
  }
};

// Logic & Explanation

// Pass 1: Calculating the "Shift"
// We first need to determine how many zeros will stay within the array's fixed length after being duplicated. We iterate through the array and count zeros, but we stop when our "virtual" index (current index + number of zeros found so far) reaches the end of the array.

// Pass 2: The Reverse Shift
// We start from the end of the original data and move it to its new "shifted" position.

// If the element is not a zero, we simply move it to i + zeros.

// If the element is a zero, we write it twice (at i + zeros and i + zeros - 1) and decrement our zero counter.

// Why backwards?
// If you try to duplicate from the front:
// [1, 0, 2] becomes [1, 0, 0]... and now you've lost the 2 because it was overwritten. By starting from the back, we move elements into the space that "would have been" beyond the array length first, ensuring no data is lost before it's processed.
