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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const res = {val: -1, next: null};

        for (let i = 0; i < lists.length; i++) {
            const dummy = {val: -1, next: null};
            let tmp = dummy;
            let list1 = res.next;
            let list2 = lists[i];
            
            while (list1 && list2) {
                if (list1.val < list2.val) {
                    tmp.next = list1;
                    list1 = list1.next;
                } else {
                    tmp.next = list2;
                    list2 = list2.next;
                }

                tmp = tmp.next;
            }

            if (list1) {
                tmp.next = list1;
            } else if (list2) {
                tmp.next = list2;
            }

            res.next = dummy.next;
        }

        return res.next;
    }
}
