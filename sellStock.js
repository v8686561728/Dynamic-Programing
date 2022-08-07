var maxProfit = function(prices) {
    return max(prices,prices.length-1)
};
let result=0
let max=(p,i)=>{
    
   let mini=p[0]
   let profit=0
   for(let i=1;i<prices.length;i++){
    let res=prices[i]-mini
    profit=Math.max(profit,res)
    mini=Math.min(mini,prices[i])
   }
   return profit
}

console.log(maxProfit([7,1,5,3,6,4]))