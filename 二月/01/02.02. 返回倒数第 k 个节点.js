//实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//采用快慢指针的方法
var kthToLast = function (head, k) {
  let first = head,
    end = head;
  while (k--) {
    end = end.next;
  }
  while (end) {
    first = first.next;
    end = end.next;
  }

  return pre.val;
};
