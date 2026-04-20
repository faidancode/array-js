// Two Pointer

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 'lastNonZeroFoundAt' is our "write" pointer
    let lastNonZeroFoundAt = 0;

    // 'cur' is our "read" pointer
    for (let cur = 0; cur < nums.length; cur++) {
        // If the current element is not a zero
        if (nums[cur] !== 0) {
            // Swap the elements at the write and read pointers
            // This moves the non-zero element forward and a zero backward
            [nums[lastNonZeroFoundAt], nums[cur]] = [nums[cur], nums[lastNonZeroFoundAt]];
            
            // Move the write pointer forward
            lastNonZeroFoundAt++;
        }
    }
};

// Logic & Explanation

// 1.The "Write" Pointer (lastNonZeroFoundAt): This pointer keeps track of where the next non-zero element should be placed.

// 2.The "Read" Pointer (cur): This pointer scans the array from left to right.

// 3.The Swap:

// - Every time the read pointer finds a non-zero number, it swaps it with the element at the write pointer.

// - Because the write pointer only advances when a non-zero is found, it will eventually point to a zero (or stay at the same spot if no zeroes have been encountered yet).

// - Swapping ensures that non-zeroes move to the front and zeroes naturally get "pushed" to the back.