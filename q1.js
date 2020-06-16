// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const result = [];

  for (let i = 0; i < nums.length && !(result.length); i++) {
    const currIterItem = nums[i];
    const difference = target - currIterItem;
    const secondItemPos = nums.indexOf(difference);
    if (secondItemPos >= 1) {
      result.push(currIterItem, nums[secondItemPos]);
      return result;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
