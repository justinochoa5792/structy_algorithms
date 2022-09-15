// max value
// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// solution 1
const maxValue = (nums) => {
  return Math.max(...nums);
};

module.exports = {
  maxValue,
};
maxValue([4, 7, 2, 8, 10, 9]);

// solution 2
const maxValue = (nums) => {
  let max = -100;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};

module.exports = {
  maxValue,
};
maxValue([4, 7, 2, 8, 10, 9]);
