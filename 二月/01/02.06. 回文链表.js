//编写一个函数，检查输入的链表是否是回文的。

var isPalindrome = function (head) {
  let str = [];

  while (head) {
    str.push(head.val);
    head = head.next;
  }
  return [...str].reverse().join() === str.join();
};

console.log(isPalindrome());
