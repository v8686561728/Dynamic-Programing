
 var fib = function(n) {
 
    let dp=Array(n+1).fill(-1)
    return dpf(n,dp)
       
   };
   
   let dpf = (n,dp)=>{
        if(dp[n]!=-1) return dp[n]
     if(n<=1) return n
      
        dp[n]= dpf(n-1,dp)+dpf(n-2,dp)
       return dp[n]
   }

   console.log(fib(10))