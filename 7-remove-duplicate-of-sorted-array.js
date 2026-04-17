// Two-Pointer technique.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // If the array is empty, there are 0 unique elements
    if (nums.length === 0) return 0;

    // 'k' is our "slow" pointer. 
    // It represents the index of the last unique element found.
    let k = 0;

    // 'i' is our "fast" pointer.
    // It iterates through the array starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the last unique element
        if (nums[i] !== nums[k]) {
            // Move the slow pointer forward
            k++;
            // Update the position with the new unique element
            nums[k] = nums[i];
        }
    }

    // Return k + 1 because k is an index (0-based)
    return k + 1;
};

// Logic & Explanation
// Because the array is sorted, we don't need to check every previous number to see if the current one is a duplicate; we only need to compare it to the last unique element we placed.

// Initialize: We start k at 0 because the first element is always unique by default.

// Iterate: The i pointer moves from index 1 to the end of the array.

// Compare:

// - If nums[i] is the same as nums[k], it's a duplicate. We do nothing and keep moving i.

// - If nums[i] is different from nums[k], it means we've found a new unique number.

// Update: When a new unique number is found, we increment k and write nums[i] into that new spot.
