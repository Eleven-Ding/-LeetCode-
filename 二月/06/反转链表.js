//定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

var reverseList = function (head) {
  let p = null;
  let cur = head;
  while (cur) {
    //保存next
    let temp = cur.next;

    cur.next = p;
    p = cur;

    cur = temp;
  }
  return p;
};
