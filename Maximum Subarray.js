/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function(nums) {
    let num2=nums.map(a=>-1*a)
    console.log(sum(nums),maxSubArray(num2))
};

const maxSubArray = function(nums) {
   var maxint = Math.pow(2, 53)
    var max_sum = -maxint
    let t_sum=0
    nums.forEach((n)=>{
     
        
          t_sum += n
        if (max_sum < t_sum)
            max_sum = t_sum
 
        if (t_sum < 0)
            t_sum = 0
    })
    return max_sum
};
const sum=(num)=>{
    let t=0
    num.forEach(a=>t+=a)
    return t
}
console.log(maxSubarraySumCircular([1,-2,3,-2]))