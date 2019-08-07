/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let aLength = 0
    let bLength = 0
    let aHead = headA
    let bHead = headB

    while(headA) {
        headA = headA.next
        aLength++
    }
    while(headB) {
        headB = headB.next
        bLength++
    }

    let diff = Math.abs(bLength - aLength);

    if(aLength > bLength) {
        while(diff > 0){
            diff--
            aHead = aHead.next
        }
    }

    if(aLength < bLength) {
        while(diff > 0){
            diff--
            bHead = bHead.next
        }
    }

    while(aHead && bHead){
        if(aHead === bHead) { return aHead }
        aHead = aHead.next
        bHead = bHead.next
    }
};
