//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
var removeNthFromEnd = function (head, n) {
  //快慢指针
  const newHead = new ListNode(0);
  newHead.next = head;
  let pre = newHead,
    end = newHead;
  //先找到节点
  while (n--) {
    end = end.next;
  }
  //然后pre再动
  while (end && end.next) {
    pre = pre.next;
    end = end.next;
  }

  //现在pre下一个就是要删除的那个节点 需要获取前一个结点
  pre.next = pre.next.next;

  return newHead.next;
};
