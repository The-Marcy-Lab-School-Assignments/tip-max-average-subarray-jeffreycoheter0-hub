/**
 * Brute Force Solution
 * 
 * Time Complexity: 
 * Space Complexity:
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    // create a variable to save the maximum average in
    let maxAverage = -Infinity;

    // Loop through the array; to create k length subarrays
    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0; // create a sum variable
        for (let j = i; j < i + k; j++) {
            // iterating through the elements in the current sub array
            sum += nums[j];
        }

        const average = sum / k; // after a sum of subarray was created, we can compare it with max
        if (average > maxAverage) {
            maxAverage = average;
        }
    }

    return maxAverage;
}

module.exports = findMaxAverage;

