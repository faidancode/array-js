// The Strategy
// Initialize: Set maxCount to 0 and currentCount to 0.

// Iterate: Loop through each number in the array.

// Check for 1: If the current number is 1, increment currentCount.

// Check for 0: If the current number is 0, compare currentCount with maxCount. Update maxCount if the current streak is larger, then reset currentCount to 0.

// Final Check: After the loop, perform one last comparison to ensure a streak ending at the very last index is counted.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      // Increment the current streak
      currentCount++;
    } else {
      // Streak broken: update maxCount and reset currentCount
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      currentCount = 0;
    }
  }

  // Return the larger of the two (handles streaks ending at the last index)
  return Math.max(maxCount, currentCount);
};
