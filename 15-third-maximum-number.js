/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // We initialize with null to represent "no value yet".
  // This avoids conflicts with 0 or negative numbers in the input.
  let first = null;
  let second = null;
  let third = null;

  for (let num of nums) {
    // STEP 1: Ignore the number if we've already recorded it.
    // This ensures we are only looking for "distinct" maximums.
    if (num === first || num === second || num === third) {
      continue;
    }

    // STEP 2: Compare the current number against our top 3.

    // If num is greater than our current 1st place (or 1st is empty)
    if (first === null || num > first) {
      third = second; // 2nd drops to 3rd
      second = first; // 1st drops to 2nd
      first = num; // num takes 1st
    }
    // If num is greater than our current 2nd place (or 2nd is empty)
    else if (second === null || num > second) {
      third = second; // 2nd drops to 3rd
      second = num; // num takes 2nd
    }
    // If num is greater than our current 3rd place (or 3rd is empty)
    else if (third === null || num > third) {
      third = num; // num takes 3rd
    }
  }

  // FINAL STEP: The problem asks for the third maximum.
  // If we never found a third distinct number (third is still null),
  // we must return the absolute maximum (first).
  return third === null ? first : third;
};

// Why this logic is robust:

// 1. The "Distinct" rule: By checking if (num === first || ...) at the start of the loop, we prevent an array like [3, 2, 2, 1] from filling the "top three" slots with 3, 2, 2. It forces the logic to wait until it sees the 1.
// 2. The "Constraint" rule: Because the problem states numbers can be as low as $-2^{31}$, initializing with 0 would fail if the array was [-5, -10, -20]. Using null ensures that even the smallest negative integer will correctly trigger the first === null condition.
// 3.Performance: We only loop through the array once ($O(n)$), and we use a constant amount of memory ($O(1)$) regardless of how large the input array is.
