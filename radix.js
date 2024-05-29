function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}

function radixSort(nums) {
  const mostD = mostDigits(nums);

  for (let i = 0; i < mostD; i++) {
    const numStorage = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      let num = nums[j];
      let digit = getDigit(num, i);
      numStorage[digit].push(num);
    }
    nums = [].concat(...numStorage);
  }
  return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
