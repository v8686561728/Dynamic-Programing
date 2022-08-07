// you are a professional robber planning to rob houses along a street. Each house has a certain amount 
// of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses 
// have security systems connected and it will automatically contact the police if two adjacent houses 
// were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.
// Input: nums = [1,2,3,1]
// Output: 4

var rob = function(nums) {
    let first=nums[0]
       let second=0
       let result=0
       for(let j=1;j<nums.length;j++){
            let pick=nums[j]
            if(j>1)pick+=second
            let unpick=first
           result= Math.max(pick,unpick)
           second=first
           first=result
       }
      
       return Math.max(first,second)
   };