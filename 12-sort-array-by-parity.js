var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        // If left is odd and right is even, swap them
        if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
        
        // Move left forward if it's pointing to an even number
        if (nums[left] % 2 === 0) {
            left++;
        }
        
        // Move right backward if it's pointing to an odd number
        if (nums[right] % 2 !== 0) {
            right--;
        }
    }
    
    return nums;
};

// Logic
// 1. Initialize left at 0 and right at the end of the array.

// 2. While left < right:

// - If nums[left] is even, it's already in the correct section, so move left forward.

// - If nums[right] is odd, it's already in the correct section, so move right backward.

// - If nums[left] is odd AND nums[right] is even, swap them, then move both pointers.