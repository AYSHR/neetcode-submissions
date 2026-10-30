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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let uniqueRoot = new Set();
        while ( head !== null ) {
            if ( uniqueRoot.has(head) ) {
                return true;
            } else {
                uniqueRoot.add(head);
                head = head.next;
            }
        }
        return false;
    }
}
