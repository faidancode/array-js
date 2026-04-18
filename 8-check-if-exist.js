/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // Step 1: Sort the array to enable Binary Search
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let target = 2 * arr[i];
        let left = 0;
        let right = arr.length - 1;

        // Step 2: Binary Search for the target
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            // Found the target AND it's not the same index we are currently at
            if (arr[mid] === target && mid !== i) {
                return true;
            }
            
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};

// Logic & Explanation

// 1. Sorting: We sort the array in $O(n \log n)$ time. This is the prerequisite for Binary Search.
// 2. The Loop: We iterate through each element arr[i].
// 3. The Target: For each element, we calculate the "Double" ($2 \times arr[i]$).
// 4. Binary Search: Instead of scanning the whole array to find that double (which would be $O(n^2)$ total), we use Binary Search to find it in $O(\log n)$ time.
// 5. The i != j Constraint: If the target we find is at the same index i (which only happens if the value is 0), we must ignore it and keep looking, as the problem requires two distinct indices.