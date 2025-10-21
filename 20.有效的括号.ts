/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

class Stack {
    #items: string[]
    constructor () {
        this.#items = []
    }
    size () {
        return this.#items.length;
    }
    isEmpty () {
        return this.size() === 0;
    }
    push (item: string) {
        return this.#items.push(item)
    }
    pop () {
        return this.#items.pop()
    }
    peek () {
        return this.#items.at(-1);
    }
}

// @lc code=start
export default function isValid(s: string): boolean {
    const stack = new Stack()
    const map: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    /**
     * 思路：遇到左括号就入栈
     * 遇到右括号判断栈顶是不是对应的左括号
     * 如果是就出栈，如果不是就返回false
     * 循环结束栈为空代表检测完成返回true
     */
    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.peek() !== char) {
                return false;
            } 
            stack.pop()
        }
    }

    return stack.isEmpty();
};
// @lc code=end

