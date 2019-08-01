/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */
const reverseList = head => {
    let next = null
    let prev = null
    while(head) {
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}
const isPalindrome = function(head) {
    if(!head || !head.next) return true;
        let slow = head;
        let fast = head;
        //Find Middle Of Linked List
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //Reverse From Middle Of List to End of List
        slow.next = reverseList(slow.next);
        slow = slow.next;
        while(slow) {
            if(head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
};
