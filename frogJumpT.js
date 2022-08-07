//[10,20,50,20,30]

const jump=(arr)=>{
    let dpr=Array(arr.length).fill(-1)
    dpr[0]=0
    return dpf(arr,arr.length-1,dpr)
}

const dpf=(arr)=>{

let first
let second = Number.MAX_SAFE_INTEGER
let cache1=0
let cache2=0
let result=0
for(let i=1;i<arr.length;i++){
    first=cache1+Math.abs(arr[i]-arr[i-1])
    if(i>1) second=cache2+Math.abs(arr[i]-arr[i-2])
    result= Math.min(first,second)
    cache1=result
    cache2=cache1
    
}

return result
}

console.log(jump([10,20,50,50]))