/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

class Stack {
    #db: string[]
    constructor () {
        this.#db = []
    }
    size () {
        return this.#db.length;
    }
    isEmpty () {
        return this.size() === 0;
    }
    push (item: string) {
        this.#db.push(item)
    }
    pop () {
        if (this.isEmpty()) {
            return null;
        }
        return this.#db.pop()
    }
    peek () {
        if (this.isEmpty()) {
            return null;
        }
        return this.#db[this.size() - 1]
    }
}

// @lc code=start
export default function isValid(s: string): boolean {
    const stack = new Stack()
    const left = ['(', '{', '['];
    const right = [')', '}', ']'];

    /**
     * 思路：遇到左括号就入栈
     * 遇到右括号判断栈顶是不是对应的左括号
     * 如果是就出栈，如果不是就返回false
     * 循环结束栈为空代表检测完成返回true
     */
    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            stack.push(s[i]);
        } else {
            const type = right.indexOf(s[i]);
            if (stack.peek() !== left[type]) {
                return false;
            } 
            stack.pop()
        }
    }

    return stack.isEmpty();
};
// @lc code=end

