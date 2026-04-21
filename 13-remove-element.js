/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 'k' acts as the "slow pointer."
  // It keeps track of the index where the next valid (non-val) element should go.
  let k = 0;

  // 'i' acts as the "fast pointer."
  // It scans through every element in the array.
  for (let i = 0; i < nums.length; i++) {
    // If the current element is NOT the value we want to remove...
    if (nums[i] !== val) {
      // ...move the valid element to the 'k' position.
      nums[k] = nums[i];

      // Increment 'k' to prepare for the next valid element.
      k++;
    }
    // If nums[i] === val, we do nothing, effectively "skipping" it.
  }

  // Return the count of elements that are not equal to 'val'.
  return k;
};

// How It Works (The Logic)

// The goal of this algorithm is to shift all elements that are not equal to val to the front of the array.

// 1.The Filter: As the loop (i) moves through the array, it acts like a filter. It ignores any number that matches val.

// 2. The Compaction: When it finds a "good" number (one that doesn't match val), it writes that number to the k index.

// 3. The Result: After the loop finishes, the first k elements of the array are all the numbers that weren't supposed to be removed. The numbers remaining after index k don't matter.