//编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 输入：[1, 2, 3, 3, 2, 1]
//输出：[1, 2, 3]

var removeDuplicateNodes = function (head) {
  const newHead = head;
  const set = new Set();
  set.add(head.val);
  const temp = head;

  while (head.next) {
    temp = head.next;
    if (set.has(p.val)) {
      head.next = temp.next;
    } else {
      set.add(p.val);
      head = head.next;
    }
  }

  return newHead;
};
