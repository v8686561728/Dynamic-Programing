// let ratings = [1,0,4, 3, 5, 4, 3];
// let temp = 1;
// let res = 0;
// const count = () => {
//   for (let i = 1; i <= ratings.length; i++) {
//     if (ratings[i] == ratings[i - 1] - 1) {
//       temp++;
//     } else {
//       res += (temp * (temp + 1)) / 2;
//       temp = 1;
//     }
//   }
//   console.log(res);
//   return res;
// };
// count();

const strength = (str) => {
  let temp = [];
  let res = 0;
  let dp=new Map()
//   for (let i = str.length-1; i >=0 ; i--) {
//     for (let j = i; j >=0 ; j--) {
     
//       if (temp.indexOf(str[j]) > -1) {
//         res += temp.length;
//       } else {
//           temp.push(str[j]);
//           res += temp.length;
//       }
//     }
//     temp=[]
//   }
for (let i = str.length-1; i >=0 ; i--) {
    for (let j = i; j >=0 ; j--) {
     
      if (temp.indexOf(str[j]) > -1) {
        res += temp.length;
      } else {
          temp.push(str[j]);
          res += temp.length;
      }
    }
    temp=[]
  }
  console.log(res)
};

strength('venu')

