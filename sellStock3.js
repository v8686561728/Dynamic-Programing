let sell=(p,n)=>{
    if(n===p.length-1) return 0

    let pick = -p[n]+sell(p,n+1)
    let unpic=0+sell(p,n+1)

    return Math.max(pick,unpic)
}

console.log(sell([1,2,3,4,5],0))