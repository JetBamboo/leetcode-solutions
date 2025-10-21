/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
interface ListNode {
    val: number
    next: ListNode | null
}

function convertListNodeToNum(list: ListNode | null):number {
    if (list === null) {
        return 0;
    }
    const currentValue = list.val;
    const next = list.next;

    if (next === null) {
        return currentValue;
    }
    return Number(`${convertListNodeToNum(list.next)}${currentValue}`);
}

function convertNumToListNode(input: number): ListNode {
    const array = Array.from(String(input), Number).reverse();
    const node = {} as ListNode;
    let cur = node;

    for (let i = 0; i < array.length; i++) {
        cur.val = array[i];
        if (i + 1 < array.length) {
            const next = {} as ListNode;
            cur.next = next;
            cur = next;
        }
    }

    return node;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const n1 = convertListNodeToNum(l1);
    const n2 = convertListNodeToNum(l2);

    return convertNumToListNode(n1 + n2);
};
// @lc code=end

