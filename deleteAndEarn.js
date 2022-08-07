// You are given an integer array nums. You want to maximize the number of points you get by 
// performing the following operation any number of times:
// Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element 
// equal to nums[i] - 1 and every element equal to nums[i] + 1.
// Return the maximum number of points you can earn by applying the above operation some number of times.

const earn=(nums)=>{
if(nums.length===1) return nums[0]
    let fequency=new Map()
    let noduplicates=[]
    nums.forEach(val => {
        if(noduplicates.indexOf(val)>-1){}else{noduplicates.push(val)}
        if(fequency.has(val)){
            fequency.set(val,fequency.get(val)+1)
        }else{
            fequency.set(val,1)
        }
    });
    noduplicates.sort((a,b)=>a-b)
    let first=noduplicates[0]*fequency.get(noduplicates[0])
    let second=0
    let result=0
    for(let i=1;i<noduplicates.length;i++){
        let current=noduplicates[i]
        let max
         if(noduplicates[i-1]+1===current){
            if(i>1){
            max=second+(fequency.get(current)*current)
            }else{
                max=(fequency.get(current)*current)
            }
         }else{
            max=first+(fequency.get(current)*current)
         }
         result=Math.max(first,max)
         second=first
         first=result
    }
console.log(result,fequency,noduplicates)
    return result
}



earn([1])