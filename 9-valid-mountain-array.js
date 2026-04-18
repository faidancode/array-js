/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let n = arr.length;
    let i = 0;

    // 1. Climb up
    // We stop when the next element is not larger than the current
    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    // 2. Check if the peak is valid
    // Peak cannot be the first element (must have an incline)
    // Peak cannot be the last element (must have a decline)
    if (i === 0 || i === n - 1) {
        return false;
    }

    // 3. Climb down
    // We stop when the next element is not smaller than the current
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    // 4. If we reached the end of the array, it's a valid mountain
    return i === n - 1;
};

// Logic & Explanation
// This approach uses a Single Pointer that traverses the array in one pass ($O(n)$):

// The Incline: We move the pointer as long as the next number is strictly greater than the current one. This finds the "peak."
// The Peak Verification:
// - If the pointer is still at index 0, the hiker never went up (no incline).
// - If the pointer is at the last index, the hiker never went down (no decline).
// - Both these cases mean it's not a mountain.
// The Decline: From the peak, we continue moving the pointer as long as the next number is strictly smaller than the current one.
// The Goal: If the mountain is valid, the pointer should end up exactly at the last index of the array.