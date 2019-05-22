/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    while(head !== null){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
    // return recurseReverseList(head, null)

};

// var recurseReverseList = function(head, prev) {
//     if(head === null){
//         return prev
//     }

//     let next = head.next
//     head.next = prev
//     prev = head
//     head = next

//     return recurseReverseList(head, prev)
// }
