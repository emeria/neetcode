// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 //numset at its largest is O(n) space complexity
 // time complexity is O(n) because we are iterating through the array once
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums, numsSet = new Set()) => //O(n)
{
    for (let num of nums) //O(n)
    {
        if (numsSet.has(num)) return true; //O(1)
        numsSet.add(num);
    }

    return false;
};


// Example 1:
console.log(assert(containsDuplicate([1,2,3,1])==true));
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
console.log(assert(containsDuplicate([1,2,3,4])==false));
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
console.log(assert(containsDuplicate([1,1,1,3,3,4,3,2,4,2])==true));
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 


function assert(condition) {
    if (!condition) {
        return "Assertion Failed";
    } else{
        return "Assertion Passed"
    }
}