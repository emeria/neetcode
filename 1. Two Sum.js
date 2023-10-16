/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) 
{
    const numIndices = {};
    
    for (let num in nums) 
    {
        const complement = target - nums[num]; //find our complement for the target
        if (numIndices[complement] !== undefined) //if we have a complement in our numIndices object
        {
            return [numIndices[complement], num]; //return the complement and the current num
        }
        numIndices[nums[num]] = num; //otherwise, add the current num to our numIndices object
    }
};


// Example 1:
console.log(assert(twoSum([2,7,11,15],9).toString()==[0,1].toString()));
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
console.log(assert(twoSum([3,2,4],6).toString()==[1,2].toString()));
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
console.log(assert(twoSum([3,3],6).toString()==[0,1].toString()));
// Input: nums = [3,3], target = 6
// Output: [0,1]
 



function assert(condition) {
    if (!condition) {
        return "Assertion Failed";
    } else{
        return "Assertion Passed"
    }
}