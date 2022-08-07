const fb=(n)=>{
    if(n<=1) return n
    let first=0
    let second=1
    let result = 0

    for(let i=2;i<=n;i++){
        result=first+second
        first=second
        second=result
    }
    return result
}
console.log(fb(10))