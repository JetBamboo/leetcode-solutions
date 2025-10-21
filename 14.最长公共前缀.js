/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 分治法/二分法
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }

    // 分治
    var devideSolve = (start, end) => {
        // 边界相同，代表是同一个字符串，那他的共同前缀当然就是自己
        if (start === end) {
            return strs[start];
        }
        // 双方比较，找出共同前缀
        const mid = Math.floor((start + end) / 2);
        const left = devideSolve(start, mid);
        const right = devideSolve(mid + 1, end);
        const minLenth = Math.min(left.length, right.length);

        // 检测哪一位不相同，则返回前面那一串共同前缀
        for (let i = 0; i < minLenth; i++) {
            if (left[i] !== right[i]) {
                return left.slice(0, i);
            }
        }
        // 通过了检测，那至少表示在minLength范围内他们是相同的
        return left.slice(0, minLenth);
    }

    return devideSolve(0, strs.length - 1)
};


// 裁剪prefix法
// var longestCommonPrefix = function(strs) {
//     let prefix = strs[0] || '';
//     for (let i = 1; i < strs.length; i++) {
//         // 遍历字符串，发现有其中一个字符串prefix对不上
//         // 则开始裁剪prefix让其适应该字符串直至变为空字符串
//         if (strs[i].indexOf(prefix) !== 0) {
//             while(prefix) {
//                 prefix = prefix.slice(0, -1);
//                 if (strs[i].indexOf(prefix) === 0) {
//                     break;
//                 }
//             }
//         }
//         // prefix为空，代表有两个字符串完全不同，没必要继续比较下去了
//         if (!prefix) {
//             break;
//         }
//     }
//     return prefix
// };

// 逐字比较法
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return ''
//     }
//     // 从所有字符串的第一位开始，依次比较，出现不同时返回上一个相同的字符串
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[0][i] !== strs[j][i]) {
//                 return strs[0].slice(0, i);
//             }
//         }
//     }
//     // 所有字符串都是完全一致
//     return strs[0]
// };
// @lc code=end

