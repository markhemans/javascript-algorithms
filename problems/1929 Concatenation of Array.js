/**
 * 
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    
    var ans = [];
    var i = 0;
    while (i<nums.length)
    {
        ans[i] = nums[i];
        ans[i+nums.length] = nums[i];
        i++;
    }
    
    return ans;
    
};

// problem i had was the size of length -1