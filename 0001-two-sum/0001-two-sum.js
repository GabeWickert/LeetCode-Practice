/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let numberMap = {};
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (numberMap.hasOwnProperty(compliment)) {
            return [numberMap[compliment], i];
        }
        numberMap[nums[i]] = i;
    }
}