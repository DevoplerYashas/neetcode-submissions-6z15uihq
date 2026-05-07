/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0;
        let cur = head;

        while (cur) {
            cur = cur.next;
            len++;
        }

        const pos = len - n;

        if (pos === 0) {
            return head.next;
        }

        cur = head;
        for (let i = 0; i < pos - 1; i++) {
            // if () {
                
            // }
            cur = cur.next;
        }

        cur.next = cur.next.next;

        return head;
    }
}
