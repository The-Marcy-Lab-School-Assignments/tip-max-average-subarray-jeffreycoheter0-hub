/**
 * Find the maximum average value of a contiguous subarray of length k
 * 
 * Time Complexity: 
 * Space Complexity:
 * 
 * @param {number[]} nums - An integer array consisting of n elements
 * @param {number} k - The length of the contiguous subarray
 * @return {number} - The maximum average value
 */
function findMaxAverage(nums, k) {
    // TODO: Implement your solution here
    let maxAverage = -Infinity;

    // you will need to sum the first 'window'
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // you can use the first sum, average it, and compare it to max
    maxAverage = sum / k

    // create the sums, with 'sliding window' effect, using one loop
    for (let i = 0; i < nums.length - k; i++) {
        sum -= nums[i]
        sum += nums[i + k]
        maxAverage = Math.max(maxAverage, sum / k)
    }
    return maxAverage
}

module.exports = findMaxAverage;

