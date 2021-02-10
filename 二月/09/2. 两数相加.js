//给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

//输入：l1 = [2,4,3], l2 = [5,6,4]
//输出：[7,0,8]
//解释：342 + 465 = 807.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var addTwoNumbers = function (l1, l2) {
  //先对l1 l2进行一个遍历 然后再创建一个链表吧？？
  let arr1 = getNum(l1),
    arr2 = getNum(l2);
    // let num1 = 
  //现在num是数组
  //创建一个链表
  let num = [];
  return createList(num);

  function createList(arr) {
    let head = null;

    while (arr.length) {
      const val = arr.shift();
      let node = new ListNode(val);
      node.next = head;
      head = node;
    }
    return head;
  }

  function getNum(root) {
    let arr = [];
    while (root) {
      arr.push(root.val);
      root = root.next;
    }
  }

  function getNumber(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
      sum = sum*10 +arr[i]
    }
    return sum
  }
};
