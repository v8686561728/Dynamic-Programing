//[10,20,50,20,30]

const jump=(arr)=>{
    let dpr=Array(arr.length).fill(-1)
    return dpf(arr,arr.length-1,dpr)
}

const dpf=(arr,n,dpr)=>{
if(n==0) return 0
if(dpr[n]!=-1) dpr[n]
let first
let second = Number.MAX_SAFE_INTEGER

first=dpf(arr,n-1,dpr)+Math.abs(arr[n]-arr[n-1])
if(n>1) second=dpf(arr,n-2,dpr)+Math.abs(arr[n]-arr[n-2])
dpr[n]= Math.min(first,second)
return dpr[n]
}

console.log(jump([10,20,50,50]))