/**
 * 编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。
 * 如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。
 * 分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。
 */

var partition = function (head, x) {
  let left = new ListNode(),
    right = new ListNode();

  while (head) {
    if (head.val < x) {
      left.next = head;
      left = head;
    } else {
      right.next = head;
      right = head;
    }

    head = head.next;
  }

  left.next = right.next;
  right.next = null;
  return left.next;
};
