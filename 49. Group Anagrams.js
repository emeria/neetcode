// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) =>
{
    if(!strs.length) { return [[""]]}
    counts = new Map()
    
    //group words
    for(const word of strs)
    {
        /*
        Group our words by their hash value
        */

        //build a hash for each word
        //we can use this to check if we have another anagram group matching this hash
        let hash = getHash(word);

        //get the values group for this hash (if it exists)
        let values = counts.get(hash) || [];
        
        //add our word to this anagram match grouping
        values.push(word);

        //update our counts map to include this updated grouping
        counts.set(hash, values); 
    }

    return [ ...counts.values() ];
};

//build a hash for each word
const getHash = (word) => 
{
    const frequency = new Array(26).fill(0); // 26 possible letters in the alphabet (lowercase only)

    for (const letter of word) 
    { // each letter in the word
        const charCode = getCode(letter); //get the char code for the letter ()
        frequency[charCode]++; //increment this value to track letter frequency
    }

    return buildHash(frequency)
}

// get the char code for the letter and subtract 'a' from it for the freq array position (https://en.wikipedia.org/wiki/List_of_Unicode_characters)
const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0); 

const buildHash = (frequency) => frequency.toString();



// Example 1:
var input = ["eat","tea","tan","ate","nat","bat"];
var output = new Map([["bat"],["nat","tan"],["ate","eat","tea"]]);
console.log(assert(mapsAreEqual(groupAnagrams(input),output)));
// // Input: strs = ["eat","tea","tan","ate","nat","bat"]
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// // Example 2:
// input = [""]
// output = [[""]]
// console.log(assert(groupAnagrams(input).toString()==output.toString()));
// // Input: strs = [""]
// // Output: [[""]]
// // Example 3:
// input = ["a"]
// output = [["a"]] 
// console.log(assert(groupAnagrams(input).toString()==output.toString()));
// // Input: strs = ["a"]
// // Output: [["a"]] 



function assert(condition) {
    if (!condition) {
        return "Assertion Failed";
    } else{
        return "Assertion Passed"
    }
}

//my assertion comparison doesnt work for this
function mapsAreEqual(map1, map2) {
    // Check if the maps are the same size
    if (map1.size !== map2.size) {
        return false;
    }

    // Check if all key-value pairs of map1 exist in map2
    for (const [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }

    return true;
}

///https://leetcode.com/problems/group-anagrams/discuss/2640910/JS-oror-With-explanation-oror-Easy-to-understand
// /** another solution **/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function(strs) {
    let map = {};
    let ans = [];
    
    (strs || []).forEach((str) => {
        let temp = str.split("").sort().join(""); //split, sort, join to get the hash
        if(!map[temp]){ //check if the hash exists
            map[temp] = [];
        }
        map[temp].push(str); //add our word for this hash
    })

    //for each hash key, push the values to our ans array
    Object.keys(map).forEach((key) => {
        ans.push(map[key]);
    })
    return ans;
};

groupAnagrams2(input)