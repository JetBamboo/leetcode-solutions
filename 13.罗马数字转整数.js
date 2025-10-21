/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = map[s[i]];
        const next = map[s[i + 1]];
        // 当小的数在大数前面，小的数会变成负数。比如：IV=-1+5=4
        result += next && cur < next ? -cur : cur;
    }
    return result;
};
// @lc code=end

