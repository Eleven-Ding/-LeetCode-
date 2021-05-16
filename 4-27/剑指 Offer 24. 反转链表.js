//定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */
 var reverseList = function(head) {
    if(!head){
        return head
    }
    const p = null;
    while(head){
        //暂存head.next
        const temp = head.next;
        head.next  = p;
        p = head;
        head = temp
    }
    return p
};