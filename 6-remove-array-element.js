/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // k will act as the "write" pointer
    let k = 0;

    // The "i" pointer acts as the "read" pointer
    for (let i = 0; i < nums.length; i++) {
        // If the current element is NOT the value we want to remove
        if (nums[i] !== val) {
            // Move the valid element to the 'k' position
            nums[k] = nums[i];
            // Increment k to prepare for the next valid element
            k++;
        }
    }

    // k represents the count of elements not equal to val
    return k;
};

// Logic & Explanation
// The goal is to keep all "valid" elements (those not equal to val) at the beginning of the array.

// The "Write" Pointer (k): This pointer keeps track of where the next valid element should be placed. It starts at index 0.

// The "Read" Pointer (i): This pointer iterates through every element in the array from start to finish.

// The Filter:

// - Every time the "read" pointer finds a value that is not equal to val, it "writes" that value to the position of the k pointer.

// - Then, k moves forward by one.

// - If the "read" pointer finds a value that is equal to val, it simply skips it (the k pointer stays put).