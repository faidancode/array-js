// The Two-Pointer Mechanics:

// The largest possible squared value is either the square of the smallest (most negative) number or the largest (most positive) number.

// We compare nums[left]**2 and nums[right]**2.

// Whichever is larger gets placed at the end of our result array.

// We then move that specific pointer (left or right) toward the center and repeat the process for the next position (i - 1).


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    // Create a result array of the same length, filled with 0s
    let result = new Array(n);
    
    // Initialize two pointers: one at the start, one at the end
    let left = 0;
    let right = n - 1;
    
    // We fill the result array starting from the last index (largest values)
    for (let i = n - 1; i >= 0; i--) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        
        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++; // Move the left pointer inward
        } else {
            result[i] = rightSquare;
            right--; // Move the right pointer inward
        }
    }
    
    return result;
};