// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Time O(N) | Space O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) 
{
    const numFrequencies = new Map();
    const numByFrequencies = new Array(nums.length + 1).fill(0);
    const result = [];

    // for each number, count the frequency
    nums.forEach(num => 
    {
        const val = (numFrequencies.get(num) || 0);// get how many frequencies we have for this number
        numFrequencies.set(num, val + 1);  // increment frequency for this number
    });
    //numFrequencies [1,3],[2,2],[3,1]

    // flip the map into an array by Frequency buckets
    for ( let [key, value] of numFrequencies ) 
    {
        const prev = numByFrequencies[value] || [];
        prev.push(key);
        numByFrequencies[value] = prev;
        // console.log( value +' '+numByFrequencies[value]);

    }
    //numByFrequencies [3,1],[2,2],[1,3]

    // iterate backwards through the array, adding the numbers to the answer array up to k
    numByFrequencies.reverse();
    // console.log('vals '+numByFrequencies);
    for (let frequency of numByFrequencies) 
    {
        if (k < 1) break;
        if (frequency) 
        {
            for (let occurrence of frequency) 
            {
                result.push(occurrence);
                k--;
            }
        }
    }

    return result;
};

// Example 1:
let input1 = [1,1,1,2,2,3]
let input2 = 2
let output = [1,2]

console.log(...topKFrequent(input1,input2).toString());
console.log(assert(topKFrequent(input1,input2) == output));
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
input1 = [1]
input2 = 1
output = [1]


console.log(...topKFrequent(input1,input2));
console.log(assert(topKFrequent(input1,input2) == output));
// Input: nums = [1], k = 1
// Output: [1]


function assert(condition) {
    if (!condition) {
        return "Assertion Failed";
    } else{
        return "Assertion Passed"
    }
}



/** Method 2
 * Set - Frequency Counter | Using sort
 * Time O(NlogN) | Space O(N)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequency = {}
    for( let i = 0; i < nums.length; i++){
        if(frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }
    let result = Object.keys(frequency).map((key) => [Number(key), frequency[key]]);
    let sortedResult = result.sort((a,b) => {
        return b[1]-a[1]
    })
    let output = []
    for ( let i = 0; i < k; i++){
        output.push(sortedResult[i][0])
    }
    return output;
};