// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

const canJump=(nums,i)=>{
  if(i==nums.length-1) return true
  
  for(let j=i;j<=nums[i];j++){
   if (canJump(nums,j)) return true
  }
  canJump(nums,i+1)
  return false

}

console.log(canJump( [2,3,1,1,4],0))