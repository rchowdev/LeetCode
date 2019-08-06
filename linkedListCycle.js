/*
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    if(!head || !head.next) return false

    let slow = fast = head
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
            return true
        }
    }
    return false
};
