/*Given an array of integers nums 
and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].*/
const twoSum = (nums, target) => {
  const map = new Map(); // stores number -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i]; // found the two numbers
    }
    map.set(nums[i], i); // store number and its index
  }
};