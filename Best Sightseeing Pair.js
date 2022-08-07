
// let max=(values,n,result,dp)=>{
//     if(n>-1 && dp[n]!=-1)return dp[n]
//     if(n<0){
//         if(result.length===2){
//             let i=result[1]
//             let j= result[0]
//             dp[n]= values[i] + values[j] + i - j
//             return dp[n]
//         }
         
//          return 0
//     }
    
//     result.push(n)
//     let pick=max(values,n-1,result,dp)
//     result.pop()
//     let unpick = max(values,n-1,result,dp)

//     return Math.max(pick,unpick)
     
// }
// let data=[8,1,5,2,6]
// let dp=Array(data.length).fill(-1)
// console.log(max(data,data.length-1,[],dp))



// let result=0
// let max2=(values,n)=>{
// if(n<0){
//     return
// }
//     max2(values,n-1)
//     for(let i=0;i<values.length;i++){
//         if(i!=n){
//             console.log(i,' ',n)
//         result=Math.max(result,values[i]+values[n]-Math.abs(i-n))
//         }
//     }
   
// return result
// }
// let data=[8,1,5,2,6]
// console.log(max2(data,data.length-1))

let max3=(values)=>{
    let max = values[0] + 0
    let result = -Infinity
    for (let i = 1; i < values.length; i++) {
      result = Math.max(result, max + values[i] - i)
      max = Math.max(values[i] + i, max)
    }
    return result
}


let data=[8,1,5,2,6]
console.log(max3(data,data.length-1,[],0))