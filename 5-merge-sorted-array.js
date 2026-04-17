/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Pointer for the end of the actual elements in nums1
  let p1 = m - 1;
  // Pointer for the end of nums2
  let p2 = n - 1;
  // Pointer for the very last index of the merged nums1
  let p = m + n - 1;

  // While there are elements in both arrays to compare
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If there are remaining elements in nums2, copy them
  // (If p1 remains, they are already in the correct place)
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};

// Logic & Explanation
// The strategy relies on the fact that both arrays are already sorted.

// 1. Start from the back: We initialize three pointers. p1 at the last valid element of nums1, p2 at the last element of nums2, and p at the absolute end of the nums1 array.

// 2. Compare and Fill: We compare nums1[p1] and nums2[p2]. Whichever is larger gets placed at nums1[p]. We then decrement the pointer for the array we used and the main pointer p.

// 3. Handling Leftovers:

// - If p2 reaches -1 first, we are done. The remaining elements in nums1 are already in their correct sorted positions.

// - If p1 reaches -1 first, we must copy the remaining elements from nums2 into the front of nums1.