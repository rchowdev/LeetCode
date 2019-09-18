/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return null;

  let oddHead = head,
    oddTail = head,
    evenHead = null,
    evenTail = null;

  let isOdd = true;

  if (head.next) {
    evenHead = head.next;
    evenTail = head.next;
    head = head.next.next;
  } else {
    return head;
  }

  while (head) {
    if (isOdd) {
      oddTail.next = head;
      oddTail = oddTail.next;
    } else {
      evenTail.next = head;
      evenTail = evenTail.next;
    }
    isOdd = !isOdd;
    head = head.next;
  }

  oddTail.next = null;
  evenTail.next = null;

  oddTail.next = evenHead;
  return oddHead;
};
