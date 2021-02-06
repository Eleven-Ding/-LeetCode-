//给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val == val) {
    return head.next;
  }
  /**
   * 假设【1，2，3】，目标值是2
   * 当前head是1.
   * 本来head.next是2,但是调用deletenode函数的时候刚刚好2==2,把2（head）的下一个值3的指针返回回去
   * 所以head.next = 3
   * 1->3
   *
   */
  head.next = deleteNode(head.next, val);
  return head;
};
