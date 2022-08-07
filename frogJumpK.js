//[10,20,50,20,30]

const jump = (arr, k) => {
  return dpf(arr, k);
};

const dpf = (arr, k) => {
  let dpr = Array(arr.length).fill(-1);
  dpr[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    let minjump = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= k; j++) {
      if (i - j >= 0) {
        let jump = dpr[i - j] + Math.abs(arr[i] - arr[i - j]);
        minjump = Math.min(jump, minjump);
      }
    }
    dpr[i] = minjump;
  }

  return dpr[arr.length - 1];
};

console.log(jump([10, 20, 50, 50, 10], 3));
