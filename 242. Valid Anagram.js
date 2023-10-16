var isAnagram = (s, t) => 
{
    if (s.length != t.length) 
    {
        return false;
    }
    
    const letterFrequency = {};
    
    for (let letter of s) 
    {
        letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
    }
    
    for (let letter of t) 
    {
        if (!letterFrequency[letter] || letterFrequency[letter] <= 0) 
        {
            return false;
        }
        letterFrequency[letter]--;
    }
    
    return true;
};

console.log(assert(isAnagram("rat","cat")==false));


function assert(condition) {
    if (!condition) {
        return "Assertion Failed";
    } else{
        return "Assertion Passed"
    }
}