let arr=[5, 5, 10, 100, 10, 5]

const sum=(i)=>{
if(i>arr.length-1) return 0

    let a=arr[i]+sum(i+2)
    let b=0+sum(i+1)

    return Math.max(a,b)
}
console.log(sum(0))