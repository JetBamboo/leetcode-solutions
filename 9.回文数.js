/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 负数不是回文数
    if (x < 0) return false;

    // 个位数都是回文数
    if (x < 10) return true;

    // 个位为0的数字不可能是回文数（除了0本身，但0已经被上面的条件覆盖）
    if (x % 10 === 0) return false;

    // 其他情况继续执行回文数检查逻辑
    const str = String(x);
    for(let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }        
    }
    return true;
};

// var isPalindrome = function(x) {
//     const str = String(x);

//     return str === [...str].reverse().join('')
// };

// @lc code=end