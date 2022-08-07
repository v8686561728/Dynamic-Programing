// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

const jump=(nums,i)=>{
 if(i>=nums.length-1) return 0
  
 let minJum=Number.MAX_SAFE_INTEGER
   
    for(let j=i+1;j<=i+nums[i];j++){
        minJum=Math.min(minJum,1+jump(nums,j))
    }

    return minJum
}

console.log(jump([2,3,1,1,4],0))