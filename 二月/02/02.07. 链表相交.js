//给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，
//而不是基于节点的值。换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），
//则这两个链表相交。

/**
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

//对第一个链表遍历  存入
var getIntersectionNode = function (headA, headB) {
  const set = new Set();
  let node = null;
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) {
      node = headB;
      break;
    }
  }
  if (node === null) {
    return null;
  } else {
    return "Reference of the node with value = " + node.val;
  }
};
