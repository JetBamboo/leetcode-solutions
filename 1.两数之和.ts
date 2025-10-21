/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const result = target - nums[i];
        if (map.has(result)) {
            return [map.get(result), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [0, 0]
};
// @lc code=end

