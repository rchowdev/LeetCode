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
var sortList = function(head) {
  if (!head || !head.next) return head;

  let midNode = getMidNode(head);
  let h2 = midNode.next;

  midNode.next = null;

  let l1Sorted = sortList(head);
  let l2Sorted = sortList(h2);

  return merge(l1Sorted, l2Sorted);
};

function merge(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
}

function getMidNode(head) {
  let mid = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    mid = mid.next;
    fast = fast.next.next;
  }
  return mid;
}
