/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length;
    // We start with -1 because the last element always becomes -1
    let maxSoFar = -1;

    // Iterate from the last element to the first
    for (let i = n - 1; i >= 0; i--) {
        // Save the current value before we overwrite it
        let currentValue = arr[i];
        
        // Replace current element with the max found to its right
        arr[i] = maxSoFar;
        
        // Update the maxSoFar for the next element to the left
        if (currentValue > maxSoFar) {
            maxSoFar = currentValue;
        }
    }

    return arr;
};

// Logic & Explanation
// Imagine you are standing at the end of the array and walking toward the beginning.

// 1/ Initialize: We set a variable maxSoFar to -1. This represents the "greatest element to the right" for the very last item.

// 2. The Overwrite: At each step i, the requirement is to replace arr[i] with the largest value found to its right. Since we are moving backwards, maxSoFar is that value.

// 3. The "Temp" Save: Before we overwrite arr[i], we must store its original value in a temporary variable (currentValue). Why? Because that number might be the new "greatest" for the elements even further to the left.

// 4. Update Max: We compare the original value we just saved with our current maxSoFar and update it if the saved value is larger.