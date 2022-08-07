var maxProfit = function(prices) {
    return max(prices)
};
let result=0
let max=(prices)=>{
    
   let mini=prices[0]
   let profit=0
   for(let i=1;i<prices.length;i++){
    let res=prices[i]-mini
  if(res>0){
    profit+=res
  }
    mini=prices[i]
   }
   return profit
}

console.log(max([1,2,3,4,5]))