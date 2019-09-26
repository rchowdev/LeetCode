/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let prev = new ListNode(null);
  prev.next = head;
  let fast = prev;
  let temp = prev;

  for (let i = 0; i < n + 1; i++) fast = fast.next;

  while (fast) {
    temp = temp.next;
    fast = fast.next;
  }
  temp.next = temp.next.next;
  return prev.next;
};
